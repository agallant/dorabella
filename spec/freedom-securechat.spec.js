/*globals describe, beforeEach, require, expect, it*/
/*jslint indent:2*/

// Unit tests for freedom-securechat directly
// Tests both freedom API calls and internal methods
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('freedom-securechat', function () {

  var testUtil = require('../node_modules/freedom/spec/util');
  var chatClient, chatDispatch;

  beforeEach(function () {
    var social = testUtil.getApis().get("social").definition;
    freedom = {
      'socialprovider': testUtil.mockIface([
        ['login', 'value'],
        ['on', 'value'],
        ['sendMessage', 'value'],
        ['STATUS', social.STATUS.value],
        ['ERRCODE', social.ERRCODE.value]
      ]),
      'pgpprovider': testUtil.mockIface([
        ['setup', 'value'],
        ['clear', 'value'],
        ['importKeypair', 'value'],
        ['exportKey', 'fakepublickey'],
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
    expect(chatDispatch).toHaveBeenCalled();
    expect(chatDispatch.calls.mostRecent().args).toEqual([
      'export-publicKey', 'fakepublickey']);
    expect(chatClient).toBeDefined();
    done();
  });

  xit('sends messages', function(done) {
    // mocking currently inadequate for this test
    chatClient.send('recipient', 'Hello world!');
    done();
  });
});
