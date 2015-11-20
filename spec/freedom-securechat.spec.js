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
        ['setup', 'vaue']
      ]),
      chat: testUtil.mockIface([])
    };
    chatClient = new Chat(jasmine.createSpy('chatDispatch'));
  });

  it('makes a chat client', function(done) {
    expect(chatClient).toBeDefined();
    done();
  });
});
