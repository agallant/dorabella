/*globals describe, beforeEach, require, expect, it*/
/*jslint indent:2*/

// Unit tests for freedom-securechat directly
// Tests both freedom API calls and internal methods
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
describe('freedom-securechat', function () {

  var testUtil = require('../node_modules/freedom/spec/util');
  var chatClient;

  beforeEach(function () {
    freedom = {
      'socialprovider': testUtil.mockIface([
        ['login', 'value'],
        ['on', 'value']
      ]),
      'pgpprovider': testUtil.mockIface([]),
      chat: testUtil.mockIface([])
    };
    chatClient = new Chat();
  });

  it('makes a chat client', function(done) {
    expect(chatClient).toBeDefined();
    done();
  });
});
