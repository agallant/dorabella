/*globals describe, beforeEach, require, expect, it*/
/*jslint indent:2*/

// Unit tests for freedom-securechat directly
// Tests both freedom API calls and internal methods
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('freedom-securechat', function () {

  var testUtil = require('../node_modules/freedom/spec/util');
  var chatClient;

  beforeEach(function () {
    var social = testUtil.getApis().get("social").definition;
    freedom = {
      'socialprovider': testUtil.mockIface([
        ['login', 'value'],
        ['on', 'value'],
        ['STATUS', social.STATUS.value],
        ['ERRCODE', social.ERRCODE.value]
      ]),
      'pgpprovider': testUtil.mockIface([
        ['setup', 'vaue'],
        ['clear', 'value'],
        ['importKeypair', 'value'],
        ['exportKey', 'value'],
        ['getFingerprint', 'value'],
        ['signEncrypt', 'value'],
        ['verifyDecrypt', 'value'],
        ['armor', 'value'],
        ['dearmor', 'value']
      ])
    };
    chatClient = new Chat(jasmine.createSpy('chatDispatch'));
  });

  it('logs in', function(done) {
    expect(chatClient).toBeDefined();
    done();
  });

  it('sends messages', function(done) {
    chatClient.send('recipient', 'Hello world!');
    done();
  });
});
