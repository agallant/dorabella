/*jslint sloppy:true */
/*globals freedom */

// Create a logger for this module.
// TODO: allow loggers to be made synchronously.
var logger;
freedom.core().getLogger('[Chat Backend]').then(function (log) {
  logger = log;
});

var Chat = function (dispatchEvent) {
  this.dispatchEvent = dispatchEvent;

  this.userList = {};  // Keep track of the roster
  this.clientList = {};
  this.keyList = {};
  this.myClientState = null;
  this.social = freedom.socialprovider();
  this.pgp = freedom.pgpprovider();
  this.publicKey = null;

  this.boot();
};

/**
 * sent messages should be encrypted and forwarded to the Social provider.
 **/
Chat.prototype.send = function (to, message) {
  this.pgp.signEncrypt(str2ab(message), this.keyList[to]).then(
    this.pgp.armor).then(
      function (ciphertext) {
        return this.social.sendMessage(to, ciphertext);
      }.bind(this)).bind(this);
};

Chat.prototype.boot = function () {
  this.social.login({
    agent: 'chatdemo',
    version: '0.1',
    url: '',
    interactive: true,
    rememberLogin: false
  }).then(
    function (ret) {
      // TODO custom PGP user ids w/persistence along w/key
      //this.pgp.setup('', ret.userId + ' <DorabellaUser@freedomjs.org>').then(
      this.pgp.setup('', '<DorabellaUser@freedomjs.org>').then(
        function () {
          this.pgp.exportKey().then(
            function (publicKey) {
              this.publicKey = publicKey;
              this.dispatchEvent('export-publicKey', publicKey.key);
              // Explicitly send to current clients
              for (var client in this.clientList) {
                this.social.sendMessage(client, this.publicKey.key);
              }
              this.myClientState = ret;
              logger.log('onLogin', this.myClientState);
              if (ret.status === this.social.STATUS.ONLINE) {
                this.dispatchEvent('recv-uid', ret.clientId);
                this.dispatchEvent('recv-status', "online");
              } else {
                this.dispatchEvent('recv-status', "offline");
              }
              this.updateBuddyList();
            }.bind(this));
        }.bind(this));
    }.bind(this), function (err) {
      logger.log('Log In Failed', err);
      this.dispatchEvent('recv-err', err);
    }.bind(this));

  /**
   * on an 'onMessage' event from the Social provider
   * Check if it's a public key, else decrypt and forward it to the outer page
   */
  this.social.on(
    'onMessage',
    function (data) {
      logger.info('Message Received', data);
      if (data.message.substring(0, 36) ===
          '-----BEGIN PGP PUBLIC KEY BLOCK-----') {
        this.keyList[data.from.userId] = data.message;
      } else if (data.message.substring(0, 27) ===
                 '-----BEGIN PGP MESSAGE-----') {
        this.pgp.dearmor(data.message).then(
          function (buf) {
            return this.pgp.verifyDecrypt(
              buf, this.keyList[data.from.userId]);
          }.bind(this)).then(
            function (decryptResults) {
              if (decryptResults.signedBy[0] !==
                  //data.from.userId +  // TODO: persist userId with key
                  '<DorabellaUser@freedomjs.org>') {
                data.message = 'BAD SIGNATURE, discarding';
              } else {
                data.message = ab2str(decryptResults.data);
              }
              this.dispatchEvent('recv-message', data);
            }.bind(this));
      } else {
        data.message = 'MESSAGE NOT ENCRYPTED, discarding';
        this.dispatchEvent('recv-message', data);
      }
    }.bind(this));

  /**
   * On user profile changes, let's keep track of them
   **/
  this.social.on('onUserProfile',
                 function (data) {
                   // Save the user
                   this.userList[data.userId] = data;
                   this.updateBuddyList();
                 }.bind(this));

  /**
   * On newly online or offline clients, let's update the roster
   **/
  this.social.on(
    'onClientState',
    function (data) {
      logger.debug('Roster Change', data);
      if (data.status === this.social.STATUS.OFFLINE) {
        if (this.clientList.hasOwnProperty(data.clientId)) {
          delete this.clientList[data.clientId];
        }
      } else {  //Only track non-offline clients
        this.clientList[data.clientId] = data;
        if (this.publicKey) {
          // Only send public key if it is initialized
          // (onClientState can happpen before boot finishes)
          this.social.sendMessage(data.userId, this.publicKey.key);
        }
      }
      //If mine, send to the page
      if (this.myClientState !== null &&
          data.clientId === this.myClientState.clientId) {
        if (data.status === this.social.STATUS.ONLINE) {
          this.dispatchEvent('recv-status', "online");
        } else {
          this.dispatchEvent('recv-status', "offline");
        }
      }
      this.updateBuddyList();
    }.bind(this));
};

Chat.prototype.updateBuddyList = function () {
  // Iterate over our roster and send over user profiles
  // where there is at least 1 client online
  var buddylist = {}, k, userId;
  for (k in this.clientList) {
    if (this.clientList.hasOwnProperty(k)) {
      userId = this.clientList[k].userId;
      if (this.userList[userId]) {
        buddylist[userId] = this.userList[userId];
      }
    }
  }
  this.dispatchEvent('recv-buddylist', buddylist);
};

// Utilities for crypto
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
  var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

freedom().providePromises(Chat);
