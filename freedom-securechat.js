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
  this.clientState = null;
  this.social = new freedom.socialprovider();
  this.pgp = new freedom.pgpprovider();
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

Chat.prototype.clearKeys = function () {
  this.pgp.clear();
};

Chat.prototype.boot = function () {
  // TODO persist w/custom PGP user id
  /*this.pgp.clear().then(
    function() {
    return this.social.login({
    agent: 'dorabella',
    version: '0.1',
    url: '',
    interactive: true,
    rememberLogin: false
    });
    }.bind(this))*/
  this.social.login({
    agent: 'dorabella',
    version: '0.1',
    url: '',
    interactive: true,
    rememberLogin: false
  }).then(
    function(ret) {
      console.log(ret);
      this.clientState = ret;
      return this.pgp.setup('',// ret.userId +
                            '<DorabellaUser@freedomjs.org>');
    }.bind(this))
    .then(this.pgp.exportKey)
    .then(
      function(publicKey) {
        this.publicKey = publicKey;
        this.dispatchEvent('export-publicKey', publicKey.key);
        // Explicitly send to current clients
        for (var client in this.clientList) {
          this.social.sendMessage(client, this.publicKey.key);
        }
        logger.log('onLogin', this.clientState);
        if (this.clientState.status === this.social.STATUS.ONLINE) {
          this.dispatchEvent('recv-uid', this.clientState.clientId);
          this.dispatchEvent('recv-status', "online");
        } else {
          this.dispatchEvent('recv-status', "offline");
        }
        this.updateBuddyList();
      }.bind(this)).catch(function(e) {
        if (e.message) {
          e = e.message;
        }
        logger.log('Log In Failed', e);
        this.dispatchEvent('recv-err', e);
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
  this.social.on(
    'onUserProfile',
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
      if (this.clientState !== null &&
          data.clientId === this.clientState.clientId) {
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
