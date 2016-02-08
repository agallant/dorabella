/*globals describe, beforeEach, require, expect, it*/
/*jslint indent:2*/

// Unit tests for freedom-securechat directly
// Tests both freedom API calls and internal methods
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('freedom-securechat', function () {

  var testUtil = require('../node_modules/freedom/spec/util');
  var chatClient, chatDispatch;

  beforeEach(function () {
    var social = testUtil.getApis().get('social').definition;
    freedom = {
      'socialprovider': testUtil.mockIface([
        ['login', {clientId: 'testuser'}],
        ['on', 'value'],
        ['sendMessage', 'value'],
        ['STATUS', social.STATUS.value],
        ['ERRCODE', social.ERRCODE.value]
      ]),
      'pgpprovider': testUtil.mockIface([
        ['setup', 'value'],
        ['clear', 'value'],
        ['importKeypair', 'value'],
        ['exportKey', {key: 'fakepublickey'}],
        ['getFingerprint', 'value'],
        ['signEncrypt', 'value'],
        ['verifyDecrypt', 'value'],
        ['armor', 'value'],
        ['dearmor', 'value']
      ])
    };
    chatDispatch = jasmine.createSpy('chatDispatch');
    chatClient = new Chat(chatDispatch);
    //chatClient.userList.recipient = 'recipient';
    //chatClient.keyList.recipient = 'fakekey';
  });

  it('logs in', function(done) {
    expect(chatClient).toBeDefined();
    setTimeout(function () {
      // Wait 2 seconds for login to finish before doing expects
      expect(chatDispatch).toHaveBeenCalled();
      var calls = chatDispatch.calls.all();
      expect(calls[0].args).toEqual(['export-publicKey', 'fakepublickey']);
      expect(calls[1].args).toEqual(['recv-uid', 'testuser']);
      expect(calls[2].args).toEqual(['recv-status', 'online']);
      expect(calls[3].args).toEqual(['recv-buddylist', {}]);
      done();
    }, 2000);
  });

  it('sends messages', function(done) {
    setTimeout(function () {
      chatClient.send('recipient', 'Hello world!');
      setTimeout(function () {
        expect(chatClient.social.sendMessage).toHaveBeenCalled();
        done();
      }, 1000);
    }, 2000);
  });
});
