/**
 * This is freedom.js. - https://freedomjs.org
 *
 * Copyright 2014 The freedom.js authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license apache2.0
 * @see https://freedomjs.org
 * @version 0.6.27
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.crypto","api":{"getRandomBytes":{"type":"method","value":["number"],"ret":"buffer"}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"},"require":{"type":"method","value":["string","string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"},"boolean"],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed","NAME_NOT_RESOLVED":"DNS lookup failed","INTERNET_DISCONNECTED":"Cannot reach any network","ADDRESS_INVALID":"Invalid address","ADDRESS_UNREACHABLE":"No route to host","HOST_UNREACHABLE":"SOCKS proxy server could not reach host"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"pause":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"resume":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","ALREADY_CLOSED":"Socket already closed","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SEND_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"core.xhr","api":{"open":{"type":"method","value":["string","string","boolean","string","string"],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":[{"string":"string","buffer":"buffer"}]},"abort":{"type":"method","value":[]},"getResponseHeader":{"type":"method","value":["string"],"ret":"string"},"getAllResponseHeaders":{"type":"method","value":[],"ret":"string"},"setRequestHeader":{"type":"method","value":["string","string"]},"overrideMimeType":{"type":"method","value":["string"]},"getReadyState":{"type":"method","value":[],"ret":"number"},"getResponse":{"type":"method","value":[],"ret":{"string":"string","buffer":"buffer","object":"object"}},"getResponseText":{"type":"method","value":[],"ret":"string"},"getResponseURL":{"type":"method","value":[],"ret":"string"},"getResponseType":{"type":"method","value":[],"ret":"string"},"setResponseType":{"type":"method","value":["string"]},"getStatus":{"type":"method","value":[],"ret":"number"},"getStatusText":{"type":"method","value":[],"ret":"string"},"getTimeout":{"type":"method","value":[],"ret":"number"},"setTimeout":{"type":"method","value":["number"]},"getWithCredentials":{"type":"method","value":[],"ret":"boolean"},"setWithCredentials":{"type":"method","value":["boolean"]},"onloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onerror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"ontimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onreadystatechange":{"type":"event","value":{}},"onuploadloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploaderror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadtimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadreadystatechange":{"type":"event","value":{}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.0.2
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    }

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function() {
        process.nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertx() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$asap(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
/*jslint node:true*/
/*globals RTCPeerConnection, mozRTCPeerConnection, webkitRTCPeerConnection */
/*globals RTCSessionDescription, mozRTCSessionDescription */
/*globals RTCIceCandidate, mozRTCIceCandidate */
'use strict';

var myRTCPeerConnection = null;
var myRTCSessionDescription = null;
var myRTCIceCandidate = null;

var renameIceURLs = function (config) {
  if (!config) {
    return;
  }
  if (!config.iceServers) {
    return config;
  }
  config.iceServers.forEach(function (server) {
    server.url = server.urls;
    delete server.urls;
  });
  return config;
};

var fixChromeStatsResponse = function(response) {
  var standardReport = {};
  var reports = response.result();
  reports.forEach(function(report) {
    var standardStats = {
      id: report.id,
      timestamp: report.timestamp,
      type: report.type
    };
    report.names().forEach(function(name) {
      standardStats[name] = report.stat(name);
    });
    standardReport[standardStats.id] = standardStats;
  });

  return standardReport;
};

var fixFirefoxStatsResponse = function(response) {
  // Giving the response directly to the callback gives an object w/o interface
  // https://developer.mozilla.org/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly
  var standardReport = {};
  response.forEach(function (report) {
    standardReport[report.id] = report;
  });
  return standardReport;
};

var sessionHasData = function(desc) {
  if (!desc) {
    return false;
  }
  var hasData = false;
  var prefix = 'm=application';
  desc.sdp.split('\n').forEach(function(line) {
    if (line.slice(0, prefix.length) === prefix) {
      hasData = true;
    }
  });
  return hasData;
};

// Unify PeerConnection Object.
if (typeof RTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = RTCPeerConnection;
} else if (typeof mozRTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = function (configuration, constraints) {
    // Firefox uses 'url' rather than 'urls' for RTCIceServer.urls
    var pc = new mozRTCPeerConnection(renameIceURLs(configuration), constraints);

    // Firefox stats response is only visible 'ChromeOnly' so process it here
    var boundGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, failureCallback) {
      var successCallbackWrapper = function(firefoxStatsResponse) {
        successCallback(fixFirefoxStatsResponse(firefoxStatsResponse));
      };
      boundGetStats(selector, successCallbackWrapper, failureCallback);
    };

    // Firefox doesn't fire 'onnegotiationneeded' when a data channel is created
    // https://bugzilla.mozilla.org/show_bug.cgi?id=840728
    var dataEnabled = false;
    var boundCreateDataChannel = pc.createDataChannel.bind(pc);
    pc.createDataChannel = function(label, dataChannelDict) {
      var dc = boundCreateDataChannel(label, dataChannelDict);
      if (!dataEnabled) {
        dataEnabled = true;
        if (pc.onnegotiationneeded &&
            !sessionHasData(pc.localDescription) &&
            !sessionHasData(pc.remoteDescription)) {
          var event = new Event('negotiationneeded');
          pc.onnegotiationneeded(event);
        }
      }
      return dc;
    };

    return pc;
  };
} else if (typeof webkitRTCPeerConnection !== 'undefined') {
  // Chrome returns a nonstandard, non-JSON-ifiable response from getStats.
  myRTCPeerConnection = function(configuration, constraints) {
    var pc = new webkitRTCPeerConnection(configuration, constraints);
    var boundGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, failureCallback) {
      var successCallbackWrapper = function(chromeStatsResponse) {
        successCallback(fixChromeStatsResponse(chromeStatsResponse));
      };
      // Chrome also takes its arguments in the wrong order.
      boundGetStats(successCallbackWrapper, failureCallback, selector);
    };
    return pc;
  };
}

// Unify SessionDescrption Object.
if (typeof RTCSessionDescription !== 'undefined') {
  myRTCSessionDescription = RTCSessionDescription;
} else if (typeof mozRTCSessionDescription !== 'undefined') {
  myRTCSessionDescription = mozRTCSessionDescription;
}

// Unify IceCandidate Object.
if (typeof RTCIceCandidate !== 'undefined') {
  myRTCIceCandidate = RTCIceCandidate;
} else if (typeof mozRTCIceCandidate !== 'undefined') {
  myRTCIceCandidate = mozRTCIceCandidate;
}

exports.RTCPeerConnection = myRTCPeerConnection;
exports.RTCSessionDescription = myRTCSessionDescription;
exports.RTCIceCandidate = myRTCIceCandidate;

},{}],5:[function(require,module,exports){
(function (process){
/*globals process, console */
/*jslint indent:2,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A freedom.js logging provider that logs to chrome, firefox, and node consoles.
 * @Class Logger_console
 * @constructor
 * @private
 * @param {config: Object} cap Capabilities - console requires global config.
 */
var Logger_console = function (cap) {
  this.level = (cap.config && cap.config.debug) || 'log';
  this.console = (cap.config && cap.config.global.console);
  util.handleEvents(this);
};


/**
 * Logging levels, for filtering output.
 * @private
 * @static
 */
Logger_console.level = {
  "debug": 0,
  "info": 1,
  "log": 2,
  "warn": 3,
  "error": 4
};

/**
 * Print a message with appropriate formatting.
 * @method print
 */
Logger_console.prototype.print = function (severity, source, msg) {
  var arr = msg;
  if (typeof this.console === 'undefined' ||
      this.console.freedom === true) {
    return;
  }
  if (typeof arr === 'string') {
    arr = [arr];
  }
  
  if (Logger_console.level[this.level] !== undefined &&
      Logger_console.level[severity] < Logger_console.level[this.level]) {
    return;
  }
  
  if (source) {
    if (typeof process !== 'undefined' &&
        {}.toString.call(process) === '[object process]') {
      // Node.
      arr.unshift('\x1B[39m');
      arr.unshift('\x1B[31m' + source);
    } else if (this.console.maxLogLevel) {
      // Firefox in JSM context:
      //   http://mxr.mozilla.org/mozilla-release/source/toolkit/devtools/Console.jsm
      if (!this.console.freedomDump) {
        this.console.freedomDump = this.console.dump;
        this.console.dump = function() {};
      }
      this.console.freedomDump(source + ' ' + severity[0].toUpperCase() + ' ' +
          arr.join(' ') + '\n');
    } else {
      arr.unshift('color: none');
      arr.unshift('color: red');
      arr.unshift('%c' + source + '%c');
    }
  }

  if (!this.console[severity] && this.console.log) {
    severity = 'log';
  }
  this.console[severity].apply(this.console, arr);
};

/**
 * Log a message to the console.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.log = function (source, msg, continuation) {
  this.print('log', source, msg);
  continuation();
};

/**
 * Log a message to the console with debug priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.debug = function (source, msg, continuation) {
  this.print('debug', source, msg);
  continuation();
};

/**
 * Log a message to the console with info priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.info = function (source, msg, continuation) {
  this.print('info', source, msg);
  continuation();
};

/**
 * Log a message to the console with warn priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.warn = function (source, msg, continuation) {
  this.print('warn', source, msg);
  continuation();
};

/**
 * Log a message to the console with error priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.error = function (source, msg, continuation) {
  this.print('error', source, msg);
  continuation();
};

/** REGISTER PROVIDER **/
exports.provider = Logger_console;
exports.name = 'core.console';
exports.flags = {config: true};

}).call(this,require('_process'))

},{"../../src/util":36,"_process":3}],6:[function(require,module,exports){
/*globals console, crypto */
/*jslint indent:2, node:true */
var util = require('../../src/util');

/**
 * A Core provider for getting cryptographically random buffers. This
 * functionality may not exist in all unpriviledged contexts - namely at this
 * point, firefox addon workers.
 * @Class Core_crypto
 * @constructor
 * @param {module:Module} cap The module creating this provider.
 */
var Core_crypto = function(cap, dispatchEvent) {
  'use strict';
  this.dispatchEvent = dispatchEvent;
  util.handleEvents(this);
};

/**
 * Get a random buffer of some number of bytes.
 * @param {String} str The string to send.
 * @param {Function} continuation Function to call when sending is complete.
 * @method send
 */
 Core_crypto.prototype.getRandomBytes = function(number, continuation) {
   'use strict';
   var buffer = new Uint8Array(number);
   crypto.getRandomValues(buffer);
   continuation(buffer.buffer);
};

exports.provider = Core_crypto;
exports.name = "core.crypto";

},{"../../src/util":36}],7:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A minimal provider implementing the core.echo interface for interaction with
 * custom channels.  Primarily used for testing the robustness of the custom
 * channel implementation.
 * @Class Echo_unprivileged
 * @constructor
 * @param {module:Module} cap The module creating this provider.
 */
var Echo_unprivileged = function(cap, dispatchEvent) {
  this.mod = cap.module;
  this.dispatchEvent = dispatchEvent;
  util.handleEvents(this);

  // The Core object for managing channels.
  this.mod.once('core', function(Core) {
    this.core = new Core();
  }.bind(this));
  this.mod.emit(this.mod.controlChannel, {
    type: 'core request delegated to echo',
    request: 'core'
  });
};

/**
 * Setup the provider to echo on a specific proxy. Subsequent messages
 * From the custom channel bound here will be re-emitted as a message
 * from the provider.  Subsequent messages to the provider will be
 * emitted on the bound channel.
 * @param {Object} proxy The identifier for the custom channel to bind.
 * @param {Function} continuation Function to call when setup is complete.
 * @method setup
 */
Echo_unprivileged.prototype.setup = function(proxy, continuation) {
  continuation();
  if (!this.core) {
    this.dispatchEvent('message', 'no core available to setup proxy with at echo');
    return;
  }

  this.core.bindChannel(proxy, function(chan) {
    if (this.chan) {
      this.chan.close();
    }
    this.chan = chan;
    this.chan.onClose(function() {
      delete this.chan;
    }.bind(this));
    this.dispatchEvent('message', 'channel bound to echo');
    this.chan.on('message', function(m) {
      this.dispatchEvent('message', 'from custom channel: ' + m);
    }.bind(this));
  }.bind(this));
};

/**
 * Send a message to the bound custom channel.
 * @param {String} str The string to send.
 * @param {Function} continuation Function to call when sending is complete.
 * @method send
 */
Echo_unprivileged.prototype.send = function(str, continuation) {
  continuation();
  if (this.chan) {
    this.chan.emit('message', str);
  } else {
    this.dispatchEvent('message', 'no channel available');
  }
};

exports.provider = Echo_unprivileged;
exports.name = "core.echo";
exports.flags = {module: true};

},{"../../src/util":36}],8:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true,node:true */

/**
 * An oAuth meta-provider allowing multiple platform-dependant
 * oAuth implementations to serve as the redirectURL for an oAuth flow.
 * The core implementations are provided in providers/oauth, and are
 * supplemented in platform-dependent repositories.
 *
 */
var OAuth = function (handlers, cap, dispatchEvent) {
  this.handlers = handlers;
  this.dispatchEvent = dispatchEvent;
  this.ongoing = {};
};

/**
 * Register oAuth handlers.
 * This method should be called before provider is used, and binds the current
 * oAuth provider to be associated with registered handlers. This is used so
 * that handlers which are registered by the user apply only the the freedom()
 * setup call they are associated with, while still being registered across
 * multiple instances of OAuth providers.
 *
 * @method register
 * @param {[constructor]} handlers
 * @private
 */
OAuth.register = function (handlers) {
  var i,
      boundHandlers = [];
  if (!handlers || !handlers.length) {
    return OAuth.reset();
  }

  for (i = 0; i < handlers.length; i += 1) {
    boundHandlers.push(new handlers[i]());
  }
  exports.provider = OAuth.bind(this, boundHandlers);
};

/**
 * Reset the oAuth provider registrations.
 * @method reset
 * @private
 */
OAuth.reset = function () {
  exports.provider = OAuth.bind(this, []);
};

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 */
OAuth.prototype.initiateOAuth = function (redirectURIs, continuation) {
  var promise, i, successCallback;
  successCallback = function(result) {
    this.ongoing[result.state] = this.handlers[i];
    continuation(result);
  }.bind(this);

  for (i = 0; i < this.handlers.length; i += 1) {
    if (this.handlers[i].initiateOAuth(redirectURIs, successCallback)) {
      return;
    }
  }
  //If here, we have no compatible providers
  continuation(null, {
    'errcode': 'UNKNOWN',
    'message': 'No requested redirects can be handled.'
  });
  return;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Boolean} interactive - Whether to launch an interactive OAuth flow.
 *    Defaults to true.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
OAuth.prototype.launchAuthFlow = function(authUrl, stateObj, interactive,
                                          continuation) {
  if (!this.ongoing.hasOwnProperty(stateObj.state)) {
    continuation(undefined, {
      'errcode': 'UNKNOWN',
      'message': 'You must begin the oAuth flow with initiateOAuth first'
    });
    return;
  }
  if (interactive === undefined) {
    interactive = true;
  }
  this.ongoing[stateObj.state].launchAuthFlow(
      authUrl, stateObj, interactive, continuation);
  delete this.ongoing[stateObj.state];
};

exports.register = OAuth.register;
exports.reset = OAuth.reset;
exports.provider = OAuth.bind(this, []);
exports.name = 'core.oauth';

},{}],9:[function(require,module,exports){
/*globals console, RTCPeerConnection, webkitRTCPeerConnection */
/*globals mozRTCPeerConnection, RTCSessionDescription, RTCIceCandidate */
/*globals mozRTCSessionDescription, mozRTCIceCandidate */
/*globals ArrayBuffer, Blob */
/*jslint indent:2,sloppy:true,node:true */
/**
 * DataPeer - a class that wraps peer connections and data channels.
 */
// TODO: check that Handling of pranswer is treated appropriately.
var SimpleDataPeerState = {
  DISCONNECTED: 'DISCONNECTED',
  CONNECTING: 'CONNECTING',
  CONNECTED: 'CONNECTED'
};

function SimpleDataPeer(peerName, stunServers, dataChannelCallbacks, mocks) {
  var constraints,
    config,
    i;
  this.peerName = peerName;
  this.channels = {};
  this.dataChannelCallbacks = dataChannelCallbacks;
  this.onConnectedQueue = [];

  if (typeof mocks.RTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = mocks.RTCPeerConnection;
  } else if (typeof webkitRTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = webkitRTCPeerConnection;
  } else if (typeof mozRTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = mozRTCPeerConnection;
  } else {
    throw new Error("This environment does not appear to support RTCPeerConnection");
  }

  if (typeof mocks.RTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = mocks.RTCSessionDescription;
  } else if (typeof RTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = RTCSessionDescription;
  } else if (typeof mozRTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = mozRTCSessionDescription;
  } else {
    throw new Error("This environment does not appear to support RTCSessionDescription");
  }

  if (typeof mocks.RTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = mocks.RTCIceCandidate;
  } else if (typeof RTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = RTCIceCandidate;
  } else if (typeof mozRTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = mozRTCIceCandidate;
  } else {
    throw new Error("This environment does not appear to support RTCIceCandidate");
  }


  constraints = {
    optional: [{DtlsSrtpKeyAgreement: true}]
  };
  // A way to speak to the peer to send SDP headers etc.
  this.sendSignalMessage = null;

  this.pc = null;  // The peer connection.
  // Get TURN servers for the peer connection.
  config = {iceServers: []};
  for (i = 0; i < stunServers.length; i += 1) {
    config.iceServers.push({
      'url' : stunServers[i]
    });
  }
  this.pc = new this.RTCPeerConnection(config, constraints);
  // Add basic event handlers.
  this.pc.addEventListener("icecandidate",
                            this.onIceCallback.bind(this));
  this.pc.addEventListener("negotiationneeded",
                            this.onNegotiationNeeded.bind(this));
  this.pc.addEventListener("datachannel",
                            this.onDataChannel.bind(this));
  this.pc.addEventListener("signalingstatechange", function () {
    // TODO: come up with a better way to detect connection.  We start out
    // as "stable" even before we are connected.
    // TODO: this is not fired for connections closed by the other side.
    // This will be fixed in m37, at that point we should dispatch an onClose
    // event here for freedom.transport to pick up.
    if (this.pc.signalingState === "stable") {
      this.pcState = SimpleDataPeerState.CONNECTED;
      this.onConnectedQueue.map(function (callback) { callback(); });
    }
  }.bind(this));
  // This state variable is used to fake offer/answer when they are wrongly
  // requested and we really just need to reuse what we already have.
  this.pcState = SimpleDataPeerState.DISCONNECTED;

  // Note: to actually do something with data channels opened by a peer, we
  // need someone to manage "datachannel" event.
}

SimpleDataPeer.prototype.createOffer = function (constaints, continuation) {
  this.pc.createOffer(continuation, function () {
    console.error('core.peerconnection createOffer failed.');
  }, constaints);
};

SimpleDataPeer.prototype.runWhenConnected = function (func) {
  if (this.pcState === SimpleDataPeerState.CONNECTED) {
    func();
  } else {
    this.onConnectedQueue.push(func);
  }
};

SimpleDataPeer.prototype.send = function (channelId, message, continuation) {
  this.channels[channelId].send(message);
  continuation();
};

SimpleDataPeer.prototype.openDataChannel = function (channelId, continuation) {
  var dataChannel = this.pc.createDataChannel(channelId, {});
  dataChannel.onopen = function () {
    this.addDataChannel(channelId, dataChannel);
    continuation();
  }.bind(this);
  dataChannel.onerror = function (err) {
    //@(ryscheng) todo - replace with errors that work across the interface
    console.error(err);
    continuation(undefined, err);
  };
  // Firefox does not fire "negotiationneeded", so we need to
  // negotate here if we are not connected.
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=840728
  if (typeof mozRTCPeerConnection !== "undefined" &&
      this.pcState === SimpleDataPeerState.DISCONNECTED) {
    this.negotiateConnection();
  }
};

SimpleDataPeer.prototype.closeChannel = function (channelId) {
  if (this.channels[channelId] !== undefined) {
    this.channels[channelId].close();
    delete this.channels[channelId];
  }
};

SimpleDataPeer.prototype.getBufferedAmount = function (channelId,
                                                       continuation) {
  if (this.channels[channelId] !== undefined) {
    var dataChannel = this.channels[channelId];
    return dataChannel.bufferedAmount;
  }
  throw new Error("No channel with id: " + channelId);
};

SimpleDataPeer.prototype.setSendSignalMessage = function (sendSignalMessageFn) {
  this.sendSignalMessage = sendSignalMessageFn;
};

// Handle a message send on the signalling channel to this peer.
SimpleDataPeer.prototype.handleSignalMessage = function (messageText) {
  //console.log(this.peerName + ": " + "handleSignalMessage: \n" + messageText);
  var json = JSON.parse(messageText),
    ice_candidate;

  // TODO: If we are offering and they are also offerring at the same time,
  // pick the one who has the lower randomId?
  // (this.pc.signalingState == "have-local-offer" && json.sdp &&
  //    json.sdp.type == "offer" && json.sdp.randomId < this.localRandomId)
  if (json.sdp) {
    // Set the remote description.
    this.pc.setRemoteDescription(
      new this.RTCSessionDescription(json.sdp),
      // Success
      function () {
        //console.log(this.peerName + ": setRemoteDescription succeeded");
        if (this.pc.remoteDescription.type === "offer") {
          this.pc.createAnswer(this.onDescription.bind(this),
                               console.error);
        }
      }.bind(this),
      // Failure
      function (e) {
        console.error(this.peerName + ": " +
            "setRemoteDescription failed:", e);
      }.bind(this)
    );
  } else if (json.candidate) {
    // Add remote ice candidate.
    //console.log(this.peerName + ": Adding ice candidate: " + JSON.stringify(json.candidate));
    ice_candidate = new this.RTCIceCandidate(json.candidate);
    this.pc.addIceCandidate(ice_candidate);
  } else {
    console.warn(this.peerName + ": " +
        "handleSignalMessage got unexpected message: ", messageText);
  }
};

// Connect to the peer by the signalling channel.
SimpleDataPeer.prototype.negotiateConnection = function () {
  this.pcState = SimpleDataPeerState.CONNECTING;
  this.pc.createOffer(
    this.onDescription.bind(this),
    function (e) {
      console.error(this.peerName + ": " +
          "createOffer failed: ", e.toString());
      this.pcState = SimpleDataPeerState.DISCONNECTED;
    }.bind(this)
  );
};

SimpleDataPeer.prototype.isClosed = function () {
  return !this.pc || this.pc.signalingState === "closed";
};

SimpleDataPeer.prototype.close = function () {
  if (!this.isClosed()) {
    this.pc.close();
  }
  //console.log(this.peerName + ": " + "Closed peer connection.");
};

SimpleDataPeer.prototype.addDataChannel = function (channelId, channel) {
  var callbacks = this.dataChannelCallbacks;
  this.channels[channelId] = channel;

  if (channel.readyState === "connecting") {
    channel.onopen = callbacks.onOpenFn.bind(this, channel, {label: channelId});
  }

  channel.onclose = callbacks.onCloseFn.bind(this, channel, {label: channelId});

  channel.onmessage = callbacks.onMessageFn.bind(this, channel,
                                                 {label: channelId});

  channel.onerror = callbacks.onErrorFn.bind(this, channel, {label: channel});
};

// When we get our description, we set it to be our local description and
// send it to the peer.
SimpleDataPeer.prototype.onDescription = function (description) {
  if (this.sendSignalMessage) {
    this.pc.setLocalDescription(
      description,
      function () {
        //console.log(this.peerName + ": setLocalDescription succeeded");
        this.sendSignalMessage(JSON.stringify({'sdp': description}));
      }.bind(this),
      function (e) {
        console.error(this.peerName + ": " +
            "setLocalDescription failed:", e);
      }.bind(this)
    );
  } else {
    console.error(this.peerName + ": " +
        "_onDescription: _sendSignalMessage is not set, so we did not " +
            "set the local description. ");
  }
};

SimpleDataPeer.prototype.onNegotiationNeeded = function (e) {
  //console.log(this.peerName + ": " + "onNegotiationNeeded",
  //            JSON.stringify(this._pc), e);
  if (this.pcState !== SimpleDataPeerState.DISCONNECTED) {
    // Negotiation messages are falsely requested for new data channels.
    //   https://code.google.com/p/webrtc/issues/detail?id=2431
    // This code is a hack to simply reset the same local and remote
    // description which will trigger the appropriate data channel open event.
    // TODO: fix/remove this when Chrome issue is fixed.
    var logSuccess = function (op) {
      return function () {
        //console.log(this.peerName + ": " + op + " succeeded ");
      }.bind(this);
    }.bind(this),
      logFail = function (op) {
        return function (e) {
          //console.log(this.peerName + ": " + op + " failed: " + e);
        }.bind(this);
      }.bind(this);
    if (this.pc.localDescription && this.pc.remoteDescription &&
        this.pc.localDescription.type === "offer") {
      this.pc.setLocalDescription(this.pc.localDescription,
                                   logSuccess("setLocalDescription"),
                                   logFail("setLocalDescription"));
      this.pc.setRemoteDescription(this.pc.remoteDescription,
                                    logSuccess("setRemoteDescription"),
                                    logFail("setRemoteDescription"));
    } else if (this.pc.localDescription && this.pc.remoteDescription &&
        this.pc.localDescription.type === "answer") {
      this.pc.setRemoteDescription(this.pc.remoteDescription,
                                    logSuccess("setRemoteDescription"),
                                    logFail("setRemoteDescription"));
      this.pc.setLocalDescription(this.pc.localDescription,
                                   logSuccess("setLocalDescription"),
                                   logFail("setLocalDescription"));
    } else {
      console.error(this.peerName + ', onNegotiationNeeded failed');
    }
    return;
  }
  this.negotiateConnection();
};

SimpleDataPeer.prototype.onIceCallback = function (event) {
  if (event.candidate) {
    // Send IceCandidate to peer.
    //console.log(this.peerName + ": " + "ice callback with candidate", event);
    if (this.sendSignalMessage) {
      this.sendSignalMessage(JSON.stringify({'candidate': event.candidate}));
    } else {
      console.warn(this.peerName + ": " + "_onDescription: _sendSignalMessage is not set.");
    }
  }
};

SimpleDataPeer.prototype.onSignalingStateChange = function () {
  //console.log(this.peerName + ": " + "onSignalingStateChange: ", this._pc.signalingState);
  if (this.pc.signalingState === "stable") {
    this.pcState = SimpleDataPeerState.CONNECTED;
    this.onConnectedQueue.map(function (callback) { callback(); });
  }
};

SimpleDataPeer.prototype.onDataChannel = function (event) {
  this.addDataChannel(event.channel.label, event.channel);
  // RTCDataChannels created by a RTCDataChannelEvent have an initial
  // state of open, so the onopen event for the channel will not
  // fire. We need to fire the onOpenDataChannel event here
  // http://www.w3.org/TR/webrtc/#idl-def-RTCDataChannelState

  // Firefox channels do not have an initial state of "open"
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=1000478
  if (event.channel.readyState === "open") {
    this.dataChannelCallbacks.onOpenFn(event.channel,
                                       {label: event.channel.label});
  }
};

// _signallingChannel is a channel for emitting events back to the freedom Hub.
function PeerConnection(portModule, dispatchEvent,
                        RTCPeerConnection, RTCSessionDescription,
                        RTCIceCandidate) {
  // Channel for emitting events to consumer.
  this.dispatchEvent = dispatchEvent;

  // a (hopefully unique) ID for debugging.
  this.peerName = "p" + Math.random();

  // This is the portApp (defined in freedom/src/port-app.js). A way to speak
  // to freedom.
  this.freedomModule = portModule.module;

  // For tests we may mock out the PeerConnection and
  // SessionDescription implementations
  this.RTCPeerConnection = RTCPeerConnection;
  this.RTCSessionDescription = RTCSessionDescription;
  this.RTCIceCandidate = RTCIceCandidate;

  // This is the a channel to send signalling messages.
  this.signallingChannel = null;

  // The DataPeer object for talking to the peer.
  this.peer = null;

  // The Core object for managing channels.
  this.freedomModule.once('core', function (Core) {
    this.core = new Core();
  }.bind(this));
  this.freedomModule.emit(this.freedomModule.controlChannel, {
    type: 'core request delegated to peerconnection',
    request: 'core'
  });
}

// Start a peer connection using the given freedomChannelId as the way to
// communicate with the peer. The argument |freedomChannelId| is a way to speak
// to an identity provide to send them SDP headers negotiate the address/port to
// setup the peer to peerConnection.
//
// options: {
//   peerName: string,   // For pretty printing messages about this peer.
//   debug: boolean           // should we add extra
// }
PeerConnection.prototype.setup = function (signallingChannelId, peerName,
                                           stunServers, initiateConnection,
                                           continuation) {
  this.peerName = peerName;
  var mocks = {RTCPeerConnection: this.RTCPeerConnection,
               RTCSessionDescription: this.RTCSessionDescription,
               RTCIceCandidate: this.RTCIceCandidate},
    self = this,
    dataChannelCallbacks = {
      // onOpenFn is called at the point messages will actually get through.
      onOpenFn: function (dataChannel, info) {
        self.dispatchEvent("onOpenDataChannel",
                         { channelId: info.label});
      },
      onCloseFn: function (dataChannel, info) {
        self.dispatchEvent("onCloseDataChannel",
                         { channelId: info.label});
      },
      // Default on real message prints it to console.
      onMessageFn: function (dataChannel, info, event) {
        if (event.data instanceof ArrayBuffer) {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'buffer': event.data
          });
        } else if (event.data instanceof Blob) {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'binary': event.data
          });
        } else if (typeof (event.data) === 'string') {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'text': event.data
          });
        }
      },
      // Default on error, prints it.
      onErrorFn: function (dataChannel, info, err) {
        console.error(dataChannel.peerName + ": dataChannel(" +
                      dataChannel.dataChannel.label + "): error: ", err);
      }
    },
    channelId,
    openDataChannelContinuation;

  this.peer = new SimpleDataPeer(this.peerName, stunServers,
                                 dataChannelCallbacks, mocks);

  // Setup link between Freedom messaging and _peer's signalling.
  // Note: the signalling channel should only be sending receiveing strings.
  this.core.bindChannel(signallingChannelId, function (channel) {
    this.signallingChannel = channel;
    this.peer.setSendSignalMessage(function (msg) {
      this.signallingChannel.emit('message', msg);
    }.bind(this));
    this.signallingChannel.on('message',
        this.peer.handleSignalMessage.bind(this.peer));
    this.signallingChannel.emit('ready');
    if (!initiateConnection) {
      this.peer.runWhenConnected(continuation);
    }
  }.bind(this));

  if (initiateConnection) {
    // Setup a connection right away, then invoke continuation.
    console.log(this.peerName + ' initiating connection');
    channelId = 'hello' + Math.random().toString();
    openDataChannelContinuation = function (success, error) {
      if (error) {
        continuation(undefined, error);
      } else {
        this.closeDataChannel(channelId, continuation);
      }
    }.bind(this);
    this.openDataChannel(channelId, openDataChannelContinuation);
  }
};

PeerConnection.prototype.createOffer = function (constraints, continuation) {
  this.peer.createOffer(constraints, continuation);
};

// TODO: delay continuation until the open callback from _peer is called.
PeerConnection.prototype.openDataChannel = function (channelId, continuation) {
  this.peer.openDataChannel(channelId, continuation);
};

PeerConnection.prototype.closeDataChannel = function (channelId, continuation) {
  this.peer.closeChannel(channelId);
  continuation();
};

// Called to send a message over the given datachannel to a peer. If the data
// channel doesn't already exist, the DataPeer creates it.
PeerConnection.prototype.send = function (sendInfo, continuation) {
  var objToSend = sendInfo.text || sendInfo.buffer || sendInfo.binary;
  if (typeof objToSend === 'undefined') {
    console.error("No valid data to send has been provided.", sendInfo);
    return;
  }
  //DEBUG
  // objToSend = new ArrayBuffer(4);
  //DEBUG
  this.peer.send(sendInfo.channelLabel, objToSend, continuation);
};

PeerConnection.prototype.getBufferedAmount = function (channelId, continuation) {
  continuation(this.peer.getBufferedAmount(channelId));
};

PeerConnection.prototype.close = function (continuation) {
  if (this.peer.isClosed()) {
    // Peer already closed, run continuation without dispatching event.
    continuation();
    return;
  }
  this.peer.close();
  this.dispatchEvent("onClose");
  continuation();
};

exports.provider = PeerConnection;
exports.name = 'core.peerconnection';
exports.flags = {module: true};

},{}],10:[function(require,module,exports){
/*jslint sloppy:true, node:true */
/*globals Components, ArrayBuffer */

var util = require('../../src/util');

var eventNames = [
  'onopen',
  'onerror',
  'onclose',
  'onmessage'
];

var unAttachedChannels = {};
var pendingEvents = {};
var allocateChannel = function (dataChannel) {
  var id = util.getId();
  unAttachedChannels[id] = dataChannel;
  pendingEvents[id] = [];
  eventNames.forEach(function(eventName) {
    // This listener will be overridden (re-set) after the constructor runs.
    var handler = function(event) {
      var currentHandler = dataChannel[eventName];
      if (currentHandler === handler) {
        pendingEvents[id].push(event);
      } else if (typeof currentHandler === 'function') {
        // If an event somehow runs on this event handler after it has been
        // replaced, forward that event to the new event handler.
        currentHandler(event);
      } else {
        throw new Error('No handler for ' + event.type + ' event');
      }
    };
    dataChannel[eventName] = handler;
  });
  return id;
};

var RTCDataChannelAdapter = function (cap, dispatchEvents, id) {
  this.dispatchEvent = dispatchEvents;
  if (!unAttachedChannels[id]) {
    console.warn('Invalid ID, creating acting on unattached DataChannel');
    var Connection = require('./core.rtcpeerconnection').provider,
      provider = new Connection();
    id = provider.createDataChannel();
    provider.close();
  }

  this.channel = unAttachedChannels[id];
  delete unAttachedChannels[id];

  // After the constructor returns, and the caller has a chance to register
  // event listeners, fire all pending events, and then ensure that all
  // subsequent events are handled immediately.
  setTimeout(function() {
    this.drainPendingEvents(id);

    // This function must not be called until after the pending events are
    // drained, to ensure that messages are delivered in order.
    this.manageEvents(true);
  }.bind(this), 0);
};

RTCDataChannelAdapter.prototype.drainPendingEvents = function(id) {
  pendingEvents[id].forEach(function(event) {
    this['on' + event.type](event);
  }.bind(this));
  delete pendingEvents[id];
};

// Attach or detach listeners for events against the connection.
RTCDataChannelAdapter.prototype.manageEvents = function (attach) {
  eventNames.forEach(function (eventName) {
    if (attach) {
      this[eventName] = this[eventName].bind(this);
      this.channel[eventName] = this[eventName];
    } else {
      delete this.channel[eventName];
    }
  }.bind(this));
};

RTCDataChannelAdapter.prototype.getLabel = function (callback) {
  callback(this.channel.label);
};

RTCDataChannelAdapter.prototype.getOrdered = function (callback) {
  callback(this.channel.ordered);
};

RTCDataChannelAdapter.prototype.getMaxPacketLifeTime = function (callback) {
  callback(this.channel.maxPacketLifeTime);
};

RTCDataChannelAdapter.prototype.getMaxRetransmits = function (callback) {
  callback(this.channel.maxRetransmits);
};

RTCDataChannelAdapter.prototype.getProtocol = function (callback) {
  callback(this.channel.protocol);
};

RTCDataChannelAdapter.prototype.getNegotiated = function (callback) {
  callback(this.channel.negotiated);
};

RTCDataChannelAdapter.prototype.getId = function (callback) {
  callback(this.channel.id);
};

RTCDataChannelAdapter.prototype.getReadyState = function (callback) {
  callback(this.channel.readyState);
};

RTCDataChannelAdapter.prototype.getBufferedAmount = function (callback) {
  callback(this.channel.bufferedAmount);
};

RTCDataChannelAdapter.prototype.getBinaryType = function (callback) {
  callback(this.channel.binaryType);
};
RTCDataChannelAdapter.prototype.setBinaryType = function (binaryType, callback) {
  this.channel.binaryType = binaryType;
  callback();
};

RTCDataChannelAdapter.prototype.send = function (text, callback) {
  this.channel.send(text);
  callback();
};

RTCDataChannelAdapter.prototype.sendBuffer = function (buffer, callback) {
  this.channel.send(buffer);
  callback();
};

RTCDataChannelAdapter.prototype.close = function (callback) {
  if (!this.channel) {
    return callback();
  }
  this.manageEvents(false);
  this.channel.close();
  callback();
};

RTCDataChannelAdapter.prototype.onopen = function (event) {
  this.dispatchEvent('onopen', event.message);
};

RTCDataChannelAdapter.prototype.onerror = function (event) {
  this.dispatchEvent('onerror', {
    errcode: event.type,
    message: event.message
  });
};

RTCDataChannelAdapter.prototype.onclose = function (event) {
  this.dispatchEvent('onclose', event.message);
};

RTCDataChannelAdapter.prototype.onmessage = function (event) {
  if (typeof event.data === 'string') {
    this.dispatchEvent('onmessage', {text: event.data});
  } else if (this.channel.binaryType === 'arraybuffer' &&
      typeof Components !== 'undefined' &&
      !(event.data instanceof ArrayBuffer)) {
    // In Firefox Addons, incoming array buffers are not always owned by the
    // Addon context. The following line clones the object to take ownership.
    // See: https://developer.mozilla.org/en-US/docs/Components.utils.cloneInto
    var myData = Components.utils.cloneInto(event.data, {});
    this.dispatchEvent('onmessage', {buffer: myData});
  } else {
    this.dispatchEvent('onmessage', {buffer: event.data});
  }
};

exports.name = "core.rtcdatachannel";
exports.provider = RTCDataChannelAdapter;
exports.allocate = allocateChannel;

},{"../../src/util":36,"./core.rtcpeerconnection":11}],11:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var adapter = require('webrtc-adapter');
var PromiseCompat = require('es6-promise').Promise;
var RTCPeerConnection = adapter.RTCPeerConnection;
var RTCSessionDescription = adapter.RTCSessionDescription;
var RTCIceCandidate = adapter.RTCIceCandidate;

var DataChannel = require('./core.rtcdatachannel');

var RTCPeerConnectionAdapter = function (cap, dispatchEvent, configuration) {
  this.dispatchEvent = dispatchEvent;
  try {
    this.connection = new RTCPeerConnection(configuration);
  } catch (e) {
    // Note: You can't ask the provider to close you synchronously, since
    // the constructor has not yet returned, so there's no 'this' that
    // the provider can know about yet.
    setTimeout(cap.provider.close.bind(cap.provider, this), 0);
    return;
  }

  this.events = [
    'ondatachannel',
    'onnegotiationneeded',
    'onicecandidate',
    'onsignalingstatechange',
    'onaddstream',
    'onremovestream',
    'oniceconnectionstatechange'
  ];
  this.manageEvents(true);
};

// Attach or detach listeners for events against the connection.
RTCPeerConnectionAdapter.prototype.manageEvents = function (attach) {
  this.events.forEach(function (event) {
    if (attach) {
      this[event] = this[event].bind(this);
      this.connection[event] = this[event];
    } else if (this.connection) {
      delete this.connection[event];
    }
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.createOffer = function (constraints) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.createOffer(resolve, reject, constraints);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.createAnswer = function () {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.createAnswer(resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.setLocalDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setLocalDescription(new RTCSessionDescription(description),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getLocalDescription = function () {
  return PromiseCompat.resolve(this.connection.localDescription);
};

RTCPeerConnectionAdapter.prototype.setRemoteDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setRemoteDescription(new RTCSessionDescription(description),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getRemoteDescription = function () {
  return PromiseCompat.resolve(this.connection.remoteDescription);
};

RTCPeerConnectionAdapter.prototype.getSignalingState = function () {
  return PromiseCompat.resolve(this.connection.signalingState);
};

RTCPeerConnectionAdapter.prototype.updateIce = function (configuration) {
  this.connection.updateIce(configuration);
  return PromiseCompat.resolve();
};

RTCPeerConnectionAdapter.prototype.addIceCandidate = function (candidate) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.addIceCandidate(new RTCIceCandidate(candidate),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getIceGatheringState = function () {
  return PromiseCompat.resolve(this.connection.iceGatheringState);
};

RTCPeerConnectionAdapter.prototype.getIceConnectionState = function () {
  return PromiseCompat.resolve(this.connection.iceConnectionState);
};

RTCPeerConnectionAdapter.prototype.getConfiguration = function () {
  var configuration = this.connection.getConfiguration();
  return PromiseCompat.resolve(configuration);
};

RTCPeerConnectionAdapter.prototype.getLocalStreams = function () {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getRemoteStreams = function () {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getStreamById = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.addStream = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.removeStream = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.close = function () {
  if (!this.connection) {
    return PromiseCompat.resolve();
  }
  this.manageEvents(false);
  try {
    this.connection.close();
    return PromiseCompat.resolve();
  } catch (e) {
    return PromiseCompat.reject({
      errcode: e.name,
      message: e.message
    });
  }
};

RTCPeerConnectionAdapter.prototype.createDataChannel = function (label, dataChannelDict) {
  var id = DataChannel.allocate(this.connection.createDataChannel(label, dataChannelDict));
  return PromiseCompat.resolve(id);
};

RTCPeerConnectionAdapter.prototype.getStats = function (selector) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.getStats(selector, resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.ondatachannel = function (event) {
  var id = DataChannel.allocate(event.channel);
  this.dispatchEvent('ondatachannel', {channel: id});
};

RTCPeerConnectionAdapter.prototype.onnegotiationneeded = function (event) {
  this.dispatchEvent('onnegotiationneeded', event.message);
};

RTCPeerConnectionAdapter.prototype.onicecandidate = function (event) {
  var msg;
  if (event.candidate && event.candidate.candidate) {
    msg = {
      candidate: {
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      }
    };
  } else {
    msg = {
      candidate: null
    };
  }
  this.dispatchEvent('onicecandidate', msg);
};
  
RTCPeerConnectionAdapter.prototype.onsignalingstatechange = function (event) {
  this.dispatchEvent('onsignalingstatechange', event.message);
};
  
RTCPeerConnectionAdapter.prototype.onaddstream = function (event) {
  //TODO: provide ID of allocated stream.
  this.dispatchEvent('onaddstream', event.stream);
};
  
RTCPeerConnectionAdapter.prototype.onremovestream = function (event) {
  //TODO: provide ID of deallocated stream.
  this.dispatchEvent('onremovestream', event.stream);
};
  
RTCPeerConnectionAdapter.prototype.oniceconnectionstatechange = function (event) {
  this.dispatchEvent('oniceconnectionstatechange', event.message);
};


exports.name = "core.rtcpeerconnection";
exports.provider = RTCPeerConnectionAdapter;
exports.style = "providePromises";
exports.flags = {provider: true};

},{"./core.rtcdatachannel":10,"es6-promise":2,"webrtc-adapter":4}],12:[function(require,module,exports){
/*globals localStorage */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');

/**
 * A FreeDOM core.storage provider that depends on localStorage
 * Thus, this only works in the context of a webpage and has
 * some size limitations.
 * Note that this can conflict with other scripts using localStorage
 * as keys are raw
 * @Class Storage_unprivileged
 * @constructor
 * @private
 * @param {Object} cap Capabilities for the provider
 */
var Storage_unprivileged = function (cap, dispatchEvent) {
  util.handleEvents(this);
};

/**
 * Lists keys in the storage repository
 * @method keys
 */
Storage_unprivileged.prototype.keys = function (continuation) {
  var result = [],
    i;
  for (i = 0; i < localStorage.length; i += 1) {
    result.push(localStorage.key(i));
  }
  continuation(result);
};

/**
 * Get a key from the storage repository.
 * @param {String} key The item to get from storage.
 * @method get
 */
Storage_unprivileged.prototype.get = function (key, continuation) {
  try {
    var val = localStorage.getItem(key);
    continuation(val);
  } catch (e) {
    continuation(null);
  }
};

/**
 * Set a key in the storage repository.
 * @param {String} key The item to save in storage.
 * @param {String} value The value to save in storage.
 * @method set
 */
Storage_unprivileged.prototype.set = function (key, value, continuation) {
  var ret = localStorage.getItem(key);
  localStorage.setItem(key, value);
  continuation(ret);
};

/**
 * Remove a key from the storage repository.
 * @param {String} key The item to remove from storage;
 * @method remove
 */
Storage_unprivileged.prototype.remove = function (key, continuation) {
  var ret = localStorage.getItem(key);
  localStorage.removeItem(key);
  continuation(ret);
};

/**
 * Reset the contents of the storage repository.
 * @method clear
 */
Storage_unprivileged.prototype.clear = function (continuation) {
  localStorage.clear();
  continuation();
};

exports.provider = Storage_unprivileged;
exports.name = 'core.storage';

},{"../../src/util":36}],13:[function(require,module,exports){
/*jslint indent:2,white:true,sloppy:true,node:true */
var EventInterface = require('../../src/proxy/eventInterface');
var Consumer = require('../../src/consumer');
var util = require('../../src/util');

/**
 * Core freedom services available to all modules.
 * Created by the environment helper in response to a 'core' request.
 * @Class Core_unprivileged
 * @constructor
 * @param {Manager} manager The manager this core is connected with.
 * @private
 */
var Core_unprivileged = function(manager, postMessage) {
  this.manager = manager.module;
  this.debug = this.manager.debug;
};

Core_unprivileged.unboundChannels = {};

Core_unprivileged.contextId = undefined;
Core_unprivileged.moduleInternal = undefined;

/**
 * Create a custom channel.
 * Returns the structure {channel: Proxy, identifier: Object},
 * where the identifier can be 'redeemed' by another module or provider using
 * bind channel, at which point the deferred object will resolve with a channel
 * between the two endpoints.
 * @method createChannel
 * @params {Function} continuation Method to call with the cosntructed structure.
 */
Core_unprivileged.prototype.createChannel = function(continuation) {
  var proxy = new Consumer(EventInterface, this.manager.debug),
      id = util.getId(),
      chan = this.getChannel(proxy);
  this.manager.setup(proxy);

  if (this.isInModule()) {
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'register',
        id: id
      }
    });
  }
  Core_unprivileged.unboundChannels[id] = {
    local: true,
    proxy: proxy
  };

  proxy.once('start', this.getChannel.bind(this, proxy));

  continuation({
    channel: chan,
    identifier: id
  });
};

Core_unprivileged.prototype.getChannel = function(proxy) {
  var iface = proxy.getProxyInterface(),
      chan = iface();
  chan.close = iface.close;
  chan.onClose = iface.onClose;
  iface.onClose(chan, function() {
    proxy.doClose();
  });
  return chan;
};

/**
 * Receive a message from another core instance.
 * Note: Core_unprivileged is not registered on the hub. it is a provider,
 *     as it's location and name would indicate. This function is called by
 *     port-app to relay messages up to higher levels.  More generally, the
 *     messages emitted by the core to 'this.manager.emit(this.mananage.delegate'
 *     Should be onMessaged to the controlling core.
 * @param {String} source The source of the message.
 * @param {Object} msg The messsage from an isolated core provider.
 */
Core_unprivileged.prototype.onMessage = function(source, msg) {
  if (msg.type === 'register') {
    Core_unprivileged.unboundChannels[msg.id] = {
      remote: true,
      resolve: msg.reply,
      source: source
    };
  } else if (msg.type === 'clear') {
    delete Core_unprivileged.unboundChannels[msg.id];
  } else if (msg.type === 'bind') {
    if (Core_unprivileged.unboundChannels[msg.id]) {
      this.bindChannel(msg.id, function() {}, source);
    }
  } else if (msg.type === 'require') {
    source.require(msg.id, msg.manifest);
  }
};

/**
 * Bind a custom channel.
 * Creates a proxy interface to the custom channel, which will be bound to
 * the proxy obtained through an earlier createChannel call.
 * channel to a proxy.
 * @method bindChannel
 * @param {Object} identifier An identifier obtained through createChannel.
 * @param {Function} continuation A function to be called with the proxy.
 */
Core_unprivileged.prototype.bindChannel = function(identifier, continuation, source) {
  var toBind = Core_unprivileged.unboundChannels[identifier],
      newSource = !source;

  // when bindChannel is called directly, source will be undefined.
  // When it is propogated by onMessage, a source for binding will already exist.
  if (newSource) {
    this.debug.debug('making local proxy for core binding');
    source = new Consumer(EventInterface, this.debug);
    this.manager.setup(source);
  }

  // If this is a known identifier and is in the same context, binding is easy.
  if (toBind && toBind.local) {
    this.debug.debug('Binding a channel to port on this hub:' + source);
    this.manager.createLink(source, identifier, toBind.proxy, 'default');
    delete Core_unprivileged.unboundChannels[identifier];
    if (this.manager.delegate && this.manager.toDelegate.core) {
      this.manager.emit(this.manager.delegate, {
        type: 'Delegation',
        request: 'handle',
        flow: 'core',
        message: {
          type: 'clear',
          id: identifier
        }
      });
    }
  } else if (toBind && toBind.remote) {
    this.debug.debug('Binding a channel into a module.');
    this.manager.createLink(
        source,
        newSource ? 'default' : identifier,
        toBind.source,
        identifier);
    toBind.resolve({
      type: 'Bind Channel',
      request:'core',
      flow: 'core',
      message: {
        type: 'bind',
        id: identifier
      }
    });
    delete Core_unprivileged.unboundChannels[identifier];
  } else if (this.isInModule()) {
    this.debug.info('delegating channel bind for an unknown ID:' + identifier);
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'bind',
        id: identifier
      }
    });
    source.once('start', function(p, cb) {
      cb(this.getChannel(p));
    }.bind(this, source, continuation));
    this.manager.createLink(source,
        'default',
        this.manager.hub.getDestination(this.manager.delegate),
        identifier);
    delete Core_unprivileged.unboundChannels[identifier];
    return;
  } else {
    this.debug.warn('Asked to bind unknown channel: ' + identifier);
    this.debug.log(Core_unprivileged.unboundChannels);
    continuation();
    return;
  }

  if (source.getInterface) {
    continuation(this.getChannel(source));
  } else {
    continuation();
  }
};

/**
 * @method isInModule
 * @private
 * @returns {Boolean} Whether this class is running in a module.
 */
Core_unprivileged.prototype.isInModule = function () {
  return (this.manager.delegate && this.manager.toDelegate.core);
};

/**
 * Require a dynamic dependency for your freedom module.
 * If new permissions are needed beyond what are already available to the
 * freedom context, the user will need to approve of the requested permissions.
 * @method require
 * @param {String} manifest The URL of the manifest to require.
 * @param {String} api The API of the dependency to expose if not default.
 * @param {Function} callback The function to call with the dependency.
 */
Core_unprivileged.prototype.require = function (manifest, api, callback) {
  if (this.isInModule() && Core_unprivileged.moduleInternal) {
    // Register a callback with moduleInternal.
    // DependencyName is the name of the channel moduelInternal will allocate
    // callback will be called once a link to that channel is seen.
    var dependencyName =
        Core_unprivileged.moduleInternal.registerId(api, callback);

    // Request the dependency be added.
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'require',
        manifest: manifest,
        id: dependencyName
      }
    });
  } else {
    this.debug.error('The require function in external context makes no sense' +
        ' Instead create a new freedom() context.');
    callback(undefined, {
      errcode: 'InvalidContext',
      message: 'Cannot call require() from this context.'
    });
  }
};

/**
 * Get the ID of the current freedom.js context.  Provides an
 * array of module URLs, the lineage of the current context.
 * When not in an application context, the ID is the lineage
 * of the current View.
 * @method getId
 * @param {Function} callback The function called with ID information.
 */
Core_unprivileged.prototype.getId = function(callback) {
  // TODO: make sure contextID is properly frozen.
  callback(Core_unprivileged.contextId);
};

/**
 * Get a logger for logging to the freedom.js logger. Provides a
 * log object with an interface similar to the standard javascript console,
 * which logs via debug.
 * @method getLogger
 * @param {String} name The name of the logger, used as its 'source'
 * @param {Function} callback The function to call with the logger.
 */
Core_unprivileged.prototype.getLogger = function(name, callback) {
  callback(this.manager.debug.getLogger(name));
};

/**
 * Set the ID of the current freedom.js context.
 * @method setId
 * @private
 * @param {String[]} id The lineage of the current context.
 * @param {ModuleInternal} moduleInternal The Module environment if one exists.
 */
Core_unprivileged.prototype.setId = function(id, moduleInternal) {
  Core_unprivileged.contextId = id;
  Core_unprivileged.moduleInternal = moduleInternal;
};

exports.provider = Core_unprivileged;
exports.name = "core";
exports.flags = {module: true};

},{"../../src/consumer":21,"../../src/proxy/eventInterface":33,"../../src/util":36}],14:[function(require,module,exports){
/*globals document */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');
var PromiseCompat = require('es6-promise').Promise;

/**
 * A freedom.js view is the interface for user interaction.
 * A view exists as an iFrame, which is shown to the user in some way.
 * communication between the view and the freedom.js module is performed
 * through the HTML5 postMessage mechanism, which this provider translates
 * to freedom.js message events.
 * @Class View_unprivileged
 * @constructor
 * @private
 * @param {View Provider} provider
 * @param {provider:Provider,module:Module} cap The instantiator of the view.
 * @param {Function} dispatchEvent Function to call to emit events.
 */
var Core_View = function (provider, cap, dispatchEvent) {
  this.provider = provider;
  this.dispatchEvent = dispatchEvent;
  setTimeout(cap.provider.onClose.bind(
    cap.provider,
    this,
    this.close.bind(this, function () {})
  ), 0);
  this.module = cap.module;
  util.handleEvents(this);
};

/**
 * The is the default provider for core.view, unless overridden by context or
 * a user supplied provider. The interface is documented at:
 * https://github.com/freedomjs/freedom/wiki/freedom.js-Views
 *
 * Generally, a view provider consists of 3 methods:
 * onOpen is called when a view should be shown.
 *     id - is a unique identifier for this view, used on subsequent calls
 *          for communication and to eventually close the view.
 *     name - is the name of the view (as defined in the manifest),
 *            in order to place it appropriately.
 *     page - is the resolved URL to open.
 *     resources - is an array of resolved URLs which are referenced.
 *     postMessage - is a function to call when messages are emitted
 *                   by the window in which the view is opened.
 * onOpen returns a promise that completes when the view is loaded.
 * onMessage is called to send a message to an open view.
 *     id - is the unique identifier for the open view.
 *     message - is the message to postMessage to the view's window.
 * onClose is called to close a view.
 *     id - is the unique identifier for the view.
 */
Core_View.provider = {
  listener: undefined,
  active: {},
  onOpen: function (id, name, page, resources, postMessage) {
    var container = document.body,
      root,
      frame;
    
    if (!this.listener) {
      this.listener = function (msg) {
        var i;
        for (i in this.active) {
          if (this.active.hasOwnProperty(i) &&
              this.active[i].source === msg.source) {
            this.active[i].postMessage(msg.data);
          }
        }
      }.bind(this);
      window.addEventListener('message', this.listener, true);
    }

    // Views open by default in an element with their ID, or fill the page
    // otherwise.
    if (document.getElementById(name)) {
      container = document.getElementById(name);
    }

    root = document.createElement("div");
    root.style.width = "100%";
    root.style.height = "100%";
    root.style.display = "relative";

    container.appendChild(root);
    
    return new PromiseCompat(function (resolve, reject) {
      frame = document.createElement("iframe");
      frame.setAttribute("sandbox", "allow-scripts allow-forms");
      frame.style.width = "100%";
      frame.style.height = "100%";
      frame.style.border = "0";
      frame.style.background = "transparent";
      frame.src = page;
      frame.addEventListener('load', resolve, true);
      frame.addEventListener('error', reject, true);

      root.appendChild(frame);

      this.active[id] = {
        postMessage: postMessage,
        container: container,
        root: root,
        source: frame.contentWindow
      };
    }.bind(this));
  },
  onMessage: function (id, message) {
    this.active[id].source.postMessage(message, '*');
  },
  onClose: function (id) {
    this.active[id].container.removeChild(this.active[id].root);
    delete this.active[id];
    
    if (Object.keys(this.active).length === 0) {
      window.removeEventListener('message', this.listener, true);
      this.listener = undefined;
    }
  }
};

/**
 * Ask for this view to open a specific location, either a File relative to
 * the loader, or an explicit code location.
 * @method show
 * @param {String} name The identifier of the view.
 * @param {Function} continuation Function to call when view is loaded.
 */
Core_View.prototype.show = function (name, continuation) {
  if (this.id) {
    return continuation(undefined, {
      errcode: 'ALREADY_OPEN',
      message: 'Cannot show multiple views through one instance.'
    });
  }
  this.id = util.getId();

  var config = this.module.manifest.views,
    toResolve = [];
  if (!config || !config[name]) {
    return continuation(undefined, {
      errcode: 'NON_EXISTANT',
      message: 'View not found: ' + name
    });
  }

  if (config[name].main && config[name].files) {
    toResolve = config[name].files.concat(config[name].main);
    PromiseCompat.all(toResolve.map(function (fname) {
      return this.module.resource.get(this.module.manifestId, fname);
    }.bind(this))).then(function (files) {
      this.provider.onOpen(this.id,
          name,
          files[files.length - 1],
          files,
          this.dispatchEvent.bind(this, 'message')).then(
        function (c) {
          // Make sure continuation is called without an argument.
          c();
        }.bind({}, continuation),
        continuation.bind({}, undefined)
      );
    }.bind(this), function (err) {
      this.module.debug.error('Unable to open view ' + name + ': ', err);
      continuation(undefined, {
        errcode: 'VIEW_MALFORMED',
        message: 'Malformed View Declaration: ' + err
      });
    });
  } else {
    continuation(undefined, {
      errcode: 'NON_EXISTANT',
      message: 'View not found: ' + name
    });
  }
};

/**
 * isSecure determines whether the module can have confidence that its
 * communication with its view cannot be intercepted by an untrusted 3rd party.
 * In practice, this means that its okay for the runtime to have access to the
 * messages, and if the context is a web server or a browser extension then
 * that context is trusted. However, if a provider wants to allow their e.g.
 * social provider to be used on arbitrary websites, this mechanism means that
 * if the website uses a trusted version of the freedom.js library, then the
 * module can be used.
 * @method isSecure
 * @returns {Boolean} if the channel to the view is secure.
 */
Core_View.prototype.isSecure = function (continuation) {
  continuation(false);
};

/**
 * Send a message to an open view.
 * @method postMessage
 */
Core_View.prototype.postMessage = function (msg, continuation) {
  if (!this.id) {
    return continuation(undefined, {
      errcode: 'NOT_OPEN',
      message: 'Cannot post message to uninitialized view.'
    });
  }
  this.provider.onMessage(this.id, msg);
  continuation();
};

/**
 * Close an active view.
 * @method close
 */
Core_View.prototype.close = function (continuation) {
  if (!this.id) {
    return continuation(undefined, {
      errcode: 'NOT_OPEN',
      message: 'Cannot close uninitialized view.'
    });
  }
  this.provider.onClose(this.id);
  delete this.id;

  continuation();
};


/**
 * Allow a web page to redefine behavior for how views are shown.
 * @method register
 * @static
 * @param {Function} PageProvider The custom view behavior.
 */
Core_View.register = function (PageProvider) {
  var provider = PageProvider ? new PageProvider() : Core_View.provider;
  exports.provider = Core_View.bind(this, provider);
};

exports.provider = Core_View.bind(this, Core_View.provider);
exports.name = 'core.view';
exports.register = Core_View.register;
exports.flags = {provider: true, module: true};

},{"../../src/util":36,"es6-promise":2}],15:[function(require,module,exports){
/*globals WebSocket, ArrayBuffer, Blob, Uint8Array, console */
/*jslint sloppy:true, node:true */

var WSHandle = null;
var nodeStyle = false;

/**
 * A WebSocket core provider
 *
 * @param {Object} cap Capabilities for the provider
 * @param {Function} dispatchEvent Function to dispatch events.
 * @param {String} url The Remote URL to connect with.
 * @param {String[]} protocols SubProtocols to open.
 * @param {WebSocket?} socket An alternative socket class to use.
 */
var WS = function (cap, dispatchEvent, url, protocols, socket) {
  var WSImplementation = null,
    error;
  this.isNode = nodeStyle;
  if (typeof socket !== 'undefined') {
    WSImplementation = socket;
  } else if (WSHandle !== null) {
    WSImplementation = WSHandle;
  } else if (typeof WebSocket !== 'undefined') {
    WSImplementation = WebSocket;
  } else {
    console.error('Platform does not support WebSocket');
  }

  this.dispatchEvent = dispatchEvent;
  try {
    if (protocols) {
      this.websocket = new WSImplementation(url, protocols);
    } else {
      this.websocket = new WSImplementation(url);
    }
    this.websocket.binaryType = 'arraybuffer';
  } catch (e) {
    error = {};
    if (e instanceof SyntaxError) {
      error.errcode = 'SYNTAX';
    } else {
      error.errcode = e.name;
    }
    error.message = e.message;
    dispatchEvent('onError', error);
    return;
  }

  if (this.isNode) {
    this.websocket.on('message', this.onMessage.bind(this));
    this.websocket.on('open', this.onOpen.bind(this));
    // node.js websocket implementation not compliant
    this.websocket.on('close', this.onClose.bind(this, {
      code: 0,
      reason: 'UNKNOWN',
      wasClean: true
    }));
    this.websocket.on('error', this.onError.bind(this));
  } else {
    this.websocket.onopen = this.onOpen.bind(this);
    this.websocket.onclose = this.onClose.bind(this);
    this.websocket.onmessage = this.onMessage.bind(this);
    this.websocket.onerror = this.onError.bind(this);
  }
};

WS.prototype.send = function (data, continuation) {
  var toSend = data.text || data.binary || data.buffer,
    errcode,
    message;

  if (toSend) {
    try {
      // For node.js, we have to do weird buffer stuff
      if (this.isNode && toSend instanceof ArrayBuffer) {
        this.websocket.send(
          new Uint8Array(toSend),
          { binary: true },
          this.onError.bind(this)
        );
      } else {
        this.websocket.send(toSend);
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        errcode = "SYNTAX";
      } else {
        errcode = "INVALID_STATE";
      }
      message = e.message;
    }
  } else {
    errcode = "BAD_SEND";
    message = "No text, binary, or buffer data found.";
  }

  if (errcode) {
    continuation(undefined, {
      errcode: errcode,
      message: message
    });
  } else {
    continuation();
  }
};

WS.prototype.getReadyState = function (continuation) {
  continuation(this.websocket.readyState);
};

WS.prototype.getBufferedAmount = function (continuation) {
  continuation(this.websocket.bufferedAmount);
};

WS.prototype.close = function (code, reason, continuation) {
  try {
    if (code && reason) {
      this.websocket.close(code, reason);
    } else {
      this.websocket.close();
    }
    continuation();
  } catch (e) {
    var errorCode;
    if (e instanceof SyntaxError) {
      errorCode = "SYNTAX";
    } else {
      errorCode = "INVALID_ACCESS";
    }
    continuation(undefined, {
      errcode: errorCode,
      message: e.message
    });
  }
};

WS.prototype.onOpen = function (event) {
  this.dispatchEvent('onOpen');
};

WS.prototype.onMessage = function (event, flags) {
  var data = {};
  if (this.isNode && flags && flags.binary) {
    data.buffer = new Uint8Array(event).buffer;
  } else if (this.isNode) {
    data.text = event;
  } else if (typeof ArrayBuffer !== 'undefined' && event.data instanceof ArrayBuffer) {
    data.buffer = event.data;
  } else if (typeof Blob !== 'undefined' && event.data instanceof Blob) {
    data.binary = event.data;
  } else if (typeof event.data === 'string') {
    data.text = event.data;
  }
  this.dispatchEvent('onMessage', data);
};

WS.prototype.onError = function (event) {
  // Nothing to pass on
  // See: http://stackoverflow.com/a/18804298/300539
  this.dispatchEvent('onError');
};

WS.prototype.onClose = function (event) {
  this.dispatchEvent('onClose',
                     {code: event.code,
                      reason: event.reason,
                      wasClean: event.wasClean});
};

exports.provider = WS;
exports.name = 'core.websocket';
exports.setSocket = function (impl, isNode) {
  WSHandle = impl;
  nodeStyle = isNode;
};

},{}],16:[function(require,module,exports){
/*jshint node:true*/
/*global */
var PromiseCompat = require('es6-promise').Promise;
var XhrClass = null;

var XhrProvider = function(cap, dispatchEvent) {
  "use strict";
  if (typeof window !== "undefined" &&
      typeof window.XMLHttpRequest !== "undefined" &&
      XhrClass === null) { // freedom
    XhrClass = window.XMLHttpRequest;
  } else if (typeof XMLHttpRequest !== "undefined" &&
      XhrClass === null) { // freedom-for-firefox
    XhrClass = XMLHttpRequest;
  } else if (XhrClass === null) {
    console.error("Platform does not support XMLHttpRequest");
  }

  this._dispatchEvent = dispatchEvent;
  this._xhr = new XhrClass();

  setTimeout(cap.provider.onClose.bind(
    cap.provider,
    this,
    this.abort.bind(this)
  ), 0);

  this._events = [
    "loadstart",
    "progress",
    "abort",
    "error",
    "load",
    "timeout",
    "loadend",
    "readystatechange"
  ];
  this._setupListeners();

};

XhrProvider.prototype.open = function(method, url, async, user, password) {
  "use strict";
  if (typeof async !== "undefined" && async !== true) {
    return PromiseCompat.reject({
      errcode: "InvalidAccessError",
      message: "async should always be set to true"
    });
  }

  // Force async to be true. undefined can lead to async=false in Chrome packaged apps
  this._xhr.open(method, url, true, user, password);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.send = function(data) {
  "use strict";
  if (!(data instanceof Object)) {
    this._xhr.send();
  } else if (data.hasOwnProperty("string")) {
    this._xhr.send(data.string);
  } else if (data.hasOwnProperty("buffer")) {
    this._xhr.send(data.buffer);
  } else {
    this._xhr.send();
  }
  return PromiseCompat.resolve();
};

XhrProvider.prototype.abort = function() {
  "use strict";
  this._xhr.abort();
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getResponseHeader = function(header) {
  "use strict";
  return PromiseCompat.resolve(this._xhr.getResponseHeader(header));
};

XhrProvider.prototype.getAllResponseHeaders = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.getAllResponseHeaders());
};

XhrProvider.prototype.setRequestHeader = function(header, value) {
  "use strict";
  this._xhr.setRequestHeader(header, value);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.overrideMimeType = function(mime) {
  "use strict";
  this._xhr.overrideMimeType(mime);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getReadyState = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.readyState);
};

XhrProvider.prototype.getResponse = function() {
  "use strict";
  if (this._xhr.response === null) {
    return PromiseCompat.resolve(null);
  } else if (this._xhr.responseType === "text" || this._xhr.responseType === "") {
    return PromiseCompat.resolve({ string: this._xhr.response });
  } else if (this._xhr.responseType === "arraybuffer") {
    return PromiseCompat.resolve({ buffer: this._xhr.response });
  } else if (this._xhr.responseType === "json") {
    return PromiseCompat.resolve({ object: this._xhr.response });
  }

  return PromiseCompat.reject("core.xhr cannot determine type of response");
};

XhrProvider.prototype.getResponseText = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseText);
};

XhrProvider.prototype.getResponseURL = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseURL);
};

XhrProvider.prototype.getResponseType = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseType);
};

XhrProvider.prototype.setResponseType = function(type) {
  "use strict";
  this._xhr.responseType = type;
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getStatus = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.status);
};

XhrProvider.prototype.getStatusText = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.statusText);
};

XhrProvider.prototype.getTimeout = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.timeout);
};

XhrProvider.prototype.setTimeout = function(timeout) {
  "use strict";
  this._xhr.timeout = timeout;
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getWithCredentials = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.withCredentials);
};

XhrProvider.prototype.setWithCredentials = function(wc) {
  "use strict";
  this._xhr.withCredentials = wc;
  return PromiseCompat.resolve();
};

XhrProvider.prototype._setupListeners = function() {
  "use strict";
  // Download events
  this._events.forEach(function (eventName) {
    this._xhr.addEventListener(eventName, function(eventName, event) {
      this._dispatchEvent("on" + eventName, event);
    }.bind(this, eventName), false);
  }.bind(this));

  // Upload events
  this._events.forEach(function (eventName) {
    this._xhr.upload.addEventListener(eventName, function(eventName, event) {
      this._dispatchEvent("onupload" + eventName, event);
    }.bind(this, eventName), false);
  }.bind(this));
};

exports.name = "core.xhr";
exports.provider = XhrProvider;
exports.style = "providePromises";
exports.flags = { provider: true };
exports.setImpl = function(impl) {
  "use strict";
  XhrClass = impl;
};

},{"es6-promise":2}],17:[function(require,module,exports){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

var loadedOnStartup = false;

var TIMEOUT = 5000;

/**
 * If there is redirection back to the page, and oAuthRedirectID is set,
 * then report the auth and close the window.
 */
if (typeof window !== 'undefined' && window && window.location &&
    window.addEventListener) {
  window.addEventListener('load', function () {
    "use strict";
    loadedOnStartup = true;
  }, true);

  if (window.localStorage &&
      window.location.href.indexOf(oAuthRedirectId) > 0) {
    // This will trigger a 'storage' event on the window. See storageListener
    window.localStorage.setItem(oAuthRedirectId, new Date());
    window.close();
  }
}

var LocalPageAuth = function() {
  "use strict";
  this.listeners = {};
};

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 * @return {Boolean} true if can handle, false otherwise
 */
LocalPageAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  "use strict";
  if (typeof window !== 'undefined' && window && loadedOnStartup) {
    var here = window.location.protocol + "//" + window.location.host +
        window.location.pathname;
    if (redirectURIs.indexOf(here) > -1) {
      continuation({
        redirect: here,
        state: oAuthRedirectId + Math.random()
      });
      return true;
    }
  }

  return false;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Boolean} interactive - Whether to launch an interactive flow
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
LocalPageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, interactive, continuation) {
  "use strict";
  var listener = this.storageListener.bind(this, continuation, stateObj);
  this.listeners[stateObj.state] = listener;
  window.addEventListener("storage", listener, false);
  // Start 'er up
  window.open(authUrl);

  if (interactive === false) {
    setTimeout(function() {
      if (this.listeners[stateObj.state]) {
        // Listener has not been deleted, indicating oauth has completed.
        window.removeEventListener(
            "storage", this.listeners[stateObj.state], false);
        delete this.listeners[stateObj.state];
        continuation(undefined, 'Error launching auth flow');
      }
    }.bind(this), TIMEOUT);
  }
};

/**
 * Handler for storage events, which relays them to waiting clients.
 * For the schema of the storage msg, see:
 * http://tutorials.jenkov.com/html5/local-storage.html#storage-events
 * @param {Function} continuation function to call with result
 * @param {Object.<string, string>} stateObj the return value from initiateOAuth

 * @param {Object} msg storage event
 */
LocalPageAuth.prototype.storageListener = function(continuation, stateObj, msg) {
  'use strict';
  if (msg.url.indexOf(stateObj.state) > -1) {
    window.removeEventListener("storage", this.listeners[stateObj.state], false);
    delete this.listeners[stateObj.state];
    continuation(msg.url);
  }
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = LocalPageAuth;

},{"es6-promise":2}],18:[function(require,module,exports){
(function (global){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

var TIMEOUT = 5000;

function RemotePageAuth() {
  "use strict";
  this.listeners = {};
}

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 * @return {Boolean} true if can handle, false otherwise
 */
RemotePageAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  "use strict";
  if (typeof global !== 'undefined' && global && global.document) {
    for (var i=0; i<redirectURIs.length; i++) {
      // TODO: remove restriction on URL pattern match.
      if ((redirectURIs[i].indexOf('http://') === 0 ||
          redirectURIs[i].indexOf('https://') === 0) &&
          redirectURIs[i].indexOf('oauth-relay.html') > 0) {
        continuation({
          redirect: redirectURIs[i],
          state: oAuthRedirectId + Math.random()
        });
        return true;
      }
    }
  }
  return false;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Boolean} interactive - Whether to launch an interactive flow
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
RemotePageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, interactive, continuation) {
  "use strict";
  var frame = global.document.createElement('iframe');
  frame.src = stateObj.redirect;
  frame.style.display = 'none';

  global.document.body.appendChild(frame);
  frame.addEventListener('load', function () {
    this.listeners[stateObj.state] = continuation;
    window.open(authUrl);

    frame.contentWindow.postMessage(stateObj.state, '*');
  }.bind(this));

  var hasCredentials = false;
  window.addEventListener('message', function (frame, msg) {
    if (msg.data && msg.data.key && msg.data.url && this.listeners[msg.data.key]) {
      hasCredentials = true;
      this.listeners[msg.data.key](msg.data.url);
      delete this.listeners[msg.data.key];
      try {
        document.body.removeChild(frame);
      } catch (e) {
        console.warn(e);
      }
    }
  }.bind(this, frame), false);

  if (interactive === false) {
    setTimeout(function() {
      if (hasCredentials === false) {
        continuation(undefined, 'Error launching auth flow');
        delete this.listeners[stateObj.state];
        try {
          document.body.removeChild(frame);
        } catch (e) {
          console.warn(e);
        }
      }
    }.bind(this), TIMEOUT);
  }
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = RemotePageAuth;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"es6-promise":2}],19:[function(require,module,exports){
/*jslint indent:2,white:true,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

/**
 * The API registry for freedom.js.  Used to look up requested APIs,
 * and provides a bridge for core APIs to act like normal APIs.
 * @Class API
 * @param {Debug} debug The debugger to use for logging.
 * @constructor
 */
var Api = function(debug) {
  this.debug = debug;
  this.apis = {};
  this.providers = {};
  this.waiters = {};
};

/**
 * Get an API.
 * @method get
 * @param {String} api The API name to get.
 * @returns {{name:String, definition:API}} The API if registered.
 */
Api.prototype.get = function(api) {
  if (!this.apis[api]) {
    return false;
  }
  return {
    name: api,
    definition: this.apis[api]
  };
};

/**
 * Set an API to a definition.
 * @method set
 * @param {String} name The API name.
 * @param {API} definition The JSON object defining the API.
 */
Api.prototype.set = function(name, definition) {
  this.apis[name] = definition;
};

/**
 * Register a core API provider.
 * @method register
 * @param {String} name the API name.
 * @param {Function} constructor the function to create a provider for the API.
 * @param {String?} style The style the provider is written in. Valid styles
 *   are documented in fdom.port.Provider.prototype.getInterface. Defaults to
 *   provideAsynchronous
 * @param {Object?} flags Prefixed arguments needed by the core provider.
 *   valid keys are 'module', 'provider', and 'config'.
 */
Api.prototype.register = function(name, constructor, style, flags) {
  var i,
    args;

  this.providers[name] = {
    constructor: constructor,
    style: style || 'provideAsynchronous',
    flags: flags || {}
  };

  if (this.waiters[name]) {
    for (i = 0; i < this.waiters[name].length; i += 1) {
      args = {};
      if (flags.module) {
        args.module = this.waiters[name][i].from;
      }
      if (flags.config) {
        args.config = this.waiters[name][i].from.config;
      }
      this.waiters[name][i].resolve({
        args: args,
        inst: constructor.bind({}, args)
      });
    }
    delete this.waiters[name];
  }
};

/**
 * Get a core API connected to a given FreeDOM module.
 * @method getCore
 * @param {String} name the API to retrieve.
 * @param {Module} from The instantiating App.
 * @returns {Promise} A promise of a fdom.App look-alike (and argument object),
 * matching a local API definition.
 */
Api.prototype.getCore = function(name, from) {
  return new PromiseCompat(function(resolve, reject) {
    if (this.apis[name]) {
      if (this.providers[name]) {
        var args = {};
        if (this.providers[name].flags.module) {
          args.module = from;
        }
        if (this.providers[name].flags.config) {
          args.config = from.config;
        }
        resolve({
          args: args,
          inst: this.providers[name].constructor.bind({}, args)
        });
      } else {
        if (!this.waiters[name]) {
          this.waiters[name] = [];
        }
        this.waiters[name].push({
          resolve: resolve,
          reject: reject,
          from: from
        });
      }
    } else {
      this.debug.warn('Api.getCore asked for unknown core: ' + name);
      reject(null);
    }
  }.bind(this));
};

/**
 * Configure a {Provider} to provide a named core api on behalf of a
 * given port.
 * @param {String} name The name of the provider
 * @param {Provider} provider The provider that will provide the named api
 * @param {Module} from The module requesting the core provider.
 */
Api.prototype.provideCore = function (name, provider, from) {
  return this.getCore(name, from).then(function (core) {
    var flags = this.providers[name].flags,
      iface = provider.getProxyInterface();
    if (flags.provider) {
      core.args.provider = iface;
    }
    iface()[this.providers[name].style](core.inst);
  }.bind(this), function (err) {
    this.debug.error('Could not provide core: ', err);
  }.bind(this));
};

/**
 * Shutdown the API registry, and reject any pending waiters.
 */
Api.prototype.cleanup = function () {
  var prop,
    doReject = function (waiter) {
      waiter.reject();
    };
  for (prop in this.waiters) {
    if (this.waiters.hasOwnProperty(prop)) {
      this.waiters[prop].forEach(doReject);
    }
  }
  delete this.waiters;
};

/**
 * Defines the apis module and provider registry.
 */
module.exports = Api;

},{"es6-promise":2}],20:[function(require,module,exports){
/*jslint indent:2,node:true */

var Bundle = function () {
  'use strict';
  this.interfaces = require('../dist/bundle.compiled');
};

/**
 * Populate an API registry with provided providers, and with known API
 * definitions.
 * @static
 * @method register
 * @param {{name: string, provider: Function, style?: string}[]} providers
 *   The core providers made available to this freedom.js instance.
 * @param {Api} registry The API registry to populate.
 */
exports.register = function (providers, registry) {
  'use strict';
  var bundle = new Bundle();
  bundle.interfaces.forEach(function (api) {
    if (api && api.name && api.api) {
      registry.set(api.name, api.api);
    }
  });

  providers.forEach(function (provider) {
    if (provider.name) {
      registry.register(provider.name,
                        provider.provider,
                        provider.style,
                        provider.flags);
    }
  });
};

},{"../dist/bundle.compiled":1}],21:[function(require,module,exports){
/*globals Blob, ArrayBuffer, DataView */
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A freedom port for a user-accessable api.
 * @class Consumer
 * @implements Port
 * @uses handleEvents
 * @param {Object} interfaceCls The api interface exposed by this consumer.
 * @param {Debug} debug The debugger to use for logging.
 * @constructor
 */
var Consumer = function (interfaceCls, debug) {
  this.id = Consumer.nextId();
  this.interfaceCls = interfaceCls;
  this.debug = debug;
  util.handleEvents(this);

  this.ifaces = {};
  this.closeHandlers = {};
  this.errorHandlers = {};
  this.emits = {};
};

/**
 * Receive incoming messages for this consumer.
 * @method onMessage
 * @param {String} source The source of the message.
 * @param {Object} message The received message.
 */
Consumer.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.reverse) {
    this.emitChannel = message.channel;
    this.emit(this.emitChannel, {
      type: 'channel announcement',
      channel: message.reverse
    });
    this.emit('start');
  } else if (source === 'control' && message.type === 'setup') {
    this.controlChannel = message.channel;
  } else if (source === 'control' && message.type === 'close') {
    delete this.controlChannel;
    this.doClose();
  } else {
    if (!this.emitChannel && message.channel) {
      this.emitChannel = message.channel;
      this.emit('start');
      return;
    }
    if (message.type === 'close' && message.to) {
      this.teardown(message.to);
      return;
    }
    if (message.type === 'error') {
      this.error(message.to, message.message);
      return;
    }
    if (message.to) {
      if (this.emits[message.to]) {
        this.emits[message.to]('message', message.message);
      } else {
        this.debug.warn('Could not deliver message, no such interface: ' + message.to);
      }
    } else {
      var msg = message.message;
      util.eachProp(this.emits, function (iface) {
        iface('message', message.message);
      });
    }
  }
};

/**
 * Create a consumer.Interface associated with this consumer.
 * An interface is returned, which is supplied with important control of the
 * api via constructor arguments: (bound below in getInterfaceConstructor)
 *
 * onMsg: function(binder) sets the function to call when messages for this
 *    interface arrive on the channel,
 * emit: function(msg) allows this interface to emit messages,
 * id: string is the Identifier for this interface.
 * @method getInterface
 */
Consumer.prototype.getInterface = function () {
  var Iface = this.getInterfaceConstructor(),
    args = Array.prototype.slice.call(arguments, 0);
  if (args.length) {
    Iface = Iface.bind.apply(Iface, [Iface].concat(args));
  }
  return new Iface();
};

/**
 * Attach an 'onEvent' listener to an interface, allowing external consumers
 * to either listen to channel state, or register callbacks on lifetime events
 * of individual instances of the interface.
 * @method getListener
 * @parma {String} name The event to listen to.
 * @private
 */
Consumer.prototype.getListener = function (name) {
  return function (instance, handler) {
    // Listen to the channel directly.
    if (typeof instance === 'function' && handler === undefined) {
      this.once(name, instance);
      return;
    }

    // Listen to a specific instance.
    var handlers = name + 'Handlers';
    util.eachProp(this.ifaces, function (candidate, id) {
      if (candidate === instance) {
        if (this[handlers][id]) {
          this[handlers][id].push(handler);
        } else {
          this[handlers][id] = [handler];
        }
        return true;
      }
    }.bind(this));
  }.bind(this);
};

/**
 * Create a function that can be used to get interfaces from this api consumer
 * from a user-visible point.
 * @method getProxyInterface
 */
Consumer.prototype.getProxyInterface = function () {
  var func = function (p) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length > 0) {
      return p.getInterface.apply(p, args);
    } else {
      return p.getInterface();
    }
  }.bind({}, this);

  func.close = function (iface) {
    if (iface) {
      util.eachProp(this.ifaces, function (candidate, id) {
        if (candidate === iface) {
          this.teardown(id);
          this.emit(this.emitChannel, {
            type: 'close',
            to: id
          });
          return true;
        }
      }.bind(this));
    } else {
      // Close the channel.
      this.doClose();
    }
  }.bind(this);

  func.onClose = this.getListener('close');
  func.onError = this.getListener('error');

  return func;
};

/**
 * Provides a bound class for creating a consumer.Interface associated
 * with this api. This partial level of construction can be used
 * to allow the consumer to be used as a provider for another API.
 * @method getInterfaceConstructor
 * @private
 */
Consumer.prototype.getInterfaceConstructor = function () {
  var id = Consumer.nextId();
  return this.interfaceCls.bind(
    {},
    function (id, obj, binder) {
      this.ifaces[id] = obj;
      this.emits[id] = binder;
    }.bind(this, id),
    this.doEmit.bind(this, id),
    this.debug
  );
};

/**
 * Emit a message on the channel once setup is complete.
 * @method doEmit
 * @private
 * @param {String} to The ID of the flow sending the message.
 * @param {Object} msg The message to emit
 * @param {Boolean} all Send message to all recipients.
 */
Consumer.prototype.doEmit = function (to, msg, all) {
  if (all) {
    to = false;
  }
  if (this.emitChannel) {
    this.emit(this.emitChannel, {to: to, type: 'message', message: msg});
  } else {
    this.once('start', this.doEmit.bind(this, to, msg));
  }
};

/**
 * Teardown a single interface of this api.
 * @method teardown
 * @param {String} id The id of the interface to tear down.
 */
Consumer.prototype.teardown = function (id) {
  if (this.emits[id]) {
    this.emits[id]('close');
  }
  delete this.emits[id];
  if (this.closeHandlers[id]) {
    util.eachProp(this.closeHandlers[id], function (prop) {
      prop();
    });
  }
  delete this.ifaces[id];
  delete this.closeHandlers[id];
  delete this.errorHandlers[id];
};

/**
 * Handle a message error reported to this api.
 * @method error
 * @param {String?} id The id of the interface where the error occured.
 * @param {Object} message The message which failed, if relevant.
 */
Consumer.prototype.error = function (id, message) {
  if (id && this.errorHandlers[id]) {
    util.eachProp(this.errorHandlers[id], function (prop) {
      prop(message);
    });
  } else if (!id) {
    this.emit('error', message);
  }
};


/**
 * Close / teardown the flow this api terminates.
 * @method doClose
 */
Consumer.prototype.doClose = function () {
  if (this.controlChannel) {
    this.emit(this.controlChannel, {
      type: 'Channel Closing',
      request: 'close'
    });
  }

  util.eachProp(this.emits, function (emit, id) {
    this.teardown(id);
  }.bind(this));

  this.emit('close');
  this.off();

  this.emitChannel = null;
};

/**
 * Get the textual description of this port.
 * @method toString
 * @return The description of this port.
 */
Consumer.prototype.toString = function () {
  if (this.emitChannel) {
    return "[Consumer " + this.emitChannel + "]";
  } else {
    return "[unbound Consumer]";
  }
};

/**
 * Get the next ID for an api channel.
 * @method nextId
 * @static
 * @private
 */
Consumer.nextId = function () {
  if (!Consumer.id) {
    Consumer.id = 1;
  }
  return (Consumer.id += 1);
};

/**
 * Convert a structured data structure into a message stream conforming to
 * a template and an array of binary data elements.
 * @static
 * @method messageToPortable
 * @param {Object} template The template to conform to
 * @param {Object} value The instance of the data structure to confrom
 * @param {Debug} debug A debugger for errors.
 * @return {{text: Object, binary: Array}} Separated data streams.
 */
Consumer.messageToPortable = function (template, value, debug) {
  var externals = [],
    message = Consumer.conform(template, value, externals, true, debug);
  return {
    text: message,
    binary: externals
  };
};

/**
 * Convert Structured Data streams into a data structure conforming to a
 * template.
 * @static
 * @method portableToMessage
 * @param {Object} template The template to conform to
 * @param {{text: Object, binary: Array}} streams The streams to conform
 * @param {Debug} debug A debugger for errors.
 * @return {Object} The data structure matching the template.
 */
Consumer.portableToMessage = function (template, streams, debug) {
  return Consumer.conform(template, streams.text, streams.binary, false, debug);
};

/**
 * Force a collection of values to look like the types and length of an API
 * template.
 * @static
 * @method conform
 * @param {Object} template The template to conform to
 * @param {Object} from The value to conform
 * @param {Array} externals Listing of binary elements in the template
 * @param {Boolean} Whether to to separate or combine streams.
 * @aparam {Debug} debug A debugger for errors.
 */
Consumer.conform = function (template, from, externals, separate, debug) {
  /* jshint -W086 */
  if (typeof (from) === 'function' && template !== 'proxy') {
    //from = undefined;
    //throw "Trying to conform a function";
    debug.error("Message discarded as functions can't cross modules!");
    return undefined;
  } else if (typeof (from) === 'undefined') {
    return undefined;
  } else if (from === null) {
    return null;
  } else if (template === undefined) {
    debug.error("Message discarded for not matching declared type!", from);
    return undefined;
  }

  switch (template) {
  case 'string':
    return String('') + from;
  case 'number':
    return Number(1) * from;
  case 'boolean':
    return Boolean(from === true);
  case 'object':
    // TODO(willscott): Allow removal if sandboxing enforces this.
    if (typeof from === 'undefined') {
      return undefined;
    } else {
      return JSON.parse(JSON.stringify(from));
    }
  case 'blob':
    if (separate) {
      if (from instanceof Blob) {
        externals.push(from);
        return externals.length - 1;
      } else {
        debug.error('conform expecting Blob, but saw ' + (typeof from));
        externals.push(new Blob([]));
        return externals.length - 1;
      }
    } else {
      return externals[from];
    }
  case 'buffer':
    if (separate) {
      externals.push(Consumer.makeArrayBuffer(from, debug));
      return externals.length - 1;
    } else {
      return Consumer.makeArrayBuffer(externals[from], debug);
    }
  case 'proxy':
    return from;
  }
  var val, i;
  if (Array.isArray(template) && from !== undefined) {
    val = [];
    i = 0;
    if (template.length === 2 && template[0] === 'array') {
      //console.log("template is array, value is " + JSON.stringify(value));
      for (i = 0; i < from.length; i += 1) {
        val.push(Consumer.conform(template[1], from[i], externals,
                                  separate, debug));
      }
    } else {
      for (i = 0; i < template.length; i += 1) {
        if (from[i] !== undefined) {
          val.push(Consumer.conform(template[i], from[i], externals,
                                    separate, debug));
        } else {
          val.push(undefined);
        }
      }
    }
    return val;
  } else if (typeof template === 'object' && from !== undefined) {
    val = {};
    util.eachProp(template, function (prop, name) {
      if (from[name] !== undefined) {
        val[name] = Consumer.conform(prop, from[name], externals, separate,
                                     debug);
      }
    });
    return val;
  }
  debug.error('Unknown template provided: ' + template);
};

/**
 * Make a thing into an Array Buffer
 * @static
 * @method makeArrayBuffer
 * @param {Object} thing
 * @param {Debug} debug A debugger in case of errors.
 * @return {ArrayBuffer} An Array Buffer
 */
Consumer.makeArrayBuffer = function (thing, debug) {
  if (!thing) {
    return new ArrayBuffer(0);
  }

  if (thing instanceof ArrayBuffer) {
    return thing;
  } else if (thing.constructor.name === "ArrayBuffer" &&
      typeof thing.prototype === "undefined") {
    // Workaround for webkit origin ownership issue.
    // https://github.com/UWNetworksLab/freedom/issues/28
    return new DataView(thing).buffer;
  } else {
    debug.error('expecting ArrayBuffer, but saw ' +
        (typeof thing) + ': ' + JSON.stringify(thing));
    return new ArrayBuffer(0);
  }
};

/**
 * Recursively traverse a [nested] object and freeze its keys from being
 * writable. Note, the result can have new keys added to it, but existing ones
 * cannot be  overwritten. Doesn't do anything for arrays or other collections.
 *
 * @method recursiveFreezeObject
 * @static
 * @param {Object} obj - object to be frozen
 * @return {Object} obj
 **/
Consumer.recursiveFreezeObject = function (obj) {
  var k, ret = {};
  if (typeof obj !== 'object') {
    return obj;
  }
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      Object.defineProperty(ret, k, {
        value: Consumer.recursiveFreezeObject(obj[k]),
        writable: false,
        enumerable: true
      });
    }
  }
  return ret;
};

module.exports = Consumer;

},{"./util":36}],22:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A freedom entry point for debugging.
 * @uses handleEvents
 * @implements Port
 * @constructor
 */
var Debug = function (logger) {
  this.id = 'debug';
  this.emitChannel = false;
  this.config = false;
  util.handleEvents(this);
};

/**
 * The supported log levels for debugging.
 * @static
 */
Debug.LEVELS = ['debug', 'info', 'log', 'warn', 'error'];

/**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the textual description.
 */
Debug.prototype.toString = function () {
  return '[Console]';
};

/**
 * Register a logger for outputting debugging messages.
 * @method setLogger
 * @param {Console} logger The logger to register
 */
Debug.prototype.setLogger = function (logger) {
  if (this.logger) {
    this.info('Replacing Logger.');
  }
  this.logger = logger;
  this.emit('logger');
};

/**
 * Handler for receiving messages sent to the debug port.
 * These messages are used to retreive config for exposing console.
 * @method onMessage
 * @param {String} source the source identifier for the message.
 * @param {Object} message the received message.
 */
Debug.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.channel && !this.emitChannel) {
    this.emitChannel = message.channel;
    this.config = message.config;
    if (!this.config.global.console) {
      if (typeof console !== 'undefined') {
        this.config.global.console = console;
      } else {
        this.config.global.console = this.getLogger('Console');
      }
    }
    this.emit('ready');
  }
};

/**
 * Dispatch a debug message with arbitrary severity.
 * All debug messages are routed through the manager, to allow for delegation.
 * @method format
 * @param {String} severity the severity of the message.
 * @param {String} source The location of message.
 * @param {String[]} args The contents of the message.
 * @private
 */
Debug.prototype.format = function (severity, source, args) {
  var i, alist = [], argarr;
  if (typeof args === "string" && source) {
    try {
      argarr = JSON.parse(args);
      if (argarr instanceof Array) {
        args = argarr;
      }
    } catch (e) {
      // pass.
    }
  }

  if (typeof args === "string") {
    alist.push(args);
  } else {
    for (i = 0; i < args.length; i += 1) {
      alist.push(args[i]);
    }
  }
  if (!this.emitChannel) {
    this.on('ready', this.format.bind(this, severity, source, alist));
    return;
  }
  this.emit(this.emitChannel, {
    severity: severity,
    source: source,
    quiet: true,
    request: 'debug',
    msg: JSON.stringify(alist)
  });
};

/**
 * Print received messages on the console.
 * This is called by the manager in response to an emission from format.
 * @method print
 * @param {Object} message The message emitted by {@see format} to print.
 */
Debug.prototype.print = function (message) {
  if (!this.logger) {
    this.once('logger', this.print.bind(this, message));
    return;
  }

  var args, arr = [], i = 0;
  args = JSON.parse(message.msg);
  if (typeof args === "string") {
    arr.push(args);
  } else {
    while (args[i] !== undefined) {
      arr.push(args[i]);
      i += 1;
    }
  }
  this.logger[message.severity].call(this.logger, message.source, arr, function () {});
};

/**
 * Print a log message to the console.
 * @method log
 */
Debug.prototype.log = function () {
  this.format('log', undefined, arguments);
};

/**
 * Print an info message to the console.
 * @method log
 */
Debug.prototype.info = function () {
  this.format('info', undefined, arguments);
};

/**
 * Print a debug message to the console.
 * @method log
 */
Debug.prototype.debug = function () {
  this.format('debug', undefined, arguments);
};

/**
 * Print a warning message to the console.
 * @method warn
 */
Debug.prototype.warn = function () {
  this.format('warn', undefined, arguments);
};

/**
 * Print an error message to the console.
 * @method error
 */
Debug.prototype.error = function () {
  this.format('error', undefined, arguments);
};

/**
 * Get a logger that logs messages prefixed by a given name.
 * @method getLogger
 * @param {String} name The prefix for logged messages.
 * @returns {Console} A console-like object.
 */
Debug.prototype.getLogger = function (name) {
  var log = function (severity, source) {
    var args = Array.prototype.splice.call(arguments, 2);
    this.format(severity, source, args);
  },
    logger = {
      freedom: true
    };
  Debug.LEVELS.forEach(function (level) {
    logger[level] = log.bind(this, level, name);
  }.bind(this));
  return logger;
};

/**
 * Create a synchronous 'getLogger' method that binds around an asynchronous
 * logger by creating a buffer until the asynchronous logger is resolved.
 * @see {ModuleInternal.loadLinks} for where this method is bound to the created
 *     external interface.
 * @method getLoggingShim
 * @param {Function} asyncMethod The wrapper to 'getLogger'
 */
Debug.prototype.getLoggingShim = function (asyncMethod) {
  return function getLogggerSync(name) {
    var toResolve = asyncMethod(name),
      buffer = [],
      methods = Debug.LEVELS,
      backing = null,
      ret = {};
    toResolve.then(function (logger) {
      backing = logger;
      buffer.forEach(function (item) {
        backing[item[0]].apply(backing, item[1]);
      });
    });
    methods.forEach(function (mthd) {
      ret[mthd] = function() {
        var args = Array.prototype.splice.call(arguments, 0);
        if (backing) {
          backing[this].apply(backing, args);
        } else {
          buffer.push([this, args]);
        }
      }.bind(mthd);
    });
    return ret;
  };
};

module.exports = Debug;

},{"./util":36}],23:[function(require,module,exports){
(function (global){
/*jslint indent:2,node:true */
var PromiseCompat = require('es6-promise').Promise;

var Api = require('./api');
var Debug = require('./debug');
var Hub = require('./hub');
var Manager = require('./manager');
var Policy = require('./policy');
var ProxyBinder = require('./proxybinder');
var Resource = require('./resource');
var util = require('./util');
var Bundle = require('./bundle');

var freedomGlobal;
var getGlobal = function () {
  'use strict';
  
  // Node.js
  if (typeof global !== 'undefined' && global.prototype === undefined) {
    freedomGlobal = global;
  // Browsers
  } else {
    setTimeout(function () {
      freedomGlobal = this;
    }, 0);
  }
};
getGlobal();

/**
 * Create a new freedom context.
 * @param {Object} context Information about the local context.
 * @see {util/workerEntry.js}
 * @param {String} manifest The manifest to load.
 * @param {Object} config Configuration keys set by the user.
 * @returns {Promise} A promise for the module defined in the manifest.
 */
var setup = function (context, manifest, config) {
  'use strict';
  var debug = new Debug(),
    hub = new Hub(debug),
    resource = new Resource(debug),
    api = new Api(debug),
    manager = new Manager(hub, resource, api),
    binder = new ProxyBinder(manager),
    policy,
    site_cfg = {
      'debug': 'log',
      'manifest': manifest,
      'moduleContext': (!context || typeof (context.isModule) === "undefined") ?
          util.isModuleContext() :
          context.isModule
    },
    link,
    Port,
    cleanup = function () {
      api.cleanup();
      manager.destroy();
    };

  if (config) {
    util.mixin(site_cfg, config, true);
  }
  site_cfg.global = freedomGlobal;
  if (context) {
    util.mixin(site_cfg, context, true);
  }

  // Register user-supplied extensions.
  // For example the 'core.oauth' provider defines a register function,
  // which enables site_cfg.oauth to be registered with it.
  context.providers.forEach(function (provider) {
    var name;
    if (provider.name.indexOf('core.') === 0 &&
        typeof provider.register === 'function') {
      name = provider.name.substr(5);
      // Invert priority and prefer user config over local context for these.
      if (config && config[name]) {
        provider.register(config[name]);
      } else if (site_cfg[name]) {
        provider.register(site_cfg[name]);
      } else {
        provider.register(undefined);
      }
    }
  });
  
  Bundle.register(context.providers, api);
  resource.register(context.resolvers || []);

  return new PromiseCompat(function (resolve, reject) {
    if (site_cfg.moduleContext) {
      Port = site_cfg.portType;
      link = new Port('Outbound', resource);
      manager.setup(link);

      // Delay debug messages until delegation to the parent context is setup.
      manager.once('delegate', manager.setup.bind(manager, debug));
    } else {
      manager.setup(debug);
      policy = new Policy(manager, resource, site_cfg);

      // Define how to load a root module.
      var fallbackLogger, getIface;
      fallbackLogger = function (message) {
        api.getCore('core.console', {
          config: site_cfg
        }).then(function (provider) {
          var logger = new provider.inst();
          debug.setLogger(logger);
          if (message) {
            debug.error(message);
          }
        });
      };
      getIface = function (manifest) {
        return resource.get(site_cfg.location, manifest).then(
          function (canonical_manifest) {
            return policy.get([], canonical_manifest);
          }
        ).then(function (instance) {
          manager.setup(instance);
          return binder.bindDefault(instance, api, instance.manifest);
        });
      };

      // Load appropriate Logger.
      if (site_cfg.logger) {
        getIface(site_cfg.logger).then(function (iface) {
          if (iface.external.api !== 'console') {
            fallbackLogger("Unwilling to use logger with unknown API:",
              iface.external.api);
          } else {
            debug.setLogger(iface.external());
          }
        }, fallbackLogger);
      } else {
        fallbackLogger();
      }

      // Load root module.
      getIface(site_cfg.manifest).then(function (iface) {
        iface.port.once('close', cleanup);
        return iface.external;
      }, function (err) {
        debug.error('Failed to retrieve manifest: ' + err);
        throw err;
      }).then(resolve, reject);
    }

    hub.emit('config', site_cfg);
  });
};

module.exports = setup;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./api":19,"./bundle":20,"./debug":22,"./hub":24,"./manager":27,"./policy":30,"./proxybinder":34,"./resource":35,"./util":36,"es6-promise":2}],24:[function(require,module,exports){
/*jslint indent:2,sloppy:true,node:true */
var util = require('./util');

/**
 * Defines fdom.Hub, the core message hub between freedom modules.
 * Incomming messages from apps are sent to hub.onMessage()
 * @class Hub
 * @param {Debug} debug Logger for debugging.
 * @constructor
 */
var Hub = function (debug) {
  this.debug = debug;
  this.config = {};
  this.apps = {};
  this.routes = {};

  util.handleEvents(this);
  this.on('config', function (config) {
    util.mixin(this.config, config);
  }.bind(this));
};

/**
 * Handle an incoming message from a freedom app.
 * @method onMessage
 * @param {String} source The identifiying source of the message.
 * @param {Object} message The sent message.
 */
Hub.prototype.onMessage = function (source, message) {
  var destination = this.routes[source], type;
  if (!destination || !destination.app) {
    this.debug.warn("Message dropped from unregistered source " + source);
    return;
  }

  if (!this.apps[destination.app]) {
    this.debug.warn("Message dropped to destination " + destination.app);
    return;
  }

  // The firehose tracing all internal freedom.js messages.
  if (!message.quiet && !destination.quiet && this.config && this.config.trace) {
    type = message.type;
    if (message.type === 'message' && message.message &&
        message.message.action === 'method') {
      type = 'method.' + message.message.type;
    } else if (message.type === 'method' && message.message &&
        message.message.type === 'method') {
      type = 'return.' + message.message.name;
    } else if (message.type === 'message' && message.message &&
        message.message.type === 'event') {
      type = 'event.' + message.message.name;
    }
    this.debug.debug(this.apps[destination.source].toString() +
        " -" + type + "-> " +
        this.apps[destination.app].toString() + "." + destination.flow);
  }

  this.apps[destination.app].onMessage(destination.flow, message);
};

/**
 * Get the local destination port of a flow.
 * @method getDestination
 * @param {String} source The flow to retrieve.
 * @return {Port} The destination port.
 */
Hub.prototype.getDestination = function (source) {
  var destination = this.routes[source];
  if (!destination) {
    return null;
  }
  return this.apps[destination.app];
};

/**
 * Get the local source port of a flow.
 * @method getSource
 * @param {Port} source The flow identifier to retrieve.
 * @return {Port} The source port.
 */
Hub.prototype.getSource = function (source) {
  if (!source) {
    return false;
  }
  if (!this.apps[source.id]) {
    this.debug.warn("No registered source '" + source.id + "'");
    return false;
  }
  return this.apps[source.id];
};

/**
 * Register a destination for messages with this hub.
 * @method register
 * @param {Port} app The Port to register.
 * @param {Boolean} [force] Whether to override an existing port.
 * @return {Boolean} Whether the app was registered.
 */
Hub.prototype.register = function (app, force) {
  if (!this.apps[app.id] || force) {
    this.apps[app.id] = app;
    return true;
  } else {
    return false;
  }
};

/**
 * Deregister a destination for messages with the hub.
 * Note: does not remove associated routes. As such, deregistering will
 * prevent the installation of new routes, but will not distrupt existing
 * hub routes.
 * @method deregister
 * @param {Port} app The Port to deregister
 * @return {Boolean} Whether the app was deregistered.
 */
Hub.prototype.deregister = function (app) {
  if (!this.apps[app.id]) {
    return false;
  }
  delete this.apps[app.id];
  return true;
};

/**
 * Install a new route in the hub.
 * @method install
 * @param {Port} source The source of the route.
 * @param {Port} destination The destination of the route.
 * @param {String} flow The flow where the destination will receive messages.
 * @param {Boolean} quiet Whether messages on this route should be suppressed.
 * @return {String} A routing source identifier for sending messages.
 */
Hub.prototype.install = function (source, destination, flow, quiet) {
  source = this.getSource(source);
  if (!source) {
    return;
  }
  if (!destination) {
    this.debug.warn("Unwilling to generate blackhole flow from " + source.id);
    return;
  }

  var route = this.generateRoute();
  this.routes[route] = {
    app: destination,
    flow: flow,
    source: source.id,
    quiet: quiet
  };
  if (typeof source.on === 'function') {
    source.on(route, this.onMessage.bind(this, route));
  }

  return route;
};

/**
 * Uninstall a hub route.
 * @method uninstall
 * @param {Port} source The source of the route.
 * @param {String} flow The route to uninstall.
 * @return {Boolean} Whether the route was able to be uninstalled.
 */
Hub.prototype.uninstall = function (source, flow) {
  source = this.getSource(source);
  if (!source) {
    return;
  }

  var route = this.routes[flow];
  if (!route) {
    return false;
  } else if (route.source !== source.id) {
    this.debug.warn("Flow " + flow + " does not belong to port " + source.id);
    return false;
  }

  delete this.routes[flow];
  if (typeof source.off === 'function') {
    source.off(route);
  }
  return true;
};

/**
 * Remove all listeners and notify all connected destinations of their removal.
 * @method teardown
 */
Hub.prototype.teardown = function () {
  util.eachProp(this.apps, function (source) {
    if (typeof source.off === 'function') {
      source.off();
    }
  });
  this.apps = {};
  this.routes = {};
};

/**
 * Generate a unique routing identifier.
 * @method generateRoute
 * @return {String} a routing source identifier.
 * @private
 */
Hub.prototype.generateRoute = function () {
  return util.getId();
};

module.exports = Hub;

},{"./util":36}],25:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A link connects two freedom hubs. This is an abstract class
 * providing common functionality of translating control channels,
 * and integrating config information.
 * @class Link
 * @implements Port
 * @constructor
 */
var Link = function (name, resource) {
  this.id = 'Link' + Math.random();
  this.name = name;
  this.resource = resource;
  this.config = {};
  this.src = null;

  util.handleEvents(this);
  util.mixin(this, Link.prototype);
};

/**
 * Receive messages from the hub to this port.
 * Manages startup, and passes others to 'deliverMessage' implemented
 * in derived classes.
 * @method onMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
Link.prototype.onMessage = function (flow, message) {
  if (flow === 'control' && !this.controlChannel) {
    if (!this.controlChannel && message.channel) {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
      this.start();
    }
  } else {
    this.deliverMessage(flow, message);
  }
};

/**
 * Register a handler to alert of errors on this port.
 * @method addErrorHandler
 * @param {Function} handler Method to call with errors.
 */
Link.prototype.addErrorHandler = function (handler) {
  this.onError = handler;
};

/**
 * Report an error on this link.
 * @method onerror
 * @param {Error} err The error that occurred.
 */
Link.prototype.onError = function (err) {
  //Filled in by addErrorHandler
};

/**
 * Emit messages to the the hub, mapping control channels.
 * @method emitMessage
 * @param {String} flow the flow to emit the message on.
 * @param {Object} messgae The message to emit.
 */
Link.prototype.emitMessage = function (flow, message) {
  if (flow === 'control' && this.controlChannel) {
    flow = this.controlChannel;
  }
  this.emit(flow, message);
};

module.exports = Link;

},{"./util":36}],26:[function(require,module,exports){
/*globals Worker */
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var Link = require('../link');

/**
 * A port providing message transport between two freedom contexts via Worker.
 * @class Worker
 * @extends Link
 * @uses handleEvents
 * @constructor
 */
var WorkerLink = function(id, resource) {
  Link.call(this, id, resource);
  if (id) {
    this.id = id;
  }
};

/**
 * Start this port by listening or creating a worker.
 * @method start
 * @private
 */
WorkerLink.prototype.start = function() {
  if (this.config.moduleContext) {
    this.setupListener();
  } else {
    this.setupWorker();
  }
};

/**
 * Stop this port by destroying the worker.
 * @method stop
 * @private
 */
WorkerLink.prototype.stop = function() {
  // Function is determined by setupListener or setupFrame as appropriate.
};

/**
 * Get the textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
WorkerLink.prototype.toString = function() {
  return "[Worker " + this.id + "]";
};

/**
 * Set up a global listener to handle incoming messages to this
 * freedom.js context.
 * @method setupListener
 */
WorkerLink.prototype.setupListener = function() {
  var onMsg = function(msg) {
    this.emitMessage(msg.data.flow, msg.data.message);
  }.bind(this);
  this.obj = this.config.global;
  this.obj.addEventListener('message', onMsg, true);
  this.stop = function() {
    this.obj.removeEventListener('message', onMsg, true);
    delete this.obj;
  };
  this.emit('started');
  this.obj.postMessage("Ready For Messages");
};

/**
 * Set up a worker with an isolated freedom.js context inside.
 * @method setupWorker
 */
WorkerLink.prototype.setupWorker = function() {
  var worker,
    blob,
    self = this;
  worker = new Worker(this.config.source + '#' + this.id);

  worker.addEventListener('error', function(err) {
    this.onError(err);
  }.bind(this), true);
  worker.addEventListener('message', function(worker, msg) {
    if (!this.obj) {
      this.obj = worker;
      this.emit('started');
      return;
    }
    this.emitMessage(msg.data.flow, msg.data.message);
  }.bind(this, worker), true);
  this.stop = function() {
    worker.terminate();
    if (this.obj) {
      delete this.obj;
    }
  };
};

/**
 * Receive messages from the hub to this port.
 * Received messages will be emitted from the other side of the port.
 * @method deliverMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
WorkerLink.prototype.deliverMessage = function(flow, message) {
  if (flow === 'control' && message.type === 'close' &&
      message.channel === 'control') {
    this.stop();
  } else {
    if (this.obj) {
      this.obj.postMessage({
        flow: flow,
        message: message
      });
    } else {
      this.once('started', this.onMessage.bind(this, flow, message));
    }
  }
};

module.exports = WorkerLink;


},{"../link":25}],27:[function(require,module,exports){
/*jslint indent:2,node:true,sloppy:true */
var util = require('./util');
var ModuleInternal = require('./moduleinternal');

/**
 * A freedom port which manages the control plane of of changing hub routes.
 * @class Manager
 * @implements Port
 * @param {Hub} hub The routing hub to control.
 * @param {Resource} resource The resource manager for the runtime.
 * @param {Api} api The API manager for the runtime.
 * @constructor
 */
var Manager = function (hub, resource, api) {
  this.id = 'control';
  this.config = {};
  this.controlFlows = {};
  this.dataFlows = {};
  this.dataFlows[this.id] = [];
  this.reverseFlowMap = {};

  this.debug = hub.debug;
  this.hub = hub;
  this.resource = resource;
  this.api = api;

  this.delegate = null;
  this.toDelegate = {};

  this.hub.on('config', function (config) {
    util.mixin(this.config, config);
    this.emit('config');
  }.bind(this));

  util.handleEvents(this);
  this.hub.register(this);
};

/**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
Manager.prototype.toString = function () {
  return "[Local Controller]";
};

/**
 * Process messages sent to this port.
 * The manager, or 'control' destination handles several types of messages,
 * identified by the request property.  The actions are:
 * 1. debug. Prints the message to the console.
 * 2. link. Creates a link between the source and a provided destination port.
 * 3. environment. Instantiate a module environment defined in ModuleInternal.
 * 4. delegate. Routes a defined set of control messages to another location.
 * 5. resource. Registers the source as a resource resolver.
 * 6. core. Generates a core provider for the requester.
 * 7. close. Tears down routes involing the requesting port.
 * 8. unlink. Tears down a route from the requesting port.
 * @method onMessage
 * @param {String} flow The source identifier of the message.
 * @param {Object} message The received message.
 */
Manager.prototype.onMessage = function (flow, message) {
  var reverseFlow = this.controlFlows[flow], origin;
  if (!reverseFlow) {
    this.debug.warn("Unknown message source: " + flow);
    return;
  }
  origin = this.hub.getDestination(reverseFlow);

  if (this.delegate && reverseFlow !== this.delegate &&
      this.toDelegate[flow]) {
    // Ship off to the delegee
    this.emit(this.delegate, {
      type: 'Delegation',
      request: 'handle',
      quiet: true,
      flow: flow,
      message: message
    });
    return;
  }

  if (message.request === 'debug') {
    this.debug.print(message);
    return;
  }

  if (message.request === 'link') {
    this.createLink(origin, message.name, message.to, message.overrideDest);
  } else if (message.request === 'environment') {
    this.createLink(origin, message.name, new ModuleInternal(this));
  } else if (message.request === 'delegate') {
    // Initate Delegation.
    if (this.delegate === null) {
      this.delegate = reverseFlow;
    }
    this.toDelegate[message.flow] = true;
    this.emit('delegate');
  } else if (message.request === 'resource') {
    this.resource.addResolver(message.args[0]);
    this.resource.addRetriever(message.service, message.args[1]);
  } else if (message.request === 'core') {
    if (this.core && reverseFlow === this.delegate) {
      (new this.core()).onMessage(origin, message.message);
      return;
    }
    this.getCore(function (to, core) {
      this.hub.onMessage(to, {
        type: 'core',
        core: core
      });
    }.bind(this, reverseFlow));
  } else if (message.request === 'close') {
    this.destroy(origin);
  } else if (message.request === 'unlink') {
    this.removeLink(origin, message.to);
  } else {
    this.debug.warn("Unknown control request: " + message.request);
    this.debug.log(JSON.stringify(message));
    return;
  }
};

/**
 * Get the port messages will be routed to given its id.
 * @method getPort
 * @param {String} portId The ID of the port.
 * @returns {fdom.Port} The port with that ID.
 */
Manager.prototype.getPort = function (portId) {
  return this.hub.getDestination(this.controlFlows[portId]);
};

/**
 * Set up a port with the hub.
 * @method setup
 * @param {Port} port The port to register.
 */
Manager.prototype.setup = function (port) {
  if (!port.id) {
    this.debug.warn("Refusing to setup unidentified port ");
    return false;
  }

  if (this.controlFlows[port.id]) {
    this.debug.warn("Refusing to re-initialize port " + port.id);
    return false;
  }

  if (!this.config.global) {
    this.once('config', this.setup.bind(this, port));
    return;
  }

  this.hub.register(port);
  var flow = this.hub.install(this, port.id, "control"),
    reverse = this.hub.install(port, this.id, port.id);
  this.controlFlows[port.id] = flow;
  this.dataFlows[port.id] = [reverse];
  this.reverseFlowMap[flow] = reverse;
  this.reverseFlowMap[reverse] = flow;

  if (port.lineage) {
    this.emit('moduleAdd', {id: port.id, lineage: port.lineage});
  }

  this.hub.onMessage(flow, {
    type: 'setup',
    channel: reverse,
    config: this.config
  });

  return true;
};

/**
 * Tear down a port on the hub, or the full local hub.
 * @method destroy
 * @apram {Port?} port The port to unregister.
 */
Manager.prototype.destroy = function (port) {
  if (!port) {
    // Tear down everything!
    util.eachProp(this.controlFlows, function (flow) {
      this.hub.onMessage(flow, {
        type: 'close'
      });
    }.bind(this));
    this.hub.teardown();
    return;
  }

  if (!port.id) {
    this.debug.warn("Unable to tear down unidentified port");
    return false;
  }

  if (port.lineage) {
    this.emit('moduleRemove', {id: port.id, lineage: port.lineage});
  }

  // Remove the port.
  delete this.controlFlows[port.id];

  // Remove associated links.
  var i;
  for (i = this.dataFlows[port.id].length - 1; i >= 0; i -= 1) {
    this.removeLink(port, this.dataFlows[port.id][i]);
  }

  // Remove the port.
  delete this.dataFlows[port.id];
  this.hub.deregister(port);
};

/**
 * Create a link between two ports.  Links are created in both directions,
 * and a message with those capabilities is sent to the source port.
 * @method createLink
 * @param {Port} port The source port.
 * @param {String} name The flow for messages from destination to port.
 * @param {Port} destination The destination port.
 * @param {String} [destName] The flow name for messages to the destination.
 * @param {Boolean} [toDest] Tell the destination about the link.
 */
Manager.prototype.createLink = function (port, name, destination, destName,
                                         toDest) {
  if (!this.config.global) {
    this.once('config',
      this.createLink.bind(this, port, name, destination, destName));
    return;
  }

  if (!this.controlFlows[port.id]) {
    this.debug.warn('Unwilling to link from non-registered source.');
    return;
  }

  if (!this.controlFlows[destination.id]) {
    if (this.setup(destination) === false) {
      this.debug.warn('Could not find or setup destination.');
      return;
    }
  }
  var quiet = destination.quiet || false,
    outgoingName = destName || 'default',
    outgoing = this.hub.install(port, destination.id, outgoingName, quiet),
    reverse;

  // Recover the port so that listeners are installed.
  destination = this.hub.getDestination(outgoing);
  reverse = this.hub.install(destination, port.id, name, quiet);

  this.reverseFlowMap[outgoing] = reverse;
  this.dataFlows[port.id].push(outgoing);
  this.reverseFlowMap[reverse] = outgoing;
  this.dataFlows[destination.id].push(reverse);

  if (toDest) {
    this.hub.onMessage(this.controlFlows[destination.id], {
      type: 'createLink',
      name: outgoingName,
      channel: reverse,
      reverse: outgoing
    });
  } else {
    this.hub.onMessage(this.controlFlows[port.id], {
      name: name,
      type: 'createLink',
      channel: outgoing,
      reverse: reverse
    });
  }
};

/**
 * Remove a link between to ports. The reverse link will also be removed.
 * @method removeLink
 * @param {Port} port The source port.
 * @param {String} name The flow to be removed.
 */
Manager.prototype.removeLink = function (port, name) {
  var reverse = this.hub.getDestination(name),
    rflow = this.reverseFlowMap[name],
    i;

  if (!reverse || !rflow) {
    this.debug.warn("Could not find metadata to remove flow: " + name);
    return;
  }

  if (this.hub.getDestination(rflow).id !== port.id) {
    this.debug.warn("Source port does not own flow " + name);
    return;
  }

  // Notify ports that a channel is closing.
  i = this.controlFlows[port.id];
  if (i) {
    this.hub.onMessage(i, {
      type: 'close',
      channel: name
    });
  }
  i = this.controlFlows[reverse.id];
  if (i) {
    this.hub.onMessage(i, {
      type: 'close',
      channel: rflow
    });
  }

  // Uninstall the channel.
  this.hub.uninstall(port, name);
  this.hub.uninstall(reverse, rflow);

  delete this.reverseFlowMap[name];
  delete this.reverseFlowMap[rflow];
  this.forgetFlow(reverse.id, rflow);
  this.forgetFlow(port.id, name);
};

/**
 * Forget the flow from id with a given name.
 * @method forgetFlow
 * @private
 * @param {String} id The port ID of the source.
 * @param {String} name The flow name.
 */
Manager.prototype.forgetFlow = function (id, name) {
  var i;
  if (this.dataFlows[id]) {
    for (i = 0; i < this.dataFlows[id].length; i += 1) {
      if (this.dataFlows[id][i] === name) {
        this.dataFlows[id].splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Get the core freedom.js API active on the current hub.
 * @method getCore
 * @private
 * @param {Function} cb Callback to fire with the core object.
 */
Manager.prototype.getCore = function (cb) {
  if (this.core) {
    cb(this.core);
  } else {
    this.api.getCore('core', this).then(function (core) {
      this.core = core.inst;
      cb(this.core);
    }.bind(this), function () {
      cb(undefined);
    });
  }
};

module.exports = Manager;

},{"./moduleinternal":29,"./util":36}],28:[function(require,module,exports){
/*jslint indent:2,node:true,sloppy:true */
var util = require('./util');
var Provider = require('./provider');

/**
 * The external Port face of a module on a hub.
 * @class Module
 * @extends Port
 * @param {String} manifestURL The manifest this module loads.
 * @param {String[]} creator The lineage of creation for this module.
 * @param {Policy} Policy The policy loader for dependencies.
 * @constructor
 */
var Module = function (manifestURL, manifest, creator, policy) {
  this.api = policy.api;
  this.policy = policy;
  this.resource = policy.resource;
  this.debug = policy.debug;

  this.config = {};

  this.id = manifestURL + Math.random();
  this.manifestId = manifestURL;
  this.manifest = manifest;
  this.lineage = [this.manifestId].concat(creator);

  this.quiet = this.manifest.quiet || false;

  this.externalPortMap = {};
  this.internalPortMap = {};
  this.dependantChannels = [];
  this.started = false;

  util.handleEvents(this);
};

/**
 * Receive a message for the Module.
 * @method onMessage
 * @param {String} flow The origin of the message.
 * @param {Object} message The message received.
 */
Module.prototype.onMessage = function (flow, message) {
  if (flow === 'control') {
    if (message.type === 'setup') {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
      this.emit(this.controlChannel, {
        type: 'Core Provider',
        request: 'core'
      });
      this.start();
      return;
    } else if (message.type === 'createLink' && message.channel) {
      this.debug.debug(this + 'got create link for ' + message.name);
      this.externalPortMap[message.name] = message.channel;
      if (this.internalPortMap[message.name] === undefined) {
        this.internalPortMap[message.name] = false;
      }
      var msg = {
        type: 'default channel announcement',
        channel: message.reverse
      };
      if (this.manifest.dependencies &&
          this.manifest.dependencies[message.name]) {
        msg.api = this.manifest.dependencies[message.name].api;
      }
      this.emit(message.channel, msg);
      return;
    } else if (message.core) {
      this.core = new message.core();
      this.emit('core', message.core);
      return;
    } else if (message.type === 'close') {
      // Closing channel.
      if (!message.channel || message.channel === 'control') {
        this.stop();
      }
      this.deregisterFlow(message.channel, false);
    } else {
      this.port.onMessage(flow, message);
    }
  } else {
    if ((this.externalPortMap[flow] === false ||
        !this.externalPortMap[flow]) && message.channel) {
      this.debug.debug(this + 'handling channel announcement for ' + flow);
      this.externalPortMap[flow] = message.channel;
      if (this.internalPortMap[flow] === undefined) {
        this.internalPortMap[flow] = false;

        // New incoming connection attempts should get routed to modInternal.
        if (this.manifest.provides && this.modInternal) {
          this.port.onMessage(this.modInternal, {
            type: 'Connection',
            channel: flow,
            api: message.api
          });
        } else if (this.manifest.provides) {
          this.once('modInternal', function (flow, api) {
            this.port.onMessage(this.modInternal, {
              type: 'Connection',
              channel: flow,
              api: api
            });
          }.bind(this, flow, message.api));
        // First connection retains legacy mapping as 'default'.
        } else if (!this.externalPortMap['default'] && message.channel) {
          this.externalPortMap['default'] = message.channel;
          this.once('internalChannelReady', function (flow) {
            this.internalPortMap[flow] = this.internalPortMap['default'];
          }.bind(this, flow));
        }
      }
      return;
    } else if (!this.started) {
      this.once('start', this.onMessage.bind(this, flow, message));
    } else {
      if (this.internalPortMap[flow] === false) {
        console.warn('waiting on internal channel for msg');
        this.once('internalChannelReady', this.onMessage.bind(this, flow, message));
      } else if (!this.internalPortMap[flow]) {
        this.debug.error('Unexpected message from ' + flow);
        return;
      } else {
        this.port.onMessage(this.internalPortMap[flow], message);
      }
    }
  }
};

/**
 * Clean up after a flow which is no longer used / needed.
 * @method deregisterFLow
 * @param {String} flow The flow to remove mappings for.
 * @param {Boolean} internal If the flow name is the internal identifier.
 * @returns {Boolean} Whether the flow was successfully deregistered.
 * @private
 */
Module.prototype.deregisterFlow = function (flow, internal) {
  var key,
    map = internal ? this.internalPortMap : this.externalPortMap;
  // TODO: this is inefficient, but seems less confusing than a 3rd
  // reverse lookup map.
  for (key in map) {
    if (map[key] === flow) {
      if (internal) {
        this.emit(this.controlChannel, {
          type: 'Channel Teardown',
          request: 'unlink',
          to: this.externalPortMap[key]
        });
      } else if (this.port) {
        this.port.onMessage('control', {
          type: 'close',
          channel: this.internalPortMap[key]
        });
      }
      delete this.externalPortMap[key];
      delete this.internalPortMap[key];

      // When there are still non-dependant channels, keep running
      for (key in this.externalPortMap) {
        if (this.externalPortMap.hasOwnProperty(key)) {
          if (this.dependantChannels.indexOf(key) < 0) {
            return true;
          }
        }
      }
      // Otherwise shut down the module.
      this.stop();
      return true;
    }
  }
  return false;
};

/**
 * Attempt to start the module once the remote freedom context
 * exists.
 * @method start
 * @private
 */
Module.prototype.start = function () {
  var Port;
  if (this.started || this.port) {
    return false;
  }
  if (this.controlChannel) {
    this.loadLinks();
    Port = this.config.portType;
    this.port = new Port(this.manifest.name, this.resource);
    // Listen to all port messages.
    this.port.on(this.emitMessage.bind(this));
    this.port.addErrorHandler(function (err) {
      this.debug.warn('Module Failed', err);
      this.emit(this.controlChannel, {
        request: 'close'
      });
    }.bind(this));
    // Tell the local port to ask us for help.
    this.port.onMessage('control', {
      channel: 'control',
      config: this.config
    });

    // Tell the remote location to delegate debugging.
    this.port.onMessage('control', {
      type: 'Redirect',
      request: 'delegate',
      flow: 'debug'
    });
    this.port.onMessage('control', {
      type: 'Redirect',
      request: 'delegate',
      flow: 'core'
    });

    // Tell the container to instantiate the counterpart to this external view.
    this.port.onMessage('control', {
      type: 'Environment Configuration',
      request: 'environment',
      name: 'ModInternal'
    });
  }
};

/**
 * Stop the module when it is no longer needed, and tear-down state.
 * @method stop
 * @private
 */
Module.prototype.stop = function () {
  if (!this.started) {
    return;
  }
  this.emit('close');
  if (this.port) {
    this.port.off();
    this.port.onMessage('control', {
      type: 'close',
      channel: 'control'
    });
    this.port.stop();
    delete this.port;
  }
  delete this.policy;
  this.started = false;
};

/**
 * Textual Description of the Port
 * @method toString
 * @return {String} The description of this Port.
 */
Module.prototype.toString = function () {
  return "[Module " + this.manifest.name + "]";
};

/**
 * Intercept messages as they arrive from the module,
 * mapping them between internal and external flow names.
 * @method emitMessage
 * @param {String} name The destination the module wants to send to.
 * @param {Object} message The message to send.
 * @private
 */
Module.prototype.emitMessage = function (name, message) {
  if (this.internalPortMap[name] === false && message.channel) {
    this.internalPortMap[name] = message.channel;
    this.emit('internalChannelReady');
    return;
  }
  // Terminate debug redirection requested in start().
  if (name === 'control') {
    if (message.flow === 'debug' && message.message) {
      this.debug.format(message.message.severity,
          message.message.source || this.toString(),
          message.message.msg);
    } else if (message.flow === 'core' && message.message) {
      if (!this.core) {
        this.once('core', this.emitMessage.bind(this, name, message));
        return;
      }
      if (message.message.type === 'register' ||
          message.message.type === 'require') {
        message.message.reply = this.port.onMessage.bind(this.port, 'control');
        this.externalPortMap[message.message.id] = false;
      }
      this.core.onMessage(this, message.message);
    } else if (message.name === 'ModInternal' && !this.modInternal) {
      this.modInternal = message.channel;
      this.port.onMessage(this.modInternal, {
        type: 'Initialization',
        id: this.manifestId,
        appId: this.id,
        manifest: this.manifest,
        lineage: this.lineage,
        channel: message.reverse
      });
      this.emit('modInternal');
    } else if (message.type === 'createLink') {
      this.internalPortMap[message.name] = message.channel;
      this.port.onMessage(message.channel, {
        type: 'channel announcement',
        channel: message.reverse
      });
      this.emit('internalChannelReady');
    } else if (message.type === 'close') {
      this.deregisterFlow(message.channel, true);
    }
  } else if (name === 'ModInternal' && message.type === 'ready' && !this.started) {
    this.started = true;
    this.emit('start');
  } else if (name === 'ModInternal' && message.type === 'resolve') {
    this.resource.get(this.manifestId, message.data).then(function (id, data) {
      this.port.onMessage(this.modInternal, {
        type: 'resolve.response',
        id: id,
        data: data
      });
    }.bind(this, message.id), function () {
      this.debug.warn('Error Resolving URL for Module.');
    }.bind(this));
  } else {
    this.emit(this.externalPortMap[name], message);
  }
  return false;
};

/**
 * Create a dynamic dependency on another module.
 * @method require
 * @param {String} name The name of the dependency.
 * @param {String} manifest The URL of the dependency to add.
 */
Module.prototype.require = function (name, manifest) {
  this.dependantChannels.push(name);
  this.addDependency(manifest, name).catch(function (err) {
    this.port.onMessage(this.modInternal, {
      type: 'require.failure',
      id: name,
      error: err.message
    });
  }.bind(this));
};

/**
 * Add a dependency to the module's dependency tree
 * @method addDependency
 * @param {String} url The manifest URL of the dependency
 * @param {String} name The exposed name of the module.
 * @returns {Module} The created dependent module.
 * @private
 */
Module.prototype.addDependency = function (url, name) {
  return this.resource.get(this.manifestId, url)
    .then(function (url) {
      return this.policy.get(this.lineage, url);
    }.bind(this))
    .then(function (dep) {
      this.updateEnv(name, dep.manifest);
      this.emit(this.controlChannel, {
        type: 'Link to ' + name,
        request: 'link',
        name: name,
        overrideDest: name + '.' + this.id,
        to: dep
      });
      return dep;
    }.bind(this))
    .catch(function (err) {
      this.debug.warn(this.toString() + ' failed to load dep: ', name, err);
      throw err;
    }.bind(this));
};

/**
 * Request the external routes used by this module.
 * @method loadLinks
 * @private
 */
Module.prototype.loadLinks = function () {
  var i, channels = ['default'], name, dep;

  if (this.manifest.permissions) {
    for (i = 0; i < this.manifest.permissions.length; i += 1) {
      name = this.manifest.permissions[i];
      if (channels.indexOf(name) < 0 && name.indexOf('core.') === 0) {
        channels.push(name);
        this.dependantChannels.push(name);
        dep = new Provider(this.api.get(name).definition, this.debug);
        this.api.provideCore(name, dep, this);

        this.emit(this.controlChannel, {
          type: 'Core Link to ' + name,
          request: 'link',
          name: name,
          to: dep
        });
      }
    }
  }
  if (this.manifest.dependencies) {
    util.eachProp(this.manifest.dependencies, function (desc, name) {
      if (channels.indexOf(name) < 0) {
        channels.push(name);
        this.dependantChannels.push(name);
      }

      this.addDependency(desc.url, name);
    }.bind(this));
  }
  // Note that messages can be synchronous, so some ports may already be bound.
  for (i = 0; i < channels.length; i += 1) {
    this.externalPortMap[channels[i]] = this.externalPortMap[channels[i]] || false;
    this.internalPortMap[channels[i]] = false;
  }
};

/**
 * Update the module environment with information about a dependent manifest.
 * @method updateEnv
 * @param {String} dep The dependency
 * @param {Object} manifest The manifest of the dependency
 */
Module.prototype.updateEnv = function (dep, manifest) {
  if (!manifest) {
    return;
  }
  if (!this.modInternal) {
    this.once('modInternal', this.updateEnv.bind(this, dep, manifest));
    return;
  }

  var metadata;

  // Decide if/what other properties should be exported.
  // Keep in sync with ModuleInternal.updateEnv
  metadata = {
    name: manifest.name,
    icon: manifest.icon,
    description: manifest.description,
    api: manifest.api
  };

  this.port.onMessage(this.modInternal, {
    type: 'manifest',
    name: dep,
    manifest: metadata
  });
};

module.exports = Module;

},{"./provider":31,"./util":36}],29:[function(require,module,exports){
/*jslint indent:2, node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

var ApiInterface = require('./proxy/apiInterface');
var Provider = require('./provider');
var ProxyBinder = require('./proxybinder');
var util = require('./util');

/**
 * The internal logic for module setup, which makes sure the public
 * facing exports have appropriate properties, and load user scripts.
 * @class ModuleInternal
 * @extends Port
 * @param {Port} manager The manager in this module to use for routing setup.
 * @constructor
 */
var ModuleInternal = function (manager) {
  this.config = {};
  this.manager = manager;
  this.debug = manager.debug;
  this.binder = new ProxyBinder(this.manager);
  this.api = this.manager.api;
  this.manifests = {};
  this.providers = {};

  this.id = 'ModuleInternal';
  this.pendingPorts = 0;
  this.requests = {};
  this.unboundPorts = {};

  util.handleEvents(this);
};

/**
 * Message handler for this port.
 * This port only handles two messages:
 * The first is its setup from the manager, which it uses for configuration.
 * The second is from the module controller (fdom.port.Module), which provides
 * the manifest info for the module.
 * @method onMessage
 * @param {String} flow The detination of the message.
 * @param {Object} message The message.
 */
ModuleInternal.prototype.onMessage = function (flow, message) {
  if (flow === 'control') {
    if (!this.controlChannel && message.channel) {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
    }
  } else if (flow === 'default' && !this.appId) {
    // Recover the ID of this module:
    this.port = this.manager.hub.getDestination(message.channel);
    this.externalChannel = message.channel;
    this.appId = message.appId;
    this.lineage = message.lineage;

    var objects = this.mapProxies(message.manifest);

    this.generateEnv(message.manifest, objects).then(function () {
      return this.loadLinks(objects);
    }.bind(this)).then(this.loadScripts.bind(this, message.id,
        message.manifest.app.script)).then(null, function (err) {
      this.debug.error('Could not set up module ' + this.appId + ': ', err);
    }.bind(this));
  } else if (flow === 'default' && message.type === 'resolve.response' &&
             this.requests[message.id]) {
    this.requests[message.id](message.data);
    delete this.requests[message.id];
  } else if (flow === 'default' && message.type === 'require.failure' &&
             this.unboundPorts[message.id]) {
    this.unboundPorts[message.id].callback(undefined, message.error);
    delete this.unboundPorts[message.id];
  } else if (flow === 'default' && message.type === 'manifest') {
    this.emit('manifest', message);
    this.updateManifest(message.name, message.manifest);
  } else if (flow === 'default' && message.type === 'Connection') {
    // Multiple connections can be made to the default provider.
    if (message.api && this.providers[message.api]) {
      this.manager.createLink(this.providers[message.api], message.channel,
                             this.port, message.channel);
    } else if (this.defaultPort &&
               (message.api === this.defaultPort.api || !message.api)) {
      this.manager.createLink(this.defaultPort, message.channel,
                              this.port, message.channel);
    } else {
      this.once('start', this.onMessage.bind(this, flow, message));
    }
  }
};

/**
 * Get a textual description of this Port.
 * @method toString
 * @return {String} a description of this Port.
 */
ModuleInternal.prototype.toString = function () {
  return "[Environment Helper]";
};

/**
 * Generate an externaly visisble namespace
 * @method generateEnv
 * @param {Object} manifest The manifest of the module.
 * @param {Object[]} items Other interfaces to load.
 * @returns {Promise} A promise when the external namespace is visible.
 * @private
 */
ModuleInternal.prototype.generateEnv = function (manifest, items) {
  return this.binder.bindDefault(this.port, this.api, manifest, true).then(
    function (binding) {
      var i = 0;
      binding.port.api = binding.external.api;
      this.defaultPort = binding.port;
      if (binding.external.api) {
        for (i = 0; i < items.length; i += 1) {
          if (items[i].name === binding.external.api && items[i].def.provides) {
            items.splice(i, 1);
            break;
          }
        }
      }
      this.config.global.freedom = binding.external;
    }.bind(this)
  );
};

/**
 * Register an unused channel ID for callback, and once information
 * about the channel is known, call the handler with that information.
 * @method registerId
 * @param {String} api The preferred API to use for the new channel.
 * @param {Function} callback Function to call once channel ready
 * @returns {String} The allocated channel name.
 */
ModuleInternal.prototype.registerId = function (api, callback) {
  var id = util.getId();
  this.unboundPorts[id] = {
    name: api,
    callback: callback
  };
  return id;
};

/**
 * Attach a proxy to the externally visible namespace.
 * @method attach
 * @param {String} name The name of the proxy.
 * @param {Boolean} provides If this proxy is a provider.
 * @param {ProxyInterface} proxy The proxy to attach.
 * @param {String} api The API the proxy implements.
 * @private.
 */
ModuleInternal.prototype.attach = function (name, provides, proxy) {
  var exp = this.config.global.freedom;

  if (provides) {
    this.providers[name] = proxy.port;
  }

  if (!exp[name]) {
    exp[name] = proxy.external;
    if (this.manifests[name]) {
      exp[name].manifest = this.manifests[name];
    }
  }

  this.pendingPorts -= 1;
  if (this.pendingPorts === 0) {
    this.emit('start');
  }

  return exp[name];
};

/**
 * Request a set of proxy interfaces, and bind them to the external
 * namespace.
 * @method loadLinks
 * @param {Object[]} items Descriptors of the proxy ports to load.
 * @private
 * @returns {Promise} Promise for when all links are loaded.
 */
//TODO(willscott): promise should be chained, rather than going through events.
ModuleInternal.prototype.loadLinks = function (items) {
  var i, proxy, provider, core,
    manifestPredicate = function (name, flow, msg) {
      return flow === 'manifest' && msg.name === name;
    },
    onManifest = function (item, msg) {
      var definition = {
        name: item.api
      };
      if (!msg.manifest.api || !msg.manifest.api[item.api]) {
        definition.definition = null;
      } else {
        definition.definition = msg.manifest.api[item.api];
      }
      this.binder.getExternal(this.port, item.name, definition).then(
        this.attach.bind(this, item.name, false)
      );
    }.bind(this),
    promise = new PromiseCompat(function (resolve, reject) {
      this.once('start', resolve);
    }.bind(this));

  for (i = 0; i < items.length; i += 1) {
    if (items[i].api && !items[i].def) {
      if (this.manifests[items[i].name]) {
        onManifest(items[i], {
          manifest: this.manifests[items[i].name]
        });
      } else {
        this.once(manifestPredicate.bind({}, items[i].name),
                  onManifest.bind(this, items[i]));
      }
    } else {
      this.binder.getExternal(this.port, items[i].name, items[i].def).then(
        this.attach.bind(this, items[i].name, items[i].def &&
                         items[i].def.provides)
      );
    }
    this.pendingPorts += 1;
  }

  // Allow resolution of files by parent.
  this.manager.resource.addResolver(function (manifest, url, resolve) {
    var id = util.getId();
    this.requests[id] = resolve;
    this.emit(this.externalChannel, {
      type: 'resolve',
      id: id,
      data: url
    });
    return true;
  }.bind(this));

  // Attach Core.
  this.pendingPorts += 1;

  core = this.api.get('core').definition;
  provider = new Provider(core, this.debug);
  this.manager.getCore(function (CoreProv) {
    new CoreProv(this.manager).setId(this.lineage, this);
    provider.getInterface().provideAsynchronous(CoreProv);
  }.bind(this));

  this.emit(this.controlChannel, {
    type: 'Link to core',
    request: 'link',
    name: 'core',
    to: provider
  });

  this.binder.getExternal(provider, 'default', {
    name: 'core',
    definition: core
  }).then(function (core) {
    core.external.getLoggerSync = this.debug.getLoggingShim(
        core.external().getLogger);
    this.attach('core', false, core);
  }.bind(this));


  if (this.pendingPorts === 0) {
    this.emit('start');
  }

  return promise;
};

/**
 * Update the exported manifest of a dependency.
 * Sets it internally if not yet exported, or attaches the property if it
 * is loaded after the module has started (we don't delay start to retreive
 * the manifest of the dependency.)
 * @method updateManifest
 * @param {String} name The Dependency
 * @param {Object} manifest The manifest of the dependency
 */
ModuleInternal.prototype.updateManifest = function (name, manifest) {
  var exp = this.config.global.freedom;

  if (exp && exp[name]) {
    exp[name].manifest = manifest;
  // Handle require() dependency resolution.
  } else if (this.unboundPorts[name]) {
    this.binder.getExternal(this.port, name,
        this.binder.getAPI(manifest, this.api, this.unboundPorts[name].api))
      .then(
        this.attach.bind(this, name, false)
      ).then(function(proxy) {
        this.unboundPorts[name].callback(proxy);
        delete this.unboundPorts[name];
      }.bind(this));
  } else {
    this.manifests[name] = manifest;
  }
};

/**
 * Determine which proxy ports should be exposed by this module.
 * @method mapProxies
 * @param {Object} manifest the module JSON manifest.
 * @return {Object[]} proxy descriptors defined in the manifest.
 */
ModuleInternal.prototype.mapProxies = function (manifest) {
  var proxies = [], seen = ['core'], i, obj;

  if (manifest.permissions) {
    for (i = 0; i < manifest.permissions.length; i += 1) {
      obj = {
        name: manifest.permissions[i],
        def: undefined
      };
      obj.def = this.api.get(obj.name);
      if (seen.indexOf(obj.name) < 0 && obj.def) {
        proxies.push(obj);
        seen.push(obj.name);
      }
    }
  }

  if (manifest.dependencies) {
    util.eachProp(manifest.dependencies, function (desc, name) {
      obj = {
        name: name,
        api: desc.api
      };
      if (seen.indexOf(name) < 0) {
        if (desc.api) {
          obj.def = this.api.get(desc.api);
        }
        proxies.push(obj);
        seen.push(name);
      }
    }.bind(this));
  }

  if (manifest.provides) {
    for (i = 0; i < manifest.provides.length; i += 1) {
      obj = {
        name: manifest.provides[i],
        def: undefined
      };
      obj.def = this.api.get(obj.name);
      if (obj.def) {
        obj.def.provides = true;
      } else if (manifest.api && manifest.api[obj.name]) {
        obj.def = {
          name: obj.name,
          definition: manifest.api[obj.name],
          provides: true
        };
      } else {
        this.debug.warn('Module will not provide "' + obj.name +
          '", since no declaration can be found.');
        /*jslint continue:true*/
        continue;
      }
      /*jslint continue:false*/
      if (seen.indexOf(obj.name) < 0) {
        proxies.push(obj);
        seen.push(obj.name);
      }
    }
  }

  return proxies;
};

/**
 * Load external scripts into this namespace.
 * @method loadScripts
 * @param {String} from The URL of this modules's manifest.
 * @param {String[]} scripts The URLs of the scripts to load.
 */
ModuleInternal.prototype.loadScripts = function (from, scripts) {
  // TODO(salomegeo): add a test for failure.
  var importer = function (script, resolve, reject) {
    try {
      this.config.global.importScripts(script);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  }.bind(this),
    scripts_count,
    load;
  if (typeof scripts === 'string') {
    scripts_count = 1;
  } else {
    scripts_count = scripts.length;
  }

  load = function (next) {
    if (next === scripts_count) {
      this.emit(this.externalChannel, {
        type: "ready"
      });
      return;
    }

    var script;
    if (typeof scripts === 'string') {
      script = scripts;
    } else {
      script = scripts[next];
    }

    this.manager.resource.get(from, script).then(function (url) {
      this.tryLoad(importer, url).then(function () {
        load(next + 1);
      }.bind(this));
    }.bind(this));
  }.bind(this);



  if (!this.config.global.importScripts) {
    importer = function (url, resolve, reject) {
      var script = this.config.global.document.createElement('script');
      script.src = url;
      script.addEventListener('load', resolve, true);
      this.config.global.document.body.appendChild(script);
    }.bind(this);
  }

  load(0);
};

/**
 * Attempt to load resolved scripts into the namespace.
 * @method tryLoad
 * @private
 * @param {Function} importer The actual import function
 * @param {String[]} urls The resoved URLs to load.
 * @returns {Promise} completion of load
 */
ModuleInternal.prototype.tryLoad = function (importer, url) {
  return new PromiseCompat(importer.bind({}, url)).then(function (val) {
    return val;
  }, function (e) {
    this.debug.warn(e.stack);
    this.debug.error("Error loading " + url, e);
    this.debug.error("If the stack trace is not useful, see https://" +
        "github.com/freedomjs/freedom/wiki/Debugging");
  }.bind(this));
};

module.exports = ModuleInternal;

},{"./provider":31,"./proxy/apiInterface":32,"./proxybinder":34,"./util":36,"es6-promise":2}],30:[function(require,module,exports){
/*globals XMLHttpRequest */
/*jslint indent:2,white:true,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;
var Module = require('./module');
var util = require('./util');

/**
 * The Policy registry for freedom.js.  Used to look up modules and provide
 * migration and coallesing of execution.
 * @Class Policy
 * @param {Manager} manager The manager of the active runtime.
 * @param {Resource} resource The resource loader of the active runtime.
 * @param {Object} config The local config.
 * @constructor
 */
var Policy = function(manager, resource, config) {
  this.api = manager.api;
  this.debug = manager.debug;
  this.location = config.location;
  this.resource = resource;

  this.config = config;
  this.runtimes = [];
  this.policies = [];
  this.pending = {};
  util.handleEvents(this);

  this.add(manager, config.policy);
  this.runtimes[0].local = true;
};

/**
 * The policy a runtime is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultPolicy
 */
Policy.prototype.defaultPolicy = {
  background: false, // Can this runtime run 'background' modules?
  interactive: true // Is there a view associated with this runtime?
  // TODO: remaining runtime policy.
};

/**
 * The constraints a code modules is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultConstraints
 */
Policy.prototype.defaultConstraints = {
  isolation: "always", // values: always, app, never
  placement: "local" // values: local, stable, redundant
  // TODO: remaining constraints, express platform-specific dependencies.
};

/**
 * Resolve a module from its canonical URL.
 * Reponds with the promise of a port representing the module, 
 * @method get
 * @param {String[]} lineage The lineage of the requesting module.
 * @param {String} id The canonical ID of the module to get.
 * @returns {Promise} A promise for the local port towards the module.
 */
Policy.prototype.get = function(lineage, id) {
  
  // Make sure that a module isn't getting located twice at the same time.
  // This is resolved by delaying if it until we see it in a 'moduleAdd' event.
  if (this.pending[id]) {
    return new PromiseCompat(function (resolve, reject) {
      this.once('placed', function(l, i) {
        this.get(l, i).then(resolve, reject);
      }.bind(this, lineage, id));
    }.bind(this));
  } else {
    this.pending[id] = true;
  }

  return this.loadManifest(id).then(function(manifest) {
    var constraints = this.overlay(this.defaultConstraints, manifest.constraints),
        runtime = this.findDestination(lineage, id, constraints),
        portId;
    if (runtime.local) {
      portId = this.isRunning(runtime, id, lineage,
                             constraints.isolation !== 'never');
      if(constraints.isolation !== 'always' && portId) {
        this.debug.info('Reused port ' + portId);
        delete this.pending[id];
        this.emit('placed');
        return runtime.manager.getPort(portId);
      } else {
        return new Module(id, manifest, lineage, this);
      }
    } else {
      // TODO: Create a port to go to the remote runtime.
      this.debug.error('Unexpected location selected for module placement');
      return false;
    }
  }.bind(this), function(err) {
    this.debug.error('Policy Error Resolving ' + id, err);
    throw(err);
  }.bind(this));
};

/**
 * Find the runtime destination for a module given its constraints and the
 * module creating it.
 * @method findDestination
 * @param {String[]} lineage The identity of the module creating this module.
 * @param {String] id The canonical url of the module
 * @param {Object} constraints Constraints for the module.
 * @returns {Object} The element of this.runtimes where the module should run.
 */
Policy.prototype.findDestination = function(lineage, id, constraints) {
  var i;

  // Step 1: if an instance already exists, the m
  if (constraints.isolation !== 'always') {
    for (i = 0; i < this.policies.length; i += 1) {
      if (this.isRunning(this.runtimes[i], id, lineage,
                         constraints.isolation !== 'never')) {
        return this.runtimes[i];
      }
    }
  }

  // Step 2: if the module wants stability, it may need to be remote.
  if (constraints.placement === 'local') {
    return this.runtimes[0];
  } else if (constraints.placement === 'stable') {
    for (i = 0; i < this.policies.length; i += 1) {
      if (this.policies[i].background) {
        return this.runtimes[i];
      }
    }
  }

  // Step 3: if the module needs longevity / interactivity, it may want to be remote.
  return this.runtimes[0];
};

/**
 * Determine if a known runtime is running an appropriate instance of a module.
 * @method isRunning
 * @param {Object} runtime The runtime to check.
 * @param {String} id The module to look for.
 * @param {String[]} from The identifier of the requesting module.
 * @param {Boolean} fullMatch If the module needs to be in the same app.
 * @returns {String|Boolean} The Module id if it is running, or false if not.
 */
Policy.prototype.isRunning = function(runtime, id, from, fullMatch) {
  var i = 0, j = 0, okay;
  for (i = 0; i < runtime.modules.length; i += 1) {
    if (fullMatch && runtime.modules[i].length === from.length + 1) {
      okay = true;
      for (j = 0; j < from.length; j += 1) {
        if (runtime.modules[i][j + 1].indexOf(from[j]) !== 0) {
          okay = false;
          break;
        }
      }
      if (runtime.modules[i][0].indexOf(id) !== 0) {
        okay = false;
      }

      if (okay) {
        return runtime.modules[i][0];
      }
    } else if (!fullMatch && runtime.modules[i][0].indexOf(id) === 0) {
      return runtime.modules[i][0];
    }
  }
  return false;
};

/**
 * Get a promise of the manifest for a module ID.
 * @method loadManifest
 * @param {String} manifest The canonical ID of the manifest
 * @returns {Promise} Promise for the json contents of the manifest.
 */
Policy.prototype.loadManifest = function(manifest) {
  return this.resource.getContents(manifest).then(function(data) {
    var resp = {};
    try {
      return JSON.parse(data);
    } catch(err) {
      this.debug.error("Failed to load " + manifest + ": " + err);
      throw new Error("No Manifest Available");
    }
  }.bind(this));
};

/**
 * Add a runtime to keep track of in this policy.
 * @method add
 * @param {fdom.port} port The port to use for module lifetime info
 * @param {Object} policy The policy of the runtime.
 */
Policy.prototype.add = function(port, policy) {
  var runtime = {
    manager: port,
    modules: []
  };
  this.runtimes.push(runtime);
  this.policies.push(this.overlay(this.defaultPolicy, policy));

  port.on('moduleAdd', function(runtime, info) {
    var lineage = [];
    lineage = lineage.concat(info.lineage);
    lineage[0] = info.id;
    runtime.modules.push(lineage);
    if (this.pending[info.lineage[0]]) {
      delete this.pending[info.lineage[0]];
      this.emit('placed');
    }
  }.bind(this, runtime));
  port.on('moduleRemove', function(runtime, info) {
    var lineage = [], i, modFingerprint;
    lineage = lineage.concat(info.lineage);
    lineage[0] = info.id;
    modFingerprint = lineage.toString();

    for (i = 0; i < runtime.modules.length; i += 1) {
      if (runtime.modules[i].toString() === modFingerprint) {
        runtime.modules.splice(i, 1);
        return;
      }
    }
    this.debug.warn('Unknown module to remove: ', info.id);
  }.bind(this, runtime));
};

/**
 * Overlay a specific policy or constraint instance on default settings.
 * TODO: consider making static.
 * @method overlay
 * @private
 * @param {Object} base The default object
 * @param {Object} overlay The superceeding object
 * @returns {Object} A new object with base parameters when not set in overlay.
 */
Policy.prototype.overlay = function(base, overlay) {
  var ret = {};

  util.mixin(ret, base);
  if (overlay) {
    util.mixin(ret, overlay, true);
  }
  return ret;
};

module.exports = Policy;

},{"./module":28,"./util":36,"es6-promise":2}],31:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true, browser:true */
var Consumer = require('./consumer');
var util = require('./util');

/**
 * A freedom port for a user-accessable provider.
 * @class Provider
 * @implements Port
 * @uses handleEvents
 * @param {Object} def The interface of the provider.
 * @param {Debug} debug The debugger to use for logging.
 * @contructor
 */
var Provider = function (def, debug) {
  this.id = Consumer.nextId();
  util.handleEvents(this);
  this.debug = debug;

  this.definition = def;
  this.mode = Provider.mode.synchronous;
  this.channels = {};
  this.iface = null;
  this.closeHandlers = {};
  this.providerCls = null;

  this.ifaces = {};
  this.emits = {};
};

/**
 * Provider modes of operation.
 * @property mode
 * @static
 * @type number
 */
Provider.mode = {
  synchronous: 0,
  asynchronous: 1,
  promises: 2
};

/**
 * Receive external messages for the provider.
 * @method onMessage
 * @param {String} source the source identifier of the message.
 * @param {Object} message The received message.
 */
Provider.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.reverse) {
    this.channels[message.name] = message.channel;
    this.emit(message.channel, {
      type: 'channel announcement',
      channel: message.reverse
    });
    this.emit('start');
  } else if (source === 'control' && message.type === 'setup') {
    this.controlChannel = message.channel;
  } else if (source === 'control' && message.type === 'close') {
    if (message.channel === this.controlChannel) {
      delete this.controlChannel;
    }
    this.close();
  } else {
    if (!this.channels[source] && message.channel) {
      this.channels[source] = message.channel;
      this.emit('start');
      return;
    } else if (!this.channels[source]) {
      this.debug.warn('Message from unconfigured source: ' + source);
      return;
    }

    if (message.type === 'close' && message.to) {
      this.teardown(source, message.to);
    } else if (message.to && this.emits[source] &&
               this.emits[source][message.to]) {
      message.message.to = message.to;
      this.emits[source][message.to](message.message);
    } else if (message.to && message.message &&
        message.message.type === 'construct') {
      var args = Consumer.portableToMessage(
          (this.definition.constructor && this.definition.constructor.value) ?
              this.definition.constructor.value : [],
          message.message,
          this.debug
        ),
        instance;
      if (!this.ifaces[source]) {
        this.ifaces[source] = {};
        this.emits[source] = {};
      }
      this.ifaces[source][message.to] = true;
      instance = this.getProvider(source, message.to, args);
      // don't save a reference to instance if it closed itself already.
      if (this.ifaces[source] &&
          this.ifaces[source][message.to]) {
        this.ifaces[source][message.to] = instance.instance;
        this.emits[source][message.to] = instance.onmsg;
      }
    } else {
      this.debug.warn(this.toString() + ' dropping message ' +
          JSON.stringify(message));
    }
  }
};

/**
 * Close / teardown the flow this provider terminates.
 * @method close
 */
Provider.prototype.close = function () {
  if (this.controlChannel) {
    this.emit(this.controlChannel, {
      type: 'Provider Closing',
      request: 'close'
    });
    delete this.controlChannel;
  }
  this.emit('close');

  // Release references.
  delete this.iface;
  delete this.providerCls;
  this.ifaces = {};
  this.emits = {};
  this.emitChannel = null;
};

/**
 * Teardown a single instance of an object fulfilling this provider.
 * @method teardown
 * @param {String} source The consumer source of the instance.
 * @param {String} id The id of the instance to tear down.
 */
Provider.prototype.teardown = function (source, id) {
  // Ignore teardown of non-existant ids.
  if (!this.ifaces[source]) {
    return;
  }

  delete this.ifaces[source][id];
  delete this.emits[source][id];
  if (this.closeHandlers[source] && this.closeHandlers[source][id]) {
    util.eachProp(this.closeHandlers[source][id], function (prop) {
      prop();
    });
    delete this.closeHandlers[source][id];
  }
};

/**
 * Get an interface to expose externally representing this port.
 * Providers are registered with the port using either
 * provideSynchronous or provideAsynchronous depending on the desired
 * return interface.
 * @method getInterface
 * @return {Object} The external interface of this Provider.
 */
Provider.prototype.getInterface = function () {
  if (this.iface) {
    return this.iface;
  } else {
    var sanityCheck = function (provider) {
      if (typeof provider !== "function") {
        throw new Error("Provider " + this.toString() +
            " needs to be implemented by a function.");
      }
    };
    this.iface = {
      provideSynchronous: function (prov) {
        sanityCheck(prov);
        this.providerCls = prov;
        this.mode = Provider.mode.synchronous;
      }.bind(this),
      provideAsynchronous: function (prov) {
        sanityCheck(prov);
        this.providerCls = prov;
        this.mode = Provider.mode.asynchronous;
      }.bind(this),
      providePromises: function (prov) {
        sanityCheck(prov);
        this.providerCls = prov;
        this.mode = Provider.mode.promises;
      }.bind(this)
    };

    util.eachProp(this.definition, function (prop, name) {
      switch (prop.type) {
      case "constant":
        Object.defineProperty(this.iface, name, {
          value: Consumer.recursiveFreezeObject(prop.value),
          writable: false
        });
        break;
      }
    }.bind(this));

    return this.iface;
  }
};

/**
 * Create a function that can be used to get interfaces from this provider from
 * a user-visible point.
 * @method getProxyInterface
 */
Provider.prototype.getProxyInterface = function () {
  var func = function (p) {
    return p.getInterface();
  }.bind({}, this);

  func.close = function (iface) {
    if (iface) {
      util.eachProp(this.ifaces, function (ids, source) {
        util.eachProp(ids, function (candidate, id) {
          if (candidate === iface) {
            this.teardown(source, id);
            this.emit(this.channels[source], {
              type: 'close',
              to: id
            });
            return true;
          }
        }.bind(this));
      }.bind(this));
    } else {
      // Close the channel.
      this.close();
    }
  }.bind(this);

  func.onClose = function (iface, handler) {
    // Listen to the channel directly.
    if (typeof iface === 'function' && handler === undefined) {
      this.once('close', iface);
      return;
    }

    util.eachProp(this.ifaces, function (ids, source) {
      util.eachProp(ids, function (candidate, id) {
        if (candidate === iface) {
          if (!this.closeHandlers[source]) {
            this.closeHandlers[source] = {};
          }
          if (!this.closeHandlers[source][id]) {
            this.closeHandlers[source][id] = [];
          }
          this.closeHandlers[source][id].push(handler);
          return true;
        }
      }.bind(this));
    }.bind(this));
  }.bind(this);

  return func;
};

/**
 * Get a new instance of the registered provider.
 * @method getProvider
 * @param {String} source The port this instance is interactign with.
 * @param {String} identifier the messagable address for this provider.
 * @param {Array} args Constructor arguments for the provider.
 * @return {Function} A function to send messages to the provider.
 */
Provider.prototype.getProvider = function (source, identifier, args) {
  if (!this.providerCls) {
    this.debug.error('Cannot instantiate provider, since it is not provided');
    return {instance: undefined, onmsg: undefined};
  }

  var events = {},
    dispatchEvent,
    BoundClass,
    instance;

  util.eachProp(this.definition, function (prop, name) {
    if (prop.type === 'event') {
      events[name] = prop;
    }
  });

  dispatchEvent = function (src, ev, id, name, value) {
    if (ev[name]) {
      var streams = Consumer.messageToPortable(ev[name].value, value,
                                                   this.debug);
      this.emit(this.channels[src], {
        type: 'message',
        to: id,
        message: {
          name: name,
          type: 'event',
          text: streams.text,
          binary: streams.binary
        }
      });
    }
  }.bind(this, source, events, identifier);

  // this is all to say: new providerCls(dispatchEvent, args[0], args[1],...)
  BoundClass = this.providerCls.bind.apply(this.providerCls,
      [this.providerCls, dispatchEvent].concat(args || []));
  instance = new BoundClass();

  return {
    instance: instance,
    onmsg: function (port, src, msg) {
      var prop, debug, args, returnPromise, ret;
      if (msg.action === 'method') {
        if (typeof this[msg.type] !== 'function') {
          port.debug.warn("Provider does not implement " + msg.type + "()!");
          port.emit(port.channels[src], {
            type: 'method',
            to: msg.to,
            message: {
              to: msg.to,
              type: 'method',
              reqId: msg.reqId,
              name: msg.type,
              error: 'Provider does not implement ' + msg.type + '()!'
            }
          });
          return;
        }
        prop = port.definition[msg.type];
        debug = port.debug;
        args = Consumer.portableToMessage(prop.value, msg, debug);
        if (msg.reqId === null) {
          // Reckless call.  Ignore return value.
          ret = function(resolve, reject) {
            if (reject) {
              debug.error(reject);
            }
          };
        } else {
          ret = function (src, msg, prop, resolve, reject) {
            var streams = Consumer.messageToPortable(prop.ret, resolve,
                                                         debug);
            this.emit(this.channels[src], {
              type: 'method',
              to: msg.to,
              message: {
                to: msg.to,
                type: 'method',
                reqId: msg.reqId,
                name: msg.type,
                text: streams.text,
                binary: streams.binary,
                error: reject
              }
            });
          }.bind(port, src, msg, prop);
        }
        if (!Array.isArray(args)) {
          args = [args];
        }
        if (port.mode === Provider.mode.synchronous) {
          try {
            ret(this[msg.type].apply(this, args));
          } catch (e1) {
            ret(undefined, e1.message + ' ' + e1.stack);
          }
        } else if (port.mode === Provider.mode.asynchronous) {
          try {
            this[msg.type].apply(instance, args.concat(ret));
          } catch (e2) {
            ret(undefined, e2.message + ' ' + e2.stack);
          }
        } else if (port.mode === Provider.mode.promises) {
          try {
            returnPromise = this[msg.type].apply(this, args);
            if (returnPromise && returnPromise.then) {
              returnPromise.then(ret, ret.bind({}, undefined));
            } else {
              ret(undefined, 'No promise returned from ' +
                  msg.type + ': ' + returnPromise);
            }
          } catch (e3) {
            ret(undefined, e3.message + ' ' + e3.stack);
          }
        }
      }
    }.bind(instance, this, source)
  };
};

/**
 * Get a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
Provider.prototype.toString = function () {
  if (this.emitChannel) {
    return "[Provider " + this.emitChannel + "]";
  } else {
    return "[unbound Provider]";
  }
};

module.exports = Provider;

},{"./consumer":21,"./util":36}],32:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var PromiseCompat = require('es6-promise').Promise;

var util = require('../util');
var Consumer = require('../consumer');

var ApiInterface = function(def, onMsg, emit, debug) {
  var inflight = {},
      events = null,
      emitter = null,
      reqId = 0,
      args = arguments;

  util.eachProp(def, function(prop, name) {
    switch(prop.type) {
    case 'method':
      this[name] = function() {
        // Note: inflight should be registered before message is passed
        // in order to prepare for synchronous in-window pipes.
        var thisReq = reqId,
            promise = new PromiseCompat(function(resolve, reject) {
              inflight[thisReq] = {
                resolve:resolve,
                reject:reject,
                template: prop.ret
              };
            }),
            streams = Consumer.messageToPortable(prop.value,
                Array.prototype.slice.call(arguments, 0),
                debug);
        reqId += 1;
        emit({
          action: 'method',
          type: name,
          reqId: thisReq,
          text: streams.text,
          binary: streams.binary
        });
        return promise;
      };
      this[name].reckless = function () {
        var streams = Consumer.messageToPortable(prop.value,
                Array.prototype.slice.call(arguments, 0),
                debug);
        emit({
          action: 'method',
          type: name,
          reqId: null,  // Marks this as a reckless call.
          text: streams.text,
          binary: streams.binary
        });
        // Return type is void.
      };
      break;
    case 'event':
      if(!events) {
        util.handleEvents(this);
        emitter = this.emit;
        delete this.emit;
        events = {};
      }
      events[name] = prop;
      break;
    case 'constant':
      Object.defineProperty(this, name, {
        value: Consumer.recursiveFreezeObject(prop.value),
        writable: false
      });
      break;
    }
  }.bind(this));

  onMsg(this, function(type, msg) {
    if (type === 'close') {
      if (this.off) {
        this.off();
      }
      util.eachProp(inflight, function (obj) {
        obj.reject('closed');
      });
      inflight = {};
      return;
    }
    if (!msg) {
      return;
    }
    if (msg.type === 'method') {
      if (inflight[msg.reqId]) {
        var resolver = inflight[msg.reqId],
            template = resolver.template;
        delete inflight[msg.reqId];
        if (msg.error) {
          resolver.reject(msg.error);
        } else {
          resolver.resolve(Consumer.portableToMessage(template, msg, debug));
        }
      } else {
        debug.error('Incoming message claimed to be an RPC ' +
                         'returning for unregistered call', msg.reqId);
      }
    } else if (msg.type === 'event') {
      if (events[msg.name]) {
        emitter(msg.name, Consumer.portableToMessage(events[msg.name].value,
                msg, debug));
      }
    }
  }.bind(this));

  args = Consumer.messageToPortable(
      (def.constructor && def.constructor.value) ? def.constructor.value : [],
      Array.prototype.slice.call(args, 4),
      debug);

  emit({
    type: 'construct',
    text: args.text,
    binary: args.binary
  });
};

module.exports = ApiInterface;

},{"../consumer":21,"../util":36,"es6-promise":2}],33:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var util = require('../util');

var EventInterface = function(onMsg, emit, debug) {
  util.handleEvents(this);
  
  onMsg(this, function(emit, type, msg) {
    if (type === 'close') {
      return;
    }
    emit(msg.type, msg.message);
  }.bind(this, this.emit));

  this.emit = function(emitter, type, msg) {
    emitter({type: type, message: msg}, true);
  }.bind({}, emit);
};

module.exports = EventInterface;

},{"../util":36}],34:[function(require,module,exports){
/*jslint indent:2, node:true */
var PromiseCompat = require('es6-promise').Promise;

var ApiInterface = require('./proxy/apiInterface');
var EventInterface = require('./proxy/eventInterface');
var Consumer = require('./consumer');
var Provider = require('./provider');

/**
 * A Proxy Binder manages the external interface, and creates one of
 * the different types of objects exposed by freedom either as a global
 * within a worker / module context, or returned by an external call to
 * create a freedom runtime.
 * @Class ProxyBinder
 * @param {Manager} manager The manager for the active runtime.
 */
var ProxyBinder = function (manager) {
  'use strict';
  this.manager = manager;
};

/**
 * Create a proxy for a freedom port, and return it once loaded.
 * @method getExternal
 * @param {Port} port The port for the proxy to communicate with.
 * @param {String} name The name of the proxy.
 * @param {Object} [definition] The definition of the API to expose.
 * @param {String} definition.name The name of the API.
 * @param {Object} definition.definition The definition of the API.
 * @param {Boolean} definition.provides Whether this is a consumer or provider.
 * @returns {Promise} A promise for the active proxy interface.
 */
ProxyBinder.prototype.getExternal = function (port, name, definition) {
  'use strict';
  var proxy, api;
  return new PromiseCompat(function (resolve, reject) {
    if (definition) {
      api = definition.name;
      if (definition.provides) {
        proxy = new Provider(definition.definition, this.manager.debug);
      } else {
        proxy = new Consumer(ApiInterface.bind({},
            definition.definition),
            this.manager.debug);
      }
    } else {
      proxy = new Consumer(EventInterface, this.manager.debug);
    }

    proxy.once('start', function () {
      var iface = proxy.getProxyInterface();
      if (api) {
        iface.api = api;
      }
      resolve({
        port: proxy,
        external: iface
      });
    });

    this.manager.createLink(port, name, proxy);
  }.bind(this));
};

/**
 * Bind the default proxy for a freedom port.
 * @method bindDefault
 * @param {Port} port The port for the proxy to communicate with.
 * @param {Api} api The API loader with API definitions.
 * @param {Object} manifest The manifest of the module to expose.
 * @param {Boolean} internal Whether the interface is for inside the module.
 * @returns {Promise} A promise for a proxy interface.
 * @private
 */
ProxyBinder.prototype.bindDefault = function (port, api, manifest, internal) {
  'use strict';
  var metadata = {
    name: manifest.name,
    icon: manifest.icon,
    description: manifest.description
  }, def;

  if (manifest['default']) {
    def = api.get(manifest['default']);
    if (!def && manifest.api && manifest.api[manifest['default']]) {
      def = {
        name: manifest['default'],
        definition: manifest.api[manifest['default']]
      };
    }
    if (internal && manifest.provides &&
        manifest.provides.indexOf(manifest['default']) !== false) {
      def.provides = true;
    } else if (internal) {
      api.debug.warn("default API not provided, " +
                     "are you missing a provides key in your manifest?");
    }
  }

  return this.getExternal(port, 'default', def).then(
    function (metadata, info) {
      info.external.manifest = metadata;
      return info;
    }.bind(this, metadata)
  );
};

/**
 * Get the definition for a proxy given a requested API and the manifest of
 * the module.
 * @method getAPI
 * @param {Object} manifest The manifest for the proxy.
 * @param {Api} apiProvider The registry of known APIs.
 * @param {String} api The Requested API.
 * @returns {Object} definition The definition to use for calls to getExternal.
 */
ProxyBinder.prototype.getAPI = function (manifest, apiProvider, api) {
  'use strict';
  if (manifest.api && manifest.api[api]) {
    return {
      name: api,
      definition: manifest.api[api]
    };
  } else if (manifest['default']) {
    var def = apiProvider.get(manifest['default']);
    if (!def && manifest.api && manifest.api[manifest['default']]) {
      return {
        name: manifest['default'],
        definition: manifest.api[manifest['default']]
      };
    }
    return def;
  } else {
    return false;
  }
};


module.exports = ProxyBinder;

},{"./consumer":21,"./provider":31,"./proxy/apiInterface":32,"./proxy/eventInterface":33,"es6-promise":2}],35:[function(require,module,exports){
/*globals XMLHttpRequest */
/*jslint indent:2,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

var util = require('./util');

/**
 * The Resource registry for FreeDOM.  Used to look up requested Resources,
 * and provide lookup and migration of resources.
 * @Class Resource
 * @param {Debug} debug The logger to use for debugging.
 * @constructor
 */
var Resource = function (debug) {
  this.debug = debug;
  this.files = {};
  this.resolvers = [this.httpResolver, this.nullResolver];
  this.contentRetrievers = {
    'http': this.xhrRetriever,
    'https': this.xhrRetriever,
    'chrome-extension': this.xhrRetriever,
    'resource': this.xhrRetriever,
    'chrome': this.xhrRetriever,
    'app': this.xhrRetriever,
    'gopher': this.xhrRetriever,  // For Cordova; see http://crbug.com/513352 .
    'manifest': this.manifestRetriever
  };
};

/**
 * Resolve a resurce URL requested from a module.
 * @method get
 * @param {String} manifest The canonical address of the module requesting.
 * @param {String} url The resource to get.
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.get = function (manifest, url) {
  var key = JSON.stringify([manifest, url]);
  
  return new PromiseCompat(function (resolve, reject) {
    if (this.files[key]) {
      resolve(this.files[key]);
    } else {
      this.resolve(manifest, url).then(function (key, resolve, address) {
        this.files[key] = address;
        //fdom.debug.log('Resolved ' + key + ' to ' + address);
        resolve(address);
      }.bind(this, key, resolve), reject);
    }
  }.bind(this));
};

/**
 * Get the contents of a resource.
 * @method getContents
 * @param {String} url The resource to read.
 * @returns {Promise} A promise for the resource contents.
 */
Resource.prototype.getContents = function (url) {
  return new PromiseCompat(function (resolve, reject) {
    var prop;
    if (!url) {
      this.debug.warn("Asked to get contents of undefined URL.");
      return reject();
    }
    for (prop in this.contentRetrievers) {
      if (this.contentRetrievers.hasOwnProperty(prop)) {
        if (url.indexOf(prop + "://") === 0) {
          return this.contentRetrievers[prop].call(this, url, resolve, reject);
        } else if (url.indexOf("://") === -1 && prop === "null") {
          return this.contentRetrievers[prop].call(this, url, resolve, reject);
        }
      }
    }
    reject();
  }.bind(this));
};

/**
 * Return a promise that resolves when the first of an array of promises
 * resolves, or rejects after all promises reject. Can be thought of as
 * the missing 'Promise.any' - race is no good, since early rejections
 * preempt a subsequent resolution.
 * @private
 * @static
 * @method FirstPromise
 * @param {Promise[]} Promises to select from
 * @returns {Promise} Promise resolving with a value from arguments.
 */
var firstPromise = function(promises) {
  return new PromiseCompat(function(resolve, reject) {
    var errors = [];
    promises.forEach(function(promise) {
      promise.then(resolve, function(err) {
        errors.push(err);
        if (errors.length === promises.length) {
          reject(errors);
        }
      });
    });
  });
};

/**
 * Resolve a resource using known resolvers. Unlike get, resolve does
 * not cache resolved resources.
 * @method resolve
 * @private
 * @param {String} manifest The module requesting the resource.
 * @param {String} url The resource to resolve;
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.resolve = function (manifest, url) {
  return new PromiseCompat(function (resolve, reject) {
    var promises = [];
    if (url === undefined) {
      return reject();
    }
    util.eachReverse(this.resolvers, function (resolver) {
      promises.push(new PromiseCompat(resolver.bind({}, manifest, url)));
    }.bind(this));
    firstPromise(promises).then(resolve, function() {
      reject('No resolvers to handle url: ' + JSON.stringify([manifest, url]));
    });
  }.bind(this));
};

/**
 * Register resolvers: code that knows how to get resources
 * needed by the runtime. A resolver will be called with four
 * arguments: the absolute manifest of the requester, the
 * resource being requested, and a resolve / reject pair to
 * fulfill a promise.
 * @method addResolver
 * @param {Function} resolver The resolver to add.
 */
Resource.prototype.addResolver = function (resolver) {
  this.resolvers.push(resolver);
};

/**
 * Register retrievers: code that knows how to load resources
 * needed by the runtime. A retriever will be called with a URL
 * to retrieve with a protocol that it is able to handle.
 * @method addRetriever
 * @param {String} proto The protocol to register for.
 * @param {Function} retriever The retriever to add.
 */
Resource.prototype.addRetriever = function (proto, retriever) {
  if (this.contentRetrievers[proto]) {
    this.debug.warn("Unwilling to override file retrieval for " + proto);
    return;
  }
  this.contentRetrievers[proto] = retriever;
};

/**
 * Register external resolvers and retreavers
 * @method register
 * @param {{"proto":String, "resolver":Function, "retreaver":Function}[]}
 *     resolvers The list of retreivers and resolvers.
 */
Resource.prototype.register = function (resolvers) {
  if (!resolvers.length) {
    return;
  }

  resolvers.forEach(function (item) {
    if (item.resolver) {
      this.addResolver(item.resolver);
    } else if (item.proto && item.retriever) {
      this.addRetriever(item.proto, item.retriever);
    }
  }.bind(this));
};

/**
 * Determine if a URL is an absolute URL of a given Scheme.
 * @method hasScheme
 * @static
 * @private
 * @param {String[]} protocols Whitelisted protocols
 * @param {String} URL the URL to match.
 * @returns {Boolean} If the URL is an absolute example of one of the schemes.
 */
Resource.hasScheme = function (protocols, url) {
  var i;
  for (i = 0; i < protocols.length; i += 1) {
    if (url.indexOf(protocols[i] + "://") === 0) {
      return true;
    }
  }
  return false;
};

/**
 * Remove './' and '../' from a URL
 * Required because Chrome Apps for Mobile (cca) doesn't understand
 * XHR paths with these relative components in the URL.
 * @method removeRelativePath
 * @param {String} url The URL to modify
 * @returns {String} url without './' and '../'
 **/
Resource.removeRelativePath = function (url) {
  var idx = url.indexOf("://") + 3,
    stack,
    toRemove,
    result;
  // Remove all instances of /./
  url = url.replace(/\/\.\//g, "/");
  //Weird bug where in cca, manifest starts with 'chrome:////'
  //This forces there to only be 2 slashes
  while (url.charAt(idx) === "/") {
    url = url.slice(0, idx) + url.slice(idx + 1, url.length);
  }

  // Advance to next /
  idx = url.indexOf("/", idx);
  // Removing ../
  stack = url.substr(idx + 1).split("/");
  while (stack.indexOf("..") !== -1) {
    toRemove = stack.indexOf("..");
    if (toRemove === 0) {
      stack.shift();
    } else {
      stack.splice((toRemove - 1), 2);
    }
  }
  
  //Rebuild string
  result = url.substr(0, idx);
  for (idx = 0; idx < stack.length; idx += 1) {
    result += "/" + stack[idx];
  }
  return result;
};

/**
 * Resolve URLs which can be accessed using standard HTTP requests.
 * @method httpResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.httpResolver = function (manifest, url, resolve, reject) {
  var protocols = ["http", "https", "chrome", "chrome-extension", "resource",
                   "app", "gopher"],
    dirname,
    protocolIdx,
    pathIdx,
    path,
    base,
    result;

  if (Resource.hasScheme(protocols, url)) {
    resolve(Resource.removeRelativePath(url));
    return true;
  }
  
  if (!manifest) {
    reject();
    return false;
  }
  if (Resource.hasScheme(protocols, manifest) &&
      url.indexOf("://") === -1) {
    dirname = manifest.substr(0, manifest.lastIndexOf("/"));
    protocolIdx = dirname.indexOf("://");
    pathIdx = protocolIdx + 3 + dirname.substr(protocolIdx + 3).indexOf("/");
    path = dirname.substr(pathIdx);
    base = dirname.substr(0, pathIdx);
    if (url.indexOf("/") === 0) {
      resolve(Resource.removeRelativePath(base + url));
    } else {
      resolve(Resource.removeRelativePath(base + path + "/" + url));
    }
    return true;
  }
  reject();
};

/**
 * Resolve URLs which are self-describing.
 * @method nullResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.nullResolver = function (manifest, url, resolve, reject) {
  var protocols = ["manifest"];
  if (Resource.hasScheme(protocols, url)) {
    resolve(url);
    return true;
  } else if (url.indexOf('data:') === 0) {
    resolve(url);
    return true;
  }
  reject();
};

/**
 * Retrieve manifest content from a self-descriptive manifest url.
 * These urls are used to reference a manifest without requiring subsequent,
 * potentially non-CORS requests.
 * @method manifestRetriever
 * @private
 * @param {String} manifest The Manifest URL
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.manifestRetriever = function (manifest, resolve, reject) {
  var data;
  try {
    data = manifest.substr(11);
    JSON.parse(data);
    resolve(data);
  } catch (e) {
    this.debug.warn("Invalid manifest URL referenced:" + manifest);
    reject();
  }
};

/**
 * Retrieve resource contents using an XHR request.
 * @method xhrRetriever
 * @private
 * @param {String} url The resource to fetch.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.xhrRetriever = function (url, resolve, reject) {
  var ref = new XMLHttpRequest();
  ref.addEventListener("readystatechange", function (resolve, reject) {
    if (ref.readyState === 4 && ref.responseText) {
      resolve(ref.responseText);
    } else if (ref.readyState === 4) {
      this.debug.warn("Failed to load file " + url + ": " + ref.status);
      reject(ref.status);
    }
  }.bind(this, resolve, reject), false);
  ref.overrideMimeType("application/json");
  ref.open("GET", url, true);
  ref.send();
};

module.exports = Resource;

},{"./util":36,"es6-promise":2}],36:[function(require,module,exports){
/*globals crypto, WebKitBlobBuilder, Blob, URL */
/*globals webkitURL, Uint8Array, Uint16Array, ArrayBuffer */
/*jslint indent:2,white:true,browser:true,node:true,sloppy:true */

/**
 * Utility method used within the freedom Library.
 * @class util
 * @static
 */
var util = {};


/**
 * Helper function for iterating over an array backwards. If the func
 * returns a true value, it will break out of the loop.
 * @method eachReverse
 * @static
 */
util.eachReverse = function(ary, func) {
  if (ary) {
    var i;
    for (i = ary.length - 1; i > -1; i -= 1) {
      if (ary[i] && func(ary[i], i, ary)) {
        break;
      }
    }
  }
};

/**
 * @method hasProp
 * @static
 */
util.hasProp = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/**
 * Cycles over properties in an object and calls a function for each
 * property value. If the function returns a truthy value, then the
 * iteration is stopped.
 * @method eachProp
 * @static
 */
util.eachProp = function(obj, func) {
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (func(obj[prop], prop)) {
        break;
      }
    }
  }
};

/**
 * Simple function to mix in properties from source into target,
 * but only if target does not already have a property of the same name.
 * This is not robust in IE for transferring methods that match
 * Object.prototype names, but the uses of mixin here seem unlikely to
 * trigger a problem related to that.
 * @method mixin
 * @static
 */
util.mixin = function(target, source, force) {
  if (source) {
    util.eachProp(source, function (value, prop) {
      if (force || !util.hasProp(target, prop)) {
        target[prop] = value;
      }
    });
  }
  return target;
};

/**
 * Get a unique ID.
 * @method getId
 * @static
 */
util.getId = function() {
  var guid = 'guid',
      domain = 12,
      buffer;
  // Chrome / Firefox.
  if (typeof crypto === 'object' && crypto.getRandomValues) {
    buffer = new Uint8Array(domain);
    crypto.getRandomValues(buffer);
    util.eachReverse(buffer, function(n) {
      guid += '-' + n;
    });
  // Node
  } else if (typeof crypto === 'object' && crypto.randomBytes) {
    buffer = crypto.randomBytes(domain);
    util.eachReverse(buffer, function(n) {
      guid += '-' + n;
    });
  } else {
    while (domain > 0) {
      guid += '-' + Math.ceil(255 * Math.random());
      domain -= 1;
    }
  }

  return guid;
};

/**
 * Encode a string into a binary array buffer, by treating each character as a
 * utf16 encoded character - the native javascript encoding.
 * @method str2ab
 * @static
 * @param {String} str The string to encode.
 * @returns {ArrayBuffer} The encoded string.
 */
util.str2ab = function(str) {
  var length = str.length,
      buffer = new ArrayBuffer(length * 2), // 2 bytes for each char
      bufferView = new Uint16Array(buffer),
      i;
  for (i = 0; i < length; i += 1) {
    bufferView[i] = str.charCodeAt(i);
  }

  return buffer;
};

/**
 * Convert an array buffer containing an encoded string back into a string.
 * @method ab2str
 * @static
 * @param {ArrayBuffer} buffer The buffer to unwrap.
 * @returns {String} The decoded buffer.
 */
util.ab2str = function(buffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buffer));
};

/**
 * Add 'on' and 'emit' methods to an object, which act as a light weight
 * event handling structure.
 * @class handleEvents
 * @static
 */
util.handleEvents = function(obj) {
  var eventState = {
    DEBUG_BACKREF: obj,
    multiple: {},
    maybemultiple: [],
    single: {},
    maybesingle: []
  }, filter, push;

  /**
   * Filter a list based on a predicate. The list is filtered in place, with
   * selected items removed and returned by the function.
   * @method
   * @param {Array} list The list to filter
   * @param {Function} predicate The method to run on each item.
   * @returns {Array} Selected items
   */
  filter = function(list, predicate) {
    var ret = [], i;

    if (!list || !list.length) {
      return [];
    }

    for (i = list.length - 1; i >= 0; i -= 1) {
      if (predicate(list[i])) {
        ret.push(list.splice(i, 1));
      }
    }
    return ret;
  };

  /**
   * Enqueue a handler for a specific type.
   * @method
   * @param {String} to The queue ('single' or 'multiple') to queue on.
   * @param {String} type The type of event to wait for.
   * @param {Function} handler The handler to enqueue.
   */
  push = function(to, type, handler) {
    if (typeof type === 'function') {
      this['maybe' + to].push([type, handler]);
    } else if (this[to][type]) {
      this[to][type].push(handler);
    } else {
      this[to][type] = [handler];
    }
  };

  /**
   * Register a method to be executed when an event of a specific type occurs.
   * @method on
   * @param {String|Function} type The type of event to register against.
   * @param {Function} handler The handler to run when the event occurs.
   */
  obj.on = push.bind(eventState, 'multiple');

  /**
   * Register a method to be execute the next time an event occurs.
   * @method once
   * @param {String|Function} type The type of event to wait for.
   * @param {Function} handler The handler to run the next time a matching event
   *     is raised.
   */
  obj.once = push.bind(eventState, 'single');

  /**
   * Emit an event on this object.
   * @method emit
   * @param {String} type The type of event to raise.
   * @param {Object} data The payload of the event.
   */
  obj.emit = function(type, data) {
    var i, queue;
    // Note that registered handlers may stop events on the object, by calling
    // this.off(). As such, the presence of these keys must be checked on each
    // iteration of the relevant loops.
    for (i = 0; this.multiple[type] &&
         i < this.multiple[type].length; i += 1) {
      if (this.multiple[type][i](data) === false) {
        return;
      }
    }
    if (this.single[type]) {
      queue = this.single[type];
      this.single[type] = [];
      for (i = 0; i < queue.length; i += 1) {
        queue[i](data);
      }
    }
    for (i = 0; i < this.maybemultiple.length; i += 1) {
      if (this.maybemultiple[i][0](type, data)) {
        this.maybemultiple[i][1](data);
      }
    }
    for (i = this.maybesingle.length - 1; i >= 0; i -= 1) {
      if (this.maybesingle[i][0](type, data)) {
        queue = this.maybesingle.splice(i, 1);
        queue[0][1](data);
      }
    }
  }.bind(eventState);

  /**
   * Remove an event handler
   * @method off
   * @param {String} type The type of event to remove.
   * @param {Function?} handler The handler to remove.
   */
  obj.off = function(type, handler) {
    if (!type) {
      delete this.DEBUG_BACKREF;
      this.multiple = {};
      this.maybemultiple = [];
      this.single = {};
      this.maybesingle = [];
      return;
    }

    if (typeof type === 'function') {
      filter(this.maybesingle, function(item) {
        return item[0] === type && (!handler || item[1] === handler);
      });
      filter(this.maybemultiple, function(item) {
        return item[0] === type && (!handler || item[1] === handler);
      });
    }

    if (!handler) {
      delete this.multiple[type];
      delete this.single[type];
    } else {
      filter(this.multiple[type], function(item) {
        return item === handler;
      });
      filter(this.single[type], function(item) {
        return item === handler;
      });
    }
  }.bind(eventState);
};

/**
 * When run without a window, or specifically requested.
 * Note: Declaration can be redefined in forceModuleContext below.
 * @method isModuleContext
 * @for util
 * @static
 */
/*!@preserve StartModuleContextDeclaration*/
util.isModuleContext = function() {
  return (typeof document === 'undefined');
};

/**
 * Get a Blob object of a string.
 * Polyfills implementations which don't have a current Blob constructor, like
 * phantomjs.
 * @method getBlob
 * @static
 */
util.getBlob = function(data, type) {
  if (typeof Blob !== 'function' && typeof WebKitBlobBuilder !== 'undefined') {
    var builder = new WebKitBlobBuilder();
    builder.append(data);
    return builder.getBlob(type);
  } else {
    return new Blob([data], {type: type});
  }
};

/**
 * Find all scripts on the given page.
 * @method scripts
 * @static
 */
util.scripts = function(global) {
  return global.document.getElementsByTagName('script');
};

module.exports = util;

},{}],37:[function(require,module,exports){
(function (global){
/*jslint node:true*/

var providers = [
  require('../../providers/core/core.unprivileged'),
  require('../../providers/core/core.echo'),
  require('../../providers/core/core.console'),
  require('../../providers/core/core.crypto'),
  require('../../providers/core/core.peerconnection'),
  require('../../providers/core/core.rtcpeerconnection'),
  require('../../providers/core/core.rtcdatachannel'),
  require('../../providers/core/core.storage'),
  require('../../providers/core/core.view'),
  require('../../providers/core/core.oauth'),
  require('../../providers/core/core.websocket'),
  require('../../providers/core/core.xhr')
];

function getFreedomScript() {
  'use strict';
  var script;
  if (window.document.currentScript) {
    // New browser API
    script = window.document.currentScript.src;
  } else if (document.readyState !== "complete" &&
             document.readyState !== "loaded") {
    // Included in HTML or through document.write
    script = window.document.getElementsByTagName('script');
    script = script[script.length - 1].src;
  } else {
    // Loaded through dom manipulation or async.
    script = document.querySelector(
      "script[src*='freedom.js'],script[src*='freedom-']"
    );
    if (script.length !== 1) {
      console.error("Could not determine freedom.js script tag.");
    }
    script = script[0].src;
  }
  return script;
}

if (typeof window !== 'undefined') {
  window.freedom = require('../entry').bind({}, {
    location: window.location.href,
    portType: require('../link/worker'),
    source: getFreedomScript(),
    providers: providers,
    oauth: [
      require('../../providers/oauth/oauth.localpageauth'),
      require('../../providers/oauth/oauth.remotepageauth')
    ]
  });
} else {
  require('../entry')({
    isModule: true,
    portType: require('../link/worker'),
    providers: providers,
    global: global
  });
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../providers/core/core.console":5,"../../providers/core/core.crypto":6,"../../providers/core/core.echo":7,"../../providers/core/core.oauth":8,"../../providers/core/core.peerconnection":9,"../../providers/core/core.rtcdatachannel":10,"../../providers/core/core.rtcpeerconnection":11,"../../providers/core/core.storage":12,"../../providers/core/core.unprivileged":13,"../../providers/core/core.view":14,"../../providers/core/core.websocket":15,"../../providers/core/core.xhr":16,"../../providers/oauth/oauth.localpageauth":17,"../../providers/oauth/oauth.remotepageauth":18,"../entry":23,"../link/worker":26}]},{},[37])
//

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS51bnByaXZpbGVnZWQuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnZpZXcuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLndlYnNvY2tldC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL29hdXRoL29hdXRoLmxvY2FscGFnZWF1dGguanMiLCJidWlsZC9wcm92aWRlcnMvb2F1dGgvb2F1dGgucmVtb3RlcGFnZWF1dGguanMiLCJidWlsZC9zcmMvYXBpLmpzIiwiYnVpbGQvc3JjL2J1bmRsZS5qcyIsImJ1aWxkL3NyYy9jb25zdW1lci5qcyIsImJ1aWxkL3NyYy9kZWJ1Zy5qcyIsImJ1aWxkL3NyYy9lbnRyeS5qcyIsImJ1aWxkL3NyYy9odWIuanMiLCJidWlsZC9zcmMvbGluay5qcyIsImJ1aWxkL3NyYy9saW5rL3dvcmtlci5qcyIsImJ1aWxkL3NyYy9tYW5hZ2VyLmpzIiwiYnVpbGQvc3JjL21vZHVsZS5qcyIsImJ1aWxkL3NyYy9tb2R1bGVpbnRlcm5hbC5qcyIsImJ1aWxkL3NyYy9wb2xpY3kuanMiLCJidWlsZC9zcmMvcHJvdmlkZXIuanMiLCJidWlsZC9zcmMvcHJveHkvYXBpSW50ZXJmYWNlLmpzIiwiYnVpbGQvc3JjL3Byb3h5L2V2ZW50SW50ZXJmYWNlLmpzIiwiYnVpbGQvc3JjL3Byb3h5YmluZGVyLmpzIiwiYnVpbGQvc3JjL3Jlc291cmNlLmpzIiwiYnVpbGQvc3JjL3V0aWwuanMiLCJidWlsZC9zcmMvdXRpbC93b3JrZXJFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQ0FBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2OEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2haQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDclVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZyZWVkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcImNvbnNvbGVcIixcImFwaVwiOntcImxvZ1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJkZWJ1Z1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJpbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIndhcm5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZXJyb3JcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19fX0se1wibmFtZVwiOlwiY29yZS5jb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuY3J5cHRvXCIsXCJhcGlcIjp7XCJnZXRSYW5kb21CeXRlc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl0sXCJyZXRcIjpcImJ1ZmZlclwifX19LHtcIm5hbWVcIjpcImNvcmUuZWNob1wiLFwiYXBpXCI6e1wic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcInN0cmluZ1wifX19LHtcIm5hbWVcIjpcImNvcmVcIixcImFwaVwiOntcImNyZWF0ZUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjaGFubmVsXCI6XCJwcm94eVwiLFwiaWRlbnRpZmllclwiOlwic3RyaW5nXCJ9fSxcImJpbmRDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJnZXRJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0TG9nZ2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJyZXF1aXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJwcm94eVwifX19LHtcIm5hbWVcIjpcImNvcmUub2F1dGhcIixcImFwaVwiOntcImluaXRpYXRlT0F1dGhcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1tcImFycmF5XCIsXCJzdHJpbmdcIl1dLFwicmV0XCI6e1wicmVkaXJlY3RcIjpcInN0cmluZ1wiLFwic3RhdGVcIjpcInN0cmluZ1wifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxhdW5jaEF1dGhGbG93XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn0sXCJib29sZWFuXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUucGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcInNldHVwXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCIsW1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImJvb2xlYW5cIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiY2hhbm5lbExhYmVsXCI6XCJzdHJpbmdcIixcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV19LFwib25SZWNlaXZlZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwib3BlbkRhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJjbG9zZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJvbk9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxJZFwiOlwic3RyaW5nXCJ9fSxcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxJZFwiOlwic3RyaW5nXCJ9fSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlVmlkZW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVBdWRpb1wiOlwibnVtYmVyXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcImNvcmUucnRjZGF0YWNoYW5uZWxcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiZ2V0TGFiZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldE9yZGVyZWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJnZXRNYXhQYWNrZXRMaWZlVGltZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0TWF4UmV0cmFuc21pdHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFByb3RvY29sXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXROZWdvdGlhdGVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0SWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJvbm9wZW5cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25jbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9ubWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRleHRcIjpcInN0cmluZ1wiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwiZ2V0QmluYXJ5VHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0QmluYXJ5VHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZEJ1ZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIl19fX0se1wibmFtZVwiOlwiY29yZS5ydGNwZWVyY29ubmVjdGlvblwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9XX0sXCJjcmVhdGVPZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wib2ZmZXJUb1JlY2VpdmVBdWRpb1wiOlwibnVtYmVyXCIsXCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcImljZVJlc3RhcnRcIjpcImJvb2xlYW5cIixcInZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cIjpcImJvb2xlYW5cIn1dLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJjcmVhdGVBbnN3ZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcInNldExvY2FsRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn1dfSxcImdldExvY2FsRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcInNldFJlbW90ZURlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XSxcInJldFwiOnt9fSxcImdldFJlbW90ZURlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJnZXRTaWduYWxpbmdTdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwidXBkYXRlSWNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9XSxcInJldFwiOnt9fSxcImFkZEljZUNhbmRpZGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiY2FuZGlkYXRlXCI6XCJzdHJpbmdcIixcInNkcE1pZFwiOlwic3RyaW5nXCIsXCJzZHBNTGluZUluZGV4XCI6XCJudW1iZXJcIn1dLFwicmV0XCI6e319LFwiZ2V0SWNlR2F0aGVyaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEljZUNvbm5lY3Rpb25TdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0Q29uZmlndXJhdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImljZVNlcnZlcnNcIjpbXCJhcnJheVwiLHtcInVybHNcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwidXNlcm5hbWVcIjpcInN0cmluZ1wiLFwiY3JlZGVudGlhbFwiOlwic3RyaW5nXCJ9XSxcImljZVRyYW5zcG9ydHNcIjpcInN0cmluZ1wiLFwicGVlcklkZW50aXR5XCI6XCJzdHJpbmdcIn19LFwiZ2V0TG9jYWxTdHJlYW1zXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRSZW1vdGVTdHJlYW1zXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRTdHJlYW1CeUlkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiYWRkU3RyZWFtXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOnt9fSxcInJlbW92ZVN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOnt9fSxcImNyZWF0ZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcIm9yZGVyZWRcIjpcImJvb2xlYW5cIixcIm1heFBhY2tldExpZmVUaW1lXCI6XCJudW1iZXJcIixcIm1heFJldHJhbnNtaXRzXCI6XCJudW1iZXJcIixcInByb3RvY29sXCI6XCJzdHJpbmdcIixcIm5lZ290aWF0ZWRcIjpcImJvb2xlYW5cIixcImlkXCI6XCJudW1iZXJcIn1dLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJvbmRhdGFjaGFubmVsXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhbm5lbFwiOlwic3RyaW5nXCJ9fSxcImdldFN0YXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwib2JqZWN0XCJ9LFwib25uZWdvdGlhdGlvbm5lZWRlZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uaWNlY2FuZGlkYXRlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2FuZGlkYXRlXCI6e1wiY2FuZGlkYXRlXCI6XCJzdHJpbmdcIixcInNkcE1pZFwiOlwic3RyaW5nXCIsXCJzZHBNTGluZUluZGV4XCI6XCJudW1iZXJcIn19fSxcIm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmFkZHN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9ucmVtb3Zlc3RyZWFtXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wic3RyZWFtXCI6XCJudW1iZXJcIn19LFwib25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLnN0b3JhZ2VcIixcImFwaVwiOntcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS50Y3Bzb2NrZXRcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImNvbm5lY3RlZFwiOlwiYm9vbGVhblwiLFwibG9jYWxBZGRyZXNzXCI6XCJzdHJpbmdcIixcImxvY2FsUG9ydFwiOlwibnVtYmVyXCIsXCJwZWVyQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwZWVyUG9ydFwiOlwibnVtYmVyXCJ9fSxcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9DT05ORUNURURcIjpcIlNvY2tldCBhbHJlYWR5IGNvbm5lY3RlZFwiLFwiSU5WQUxJRF9BUkdVTUVOVFwiOlwiSW52YWxpZCBhcmd1bWVudFwiLFwiVElNRURfT1VUXCI6XCJUaW1lZCBvdXRcIixcIk5PVF9DT05ORUNURURcIjpcIlNvY2tldCBub3QgY29ubmVjdGVkXCIsXCJORVRXT1JLX0NIQU5HRURcIjpcIk5ldHdvcmsgY2hhbmdlZFwiLFwiQ09OTkVDVElPTl9DTE9TRURcIjpcIkNvbm5lY3Rpb24gY2xvc2VkIGdyYWNlZnVsbHlcIixcIkNPTk5FQ1RJT05fUkVTRVRcIjpcIkNvbm5lY3Rpb24gcmVzZXRcIixcIkNPTk5FQ1RJT05fUkVGVVNFRFwiOlwiQ29ubmVjdGlvbiByZWZ1c2VkXCIsXCJDT05ORUNUSU9OX0ZBSUxFRFwiOlwiQ29ubmVjdGlvbiBmYWlsZWRcIixcIk5BTUVfTk9UX1JFU09MVkVEXCI6XCJETlMgbG9va3VwIGZhaWxlZFwiLFwiSU5URVJORVRfRElTQ09OTkVDVEVEXCI6XCJDYW5ub3QgcmVhY2ggYW55IG5ldHdvcmtcIixcIkFERFJFU1NfSU5WQUxJRFwiOlwiSW52YWxpZCBhZGRyZXNzXCIsXCJBRERSRVNTX1VOUkVBQ0hBQkxFXCI6XCJObyByb3V0ZSB0byBob3N0XCIsXCJIT1NUX1VOUkVBQ0hBQkxFXCI6XCJTT0NLUyBwcm94eSBzZXJ2ZXIgY291bGQgbm90IHJlYWNoIGhvc3RcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkRpc2Nvbm5lY3RcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjb25uZWN0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicGF1c2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJyZXN1bWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJwcmVwYXJlU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwid3JpdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZGF0YVwiOlwiYnVmZmVyXCJ9fSxcImxpc3RlblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uQ29ubmVjdGlvblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInNvY2tldFwiOlwibnVtYmVyXCIsXCJob3N0XCI6XCJzdHJpbmdcIixcInBvcnRcIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnVkcHNvY2tldFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJBTFJFQURZX0JPVU5EXCI6XCJTb2NrZXQgYWxyZWFkeSBib3VuZFwiLFwiQUxSRUFEWV9DTE9TRURcIjpcIlNvY2tldCBhbHJlYWR5IGNsb3NlZFwiLFwiSU5WQUxJRF9BUkdVTUVOVFwiOlwiSW52YWxpZCBhcmd1bWVudFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIlNFTkRfRkFJTEVEXCI6XCJTZW5kIGZhaWxlZFwifX0sXCJiaW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRJbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wibG9jYWxBZGRyZXNzXCI6XCJzdHJpbmdcIixcImxvY2FsUG9ydFwiOlwibnVtYmVyXCJ9fSxcInNlbmRUb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwicmV0XCI6XCJudW1iZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImRlc3Ryb3lcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wicmVzdWx0Q29kZVwiOlwibnVtYmVyXCIsXCJhZGRyZXNzXCI6XCJzdHJpbmdcIixcInBvcnRcIjpcIm51bWJlclwiLFwiZGF0YVwiOlwiYnVmZmVyXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUudmlld1wiLFwiYXBpXCI6e1wic2hvd1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiaXNTZWN1cmVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJwb3N0TWVzc2FnZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJvYmplY3RcIl19LFwibWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOlwib2JqZWN0XCJ9LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUud2Vic29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCIsW1wiYXJyYXlcIixcInN0cmluZ1wiXV19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9XSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wibnVtYmVyXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwib25PcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25FcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjb2RlXCI6XCJudW1iZXJcIixcInJlYXNvblwiOlwic3RyaW5nXCIsXCJ3YXNDbGVhblwiOlwiYm9vbGVhblwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnhoclwiLFwiYXBpXCI6e1wib3BlblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFwiYm9vbGVhblwiLFwic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJzdHJpbmdcIjpcInN0cmluZ1wiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcImFib3J0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldFJlc3BvbnNlSGVhZGVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXF1ZXN0SGVhZGVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIm92ZXJyaWRlTWltZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFJlc3BvbnNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCIsXCJvYmplY3RcIjpcIm9iamVjdFwifX0sXCJnZXRSZXNwb25zZVRleHRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldFJlc3BvbnNlVVJMXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldFJlc3BvbnNlVHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiZ2V0U3RhdHVzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRTdGF0dXNUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRUaW1lb3V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJzZXRUaW1lb3V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiXX0sXCJnZXRXaXRoQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJzZXRXaXRoQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYm9vbGVhblwiXX0sXCJvbmxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ucHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ubG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ubG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fSxcIm9udXBsb2FkbG9hZHN0YXJ0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRwcm9ncmVzc1wiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkYWJvcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRsb2FkXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWR0aW1lb3V0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRsb2FkZW5kXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRyZWFkeXN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e319fX0se1wibmFtZVwiOlwic29jaWFsXCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIlVzZXIgaXMgY3VycmVudGx5IG9mZmxpbmVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwiLFwiTE9HSU5fQkFEQ1JFREVOVElBTFNcIjpcIkVycm9yIGF1dGhlbnRpY2F0aW5nIHdpdGggc2VydmVyXCIsXCJMT0dJTl9GQUlMRURDT05ORUNUSU9OXCI6XCJFcnJvciBjb25uZWN0aW5nIHRvIHNlcnZlclwiLFwiTE9HSU5fQUxSRUFEWU9OTElORVwiOlwiVXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpblwiLFwiTE9HSU5fT0FVVEhFUlJPUlwiOlwiT0F1dGggRXJyb3JcIixcIlNFTkRfSU5WQUxJRERFU1RJTkFUSU9OXCI6XCJNZXNzYWdlIHNlbnQgdG8gYW4gaW52YWxpZCBkZXN0aW5hdGlvblwifX0sXCJTVEFUVVNcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJPRkZMSU5FXCI6XCJPRkZMSU5FXCIsXCJPTkxJTkVcIjpcIk9OTElORVwiLFwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCI6XCJPTkxJTkVfV0lUSF9PVEhFUl9BUFBcIn19LFwibG9naW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImFnZW50XCI6XCJzdHJpbmdcIixcInZlcnNpb25cIjpcInN0cmluZ1wiLFwidXJsXCI6XCJzdHJpbmdcIixcImludGVyYWN0aXZlXCI6XCJib29sZWFuXCIsXCJyZW1lbWJlckxvZ2luXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImNsZWFyQ2FjaGVkQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwiZ2V0Q2xpZW50c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwib2JqZWN0XCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRVc2Vyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwib2JqZWN0XCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kTWVzc2FnZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxvZ291dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uTWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImZyb21cIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25Vc2VyUHJvZmlsZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbWFnZURhdGFcIjpcInN0cmluZ1wifX0sXCJvbkNsaWVudFN0YXRlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JhZ2VcIixcImFwaVwiOntcInNjb3BlXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU0VTU0lPTlwiOjAsXCJERVZJQ0VfTE9DQUxcIjoxLFwiVVNFUl9MT0NBTFwiOjIsXCJTSEFSRURcIjozfX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIkRhdGFiYXNlIG5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcInNjb3BlXCI6XCJudW1iZXJcIn1dfSxcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwic3RvcmVidWZmZXJcIixcImFwaVwiOntcInNjb3BlXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU0VTU0lPTlwiOjAsXCJERVZJQ0VfTE9DQUxcIjoxLFwiVVNFUl9MT0NBTFwiOjIsXCJTSEFSRURcIjozfX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIkRhdGFiYXNlIG5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcInNjb3BlXCI6XCJudW1iZXJcIn1dfSxcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwiYnVmZmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJidWZmZXJcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwiYnVmZmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwidHJhbnNwb3J0XCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIk5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInByb3h5XCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGFnXCI6XCJzdHJpbmdcIixcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX1dO1xuIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4wLjJcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5ID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm47XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gYXNhcEZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuICAgICAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoO1xuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc05vZGUpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSkge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGhlbiA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4obWF5YmVUaGVuYWJsZSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICBlbnVtZXJhdG9yLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICBlbnVtZXJhdG9yLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmIChlbnVtZXJhdG9yLl92YWxpZGF0ZUlucHV0KGlucHV0KSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgZW51bWVyYXRvci5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICBlbnVtZXJhdG9yLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgZW51bWVyYXRvci5faW5pdCgpO1xuXG4gICAgICAgIGlmIChlbnVtZXJhdG9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwoZW51bWVyYXRvci5wcm9taXNlLCBlbnVtZXJhdG9yLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudW1lcmF0b3IubGVuZ3RoID0gZW51bWVyYXRvci5sZW5ndGggfHwgMDtcbiAgICAgICAgICBlbnVtZXJhdG9yLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAoZW51bWVyYXRvci5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKGVudW1lcmF0b3IucHJvbWlzZSwgZW51bWVyYXRvci5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChlbnVtZXJhdG9yLnByb21pc2UsIGVudW1lcmF0b3IuX3ZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShpbnB1dCk7XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvcjtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIHZhciBsZW5ndGggID0gZW51bWVyYXRvci5sZW5ndGg7XG4gICAgICB2YXIgcHJvbWlzZSA9IGVudW1lcmF0b3IucHJvbWlzZTtcbiAgICAgIHZhciBpbnB1dCAgID0gZW51bWVyYXRvci5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZW51bWVyYXRvci5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuICAgICAgdmFyIGMgPSBlbnVtZXJhdG9yLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoZW50cnkpKSB7XG4gICAgICAgIGlmIChlbnRyeS5jb25zdHJ1Y3RvciA9PT0gYyAmJiBlbnRyeS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICBlbnRyeS5fb25lcnJvciA9IG51bGw7XG4gICAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW51bWVyYXRvci5fd2lsbFNldHRsZUF0KGMucmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnVtZXJhdG9yLl9yZW1haW5pbmctLTtcbiAgICAgICAgZW51bWVyYXRvci5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG4gICAgICB2YXIgcHJvbWlzZSA9IGVudW1lcmF0b3IucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3JlbWFpbmluZy0tO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudW1lcmF0b3IuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbnVtZXJhdG9yLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBlbnVtZXJhdG9yLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGwoZW50cmllcykge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cbiAgICAgIGlmICghbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuXG4gICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxtZW50KHZhbHVlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSksIHVuZGVmaW5lZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRyYWNlO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0KSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJHJlamVjdChyZWFzb24pIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3Q7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGNvdW50ZXIgPSAwO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZTtcbiAgICAvKipcbiAgICAgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgICAgIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gICAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBUZXJtaW5vbG9neVxuICAgICAgLS0tLS0tLS0tLS1cblxuICAgICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgICAgQmFzaWMgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgYGBganNcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgICAgYGBganNcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAY2xhc3MgUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICAgIHRoaXMuX2lkID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGNvdW50ZXIrKztcbiAgICAgIHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIGlmICghbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHJlc29sdmVyKSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UpKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuYWxsID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlc29sdmUgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcjtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0QXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRBc2FwO1xuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9hc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXA7XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gICAgICBjb25zdHJ1Y3RvcjogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UsXG5cbiAgICAvKipcbiAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBDaGFpbmluZ1xuICAgICAgLS0tLS0tLS1cblxuICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgICB9KTtcblxuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgICAgfSk7XG4gICAgICBgYGBcbiAgICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFzc2ltaWxhdGlvblxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBTaW1wbGUgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciBhdXRob3IsIGJvb2tzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcblxuICAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cbiAgICAgIH1cblxuICAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kQXV0aG9yKCkuXG4gICAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgdGhlblxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEICYmICFvbkZ1bGZpbGxtZW50IHx8IHN0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAmJiAhb25SZWplY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGFyZW50Ll9yZXN1bHQ7XG5cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW3N0YXRlIC0gMV07XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH0sXG5cbiAgICAvKipcbiAgICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgICAgfVxuXG4gICAgICAvLyBzeW5jaHJvbm91c1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmluZEF1dGhvcigpO1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH1cblxuICAgICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGNhdGNoXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsKCkge1xuICAgICAgdmFyIGxvY2FsO1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgICBpZiAoUCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2FsLlByb21pc2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGw7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZSA9IHtcbiAgICAgICdQcm9taXNlJzogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHRcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snRVM2UHJvbWlzZSddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQoKTtcbn0pLmNhbGwodGhpcyk7XG5cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gKi9cbi8qZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUsIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbXlSVENQZWVyQ29ubmVjdGlvbiA9IG51bGw7XG52YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xudmFyIG15UlRDSWNlQ2FuZGlkYXRlID0gbnVsbDtcblxudmFyIHJlbmFtZUljZVVSTHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZlcikge1xuICAgIHNlcnZlci51cmwgPSBzZXJ2ZXIudXJscztcbiAgICBkZWxldGUgc2VydmVyLnVybHM7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcblxudmFyIGZpeENocm9tZVN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgfTtcbiAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICB9KTtcbiAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gIH0pO1xuXG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBmaXhGaXJlZm94U3RhdHNSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIC8vIEdpdmluZyB0aGUgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIGNhbGxiYWNrIGdpdmVzIGFuIG9iamVjdCB3L28gaW50ZXJmYWNlXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9XZWJJRExfYmluZGluZ3MjQ2hyb21lT25seVxuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgcmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiAocmVwb3J0KSB7XG4gICAgc3RhbmRhcmRSZXBvcnRbcmVwb3J0LmlkXSA9IHJlcG9ydDtcbiAgfSk7XG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBzZXNzaW9uSGFzRGF0YSA9IGZ1bmN0aW9uKGRlc2MpIHtcbiAgaWYgKCFkZXNjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBoYXNEYXRhID0gZmFsc2U7XG4gIHZhciBwcmVmaXggPSAnbT1hcHBsaWNhdGlvbic7XG4gIGRlc2Muc2RwLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAobGluZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBoYXNEYXRhID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGFzRGF0YTtcbn07XG5cbi8vIFVuaWZ5IFBlZXJDb25uZWN0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgLy8gRmlyZWZveCB1c2VzICd1cmwnIHJhdGhlciB0aGFuICd1cmxzJyBmb3IgUlRDSWNlU2VydmVyLnVybHNcbiAgICB2YXIgcGMgPSBuZXcgbW96UlRDUGVlckNvbm5lY3Rpb24ocmVuYW1lSWNlVVJMcyhjb25maWd1cmF0aW9uKSwgY29uc3RyYWludHMpO1xuXG4gICAgLy8gRmlyZWZveCBzdGF0cyByZXNwb25zZSBpcyBvbmx5IHZpc2libGUgJ0Nocm9tZU9ubHknIHNvIHByb2Nlc3MgaXQgaGVyZVxuICAgIHZhciBib3VuZEdldFN0YXRzID0gcGMuZ2V0U3RhdHMuYmluZChwYyk7XG4gICAgcGMuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24oZmlyZWZveFN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeEZpcmVmb3hTdGF0c1Jlc3BvbnNlKGZpcmVmb3hTdGF0c1Jlc3BvbnNlKSk7XG4gICAgICB9O1xuICAgICAgYm91bmRHZXRTdGF0cyhzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciwgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGZpcmUgJ29ubmVnb3RpYXRpb25uZWVkZWQnIHdoZW4gYSBkYXRhIGNoYW5uZWwgaXMgY3JlYXRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICAgIHZhciBkYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBib3VuZENyZWF0ZURhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwuYmluZChwYyk7XG4gICAgcGMuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbihsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gICAgICB2YXIgZGMgPSBib3VuZENyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpO1xuICAgICAgaWYgKCFkYXRhRW5hYmxlZCkge1xuICAgICAgICBkYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChwYy5vbm5lZ290aWF0aW9ubmVlZGVkICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMubG9jYWxEZXNjcmlwdGlvbikgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5yZW1vdGVEZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgcGMub25uZWdvdGlhdGlvbm5lZWRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENocm9tZSByZXR1cm5zIGEgbm9uc3RhbmRhcmQsIG5vbi1KU09OLWlmaWFibGUgcmVzcG9uc2UgZnJvbSBnZXRTdGF0cy5cbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHBjID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKTtcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGNocm9tZVN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeENocm9tZVN0YXRzUmVzcG9uc2UoY2hyb21lU3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIC8vIENocm9tZSBhbHNvIHRha2VzIGl0cyBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLlxuICAgICAgYm91bmRHZXRTdGF0cyhzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBmYWlsdXJlQ2FsbGJhY2ssIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBwYztcbiAgfTtcbn1cblxuLy8gVW5pZnkgU2Vzc2lvbkRlc2NycHRpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn1cblxuLy8gVW5pZnkgSWNlQ2FuZGlkYXRlIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG59XG5cbmV4cG9ydHMuUlRDUGVlckNvbm5lY3Rpb24gPSBteVJUQ1BlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbmV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlID0gbXlSVENJY2VDYW5kaWRhdGU7XG4iLCIvKmdsb2JhbHMgcHJvY2VzcywgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbS5qcyBsb2dnaW5nIHByb3ZpZGVyIHRoYXQgbG9ncyB0byBjaHJvbWUsIGZpcmVmb3gsIGFuZCBub2RlIGNvbnNvbGVzLlxuICogQENsYXNzIExvZ2dlcl9jb25zb2xlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2NvbmZpZzogT2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIC0gY29uc29sZSByZXF1aXJlcyBnbG9iYWwgY29uZmlnLlxuICovXG52YXIgTG9nZ2VyX2NvbnNvbGUgPSBmdW5jdGlvbiAoY2FwKSB7XG4gIHRoaXMubGV2ZWwgPSAoY2FwLmNvbmZpZyAmJiBjYXAuY29uZmlnLmRlYnVnKSB8fCAnbG9nJztcbiAgdGhpcy5jb25zb2xlID0gKGNhcC5jb25maWcgJiYgY2FwLmNvbmZpZy5nbG9iYWwuY29uc29sZSk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIExvZ2dpbmcgbGV2ZWxzLCBmb3IgZmlsdGVyaW5nIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKiBAc3RhdGljXG4gKi9cbkxvZ2dlcl9jb25zb2xlLmxldmVsID0ge1xuICBcImRlYnVnXCI6IDAsXG4gIFwiaW5mb1wiOiAxLFxuICBcImxvZ1wiOiAyLFxuICBcIndhcm5cIjogMyxcbiAgXCJlcnJvclwiOiA0XG59O1xuXG4vKipcbiAqIFByaW50IGEgbWVzc2FnZSB3aXRoIGFwcHJvcHJpYXRlIGZvcm1hdHRpbmcuXG4gKiBAbWV0aG9kIHByaW50XG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBtc2cpIHtcbiAgdmFyIGFyciA9IG1zZztcbiAgaWYgKHR5cGVvZiB0aGlzLmNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGFyciA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnIgPSBbYXJyXTtcbiAgfVxuICBcbiAgaWYgKExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIExvZ2dlcl9jb25zb2xlLmxldmVsW3NldmVyaXR5XSA8IExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAoc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAgIC8vIE5vZGUuXG4gICAgICBhcnIudW5zaGlmdCgnXFx4MUJbMzltJyk7XG4gICAgICBhcnIudW5zaGlmdCgnXFx4MUJbMzFtJyArIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnNvbGUubWF4TG9nTGV2ZWwpIHtcbiAgICAgIC8vIEZpcmVmb3ggaW4gSlNNIGNvbnRleHQ6XG4gICAgICAvLyAgIGh0dHA6Ly9teHIubW96aWxsYS5vcmcvbW96aWxsYS1yZWxlYXNlL3NvdXJjZS90b29sa2l0L2RldnRvb2xzL0NvbnNvbGUuanNtXG4gICAgICBpZiAoIXRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCkge1xuICAgICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXAgPSB0aGlzLmNvbnNvbGUuZHVtcDtcbiAgICAgICAgdGhpcy5jb25zb2xlLmR1bXAgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wKHNvdXJjZSArICcgJyArIHNldmVyaXR5WzBdLnRvVXBwZXJDYXNlKCkgKyAnICcgK1xuICAgICAgICAgIGFyci5qb2luKCcgJykgKyAnXFxuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci51bnNoaWZ0KCdjb2xvcjogbm9uZScpO1xuICAgICAgYXJyLnVuc2hpZnQoJ2NvbG9yOiByZWQnKTtcbiAgICAgIGFyci51bnNoaWZ0KCclYycgKyBzb3VyY2UgKyAnJWMnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXRoaXMuY29uc29sZVtzZXZlcml0eV0gJiYgdGhpcy5jb25zb2xlLmxvZykge1xuICAgIHNldmVyaXR5ID0gJ2xvZyc7XG4gIH1cbiAgdGhpcy5jb25zb2xlW3NldmVyaXR5XS5hcHBseSh0aGlzLmNvbnNvbGUsIGFycik7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdsb2cnLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggZGVidWcgcHJpb3JpdHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2RlYnVnJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGluZm8gcHJpb3JpdHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnaW5mbycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCB3YXJuIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUud2FybiA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ3dhcm4nLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggZXJyb3IgcHJpb3JpdHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2Vycm9yJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKiBSRUdJU1RFUiBQUk9WSURFUiAqKi9cbmV4cG9ydHMucHJvdmlkZXIgPSBMb2dnZXJfY29uc29sZTtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLmNvbnNvbGUnO1xuZXhwb3J0cy5mbGFncyA9IHtjb25maWc6IHRydWV9O1xuIiwiLypnbG9iYWxzIGNvbnNvbGUsIGNyeXB0byAqL1xuLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgQ29yZSBwcm92aWRlciBmb3IgZ2V0dGluZyBjcnlwdG9ncmFwaGljYWxseSByYW5kb20gYnVmZmVycy4gVGhpc1xuICogZnVuY3Rpb25hbGl0eSBtYXkgbm90IGV4aXN0IGluIGFsbCB1bnByaXZpbGVkZ2VkIGNvbnRleHRzIC0gbmFtZWx5IGF0IHRoaXNcbiAqIHBvaW50LCBmaXJlZm94IGFkZG9uIHdvcmtlcnMuXG4gKiBAQ2xhc3MgQ29yZV9jcnlwdG9cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHttb2R1bGU6TW9kdWxlfSBjYXAgVGhlIG1vZHVsZSBjcmVhdGluZyB0aGlzIHByb3ZpZGVyLlxuICovXG52YXIgQ29yZV9jcnlwdG8gPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGJ1ZmZlciBvZiBzb21lIG51bWJlciBvZiBieXRlcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZW5kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZW5kaW5nIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZW5kXG4gKi9cbiBDb3JlX2NyeXB0by5wcm90b3R5cGUuZ2V0UmFuZG9tQnl0ZXMgPSBmdW5jdGlvbihudW1iZXIsIGNvbnRpbnVhdGlvbikge1xuICAgJ3VzZSBzdHJpY3QnO1xuICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KG51bWJlcik7XG4gICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1ZmZlcik7XG4gICBjb250aW51YXRpb24oYnVmZmVyLmJ1ZmZlcik7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV9jcnlwdG87XG5leHBvcnRzLm5hbWUgPSBcImNvcmUuY3J5cHRvXCI7XG4iLCIvKmdsb2JhbHMgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBtaW5pbWFsIHByb3ZpZGVyIGltcGxlbWVudGluZyB0aGUgY29yZS5lY2hvIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpb24gd2l0aFxuICogY3VzdG9tIGNoYW5uZWxzLiAgUHJpbWFyaWx5IHVzZWQgZm9yIHRlc3RpbmcgdGhlIHJvYnVzdG5lc3Mgb2YgdGhlIGN1c3RvbVxuICogY2hhbm5lbCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBDbGFzcyBFY2hvX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge21vZHVsZTpNb2R1bGV9IGNhcCBUaGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgcHJvdmlkZXIuXG4gKi9cbnZhciBFY2hvX3VucHJpdmlsZWdlZCA9IGZ1bmN0aW9uKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB0aGlzLm1vZCA9IGNhcC5tb2R1bGU7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuXG4gIC8vIFRoZSBDb3JlIG9iamVjdCBmb3IgbWFuYWdpbmcgY2hhbm5lbHMuXG4gIHRoaXMubW9kLm9uY2UoJ2NvcmUnLCBmdW5jdGlvbihDb3JlKSB7XG4gICAgdGhpcy5jb3JlID0gbmV3IENvcmUoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5tb2QuZW1pdCh0aGlzLm1vZC5jb250cm9sQ2hhbm5lbCwge1xuICAgIHR5cGU6ICdjb3JlIHJlcXVlc3QgZGVsZWdhdGVkIHRvIGVjaG8nLFxuICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICB9KTtcbn07XG5cbi8qKlxuICogU2V0dXAgdGhlIHByb3ZpZGVyIHRvIGVjaG8gb24gYSBzcGVjaWZpYyBwcm94eS4gU3Vic2VxdWVudCBtZXNzYWdlc1xuICogRnJvbSB0aGUgY3VzdG9tIGNoYW5uZWwgYm91bmQgaGVyZSB3aWxsIGJlIHJlLWVtaXR0ZWQgYXMgYSBtZXNzYWdlXG4gKiBmcm9tIHRoZSBwcm92aWRlci4gIFN1YnNlcXVlbnQgbWVzc2FnZXMgdG8gdGhlIHByb3ZpZGVyIHdpbGwgYmVcbiAqIGVtaXR0ZWQgb24gdGhlIGJvdW5kIGNoYW5uZWwuXG4gKiBAcGFyYW0ge09iamVjdH0gcHJveHkgVGhlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXN0b20gY2hhbm5lbCB0byBiaW5kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZXR1cCBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2V0dXBcbiAqL1xuRWNob191bnByaXZpbGVnZWQucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24ocHJveHksIGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24oKTtcbiAgaWYgKCF0aGlzLmNvcmUpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnbm8gY29yZSBhdmFpbGFibGUgdG8gc2V0dXAgcHJveHkgd2l0aCBhdCBlY2hvJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5jb3JlLmJpbmRDaGFubmVsKHByb3h5LCBmdW5jdGlvbihjaGFuKSB7XG4gICAgaWYgKHRoaXMuY2hhbikge1xuICAgICAgdGhpcy5jaGFuLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbiA9IGNoYW47XG4gICAgdGhpcy5jaGFuLm9uQ2xvc2UoZnVuY3Rpb24oKSB7XG4gICAgICBkZWxldGUgdGhpcy5jaGFuO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ2NoYW5uZWwgYm91bmQgdG8gZWNobycpO1xuICAgIHRoaXMuY2hhbi5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG0pIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdmcm9tIGN1c3RvbSBjaGFubmVsOiAnICsgbSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGJvdW5kIGN1c3RvbSBjaGFubmVsLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNlbmRpbmcgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIHNlbmRcbiAqL1xuRWNob191bnByaXZpbGVnZWQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihzdHIsIGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24oKTtcbiAgaWYgKHRoaXMuY2hhbikge1xuICAgIHRoaXMuY2hhbi5lbWl0KCdtZXNzYWdlJywgc3RyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnbm8gY2hhbm5lbCBhdmFpbGFibGUnKTtcbiAgfVxufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IEVjaG9fdW5wcml2aWxlZ2VkO1xuZXhwb3J0cy5uYW1lID0gXCJjb3JlLmVjaG9cIjtcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xuXG4vKipcbiAqIEFuIG9BdXRoIG1ldGEtcHJvdmlkZXIgYWxsb3dpbmcgbXVsdGlwbGUgcGxhdGZvcm0tZGVwZW5kYW50XG4gKiBvQXV0aCBpbXBsZW1lbnRhdGlvbnMgdG8gc2VydmUgYXMgdGhlIHJlZGlyZWN0VVJMIGZvciBhbiBvQXV0aCBmbG93LlxuICogVGhlIGNvcmUgaW1wbGVtZW50YXRpb25zIGFyZSBwcm92aWRlZCBpbiBwcm92aWRlcnMvb2F1dGgsIGFuZCBhcmVcbiAqIHN1cHBsZW1lbnRlZCBpbiBwbGF0Zm9ybS1kZXBlbmRlbnQgcmVwb3NpdG9yaWVzLlxuICpcbiAqL1xudmFyIE9BdXRoID0gZnVuY3Rpb24gKGhhbmRsZXJzLCBjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0aGlzLm9uZ29pbmcgPSB7fTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgb0F1dGggaGFuZGxlcnMuXG4gKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBwcm92aWRlciBpcyB1c2VkLCBhbmQgYmluZHMgdGhlIGN1cnJlbnRcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCByZWdpc3RlcmVkIGhhbmRsZXJzLiBUaGlzIGlzIHVzZWQgc29cbiAqIHRoYXQgaGFuZGxlcnMgd2hpY2ggYXJlIHJlZ2lzdGVyZWQgYnkgdGhlIHVzZXIgYXBwbHkgb25seSB0aGUgdGhlIGZyZWVkb20oKVxuICogc2V0dXAgY2FsbCB0aGV5IGFyZSBhc3NvY2lhdGVkIHdpdGgsIHdoaWxlIHN0aWxsIGJlaW5nIHJlZ2lzdGVyZWQgYWNyb3NzXG4gKiBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgT0F1dGggcHJvdmlkZXJzLlxuICpcbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7W2NvbnN0cnVjdG9yXX0gaGFuZGxlcnNcbiAqIEBwcml2YXRlXG4gKi9cbk9BdXRoLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGhhbmRsZXJzKSB7XG4gIHZhciBpLFxuICAgICAgYm91bmRIYW5kbGVycyA9IFtdO1xuICBpZiAoIWhhbmRsZXJzIHx8ICFoYW5kbGVycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gT0F1dGgucmVzZXQoKTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvdW5kSGFuZGxlcnMucHVzaChuZXcgaGFuZGxlcnNbaV0oKSk7XG4gIH1cbiAgZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgYm91bmRIYW5kbGVycyk7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBvQXV0aCBwcm92aWRlciByZWdpc3RyYXRpb25zLlxuICogQG1ldGhvZCByZXNldFxuICogQHByaXZhdGVcbiAqL1xuT0F1dGgucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGV4cG9ydHMucHJvdmlkZXIgPSBPQXV0aC5iaW5kKHRoaXMsIFtdKTtcbn07XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICovXG5PQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uIChyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICB2YXIgcHJvbWlzZSwgaSwgc3VjY2Vzc0NhbGxiYWNrO1xuICBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB0aGlzLm9uZ29pbmdbcmVzdWx0LnN0YXRlXSA9IHRoaXMuaGFuZGxlcnNbaV07XG4gICAgY29udGludWF0aW9uKHJlc3VsdCk7XG4gIH0uYmluZCh0aGlzKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldLmluaXRpYXRlT0F1dGgocmVkaXJlY3RVUklzLCBzdWNjZXNzQ2FsbGJhY2spKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIC8vSWYgaGVyZSwgd2UgaGF2ZSBubyBjb21wYXRpYmxlIHByb3ZpZGVyc1xuICBjb250aW51YXRpb24obnVsbCwge1xuICAgICdlcnJjb2RlJzogJ1VOS05PV04nLFxuICAgICdtZXNzYWdlJzogJ05vIHJlcXVlc3RlZCByZWRpcmVjdHMgY2FuIGJlIGhhbmRsZWQuJ1xuICB9KTtcbiAgcmV0dXJuO1xufTtcblxuLyoqXG4gKiBvQXV0aCBjbGllbnQtc2lkZSBmbG93IC0gbGF1bmNoIHRoZSBwcm92aWRlZCBVUkxcbiAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhdGVPQXV0aCB3aXRoIHRoZSByZXR1cm5lZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGxhdW5jaEF1dGhGbG93XG4gKiBAcGFyYW0ge1N0cmluZ30gYXV0aFVybCAtIFRoZSBVUkwgdGhhdCBpbml0aWF0ZXMgdGhlIGF1dGggZmxvdy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIC0gVGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJhY3RpdmUgLSBXaGV0aGVyIHRvIGxhdW5jaCBhbiBpbnRlcmFjdGl2ZSBPQXV0aCBmbG93LlxuICogICAgRGVmYXVsdHMgdG8gdHJ1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgU3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHJlc3BvbnNlIFVybCBjb250YWluaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAqL1xuT0F1dGgucHJvdG90eXBlLmxhdW5jaEF1dGhGbG93ID0gZnVuY3Rpb24oYXV0aFVybCwgc3RhdGVPYmosIGludGVyYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWF0aW9uKSB7XG4gIGlmICghdGhpcy5vbmdvaW5nLmhhc093blByb3BlcnR5KHN0YXRlT2JqLnN0YXRlKSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICdlcnJjb2RlJzogJ1VOS05PV04nLFxuICAgICAgJ21lc3NhZ2UnOiAnWW91IG11c3QgYmVnaW4gdGhlIG9BdXRoIGZsb3cgd2l0aCBpbml0aWF0ZU9BdXRoIGZpcnN0J1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW50ZXJhY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuICAgIGludGVyYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICB0aGlzLm9uZ29pbmdbc3RhdGVPYmouc3RhdGVdLmxhdW5jaEF1dGhGbG93KFxuICAgICAgYXV0aFVybCwgc3RhdGVPYmosIGludGVyYWN0aXZlLCBjb250aW51YXRpb24pO1xuICBkZWxldGUgdGhpcy5vbmdvaW5nW3N0YXRlT2JqLnN0YXRlXTtcbn07XG5cbmV4cG9ydHMucmVnaXN0ZXIgPSBPQXV0aC5yZWdpc3RlcjtcbmV4cG9ydHMucmVzZXQgPSBPQXV0aC5yZXNldDtcbmV4cG9ydHMucHJvdmlkZXIgPSBPQXV0aC5iaW5kKHRoaXMsIFtdKTtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLm9hdXRoJztcbiIsIi8qZ2xvYmFscyBjb25zb2xlLCBSVENQZWVyQ29ubmVjdGlvbiwgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gKi9cbi8qZ2xvYmFscyBtb3pSVENQZWVyQ29ubmVjdGlvbiwgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBSVENJY2VDYW5kaWRhdGUgKi9cbi8qZ2xvYmFscyBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24sIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuLypnbG9iYWxzIEFycmF5QnVmZmVyLCBCbG9iICovXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cbi8qKlxuICogRGF0YVBlZXIgLSBhIGNsYXNzIHRoYXQgd3JhcHMgcGVlciBjb25uZWN0aW9ucyBhbmQgZGF0YSBjaGFubmVscy5cbiAqL1xuLy8gVE9ETzogY2hlY2sgdGhhdCBIYW5kbGluZyBvZiBwcmFuc3dlciBpcyB0cmVhdGVkIGFwcHJvcHJpYXRlbHkuXG52YXIgU2ltcGxlRGF0YVBlZXJTdGF0ZSA9IHtcbiAgRElTQ09OTkVDVEVEOiAnRElTQ09OTkVDVEVEJyxcbiAgQ09OTkVDVElORzogJ0NPTk5FQ1RJTkcnLFxuICBDT05ORUNURUQ6ICdDT05ORUNURUQnXG59O1xuXG5mdW5jdGlvbiBTaW1wbGVEYXRhUGVlcihwZWVyTmFtZSwgc3R1blNlcnZlcnMsIGRhdGFDaGFubmVsQ2FsbGJhY2tzLCBtb2Nrcykge1xuICB2YXIgY29uc3RyYWludHMsXG4gICAgY29uZmlnLFxuICAgIGk7XG4gIHRoaXMucGVlck5hbWUgPSBwZWVyTmFtZTtcbiAgdGhpcy5jaGFubmVscyA9IHt9O1xuICB0aGlzLmRhdGFDaGFubmVsQ2FsbGJhY2tzID0gZGF0YUNoYW5uZWxDYWxsYmFja3M7XG4gIHRoaXMub25Db25uZWN0ZWRRdWV1ZSA9IFtdO1xuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gbW9ja3MuUlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSBtb3pSVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ1BlZXJDb25uZWN0aW9uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtb2Nrcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1vY2tzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3QgYXBwZWFyIHRvIHN1cHBvcnQgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtb2Nrcy5SVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IG1vY2tzLlJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gbW96UlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3QgYXBwZWFyIHRvIHN1cHBvcnQgUlRDSWNlQ2FuZGlkYXRlXCIpO1xuICB9XG5cblxuICBjb25zdHJhaW50cyA9IHtcbiAgICBvcHRpb25hbDogW3tEdGxzU3J0cEtleUFncmVlbWVudDogdHJ1ZX1dXG4gIH07XG4gIC8vIEEgd2F5IHRvIHNwZWFrIHRvIHRoZSBwZWVyIHRvIHNlbmQgU0RQIGhlYWRlcnMgZXRjLlxuICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlID0gbnVsbDtcblxuICB0aGlzLnBjID0gbnVsbDsgIC8vIFRoZSBwZWVyIGNvbm5lY3Rpb24uXG4gIC8vIEdldCBUVVJOIHNlcnZlcnMgZm9yIHRoZSBwZWVyIGNvbm5lY3Rpb24uXG4gIGNvbmZpZyA9IHtpY2VTZXJ2ZXJzOiBbXX07XG4gIGZvciAoaSA9IDA7IGkgPCBzdHVuU2VydmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbmZpZy5pY2VTZXJ2ZXJzLnB1c2goe1xuICAgICAgJ3VybCcgOiBzdHVuU2VydmVyc1tpXVxuICAgIH0pO1xuICB9XG4gIHRoaXMucGMgPSBuZXcgdGhpcy5SVENQZWVyQ29ubmVjdGlvbihjb25maWcsIGNvbnN0cmFpbnRzKTtcbiAgLy8gQWRkIGJhc2ljIGV2ZW50IGhhbmRsZXJzLlxuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJpY2VjYW5kaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSWNlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcIm5lZ290aWF0aW9ubmVlZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5lZ290aWF0aW9uTmVlZGVkLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhY2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25EYXRhQ2hhbm5lbC5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwic2lnbmFsaW5nc3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGNvbWUgdXAgd2l0aCBhIGJldHRlciB3YXkgdG8gZGV0ZWN0IGNvbm5lY3Rpb24uICBXZSBzdGFydCBvdXRcbiAgICAvLyBhcyBcInN0YWJsZVwiIGV2ZW4gYmVmb3JlIHdlIGFyZSBjb25uZWN0ZWQuXG4gICAgLy8gVE9ETzogdGhpcyBpcyBub3QgZmlyZWQgZm9yIGNvbm5lY3Rpb25zIGNsb3NlZCBieSB0aGUgb3RoZXIgc2lkZS5cbiAgICAvLyBUaGlzIHdpbGwgYmUgZml4ZWQgaW4gbTM3LCBhdCB0aGF0IHBvaW50IHdlIHNob3VsZCBkaXNwYXRjaCBhbiBvbkNsb3NlXG4gICAgLy8gZXZlbnQgaGVyZSBmb3IgZnJlZWRvbS50cmFuc3BvcnQgdG8gcGljayB1cC5cbiAgICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJzdGFibGVcIikge1xuICAgICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQ7XG4gICAgICB0aGlzLm9uQ29ubmVjdGVkUXVldWUubWFwKGZ1bmN0aW9uIChjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG4gIC8vIFRoaXMgc3RhdGUgdmFyaWFibGUgaXMgdXNlZCB0byBmYWtlIG9mZmVyL2Fuc3dlciB3aGVuIHRoZXkgYXJlIHdyb25nbHlcbiAgLy8gcmVxdWVzdGVkIGFuZCB3ZSByZWFsbHkganVzdCBuZWVkIHRvIHJldXNlIHdoYXQgd2UgYWxyZWFkeSBoYXZlLlxuICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkRJU0NPTk5FQ1RFRDtcblxuICAvLyBOb3RlOiB0byBhY3R1YWxseSBkbyBzb21ldGhpbmcgd2l0aCBkYXRhIGNoYW5uZWxzIG9wZW5lZCBieSBhIHBlZXIsIHdlXG4gIC8vIG5lZWQgc29tZW9uZSB0byBtYW5hZ2UgXCJkYXRhY2hhbm5lbFwiIGV2ZW50LlxufVxuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RhaW50cywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGMuY3JlYXRlT2ZmZXIoY29udGludWF0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcignY29yZS5wZWVyY29ubmVjdGlvbiBjcmVhdGVPZmZlciBmYWlsZWQuJyk7XG4gIH0sIGNvbnN0YWludHMpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLnJ1bldoZW5Db25uZWN0ZWQgPSBmdW5jdGlvbiAoZnVuYykge1xuICBpZiAodGhpcy5wY1N0YXRlID09PSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RFRCkge1xuICAgIGZ1bmMoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9uQ29ubmVjdGVkUXVldWUucHVzaChmdW5jKTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBtZXNzYWdlLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdLnNlbmQobWVzc2FnZSk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9wZW5EYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICB2YXIgZGF0YUNoYW5uZWwgPSB0aGlzLnBjLmNyZWF0ZURhdGFDaGFubmVsKGNoYW5uZWxJZCwge30pO1xuICBkYXRhQ2hhbm5lbC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hZGREYXRhQ2hhbm5lbChjaGFubmVsSWQsIGRhdGFDaGFubmVsKTtcbiAgICBjb250aW51YXRpb24oKTtcbiAgfS5iaW5kKHRoaXMpO1xuICBkYXRhQ2hhbm5lbC5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgIC8vQChyeXNjaGVuZykgdG9kbyAtIHJlcGxhY2Ugd2l0aCBlcnJvcnMgdGhhdCB3b3JrIGFjcm9zcyB0aGUgaW50ZXJmYWNlXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIGVycik7XG4gIH07XG4gIC8vIEZpcmVmb3ggZG9lcyBub3QgZmlyZSBcIm5lZ290aWF0aW9ubmVlZGVkXCIsIHNvIHdlIG5lZWQgdG9cbiAgLy8gbmVnb3RhdGUgaGVyZSBpZiB3ZSBhcmUgbm90IGNvbm5lY3RlZC5cbiAgLy8gU2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0aGlzLnBjU3RhdGUgPT09IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgdGhpcy5uZWdvdGlhdGVDb25uZWN0aW9uKCk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jbG9zZUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkKSB7XG4gIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXS5jbG9zZSgpO1xuICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF07XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWF0aW9uKSB7XG4gIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBkYXRhQ2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXTtcbiAgICByZXR1cm4gZGF0YUNoYW5uZWwuYnVmZmVyZWRBbW91bnQ7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2hhbm5lbCB3aXRoIGlkOiBcIiArIGNoYW5uZWxJZCk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuc2V0U2VuZFNpZ25hbE1lc3NhZ2UgPSBmdW5jdGlvbiAoc2VuZFNpZ25hbE1lc3NhZ2VGbikge1xuICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlID0gc2VuZFNpZ25hbE1lc3NhZ2VGbjtcbn07XG5cbi8vIEhhbmRsZSBhIG1lc3NhZ2Ugc2VuZCBvbiB0aGUgc2lnbmFsbGluZyBjaGFubmVsIHRvIHRoaXMgcGVlci5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5oYW5kbGVTaWduYWxNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2VUZXh0KSB7XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiaGFuZGxlU2lnbmFsTWVzc2FnZTogXFxuXCIgKyBtZXNzYWdlVGV4dCk7XG4gIHZhciBqc29uID0gSlNPTi5wYXJzZShtZXNzYWdlVGV4dCksXG4gICAgaWNlX2NhbmRpZGF0ZTtcblxuICAvLyBUT0RPOiBJZiB3ZSBhcmUgb2ZmZXJpbmcgYW5kIHRoZXkgYXJlIGFsc28gb2ZmZXJyaW5nIGF0IHRoZSBzYW1lIHRpbWUsXG4gIC8vIHBpY2sgdGhlIG9uZSB3aG8gaGFzIHRoZSBsb3dlciByYW5kb21JZD9cbiAgLy8gKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT0gXCJoYXZlLWxvY2FsLW9mZmVyXCIgJiYganNvbi5zZHAgJiZcbiAgLy8gICAganNvbi5zZHAudHlwZSA9PSBcIm9mZmVyXCIgJiYganNvbi5zZHAucmFuZG9tSWQgPCB0aGlzLmxvY2FsUmFuZG9tSWQpXG4gIGlmIChqc29uLnNkcCkge1xuICAgIC8vIFNldCB0aGUgcmVtb3RlIGRlc2NyaXB0aW9uLlxuICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oXG4gICAgICBuZXcgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24oanNvbi5zZHApLFxuICAgICAgLy8gU3VjY2Vzc1xuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogc2V0UmVtb3RlRGVzY3JpcHRpb24gc3VjY2VlZGVkXCIpO1xuICAgICAgICBpZiAodGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlID09PSBcIm9mZmVyXCIpIHtcbiAgICAgICAgICB0aGlzLnBjLmNyZWF0ZUFuc3dlcih0aGlzLm9uRGVzY3JpcHRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgLy8gRmFpbHVyZVxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgICAgIFwic2V0UmVtb3RlRGVzY3JpcHRpb24gZmFpbGVkOlwiLCBlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH0gZWxzZSBpZiAoanNvbi5jYW5kaWRhdGUpIHtcbiAgICAvLyBBZGQgcmVtb3RlIGljZSBjYW5kaWRhdGUuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IEFkZGluZyBpY2UgY2FuZGlkYXRlOiBcIiArIEpTT04uc3RyaW5naWZ5KGpzb24uY2FuZGlkYXRlKSk7XG4gICAgaWNlX2NhbmRpZGF0ZSA9IG5ldyB0aGlzLlJUQ0ljZUNhbmRpZGF0ZShqc29uLmNhbmRpZGF0ZSk7XG4gICAgdGhpcy5wYy5hZGRJY2VDYW5kaWRhdGUoaWNlX2NhbmRpZGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICBcImhhbmRsZVNpZ25hbE1lc3NhZ2UgZ290IHVuZXhwZWN0ZWQgbWVzc2FnZTogXCIsIG1lc3NhZ2VUZXh0KTtcbiAgfVxufTtcblxuLy8gQ29ubmVjdCB0byB0aGUgcGVlciBieSB0aGUgc2lnbmFsbGluZyBjaGFubmVsLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm5lZ290aWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVElORztcbiAgdGhpcy5wYy5jcmVhdGVPZmZlcihcbiAgICB0aGlzLm9uRGVzY3JpcHRpb24uYmluZCh0aGlzKSxcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgICBcImNyZWF0ZU9mZmVyIGZhaWxlZDogXCIsIGUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkRJU0NPTk5FQ1RFRDtcbiAgICB9LmJpbmQodGhpcylcbiAgKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5pc0Nsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLnBjIHx8IHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT09IFwiY2xvc2VkXCI7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5pc0Nsb3NlZCgpKSB7XG4gICAgdGhpcy5wYy5jbG9zZSgpO1xuICB9XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiQ2xvc2VkIHBlZXIgY29ubmVjdGlvbi5cIik7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuYWRkRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjaGFubmVsKSB7XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLmRhdGFDaGFubmVsQ2FsbGJhY2tzO1xuICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0gPSBjaGFubmVsO1xuXG4gIGlmIChjaGFubmVsLnJlYWR5U3RhdGUgPT09IFwiY29ubmVjdGluZ1wiKSB7XG4gICAgY2hhbm5lbC5vbm9wZW4gPSBjYWxsYmFja3Mub25PcGVuRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuICB9XG5cbiAgY2hhbm5lbC5vbmNsb3NlID0gY2FsbGJhY2tzLm9uQ2xvc2VGbi5iaW5kKHRoaXMsIGNoYW5uZWwsIHtsYWJlbDogY2hhbm5lbElkfSk7XG5cbiAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBjYWxsYmFja3Mub25NZXNzYWdlRm4uYmluZCh0aGlzLCBjaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogY2hhbm5lbElkfSk7XG5cbiAgY2hhbm5lbC5vbmVycm9yID0gY2FsbGJhY2tzLm9uRXJyb3JGbi5iaW5kKHRoaXMsIGNoYW5uZWwsIHtsYWJlbDogY2hhbm5lbH0pO1xufTtcblxuLy8gV2hlbiB3ZSBnZXQgb3VyIGRlc2NyaXB0aW9uLCB3ZSBzZXQgaXQgdG8gYmUgb3VyIGxvY2FsIGRlc2NyaXB0aW9uIGFuZFxuLy8gc2VuZCBpdCB0byB0aGUgcGVlci5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIGlmICh0aGlzLnNlbmRTaWduYWxNZXNzYWdlKSB7XG4gICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBzZXRMb2NhbERlc2NyaXB0aW9uIHN1Y2NlZWRlZFwiKTtcbiAgICAgICAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZShKU09OLnN0cmluZ2lmeSh7J3NkcCc6IGRlc2NyaXB0aW9ufSkpO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgICAgIFwic2V0TG9jYWxEZXNjcmlwdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICBcIl9vbkRlc2NyaXB0aW9uOiBfc2VuZFNpZ25hbE1lc3NhZ2UgaXMgbm90IHNldCwgc28gd2UgZGlkIG5vdCBcIiArXG4gICAgICAgICAgICBcInNldCB0aGUgbG9jYWwgZGVzY3JpcHRpb24uIFwiKTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uTmVnb3RpYXRpb25OZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIm9uTmVnb3RpYXRpb25OZWVkZWRcIixcbiAgLy8gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLl9wYyksIGUpO1xuICBpZiAodGhpcy5wY1N0YXRlICE9PSBTaW1wbGVEYXRhUGVlclN0YXRlLkRJU0NPTk5FQ1RFRCkge1xuICAgIC8vIE5lZ290aWF0aW9uIG1lc3NhZ2VzIGFyZSBmYWxzZWx5IHJlcXVlc3RlZCBmb3IgbmV3IGRhdGEgY2hhbm5lbHMuXG4gICAgLy8gICBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTI0MzFcbiAgICAvLyBUaGlzIGNvZGUgaXMgYSBoYWNrIHRvIHNpbXBseSByZXNldCB0aGUgc2FtZSBsb2NhbCBhbmQgcmVtb3RlXG4gICAgLy8gZGVzY3JpcHRpb24gd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSBhcHByb3ByaWF0ZSBkYXRhIGNoYW5uZWwgb3BlbiBldmVudC5cbiAgICAvLyBUT0RPOiBmaXgvcmVtb3ZlIHRoaXMgd2hlbiBDaHJvbWUgaXNzdWUgaXMgZml4ZWQuXG4gICAgdmFyIGxvZ1N1Y2Nlc3MgPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIG9wICsgXCIgc3VjY2VlZGVkIFwiKTtcbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9LmJpbmQodGhpcyksXG4gICAgICBsb2dGYWlsID0gZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIG9wICsgXCIgZmFpbGVkOiBcIiArIGUpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgaWYgKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbiAmJiB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uICYmXG4gICAgICAgIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi50eXBlID09PSBcIm9mZmVyXCIpIHtcbiAgICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSk7XG4gICAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIikpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uICYmIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24gJiZcbiAgICAgICAgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnR5cGUgPT09IFwiYW5zd2VyXCIpIHtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24odGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSk7XG4gICAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldExvY2FsRGVzY3JpcHRpb25cIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyAnLCBvbk5lZ290aWF0aW9uTmVlZGVkIGZhaWxlZCcpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5uZWdvdGlhdGVDb25uZWN0aW9uKCk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25JY2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgLy8gU2VuZCBJY2VDYW5kaWRhdGUgdG8gcGVlci5cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcImljZSBjYWxsYmFjayB3aXRoIGNhbmRpZGF0ZVwiLCBldmVudCk7XG4gICAgaWYgKHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoeydjYW5kaWRhdGUnOiBldmVudC5jYW5kaWRhdGV9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2Fybih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJfb25EZXNjcmlwdGlvbjogX3NlbmRTaWduYWxNZXNzYWdlIGlzIG5vdCBzZXQuXCIpO1xuICAgIH1cbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uU2lnbmFsaW5nU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwib25TaWduYWxpbmdTdGF0ZUNoYW5nZTogXCIsIHRoaXMuX3BjLnNpZ25hbGluZ1N0YXRlKTtcbiAgaWYgKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT09IFwic3RhYmxlXCIpIHtcbiAgICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RFRDtcbiAgICB0aGlzLm9uQ29ubmVjdGVkUXVldWUubWFwKGZ1bmN0aW9uIChjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9KTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5hZGREYXRhQ2hhbm5lbChldmVudC5jaGFubmVsLmxhYmVsLCBldmVudC5jaGFubmVsKTtcbiAgLy8gUlRDRGF0YUNoYW5uZWxzIGNyZWF0ZWQgYnkgYSBSVENEYXRhQ2hhbm5lbEV2ZW50IGhhdmUgYW4gaW5pdGlhbFxuICAvLyBzdGF0ZSBvZiBvcGVuLCBzbyB0aGUgb25vcGVuIGV2ZW50IGZvciB0aGUgY2hhbm5lbCB3aWxsIG5vdFxuICAvLyBmaXJlLiBXZSBuZWVkIHRvIGZpcmUgdGhlIG9uT3BlbkRhdGFDaGFubmVsIGV2ZW50IGhlcmVcbiAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvd2VicnRjLyNpZGwtZGVmLVJUQ0RhdGFDaGFubmVsU3RhdGVcblxuICAvLyBGaXJlZm94IGNoYW5uZWxzIGRvIG5vdCBoYXZlIGFuIGluaXRpYWwgc3RhdGUgb2YgXCJvcGVuXCJcbiAgLy8gU2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwMDA0NzhcbiAgaWYgKGV2ZW50LmNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJvcGVuXCIpIHtcbiAgICB0aGlzLmRhdGFDaGFubmVsQ2FsbGJhY2tzLm9uT3BlbkZuKGV2ZW50LmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6IGV2ZW50LmNoYW5uZWwubGFiZWx9KTtcbiAgfVxufTtcblxuLy8gX3NpZ25hbGxpbmdDaGFubmVsIGlzIGEgY2hhbm5lbCBmb3IgZW1pdHRpbmcgZXZlbnRzIGJhY2sgdG8gdGhlIGZyZWVkb20gSHViLlxuZnVuY3Rpb24gUGVlckNvbm5lY3Rpb24ocG9ydE1vZHVsZSwgZGlzcGF0Y2hFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uLCBSVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBSVENJY2VDYW5kaWRhdGUpIHtcbiAgLy8gQ2hhbm5lbCBmb3IgZW1pdHRpbmcgZXZlbnRzIHRvIGNvbnN1bWVyLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuXG4gIC8vIGEgKGhvcGVmdWxseSB1bmlxdWUpIElEIGZvciBkZWJ1Z2dpbmcuXG4gIHRoaXMucGVlck5hbWUgPSBcInBcIiArIE1hdGgucmFuZG9tKCk7XG5cbiAgLy8gVGhpcyBpcyB0aGUgcG9ydEFwcCAoZGVmaW5lZCBpbiBmcmVlZG9tL3NyYy9wb3J0LWFwcC5qcykuIEEgd2F5IHRvIHNwZWFrXG4gIC8vIHRvIGZyZWVkb20uXG4gIHRoaXMuZnJlZWRvbU1vZHVsZSA9IHBvcnRNb2R1bGUubW9kdWxlO1xuXG4gIC8vIEZvciB0ZXN0cyB3ZSBtYXkgbW9jayBvdXQgdGhlIFBlZXJDb25uZWN0aW9uIGFuZFxuICAvLyBTZXNzaW9uRGVzY3JpcHRpb24gaW1wbGVtZW50YXRpb25zXG4gIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbiAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gUlRDSWNlQ2FuZGlkYXRlO1xuXG4gIC8vIFRoaXMgaXMgdGhlIGEgY2hhbm5lbCB0byBzZW5kIHNpZ25hbGxpbmcgbWVzc2FnZXMuXG4gIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwgPSBudWxsO1xuXG4gIC8vIFRoZSBEYXRhUGVlciBvYmplY3QgZm9yIHRhbGtpbmcgdG8gdGhlIHBlZXIuXG4gIHRoaXMucGVlciA9IG51bGw7XG5cbiAgLy8gVGhlIENvcmUgb2JqZWN0IGZvciBtYW5hZ2luZyBjaGFubmVscy5cbiAgdGhpcy5mcmVlZG9tTW9kdWxlLm9uY2UoJ2NvcmUnLCBmdW5jdGlvbiAoQ29yZSkge1xuICAgIHRoaXMuY29yZSA9IG5ldyBDb3JlKCk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIHRoaXMuZnJlZWRvbU1vZHVsZS5lbWl0KHRoaXMuZnJlZWRvbU1vZHVsZS5jb250cm9sQ2hhbm5lbCwge1xuICAgIHR5cGU6ICdjb3JlIHJlcXVlc3QgZGVsZWdhdGVkIHRvIHBlZXJjb25uZWN0aW9uJyxcbiAgICByZXF1ZXN0OiAnY29yZSdcbiAgfSk7XG59XG5cbi8vIFN0YXJ0IGEgcGVlciBjb25uZWN0aW9uIHVzaW5nIHRoZSBnaXZlbiBmcmVlZG9tQ2hhbm5lbElkIGFzIHRoZSB3YXkgdG9cbi8vIGNvbW11bmljYXRlIHdpdGggdGhlIHBlZXIuIFRoZSBhcmd1bWVudCB8ZnJlZWRvbUNoYW5uZWxJZHwgaXMgYSB3YXkgdG8gc3BlYWtcbi8vIHRvIGFuIGlkZW50aXR5IHByb3ZpZGUgdG8gc2VuZCB0aGVtIFNEUCBoZWFkZXJzIG5lZ290aWF0ZSB0aGUgYWRkcmVzcy9wb3J0IHRvXG4vLyBzZXR1cCB0aGUgcGVlciB0byBwZWVyQ29ubmVjdGlvbi5cbi8vXG4vLyBvcHRpb25zOiB7XG4vLyAgIHBlZXJOYW1lOiBzdHJpbmcsICAgLy8gRm9yIHByZXR0eSBwcmludGluZyBtZXNzYWdlcyBhYm91dCB0aGlzIHBlZXIuXG4vLyAgIGRlYnVnOiBib29sZWFuICAgICAgICAgICAvLyBzaG91bGQgd2UgYWRkIGV4dHJhXG4vLyB9XG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoc2lnbmFsbGluZ0NoYW5uZWxJZCwgcGVlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1blNlcnZlcnMsIGluaXRpYXRlQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyTmFtZSA9IHBlZXJOYW1lO1xuICB2YXIgbW9ja3MgPSB7UlRDUGVlckNvbm5lY3Rpb246IHRoaXMuUlRDUGVlckNvbm5lY3Rpb24sXG4gICAgICAgICAgICAgICBSVENTZXNzaW9uRGVzY3JpcHRpb246IHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgUlRDSWNlQ2FuZGlkYXRlOiB0aGlzLlJUQ0ljZUNhbmRpZGF0ZX0sXG4gICAgc2VsZiA9IHRoaXMsXG4gICAgZGF0YUNoYW5uZWxDYWxsYmFja3MgPSB7XG4gICAgICAvLyBvbk9wZW5GbiBpcyBjYWxsZWQgYXQgdGhlIHBvaW50IG1lc3NhZ2VzIHdpbGwgYWN0dWFsbHkgZ2V0IHRocm91Z2guXG4gICAgICBvbk9wZW5GbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvKSB7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChcIm9uT3BlbkRhdGFDaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGFubmVsSWQ6IGluZm8ubGFiZWx9KTtcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlRm46IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCwgaW5mbykge1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoXCJvbkNsb3NlRGF0YUNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoYW5uZWxJZDogaW5mby5sYWJlbH0pO1xuICAgICAgfSxcbiAgICAgIC8vIERlZmF1bHQgb24gcmVhbCBtZXNzYWdlIHByaW50cyBpdCB0byBjb25zb2xlLlxuICAgICAgb25NZXNzYWdlRm46IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCwgaW5mbywgZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudCgnb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICdjaGFubmVsTGFiZWwnOiBpbmZvLmxhYmVsLFxuICAgICAgICAgICAgJ2J1ZmZlcic6IGV2ZW50LmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudCgnb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICdjaGFubmVsTGFiZWwnOiBpbmZvLmxhYmVsLFxuICAgICAgICAgICAgJ2JpbmFyeSc6IGV2ZW50LmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGV2ZW50LmRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudCgnb25SZWNlaXZlZCcsIHtcbiAgICAgICAgICAgICdjaGFubmVsTGFiZWwnOiBpbmZvLmxhYmVsLFxuICAgICAgICAgICAgJ3RleHQnOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBEZWZhdWx0IG9uIGVycm9yLCBwcmludHMgaXQuXG4gICAgICBvbkVycm9yRm46IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCwgaW5mbywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YUNoYW5uZWwucGVlck5hbWUgKyBcIjogZGF0YUNoYW5uZWwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGFDaGFubmVsLmRhdGFDaGFubmVsLmxhYmVsICsgXCIpOiBlcnJvcjogXCIsIGVycik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFubmVsSWQsXG4gICAgb3BlbkRhdGFDaGFubmVsQ29udGludWF0aW9uO1xuXG4gIHRoaXMucGVlciA9IG5ldyBTaW1wbGVEYXRhUGVlcih0aGlzLnBlZXJOYW1lLCBzdHVuU2VydmVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDaGFubmVsQ2FsbGJhY2tzLCBtb2Nrcyk7XG5cbiAgLy8gU2V0dXAgbGluayBiZXR3ZWVuIEZyZWVkb20gbWVzc2FnaW5nIGFuZCBfcGVlcidzIHNpZ25hbGxpbmcuXG4gIC8vIE5vdGU6IHRoZSBzaWduYWxsaW5nIGNoYW5uZWwgc2hvdWxkIG9ubHkgYmUgc2VuZGluZyByZWNlaXZlaW5nIHN0cmluZ3MuXG4gIHRoaXMuY29yZS5iaW5kQ2hhbm5lbChzaWduYWxsaW5nQ2hhbm5lbElkLCBmdW5jdGlvbiAoY2hhbm5lbCkge1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMucGVlci5zZXRTZW5kU2lnbmFsTWVzc2FnZShmdW5jdGlvbiAobXNnKSB7XG4gICAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLmVtaXQoJ21lc3NhZ2UnLCBtc2cpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbC5vbignbWVzc2FnZScsXG4gICAgICAgIHRoaXMucGVlci5oYW5kbGVTaWduYWxNZXNzYWdlLmJpbmQodGhpcy5wZWVyKSk7XG4gICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbC5lbWl0KCdyZWFkeScpO1xuICAgIGlmICghaW5pdGlhdGVDb25uZWN0aW9uKSB7XG4gICAgICB0aGlzLnBlZXIucnVuV2hlbkNvbm5lY3RlZChjb250aW51YXRpb24pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBpZiAoaW5pdGlhdGVDb25uZWN0aW9uKSB7XG4gICAgLy8gU2V0dXAgYSBjb25uZWN0aW9uIHJpZ2h0IGF3YXksIHRoZW4gaW52b2tlIGNvbnRpbnVhdGlvbi5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgJyBpbml0aWF0aW5nIGNvbm5lY3Rpb24nKTtcbiAgICBjaGFubmVsSWQgPSAnaGVsbG8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xuICAgIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbiA9IGZ1bmN0aW9uIChzdWNjZXNzLCBlcnJvcikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VEYXRhQ2hhbm5lbChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbik7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbkRhdGFDaGFubmVsKGNoYW5uZWxJZCwgb3BlbkRhdGFDaGFubmVsQ29udGludWF0aW9uKTtcbiAgfVxufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0cmFpbnRzLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLmNyZWF0ZU9mZmVyKGNvbnN0cmFpbnRzLCBjb250aW51YXRpb24pO1xufTtcblxuLy8gVE9ETzogZGVsYXkgY29udGludWF0aW9uIHVudGlsIHRoZSBvcGVuIGNhbGxiYWNrIGZyb20gX3BlZXIgaXMgY2FsbGVkLlxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLm9wZW5EYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIub3BlbkRhdGFDaGFubmVsKGNoYW5uZWxJZCwgY29udGludWF0aW9uKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZURhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5jbG9zZUNoYW5uZWwoY2hhbm5lbElkKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vLyBDYWxsZWQgdG8gc2VuZCBhIG1lc3NhZ2Ugb3ZlciB0aGUgZ2l2ZW4gZGF0YWNoYW5uZWwgdG8gYSBwZWVyLiBJZiB0aGUgZGF0YVxuLy8gY2hhbm5lbCBkb2Vzbid0IGFscmVhZHkgZXhpc3QsIHRoZSBEYXRhUGVlciBjcmVhdGVzIGl0LlxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoc2VuZEluZm8sIGNvbnRpbnVhdGlvbikge1xuICB2YXIgb2JqVG9TZW5kID0gc2VuZEluZm8udGV4dCB8fCBzZW5kSW5mby5idWZmZXIgfHwgc2VuZEluZm8uYmluYXJ5O1xuICBpZiAodHlwZW9mIG9ialRvU2VuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTm8gdmFsaWQgZGF0YSB0byBzZW5kIGhhcyBiZWVuIHByb3ZpZGVkLlwiLCBzZW5kSW5mbyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vREVCVUdcbiAgLy8gb2JqVG9TZW5kID0gbmV3IEFycmF5QnVmZmVyKDQpO1xuICAvL0RFQlVHXG4gIHRoaXMucGVlci5zZW5kKHNlbmRJbmZvLmNoYW5uZWxMYWJlbCwgb2JqVG9TZW5kLCBjb250aW51YXRpb24pO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbih0aGlzLnBlZXIuZ2V0QnVmZmVyZWRBbW91bnQoY2hhbm5lbElkKSk7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGlmICh0aGlzLnBlZXIuaXNDbG9zZWQoKSkge1xuICAgIC8vIFBlZXIgYWxyZWFkeSBjbG9zZWQsIHJ1biBjb250aW51YXRpb24gd2l0aG91dCBkaXNwYXRjaGluZyBldmVudC5cbiAgICBjb250aW51YXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wZWVyLmNsb3NlKCk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudChcIm9uQ2xvc2VcIik7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IFBlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUucGVlcmNvbm5lY3Rpb24nO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypqc2xpbnQgc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuLypnbG9iYWxzIENvbXBvbmVudHMsIEFycmF5QnVmZmVyICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxudmFyIGV2ZW50TmFtZXMgPSBbXG4gICdvbm9wZW4nLFxuICAnb25lcnJvcicsXG4gICdvbmNsb3NlJyxcbiAgJ29ubWVzc2FnZSdcbl07XG5cbnZhciB1bkF0dGFjaGVkQ2hhbm5lbHMgPSB7fTtcbnZhciBwZW5kaW5nRXZlbnRzID0ge307XG52YXIgYWxsb2NhdGVDaGFubmVsID0gZnVuY3Rpb24gKGRhdGFDaGFubmVsKSB7XG4gIHZhciBpZCA9IHV0aWwuZ2V0SWQoKTtcbiAgdW5BdHRhY2hlZENoYW5uZWxzW2lkXSA9IGRhdGFDaGFubmVsO1xuICBwZW5kaW5nRXZlbnRzW2lkXSA9IFtdO1xuICBldmVudE5hbWVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgLy8gVGhpcyBsaXN0ZW5lciB3aWxsIGJlIG92ZXJyaWRkZW4gKHJlLXNldCkgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yIHJ1bnMuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGN1cnJlbnRIYW5kbGVyID0gZGF0YUNoYW5uZWxbZXZlbnROYW1lXTtcbiAgICAgIGlmIChjdXJyZW50SGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICBwZW5kaW5nRXZlbnRzW2lkXS5wdXNoKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGN1cnJlbnRIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIElmIGFuIGV2ZW50IHNvbWVob3cgcnVucyBvbiB0aGlzIGV2ZW50IGhhbmRsZXIgYWZ0ZXIgaXQgaGFzIGJlZW5cbiAgICAgICAgLy8gcmVwbGFjZWQsIGZvcndhcmQgdGhhdCBldmVudCB0byB0aGUgbmV3IGV2ZW50IGhhbmRsZXIuXG4gICAgICAgIGN1cnJlbnRIYW5kbGVyKGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaGFuZGxlciBmb3IgJyArIGV2ZW50LnR5cGUgKyAnIGV2ZW50Jyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkYXRhQ2hhbm5lbFtldmVudE5hbWVdID0gaGFuZGxlcjtcbiAgfSk7XG4gIHJldHVybiBpZDtcbn07XG5cbnZhciBSVENEYXRhQ2hhbm5lbEFkYXB0ZXIgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50cywgaWQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudHM7XG4gIGlmICghdW5BdHRhY2hlZENoYW5uZWxzW2lkXSkge1xuICAgIGNvbnNvbGUud2FybignSW52YWxpZCBJRCwgY3JlYXRpbmcgYWN0aW5nIG9uIHVuYXR0YWNoZWQgRGF0YUNoYW5uZWwnKTtcbiAgICB2YXIgQ29ubmVjdGlvbiA9IHJlcXVpcmUoJy4vY29yZS5ydGNwZWVyY29ubmVjdGlvbicpLnByb3ZpZGVyLFxuICAgICAgcHJvdmlkZXIgPSBuZXcgQ29ubmVjdGlvbigpO1xuICAgIGlkID0gcHJvdmlkZXIuY3JlYXRlRGF0YUNoYW5uZWwoKTtcbiAgICBwcm92aWRlci5jbG9zZSgpO1xuICB9XG5cbiAgdGhpcy5jaGFubmVsID0gdW5BdHRhY2hlZENoYW5uZWxzW2lkXTtcbiAgZGVsZXRlIHVuQXR0YWNoZWRDaGFubmVsc1tpZF07XG5cbiAgLy8gQWZ0ZXIgdGhlIGNvbnN0cnVjdG9yIHJldHVybnMsIGFuZCB0aGUgY2FsbGVyIGhhcyBhIGNoYW5jZSB0byByZWdpc3RlclxuICAvLyBldmVudCBsaXN0ZW5lcnMsIGZpcmUgYWxsIHBlbmRpbmcgZXZlbnRzLCBhbmQgdGhlbiBlbnN1cmUgdGhhdCBhbGxcbiAgLy8gc3Vic2VxdWVudCBldmVudHMgYXJlIGhhbmRsZWQgaW1tZWRpYXRlbHkuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kcmFpblBlbmRpbmdFdmVudHMoaWQpO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBtdXN0IG5vdCBiZSBjYWxsZWQgdW50aWwgYWZ0ZXIgdGhlIHBlbmRpbmcgZXZlbnRzIGFyZVxuICAgIC8vIGRyYWluZWQsIHRvIGVuc3VyZSB0aGF0IG1lc3NhZ2VzIGFyZSBkZWxpdmVyZWQgaW4gb3JkZXIuXG4gICAgdGhpcy5tYW5hZ2VFdmVudHModHJ1ZSk7XG4gIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmRyYWluUGVuZGluZ0V2ZW50cyA9IGZ1bmN0aW9uKGlkKSB7XG4gIHBlbmRpbmdFdmVudHNbaWRdLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzWydvbicgKyBldmVudC50eXBlXShldmVudCk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIGRlbGV0ZSBwZW5kaW5nRXZlbnRzW2lkXTtcbn07XG5cbi8vIEF0dGFjaCBvciBkZXRhY2ggbGlzdGVuZXJzIGZvciBldmVudHMgYWdhaW5zdCB0aGUgY29ubmVjdGlvbi5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUubWFuYWdlRXZlbnRzID0gZnVuY3Rpb24gKGF0dGFjaCkge1xuICBldmVudE5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIGlmIChhdHRhY2gpIHtcbiAgICAgIHRoaXNbZXZlbnROYW1lXSA9IHRoaXNbZXZlbnROYW1lXS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jaGFubmVsW2V2ZW50TmFtZV0gPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxbZXZlbnROYW1lXTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldExhYmVsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5sYWJlbCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE9yZGVyZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm9yZGVyZWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRNYXhQYWNrZXRMaWZlVGltZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubWF4UGFja2V0TGlmZVRpbWUpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRNYXhSZXRyYW5zbWl0cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubWF4UmV0cmFuc21pdHMpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRQcm90b2NvbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwucHJvdG9jb2wpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXROZWdvdGlhdGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5uZWdvdGlhdGVkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmlkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwucmVhZHlTdGF0ZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5idWZmZXJlZEFtb3VudCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldEJpbmFyeVR5cGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmJpbmFyeVR5cGUpO1xufTtcblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2V0QmluYXJ5VHlwZSA9IGZ1bmN0aW9uIChiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSA9IGJpbmFyeVR5cGU7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodGV4dCwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLnNlbmQodGV4dCk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNlbmRCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyLCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuc2VuZChidWZmZXIpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAoIXRoaXMuY2hhbm5lbCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdGhpcy5jaGFubmVsLmNsb3NlKCk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ub3BlbicsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25lcnJvcicsIHtcbiAgICBlcnJjb2RlOiBldmVudC50eXBlLFxuICAgIG1lc3NhZ2U6IGV2ZW50Lm1lc3NhZ2VcbiAgfSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmNsb3NlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7dGV4dDogZXZlbnQuZGF0YX0pO1xuICB9IGVsc2UgaWYgKHRoaXMuY2hhbm5lbC5iaW5hcnlUeXBlID09PSAnYXJyYXlidWZmZXInICYmXG4gICAgICB0eXBlb2YgQ29tcG9uZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICEoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIC8vIEluIEZpcmVmb3ggQWRkb25zLCBpbmNvbWluZyBhcnJheSBidWZmZXJzIGFyZSBub3QgYWx3YXlzIG93bmVkIGJ5IHRoZVxuICAgIC8vIEFkZG9uIGNvbnRleHQuIFRoZSBmb2xsb3dpbmcgbGluZSBjbG9uZXMgdGhlIG9iamVjdCB0byB0YWtlIG93bmVyc2hpcC5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvQ29tcG9uZW50cy51dGlscy5jbG9uZUludG9cbiAgICB2YXIgbXlEYXRhID0gQ29tcG9uZW50cy51dGlscy5jbG9uZUludG8oZXZlbnQuZGF0YSwge30pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge2J1ZmZlcjogbXlEYXRhfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7YnVmZmVyOiBldmVudC5kYXRhfSk7XG4gIH1cbn07XG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS5ydGNkYXRhY2hhbm5lbFwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFJUQ0RhdGFDaGFubmVsQWRhcHRlcjtcbmV4cG9ydHMuYWxsb2NhdGUgPSBhbGxvY2F0ZUNoYW5uZWw7XG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciBhZGFwdGVyID0gcmVxdWlyZSgnd2VicnRjLWFkYXB0ZXInKTtcbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIFJUQ1BlZXJDb25uZWN0aW9uID0gYWRhcHRlci5SVENQZWVyQ29ubmVjdGlvbjtcbnZhciBSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBhZGFwdGVyLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbnZhciBSVENJY2VDYW5kaWRhdGUgPSBhZGFwdGVyLlJUQ0ljZUNhbmRpZGF0ZTtcblxudmFyIERhdGFDaGFubmVsID0gcmVxdWlyZSgnLi9jb3JlLnJ0Y2RhdGFjaGFubmVsJyk7XG5cbnZhciBSVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50LCBjb25maWd1cmF0aW9uKSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRyeSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gTm90ZTogWW91IGNhbid0IGFzayB0aGUgcHJvdmlkZXIgdG8gY2xvc2UgeW91IHN5bmNocm9ub3VzbHksIHNpbmNlXG4gICAgLy8gdGhlIGNvbnN0cnVjdG9yIGhhcyBub3QgeWV0IHJldHVybmVkLCBzbyB0aGVyZSdzIG5vICd0aGlzJyB0aGF0XG4gICAgLy8gdGhlIHByb3ZpZGVyIGNhbiBrbm93IGFib3V0IHlldC5cbiAgICBzZXRUaW1lb3V0KGNhcC5wcm92aWRlci5jbG9zZS5iaW5kKGNhcC5wcm92aWRlciwgdGhpcyksIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZXZlbnRzID0gW1xuICAgICdvbmRhdGFjaGFubmVsJyxcbiAgICAnb25uZWdvdGlhdGlvbm5lZWRlZCcsXG4gICAgJ29uaWNlY2FuZGlkYXRlJyxcbiAgICAnb25zaWduYWxpbmdzdGF0ZWNoYW5nZScsXG4gICAgJ29uYWRkc3RyZWFtJyxcbiAgICAnb25yZW1vdmVzdHJlYW0nLFxuICAgICdvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSdcbiAgXTtcbiAgdGhpcy5tYW5hZ2VFdmVudHModHJ1ZSk7XG59O1xuXG4vLyBBdHRhY2ggb3IgZGV0YWNoIGxpc3RlbmVycyBmb3IgZXZlbnRzIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24uXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm1hbmFnZUV2ZW50cyA9IGZ1bmN0aW9uIChhdHRhY2gpIHtcbiAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoYXR0YWNoKSB7XG4gICAgICB0aGlzW2V2ZW50XSA9IHRoaXNbZXZlbnRdLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25bZXZlbnRdID0gdGhpc1tldmVudF07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbm5lY3Rpb25bZXZlbnRdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIocmVzb2x2ZSwgcmVqZWN0LCBjb25zdHJhaW50cyk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZUFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSxcbiAgICAgIHJlc29sdmUsXG4gICAgICByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5sb2NhbERlc2NyaXB0aW9uKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVtb3RlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLnJlbW90ZURlc2NyaXB0aW9uKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U2lnbmFsaW5nU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLnNpZ25hbGluZ1N0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUudXBkYXRlSWNlID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24pIHtcbiAgdGhpcy5jb25uZWN0aW9uLnVwZGF0ZUljZShjb25maWd1cmF0aW9uKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmFkZEljZUNhbmRpZGF0ZShuZXcgUlRDSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0SWNlR2F0aGVyaW5nU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLmljZUdhdGhlcmluZ1N0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0SWNlQ29ubmVjdGlvblN0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGUpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29uZmlndXJhdGlvbiA9IHRoaXMuY29ubmVjdGlvbi5nZXRDb25maWd1cmF0aW9uKCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoY29uZmlndXJhdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFN0cmVhbUJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH1cbiAgdGhpcy5tYW5hZ2VFdmVudHMoZmFsc2UpO1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgICBlcnJjb2RlOiBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gIHZhciBpZCA9IERhdGFDaGFubmVsLmFsbG9jYXRlKHRoaXMuY29ubmVjdGlvbi5jcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoaWQpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5nZXRTdGF0cyhzZWxlY3RvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZShldmVudC5jaGFubmVsKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmRhdGFjaGFubmVsJywge2NoYW5uZWw6IGlkfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm5lZ290aWF0aW9ubmVlZGVkJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBtc2c7XG4gIGlmIChldmVudC5jYW5kaWRhdGUgJiYgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSkge1xuICAgIG1zZyA9IHtcbiAgICAgIGNhbmRpZGF0ZToge1xuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXhcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1zZyA9IHtcbiAgICAgIGNhbmRpZGF0ZTogbnVsbFxuICAgIH07XG4gIH1cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmljZWNhbmRpZGF0ZScsIG1zZyk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmFkZHN0cmVhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvL1RPRE86IHByb3ZpZGUgSUQgb2YgYWxsb2NhdGVkIHN0cmVhbS5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmFkZHN0cmVhbScsIGV2ZW50LnN0cmVhbSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25yZW1vdmVzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy9UT0RPOiBwcm92aWRlIElEIG9mIGRlYWxsb2NhdGVkIHN0cmVhbS5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbnJlbW92ZXN0cmVhbScsIGV2ZW50LnN0cmVhbSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXI7XG5leHBvcnRzLnN0eWxlID0gXCJwcm92aWRlUHJvbWlzZXNcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7cHJvdmlkZXI6IHRydWV9O1xuIiwiLypnbG9iYWxzIGxvY2FsU3RvcmFnZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBGcmVlRE9NIGNvcmUuc3RvcmFnZSBwcm92aWRlciB0aGF0IGRlcGVuZHMgb24gbG9jYWxTdG9yYWdlXG4gKiBUaHVzLCB0aGlzIG9ubHkgd29ya3MgaW4gdGhlIGNvbnRleHQgb2YgYSB3ZWJwYWdlIGFuZCBoYXNcbiAqIHNvbWUgc2l6ZSBsaW1pdGF0aW9ucy5cbiAqIE5vdGUgdGhhdCB0aGlzIGNhbiBjb25mbGljdCB3aXRoIG90aGVyIHNjcmlwdHMgdXNpbmcgbG9jYWxTdG9yYWdlXG4gKiBhcyBrZXlzIGFyZSByYXdcbiAqIEBDbGFzcyBTdG9yYWdlX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgZm9yIHRoZSBwcm92aWRlclxuICovXG52YXIgU3RvcmFnZV91bnByaXZpbGVnZWQgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBMaXN0cyBrZXlzIGluIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnlcbiAqIEBtZXRob2Qga2V5c1xuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgfVxuICBjb250aW51YXRpb24ocmVzdWx0KTtcbn07XG5cbi8qKlxuICogR2V0IGEga2V5IGZyb20gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gZ2V0IGZyb20gc3RvcmFnZS5cbiAqIEBtZXRob2QgZ2V0XG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBjb250aW51YXRpb24pIHtcbiAgdHJ5IHtcbiAgICB2YXIgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICBjb250aW51YXRpb24odmFsKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnRpbnVhdGlvbihudWxsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgYSBrZXkgaW4gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gc2F2ZSBpbiBzdG9yYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBzYXZlIGluIHN0b3JhZ2UuXG4gKiBAbWV0aG9kIHNldFxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGNvbnRpbnVhdGlvbikge1xuICB2YXIgcmV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIGNvbnRpbnVhdGlvbihyZXQpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBrZXkgZnJvbSB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgaXRlbSB0byByZW1vdmUgZnJvbSBzdG9yYWdlO1xuICogQG1ldGhvZCByZW1vdmVcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGNvbnRpbnVhdGlvbikge1xuICB2YXIgcmV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgY29udGludWF0aW9uKHJldCk7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBTdG9yYWdlX3VucHJpdmlsZWdlZDtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnN0b3JhZ2UnO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cbnZhciBFdmVudEludGVyZmFjZSA9IHJlcXVpcmUoJy4uLy4uL3NyYy9wcm94eS9ldmVudEludGVyZmFjZScpO1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi4vLi4vc3JjL2NvbnN1bWVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQ29yZSBmcmVlZG9tIHNlcnZpY2VzIGF2YWlsYWJsZSB0byBhbGwgbW9kdWxlcy5cbiAqIENyZWF0ZWQgYnkgdGhlIGVudmlyb25tZW50IGhlbHBlciBpbiByZXNwb25zZSB0byBhICdjb3JlJyByZXF1ZXN0LlxuICogQENsYXNzIENvcmVfdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciB0aGlzIGNvcmUgaXMgY29ubmVjdGVkIHdpdGguXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgQ29yZV91bnByaXZpbGVnZWQgPSBmdW5jdGlvbihtYW5hZ2VyLCBwb3N0TWVzc2FnZSkge1xuICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyLm1vZHVsZTtcbiAgdGhpcy5kZWJ1ZyA9IHRoaXMubWFuYWdlci5kZWJ1Zztcbn07XG5cbkNvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVscyA9IHt9O1xuXG5Db3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQgPSB1bmRlZmluZWQ7XG5Db3JlX3VucHJpdmlsZWdlZC5tb2R1bGVJbnRlcm5hbCA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGUgYSBjdXN0b20gY2hhbm5lbC5cbiAqIFJldHVybnMgdGhlIHN0cnVjdHVyZSB7Y2hhbm5lbDogUHJveHksIGlkZW50aWZpZXI6IE9iamVjdH0sXG4gKiB3aGVyZSB0aGUgaWRlbnRpZmllciBjYW4gYmUgJ3JlZGVlbWVkJyBieSBhbm90aGVyIG1vZHVsZSBvciBwcm92aWRlciB1c2luZ1xuICogYmluZCBjaGFubmVsLCBhdCB3aGljaCBwb2ludCB0aGUgZGVmZXJyZWQgb2JqZWN0IHdpbGwgcmVzb2x2ZSB3aXRoIGEgY2hhbm5lbFxuICogYmV0d2VlbiB0aGUgdHdvIGVuZHBvaW50cy5cbiAqIEBtZXRob2QgY3JlYXRlQ2hhbm5lbFxuICogQHBhcmFtcyB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBNZXRob2QgdG8gY2FsbCB3aXRoIHRoZSBjb3NudHJ1Y3RlZCBzdHJ1Y3R1cmUuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5jcmVhdGVDaGFubmVsID0gZnVuY3Rpb24oY29udGludWF0aW9uKSB7XG4gIHZhciBwcm94eSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5tYW5hZ2VyLmRlYnVnKSxcbiAgICAgIGlkID0gdXRpbC5nZXRJZCgpLFxuICAgICAgY2hhbiA9IHRoaXMuZ2V0Q2hhbm5lbChwcm94eSk7XG4gIHRoaXMubWFuYWdlci5zZXR1cChwcm94eSk7XG5cbiAgaWYgKHRoaXMuaXNJbk1vZHVsZSgpKSB7XG4gICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkXSA9IHtcbiAgICBsb2NhbDogdHJ1ZSxcbiAgICBwcm94eTogcHJveHlcbiAgfTtcblxuICBwcm94eS5vbmNlKCdzdGFydCcsIHRoaXMuZ2V0Q2hhbm5lbC5iaW5kKHRoaXMsIHByb3h5KSk7XG5cbiAgY29udGludWF0aW9uKHtcbiAgICBjaGFubmVsOiBjaGFuLFxuICAgIGlkZW50aWZpZXI6IGlkXG4gIH0pO1xufTtcblxuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldENoYW5uZWwgPSBmdW5jdGlvbihwcm94eSkge1xuICB2YXIgaWZhY2UgPSBwcm94eS5nZXRQcm94eUludGVyZmFjZSgpLFxuICAgICAgY2hhbiA9IGlmYWNlKCk7XG4gIGNoYW4uY2xvc2UgPSBpZmFjZS5jbG9zZTtcbiAgY2hhbi5vbkNsb3NlID0gaWZhY2Uub25DbG9zZTtcbiAgaWZhY2Uub25DbG9zZShjaGFuLCBmdW5jdGlvbigpIHtcbiAgICBwcm94eS5kb0Nsb3NlKCk7XG4gIH0pO1xuICByZXR1cm4gY2hhbjtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBhIG1lc3NhZ2UgZnJvbSBhbm90aGVyIGNvcmUgaW5zdGFuY2UuXG4gKiBOb3RlOiBDb3JlX3VucHJpdmlsZWdlZCBpcyBub3QgcmVnaXN0ZXJlZCBvbiB0aGUgaHViLiBpdCBpcyBhIHByb3ZpZGVyLFxuICogICAgIGFzIGl0J3MgbG9jYXRpb24gYW5kIG5hbWUgd291bGQgaW5kaWNhdGUuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5XG4gKiAgICAgcG9ydC1hcHAgdG8gcmVsYXkgbWVzc2FnZXMgdXAgdG8gaGlnaGVyIGxldmVscy4gIE1vcmUgZ2VuZXJhbGx5LCB0aGVcbiAqICAgICBtZXNzYWdlcyBlbWl0dGVkIGJ5IHRoZSBjb3JlIHRvICd0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFuYWdlLmRlbGVnYXRlJ1xuICogICAgIFNob3VsZCBiZSBvbk1lc3NhZ2VkIHRvIHRoZSBjb250cm9sbGluZyBjb3JlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1zZyBUaGUgbWVzc3NhZ2UgZnJvbSBhbiBpc29sYXRlZCBjb3JlIHByb3ZpZGVyLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24oc291cmNlLCBtc2cpIHtcbiAgaWYgKG1zZy50eXBlID09PSAncmVnaXN0ZXInKSB7XG4gICAgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF0gPSB7XG4gICAgICByZW1vdGU6IHRydWUsXG4gICAgICByZXNvbHZlOiBtc2cucmVwbHksXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH07XG4gIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdjbGVhcicpIHtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF07XG4gIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdiaW5kJykge1xuICAgIGlmIChDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXSkge1xuICAgICAgdGhpcy5iaW5kQ2hhbm5lbChtc2cuaWQsIGZ1bmN0aW9uKCkge30sIHNvdXJjZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVxdWlyZScpIHtcbiAgICBzb3VyY2UucmVxdWlyZShtc2cuaWQsIG1zZy5tYW5pZmVzdCk7XG4gIH1cbn07XG5cbi8qKlxuICogQmluZCBhIGN1c3RvbSBjaGFubmVsLlxuICogQ3JlYXRlcyBhIHByb3h5IGludGVyZmFjZSB0byB0aGUgY3VzdG9tIGNoYW5uZWwsIHdoaWNoIHdpbGwgYmUgYm91bmQgdG9cbiAqIHRoZSBwcm94eSBvYnRhaW5lZCB0aHJvdWdoIGFuIGVhcmxpZXIgY3JlYXRlQ2hhbm5lbCBjYWxsLlxuICogY2hhbm5lbCB0byBhIHByb3h5LlxuICogQG1ldGhvZCBiaW5kQ2hhbm5lbFxuICogQHBhcmFtIHtPYmplY3R9IGlkZW50aWZpZXIgQW4gaWRlbnRpZmllciBvYnRhaW5lZCB0aHJvdWdoIGNyZWF0ZUNoYW5uZWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgcHJveHkuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5iaW5kQ2hhbm5lbCA9IGZ1bmN0aW9uKGlkZW50aWZpZXIsIGNvbnRpbnVhdGlvbiwgc291cmNlKSB7XG4gIHZhciB0b0JpbmQgPSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl0sXG4gICAgICBuZXdTb3VyY2UgPSAhc291cmNlO1xuXG4gIC8vIHdoZW4gYmluZENoYW5uZWwgaXMgY2FsbGVkIGRpcmVjdGx5LCBzb3VyY2Ugd2lsbCBiZSB1bmRlZmluZWQuXG4gIC8vIFdoZW4gaXQgaXMgcHJvcG9nYXRlZCBieSBvbk1lc3NhZ2UsIGEgc291cmNlIGZvciBiaW5kaW5nIHdpbGwgYWxyZWFkeSBleGlzdC5cbiAgaWYgKG5ld1NvdXJjZSkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ21ha2luZyBsb2NhbCBwcm94eSBmb3IgY29yZSBiaW5kaW5nJyk7XG4gICAgc291cmNlID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLmRlYnVnKTtcbiAgICB0aGlzLm1hbmFnZXIuc2V0dXAoc291cmNlKTtcbiAgfVxuXG4gIC8vIElmIHRoaXMgaXMgYSBrbm93biBpZGVudGlmaWVyIGFuZCBpcyBpbiB0aGUgc2FtZSBjb250ZXh0LCBiaW5kaW5nIGlzIGVhc3kuXG4gIGlmICh0b0JpbmQgJiYgdG9CaW5kLmxvY2FsKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnQmluZGluZyBhIGNoYW5uZWwgdG8gcG9ydCBvbiB0aGlzIGh1YjonICsgc291cmNlKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhzb3VyY2UsIGlkZW50aWZpZXIsIHRvQmluZC5wcm94eSwgJ2RlZmF1bHQnKTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICAgIGlmICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIHR5cGU6ICdjbGVhcicsXG4gICAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRvQmluZCAmJiB0b0JpbmQucmVtb3RlKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnQmluZGluZyBhIGNoYW5uZWwgaW50byBhIG1vZHVsZS4nKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhcbiAgICAgICAgc291cmNlLFxuICAgICAgICBuZXdTb3VyY2UgPyAnZGVmYXVsdCcgOiBpZGVudGlmaWVyLFxuICAgICAgICB0b0JpbmQuc291cmNlLFxuICAgICAgICBpZGVudGlmaWVyKTtcbiAgICB0b0JpbmQucmVzb2x2ZSh7XG4gICAgICB0eXBlOiAnQmluZCBDaGFubmVsJyxcbiAgICAgIHJlcXVlc3Q6J2NvcmUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnYmluZCcsXG4gICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgfSBlbHNlIGlmICh0aGlzLmlzSW5Nb2R1bGUoKSkge1xuICAgIHRoaXMuZGVidWcuaW5mbygnZGVsZWdhdGluZyBjaGFubmVsIGJpbmQgZm9yIGFuIHVua25vd24gSUQ6JyArIGlkZW50aWZpZXIpO1xuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdiaW5kJyxcbiAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzb3VyY2Uub25jZSgnc3RhcnQnLCBmdW5jdGlvbihwLCBjYikge1xuICAgICAgY2IodGhpcy5nZXRDaGFubmVsKHApKTtcbiAgICB9LmJpbmQodGhpcywgc291cmNlLCBjb250aW51YXRpb24pKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhzb3VyY2UsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmh1Yi5nZXREZXN0aW5hdGlvbih0aGlzLm1hbmFnZXIuZGVsZWdhdGUpLFxuICAgICAgICBpZGVudGlmaWVyKTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oJ0Fza2VkIHRvIGJpbmQgdW5rbm93biBjaGFubmVsOiAnICsgaWRlbnRpZmllcik7XG4gICAgdGhpcy5kZWJ1Zy5sb2coQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzKTtcbiAgICBjb250aW51YXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc291cmNlLmdldEludGVyZmFjZSkge1xuICAgIGNvbnRpbnVhdGlvbih0aGlzLmdldENoYW5uZWwoc291cmNlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBpc0luTW9kdWxlXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgdGhpcyBjbGFzcyBpcyBydW5uaW5nIGluIGEgbW9kdWxlLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuaXNJbk1vZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSk7XG59O1xuXG4vKipcbiAqIFJlcXVpcmUgYSBkeW5hbWljIGRlcGVuZGVuY3kgZm9yIHlvdXIgZnJlZWRvbSBtb2R1bGUuXG4gKiBJZiBuZXcgcGVybWlzc2lvbnMgYXJlIG5lZWRlZCBiZXlvbmQgd2hhdCBhcmUgYWxyZWFkeSBhdmFpbGFibGUgdG8gdGhlXG4gKiBmcmVlZG9tIGNvbnRleHQsIHRoZSB1c2VyIHdpbGwgbmVlZCB0byBhcHByb3ZlIG9mIHRoZSByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuXG4gKiBAbWV0aG9kIHJlcXVpcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgVVJMIG9mIHRoZSBtYW5pZmVzdCB0byByZXF1aXJlLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgQVBJIG9mIHRoZSBkZXBlbmRlbmN5IHRvIGV4cG9zZSBpZiBub3QgZGVmYXVsdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdpdGggdGhlIGRlcGVuZGVuY3kuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24gKG1hbmlmZXN0LCBhcGksIGNhbGxiYWNrKSB7XG4gIGlmICh0aGlzLmlzSW5Nb2R1bGUoKSAmJiBDb3JlX3VucHJpdmlsZWdlZC5tb2R1bGVJbnRlcm5hbCkge1xuICAgIC8vIFJlZ2lzdGVyIGEgY2FsbGJhY2sgd2l0aCBtb2R1bGVJbnRlcm5hbC5cbiAgICAvLyBEZXBlbmRlbmN5TmFtZSBpcyB0aGUgbmFtZSBvZiB0aGUgY2hhbm5lbCBtb2R1ZWxJbnRlcm5hbCB3aWxsIGFsbG9jYXRlXG4gICAgLy8gY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgb25jZSBhIGxpbmsgdG8gdGhhdCBjaGFubmVsIGlzIHNlZW4uXG4gICAgdmFyIGRlcGVuZGVuY3lOYW1lID1cbiAgICAgICAgQ29yZV91bnByaXZpbGVnZWQubW9kdWxlSW50ZXJuYWwucmVnaXN0ZXJJZChhcGksIGNhbGxiYWNrKTtcblxuICAgIC8vIFJlcXVlc3QgdGhlIGRlcGVuZGVuY3kgYmUgYWRkZWQuXG4gICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ3JlcXVpcmUnLFxuICAgICAgICBtYW5pZmVzdDogbWFuaWZlc3QsXG4gICAgICAgIGlkOiBkZXBlbmRlbmN5TmFtZVxuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ1RoZSByZXF1aXJlIGZ1bmN0aW9uIGluIGV4dGVybmFsIGNvbnRleHQgbWFrZXMgbm8gc2Vuc2UnICtcbiAgICAgICAgJyBJbnN0ZWFkIGNyZWF0ZSBhIG5ldyBmcmVlZG9tKCkgY29udGV4dC4nKTtcbiAgICBjYWxsYmFjayh1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6ICdJbnZhbGlkQ29udGV4dCcsXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IGNhbGwgcmVxdWlyZSgpIGZyb20gdGhpcyBjb250ZXh0LidcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIElEIG9mIHRoZSBjdXJyZW50IGZyZWVkb20uanMgY29udGV4dC4gIFByb3ZpZGVzIGFuXG4gKiBhcnJheSBvZiBtb2R1bGUgVVJMcywgdGhlIGxpbmVhZ2Ugb2YgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIFdoZW4gbm90IGluIGFuIGFwcGxpY2F0aW9uIGNvbnRleHQsIHRoZSBJRCBpcyB0aGUgbGluZWFnZVxuICogb2YgdGhlIGN1cnJlbnQgVmlldy5cbiAqIEBtZXRob2QgZ2V0SWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiBjYWxsZWQgd2l0aCBJRCBpbmZvcm1hdGlvbi5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgLy8gVE9ETzogbWFrZSBzdXJlIGNvbnRleHRJRCBpcyBwcm9wZXJseSBmcm96ZW4uXG4gIGNhbGxiYWNrKENvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGxvZ2dlciBmb3IgbG9nZ2luZyB0byB0aGUgZnJlZWRvbS5qcyBsb2dnZXIuIFByb3ZpZGVzIGFcbiAqIGxvZyBvYmplY3Qgd2l0aCBhbiBpbnRlcmZhY2Ugc2ltaWxhciB0byB0aGUgc3RhbmRhcmQgamF2YXNjcmlwdCBjb25zb2xlLFxuICogd2hpY2ggbG9ncyB2aWEgZGVidWcuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGxvZ2dlciwgdXNlZCBhcyBpdHMgJ3NvdXJjZSdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdpdGggdGhlIGxvZ2dlci5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldExvZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMubWFuYWdlci5kZWJ1Zy5nZXRMb2dnZXIobmFtZSkpO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIElEIG9mIHRoZSBjdXJyZW50IGZyZWVkb20uanMgY29udGV4dC5cbiAqIEBtZXRob2Qgc2V0SWRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBpZCBUaGUgbGluZWFnZSBvZiB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHBhcmFtIHtNb2R1bGVJbnRlcm5hbH0gbW9kdWxlSW50ZXJuYWwgVGhlIE1vZHVsZSBlbnZpcm9ubWVudCBpZiBvbmUgZXhpc3RzLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0SWQgPSBmdW5jdGlvbihpZCwgbW9kdWxlSW50ZXJuYWwpIHtcbiAgQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gaWQ7XG4gIENvcmVfdW5wcml2aWxlZ2VkLm1vZHVsZUludGVybmFsID0gbW9kdWxlSW50ZXJuYWw7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmVcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xyXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbi8qKlxyXG4gKiBBIGZyZWVkb20uanMgdmlldyBpcyB0aGUgaW50ZXJmYWNlIGZvciB1c2VyIGludGVyYWN0aW9uLlxyXG4gKiBBIHZpZXcgZXhpc3RzIGFzIGFuIGlGcmFtZSwgd2hpY2ggaXMgc2hvd24gdG8gdGhlIHVzZXIgaW4gc29tZSB3YXkuXHJcbiAqIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgdmlldyBhbmQgdGhlIGZyZWVkb20uanMgbW9kdWxlIGlzIHBlcmZvcm1lZFxyXG4gKiB0aHJvdWdoIHRoZSBIVE1MNSBwb3N0TWVzc2FnZSBtZWNoYW5pc20sIHdoaWNoIHRoaXMgcHJvdmlkZXIgdHJhbnNsYXRlc1xyXG4gKiB0byBmcmVlZG9tLmpzIG1lc3NhZ2UgZXZlbnRzLlxyXG4gKiBAQ2xhc3MgVmlld191bnByaXZpbGVnZWRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7VmlldyBQcm92aWRlcn0gcHJvdmlkZXJcclxuICogQHBhcmFtIHtwcm92aWRlcjpQcm92aWRlcixtb2R1bGU6TW9kdWxlfSBjYXAgVGhlIGluc3RhbnRpYXRvciBvZiB0aGUgdmlldy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2hFdmVudCBGdW5jdGlvbiB0byBjYWxsIHRvIGVtaXQgZXZlbnRzLlxyXG4gKi9cclxudmFyIENvcmVfVmlldyA9IGZ1bmN0aW9uIChwcm92aWRlciwgY2FwLCBkaXNwYXRjaEV2ZW50KSB7XHJcbiAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xyXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XHJcbiAgc2V0VGltZW91dChjYXAucHJvdmlkZXIub25DbG9zZS5iaW5kKFxyXG4gICAgY2FwLnByb3ZpZGVyLFxyXG4gICAgdGhpcyxcclxuICAgIHRoaXMuY2xvc2UuYmluZCh0aGlzLCBmdW5jdGlvbiAoKSB7fSlcclxuICApLCAwKTtcclxuICB0aGlzLm1vZHVsZSA9IGNhcC5tb2R1bGU7XHJcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIGlzIHRoZSBkZWZhdWx0IHByb3ZpZGVyIGZvciBjb3JlLnZpZXcsIHVubGVzcyBvdmVycmlkZGVuIGJ5IGNvbnRleHQgb3JcclxuICogYSB1c2VyIHN1cHBsaWVkIHByb3ZpZGVyLiBUaGUgaW50ZXJmYWNlIGlzIGRvY3VtZW50ZWQgYXQ6XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVlZG9tanMvZnJlZWRvbS93aWtpL2ZyZWVkb20uanMtVmlld3NcclxuICpcclxuICogR2VuZXJhbGx5LCBhIHZpZXcgcHJvdmlkZXIgY29uc2lzdHMgb2YgMyBtZXRob2RzOlxyXG4gKiBvbk9wZW4gaXMgY2FsbGVkIHdoZW4gYSB2aWV3IHNob3VsZCBiZSBzaG93bi5cclxuICogICAgIGlkIC0gaXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyB2aWV3LCB1c2VkIG9uIHN1YnNlcXVlbnQgY2FsbHNcclxuICogICAgICAgICAgZm9yIGNvbW11bmljYXRpb24gYW5kIHRvIGV2ZW50dWFsbHkgY2xvc2UgdGhlIHZpZXcuXHJcbiAqICAgICBuYW1lIC0gaXMgdGhlIG5hbWUgb2YgdGhlIHZpZXcgKGFzIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0KSxcclxuICogICAgICAgICAgICBpbiBvcmRlciB0byBwbGFjZSBpdCBhcHByb3ByaWF0ZWx5LlxyXG4gKiAgICAgcGFnZSAtIGlzIHRoZSByZXNvbHZlZCBVUkwgdG8gb3Blbi5cclxuICogICAgIHJlc291cmNlcyAtIGlzIGFuIGFycmF5IG9mIHJlc29sdmVkIFVSTHMgd2hpY2ggYXJlIHJlZmVyZW5jZWQuXHJcbiAqICAgICBwb3N0TWVzc2FnZSAtIGlzIGEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG1lc3NhZ2VzIGFyZSBlbWl0dGVkXHJcbiAqICAgICAgICAgICAgICAgICAgIGJ5IHRoZSB3aW5kb3cgaW4gd2hpY2ggdGhlIHZpZXcgaXMgb3BlbmVkLlxyXG4gKiBvbk9wZW4gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjb21wbGV0ZXMgd2hlbiB0aGUgdmlldyBpcyBsb2FkZWQuXHJcbiAqIG9uTWVzc2FnZSBpcyBjYWxsZWQgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gYW4gb3BlbiB2aWV3LlxyXG4gKiAgICAgaWQgLSBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBvcGVuIHZpZXcuXHJcbiAqICAgICBtZXNzYWdlIC0gaXMgdGhlIG1lc3NhZ2UgdG8gcG9zdE1lc3NhZ2UgdG8gdGhlIHZpZXcncyB3aW5kb3cuXHJcbiAqIG9uQ2xvc2UgaXMgY2FsbGVkIHRvIGNsb3NlIGEgdmlldy5cclxuICogICAgIGlkIC0gaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdmlldy5cclxuICovXHJcbkNvcmVfVmlldy5wcm92aWRlciA9IHtcclxuICBsaXN0ZW5lcjogdW5kZWZpbmVkLFxyXG4gIGFjdGl2ZToge30sXHJcbiAgb25PcGVuOiBmdW5jdGlvbiAoaWQsIG5hbWUsIHBhZ2UsIHJlc291cmNlcywgcG9zdE1lc3NhZ2UpIHtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICByb290LFxyXG4gICAgICBmcmFtZTtcclxuICAgIFxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpIGluIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmUuaGFzT3duUHJvcGVydHkoaSkgJiZcclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5zb3VyY2UgPT09IG1zZy5zb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0ucG9zdE1lc3NhZ2UobXNnLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZpZXdzIG9wZW4gYnkgZGVmYXVsdCBpbiBhbiBlbGVtZW50IHdpdGggdGhlaXIgSUQsIG9yIGZpbGwgdGhlIHBhZ2VcclxuICAgIC8vIG90aGVyd2lzZS5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKSkge1xyXG4gICAgICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvb3Quc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICByb290LnN0eWxlLmRpc3BsYXkgPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgIGZyYW1lLnNldEF0dHJpYnV0ZShcInNhbmRib3hcIiwgXCJhbGxvdy1zY3JpcHRzIGFsbG93LWZvcm1zXCIpO1xyXG4gICAgICBmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgIGZyYW1lLnNyYyA9IHBhZ2U7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlLCB0cnVlKTtcclxuICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCByZWplY3QsIHRydWUpO1xyXG5cclxuICAgICAgcm9vdC5hcHBlbmRDaGlsZChmcmFtZSk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZVtpZF0gPSB7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2U6IHBvc3RNZXNzYWdlLFxyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICAgIHJvb3Q6IHJvb3QsXHJcbiAgICAgICAgc291cmNlOiBmcmFtZS5jb250ZW50V2luZG93XHJcbiAgICAgIH07XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgb25NZXNzYWdlOiBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuYWN0aXZlW2lkXS5zb3VyY2UucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcclxuICB9LFxyXG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdGhpcy5hY3RpdmVbaWRdLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2ZVtpZF0ucm9vdCk7XHJcbiAgICBkZWxldGUgdGhpcy5hY3RpdmVbaWRdO1xyXG4gICAgXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hY3RpdmUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBc2sgZm9yIHRoaXMgdmlldyB0byBvcGVuIGEgc3BlY2lmaWMgbG9jYXRpb24sIGVpdGhlciBhIEZpbGUgcmVsYXRpdmUgdG9cclxuICogdGhlIGxvYWRlciwgb3IgYW4gZXhwbGljaXQgY29kZSBsb2NhdGlvbi5cclxuICogQG1ldGhvZCBzaG93XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBpZGVudGlmaWVyIG9mIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHZpZXcgaXMgbG9hZGVkLlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICh0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnQUxSRUFEWV9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBzaG93IG11bHRpcGxlIHZpZXdzIHRocm91Z2ggb25lIGluc3RhbmNlLidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLmlkID0gdXRpbC5nZXRJZCgpO1xyXG5cclxuICB2YXIgY29uZmlnID0gdGhpcy5tb2R1bGUubWFuaWZlc3Qudmlld3MsXHJcbiAgICB0b1Jlc29sdmUgPSBbXTtcclxuICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnW25hbWVdKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9OX0VYSVNUQU5UJyxcclxuICAgICAgbWVzc2FnZTogJ1ZpZXcgbm90IGZvdW5kOiAnICsgbmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlnW25hbWVdLm1haW4gJiYgY29uZmlnW25hbWVdLmZpbGVzKSB7XHJcbiAgICB0b1Jlc29sdmUgPSBjb25maWdbbmFtZV0uZmlsZXMuY29uY2F0KGNvbmZpZ1tuYW1lXS5tYWluKTtcclxuICAgIFByb21pc2VDb21wYXQuYWxsKHRvUmVzb2x2ZS5tYXAoZnVuY3Rpb24gKGZuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5yZXNvdXJjZS5nZXQodGhpcy5tb2R1bGUubWFuaWZlc3RJZCwgZm5hbWUpO1xyXG4gICAgfS5iaW5kKHRoaXMpKSkudGhlbihmdW5jdGlvbiAoZmlsZXMpIHtcclxuICAgICAgdGhpcy5wcm92aWRlci5vbk9wZW4odGhpcy5pZCxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBmaWxlc1tmaWxlcy5sZW5ndGggLSAxXSxcclxuICAgICAgICAgIGZpbGVzLFxyXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQodGhpcywgJ21lc3NhZ2UnKSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRpbnVhdGlvbiBpcyBjYWxsZWQgd2l0aG91dCBhbiBhcmd1bWVudC5cclxuICAgICAgICAgIGMoKTtcclxuICAgICAgICB9LmJpbmQoe30sIGNvbnRpbnVhdGlvbiksXHJcbiAgICAgICAgY29udGludWF0aW9uLmJpbmQoe30sIHVuZGVmaW5lZClcclxuICAgICAgKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICB0aGlzLm1vZHVsZS5kZWJ1Zy5lcnJvcignVW5hYmxlIHRvIG9wZW4gdmlldyAnICsgbmFtZSArICc6ICcsIGVycik7XHJcbiAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgICBlcnJjb2RlOiAnVklFV19NQUxGT1JNRUQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdNYWxmb3JtZWQgVmlldyBEZWNsYXJhdGlvbjogJyArIGVyclxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT05fRVhJU1RBTlQnLFxyXG4gICAgICBtZXNzYWdlOiAnVmlldyBub3QgZm91bmQ6ICcgKyBuYW1lXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogaXNTZWN1cmUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2R1bGUgY2FuIGhhdmUgY29uZmlkZW5jZSB0aGF0IGl0c1xyXG4gKiBjb21tdW5pY2F0aW9uIHdpdGggaXRzIHZpZXcgY2Fubm90IGJlIGludGVyY2VwdGVkIGJ5IGFuIHVudHJ1c3RlZCAzcmQgcGFydHkuXHJcbiAqIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXQgaXRzIG9rYXkgZm9yIHRoZSBydW50aW1lIHRvIGhhdmUgYWNjZXNzIHRvIHRoZVxyXG4gKiBtZXNzYWdlcywgYW5kIGlmIHRoZSBjb250ZXh0IGlzIGEgd2ViIHNlcnZlciBvciBhIGJyb3dzZXIgZXh0ZW5zaW9uIHRoZW5cclxuICogdGhhdCBjb250ZXh0IGlzIHRydXN0ZWQuIEhvd2V2ZXIsIGlmIGEgcHJvdmlkZXIgd2FudHMgdG8gYWxsb3cgdGhlaXIgZS5nLlxyXG4gKiBzb2NpYWwgcHJvdmlkZXIgdG8gYmUgdXNlZCBvbiBhcmJpdHJhcnkgd2Vic2l0ZXMsIHRoaXMgbWVjaGFuaXNtIG1lYW5zIHRoYXRcclxuICogaWYgdGhlIHdlYnNpdGUgdXNlcyBhIHRydXN0ZWQgdmVyc2lvbiBvZiB0aGUgZnJlZWRvbS5qcyBsaWJyYXJ5LCB0aGVuIHRoZVxyXG4gKiBtb2R1bGUgY2FuIGJlIHVzZWQuXHJcbiAqIEBtZXRob2QgaXNTZWN1cmVcclxuICogQHJldHVybnMge0Jvb2xlYW59IGlmIHRoZSBjaGFubmVsIHRvIHRoZSB2aWV3IGlzIHNlY3VyZS5cclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuaXNTZWN1cmUgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XHJcbiAgY29udGludWF0aW9uKGZhbHNlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZW5kIGEgbWVzc2FnZSB0byBhbiBvcGVuIHZpZXcuXHJcbiAqIEBtZXRob2QgcG9zdE1lc3NhZ2VcclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnLCBjb250aW51YXRpb24pIHtcclxuICBpZiAoIXRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT1RfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgcG9zdCBtZXNzYWdlIHRvIHVuaW5pdGlhbGl6ZWQgdmlldy4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5wcm92aWRlci5vbk1lc3NhZ2UodGhpcy5pZCwgbXNnKTtcclxuICBjb250aW51YXRpb24oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBhbiBhY3RpdmUgdmlldy5cclxuICogQG1ldGhvZCBjbG9zZVxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcclxuICBpZiAoIXRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT1RfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgY2xvc2UgdW5pbml0aWFsaXplZCB2aWV3LidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLnByb3ZpZGVyLm9uQ2xvc2UodGhpcy5pZCk7XHJcbiAgZGVsZXRlIHRoaXMuaWQ7XHJcblxyXG4gIGNvbnRpbnVhdGlvbigpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyBhIHdlYiBwYWdlIHRvIHJlZGVmaW5lIGJlaGF2aW9yIGZvciBob3cgdmlld3MgYXJlIHNob3duLlxyXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAqIEBzdGF0aWNcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUGFnZVByb3ZpZGVyIFRoZSBjdXN0b20gdmlldyBiZWhhdmlvci5cclxuICovXHJcbkNvcmVfVmlldy5yZWdpc3RlciA9IGZ1bmN0aW9uIChQYWdlUHJvdmlkZXIpIHtcclxuICB2YXIgcHJvdmlkZXIgPSBQYWdlUHJvdmlkZXIgPyBuZXcgUGFnZVByb3ZpZGVyKCkgOiBDb3JlX1ZpZXcucHJvdmlkZXI7XHJcbiAgZXhwb3J0cy5wcm92aWRlciA9IENvcmVfVmlldy5iaW5kKHRoaXMsIHByb3ZpZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX1ZpZXcuYmluZCh0aGlzLCBDb3JlX1ZpZXcucHJvdmlkZXIpO1xyXG5leHBvcnRzLm5hbWUgPSAnY29yZS52aWV3JztcclxuZXhwb3J0cy5yZWdpc3RlciA9IENvcmVfVmlldy5yZWdpc3RlcjtcclxuZXhwb3J0cy5mbGFncyA9IHtwcm92aWRlcjogdHJ1ZSwgbW9kdWxlOiB0cnVlfTtcclxuIiwiLypnbG9iYWxzIFdlYlNvY2tldCwgQXJyYXlCdWZmZXIsIEJsb2IsIFVpbnQ4QXJyYXksIGNvbnNvbGUgKi9cbi8qanNsaW50IHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cblxudmFyIFdTSGFuZGxlID0gbnVsbDtcbnZhciBub2RlU3R5bGUgPSBmYWxzZTtcblxuLyoqXG4gKiBBIFdlYlNvY2tldCBjb3JlIHByb3ZpZGVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgZm9yIHRoZSBwcm92aWRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2hFdmVudCBGdW5jdGlvbiB0byBkaXNwYXRjaCBldmVudHMuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBSZW1vdGUgVVJMIHRvIGNvbm5lY3Qgd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBTdWJQcm90b2NvbHMgdG8gb3Blbi5cbiAqIEBwYXJhbSB7V2ViU29ja2V0P30gc29ja2V0IEFuIGFsdGVybmF0aXZlIHNvY2tldCBjbGFzcyB0byB1c2UuXG4gKi9cbnZhciBXUyA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQsIHVybCwgcHJvdG9jb2xzLCBzb2NrZXQpIHtcbiAgdmFyIFdTSW1wbGVtZW50YXRpb24gPSBudWxsLFxuICAgIGVycm9yO1xuICB0aGlzLmlzTm9kZSA9IG5vZGVTdHlsZTtcbiAgaWYgKHR5cGVvZiBzb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IHNvY2tldDtcbiAgfSBlbHNlIGlmIChXU0hhbmRsZSAhPT0gbnVsbCkge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBXU0hhbmRsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBXZWJTb2NrZXQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignUGxhdGZvcm0gZG9lcyBub3Qgc3VwcG9ydCBXZWJTb2NrZXQnKTtcbiAgfVxuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRyeSB7XG4gICAgaWYgKHByb3RvY29scykge1xuICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV1NJbXBsZW1lbnRhdGlvbih1cmwsIHByb3RvY29scyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdTSW1wbGVtZW50YXRpb24odXJsKTtcbiAgICB9XG4gICAgdGhpcy53ZWJzb2NrZXQuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvciA9IHt9O1xuICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgIGVycm9yLmVycmNvZGUgPSAnU1lOVEFYJztcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IuZXJyY29kZSA9IGUubmFtZTtcbiAgICB9XG4gICAgZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICBkaXNwYXRjaEV2ZW50KCdvbkVycm9yJywgZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmlzTm9kZSkge1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ29wZW4nLCB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpKTtcbiAgICAvLyBub2RlLmpzIHdlYnNvY2tldCBpbXBsZW1lbnRhdGlvbiBub3QgY29tcGxpYW50XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ2Nsb3NlJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcywge1xuICAgICAgY29kZTogMCxcbiAgICAgIHJlYXNvbjogJ1VOS05PV04nLFxuICAgICAgd2FzQ2xlYW46IHRydWVcbiAgICB9KSk7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHRvU2VuZCA9IGRhdGEudGV4dCB8fCBkYXRhLmJpbmFyeSB8fCBkYXRhLmJ1ZmZlcixcbiAgICBlcnJjb2RlLFxuICAgIG1lc3NhZ2U7XG5cbiAgaWYgKHRvU2VuZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3Igbm9kZS5qcywgd2UgaGF2ZSB0byBkbyB3ZWlyZCBidWZmZXIgc3R1ZmZcbiAgICAgIGlmICh0aGlzLmlzTm9kZSAmJiB0b1NlbmQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKFxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KHRvU2VuZCksXG4gICAgICAgICAgeyBiaW5hcnk6IHRydWUgfSxcbiAgICAgICAgICB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZCh0b1NlbmQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgICAgZXJyY29kZSA9IFwiU1lOVEFYXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJjb2RlID0gXCJJTlZBTElEX1NUQVRFXCI7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJjb2RlID0gXCJCQURfU0VORFwiO1xuICAgIG1lc3NhZ2UgPSBcIk5vIHRleHQsIGJpbmFyeSwgb3IgYnVmZmVyIGRhdGEgZm91bmQuXCI7XG4gIH1cblxuICBpZiAoZXJyY29kZSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6IGVycmNvZGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy53ZWJzb2NrZXQucmVhZHlTdGF0ZSk7XG59O1xuXG5XUy5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbih0aGlzLndlYnNvY2tldC5idWZmZXJlZEFtb3VudCk7XG59O1xuXG5XUy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uLCBjb250aW51YXRpb24pIHtcbiAgdHJ5IHtcbiAgICBpZiAoY29kZSAmJiByZWFzb24pIHtcbiAgICAgIHRoaXMud2Vic29ja2V0LmNsb3NlKGNvZGUsIHJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic29ja2V0LmNsb3NlKCk7XG4gICAgfVxuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGVycm9yQ29kZTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICBlcnJvckNvZGUgPSBcIlNZTlRBWFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvckNvZGUgPSBcIklOVkFMSURfQUNDRVNTXCI7XG4gICAgfVxuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6IGVycm9yQ29kZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZVxuICAgIH0pO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25PcGVuJyk7XG59O1xuXG5XUy5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBmbGFncykge1xuICB2YXIgZGF0YSA9IHt9O1xuICBpZiAodGhpcy5pc05vZGUgJiYgZmxhZ3MgJiYgZmxhZ3MuYmluYXJ5KSB7XG4gICAgZGF0YS5idWZmZXIgPSBuZXcgVWludDhBcnJheShldmVudCkuYnVmZmVyO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNOb2RlKSB7XG4gICAgZGF0YS50ZXh0ID0gZXZlbnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICBkYXRhLmJ1ZmZlciA9IGV2ZW50LmRhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgZGF0YS5iaW5hcnkgPSBldmVudC5kYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEudGV4dCA9IGV2ZW50LmRhdGE7XG4gIH1cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbk1lc3NhZ2UnLCBkYXRhKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIE5vdGhpbmcgdG8gcGFzcyBvblxuICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4ODA0Mjk4LzMwMDUzOVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uRXJyb3InKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25DbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICB7Y29kZTogZXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFzb246IGV2ZW50LnJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICB3YXNDbGVhbjogZXZlbnQud2FzQ2xlYW59KTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBXUztcbmV4cG9ydHMubmFtZSA9ICdjb3JlLndlYnNvY2tldCc7XG5leHBvcnRzLnNldFNvY2tldCA9IGZ1bmN0aW9uIChpbXBsLCBpc05vZGUpIHtcbiAgV1NIYW5kbGUgPSBpbXBsO1xuICBub2RlU3R5bGUgPSBpc05vZGU7XG59O1xuIiwiLypqc2hpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFsICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBYaHJDbGFzcyA9IG51bGw7XG5cbnZhciBYaHJQcm92aWRlciA9IGZ1bmN0aW9uKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHR5cGVvZiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIFhockNsYXNzID09PSBudWxsKSB7IC8vIGZyZWVkb21cbiAgICBYaHJDbGFzcyA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIFhockNsYXNzID09PSBudWxsKSB7IC8vIGZyZWVkb20tZm9yLWZpcmVmb3hcbiAgICBYaHJDbGFzcyA9IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2UgaWYgKFhockNsYXNzID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlBsYXRmb3JtIGRvZXMgbm90IHN1cHBvcnQgWE1MSHR0cFJlcXVlc3RcIik7XG4gIH1cblxuICB0aGlzLl9kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdGhpcy5feGhyID0gbmV3IFhockNsYXNzKCk7XG5cbiAgc2V0VGltZW91dChjYXAucHJvdmlkZXIub25DbG9zZS5iaW5kKFxuICAgIGNhcC5wcm92aWRlcixcbiAgICB0aGlzLFxuICAgIHRoaXMuYWJvcnQuYmluZCh0aGlzKVxuICApLCAwKTtcblxuICB0aGlzLl9ldmVudHMgPSBbXG4gICAgXCJsb2Fkc3RhcnRcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJhYm9ydFwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImxvYWRcIixcbiAgICBcInRpbWVvdXRcIixcbiAgICBcImxvYWRlbmRcIixcbiAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIlxuICBdO1xuICB0aGlzLl9zZXR1cExpc3RlbmVycygpO1xuXG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsLCBhc3luYywgdXNlciwgcGFzc3dvcmQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2YgYXN5bmMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXN5bmMgIT09IHRydWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogXCJJbnZhbGlkQWNjZXNzRXJyb3JcIixcbiAgICAgIG1lc3NhZ2U6IFwiYXN5bmMgc2hvdWxkIGFsd2F5cyBiZSBzZXQgdG8gdHJ1ZVwiXG4gICAgfSk7XG4gIH1cblxuICAvLyBGb3JjZSBhc3luYyB0byBiZSB0cnVlLiB1bmRlZmluZWQgY2FuIGxlYWQgdG8gYXN5bmM9ZmFsc2UgaW4gQ2hyb21lIHBhY2thZ2VkIGFwcHNcbiAgdGhpcy5feGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUsIHVzZXIsIHBhc3N3b3JkKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgIHRoaXMuX3hoci5zZW5kKCk7XG4gIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInN0cmluZ1wiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuc3RyaW5nKTtcbiAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiYnVmZmVyXCIpKSB7XG4gICAgdGhpcy5feGhyLnNlbmQoZGF0YS5idWZmZXIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3hoci5zZW5kKCk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIuYWJvcnQoKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyLCB2YWx1ZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCB2YWx1ZSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5vdmVycmlkZU1pbWVUeXBlID0gZnVuY3Rpb24obWltZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLm92ZXJyaWRlTWltZVR5cGUobWltZSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZWFkeVN0YXRlKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHRoaXMuX3hoci5yZXNwb25zZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUobnVsbCk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJ0ZXh0XCIgfHwgdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJcIikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoeyBzdHJpbmc6IHRoaXMuX3hoci5yZXNwb25zZSB9KTtcbiAgfSBlbHNlIGlmICh0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcImFycmF5YnVmZmVyXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgYnVmZmVyOiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJqc29uXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgb2JqZWN0OiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3QoXCJjb3JlLnhociBjYW5ub3QgZGV0ZXJtaW5lIHR5cGUgb2YgcmVzcG9uc2VcIik7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZXNwb25zZVRleHQpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVVJMID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZXNwb25zZVVSTCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VUeXBlID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZXNwb25zZVR5cGUpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSB0eXBlO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5zdGF0dXMpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFN0YXR1c1RleHQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnN0YXR1c1RleHQpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnRpbWVvdXQpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFRpbWVvdXQgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRXaXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLndpdGhDcmVkZW50aWFscyk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0V2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24od2MpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMgPSB3YztcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLl9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgLy8gRG93bmxvYWQgZXZlbnRzXG4gIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB0aGlzLl94aHIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMsIGV2ZW50TmFtZSksIGZhbHNlKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICAvLyBVcGxvYWQgZXZlbnRzXG4gIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB0aGlzLl94aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KFwib251cGxvYWRcIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzLCBldmVudE5hbWUpLCBmYWxzZSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUueGhyXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gWGhyUHJvdmlkZXI7XG5leHBvcnRzLnN0eWxlID0gXCJwcm92aWRlUHJvbWlzZXNcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7IHByb3ZpZGVyOiB0cnVlIH07XG5leHBvcnRzLnNldEltcGwgPSBmdW5jdGlvbihpbXBsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBYaHJDbGFzcyA9IGltcGw7XG59O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgb0F1dGhSZWRpcmVjdElkID0gJ2ZyZWVkb20ub2F1dGgucmVkaXJlY3QuaGFuZGxlcic7XG5cbnZhciBsb2FkZWRPblN0YXJ0dXAgPSBmYWxzZTtcblxudmFyIFRJTUVPVVQgPSA1MDAwO1xuXG4vKipcbiAqIElmIHRoZXJlIGlzIHJlZGlyZWN0aW9uIGJhY2sgdG8gdGhlIHBhZ2UsIGFuZCBvQXV0aFJlZGlyZWN0SUQgaXMgc2V0LFxuICogdGhlbiByZXBvcnQgdGhlIGF1dGggYW5kIGNsb3NlIHRoZSB3aW5kb3cuXG4gKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uICYmXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgbG9hZGVkT25TdGFydHVwID0gdHJ1ZTtcbiAgfSwgdHJ1ZSk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2Yob0F1dGhSZWRpcmVjdElkKSA+IDApIHtcbiAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhICdzdG9yYWdlJyBldmVudCBvbiB0aGUgd2luZG93LiBTZWUgc3RvcmFnZUxpc3RlbmVyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG9BdXRoUmVkaXJlY3RJZCwgbmV3IERhdGUoKSk7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH1cbn1cblxudmFyIExvY2FsUGFnZUF1dGggPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59O1xuXG4vKipcbiAqIEluZGljYXRlIHRoZSBpbnRlbnRpb24gdG8gaW5pdGlhdGUgYW4gb0F1dGggZmxvdywgYWxsb3dpbmcgYW4gYXBwcm9wcmlhdGVcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlZ2luIG1vbml0b3JpbmcgZm9yIHJlZGlyZWN0aW9uLlxuICpcbiAqIEBtZXRob2QgaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVkaXJlY3RVUklzIC0gb0F1dGggcmVkaXJlY3Rpb24gVVJJcyByZWdpc3RlcmVkIHdpdGggdGhlXG4gKiAgICAgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIHZhbHVlIG9mIHNjaGVtYToge3tyZWRpcmVjdDpTdHJpbmcsIHN0YXRlOlN0cmluZ319XG4gKiAgICB3aGVyZSAncmVkaXJlY3QnIGlzIHRoZSBjaG9zZW4gcmVkaXJlY3QgVVJJXG4gKiAgICBhbmQgJ3N0YXRlJyBpcyB0aGUgc3RhdGUgdG8gcGFzcyB0byB0aGUgVVJJIG9uIGNvbXBsZXRpb24gb2Ygb0F1dGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2FuIGhhbmRsZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbkxvY2FsUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiBsb2FkZWRPblN0YXJ0dXApIHtcbiAgICB2YXIgaGVyZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChyZWRpcmVjdFVSSXMuaW5kZXhPZihoZXJlKSA+IC0xKSB7XG4gICAgICBjb250aW51YXRpb24oe1xuICAgICAgICByZWRpcmVjdDogaGVyZSxcbiAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBvQXV0aCBjbGllbnQtc2lkZSBmbG93IC0gbGF1bmNoIHRoZSBwcm92aWRlZCBVUkxcbiAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhdGVPQXV0aCB3aXRoIHRoZSByZXR1cm5lZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGxhdW5jaEF1dGhGbG93XG4gKiBAcGFyYW0ge1N0cmluZ30gYXV0aFVybCAtIFRoZSBVUkwgdGhhdCBpbml0aWF0ZXMgdGhlIGF1dGggZmxvdy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIC0gVGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJhY3RpdmUgLSBXaGV0aGVyIHRvIGxhdW5jaCBhbiBpbnRlcmFjdGl2ZSBmbG93XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSByZXNwb25zZSBVcmwgY29udGFpbmluZyB0aGUgYWNjZXNzIHRva2VuXG4gKi9cbkxvY2FsUGFnZUF1dGgucHJvdG90eXBlLmxhdW5jaEF1dGhGbG93ID0gZnVuY3Rpb24oYXV0aFVybCwgc3RhdGVPYmosIGludGVyYWN0aXZlLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBsaXN0ZW5lciA9IHRoaXMuc3RvcmFnZUxpc3RlbmVyLmJpbmQodGhpcywgY29udGludWF0aW9uLCBzdGF0ZU9iaik7XG4gIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGxpc3RlbmVyO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gU3RhcnQgJ2VyIHVwXG4gIHdpbmRvdy5vcGVuKGF1dGhVcmwpO1xuXG4gIGlmIChpbnRlcmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSkge1xuICAgICAgICAvLyBMaXN0ZW5lciBoYXMgbm90IGJlZW4gZGVsZXRlZCwgaW5kaWNhdGluZyBvYXV0aCBoYXMgY29tcGxldGVkLlxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwic3RvcmFnZVwiLCB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0sIGZhbHNlKTtcbiAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXTtcbiAgICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgJ0Vycm9yIGxhdW5jaGluZyBhdXRoIGZsb3cnKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyksIFRJTUVPVVQpO1xuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHN0b3JhZ2UgZXZlbnRzLCB3aGljaCByZWxheXMgdGhlbSB0byB3YWl0aW5nIGNsaWVudHMuXG4gKiBGb3IgdGhlIHNjaGVtYSBvZiB0aGUgc3RvcmFnZSBtc2csIHNlZTpcbiAqIGh0dHA6Ly90dXRvcmlhbHMuamVua292LmNvbS9odG1sNS9sb2NhbC1zdG9yYWdlLmh0bWwjc3RvcmFnZS1ldmVudHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBmdW5jdGlvbiB0byBjYWxsIHdpdGggcmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiB0aGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIHN0b3JhZ2UgZXZlbnRcbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUuc3RvcmFnZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGludWF0aW9uLCBzdGF0ZU9iaiwgbXNnKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKG1zZy51cmwuaW5kZXhPZihzdGF0ZU9iai5zdGF0ZSkgPiAtMSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0sIGZhbHNlKTtcbiAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdO1xuICAgIGNvbnRpbnVhdGlvbihtc2cudXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiB3ZSBoYXZlIGEgbG9jYWwgZG9tYWluLCBhbmQgZnJlZWRvbS5qcyBpcyBsb2FkZWQgYXQgc3RhcnR1cCwgd2UgY2FuIHVzZVxuICogdGhlIGxvY2FsIHBhZ2UgYXMgYSByZWRpcmVjdCBVUkkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gTG9jYWxQYWdlQXV0aDtcbiIsIi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG52YXIgVElNRU9VVCA9IDUwMDA7XG5cbmZ1bmN0aW9uIFJlbW90ZVBhZ2VBdXRoKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNhbiBoYW5kbGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5SZW1vdGVQYWdlQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5kb2N1bWVudCkge1xuICAgIGZvciAodmFyIGk9MDsgaTxyZWRpcmVjdFVSSXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSByZXN0cmljdGlvbiBvbiBVUkwgcGF0dGVybiBtYXRjaC5cbiAgICAgIGlmICgocmVkaXJlY3RVUklzW2ldLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PT0gMCB8fFxuICAgICAgICAgIHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwczovLycpID09PSAwKSAmJlxuICAgICAgICAgIHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdvYXV0aC1yZWxheS5odG1sJykgPiAwKSB7XG4gICAgICAgIGNvbnRpbnVhdGlvbih7XG4gICAgICAgICAgcmVkaXJlY3Q6IHJlZGlyZWN0VVJJc1tpXSxcbiAgICAgICAgICBzdGF0ZTogb0F1dGhSZWRpcmVjdElkICsgTWF0aC5yYW5kb20oKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVyYWN0aXZlIC0gV2hldGhlciB0byBsYXVuY2ggYW4gaW50ZXJhY3RpdmUgZmxvd1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5SZW1vdGVQYWdlQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgaW50ZXJhY3RpdmUsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGZyYW1lID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICBmcmFtZS5zcmMgPSBzdGF0ZU9iai5yZWRpcmVjdDtcbiAgZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBnbG9iYWwuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdID0gY29udGludWF0aW9uO1xuICAgIHdpbmRvdy5vcGVuKGF1dGhVcmwpO1xuXG4gICAgZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShzdGF0ZU9iai5zdGF0ZSwgJyonKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB2YXIgaGFzQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZnJhbWUsIG1zZykge1xuICAgIGlmIChtc2cuZGF0YSAmJiBtc2cuZGF0YS5rZXkgJiYgbXNnLmRhdGEudXJsICYmIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV0pIHtcbiAgICAgIGhhc0NyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV0obXNnLmRhdGEudXJsKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmcmFtZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzLCBmcmFtZSksIGZhbHNlKTtcblxuICBpZiAoaW50ZXJhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChoYXNDcmVkZW50aWFscyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgJ0Vycm9yIGxhdW5jaGluZyBhdXRoIGZsb3cnKTtcbiAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZyYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSwgVElNRU9VVCk7XG4gIH1cbn07XG5cbi8qKlxuICogSWYgd2UgaGF2ZSBhIGxvY2FsIGRvbWFpbiwgYW5kIGZyZWVkb20uanMgaXMgbG9hZGVkIGF0IHN0YXJ0dXAsIHdlIGNhbiB1c2VcbiAqIHRoZSBsb2NhbCBwYWdlIGFzIGEgcmVkaXJlY3QgVVJJLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFJlbW90ZVBhZ2VBdXRoO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG4vKipcbiAqIFRoZSBBUEkgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgcmVxdWVzdGVkIEFQSXMsXG4gKiBhbmQgcHJvdmlkZXMgYSBicmlkZ2UgZm9yIGNvcmUgQVBJcyB0byBhY3QgbGlrZSBub3JtYWwgQVBJcy5cbiAqIEBDbGFzcyBBUElcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEFwaSA9IGZ1bmN0aW9uKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5hcGlzID0ge307XG4gIHRoaXMucHJvdmlkZXJzID0ge307XG4gIHRoaXMud2FpdGVycyA9IHt9O1xufTtcblxuLyoqXG4gKiBHZXQgYW4gQVBJLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSBuYW1lIHRvIGdldC5cbiAqIEByZXR1cm5zIHt7bmFtZTpTdHJpbmcsIGRlZmluaXRpb246QVBJfX0gVGhlIEFQSSBpZiByZWdpc3RlcmVkLlxuICovXG5BcGkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGFwaSkge1xuICBpZiAoIXRoaXMuYXBpc1thcGldKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogYXBpLFxuICAgIGRlZmluaXRpb246IHRoaXMuYXBpc1thcGldXG4gIH07XG59O1xuXG4vKipcbiAqIFNldCBhbiBBUEkgdG8gYSBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBBUEkgbmFtZS5cbiAqIEBwYXJhbSB7QVBJfSBkZWZpbml0aW9uIFRoZSBKU09OIG9iamVjdCBkZWZpbmluZyB0aGUgQVBJLlxuICovXG5BcGkucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIGRlZmluaXRpb24pIHtcbiAgdGhpcy5hcGlzW25hbWVdID0gZGVmaW5pdGlvbjtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjb3JlIEFQSSBwcm92aWRlci5cbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBBUEkgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnN0cnVjdG9yIHRoZSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm92aWRlciBmb3IgdGhlIEFQSS5cbiAqIEBwYXJhbSB7U3RyaW5nP30gc3R5bGUgVGhlIHN0eWxlIHRoZSBwcm92aWRlciBpcyB3cml0dGVuIGluLiBWYWxpZCBzdHlsZXNcbiAqICAgYXJlIGRvY3VtZW50ZWQgaW4gZmRvbS5wb3J0LlByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UuIERlZmF1bHRzIHRvXG4gKiAgIHByb3ZpZGVBc3luY2hyb25vdXNcbiAqIEBwYXJhbSB7T2JqZWN0P30gZmxhZ3MgUHJlZml4ZWQgYXJndW1lbnRzIG5lZWRlZCBieSB0aGUgY29yZSBwcm92aWRlci5cbiAqICAgdmFsaWQga2V5cyBhcmUgJ21vZHVsZScsICdwcm92aWRlcicsIGFuZCAnY29uZmlnJy5cbiAqL1xuQXBpLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIGNvbnN0cnVjdG9yLCBzdHlsZSwgZmxhZ3MpIHtcbiAgdmFyIGksXG4gICAgYXJncztcblxuICB0aGlzLnByb3ZpZGVyc1tuYW1lXSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogY29uc3RydWN0b3IsXG4gICAgc3R5bGU6IHN0eWxlIHx8ICdwcm92aWRlQXN5bmNocm9ub3VzJyxcbiAgICBmbGFnczogZmxhZ3MgfHwge31cbiAgfTtcblxuICBpZiAodGhpcy53YWl0ZXJzW25hbWVdKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMud2FpdGVyc1tuYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYXJncyA9IHt9O1xuICAgICAgaWYgKGZsYWdzLm1vZHVsZSkge1xuICAgICAgICBhcmdzLm1vZHVsZSA9IHRoaXMud2FpdGVyc1tuYW1lXVtpXS5mcm9tO1xuICAgICAgfVxuICAgICAgaWYgKGZsYWdzLmNvbmZpZykge1xuICAgICAgICBhcmdzLmNvbmZpZyA9IHRoaXMud2FpdGVyc1tuYW1lXVtpXS5mcm9tLmNvbmZpZztcbiAgICAgIH1cbiAgICAgIHRoaXMud2FpdGVyc1tuYW1lXVtpXS5yZXNvbHZlKHtcbiAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgaW5zdDogY29uc3RydWN0b3IuYmluZCh7fSwgYXJncylcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy53YWl0ZXJzW25hbWVdO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBhIGNvcmUgQVBJIGNvbm5lY3RlZCB0byBhIGdpdmVuIEZyZWVET00gbW9kdWxlLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgQVBJIHRvIHJldHJpZXZlLlxuICogQHBhcmFtIHtNb2R1bGV9IGZyb20gVGhlIGluc3RhbnRpYXRpbmcgQXBwLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBvZiBhIGZkb20uQXBwIGxvb2stYWxpa2UgKGFuZCBhcmd1bWVudCBvYmplY3QpLFxuICogbWF0Y2hpbmcgYSBsb2NhbCBBUEkgZGVmaW5pdGlvbi5cbiAqL1xuQXBpLnByb3RvdHlwZS5nZXRDb3JlID0gZnVuY3Rpb24obmFtZSwgZnJvbSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuYXBpc1tuYW1lXSkge1xuICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdKSB7XG4gICAgICAgIHZhciBhcmdzID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncy5tb2R1bGUpIHtcbiAgICAgICAgICBhcmdzLm1vZHVsZSA9IGZyb207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLmNvbmZpZykge1xuICAgICAgICAgIGFyZ3MuY29uZmlnID0gZnJvbS5jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICBpbnN0OiB0aGlzLnByb3ZpZGVyc1tuYW1lXS5jb25zdHJ1Y3Rvci5iaW5kKHt9LCBhcmdzKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0ZXJzW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy53YWl0ZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YWl0ZXJzW25hbWVdLnB1c2goe1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgZnJvbTogZnJvbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdBcGkuZ2V0Q29yZSBhc2tlZCBmb3IgdW5rbm93biBjb3JlOiAnICsgbmFtZSk7XG4gICAgICByZWplY3QobnVsbCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDb25maWd1cmUgYSB7UHJvdmlkZXJ9IHRvIHByb3ZpZGUgYSBuYW1lZCBjb3JlIGFwaSBvbiBiZWhhbGYgb2YgYVxuICogZ2l2ZW4gcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm92aWRlclxuICogQHBhcmFtIHtQcm92aWRlcn0gcHJvdmlkZXIgVGhlIHByb3ZpZGVyIHRoYXQgd2lsbCBwcm92aWRlIHRoZSBuYW1lZCBhcGlcbiAqIEBwYXJhbSB7TW9kdWxlfSBmcm9tIFRoZSBtb2R1bGUgcmVxdWVzdGluZyB0aGUgY29yZSBwcm92aWRlci5cbiAqL1xuQXBpLnByb3RvdHlwZS5wcm92aWRlQ29yZSA9IGZ1bmN0aW9uIChuYW1lLCBwcm92aWRlciwgZnJvbSkge1xuICByZXR1cm4gdGhpcy5nZXRDb3JlKG5hbWUsIGZyb20pLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICB2YXIgZmxhZ3MgPSB0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncyxcbiAgICAgIGlmYWNlID0gcHJvdmlkZXIuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICBpZiAoZmxhZ3MucHJvdmlkZXIpIHtcbiAgICAgIGNvcmUuYXJncy5wcm92aWRlciA9IGlmYWNlO1xuICAgIH1cbiAgICBpZmFjZSgpW3RoaXMucHJvdmlkZXJzW25hbWVdLnN0eWxlXShjb3JlLmluc3QpO1xuICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdDb3VsZCBub3QgcHJvdmlkZSBjb3JlOiAnLCBlcnIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTaHV0ZG93biB0aGUgQVBJIHJlZ2lzdHJ5LCBhbmQgcmVqZWN0IGFueSBwZW5kaW5nIHdhaXRlcnMuXG4gKi9cbkFwaS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3AsXG4gICAgZG9SZWplY3QgPSBmdW5jdGlvbiAod2FpdGVyKSB7XG4gICAgICB3YWl0ZXIucmVqZWN0KCk7XG4gICAgfTtcbiAgZm9yIChwcm9wIGluIHRoaXMud2FpdGVycykge1xuICAgIGlmICh0aGlzLndhaXRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHRoaXMud2FpdGVyc1twcm9wXS5mb3JFYWNoKGRvUmVqZWN0KTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlIHRoaXMud2FpdGVycztcbn07XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgYXBpcyBtb2R1bGUgYW5kIHByb3ZpZGVyIHJlZ2lzdHJ5LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEFwaTtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xuXG52YXIgQnVuZGxlID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMuaW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4uL2Rpc3QvYnVuZGxlLmNvbXBpbGVkJyk7XG59O1xuXG4vKipcbiAqIFBvcHVsYXRlIGFuIEFQSSByZWdpc3RyeSB3aXRoIHByb3ZpZGVkIHByb3ZpZGVycywgYW5kIHdpdGgga25vd24gQVBJXG4gKiBkZWZpbml0aW9ucy5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7e25hbWU6IHN0cmluZywgcHJvdmlkZXI6IEZ1bmN0aW9uLCBzdHlsZT86IHN0cmluZ31bXX0gcHJvdmlkZXJzXG4gKiAgIFRoZSBjb3JlIHByb3ZpZGVycyBtYWRlIGF2YWlsYWJsZSB0byB0aGlzIGZyZWVkb20uanMgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge0FwaX0gcmVnaXN0cnkgVGhlIEFQSSByZWdpc3RyeSB0byBwb3B1bGF0ZS5cbiAqL1xuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uIChwcm92aWRlcnMsIHJlZ2lzdHJ5KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGJ1bmRsZSA9IG5ldyBCdW5kbGUoKTtcbiAgYnVuZGxlLmludGVyZmFjZXMuZm9yRWFjaChmdW5jdGlvbiAoYXBpKSB7XG4gICAgaWYgKGFwaSAmJiBhcGkubmFtZSAmJiBhcGkuYXBpKSB7XG4gICAgICByZWdpc3RyeS5zZXQoYXBpLm5hbWUsIGFwaS5hcGkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgaWYgKHByb3ZpZGVyLm5hbWUpIHtcbiAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyKHByb3ZpZGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuZmxhZ3MpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLypnbG9iYWxzIEJsb2IsIEFycmF5QnVmZmVyLCBEYXRhVmlldyAqL1xuLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgZm9yIGEgdXNlci1hY2Nlc3NhYmxlIGFwaS5cbiAqIEBjbGFzcyBDb25zdW1lclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gaW50ZXJmYWNlQ2xzIFRoZSBhcGkgaW50ZXJmYWNlIGV4cG9zZWQgYnkgdGhpcyBjb25zdW1lci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKGludGVyZmFjZUNscywgZGVidWcpIHtcbiAgdGhpcy5pZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICB0aGlzLmludGVyZmFjZUNscyA9IGludGVyZmFjZUNscztcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcblxuICB0aGlzLmlmYWNlcyA9IHt9O1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5lcnJvckhhbmRsZXJzID0ge307XG4gIHRoaXMuZW1pdHMgPSB7fTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBpbmNvbWluZyBtZXNzYWdlcyBmb3IgdGhpcyBjb25zdW1lci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UucmV2ZXJzZSkge1xuICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRoaXMuZW1pdENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmIG1lc3NhZ2UudG8pIHtcbiAgICAgIHRoaXMudGVhcmRvd24obWVzc2FnZS50byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHRoaXMuZXJyb3IobWVzc2FnZS50bywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudG8pIHtcbiAgICAgIGlmICh0aGlzLmVtaXRzW21lc3NhZ2UudG9dKSB7XG4gICAgICAgIHRoaXMuZW1pdHNbbWVzc2FnZS50b10oJ21lc3NhZ2UnLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdDb3VsZCBub3QgZGVsaXZlciBtZXNzYWdlLCBubyBzdWNoIGludGVyZmFjZTogJyArIG1lc3NhZ2UudG8pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbXNnID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmVtaXRzLCBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICAgICAgaWZhY2UoJ21lc3NhZ2UnLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnN1bWVyLkludGVyZmFjZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb25zdW1lci5cbiAqIEFuIGludGVyZmFjZSBpcyByZXR1cm5lZCwgd2hpY2ggaXMgc3VwcGxpZWQgd2l0aCBpbXBvcnRhbnQgY29udHJvbCBvZiB0aGVcbiAqIGFwaSB2aWEgY29uc3RydWN0b3IgYXJndW1lbnRzOiAoYm91bmQgYmVsb3cgaW4gZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IpXG4gKlxuICogb25Nc2c6IGZ1bmN0aW9uKGJpbmRlcikgc2V0cyB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG1lc3NhZ2VzIGZvciB0aGlzXG4gKiAgICBpbnRlcmZhY2UgYXJyaXZlIG9uIHRoZSBjaGFubmVsLFxuICogZW1pdDogZnVuY3Rpb24obXNnKSBhbGxvd3MgdGhpcyBpbnRlcmZhY2UgdG8gZW1pdCBtZXNzYWdlcyxcbiAqIGlkOiBzdHJpbmcgaXMgdGhlIElkZW50aWZpZXIgZm9yIHRoaXMgaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIElmYWNlID0gdGhpcy5nZXRJbnRlcmZhY2VDb25zdHJ1Y3RvcigpLFxuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBJZmFjZSA9IElmYWNlLmJpbmQuYXBwbHkoSWZhY2UsIFtJZmFjZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuICByZXR1cm4gbmV3IElmYWNlKCk7XG59O1xuXG4vKipcbiAqIEF0dGFjaCBhbiAnb25FdmVudCcgbGlzdGVuZXIgdG8gYW4gaW50ZXJmYWNlLCBhbGxvd2luZyBleHRlcm5hbCBjb25zdW1lcnNcbiAqIHRvIGVpdGhlciBsaXN0ZW4gdG8gY2hhbm5lbCBzdGF0ZSwgb3IgcmVnaXN0ZXIgY2FsbGJhY2tzIG9uIGxpZmV0aW1lIGV2ZW50c1xuICogb2YgaW5kaXZpZHVhbCBpbnN0YW5jZXMgb2YgdGhlIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0TGlzdGVuZXJcbiAqIEBwYXJtYSB7U3RyaW5nfSBuYW1lIFRoZSBldmVudCB0byBsaXN0ZW4gdG8uXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGluc3RhbmNlLCBoYW5kbGVyKSB7XG4gICAgLy8gTGlzdGVuIHRvIHRoZSBjaGFubmVsIGRpcmVjdGx5LlxuICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uY2UobmFtZSwgaW5zdGFuY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBhIHNwZWNpZmljIGluc3RhbmNlLlxuICAgIHZhciBoYW5kbGVycyA9IG5hbWUgKyAnSGFuZGxlcnMnO1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICBpZiAoY2FuZGlkYXRlID09PSBpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpc1toYW5kbGVyc11baWRdKSB7XG4gICAgICAgICAgdGhpc1toYW5kbGVyc11baWRdLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1toYW5kbGVyc11baWRdID0gW2hhbmRsZXJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgaW50ZXJmYWNlcyBmcm9tIHRoaXMgYXBpIGNvbnN1bWVyXG4gKiBmcm9tIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlLmFwcGx5KHAsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgICB9XG4gIH0uYmluZCh7fSwgdGhpcyk7XG5cbiAgZnVuYy5jbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSkge1xuICAgIGlmIChpZmFjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICB0aGlzLnRlYXJkb3duKGlkKTtcbiAgICAgICAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZ1bmMub25DbG9zZSA9IHRoaXMuZ2V0TGlzdGVuZXIoJ2Nsb3NlJyk7XG4gIGZ1bmMub25FcnJvciA9IHRoaXMuZ2V0TGlzdGVuZXIoJ2Vycm9yJyk7XG5cbiAgcmV0dXJuIGZ1bmM7XG59O1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYm91bmQgY2xhc3MgZm9yIGNyZWF0aW5nIGEgY29uc3VtZXIuSW50ZXJmYWNlIGFzc29jaWF0ZWRcbiAqIHdpdGggdGhpcyBhcGkuIFRoaXMgcGFydGlhbCBsZXZlbCBvZiBjb25zdHJ1Y3Rpb24gY2FuIGJlIHVzZWRcbiAqIHRvIGFsbG93IHRoZSBjb25zdW1lciB0byBiZSB1c2VkIGFzIGEgcHJvdmlkZXIgZm9yIGFub3RoZXIgQVBJLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VDb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldEludGVyZmFjZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgcmV0dXJuIHRoaXMuaW50ZXJmYWNlQ2xzLmJpbmQoXG4gICAge30sXG4gICAgZnVuY3Rpb24gKGlkLCBvYmosIGJpbmRlcikge1xuICAgICAgdGhpcy5pZmFjZXNbaWRdID0gb2JqO1xuICAgICAgdGhpcy5lbWl0c1tpZF0gPSBiaW5kZXI7XG4gICAgfS5iaW5kKHRoaXMsIGlkKSxcbiAgICB0aGlzLmRvRW1pdC5iaW5kKHRoaXMsIGlkKSxcbiAgICB0aGlzLmRlYnVnXG4gICk7XG59O1xuXG4vKipcbiAqIEVtaXQgYSBtZXNzYWdlIG9uIHRoZSBjaGFubmVsIG9uY2Ugc2V0dXAgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIGRvRW1pdFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0byBUaGUgSUQgb2YgdGhlIGZsb3cgc2VuZGluZyB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgVGhlIG1lc3NhZ2UgdG8gZW1pdFxuICogQHBhcmFtIHtCb29sZWFufSBhbGwgU2VuZCBtZXNzYWdlIHRvIGFsbCByZWNpcGllbnRzLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZG9FbWl0ID0gZnVuY3Rpb24gKHRvLCBtc2csIGFsbCkge1xuICBpZiAoYWxsKSB7XG4gICAgdG8gPSBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7dG86IHRvLCB0eXBlOiAnbWVzc2FnZScsIG1lc3NhZ2U6IG1zZ30pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLmRvRW1pdC5iaW5kKHRoaXMsIHRvLCBtc2cpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUZWFyZG93biBhIHNpbmdsZSBpbnRlcmZhY2Ugb2YgdGhpcyBhcGkuXG4gKiBAbWV0aG9kIHRlYXJkb3duXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnRlcmZhY2UgdG8gdGVhciBkb3duLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKHRoaXMuZW1pdHNbaWRdKSB7XG4gICAgdGhpcy5lbWl0c1tpZF0oJ2Nsb3NlJyk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuZW1pdHNbaWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jbG9zZUhhbmRsZXJzW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AoKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgdGhpcy5pZmFjZXNbaWRdO1xuICBkZWxldGUgdGhpcy5jbG9zZUhhbmRsZXJzW2lkXTtcbiAgZGVsZXRlIHRoaXMuZXJyb3JIYW5kbGVyc1tpZF07XG59O1xuXG4vKipcbiAqIEhhbmRsZSBhIG1lc3NhZ2UgZXJyb3IgcmVwb3J0ZWQgdG8gdGhpcyBhcGkuXG4gKiBAbWV0aG9kIGVycm9yXG4gKiBAcGFyYW0ge1N0cmluZz99IGlkIFRoZSBpZCBvZiB0aGUgaW50ZXJmYWNlIHdoZXJlIHRoZSBlcnJvciBvY2N1cmVkLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugd2hpY2ggZmFpbGVkLCBpZiByZWxldmFudC5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGlkLCBtZXNzYWdlKSB7XG4gIGlmIChpZCAmJiB0aGlzLmVycm9ySGFuZGxlcnNbaWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmVycm9ySGFuZGxlcnNbaWRdLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghaWQpIHtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbWVzc2FnZSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDbG9zZSAvIHRlYXJkb3duIHRoZSBmbG93IHRoaXMgYXBpIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGRvQ2xvc2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdDaGFubmVsIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICB9XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmVtaXRzLCBmdW5jdGlvbiAoZW1pdCwgaWQpIHtcbiAgICB0aGlzLnRlYXJkb3duKGlkKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIHRoaXMub2ZmKCk7XG5cbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICByZXR1cm4gXCJbQ29uc3VtZXIgXCIgKyB0aGlzLmVtaXRDaGFubmVsICsgXCJdXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiW3VuYm91bmQgQ29uc3VtZXJdXCI7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBuZXh0IElEIGZvciBhbiBhcGkgY2hhbm5lbC5cbiAqIEBtZXRob2QgbmV4dElkXG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5uZXh0SWQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghQ29uc3VtZXIuaWQpIHtcbiAgICBDb25zdW1lci5pZCA9IDE7XG4gIH1cbiAgcmV0dXJuIChDb25zdW1lci5pZCArPSAxKTtcbn07XG5cbi8qKlxuICogQ29udmVydCBhIHN0cnVjdHVyZWQgZGF0YSBzdHJ1Y3R1cmUgaW50byBhIG1lc3NhZ2Ugc3RyZWFtIGNvbmZvcm1pbmcgdG9cbiAqIGEgdGVtcGxhdGUgYW5kIGFuIGFycmF5IG9mIGJpbmFyeSBkYXRhIGVsZW1lbnRzLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBtZXNzYWdlVG9Qb3J0YWJsZVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIGluc3RhbmNlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSB0byBjb25mcm9tXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHt7dGV4dDogT2JqZWN0LCBiaW5hcnk6IEFycmF5fX0gU2VwYXJhdGVkIGRhdGEgc3RyZWFtcy5cbiAqL1xuQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHZhbHVlLCBkZWJ1Zykge1xuICB2YXIgZXh0ZXJuYWxzID0gW10sXG4gICAgbWVzc2FnZSA9IENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGUsIHZhbHVlLCBleHRlcm5hbHMsIHRydWUsIGRlYnVnKTtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGJpbmFyeTogZXh0ZXJuYWxzXG4gIH07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgU3RydWN0dXJlZCBEYXRhIHN0cmVhbXMgaW50byBhIGRhdGEgc3RydWN0dXJlIGNvbmZvcm1pbmcgdG8gYVxuICogdGVtcGxhdGUuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIHBvcnRhYmxlVG9NZXNzYWdlXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7e3RleHQ6IE9iamVjdCwgYmluYXJ5OiBBcnJheX19IHN0cmVhbXMgVGhlIHN0cmVhbXMgdG8gY29uZm9ybVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGF0YSBzdHJ1Y3R1cmUgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlLlxuICovXG5Db25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgc3RyZWFtcywgZGVidWcpIHtcbiAgcmV0dXJuIENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGUsIHN0cmVhbXMudGV4dCwgc3RyZWFtcy5iaW5hcnksIGZhbHNlLCBkZWJ1Zyk7XG59O1xuXG4vKipcbiAqIEZvcmNlIGEgY29sbGVjdGlvbiBvZiB2YWx1ZXMgdG8gbG9vayBsaWtlIHRoZSB0eXBlcyBhbmQgbGVuZ3RoIG9mIGFuIEFQSVxuICogdGVtcGxhdGUuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIGNvbmZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb20gVGhlIHZhbHVlIHRvIGNvbmZvcm1cbiAqIEBwYXJhbSB7QXJyYXl9IGV4dGVybmFscyBMaXN0aW5nIG9mIGJpbmFyeSBlbGVtZW50cyBpbiB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gV2hldGhlciB0byB0byBzZXBhcmF0ZSBvciBjb21iaW5lIHN0cmVhbXMuXG4gKiBAYXBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICovXG5Db25zdW1lci5jb25mb3JtID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBmcm9tLCBleHRlcm5hbHMsIHNlcGFyYXRlLCBkZWJ1Zykge1xuICAvKiBqc2hpbnQgLVcwODYgKi9cbiAgaWYgKHR5cGVvZiAoZnJvbSkgPT09ICdmdW5jdGlvbicgJiYgdGVtcGxhdGUgIT09ICdwcm94eScpIHtcbiAgICAvL2Zyb20gPSB1bmRlZmluZWQ7XG4gICAgLy90aHJvdyBcIlRyeWluZyB0byBjb25mb3JtIGEgZnVuY3Rpb25cIjtcbiAgICBkZWJ1Zy5lcnJvcihcIk1lc3NhZ2UgZGlzY2FyZGVkIGFzIGZ1bmN0aW9ucyBjYW4ndCBjcm9zcyBtb2R1bGVzIVwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiAoZnJvbSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChmcm9tID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlYnVnLmVycm9yKFwiTWVzc2FnZSBkaXNjYXJkZWQgZm9yIG5vdCBtYXRjaGluZyBkZWNsYXJlZCB0eXBlIVwiLCBmcm9tKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3dpdGNoICh0ZW1wbGF0ZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICAgIHJldHVybiBTdHJpbmcoJycpICsgZnJvbTtcbiAgY2FzZSAnbnVtYmVyJzpcbiAgICByZXR1cm4gTnVtYmVyKDEpICogZnJvbTtcbiAgY2FzZSAnYm9vbGVhbic6XG4gICAgcmV0dXJuIEJvb2xlYW4oZnJvbSA9PT0gdHJ1ZSk7XG4gIGNhc2UgJ29iamVjdCc6XG4gICAgLy8gVE9ETyh3aWxsc2NvdHQpOiBBbGxvdyByZW1vdmFsIGlmIHNhbmRib3hpbmcgZW5mb3JjZXMgdGhpcy5cbiAgICBpZiAodHlwZW9mIGZyb20gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmcm9tKSk7XG4gICAgfVxuICBjYXNlICdibG9iJzpcbiAgICBpZiAoc2VwYXJhdGUpIHtcbiAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICBleHRlcm5hbHMucHVzaChmcm9tKTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcuZXJyb3IoJ2NvbmZvcm0gZXhwZWN0aW5nIEJsb2IsIGJ1dCBzYXcgJyArICh0eXBlb2YgZnJvbSkpO1xuICAgICAgICBleHRlcm5hbHMucHVzaChuZXcgQmxvYihbXSkpO1xuICAgICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBleHRlcm5hbHNbZnJvbV07XG4gICAgfVxuICBjYXNlICdidWZmZXInOlxuICAgIGlmIChzZXBhcmF0ZSkge1xuICAgICAgZXh0ZXJuYWxzLnB1c2goQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyKGZyb20sIGRlYnVnKSk7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDb25zdW1lci5tYWtlQXJyYXlCdWZmZXIoZXh0ZXJuYWxzW2Zyb21dLCBkZWJ1Zyk7XG4gICAgfVxuICBjYXNlICdwcm94eSc6XG4gICAgcmV0dXJuIGZyb207XG4gIH1cbiAgdmFyIHZhbCwgaTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGVtcGxhdGUpICYmIGZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbCA9IFtdO1xuICAgIGkgPSAwO1xuICAgIGlmICh0ZW1wbGF0ZS5sZW5ndGggPT09IDIgJiYgdGVtcGxhdGVbMF0gPT09ICdhcnJheScpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0ZW1wbGF0ZSBpcyBhcnJheSwgdmFsdWUgaXMgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsLnB1c2goQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZVsxXSwgZnJvbVtpXSwgZXh0ZXJuYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlLCBkZWJ1ZykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGZyb21baV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbC5wdXNoKENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGVbaV0sIGZyb21baV0sIGV4dGVybmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlLCBkZWJ1ZykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbC5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdvYmplY3QnICYmIGZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbCA9IHt9O1xuICAgIHV0aWwuZWFjaFByb3AodGVtcGxhdGUsIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgICBpZiAoZnJvbVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbFtuYW1lXSA9IENvbnN1bWVyLmNvbmZvcm0ocHJvcCwgZnJvbVtuYW1lXSwgZXh0ZXJuYWxzLCBzZXBhcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICBkZWJ1Zy5lcnJvcignVW5rbm93biB0ZW1wbGF0ZSBwcm92aWRlZDogJyArIHRlbXBsYXRlKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIHRoaW5nIGludG8gYW4gQXJyYXkgQnVmZmVyXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIG1ha2VBcnJheUJ1ZmZlclxuICogQHBhcmFtIHtPYmplY3R9IHRoaW5nXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGluIGNhc2Ugb2YgZXJyb3JzLlxuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IEFuIEFycmF5IEJ1ZmZlclxuICovXG5Db25zdW1lci5tYWtlQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAodGhpbmcsIGRlYnVnKSB7XG4gIGlmICghdGhpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgaWYgKHRoaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gdGhpbmc7XG4gIH0gZWxzZSBpZiAodGhpbmcuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheUJ1ZmZlclwiICYmXG4gICAgICB0eXBlb2YgdGhpbmcucHJvdG90eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gV29ya2Fyb3VuZCBmb3Igd2Via2l0IG9yaWdpbiBvd25lcnNoaXAgaXNzdWUuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1VXTmV0d29ya3NMYWIvZnJlZWRvbS9pc3N1ZXMvMjhcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KHRoaW5nKS5idWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcuZXJyb3IoJ2V4cGVjdGluZyBBcnJheUJ1ZmZlciwgYnV0IHNhdyAnICtcbiAgICAgICAgKHR5cGVvZiB0aGluZykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpbmcpKTtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGEgW25lc3RlZF0gb2JqZWN0IGFuZCBmcmVlemUgaXRzIGtleXMgZnJvbSBiZWluZ1xuICogd3JpdGFibGUuIE5vdGUsIHRoZSByZXN1bHQgY2FuIGhhdmUgbmV3IGtleXMgYWRkZWQgdG8gaXQsIGJ1dCBleGlzdGluZyBvbmVzXG4gKiBjYW5ub3QgYmUgIG92ZXJ3cml0dGVuLiBEb2Vzbid0IGRvIGFueXRoaW5nIGZvciBhcnJheXMgb3Igb3RoZXIgY29sbGVjdGlvbnMuXG4gKlxuICogQG1ldGhvZCByZWN1cnNpdmVGcmVlemVPYmplY3RcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmplY3QgdG8gYmUgZnJvemVuXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9ialxuICoqL1xuQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgaywgcmV0ID0ge307XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZm9yIChrIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXQsIGssIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChvYmpba10pLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdW1lcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBlbnRyeSBwb2ludCBmb3IgZGVidWdnaW5nLlxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIERlYnVnID0gZnVuY3Rpb24gKGxvZ2dlcikge1xuICB0aGlzLmlkID0gJ2RlYnVnJztcbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IGZhbHNlO1xuICB0aGlzLmNvbmZpZyA9IGZhbHNlO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogVGhlIHN1cHBvcnRlZCBsb2cgbGV2ZWxzIGZvciBkZWJ1Z2dpbmcuXG4gKiBAc3RhdGljXG4gKi9cbkRlYnVnLkxFVkVMUyA9IFsnZGVidWcnLCAnaW5mbycsICdsb2cnLCAnd2FybicsICdlcnJvciddO1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHRleHR1YWwgZGVzY3JpcHRpb24uXG4gKi9cbkRlYnVnLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdbQ29uc29sZV0nO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGxvZ2dlciBmb3Igb3V0cHV0dGluZyBkZWJ1Z2dpbmcgbWVzc2FnZXMuXG4gKiBAbWV0aG9kIHNldExvZ2dlclxuICogQHBhcmFtIHtDb25zb2xlfSBsb2dnZXIgVGhlIGxvZ2dlciB0byByZWdpc3RlclxuICovXG5EZWJ1Zy5wcm90b3R5cGUuc2V0TG9nZ2VyID0gZnVuY3Rpb24gKGxvZ2dlcikge1xuICBpZiAodGhpcy5sb2dnZXIpIHtcbiAgICB0aGlzLmluZm8oJ1JlcGxhY2luZyBMb2dnZXIuJyk7XG4gIH1cbiAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gIHRoaXMuZW1pdCgnbG9nZ2VyJyk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHJlY2VpdmluZyBtZXNzYWdlcyBzZW50IHRvIHRoZSBkZWJ1ZyBwb3J0LlxuICogVGhlc2UgbWVzc2FnZXMgYXJlIHVzZWQgdG8gcmV0cmVpdmUgY29uZmlnIGZvciBleHBvc2luZyBjb25zb2xlLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgdGhlIHNvdXJjZSBpZGVudGlmaWVyIGZvciB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIHRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5EZWJ1Zy5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5jaGFubmVsICYmICF0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmNvbmZpZyA9IG1lc3NhZ2UuY29uZmlnO1xuICAgIGlmICghdGhpcy5jb25maWcuZ2xvYmFsLmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmNvbnNvbGUgPSB0aGlzLmdldExvZ2dlcignQ29uc29sZScpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogRGlzcGF0Y2ggYSBkZWJ1ZyBtZXNzYWdlIHdpdGggYXJiaXRyYXJ5IHNldmVyaXR5LlxuICogQWxsIGRlYnVnIG1lc3NhZ2VzIGFyZSByb3V0ZWQgdGhyb3VnaCB0aGUgbWFuYWdlciwgdG8gYWxsb3cgZm9yIGRlbGVnYXRpb24uXG4gKiBAbWV0aG9kIGZvcm1hdFxuICogQHBhcmFtIHtTdHJpbmd9IHNldmVyaXR5IHRoZSBzZXZlcml0eSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGxvY2F0aW9uIG9mIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBhcmdzIFRoZSBjb250ZW50cyBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwcml2YXRlXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSwgYXJncykge1xuICB2YXIgaSwgYWxpc3QgPSBbXSwgYXJnYXJyO1xuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIgJiYgc291cmNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFyZ2FyciA9IEpTT04ucGFyc2UoYXJncyk7XG4gICAgICBpZiAoYXJnYXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgYXJncyA9IGFyZ2FycjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBwYXNzLlxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFsaXN0LnB1c2goYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGFsaXN0LnB1c2goYXJnc1tpXSk7XG4gICAgfVxuICB9XG4gIGlmICghdGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMub24oJ3JlYWR5JywgdGhpcy5mb3JtYXQuYmluZCh0aGlzLCBzZXZlcml0eSwgc291cmNlLCBhbGlzdCkpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgIHNldmVyaXR5OiBzZXZlcml0eSxcbiAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICBxdWlldDogdHJ1ZSxcbiAgICByZXF1ZXN0OiAnZGVidWcnLFxuICAgIG1zZzogSlNPTi5zdHJpbmdpZnkoYWxpc3QpXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQcmludCByZWNlaXZlZCBtZXNzYWdlcyBvbiB0aGUgY29uc29sZS5cbiAqIFRoaXMgaXMgY2FsbGVkIGJ5IHRoZSBtYW5hZ2VyIGluIHJlc3BvbnNlIHRvIGFuIGVtaXNzaW9uIGZyb20gZm9ybWF0LlxuICogQG1ldGhvZCBwcmludFxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZW1pdHRlZCBieSB7QHNlZSBmb3JtYXR9IHRvIHByaW50LlxuICovXG5EZWJ1Zy5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBpZiAoIXRoaXMubG9nZ2VyKSB7XG4gICAgdGhpcy5vbmNlKCdsb2dnZXInLCB0aGlzLnByaW50LmJpbmQodGhpcywgbWVzc2FnZSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBhcmdzLCBhcnIgPSBbXSwgaSA9IDA7XG4gIGFyZ3MgPSBKU09OLnBhcnNlKG1lc3NhZ2UubXNnKTtcbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgYXJyLnB1c2goYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGFyZ3NbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXJyLnB1c2goYXJnc1tpXSk7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICB9XG4gIHRoaXMubG9nZ2VyW21lc3NhZ2Uuc2V2ZXJpdHldLmNhbGwodGhpcy5sb2dnZXIsIG1lc3NhZ2Uuc291cmNlLCBhcnIsIGZ1bmN0aW9uICgpIHt9KTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSBsb2cgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdsb2cnLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGFuIGluZm8gbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnaW5mbycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnZGVidWcnLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgd2FybmluZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCB3YXJuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnd2FybicsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgZXJyb3JcbiAqL1xuRGVidWcucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnZXJyb3InLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdldCBhIGxvZ2dlciB0aGF0IGxvZ3MgbWVzc2FnZXMgcHJlZml4ZWQgYnkgYSBnaXZlbiBuYW1lLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBwcmVmaXggZm9yIGxvZ2dlZCBtZXNzYWdlcy5cbiAqIEByZXR1cm5zIHtDb25zb2xlfSBBIGNvbnNvbGUtbGlrZSBvYmplY3QuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5nZXRMb2dnZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgbG9nID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHRoaXMuZm9ybWF0KHNldmVyaXR5LCBzb3VyY2UsIGFyZ3MpO1xuICB9LFxuICAgIGxvZ2dlciA9IHtcbiAgICAgIGZyZWVkb206IHRydWVcbiAgICB9O1xuICBEZWJ1Zy5MRVZFTFMuZm9yRWFjaChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICBsb2dnZXJbbGV2ZWxdID0gbG9nLmJpbmQodGhpcywgbGV2ZWwsIG5hbWUpO1xuICB9LmJpbmQodGhpcykpO1xuICByZXR1cm4gbG9nZ2VyO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBzeW5jaHJvbm91cyAnZ2V0TG9nZ2VyJyBtZXRob2QgdGhhdCBiaW5kcyBhcm91bmQgYW4gYXN5bmNocm9ub3VzXG4gKiBsb2dnZXIgYnkgY3JlYXRpbmcgYSBidWZmZXIgdW50aWwgdGhlIGFzeW5jaHJvbm91cyBsb2dnZXIgaXMgcmVzb2x2ZWQuXG4gKiBAc2VlIHtNb2R1bGVJbnRlcm5hbC5sb2FkTGlua3N9IGZvciB3aGVyZSB0aGlzIG1ldGhvZCBpcyBib3VuZCB0byB0aGUgY3JlYXRlZFxuICogICAgIGV4dGVybmFsIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0TG9nZ2luZ1NoaW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzeW5jTWV0aG9kIFRoZSB3cmFwcGVyIHRvICdnZXRMb2dnZXInXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5nZXRMb2dnaW5nU2hpbSA9IGZ1bmN0aW9uIChhc3luY01ldGhvZCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0TG9nZ2dlclN5bmMobmFtZSkge1xuICAgIHZhciB0b1Jlc29sdmUgPSBhc3luY01ldGhvZChuYW1lKSxcbiAgICAgIGJ1ZmZlciA9IFtdLFxuICAgICAgbWV0aG9kcyA9IERlYnVnLkxFVkVMUyxcbiAgICAgIGJhY2tpbmcgPSBudWxsLFxuICAgICAgcmV0ID0ge307XG4gICAgdG9SZXNvbHZlLnRoZW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgYmFja2luZyA9IGxvZ2dlcjtcbiAgICAgIGJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGJhY2tpbmdbaXRlbVswXV0uYXBwbHkoYmFja2luZywgaXRlbVsxXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG10aGQpIHtcbiAgICAgIHJldFttdGhkXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICBpZiAoYmFja2luZykge1xuICAgICAgICAgIGJhY2tpbmdbdGhpc10uYXBwbHkoYmFja2luZywgYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmZmVyLnB1c2goW3RoaXMsIGFyZ3NdKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKG10aGQpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlYnVnO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlICovXHJcbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xyXG5cclxudmFyIEFwaSA9IHJlcXVpcmUoJy4vYXBpJyk7XHJcbnZhciBEZWJ1ZyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcclxudmFyIEh1YiA9IHJlcXVpcmUoJy4vaHViJyk7XHJcbnZhciBNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XHJcbnZhciBQb2xpY3kgPSByZXF1aXJlKCcuL3BvbGljeScpO1xyXG52YXIgUHJveHlCaW5kZXIgPSByZXF1aXJlKCcuL3Byb3h5YmluZGVyJyk7XHJcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcclxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxudmFyIEJ1bmRsZSA9IHJlcXVpcmUoJy4vYnVuZGxlJyk7XHJcblxyXG52YXIgZnJlZWRvbUdsb2JhbDtcclxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgLy8gTm9kZS5qc1xyXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwucHJvdG90eXBlID09PSB1bmRlZmluZWQpIHtcclxuICAgIGZyZWVkb21HbG9iYWwgPSBnbG9iYWw7XHJcbiAgLy8gQnJvd3NlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZyZWVkb21HbG9iYWwgPSB0aGlzO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG59O1xyXG5nZXRHbG9iYWwoKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgZnJlZWRvbSBjb250ZXh0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYWwgY29udGV4dC5cclxuICogQHNlZSB7dXRpbC93b3JrZXJFbnRyeS5qc31cclxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCB0byBsb2FkLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIENvbmZpZ3VyYXRpb24ga2V5cyBzZXQgYnkgdGhlIHVzZXIuXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSBtb2R1bGUgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QuXHJcbiAqL1xyXG52YXIgc2V0dXAgPSBmdW5jdGlvbiAoY29udGV4dCwgbWFuaWZlc3QsIGNvbmZpZykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICB2YXIgZGVidWcgPSBuZXcgRGVidWcoKSxcclxuICAgIGh1YiA9IG5ldyBIdWIoZGVidWcpLFxyXG4gICAgcmVzb3VyY2UgPSBuZXcgUmVzb3VyY2UoZGVidWcpLFxyXG4gICAgYXBpID0gbmV3IEFwaShkZWJ1ZyksXHJcbiAgICBtYW5hZ2VyID0gbmV3IE1hbmFnZXIoaHViLCByZXNvdXJjZSwgYXBpKSxcclxuICAgIGJpbmRlciA9IG5ldyBQcm94eUJpbmRlcihtYW5hZ2VyKSxcclxuICAgIHBvbGljeSxcclxuICAgIHNpdGVfY2ZnID0ge1xyXG4gICAgICAnZGVidWcnOiAnbG9nJyxcclxuICAgICAgJ21hbmlmZXN0JzogbWFuaWZlc3QsXHJcbiAgICAgICdtb2R1bGVDb250ZXh0JzogKCFjb250ZXh0IHx8IHR5cGVvZiAoY29udGV4dC5pc01vZHVsZSkgPT09IFwidW5kZWZpbmVkXCIpID9cclxuICAgICAgICAgIHV0aWwuaXNNb2R1bGVDb250ZXh0KCkgOlxyXG4gICAgICAgICAgY29udGV4dC5pc01vZHVsZVxyXG4gICAgfSxcclxuICAgIGxpbmssXHJcbiAgICBQb3J0LFxyXG4gICAgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXBpLmNsZWFudXAoKTtcclxuICAgICAgbWFuYWdlci5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG5cclxuICBpZiAoY29uZmlnKSB7XHJcbiAgICB1dGlsLm1peGluKHNpdGVfY2ZnLCBjb25maWcsIHRydWUpO1xyXG4gIH1cclxuICBzaXRlX2NmZy5nbG9iYWwgPSBmcmVlZG9tR2xvYmFsO1xyXG4gIGlmIChjb250ZXh0KSB7XHJcbiAgICB1dGlsLm1peGluKHNpdGVfY2ZnLCBjb250ZXh0LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIFJlZ2lzdGVyIHVzZXItc3VwcGxpZWQgZXh0ZW5zaW9ucy5cclxuICAvLyBGb3IgZXhhbXBsZSB0aGUgJ2NvcmUub2F1dGgnIHByb3ZpZGVyIGRlZmluZXMgYSByZWdpc3RlciBmdW5jdGlvbixcclxuICAvLyB3aGljaCBlbmFibGVzIHNpdGVfY2ZnLm9hdXRoIHRvIGJlIHJlZ2lzdGVyZWQgd2l0aCBpdC5cclxuICBjb250ZXh0LnByb3ZpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm92aWRlcikge1xyXG4gICAgdmFyIG5hbWU7XHJcbiAgICBpZiAocHJvdmlkZXIubmFtZS5pbmRleE9mKCdjb3JlLicpID09PSAwICYmXHJcbiAgICAgICAgdHlwZW9mIHByb3ZpZGVyLnJlZ2lzdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG5hbWUgPSBwcm92aWRlci5uYW1lLnN1YnN0cig1KTtcclxuICAgICAgLy8gSW52ZXJ0IHByaW9yaXR5IGFuZCBwcmVmZXIgdXNlciBjb25maWcgb3ZlciBsb2NhbCBjb250ZXh0IGZvciB0aGVzZS5cclxuICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWdbbmFtZV0pIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3Rlcihjb25maWdbbmFtZV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHNpdGVfY2ZnW25hbWVdKSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIoc2l0ZV9jZmdbbmFtZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKHVuZGVmaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBCdW5kbGUucmVnaXN0ZXIoY29udGV4dC5wcm92aWRlcnMsIGFwaSk7XHJcbiAgcmVzb3VyY2UucmVnaXN0ZXIoY29udGV4dC5yZXNvbHZlcnMgfHwgW10pO1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgaWYgKHNpdGVfY2ZnLm1vZHVsZUNvbnRleHQpIHtcclxuICAgICAgUG9ydCA9IHNpdGVfY2ZnLnBvcnRUeXBlO1xyXG4gICAgICBsaW5rID0gbmV3IFBvcnQoJ091dGJvdW5kJywgcmVzb3VyY2UpO1xyXG4gICAgICBtYW5hZ2VyLnNldHVwKGxpbmspO1xyXG5cclxuICAgICAgLy8gRGVsYXkgZGVidWcgbWVzc2FnZXMgdW50aWwgZGVsZWdhdGlvbiB0byB0aGUgcGFyZW50IGNvbnRleHQgaXMgc2V0dXAuXHJcbiAgICAgIG1hbmFnZXIub25jZSgnZGVsZWdhdGUnLCBtYW5hZ2VyLnNldHVwLmJpbmQobWFuYWdlciwgZGVidWcpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hbmFnZXIuc2V0dXAoZGVidWcpO1xyXG4gICAgICBwb2xpY3kgPSBuZXcgUG9saWN5KG1hbmFnZXIsIHJlc291cmNlLCBzaXRlX2NmZyk7XHJcblxyXG4gICAgICAvLyBEZWZpbmUgaG93IHRvIGxvYWQgYSByb290IG1vZHVsZS5cclxuICAgICAgdmFyIGZhbGxiYWNrTG9nZ2VyLCBnZXRJZmFjZTtcclxuICAgICAgZmFsbGJhY2tMb2dnZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIGFwaS5nZXRDb3JlKCdjb3JlLmNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBjb25maWc6IHNpdGVfY2ZnXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgICAgICAgIHZhciBsb2dnZXIgPSBuZXcgcHJvdmlkZXIuaW5zdCgpO1xyXG4gICAgICAgICAgZGVidWcuc2V0TG9nZ2VyKGxvZ2dlcik7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBkZWJ1Zy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZ2V0SWZhY2UgPSBmdW5jdGlvbiAobWFuaWZlc3QpIHtcclxuICAgICAgICByZXR1cm4gcmVzb3VyY2UuZ2V0KHNpdGVfY2ZnLmxvY2F0aW9uLCBtYW5pZmVzdCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChjYW5vbmljYWxfbWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvbGljeS5nZXQoW10sIGNhbm9uaWNhbF9tYW5pZmVzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgbWFuYWdlci5zZXR1cChpbnN0YW5jZSk7XHJcbiAgICAgICAgICByZXR1cm4gYmluZGVyLmJpbmREZWZhdWx0KGluc3RhbmNlLCBhcGksIGluc3RhbmNlLm1hbmlmZXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIExvYWQgYXBwcm9wcmlhdGUgTG9nZ2VyLlxyXG4gICAgICBpZiAoc2l0ZV9jZmcubG9nZ2VyKSB7XHJcbiAgICAgICAgZ2V0SWZhY2Uoc2l0ZV9jZmcubG9nZ2VyKS50aGVuKGZ1bmN0aW9uIChpZmFjZSkge1xyXG4gICAgICAgICAgaWYgKGlmYWNlLmV4dGVybmFsLmFwaSAhPT0gJ2NvbnNvbGUnKSB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrTG9nZ2VyKFwiVW53aWxsaW5nIHRvIHVzZSBsb2dnZXIgd2l0aCB1bmtub3duIEFQSTpcIixcclxuICAgICAgICAgICAgICBpZmFjZS5leHRlcm5hbC5hcGkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWcuc2V0TG9nZ2VyKGlmYWNlLmV4dGVybmFsKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbGxiYWNrTG9nZ2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmYWxsYmFja0xvZ2dlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMb2FkIHJvb3QgbW9kdWxlLlxyXG4gICAgICBnZXRJZmFjZShzaXRlX2NmZy5tYW5pZmVzdCkudGhlbihmdW5jdGlvbiAoaWZhY2UpIHtcclxuICAgICAgICBpZmFjZS5wb3J0Lm9uY2UoJ2Nsb3NlJywgY2xlYW51cCk7XHJcbiAgICAgICAgcmV0dXJuIGlmYWNlLmV4dGVybmFsO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgZGVidWcuZXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBtYW5pZmVzdDogJyArIGVycik7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9KS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaHViLmVtaXQoJ2NvbmZpZycsIHNpdGVfY2ZnKTtcclxuICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XHJcbiIsIi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZmRvbS5IdWIsIHRoZSBjb3JlIG1lc3NhZ2UgaHViIGJldHdlZW4gZnJlZWRvbSBtb2R1bGVzLlxyXG4gKiBJbmNvbW1pbmcgbWVzc2FnZXMgZnJvbSBhcHBzIGFyZSBzZW50IHRvIGh1Yi5vbk1lc3NhZ2UoKVxyXG4gKiBAY2xhc3MgSHViXHJcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIExvZ2dlciBmb3IgZGVidWdnaW5nLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBIdWIgPSBmdW5jdGlvbiAoZGVidWcpIHtcclxuICB0aGlzLmRlYnVnID0gZGVidWc7XHJcbiAgdGhpcy5jb25maWcgPSB7fTtcclxuICB0aGlzLmFwcHMgPSB7fTtcclxuICB0aGlzLnJvdXRlcyA9IHt9O1xyXG5cclxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcclxuICB0aGlzLm9uKCdjb25maWcnLCBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG4gIH0uYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogSGFuZGxlIGFuIGluY29taW5nIG1lc3NhZ2UgZnJvbSBhIGZyZWVkb20gYXBwLlxyXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBpZGVudGlmaXlpbmcgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgc2VudCBtZXNzYWdlLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XHJcbiAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5yb3V0ZXNbc291cmNlXSwgdHlwZTtcclxuICBpZiAoIWRlc3RpbmF0aW9uIHx8ICFkZXN0aW5hdGlvbi5hcHApIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk1lc3NhZ2UgZHJvcHBlZCBmcm9tIHVucmVnaXN0ZXJlZCBzb3VyY2UgXCIgKyBzb3VyY2UpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXSkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTWVzc2FnZSBkcm9wcGVkIHRvIGRlc3RpbmF0aW9uIFwiICsgZGVzdGluYXRpb24uYXBwKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRoZSBmaXJlaG9zZSB0cmFjaW5nIGFsbCBpbnRlcm5hbCBmcmVlZG9tLmpzIG1lc3NhZ2VzLlxyXG4gIGlmICghbWVzc2FnZS5xdWlldCAmJiAhZGVzdGluYXRpb24ucXVpZXQgJiYgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcudHJhY2UpIHtcclxuICAgIHR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnbWVzc2FnZScgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLmFjdGlvbiA9PT0gJ21ldGhvZCcpIHtcclxuICAgICAgdHlwZSA9ICdtZXRob2QuJyArIG1lc3NhZ2UubWVzc2FnZS50eXBlO1xyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXRob2QnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAnbWV0aG9kJykge1xyXG4gICAgICB0eXBlID0gJ3JldHVybi4nICsgbWVzc2FnZS5tZXNzYWdlLm5hbWU7XHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21lc3NhZ2UnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAnZXZlbnQnKSB7XHJcbiAgICAgIHR5cGUgPSAnZXZlbnQuJyArIG1lc3NhZ2UubWVzc2FnZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZWJ1Zy5kZWJ1Zyh0aGlzLmFwcHNbZGVzdGluYXRpb24uc291cmNlXS50b1N0cmluZygpICtcclxuICAgICAgICBcIiAtXCIgKyB0eXBlICsgXCItPiBcIiArXHJcbiAgICAgICAgdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0udG9TdHJpbmcoKSArIFwiLlwiICsgZGVzdGluYXRpb24uZmxvdyk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXS5vbk1lc3NhZ2UoZGVzdGluYXRpb24uZmxvdywgbWVzc2FnZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBwb3J0IG9mIGEgZmxvdy5cclxuICogQG1ldGhvZCBnZXREZXN0aW5hdGlvblxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBmbG93IHRvIHJldHJpZXZlLlxyXG4gKiBAcmV0dXJuIHtQb3J0fSBUaGUgZGVzdGluYXRpb24gcG9ydC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2V0RGVzdGluYXRpb24gPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5yb3V0ZXNbc291cmNlXTtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbG9jYWwgc291cmNlIHBvcnQgb2YgYSBmbG93LlxyXG4gKiBAbWV0aG9kIGdldFNvdXJjZVxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgZmxvdyBpZGVudGlmaWVyIHRvIHJldHJpZXZlLlxyXG4gKiBAcmV0dXJuIHtQb3J0fSBUaGUgc291cmNlIHBvcnQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoIXRoaXMuYXBwc1tzb3VyY2UuaWRdKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJObyByZWdpc3RlcmVkIHNvdXJjZSAnXCIgKyBzb3VyY2UuaWQgKyBcIidcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFwcHNbc291cmNlLmlkXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBhIGRlc3RpbmF0aW9uIGZvciBtZXNzYWdlcyB3aXRoIHRoaXMgaHViLlxyXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAqIEBwYXJhbSB7UG9ydH0gYXBwIFRoZSBQb3J0IHRvIHJlZ2lzdGVyLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZV0gV2hldGhlciB0byBvdmVycmlkZSBhbiBleGlzdGluZyBwb3J0LlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBhcHAgd2FzIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGFwcCwgZm9yY2UpIHtcclxuICBpZiAoIXRoaXMuYXBwc1thcHAuaWRdIHx8IGZvcmNlKSB7XHJcbiAgICB0aGlzLmFwcHNbYXBwLmlkXSA9IGFwcDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlcmVnaXN0ZXIgYSBkZXN0aW5hdGlvbiBmb3IgbWVzc2FnZXMgd2l0aCB0aGUgaHViLlxyXG4gKiBOb3RlOiBkb2VzIG5vdCByZW1vdmUgYXNzb2NpYXRlZCByb3V0ZXMuIEFzIHN1Y2gsIGRlcmVnaXN0ZXJpbmcgd2lsbFxyXG4gKiBwcmV2ZW50IHRoZSBpbnN0YWxsYXRpb24gb2YgbmV3IHJvdXRlcywgYnV0IHdpbGwgbm90IGRpc3RydXB0IGV4aXN0aW5nXHJcbiAqIGh1YiByb3V0ZXMuXHJcbiAqIEBtZXRob2QgZGVyZWdpc3RlclxyXG4gKiBAcGFyYW0ge1BvcnR9IGFwcCBUaGUgUG9ydCB0byBkZXJlZ2lzdGVyXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGFwcCB3YXMgZGVyZWdpc3RlcmVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5kZXJlZ2lzdGVyID0gZnVuY3Rpb24gKGFwcCkge1xyXG4gIGlmICghdGhpcy5hcHBzW2FwcC5pZF0pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZGVsZXRlIHRoaXMuYXBwc1thcHAuaWRdO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluc3RhbGwgYSBuZXcgcm91dGUgaW4gdGhlIGh1Yi5cclxuICogQG1ldGhvZCBpbnN0YWxsXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1BvcnR9IGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBmbG93IHdoZXJlIHRoZSBkZXN0aW5hdGlvbiB3aWxsIHJlY2VpdmUgbWVzc2FnZXMuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcXVpZXQgV2hldGhlciBtZXNzYWdlcyBvbiB0aGlzIHJvdXRlIHNob3VsZCBiZSBzdXBwcmVzc2VkLlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgcm91dGluZyBzb3VyY2UgaWRlbnRpZmllciBmb3Igc2VuZGluZyBtZXNzYWdlcy5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3RpbmF0aW9uLCBmbG93LCBxdWlldCkge1xyXG4gIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZSk7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIGdlbmVyYXRlIGJsYWNraG9sZSBmbG93IGZyb20gXCIgKyBzb3VyY2UuaWQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvdXRlID0gdGhpcy5nZW5lcmF0ZVJvdXRlKCk7XHJcbiAgdGhpcy5yb3V0ZXNbcm91dGVdID0ge1xyXG4gICAgYXBwOiBkZXN0aW5hdGlvbixcclxuICAgIGZsb3c6IGZsb3csXHJcbiAgICBzb3VyY2U6IHNvdXJjZS5pZCxcclxuICAgIHF1aWV0OiBxdWlldFxyXG4gIH07XHJcbiAgaWYgKHR5cGVvZiBzb3VyY2Uub24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHNvdXJjZS5vbihyb3V0ZSwgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCByb3V0ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVuaW5zdGFsbCBhIGh1YiByb3V0ZS5cclxuICogQG1ldGhvZCB1bmluc3RhbGxcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSByb3V0ZSB0byB1bmluc3RhbGwuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIHJvdXRlIHdhcyBhYmxlIHRvIGJlIHVuaW5zdGFsbGVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS51bmluc3RhbGwgPSBmdW5jdGlvbiAoc291cmNlLCBmbG93KSB7XHJcbiAgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlKTtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvdXRlID0gdGhpcy5yb3V0ZXNbZmxvd107XHJcbiAgaWYgKCFyb3V0ZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAocm91dGUuc291cmNlICE9PSBzb3VyY2UuaWQpIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIkZsb3cgXCIgKyBmbG93ICsgXCIgZG9lcyBub3QgYmVsb25nIHRvIHBvcnQgXCIgKyBzb3VyY2UuaWQpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlIHRoaXMucm91dGVzW2Zsb3ddO1xyXG4gIGlmICh0eXBlb2Ygc291cmNlLm9mZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgc291cmNlLm9mZihyb3V0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGFuZCBub3RpZnkgYWxsIGNvbm5lY3RlZCBkZXN0aW5hdGlvbnMgb2YgdGhlaXIgcmVtb3ZhbC5cclxuICogQG1ldGhvZCB0ZWFyZG93blxyXG4gKi9cclxuSHViLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcclxuICB1dGlsLmVhY2hQcm9wKHRoaXMuYXBwcywgZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2Uub2ZmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHNvdXJjZS5vZmYoKTtcclxuICAgIH1cclxuICB9KTtcclxuICB0aGlzLmFwcHMgPSB7fTtcclxuICB0aGlzLnJvdXRlcyA9IHt9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIHJvdXRpbmcgaWRlbnRpZmllci5cclxuICogQG1ldGhvZCBnZW5lcmF0ZVJvdXRlXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gYSByb3V0aW5nIHNvdXJjZSBpZGVudGlmaWVyLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZW5lcmF0ZVJvdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB1dGlsLmdldElkKCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEh1YjtcclxuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBsaW5rIGNvbm5lY3RzIHR3byBmcmVlZG9tIGh1YnMuIFRoaXMgaXMgYW4gYWJzdHJhY3QgY2xhc3NcbiAqIHByb3ZpZGluZyBjb21tb24gZnVuY3Rpb25hbGl0eSBvZiB0cmFuc2xhdGluZyBjb250cm9sIGNoYW5uZWxzLFxuICogYW5kIGludGVncmF0aW5nIGNvbmZpZyBpbmZvcm1hdGlvbi5cbiAqIEBjbGFzcyBMaW5rXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIExpbmsgPSBmdW5jdGlvbiAobmFtZSwgcmVzb3VyY2UpIHtcbiAgdGhpcy5pZCA9ICdMaW5rJyArIE1hdGgucmFuZG9tKCk7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5zcmMgPSBudWxsO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB1dGlsLm1peGluKHRoaXMsIExpbmsucHJvdG90eXBlKTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIHRoZSBodWIgdG8gdGhpcyBwb3J0LlxuICogTWFuYWdlcyBzdGFydHVwLCBhbmQgcGFzc2VzIG90aGVycyB0byAnZGVsaXZlck1lc3NhZ2UnIGltcGxlbWVudGVkXG4gKiBpbiBkZXJpdmVkIGNsYXNzZXMuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGNoYW5uZWwvZmxvdyBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBNZXNzYWdlLlxuICovXG5MaW5rLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmICF0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIG1lc3NhZ2UuY29uZmlnKTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWxpdmVyTWVzc2FnZShmbG93LCBtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGhhbmRsZXIgdG8gYWxlcnQgb2YgZXJyb3JzIG9uIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgYWRkRXJyb3JIYW5kbGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIE1ldGhvZCB0byBjYWxsIHdpdGggZXJyb3JzLlxuICovXG5MaW5rLnByb3RvdHlwZS5hZGRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICB0aGlzLm9uRXJyb3IgPSBoYW5kbGVyO1xufTtcblxuLyoqXG4gKiBSZXBvcnQgYW4gZXJyb3Igb24gdGhpcyBsaW5rLlxuICogQG1ldGhvZCBvbmVycm9yXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yIHRoYXQgb2NjdXJyZWQuXG4gKi9cbkxpbmsucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIC8vRmlsbGVkIGluIGJ5IGFkZEVycm9ySGFuZGxlclxufTtcblxuLyoqXG4gKiBFbWl0IG1lc3NhZ2VzIHRvIHRoZSB0aGUgaHViLCBtYXBwaW5nIGNvbnRyb2wgY2hhbm5lbHMuXG4gKiBAbWV0aG9kIGVtaXRNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgZmxvdyB0byBlbWl0IHRoZSBtZXNzYWdlIG9uLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NnYWUgVGhlIG1lc3NhZ2UgdG8gZW1pdC5cbiAqL1xuTGluay5wcm90b3R5cGUuZW1pdE1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmIHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICBmbG93ID0gdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgfVxuICB0aGlzLmVtaXQoZmxvdywgbWVzc2FnZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iLCIvKmdsb2JhbHMgV29ya2VyICovXG4vKmpzbGludCBpbmRlbnQ6Miwgd2hpdGU6dHJ1ZSwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgTGluayA9IHJlcXVpcmUoJy4uL2xpbmsnKTtcblxuLyoqXG4gKiBBIHBvcnQgcHJvdmlkaW5nIG1lc3NhZ2UgdHJhbnNwb3J0IGJldHdlZW4gdHdvIGZyZWVkb20gY29udGV4dHMgdmlhIFdvcmtlci5cbiAqIEBjbGFzcyBXb3JrZXJcbiAqIEBleHRlbmRzIExpbmtcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBXb3JrZXJMaW5rID0gZnVuY3Rpb24oaWQsIHJlc291cmNlKSB7XG4gIExpbmsuY2FsbCh0aGlzLCBpZCwgcmVzb3VyY2UpO1xuICBpZiAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnQgdGhpcyBwb3J0IGJ5IGxpc3RlbmluZyBvciBjcmVhdGluZyBhIHdvcmtlci5cbiAqIEBtZXRob2Qgc3RhcnRcbiAqIEBwcml2YXRlXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmNvbmZpZy5tb2R1bGVDb250ZXh0KSB7XG4gICAgdGhpcy5zZXR1cExpc3RlbmVyKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZXR1cFdvcmtlcigpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0b3AgdGhpcyBwb3J0IGJ5IGRlc3Ryb3lpbmcgdGhlIHdvcmtlci5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHByaXZhdGVcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAvLyBGdW5jdGlvbiBpcyBkZXRlcm1pbmVkIGJ5IHNldHVwTGlzdGVuZXIgb3Igc2V0dXBGcmFtZSBhcyBhcHByb3ByaWF0ZS5cbn07XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFwiW1dvcmtlciBcIiArIHRoaXMuaWQgKyBcIl1cIjtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgZ2xvYmFsIGxpc3RlbmVyIHRvIGhhbmRsZSBpbmNvbWluZyBtZXNzYWdlcyB0byB0aGlzXG4gKiBmcmVlZG9tLmpzIGNvbnRleHQuXG4gKiBAbWV0aG9kIHNldHVwTGlzdGVuZXJcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc2V0dXBMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgb25Nc2cgPSBmdW5jdGlvbihtc2cpIHtcbiAgICB0aGlzLmVtaXRNZXNzYWdlKG1zZy5kYXRhLmZsb3csIG1zZy5kYXRhLm1lc3NhZ2UpO1xuICB9LmJpbmQodGhpcyk7XG4gIHRoaXMub2JqID0gdGhpcy5jb25maWcuZ2xvYmFsO1xuICB0aGlzLm9iai5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2csIHRydWUpO1xuICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2csIHRydWUpO1xuICAgIGRlbGV0ZSB0aGlzLm9iajtcbiAgfTtcbiAgdGhpcy5lbWl0KCdzdGFydGVkJyk7XG4gIHRoaXMub2JqLnBvc3RNZXNzYWdlKFwiUmVhZHkgRm9yIE1lc3NhZ2VzXCIpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSB3b3JrZXIgd2l0aCBhbiBpc29sYXRlZCBmcmVlZG9tLmpzIGNvbnRleHQgaW5zaWRlLlxuICogQG1ldGhvZCBzZXR1cFdvcmtlclxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zZXR1cFdvcmtlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd29ya2VyLFxuICAgIGJsb2IsXG4gICAgc2VsZiA9IHRoaXM7XG4gIHdvcmtlciA9IG5ldyBXb3JrZXIodGhpcy5jb25maWcuc291cmNlICsgJyMnICsgdGhpcy5pZCk7XG5cbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgdGhpcy5vbkVycm9yKGVycik7XG4gIH0uYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24od29ya2VyLCBtc2cpIHtcbiAgICBpZiAoIXRoaXMub2JqKSB7XG4gICAgICB0aGlzLm9iaiA9IHdvcmtlcjtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnRlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXRNZXNzYWdlKG1zZy5kYXRhLmZsb3csIG1zZy5kYXRhLm1lc3NhZ2UpO1xuICB9LmJpbmQodGhpcywgd29ya2VyKSwgdHJ1ZSk7XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICBpZiAodGhpcy5vYmopIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9iajtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgbWVzc2FnZXMgZnJvbSB0aGUgaHViIHRvIHRoaXMgcG9ydC5cbiAqIFJlY2VpdmVkIG1lc3NhZ2VzIHdpbGwgYmUgZW1pdHRlZCBmcm9tIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBwb3J0LlxuICogQG1ldGhvZCBkZWxpdmVyTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGNoYW5uZWwvZmxvdyBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBNZXNzYWdlLlxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5kZWxpdmVyTWVzc2FnZSA9IGZ1bmN0aW9uKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScgJiZcbiAgICAgIG1lc3NhZ2UuY2hhbm5lbCA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMub2JqKSB7XG4gICAgICB0aGlzLm9iai5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGZsb3c6IGZsb3csXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0ZWQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV29ya2VyTGluaztcblxuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIE1vZHVsZUludGVybmFsID0gcmVxdWlyZSgnLi9tb2R1bGVpbnRlcm5hbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IHdoaWNoIG1hbmFnZXMgdGhlIGNvbnRyb2wgcGxhbmUgb2Ygb2YgY2hhbmdpbmcgaHViIHJvdXRlcy5cbiAqIEBjbGFzcyBNYW5hZ2VyXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAcGFyYW0ge0h1Yn0gaHViIFRoZSByb3V0aW5nIGh1YiB0byBjb250cm9sLlxuICogQHBhcmFtIHtSZXNvdXJjZX0gcmVzb3VyY2UgVGhlIHJlc291cmNlIG1hbmFnZXIgZm9yIHRoZSBydW50aW1lLlxuICogQHBhcmFtIHtBcGl9IGFwaSBUaGUgQVBJIG1hbmFnZXIgZm9yIHRoZSBydW50aW1lLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNYW5hZ2VyID0gZnVuY3Rpb24gKGh1YiwgcmVzb3VyY2UsIGFwaSkge1xuICB0aGlzLmlkID0gJ2NvbnRyb2wnO1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLmNvbnRyb2xGbG93cyA9IHt9O1xuICB0aGlzLmRhdGFGbG93cyA9IHt9O1xuICB0aGlzLmRhdGFGbG93c1t0aGlzLmlkXSA9IFtdO1xuICB0aGlzLnJldmVyc2VGbG93TWFwID0ge307XG5cbiAgdGhpcy5kZWJ1ZyA9IGh1Yi5kZWJ1ZztcbiAgdGhpcy5odWIgPSBodWI7XG4gIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgdGhpcy5hcGkgPSBhcGk7XG5cbiAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG4gIHRoaXMudG9EZWxlZ2F0ZSA9IHt9O1xuXG4gIHRoaXMuaHViLm9uKCdjb25maWcnLCBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmVtaXQoJ2NvbmZpZycpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmh1Yi5yZWdpc3Rlcih0aGlzKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZSBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW0xvY2FsIENvbnRyb2xsZXJdXCI7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgbWVzc2FnZXMgc2VudCB0byB0aGlzIHBvcnQuXG4gKiBUaGUgbWFuYWdlciwgb3IgJ2NvbnRyb2wnIGRlc3RpbmF0aW9uIGhhbmRsZXMgc2V2ZXJhbCB0eXBlcyBvZiBtZXNzYWdlcyxcbiAqIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgcHJvcGVydHkuICBUaGUgYWN0aW9ucyBhcmU6XG4gKiAxLiBkZWJ1Zy4gUHJpbnRzIHRoZSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogMi4gbGluay4gQ3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgc291cmNlIGFuZCBhIHByb3ZpZGVkIGRlc3RpbmF0aW9uIHBvcnQuXG4gKiAzLiBlbnZpcm9ubWVudC4gSW5zdGFudGlhdGUgYSBtb2R1bGUgZW52aXJvbm1lbnQgZGVmaW5lZCBpbiBNb2R1bGVJbnRlcm5hbC5cbiAqIDQuIGRlbGVnYXRlLiBSb3V0ZXMgYSBkZWZpbmVkIHNldCBvZiBjb250cm9sIG1lc3NhZ2VzIHRvIGFub3RoZXIgbG9jYXRpb24uXG4gKiA1LiByZXNvdXJjZS4gUmVnaXN0ZXJzIHRoZSBzb3VyY2UgYXMgYSByZXNvdXJjZSByZXNvbHZlci5cbiAqIDYuIGNvcmUuIEdlbmVyYXRlcyBhIGNvcmUgcHJvdmlkZXIgZm9yIHRoZSByZXF1ZXN0ZXIuXG4gKiA3LiBjbG9zZS4gVGVhcnMgZG93biByb3V0ZXMgaW52b2xpbmcgdGhlIHJlcXVlc3RpbmcgcG9ydC5cbiAqIDguIHVubGluay4gVGVhcnMgZG93biBhIHJvdXRlIGZyb20gdGhlIHJlcXVlc3RpbmcgcG9ydC5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgc291cmNlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgdmFyIHJldmVyc2VGbG93ID0gdGhpcy5jb250cm9sRmxvd3NbZmxvd10sIG9yaWdpbjtcbiAgaWYgKCFyZXZlcnNlRmxvdykge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVua25vd24gbWVzc2FnZSBzb3VyY2U6IFwiICsgZmxvdyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9yaWdpbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJldmVyc2VGbG93KTtcblxuICBpZiAodGhpcy5kZWxlZ2F0ZSAmJiByZXZlcnNlRmxvdyAhPT0gdGhpcy5kZWxlZ2F0ZSAmJlxuICAgICAgdGhpcy50b0RlbGVnYXRlW2Zsb3ddKSB7XG4gICAgLy8gU2hpcCBvZmYgdG8gdGhlIGRlbGVnZWVcbiAgICB0aGlzLmVtaXQodGhpcy5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBxdWlldDogdHJ1ZSxcbiAgICAgIGZsb3c6IGZsb3csXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2RlYnVnJykge1xuICAgIHRoaXMuZGVidWcucHJpbnQobWVzc2FnZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2xpbmsnKSB7XG4gICAgdGhpcy5jcmVhdGVMaW5rKG9yaWdpbiwgbWVzc2FnZS5uYW1lLCBtZXNzYWdlLnRvLCBtZXNzYWdlLm92ZXJyaWRlRGVzdCk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgdGhpcy5jcmVhdGVMaW5rKG9yaWdpbiwgbWVzc2FnZS5uYW1lLCBuZXcgTW9kdWxlSW50ZXJuYWwodGhpcykpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2RlbGVnYXRlJykge1xuICAgIC8vIEluaXRhdGUgRGVsZWdhdGlvbi5cbiAgICBpZiAodGhpcy5kZWxlZ2F0ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHJldmVyc2VGbG93O1xuICAgIH1cbiAgICB0aGlzLnRvRGVsZWdhdGVbbWVzc2FnZS5mbG93XSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdkZWxlZ2F0ZScpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ3Jlc291cmNlJykge1xuICAgIHRoaXMucmVzb3VyY2UuYWRkUmVzb2x2ZXIobWVzc2FnZS5hcmdzWzBdKTtcbiAgICB0aGlzLnJlc291cmNlLmFkZFJldHJpZXZlcihtZXNzYWdlLnNlcnZpY2UsIG1lc3NhZ2UuYXJnc1sxXSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnY29yZScpIHtcbiAgICBpZiAodGhpcy5jb3JlICYmIHJldmVyc2VGbG93ID09PSB0aGlzLmRlbGVnYXRlKSB7XG4gICAgICAobmV3IHRoaXMuY29yZSgpKS5vbk1lc3NhZ2Uob3JpZ2luLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldENvcmUoZnVuY3Rpb24gKHRvLCBjb3JlKSB7XG4gICAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodG8sIHtcbiAgICAgICAgdHlwZTogJ2NvcmUnLFxuICAgICAgICBjb3JlOiBjb3JlXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcywgcmV2ZXJzZUZsb3cpKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdjbG9zZScpIHtcbiAgICB0aGlzLmRlc3Ryb3kob3JpZ2luKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICd1bmxpbmsnKSB7XG4gICAgdGhpcy5yZW1vdmVMaW5rKG9yaWdpbiwgbWVzc2FnZS50byk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5rbm93biBjb250cm9sIHJlcXVlc3Q6IFwiICsgbWVzc2FnZS5yZXF1ZXN0KTtcbiAgICB0aGlzLmRlYnVnLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcG9ydCBtZXNzYWdlcyB3aWxsIGJlIHJvdXRlZCB0byBnaXZlbiBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFBvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwb3J0SWQgVGhlIElEIG9mIHRoZSBwb3J0LlxuICogQHJldHVybnMge2Zkb20uUG9ydH0gVGhlIHBvcnQgd2l0aCB0aGF0IElELlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5nZXRQb3J0ID0gZnVuY3Rpb24gKHBvcnRJZCkge1xuICByZXR1cm4gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24odGhpcy5jb250cm9sRmxvd3NbcG9ydElkXSk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIHBvcnQgd2l0aCB0aGUgaHViLlxuICogQG1ldGhvZCBzZXR1cFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHJlZ2lzdGVyLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gIGlmICghcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlJlZnVzaW5nIHRvIHNldHVwIHVuaWRlbnRpZmllZCBwb3J0IFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0pIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJSZWZ1c2luZyB0byByZS1pbml0aWFsaXplIHBvcnQgXCIgKyBwb3J0LmlkKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbCkge1xuICAgIHRoaXMub25jZSgnY29uZmlnJywgdGhpcy5zZXR1cC5iaW5kKHRoaXMsIHBvcnQpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmh1Yi5yZWdpc3Rlcihwb3J0KTtcbiAgdmFyIGZsb3cgPSB0aGlzLmh1Yi5pbnN0YWxsKHRoaXMsIHBvcnQuaWQsIFwiY29udHJvbFwiKSxcbiAgICByZXZlcnNlID0gdGhpcy5odWIuaW5zdGFsbChwb3J0LCB0aGlzLmlkLCBwb3J0LmlkKTtcbiAgdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0gPSBmbG93O1xuICB0aGlzLmRhdGFGbG93c1twb3J0LmlkXSA9IFtyZXZlcnNlXTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtmbG93XSA9IHJldmVyc2U7XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmV2ZXJzZV0gPSBmbG93O1xuXG4gIGlmIChwb3J0LmxpbmVhZ2UpIHtcbiAgICB0aGlzLmVtaXQoJ21vZHVsZUFkZCcsIHtpZDogcG9ydC5pZCwgbGluZWFnZTogcG9ydC5saW5lYWdlfSk7XG4gIH1cblxuICB0aGlzLmh1Yi5vbk1lc3NhZ2UoZmxvdywge1xuICAgIHR5cGU6ICdzZXR1cCcsXG4gICAgY2hhbm5lbDogcmV2ZXJzZSxcbiAgICBjb25maWc6IHRoaXMuY29uZmlnXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBUZWFyIGRvd24gYSBwb3J0IG9uIHRoZSBodWIsIG9yIHRoZSBmdWxsIGxvY2FsIGh1Yi5cbiAqIEBtZXRob2QgZGVzdHJveVxuICogQGFwcmFtIHtQb3J0P30gcG9ydCBUaGUgcG9ydCB0byB1bnJlZ2lzdGVyLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHBvcnQpIHtcbiAgaWYgKCFwb3J0KSB7XG4gICAgLy8gVGVhciBkb3duIGV2ZXJ5dGhpbmchXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNvbnRyb2xGbG93cywgZnVuY3Rpb24gKGZsb3cpIHtcbiAgICAgIHRoaXMuaHViLm9uTWVzc2FnZShmbG93LCB7XG4gICAgICAgIHR5cGU6ICdjbG9zZSdcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5odWIudGVhcmRvd24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmFibGUgdG8gdGVhciBkb3duIHVuaWRlbnRpZmllZCBwb3J0XCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwb3J0LmxpbmVhZ2UpIHtcbiAgICB0aGlzLmVtaXQoJ21vZHVsZVJlbW92ZScsIHtpZDogcG9ydC5pZCwgbGluZWFnZTogcG9ydC5saW5lYWdlfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHBvcnQuXG4gIGRlbGV0ZSB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXTtcblxuICAvLyBSZW1vdmUgYXNzb2NpYXRlZCBsaW5rcy5cbiAgdmFyIGk7XG4gIGZvciAoaSA9IHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgdGhpcy5yZW1vdmVMaW5rKHBvcnQsIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdW2ldKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcG9ydC5cbiAgZGVsZXRlIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdO1xuICB0aGlzLmh1Yi5kZXJlZ2lzdGVyKHBvcnQpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBsaW5rIGJldHdlZW4gdHdvIHBvcnRzLiAgTGlua3MgYXJlIGNyZWF0ZWQgaW4gYm90aCBkaXJlY3Rpb25zLFxuICogYW5kIGEgbWVzc2FnZSB3aXRoIHRob3NlIGNhcGFiaWxpdGllcyBpcyBzZW50IHRvIHRoZSBzb3VyY2UgcG9ydC5cbiAqIEBtZXRob2QgY3JlYXRlTGlua1xuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBzb3VyY2UgcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IGZvciBtZXNzYWdlcyBmcm9tIGRlc3RpbmF0aW9uIHRvIHBvcnQuXG4gKiBAcGFyYW0ge1BvcnR9IGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IFtkZXN0TmFtZV0gVGhlIGZsb3cgbmFtZSBmb3IgbWVzc2FnZXMgdG8gdGhlIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSBbdG9EZXN0XSBUZWxsIHRoZSBkZXN0aW5hdGlvbiBhYm91dCB0aGUgbGluay5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuY3JlYXRlTGluayA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lLCBkZXN0aW5hdGlvbiwgZGVzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRGVzdCkge1xuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbCkge1xuICAgIHRoaXMub25jZSgnY29uZmlnJyxcbiAgICAgIHRoaXMuY3JlYXRlTGluay5iaW5kKHRoaXMsIHBvcnQsIG5hbWUsIGRlc3RpbmF0aW9uLCBkZXN0TmFtZSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0pIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oJ1Vud2lsbGluZyB0byBsaW5rIGZyb20gbm9uLXJlZ2lzdGVyZWQgc291cmNlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdGhpcy5jb250cm9sRmxvd3NbZGVzdGluYXRpb24uaWRdKSB7XG4gICAgaWYgKHRoaXMuc2V0dXAoZGVzdGluYXRpb24pID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdDb3VsZCBub3QgZmluZCBvciBzZXR1cCBkZXN0aW5hdGlvbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgdmFyIHF1aWV0ID0gZGVzdGluYXRpb24ucXVpZXQgfHwgZmFsc2UsXG4gICAgb3V0Z29pbmdOYW1lID0gZGVzdE5hbWUgfHwgJ2RlZmF1bHQnLFxuICAgIG91dGdvaW5nID0gdGhpcy5odWIuaW5zdGFsbChwb3J0LCBkZXN0aW5hdGlvbi5pZCwgb3V0Z29pbmdOYW1lLCBxdWlldCksXG4gICAgcmV2ZXJzZTtcblxuICAvLyBSZWNvdmVyIHRoZSBwb3J0IHNvIHRoYXQgbGlzdGVuZXJzIGFyZSBpbnN0YWxsZWQuXG4gIGRlc3RpbmF0aW9uID0gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24ob3V0Z29pbmcpO1xuICByZXZlcnNlID0gdGhpcy5odWIuaW5zdGFsbChkZXN0aW5hdGlvbiwgcG9ydC5pZCwgbmFtZSwgcXVpZXQpO1xuXG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbb3V0Z29pbmddID0gcmV2ZXJzZTtcbiAgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0ucHVzaChvdXRnb2luZyk7XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmV2ZXJzZV0gPSBvdXRnb2luZztcbiAgdGhpcy5kYXRhRmxvd3NbZGVzdGluYXRpb24uaWRdLnB1c2gocmV2ZXJzZSk7XG5cbiAgaWYgKHRvRGVzdCkge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZSh0aGlzLmNvbnRyb2xGbG93c1tkZXN0aW5hdGlvbi5pZF0sIHtcbiAgICAgIHR5cGU6ICdjcmVhdGVMaW5rJyxcbiAgICAgIG5hbWU6IG91dGdvaW5nTmFtZSxcbiAgICAgIGNoYW5uZWw6IHJldmVyc2UsXG4gICAgICByZXZlcnNlOiBvdXRnb2luZ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZSh0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSwge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHR5cGU6ICdjcmVhdGVMaW5rJyxcbiAgICAgIGNoYW5uZWw6IG91dGdvaW5nLFxuICAgICAgcmV2ZXJzZTogcmV2ZXJzZVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGxpbmsgYmV0d2VlbiB0byBwb3J0cy4gVGhlIHJldmVyc2UgbGluayB3aWxsIGFsc28gYmUgcmVtb3ZlZC5cbiAqIEBtZXRob2QgcmVtb3ZlTGlua1xuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBzb3VyY2UgcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IHRvIGJlIHJlbW92ZWQuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUxpbmsgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSkge1xuICB2YXIgcmV2ZXJzZSA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKG5hbWUpLFxuICAgIHJmbG93ID0gdGhpcy5yZXZlcnNlRmxvd01hcFtuYW1lXSxcbiAgICBpO1xuXG4gIGlmICghcmV2ZXJzZSB8fCAhcmZsb3cpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJDb3VsZCBub3QgZmluZCBtZXRhZGF0YSB0byByZW1vdmUgZmxvdzogXCIgKyBuYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5odWIuZ2V0RGVzdGluYXRpb24ocmZsb3cpLmlkICE9PSBwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiU291cmNlIHBvcnQgZG9lcyBub3Qgb3duIGZsb3cgXCIgKyBuYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBOb3RpZnkgcG9ydHMgdGhhdCBhIGNoYW5uZWwgaXMgY2xvc2luZy5cbiAgaSA9IHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdO1xuICBpZiAoaSkge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZShpLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogbmFtZVxuICAgIH0pO1xuICB9XG4gIGkgPSB0aGlzLmNvbnRyb2xGbG93c1tyZXZlcnNlLmlkXTtcbiAgaWYgKGkpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoaSwge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6IHJmbG93XG4gICAgfSk7XG4gIH1cblxuICAvLyBVbmluc3RhbGwgdGhlIGNoYW5uZWwuXG4gIHRoaXMuaHViLnVuaW5zdGFsbChwb3J0LCBuYW1lKTtcbiAgdGhpcy5odWIudW5pbnN0YWxsKHJldmVyc2UsIHJmbG93KTtcblxuICBkZWxldGUgdGhpcy5yZXZlcnNlRmxvd01hcFtuYW1lXTtcbiAgZGVsZXRlIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmZsb3ddO1xuICB0aGlzLmZvcmdldEZsb3cocmV2ZXJzZS5pZCwgcmZsb3cpO1xuICB0aGlzLmZvcmdldEZsb3cocG9ydC5pZCwgbmFtZSk7XG59O1xuXG4vKipcbiAqIEZvcmdldCB0aGUgZmxvdyBmcm9tIGlkIHdpdGggYSBnaXZlbiBuYW1lLlxuICogQG1ldGhvZCBmb3JnZXRGbG93XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBwb3J0IElEIG9mIHRoZSBzb3VyY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyBuYW1lLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5mb3JnZXRGbG93ID0gZnVuY3Rpb24gKGlkLCBuYW1lKSB7XG4gIHZhciBpO1xuICBpZiAodGhpcy5kYXRhRmxvd3NbaWRdKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGF0YUZsb3dzW2lkXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuZGF0YUZsb3dzW2lkXVtpXSA9PT0gbmFtZSkge1xuICAgICAgICB0aGlzLmRhdGFGbG93c1tpZF0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb3JlIGZyZWVkb20uanMgQVBJIGFjdGl2ZSBvbiB0aGUgY3VycmVudCBodWIuXG4gKiBAbWV0aG9kIGdldENvcmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayB0byBmaXJlIHdpdGggdGhlIGNvcmUgb2JqZWN0LlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5nZXRDb3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gIGlmICh0aGlzLmNvcmUpIHtcbiAgICBjYih0aGlzLmNvcmUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXBpLmdldENvcmUoJ2NvcmUnLCB0aGlzKS50aGVuKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICB0aGlzLmNvcmUgPSBjb3JlLmluc3Q7XG4gICAgICBjYih0aGlzLmNvcmUpO1xuICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2IodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9wcm92aWRlcicpO1xuXG4vKipcbiAqIFRoZSBleHRlcm5hbCBQb3J0IGZhY2Ugb2YgYSBtb2R1bGUgb24gYSBodWIuXG4gKiBAY2xhc3MgTW9kdWxlXG4gKiBAZXh0ZW5kcyBQb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3RVUkwgVGhlIG1hbmlmZXN0IHRoaXMgbW9kdWxlIGxvYWRzLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gY3JlYXRvciBUaGUgbGluZWFnZSBvZiBjcmVhdGlvbiBmb3IgdGhpcyBtb2R1bGUuXG4gKiBAcGFyYW0ge1BvbGljeX0gUG9saWN5IFRoZSBwb2xpY3kgbG9hZGVyIGZvciBkZXBlbmRlbmNpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1vZHVsZSA9IGZ1bmN0aW9uIChtYW5pZmVzdFVSTCwgbWFuaWZlc3QsIGNyZWF0b3IsIHBvbGljeSkge1xuICB0aGlzLmFwaSA9IHBvbGljeS5hcGk7XG4gIHRoaXMucG9saWN5ID0gcG9saWN5O1xuICB0aGlzLnJlc291cmNlID0gcG9saWN5LnJlc291cmNlO1xuICB0aGlzLmRlYnVnID0gcG9saWN5LmRlYnVnO1xuXG4gIHRoaXMuY29uZmlnID0ge307XG5cbiAgdGhpcy5pZCA9IG1hbmlmZXN0VVJMICsgTWF0aC5yYW5kb20oKTtcbiAgdGhpcy5tYW5pZmVzdElkID0gbWFuaWZlc3RVUkw7XG4gIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgdGhpcy5saW5lYWdlID0gW3RoaXMubWFuaWZlc3RJZF0uY29uY2F0KGNyZWF0b3IpO1xuXG4gIHRoaXMucXVpZXQgPSB0aGlzLm1hbmlmZXN0LnF1aWV0IHx8IGZhbHNlO1xuXG4gIHRoaXMuZXh0ZXJuYWxQb3J0TWFwID0ge307XG4gIHRoaXMuaW50ZXJuYWxQb3J0TWFwID0ge307XG4gIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMgPSBbXTtcbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgYSBtZXNzYWdlIGZvciB0aGUgTW9kdWxlLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBvcmlnaW4gb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSByZWNlaXZlZC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3NldHVwJykge1xuICAgICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIG1lc3NhZ2UuY29uZmlnKTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdDb3JlIFByb3ZpZGVyJyxcbiAgICAgICAgcmVxdWVzdDogJ2NvcmUnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NyZWF0ZUxpbmsnICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5kZWJ1Zy5kZWJ1Zyh0aGlzICsgJ2dvdCBjcmVhdGUgbGluayBmb3IgJyArIG1lc3NhZ2UubmFtZSk7XG4gICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbXNnID0ge1xuICAgICAgICB0eXBlOiAnZGVmYXVsdCBjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcyAmJlxuICAgICAgICAgIHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzW21lc3NhZ2UubmFtZV0pIHtcbiAgICAgICAgbXNnLmFwaSA9IHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzW21lc3NhZ2UubmFtZV0uYXBpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KG1lc3NhZ2UuY2hhbm5lbCwgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29yZSkge1xuICAgICAgdGhpcy5jb3JlID0gbmV3IG1lc3NhZ2UuY29yZSgpO1xuICAgICAgdGhpcy5lbWl0KCdjb3JlJywgbWVzc2FnZS5jb3JlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgLy8gQ2xvc2luZyBjaGFubmVsLlxuICAgICAgaWYgKCFtZXNzYWdlLmNoYW5uZWwgfHwgbWVzc2FnZS5jaGFubmVsID09PSAnY29udHJvbCcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJGbG93KG1lc3NhZ2UuY2hhbm5lbCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKGZsb3csIG1lc3NhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoKHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddID09PSBmYWxzZSB8fFxuICAgICAgICAhdGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10pICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5kZWJ1Zy5kZWJ1Zyh0aGlzICsgJ2hhbmRsaW5nIGNoYW5uZWwgYW5ub3VuY2VtZW50IGZvciAnICsgZmxvdyk7XG4gICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID0gZmFsc2U7XG5cbiAgICAgICAgLy8gTmV3IGluY29taW5nIGNvbm5lY3Rpb24gYXR0ZW1wdHMgc2hvdWxkIGdldCByb3V0ZWQgdG8gbW9kSW50ZXJuYWwuXG4gICAgICAgIGlmICh0aGlzLm1hbmlmZXN0LnByb3ZpZGVzICYmIHRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgICAgIHR5cGU6ICdDb25uZWN0aW9uJyxcbiAgICAgICAgICAgIGNoYW5uZWw6IGZsb3csXG4gICAgICAgICAgICBhcGk6IG1lc3NhZ2UuYXBpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYW5pZmVzdC5wcm92aWRlcykge1xuICAgICAgICAgIHRoaXMub25jZSgnbW9kSW50ZXJuYWwnLCBmdW5jdGlvbiAoZmxvdywgYXBpKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ0Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgICBjaGFubmVsOiBmbG93LFxuICAgICAgICAgICAgICBhcGk6IGFwaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UuYXBpKSk7XG4gICAgICAgIC8vIEZpcnN0IGNvbm5lY3Rpb24gcmV0YWlucyBsZWdhY3kgbWFwcGluZyBhcyAnZGVmYXVsdCcuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZXh0ZXJuYWxQb3J0TWFwWydkZWZhdWx0J10gJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbJ2RlZmF1bHQnXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgICAgICB0aGlzLm9uY2UoJ2ludGVybmFsQ2hhbm5lbFJlYWR5JywgZnVuY3Rpb24gKGZsb3cpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID0gdGhpcy5pbnRlcm5hbFBvcnRNYXBbJ2RlZmF1bHQnXTtcbiAgICAgICAgICB9LmJpbmQodGhpcywgZmxvdykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCd3YWl0aW5nIG9uIGludGVybmFsIGNoYW5uZWwgZm9yIG1zZycpO1xuICAgICAgICB0aGlzLm9uY2UoJ2ludGVybmFsQ2hhbm5lbFJlYWR5JywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSkge1xuICAgICAgICB0aGlzLmRlYnVnLmVycm9yKCdVbmV4cGVjdGVkIG1lc3NhZ2UgZnJvbSAnICsgZmxvdyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10sIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBhZnRlciBhIGZsb3cgd2hpY2ggaXMgbm8gbG9uZ2VyIHVzZWQgLyBuZWVkZWQuXG4gKiBAbWV0aG9kIGRlcmVnaXN0ZXJGTG93XG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZmxvdyB0byByZW1vdmUgbWFwcGluZ3MgZm9yLlxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcm5hbCBJZiB0aGUgZmxvdyBuYW1lIGlzIHRoZSBpbnRlcm5hbCBpZGVudGlmaWVyLlxuICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGZsb3cgd2FzIHN1Y2Nlc3NmdWxseSBkZXJlZ2lzdGVyZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmRlcmVnaXN0ZXJGbG93ID0gZnVuY3Rpb24gKGZsb3csIGludGVybmFsKSB7XG4gIHZhciBrZXksXG4gICAgbWFwID0gaW50ZXJuYWwgPyB0aGlzLmludGVybmFsUG9ydE1hcCA6IHRoaXMuZXh0ZXJuYWxQb3J0TWFwO1xuICAvLyBUT0RPOiB0aGlzIGlzIGluZWZmaWNpZW50LCBidXQgc2VlbXMgbGVzcyBjb25mdXNpbmcgdGhhbiBhIDNyZFxuICAvLyByZXZlcnNlIGxvb2t1cCBtYXAuXG4gIGZvciAoa2V5IGluIG1hcCkge1xuICAgIGlmIChtYXBba2V5XSA9PT0gZmxvdykge1xuICAgICAgaWYgKGludGVybmFsKSB7XG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgdHlwZTogJ0NoYW5uZWwgVGVhcmRvd24nLFxuICAgICAgICAgIHJlcXVlc3Q6ICd1bmxpbmsnLFxuICAgICAgICAgIHRvOiB0aGlzLmV4dGVybmFsUG9ydE1hcFtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgIGNoYW5uZWw6IHRoaXMuaW50ZXJuYWxQb3J0TWFwW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5leHRlcm5hbFBvcnRNYXBba2V5XTtcbiAgICAgIGRlbGV0ZSB0aGlzLmludGVybmFsUG9ydE1hcFtrZXldO1xuXG4gICAgICAvLyBXaGVuIHRoZXJlIGFyZSBzdGlsbCBub24tZGVwZW5kYW50IGNoYW5uZWxzLCBrZWVwIHJ1bm5pbmdcbiAgICAgIGZvciAoa2V5IGluIHRoaXMuZXh0ZXJuYWxQb3J0TWFwKSB7XG4gICAgICAgIGlmICh0aGlzLmV4dGVybmFsUG9ydE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2Ugc2h1dCBkb3duIHRoZSBtb2R1bGUuXG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gc3RhcnQgdGhlIG1vZHVsZSBvbmNlIHRoZSByZW1vdGUgZnJlZWRvbSBjb250ZXh0XG4gKiBleGlzdHMuXG4gKiBAbWV0aG9kIHN0YXJ0XG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgUG9ydDtcbiAgaWYgKHRoaXMuc3RhcnRlZCB8fCB0aGlzLnBvcnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmxvYWRMaW5rcygpO1xuICAgIFBvcnQgPSB0aGlzLmNvbmZpZy5wb3J0VHlwZTtcbiAgICB0aGlzLnBvcnQgPSBuZXcgUG9ydCh0aGlzLm1hbmlmZXN0Lm5hbWUsIHRoaXMucmVzb3VyY2UpO1xuICAgIC8vIExpc3RlbiB0byBhbGwgcG9ydCBtZXNzYWdlcy5cbiAgICB0aGlzLnBvcnQub24odGhpcy5lbWl0TWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBvcnQuYWRkRXJyb3JIYW5kbGVyKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignTW9kdWxlIEZhaWxlZCcsIGVycik7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICByZXF1ZXN0OiAnY2xvc2UnXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIC8vIFRlbGwgdGhlIGxvY2FsIHBvcnQgdG8gYXNrIHVzIGZvciBoZWxwLlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICBjaGFubmVsOiAnY29udHJvbCcsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnXG4gICAgfSk7XG5cbiAgICAvLyBUZWxsIHRoZSByZW1vdGUgbG9jYXRpb24gdG8gZGVsZWdhdGUgZGVidWdnaW5nLlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnUmVkaXJlY3QnLFxuICAgICAgcmVxdWVzdDogJ2RlbGVnYXRlJyxcbiAgICAgIGZsb3c6ICdkZWJ1ZydcbiAgICB9KTtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ1JlZGlyZWN0JyxcbiAgICAgIHJlcXVlc3Q6ICdkZWxlZ2F0ZScsXG4gICAgICBmbG93OiAnY29yZSdcbiAgICB9KTtcblxuICAgIC8vIFRlbGwgdGhlIGNvbnRhaW5lciB0byBpbnN0YW50aWF0ZSB0aGUgY291bnRlcnBhcnQgdG8gdGhpcyBleHRlcm5hbCB2aWV3LlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnRW52aXJvbm1lbnQgQ29uZmlndXJhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnZW52aXJvbm1lbnQnLFxuICAgICAgbmFtZTogJ01vZEludGVybmFsJ1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIG1vZHVsZSB3aGVuIGl0IGlzIG5vIGxvbmdlciBuZWVkZWQsIGFuZCB0ZWFyLWRvd24gc3RhdGUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICBpZiAodGhpcy5wb3J0KSB7XG4gICAgdGhpcy5wb3J0Lm9mZigpO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogJ2NvbnRyb2wnXG4gICAgfSk7XG4gICAgdGhpcy5wb3J0LnN0b3AoKTtcbiAgICBkZWxldGUgdGhpcy5wb3J0O1xuICB9XG4gIGRlbGV0ZSB0aGlzLnBvbGljeTtcbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRleHR1YWwgRGVzY3JpcHRpb24gb2YgdGhlIFBvcnRcbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW01vZHVsZSBcIiArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiXVwiO1xufTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbWVzc2FnZXMgYXMgdGhleSBhcnJpdmUgZnJvbSB0aGUgbW9kdWxlLFxuICogbWFwcGluZyB0aGVtIGJldHdlZW4gaW50ZXJuYWwgYW5kIGV4dGVybmFsIGZsb3cgbmFtZXMuXG4gKiBAbWV0aG9kIGVtaXRNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZGVzdGluYXRpb24gdGhlIG1vZHVsZSB3YW50cyB0byBzZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuZW1pdE1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSkge1xuICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbbmFtZV0gPT09IGZhbHNlICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW25hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdCgnaW50ZXJuYWxDaGFubmVsUmVhZHknKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVGVybWluYXRlIGRlYnVnIHJlZGlyZWN0aW9uIHJlcXVlc3RlZCBpbiBzdGFydCgpLlxuICBpZiAobmFtZSA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKG1lc3NhZ2UuZmxvdyA9PT0gJ2RlYnVnJyAmJiBtZXNzYWdlLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuZGVidWcuZm9ybWF0KG1lc3NhZ2UubWVzc2FnZS5zZXZlcml0eSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2Uuc291cmNlIHx8IHRoaXMudG9TdHJpbmcoKSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UubXNnKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuZmxvdyA9PT0gJ2NvcmUnICYmIG1lc3NhZ2UubWVzc2FnZSkge1xuICAgICAgaWYgKCF0aGlzLmNvcmUpIHtcbiAgICAgICAgdGhpcy5vbmNlKCdjb3JlJywgdGhpcy5lbWl0TWVzc2FnZS5iaW5kKHRoaXMsIG5hbWUsIG1lc3NhZ2UpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAncmVnaXN0ZXInIHx8XG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdyZXF1aXJlJykge1xuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UucmVwbHkgPSB0aGlzLnBvcnQub25NZXNzYWdlLmJpbmQodGhpcy5wb3J0LCAnY29udHJvbCcpO1xuICAgICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFttZXNzYWdlLm1lc3NhZ2UuaWRdID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUub25NZXNzYWdlKHRoaXMsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLm5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgIXRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICAgIHRoaXMubW9kSW50ZXJuYWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgdHlwZTogJ0luaXRpYWxpemF0aW9uJyxcbiAgICAgICAgaWQ6IHRoaXMubWFuaWZlc3RJZCxcbiAgICAgICAgYXBwSWQ6IHRoaXMuaWQsXG4gICAgICAgIG1hbmlmZXN0OiB0aGlzLm1hbmlmZXN0LFxuICAgICAgICBsaW5lYWdlOiB0aGlzLmxpbmVhZ2UsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ21vZEludGVybmFsJyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJykge1xuICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UobWVzc2FnZS5jaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ2ludGVybmFsQ2hhbm5lbFJlYWR5Jyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckZsb3cobWVzc2FnZS5jaGFubmVsLCB0cnVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZWFkeScgJiYgIXRoaXMuc3RhcnRlZCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVzb2x2ZScpIHtcbiAgICB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIG1lc3NhZ2UuZGF0YSkudGhlbihmdW5jdGlvbiAoaWQsIGRhdGEpIHtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICB0eXBlOiAncmVzb2x2ZS5yZXNwb25zZScsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMsIG1lc3NhZ2UuaWQpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0Vycm9yIFJlc29sdmluZyBVUkwgZm9yIE1vZHVsZS4nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsUG9ydE1hcFtuYW1lXSwgbWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBkeW5hbWljIGRlcGVuZGVuY3kgb24gYW5vdGhlciBtb2R1bGUuXG4gKiBAbWV0aG9kIHJlcXVpcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBkZXBlbmRlbmN5LlxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBVUkwgb2YgdGhlIGRlcGVuZGVuY3kgdG8gYWRkLlxuICovXG5Nb2R1bGUucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbiAobmFtZSwgbWFuaWZlc3QpIHtcbiAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICB0aGlzLmFkZERlcGVuZGVuY3kobWFuaWZlc3QsIG5hbWUpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgIHR5cGU6ICdyZXF1aXJlLmZhaWx1cmUnLFxuICAgICAgaWQ6IG5hbWUsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2VcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGUgbW9kdWxlJ3MgZGVwZW5kZW5jeSB0cmVlXG4gKiBAbWV0aG9kIGFkZERlcGVuZGVuY3lcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIG1hbmlmZXN0IFVSTCBvZiB0aGUgZGVwZW5kZW5jeVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGV4cG9zZWQgbmFtZSBvZiB0aGUgbW9kdWxlLlxuICogQHJldHVybnMge01vZHVsZX0gVGhlIGNyZWF0ZWQgZGVwZW5kZW50IG1vZHVsZS5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuYWRkRGVwZW5kZW5jeSA9IGZ1bmN0aW9uICh1cmwsIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb3VyY2UuZ2V0KHRoaXMubWFuaWZlc3RJZCwgdXJsKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvbGljeS5nZXQodGhpcy5saW5lYWdlLCB1cmwpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgICAudGhlbihmdW5jdGlvbiAoZGVwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUVudihuYW1lLCBkZXAubWFuaWZlc3QpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogJ0xpbmsgdG8gJyArIG5hbWUsXG4gICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgb3ZlcnJpZGVEZXN0OiBuYW1lICsgJy4nICsgdGhpcy5pZCxcbiAgICAgICAgdG86IGRlcFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVwO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKHRoaXMudG9TdHJpbmcoKSArICcgZmFpbGVkIHRvIGxvYWQgZGVwOiAnLCBuYW1lLCBlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgdGhlIGV4dGVybmFsIHJvdXRlcyB1c2VkIGJ5IHRoaXMgbW9kdWxlLlxuICogQG1ldGhvZCBsb2FkTGlua3NcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUubG9hZExpbmtzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgY2hhbm5lbHMgPSBbJ2RlZmF1bHQnXSwgbmFtZSwgZGVwO1xuXG4gIGlmICh0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG5hbWUgPSB0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zW2ldO1xuICAgICAgaWYgKGNoYW5uZWxzLmluZGV4T2YobmFtZSkgPCAwICYmIG5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCkge1xuICAgICAgICBjaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmRlcGVuZGFudENoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIGRlcCA9IG5ldyBQcm92aWRlcih0aGlzLmFwaS5nZXQobmFtZSkuZGVmaW5pdGlvbiwgdGhpcy5kZWJ1Zyk7XG4gICAgICAgIHRoaXMuYXBpLnByb3ZpZGVDb3JlKG5hbWUsIGRlcCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgICB0eXBlOiAnQ29yZSBMaW5rIHRvICcgKyBuYW1lLFxuICAgICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHRvOiBkZXBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcykge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkZXNjLCBuYW1lKSB7XG4gICAgICBpZiAoY2hhbm5lbHMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkZERlcGVuZGVuY3koZGVzYy51cmwsIG5hbWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgLy8gTm90ZSB0aGF0IG1lc3NhZ2VzIGNhbiBiZSBzeW5jaHJvbm91cywgc28gc29tZSBwb3J0cyBtYXkgYWxyZWFkeSBiZSBib3VuZC5cbiAgZm9yIChpID0gMDsgaSA8IGNoYW5uZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dID0gdGhpcy5leHRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dIHx8IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgbW9kdWxlIGVudmlyb25tZW50IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgYSBkZXBlbmRlbnQgbWFuaWZlc3QuXG4gKiBAbWV0aG9kIHVwZGF0ZUVudlxuICogQHBhcmFtIHtTdHJpbmd9IGRlcCBUaGUgZGVwZW5kZW5jeVxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgZGVwZW5kZW5jeVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnVwZGF0ZUVudiA9IGZ1bmN0aW9uIChkZXAsIG1hbmlmZXN0KSB7XG4gIGlmICghbWFuaWZlc3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aGlzLm1vZEludGVybmFsKSB7XG4gICAgdGhpcy5vbmNlKCdtb2RJbnRlcm5hbCcsIHRoaXMudXBkYXRlRW52LmJpbmQodGhpcywgZGVwLCBtYW5pZmVzdCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZXRhZGF0YTtcblxuICAvLyBEZWNpZGUgaWYvd2hhdCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSBleHBvcnRlZC5cbiAgLy8gS2VlcCBpbiBzeW5jIHdpdGggTW9kdWxlSW50ZXJuYWwudXBkYXRlRW52XG4gIG1ldGFkYXRhID0ge1xuICAgIG5hbWU6IG1hbmlmZXN0Lm5hbWUsXG4gICAgaWNvbjogbWFuaWZlc3QuaWNvbixcbiAgICBkZXNjcmlwdGlvbjogbWFuaWZlc3QuZGVzY3JpcHRpb24sXG4gICAgYXBpOiBtYW5pZmVzdC5hcGlcbiAgfTtcblxuICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICB0eXBlOiAnbWFuaWZlc3QnLFxuICAgIG5hbWU6IGRlcCxcbiAgICBtYW5pZmVzdDogbWV0YWRhdGFcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcbnZhciBQcm94eUJpbmRlciA9IHJlcXVpcmUoJy4vcHJveHliaW5kZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIGludGVybmFsIGxvZ2ljIGZvciBtb2R1bGUgc2V0dXAsIHdoaWNoIG1ha2VzIHN1cmUgdGhlIHB1YmxpY1xuICogZmFjaW5nIGV4cG9ydHMgaGF2ZSBhcHByb3ByaWF0ZSBwcm9wZXJ0aWVzLCBhbmQgbG9hZCB1c2VyIHNjcmlwdHMuXG4gKiBAY2xhc3MgTW9kdWxlSW50ZXJuYWxcbiAqIEBleHRlbmRzIFBvcnRcbiAqIEBwYXJhbSB7UG9ydH0gbWFuYWdlciBUaGUgbWFuYWdlciBpbiB0aGlzIG1vZHVsZSB0byB1c2UgZm9yIHJvdXRpbmcgc2V0dXAuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1vZHVsZUludGVybmFsID0gZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgdGhpcy5kZWJ1ZyA9IG1hbmFnZXIuZGVidWc7XG4gIHRoaXMuYmluZGVyID0gbmV3IFByb3h5QmluZGVyKHRoaXMubWFuYWdlcik7XG4gIHRoaXMuYXBpID0gdGhpcy5tYW5hZ2VyLmFwaTtcbiAgdGhpcy5tYW5pZmVzdHMgPSB7fTtcbiAgdGhpcy5wcm92aWRlcnMgPSB7fTtcblxuICB0aGlzLmlkID0gJ01vZHVsZUludGVybmFsJztcbiAgdGhpcy5wZW5kaW5nUG9ydHMgPSAwO1xuICB0aGlzLnJlcXVlc3RzID0ge307XG4gIHRoaXMudW5ib3VuZFBvcnRzID0ge307XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIE1lc3NhZ2UgaGFuZGxlciBmb3IgdGhpcyBwb3J0LlxuICogVGhpcyBwb3J0IG9ubHkgaGFuZGxlcyB0d28gbWVzc2FnZXM6XG4gKiBUaGUgZmlyc3QgaXMgaXRzIHNldHVwIGZyb20gdGhlIG1hbmFnZXIsIHdoaWNoIGl0IHVzZXMgZm9yIGNvbmZpZ3VyYXRpb24uXG4gKiBUaGUgc2Vjb25kIGlzIGZyb20gdGhlIG1vZHVsZSBjb250cm9sbGVyIChmZG9tLnBvcnQuTW9kdWxlKSwgd2hpY2ggcHJvdmlkZXNcbiAqIHRoZSBtYW5pZmVzdCBpbmZvIGZvciB0aGUgbW9kdWxlLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBkZXRpbmF0aW9uIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIG1lc3NhZ2UuY29uZmlnKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmICF0aGlzLmFwcElkKSB7XG4gICAgLy8gUmVjb3ZlciB0aGUgSUQgb2YgdGhpcyBtb2R1bGU6XG4gICAgdGhpcy5wb3J0ID0gdGhpcy5tYW5hZ2VyLmh1Yi5nZXREZXN0aW5hdGlvbihtZXNzYWdlLmNoYW5uZWwpO1xuICAgIHRoaXMuZXh0ZXJuYWxDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuYXBwSWQgPSBtZXNzYWdlLmFwcElkO1xuICAgIHRoaXMubGluZWFnZSA9IG1lc3NhZ2UubGluZWFnZTtcblxuICAgIHZhciBvYmplY3RzID0gdGhpcy5tYXBQcm94aWVzKG1lc3NhZ2UubWFuaWZlc3QpO1xuXG4gICAgdGhpcy5nZW5lcmF0ZUVudihtZXNzYWdlLm1hbmlmZXN0LCBvYmplY3RzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRMaW5rcyhvYmplY3RzKTtcbiAgICB9LmJpbmQodGhpcykpLnRoZW4odGhpcy5sb2FkU2NyaXB0cy5iaW5kKHRoaXMsIG1lc3NhZ2UuaWQsXG4gICAgICAgIG1lc3NhZ2UubWFuaWZlc3QuYXBwLnNjcmlwdCkpLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignQ291bGQgbm90IHNldCB1cCBtb2R1bGUgJyArIHRoaXMuYXBwSWQgKyAnOiAnLCBlcnIpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3Jlc29sdmUucmVzcG9uc2UnICYmXG4gICAgICAgICAgICAgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXSkge1xuICAgIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF0obWVzc2FnZS5kYXRhKTtcbiAgICBkZWxldGUgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVxdWlyZS5mYWlsdXJlJyAmJlxuICAgICAgICAgICAgIHRoaXMudW5ib3VuZFBvcnRzW21lc3NhZ2UuaWRdKSB7XG4gICAgdGhpcy51bmJvdW5kUG9ydHNbbWVzc2FnZS5pZF0uY2FsbGJhY2sodW5kZWZpbmVkLCBtZXNzYWdlLmVycm9yKTtcbiAgICBkZWxldGUgdGhpcy51bmJvdW5kUG9ydHNbbWVzc2FnZS5pZF07XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ21hbmlmZXN0Jykge1xuICAgIHRoaXMuZW1pdCgnbWFuaWZlc3QnLCBtZXNzYWdlKTtcbiAgICB0aGlzLnVwZGF0ZU1hbmlmZXN0KG1lc3NhZ2UubmFtZSwgbWVzc2FnZS5tYW5pZmVzdCk7XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ0Nvbm5lY3Rpb24nKSB7XG4gICAgLy8gTXVsdGlwbGUgY29ubmVjdGlvbnMgY2FuIGJlIG1hZGUgdG8gdGhlIGRlZmF1bHQgcHJvdmlkZXIuXG4gICAgaWYgKG1lc3NhZ2UuYXBpICYmIHRoaXMucHJvdmlkZXJzW21lc3NhZ2UuYXBpXSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsodGhpcy5wcm92aWRlcnNbbWVzc2FnZS5hcGldLCBtZXNzYWdlLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydCwgbWVzc2FnZS5jaGFubmVsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdFBvcnQgJiZcbiAgICAgICAgICAgICAgIChtZXNzYWdlLmFwaSA9PT0gdGhpcy5kZWZhdWx0UG9ydC5hcGkgfHwgIW1lc3NhZ2UuYXBpKSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsodGhpcy5kZWZhdWx0UG9ydCwgbWVzc2FnZS5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0LCBtZXNzYWdlLmNoYW5uZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBhIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbRW52aXJvbm1lbnQgSGVscGVyXVwiO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBleHRlcm5hbHkgdmlzaXNibGUgbmFtZXNwYWNlXG4gKiBAbWV0aG9kIGdlbmVyYXRlRW52XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBtb2R1bGUuXG4gKiBAcGFyYW0ge09iamVjdFtdfSBpdGVtcyBPdGhlciBpbnRlcmZhY2VzIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIHdoZW4gdGhlIGV4dGVybmFsIG5hbWVzcGFjZSBpcyB2aXNpYmxlLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmdlbmVyYXRlRW52ID0gZnVuY3Rpb24gKG1hbmlmZXN0LCBpdGVtcykge1xuICByZXR1cm4gdGhpcy5iaW5kZXIuYmluZERlZmF1bHQodGhpcy5wb3J0LCB0aGlzLmFwaSwgbWFuaWZlc3QsIHRydWUpLnRoZW4oXG4gICAgZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIGJpbmRpbmcucG9ydC5hcGkgPSBiaW5kaW5nLmV4dGVybmFsLmFwaTtcbiAgICAgIHRoaXMuZGVmYXVsdFBvcnQgPSBiaW5kaW5nLnBvcnQ7XG4gICAgICBpZiAoYmluZGluZy5leHRlcm5hbC5hcGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGl0ZW1zW2ldLm5hbWUgPT09IGJpbmRpbmcuZXh0ZXJuYWwuYXBpICYmIGl0ZW1zW2ldLmRlZi5wcm92aWRlcykge1xuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbSA9IGJpbmRpbmcuZXh0ZXJuYWw7XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGFuIHVudXNlZCBjaGFubmVsIElEIGZvciBjYWxsYmFjaywgYW5kIG9uY2UgaW5mb3JtYXRpb25cbiAqIGFib3V0IHRoZSBjaGFubmVsIGlzIGtub3duLCBjYWxsIHRoZSBoYW5kbGVyIHdpdGggdGhhdCBpbmZvcm1hdGlvbi5cbiAqIEBtZXRob2QgcmVnaXN0ZXJJZFxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgcHJlZmVycmVkIEFQSSB0byB1c2UgZm9yIHRoZSBuZXcgY2hhbm5lbC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGNhbGwgb25jZSBjaGFubmVsIHJlYWR5XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgYWxsb2NhdGVkIGNoYW5uZWwgbmFtZS5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnJlZ2lzdGVySWQgPSBmdW5jdGlvbiAoYXBpLCBjYWxsYmFjaykge1xuICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gIHRoaXMudW5ib3VuZFBvcnRzW2lkXSA9IHtcbiAgICBuYW1lOiBhcGksXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gIH07XG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogQXR0YWNoIGEgcHJveHkgdG8gdGhlIGV4dGVybmFsbHkgdmlzaWJsZSBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGF0dGFjaFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3h5LlxuICogQHBhcmFtIHtCb29sZWFufSBwcm92aWRlcyBJZiB0aGlzIHByb3h5IGlzIGEgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1Byb3h5SW50ZXJmYWNlfSBwcm94eSBUaGUgcHJveHkgdG8gYXR0YWNoLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgQVBJIHRoZSBwcm94eSBpbXBsZW1lbnRzLlxuICogQHByaXZhdGUuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAobmFtZSwgcHJvdmlkZXMsIHByb3h5KSB7XG4gIHZhciBleHAgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbTtcblxuICBpZiAocHJvdmlkZXMpIHtcbiAgICB0aGlzLnByb3ZpZGVyc1tuYW1lXSA9IHByb3h5LnBvcnQ7XG4gIH1cblxuICBpZiAoIWV4cFtuYW1lXSkge1xuICAgIGV4cFtuYW1lXSA9IHByb3h5LmV4dGVybmFsO1xuICAgIGlmICh0aGlzLm1hbmlmZXN0c1tuYW1lXSkge1xuICAgICAgZXhwW25hbWVdLm1hbmlmZXN0ID0gdGhpcy5tYW5pZmVzdHNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgdGhpcy5wZW5kaW5nUG9ydHMgLT0gMTtcbiAgaWYgKHRoaXMucGVuZGluZ1BvcnRzID09PSAwKSB7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9XG5cbiAgcmV0dXJuIGV4cFtuYW1lXTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBhIHNldCBvZiBwcm94eSBpbnRlcmZhY2VzLCBhbmQgYmluZCB0aGVtIHRvIHRoZSBleHRlcm5hbFxuICogbmFtZXNwYWNlLlxuICogQG1ldGhvZCBsb2FkTGlua3NcbiAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zIERlc2NyaXB0b3JzIG9mIHRoZSBwcm94eSBwb3J0cyB0byBsb2FkLlxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciB3aGVuIGFsbCBsaW5rcyBhcmUgbG9hZGVkLlxuICovXG4vL1RPRE8od2lsbHNjb3R0KTogcHJvbWlzZSBzaG91bGQgYmUgY2hhaW5lZCwgcmF0aGVyIHRoYW4gZ29pbmcgdGhyb3VnaCBldmVudHMuXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubG9hZExpbmtzID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIHZhciBpLCBwcm94eSwgcHJvdmlkZXIsIGNvcmUsXG4gICAgbWFuaWZlc3RQcmVkaWNhdGUgPSBmdW5jdGlvbiAobmFtZSwgZmxvdywgbXNnKSB7XG4gICAgICByZXR1cm4gZmxvdyA9PT0gJ21hbmlmZXN0JyAmJiBtc2cubmFtZSA9PT0gbmFtZTtcbiAgICB9LFxuICAgIG9uTWFuaWZlc3QgPSBmdW5jdGlvbiAoaXRlbSwgbXNnKSB7XG4gICAgICB2YXIgZGVmaW5pdGlvbiA9IHtcbiAgICAgICAgbmFtZTogaXRlbS5hcGlcbiAgICAgIH07XG4gICAgICBpZiAoIW1zZy5tYW5pZmVzdC5hcGkgfHwgIW1zZy5tYW5pZmVzdC5hcGlbaXRlbS5hcGldKSB7XG4gICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24gPSBtc2cubWFuaWZlc3QuYXBpW2l0ZW0uYXBpXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHRoaXMucG9ydCwgaXRlbS5uYW1lLCBkZWZpbml0aW9uKS50aGVuKFxuICAgICAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsIGl0ZW0ubmFtZSwgZmFsc2UpXG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICBwcm9taXNlID0gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHJlc29sdmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGl0ZW1zW2ldLmFwaSAmJiAhaXRlbXNbaV0uZGVmKSB7XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdHNbaXRlbXNbaV0ubmFtZV0pIHtcbiAgICAgICAgb25NYW5pZmVzdChpdGVtc1tpXSwge1xuICAgICAgICAgIG1hbmlmZXN0OiB0aGlzLm1hbmlmZXN0c1tpdGVtc1tpXS5uYW1lXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25jZShtYW5pZmVzdFByZWRpY2F0ZS5iaW5kKHt9LCBpdGVtc1tpXS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgIG9uTWFuaWZlc3QuYmluZCh0aGlzLCBpdGVtc1tpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIGl0ZW1zW2ldLm5hbWUsIGl0ZW1zW2ldLmRlZikudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5kZWYucHJvdmlkZXMpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnBlbmRpbmdQb3J0cyArPSAxO1xuICB9XG5cbiAgLy8gQWxsb3cgcmVzb2x1dGlvbiBvZiBmaWxlcyBieSBwYXJlbnQuXG4gIHRoaXMubWFuYWdlci5yZXNvdXJjZS5hZGRSZXNvbHZlcihmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSkge1xuICAgIHZhciBpZCA9IHV0aWwuZ2V0SWQoKTtcbiAgICB0aGlzLnJlcXVlc3RzW2lkXSA9IHJlc29sdmU7XG4gICAgdGhpcy5lbWl0KHRoaXMuZXh0ZXJuYWxDaGFubmVsLCB7XG4gICAgICB0eXBlOiAncmVzb2x2ZScsXG4gICAgICBpZDogaWQsXG4gICAgICBkYXRhOiB1cmxcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICAvLyBBdHRhY2ggQ29yZS5cbiAgdGhpcy5wZW5kaW5nUG9ydHMgKz0gMTtcblxuICBjb3JlID0gdGhpcy5hcGkuZ2V0KCdjb3JlJykuZGVmaW5pdGlvbjtcbiAgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIoY29yZSwgdGhpcy5kZWJ1Zyk7XG4gIHRoaXMubWFuYWdlci5nZXRDb3JlKGZ1bmN0aW9uIChDb3JlUHJvdikge1xuICAgIG5ldyBDb3JlUHJvdih0aGlzLm1hbmFnZXIpLnNldElkKHRoaXMubGluZWFnZSwgdGhpcyk7XG4gICAgcHJvdmlkZXIuZ2V0SW50ZXJmYWNlKCkucHJvdmlkZUFzeW5jaHJvbm91cyhDb3JlUHJvdik7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnTGluayB0byBjb3JlJyxcbiAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgbmFtZTogJ2NvcmUnLFxuICAgIHRvOiBwcm92aWRlclxuICB9KTtcblxuICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbChwcm92aWRlciwgJ2RlZmF1bHQnLCB7XG4gICAgbmFtZTogJ2NvcmUnLFxuICAgIGRlZmluaXRpb246IGNvcmVcbiAgfSkudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgIGNvcmUuZXh0ZXJuYWwuZ2V0TG9nZ2VyU3luYyA9IHRoaXMuZGVidWcuZ2V0TG9nZ2luZ1NoaW0oXG4gICAgICAgIGNvcmUuZXh0ZXJuYWwoKS5nZXRMb2dnZXIpO1xuICAgIHRoaXMuYXR0YWNoKCdjb3JlJywgZmFsc2UsIGNvcmUpO1xuICB9LmJpbmQodGhpcykpO1xuXG5cbiAgaWYgKHRoaXMucGVuZGluZ1BvcnRzID09PSAwKSB7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgZXhwb3J0ZWQgbWFuaWZlc3Qgb2YgYSBkZXBlbmRlbmN5LlxuICogU2V0cyBpdCBpbnRlcm5hbGx5IGlmIG5vdCB5ZXQgZXhwb3J0ZWQsIG9yIGF0dGFjaGVzIHRoZSBwcm9wZXJ0eSBpZiBpdFxuICogaXMgbG9hZGVkIGFmdGVyIHRoZSBtb2R1bGUgaGFzIHN0YXJ0ZWQgKHdlIGRvbid0IGRlbGF5IHN0YXJ0IHRvIHJldHJlaXZlXG4gKiB0aGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3kuKVxuICogQG1ldGhvZCB1cGRhdGVNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIERlcGVuZGVuY3lcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3lcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnVwZGF0ZU1hbmlmZXN0ID0gZnVuY3Rpb24gKG5hbWUsIG1hbmlmZXN0KSB7XG4gIHZhciBleHAgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbTtcblxuICBpZiAoZXhwICYmIGV4cFtuYW1lXSkge1xuICAgIGV4cFtuYW1lXS5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAvLyBIYW5kbGUgcmVxdWlyZSgpIGRlcGVuZGVuY3kgcmVzb2x1dGlvbi5cbiAgfSBlbHNlIGlmICh0aGlzLnVuYm91bmRQb3J0c1tuYW1lXSkge1xuICAgIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHRoaXMucG9ydCwgbmFtZSxcbiAgICAgICAgdGhpcy5iaW5kZXIuZ2V0QVBJKG1hbmlmZXN0LCB0aGlzLmFwaSwgdGhpcy51bmJvdW5kUG9ydHNbbmFtZV0uYXBpKSlcbiAgICAgIC50aGVuKFxuICAgICAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsIG5hbWUsIGZhbHNlKVxuICAgICAgKS50aGVuKGZ1bmN0aW9uKHByb3h5KSB7XG4gICAgICAgIHRoaXMudW5ib3VuZFBvcnRzW25hbWVdLmNhbGxiYWNrKHByb3h5KTtcbiAgICAgICAgZGVsZXRlIHRoaXMudW5ib3VuZFBvcnRzW25hbWVdO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1hbmlmZXN0c1tuYW1lXSA9IG1hbmlmZXN0O1xuICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZSB3aGljaCBwcm94eSBwb3J0cyBzaG91bGQgYmUgZXhwb3NlZCBieSB0aGlzIG1vZHVsZS5cbiAqIEBtZXRob2QgbWFwUHJveGllc1xuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IHRoZSBtb2R1bGUgSlNPTiBtYW5pZmVzdC5cbiAqIEByZXR1cm4ge09iamVjdFtdfSBwcm94eSBkZXNjcmlwdG9ycyBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLm1hcFByb3hpZXMgPSBmdW5jdGlvbiAobWFuaWZlc3QpIHtcbiAgdmFyIHByb3hpZXMgPSBbXSwgc2VlbiA9IFsnY29yZSddLCBpLCBvYmo7XG5cbiAgaWYgKG1hbmlmZXN0LnBlcm1pc3Npb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG1hbmlmZXN0LnBlcm1pc3Npb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0LnBlcm1pc3Npb25zW2ldLFxuICAgICAgICBkZWY6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQob2JqLm5hbWUpO1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihvYmoubmFtZSkgPCAwICYmIG9iai5kZWYpIHtcbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChvYmoubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hbmlmZXN0LmRlcGVuZGVuY2llcykge1xuICAgIHV0aWwuZWFjaFByb3AobWFuaWZlc3QuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVzYywgbmFtZSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhcGk6IGRlc2MuYXBpXG4gICAgICB9O1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgaWYgKGRlc2MuYXBpKSB7XG4gICAgICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChkZXNjLmFwaSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChuYW1lKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaWYgKG1hbmlmZXN0LnByb3ZpZGVzKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG1hbmlmZXN0LnByb3ZpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0LnByb3ZpZGVzW2ldLFxuICAgICAgICBkZWY6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQob2JqLm5hbWUpO1xuICAgICAgaWYgKG9iai5kZWYpIHtcbiAgICAgICAgb2JqLmRlZi5wcm92aWRlcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG1hbmlmZXN0LmFwaSAmJiBtYW5pZmVzdC5hcGlbb2JqLm5hbWVdKSB7XG4gICAgICAgIG9iai5kZWYgPSB7XG4gICAgICAgICAgbmFtZTogb2JqLm5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbjogbWFuaWZlc3QuYXBpW29iai5uYW1lXSxcbiAgICAgICAgICBwcm92aWRlczogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNb2R1bGUgd2lsbCBub3QgcHJvdmlkZSBcIicgKyBvYmoubmFtZSArXG4gICAgICAgICAgJ1wiLCBzaW5jZSBubyBkZWNsYXJhdGlvbiBjYW4gYmUgZm91bmQuJyk7XG4gICAgICAgIC8qanNsaW50IGNvbnRpbnVlOnRydWUqL1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8qanNsaW50IGNvbnRpbnVlOmZhbHNlKi9cbiAgICAgIGlmIChzZWVuLmluZGV4T2Yob2JqLm5hbWUpIDwgMCkge1xuICAgICAgICBwcm94aWVzLnB1c2gob2JqKTtcbiAgICAgICAgc2Vlbi5wdXNoKG9iai5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJveGllcztcbn07XG5cbi8qKlxuICogTG9hZCBleHRlcm5hbCBzY3JpcHRzIGludG8gdGhpcyBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGxvYWRTY3JpcHRzXG4gKiBAcGFyYW0ge1N0cmluZ30gZnJvbSBUaGUgVVJMIG9mIHRoaXMgbW9kdWxlcydzIG1hbmlmZXN0LlxuICogQHBhcmFtIHtTdHJpbmdbXX0gc2NyaXB0cyBUaGUgVVJMcyBvZiB0aGUgc2NyaXB0cyB0byBsb2FkLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubG9hZFNjcmlwdHMgPSBmdW5jdGlvbiAoZnJvbSwgc2NyaXB0cykge1xuICAvLyBUT0RPKHNhbG9tZWdlbyk6IGFkZCBhIHRlc3QgZm9yIGZhaWx1cmUuXG4gIHZhciBpbXBvcnRlciA9IGZ1bmN0aW9uIChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuaW1wb3J0U2NyaXB0cyhzY3JpcHQpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9LmJpbmQodGhpcyksXG4gICAgc2NyaXB0c19jb3VudCxcbiAgICBsb2FkO1xuICBpZiAodHlwZW9mIHNjcmlwdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgc2NyaXB0c19jb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgc2NyaXB0c19jb3VudCA9IHNjcmlwdHMubGVuZ3RoO1xuICB9XG5cbiAgbG9hZCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKG5leHQgPT09IHNjcmlwdHNfY291bnQpIHtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiBcInJlYWR5XCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JpcHQ7XG4gICAgaWYgKHR5cGVvZiBzY3JpcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgc2NyaXB0ID0gc2NyaXB0cztcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0ID0gc2NyaXB0c1tuZXh0XTtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZXIucmVzb3VyY2UuZ2V0KGZyb20sIHNjcmlwdCkudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICB0aGlzLnRyeUxvYWQoaW1wb3J0ZXIsIHVybCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWQobmV4dCArIDEpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cblxuXG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBpbXBvcnRlciA9IGZ1bmN0aW9uICh1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHNjcmlwdCA9IHRoaXMuY29uZmlnLmdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUsIHRydWUpO1xuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBsb2FkKDApO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIGxvYWQgcmVzb2x2ZWQgc2NyaXB0cyBpbnRvIHRoZSBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIHRyeUxvYWRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbXBvcnRlciBUaGUgYWN0dWFsIGltcG9ydCBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmdbXX0gdXJscyBUaGUgcmVzb3ZlZCBVUkxzIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gY29tcGxldGlvbiBvZiBsb2FkXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS50cnlMb2FkID0gZnVuY3Rpb24gKGltcG9ydGVyLCB1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGltcG9ydGVyLmJpbmQoe30sIHVybCkpLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKGUuc3RhY2spO1xuICAgIHRoaXMuZGVidWcuZXJyb3IoXCJFcnJvciBsb2FkaW5nIFwiICsgdXJsLCBlKTtcbiAgICB0aGlzLmRlYnVnLmVycm9yKFwiSWYgdGhlIHN0YWNrIHRyYWNlIGlzIG5vdCB1c2VmdWwsIHNlZSBodHRwczovL1wiICtcbiAgICAgICAgXCJnaXRodWIuY29tL2ZyZWVkb21qcy9mcmVlZG9tL3dpa2kvRGVidWdnaW5nXCIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVJbnRlcm5hbDtcbiIsIi8qZ2xvYmFscyBYTUxIdHRwUmVxdWVzdCAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIE1vZHVsZSA9IHJlcXVpcmUoJy4vbW9kdWxlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBQb2xpY3kgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgbW9kdWxlcyBhbmQgcHJvdmlkZVxuICogbWlncmF0aW9uIGFuZCBjb2FsbGVzaW5nIG9mIGV4ZWN1dGlvbi5cbiAqIEBDbGFzcyBQb2xpY3lcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBvZiB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbG9hZGVyIG9mIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGxvY2FsIGNvbmZpZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgUG9saWN5ID0gZnVuY3Rpb24obWFuYWdlciwgcmVzb3VyY2UsIGNvbmZpZykge1xuICB0aGlzLmFwaSA9IG1hbmFnZXIuYXBpO1xuICB0aGlzLmRlYnVnID0gbWFuYWdlci5kZWJ1ZztcbiAgdGhpcy5sb2NhdGlvbiA9IGNvbmZpZy5sb2NhdGlvbjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuXG4gIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB0aGlzLnJ1bnRpbWVzID0gW107XG4gIHRoaXMucG9saWNpZXMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nID0ge307XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuXG4gIHRoaXMuYWRkKG1hbmFnZXIsIGNvbmZpZy5wb2xpY3kpO1xuICB0aGlzLnJ1bnRpbWVzWzBdLmxvY2FsID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGhlIHBvbGljeSBhIHJ1bnRpbWUgaXMgZXhwZWN0ZWQgdG8gaGF2ZSB1bmxlc3MgaXQgc3BlY2lmaWVzXG4gKiBvdGhlcndpc2UuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljXG4gKiBAcHJvcGVydHkgZGVmYXVsdFBvbGljeVxuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRQb2xpY3kgPSB7XG4gIGJhY2tncm91bmQ6IGZhbHNlLCAvLyBDYW4gdGhpcyBydW50aW1lIHJ1biAnYmFja2dyb3VuZCcgbW9kdWxlcz9cbiAgaW50ZXJhY3RpdmU6IHRydWUgLy8gSXMgdGhlcmUgYSB2aWV3IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJ1bnRpbWU/XG4gIC8vIFRPRE86IHJlbWFpbmluZyBydW50aW1lIHBvbGljeS5cbn07XG5cbi8qKlxuICogVGhlIGNvbnN0cmFpbnRzIGEgY29kZSBtb2R1bGVzIGlzIGV4cGVjdGVkIHRvIGhhdmUgdW5sZXNzIGl0IHNwZWNpZmllc1xuICogb3RoZXJ3aXNlLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpY1xuICogQHByb3BlcnR5IGRlZmF1bHRDb25zdHJhaW50c1xuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRDb25zdHJhaW50cyA9IHtcbiAgaXNvbGF0aW9uOiBcImFsd2F5c1wiLCAvLyB2YWx1ZXM6IGFsd2F5cywgYXBwLCBuZXZlclxuICBwbGFjZW1lbnQ6IFwibG9jYWxcIiAvLyB2YWx1ZXM6IGxvY2FsLCBzdGFibGUsIHJlZHVuZGFudFxuICAvLyBUT0RPOiByZW1haW5pbmcgY29uc3RyYWludHMsIGV4cHJlc3MgcGxhdGZvcm0tc3BlY2lmaWMgZGVwZW5kZW5jaWVzLlxufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgbW9kdWxlIGZyb20gaXRzIGNhbm9uaWNhbCBVUkwuXG4gKiBSZXBvbmRzIHdpdGggdGhlIHByb21pc2Ugb2YgYSBwb3J0IHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLCBcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBsaW5lYWdlIG9mIHRoZSByZXF1ZXN0aW5nIG1vZHVsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgY2Fub25pY2FsIElEIG9mIHRoZSBtb2R1bGUgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGxvY2FsIHBvcnQgdG93YXJkcyB0aGUgbW9kdWxlLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkKSB7XG4gIFxuICAvLyBNYWtlIHN1cmUgdGhhdCBhIG1vZHVsZSBpc24ndCBnZXR0aW5nIGxvY2F0ZWQgdHdpY2UgYXQgdGhlIHNhbWUgdGltZS5cbiAgLy8gVGhpcyBpcyByZXNvbHZlZCBieSBkZWxheWluZyBpZiBpdCB1bnRpbCB3ZSBzZWUgaXQgaW4gYSAnbW9kdWxlQWRkJyBldmVudC5cbiAgaWYgKHRoaXMucGVuZGluZ1tpZF0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdwbGFjZWQnLCBmdW5jdGlvbihsLCBpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGwsIGkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0uYmluZCh0aGlzLCBsaW5lYWdlLCBpZCkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wZW5kaW5nW2lkXSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5sb2FkTWFuaWZlc3QoaWQpLnRoZW4oZnVuY3Rpb24obWFuaWZlc3QpIHtcbiAgICB2YXIgY29uc3RyYWludHMgPSB0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0Q29uc3RyYWludHMsIG1hbmlmZXN0LmNvbnN0cmFpbnRzKSxcbiAgICAgICAgcnVudGltZSA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cyksXG4gICAgICAgIHBvcnRJZDtcbiAgICBpZiAocnVudGltZS5sb2NhbCkge1xuICAgICAgcG9ydElkID0gdGhpcy5pc1J1bm5pbmcocnVudGltZSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ25ldmVyJyk7XG4gICAgICBpZihjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICdhbHdheXMnICYmIHBvcnRJZCkge1xuICAgICAgICB0aGlzLmRlYnVnLmluZm8oJ1JldXNlZCBwb3J0ICcgKyBwb3J0SWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nW2lkXTtcbiAgICAgICAgdGhpcy5lbWl0KCdwbGFjZWQnKTtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUubWFuYWdlci5nZXRQb3J0KHBvcnRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE1vZHVsZShpZCwgbWFuaWZlc3QsIGxpbmVhZ2UsIHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBDcmVhdGUgYSBwb3J0IHRvIGdvIHRvIHRoZSByZW1vdGUgcnVudGltZS5cbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ1VuZXhwZWN0ZWQgbG9jYXRpb24gc2VsZWN0ZWQgZm9yIG1vZHVsZSBwbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignUG9saWN5IEVycm9yIFJlc29sdmluZyAnICsgaWQsIGVycik7XG4gICAgdGhyb3coZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogRmluZCB0aGUgcnVudGltZSBkZXN0aW5hdGlvbiBmb3IgYSBtb2R1bGUgZ2l2ZW4gaXRzIGNvbnN0cmFpbnRzIGFuZCB0aGVcbiAqIG1vZHVsZSBjcmVhdGluZyBpdC5cbiAqIEBtZXRob2QgZmluZERlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBpZGVudGl0eSBvZiB0aGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtTdHJpbmddIGlkIFRoZSBjYW5vbmljYWwgdXJsIG9mIHRoZSBtb2R1bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25zdHJhaW50cyBDb25zdHJhaW50cyBmb3IgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBlbGVtZW50IG9mIHRoaXMucnVudGltZXMgd2hlcmUgdGhlIG1vZHVsZSBzaG91bGQgcnVuLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmZpbmREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cykge1xuICB2YXIgaTtcblxuICAvLyBTdGVwIDE6IGlmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCB0aGUgbVxuICBpZiAoY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnYWx3YXlzJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvbGljaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmcodGhpcy5ydW50aW1lc1tpXSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnbmV2ZXInKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW50aW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDI6IGlmIHRoZSBtb2R1bGUgd2FudHMgc3RhYmlsaXR5LCBpdCBtYXkgbmVlZCB0byBiZSByZW1vdGUuXG4gIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdsb2NhbCcpIHtcbiAgICByZXR1cm4gdGhpcy5ydW50aW1lc1swXTtcbiAgfSBlbHNlIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdzdGFibGUnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9saWNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnBvbGljaWVzW2ldLmJhY2tncm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVudGltZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcCAzOiBpZiB0aGUgbW9kdWxlIG5lZWRzIGxvbmdldml0eSAvIGludGVyYWN0aXZpdHksIGl0IG1heSB3YW50IHRvIGJlIHJlbW90ZS5cbiAgcmV0dXJuIHRoaXMucnVudGltZXNbMF07XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIGtub3duIHJ1bnRpbWUgaXMgcnVubmluZyBhbiBhcHByb3ByaWF0ZSBpbnN0YW5jZSBvZiBhIG1vZHVsZS5cbiAqIEBtZXRob2QgaXNSdW5uaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gcnVudGltZSBUaGUgcnVudGltZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgbW9kdWxlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gZnJvbSBUaGUgaWRlbnRpZmllciBvZiB0aGUgcmVxdWVzdGluZyBtb2R1bGUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZ1bGxNYXRjaCBJZiB0aGUgbW9kdWxlIG5lZWRzIHRvIGJlIGluIHRoZSBzYW1lIGFwcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8Qm9vbGVhbn0gVGhlIE1vZHVsZSBpZCBpZiBpdCBpcyBydW5uaW5nLCBvciBmYWxzZSBpZiBub3QuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuaXNSdW5uaW5nID0gZnVuY3Rpb24ocnVudGltZSwgaWQsIGZyb20sIGZ1bGxNYXRjaCkge1xuICB2YXIgaSA9IDAsIGogPSAwLCBva2F5O1xuICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGZ1bGxNYXRjaCAmJiBydW50aW1lLm1vZHVsZXNbaV0ubGVuZ3RoID09PSBmcm9tLmxlbmd0aCArIDEpIHtcbiAgICAgIG9rYXkgPSB0cnVlO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGZyb20ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVtqICsgMV0uaW5kZXhPZihmcm9tW2pdKSAhPT0gMCkge1xuICAgICAgICAgIG9rYXkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSAhPT0gMCkge1xuICAgICAgICBva2F5ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChva2F5KSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLm1vZHVsZXNbaV1bMF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZnVsbE1hdGNoICYmIHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJ1bnRpbWUubW9kdWxlc1tpXVswXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBHZXQgYSBwcm9taXNlIG9mIHRoZSBtYW5pZmVzdCBmb3IgYSBtb2R1bGUgSUQuXG4gKiBAbWV0aG9kIGxvYWRNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBjYW5vbmljYWwgSUQgb2YgdGhlIG1hbmlmZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3IgdGhlIGpzb24gY29udGVudHMgb2YgdGhlIG1hbmlmZXN0LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmxvYWRNYW5pZmVzdCA9IGZ1bmN0aW9uKG1hbmlmZXN0KSB7XG4gIHJldHVybiB0aGlzLnJlc291cmNlLmdldENvbnRlbnRzKG1hbmlmZXN0KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmVzcCA9IHt9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFwiICsgbWFuaWZlc3QgKyBcIjogXCIgKyBlcnIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTWFuaWZlc3QgQXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVudGltZSB0byBrZWVwIHRyYWNrIG9mIGluIHRoaXMgcG9saWN5LlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7ZmRvbS5wb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHVzZSBmb3IgbW9kdWxlIGxpZmV0aW1lIGluZm9cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xpY3kgVGhlIHBvbGljeSBvZiB0aGUgcnVudGltZS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwb3J0LCBwb2xpY3kpIHtcbiAgdmFyIHJ1bnRpbWUgPSB7XG4gICAgbWFuYWdlcjogcG9ydCxcbiAgICBtb2R1bGVzOiBbXVxuICB9O1xuICB0aGlzLnJ1bnRpbWVzLnB1c2gocnVudGltZSk7XG4gIHRoaXMucG9saWNpZXMucHVzaCh0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0UG9saWN5LCBwb2xpY3kpKTtcblxuICBwb3J0Lm9uKCdtb2R1bGVBZGQnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXTtcbiAgICBsaW5lYWdlID0gbGluZWFnZS5jb25jYXQoaW5mby5saW5lYWdlKTtcbiAgICBsaW5lYWdlWzBdID0gaW5mby5pZDtcbiAgICBydW50aW1lLm1vZHVsZXMucHVzaChsaW5lYWdlKTtcbiAgICBpZiAodGhpcy5wZW5kaW5nW2luZm8ubGluZWFnZVswXV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdbaW5mby5saW5lYWdlWzBdXTtcbiAgICAgIHRoaXMuZW1pdCgncGxhY2VkJyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xuICBwb3J0Lm9uKCdtb2R1bGVSZW1vdmUnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXSwgaSwgbW9kRmluZ2VycHJpbnQ7XG4gICAgbGluZWFnZSA9IGxpbmVhZ2UuY29uY2F0KGluZm8ubGluZWFnZSk7XG4gICAgbGluZWFnZVswXSA9IGluZm8uaWQ7XG4gICAgbW9kRmluZ2VycHJpbnQgPSBsaW5lYWdlLnRvU3RyaW5nKCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldLnRvU3RyaW5nKCkgPT09IG1vZEZpbmdlcnByaW50KSB7XG4gICAgICAgIHJ1bnRpbWUubW9kdWxlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbmtub3duIG1vZHVsZSB0byByZW1vdmU6ICcsIGluZm8uaWQpO1xuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xufTtcblxuLyoqXG4gKiBPdmVybGF5IGEgc3BlY2lmaWMgcG9saWN5IG9yIGNvbnN0cmFpbnQgaW5zdGFuY2Ugb24gZGVmYXVsdCBzZXR0aW5ncy5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWMuXG4gKiBAbWV0aG9kIG92ZXJsYXlcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYmFzZSBUaGUgZGVmYXVsdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdmVybGF5IFRoZSBzdXBlcmNlZWRpbmcgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBiYXNlIHBhcmFtZXRlcnMgd2hlbiBub3Qgc2V0IGluIG92ZXJsYXkuXG4gKi9cblBvbGljeS5wcm90b3R5cGUub3ZlcmxheSA9IGZ1bmN0aW9uKGJhc2UsIG92ZXJsYXkpIHtcbiAgdmFyIHJldCA9IHt9O1xuXG4gIHV0aWwubWl4aW4ocmV0LCBiYXNlKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICB1dGlsLm1peGluKHJldCwgb3ZlcmxheSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9saWN5O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCBmb3IgYSB1c2VyLWFjY2Vzc2FibGUgcHJvdmlkZXIuXG4gKiBAY2xhc3MgUHJvdmlkZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGRlZiBUaGUgaW50ZXJmYWNlIG9mIHRoZSBwcm92aWRlci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29udHJ1Y3RvclxuICovXG52YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoZGVmLCBkZWJ1Zykge1xuICB0aGlzLmlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgdGhpcy5kZWZpbml0aW9uID0gZGVmO1xuICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuaWZhY2UgPSBudWxsO1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5wcm92aWRlckNscyA9IG51bGw7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBQcm92aWRlciBtb2RlcyBvZiBvcGVyYXRpb24uXG4gKiBAcHJvcGVydHkgbW9kZVxuICogQHN0YXRpY1xuICogQHR5cGUgbnVtYmVyXG4gKi9cblByb3ZpZGVyLm1vZGUgPSB7XG4gIHN5bmNocm9ub3VzOiAwLFxuICBhc3luY2hyb25vdXM6IDEsXG4gIHByb21pc2VzOiAyXG59O1xuXG4vKipcbiAqIFJlY2VpdmUgZXh0ZXJuYWwgbWVzc2FnZXMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5jaGFubmVsc1ttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBpZiAobWVzc2FnZS5jaGFubmVsID09PSB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB9XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jaGFubmVsc1tzb3VyY2VdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2hhbm5lbHNbc291cmNlXSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNZXNzYWdlIGZyb20gdW5jb25maWd1cmVkIHNvdXJjZTogJyArIHNvdXJjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgbWVzc2FnZS50byk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIHRoaXMuZW1pdHNbc291cmNlXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICBtZXNzYWdlLm1lc3NhZ2UudG8gPSBtZXNzYWdlLnRvO1xuICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgIHZhciBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoXG4gICAgICAgICAgKHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciAmJiB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUpID9cbiAgICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgIHRoaXMuZGVidWdcbiAgICAgICAgKSxcbiAgICAgICAgaW5zdGFuY2U7XG4gICAgICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXSA9IHt9O1xuICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLmdldFByb3ZpZGVyKHNvdXJjZSwgbWVzc2FnZS50bywgYXJncyk7XG4gICAgICAvLyBkb24ndCBzYXZlIGEgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGlmIGl0IGNsb3NlZCBpdHNlbGYgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLmlmYWNlc1tzb3VyY2VdICYmXG4gICAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2UuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXSA9IGluc3RhbmNlLm9ubXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4odGhpcy50b1N0cmluZygpICsgJyBkcm9wcGluZyBtZXNzYWdlICcgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIHByb3ZpZGVyIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGNsb3NlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ1Byb3ZpZGVyIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcblxuICAvLyBSZWxlYXNlIHJlZmVyZW5jZXMuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlO1xuICBkZWxldGUgdGhpcy5wcm92aWRlckNscztcbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZ1bGZpbGxpbmcgdGhpcyBwcm92aWRlci5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGNvbnN1bWVyIHNvdXJjZSBvZiB0aGUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byB0ZWFyIGRvd24uXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gIC8vIElnbm9yZSB0ZWFyZG93biBvZiBub24tZXhpc3RhbnQgaWRzLlxuICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkZWxldGUgdGhpcy5pZmFjZXNbc291cmNlXVtpZF07XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW3NvdXJjZV1baWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gJiYgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYW4gaW50ZXJmYWNlIHRvIGV4cG9zZSBleHRlcm5hbGx5IHJlcHJlc2VudGluZyB0aGlzIHBvcnQuXG4gKiBQcm92aWRlcnMgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcG9ydCB1c2luZyBlaXRoZXJcbiAqIHByb3ZpZGVTeW5jaHJvbm91cyBvciBwcm92aWRlQXN5bmNocm9ub3VzIGRlcGVuZGluZyBvbiB0aGUgZGVzaXJlZFxuICogcmV0dXJuIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHRlcm5hbCBpbnRlcmZhY2Ugb2YgdGhpcyBQcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWZhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdmlkZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlciBcIiArIHRoaXMudG9TdHJpbmcoKSArXG4gICAgICAgICAgICBcIiBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCBieSBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaWZhY2UgPSB7XG4gICAgICBwcm92aWRlU3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVBc3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5hc3luY2hyb25vdXM7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBwcm92aWRlUHJvbWlzZXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5wcm9taXNlcztcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH07XG5cbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZGVmaW5pdGlvbiwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XG4gICAgICBjYXNlIFwiY29uc3RhbnRcIjpcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaWZhY2UsIG5hbWUsIHtcbiAgICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KHByb3AudmFsdWUpLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzLmlmYWNlO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIHByb3ZpZGVyIGZyb21cbiAqIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgfS5iaW5kKHt9LCB0aGlzKTtcblxuICBmdW5jLmNsb3NlID0gZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgaWYgKGlmYWNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoaWRzLCBzb3VyY2UpIHtcbiAgICAgICAgdXRpbC5lYWNoUHJvcChpZHMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMudGVhcmRvd24oc291cmNlLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzb3VyY2VdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UsIGhhbmRsZXIpIHtcbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGNoYW5uZWwgZGlyZWN0bHkuXG4gICAgaWYgKHR5cGVvZiBpZmFjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCBpZmFjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGlkcywgc291cmNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKGlkcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuICByZXR1cm4gZnVuYztcbn07XG5cbi8qKlxuICogR2V0IGEgbmV3IGluc3RhbmNlIG9mIHRoZSByZWdpc3RlcmVkIHByb3ZpZGVyLlxuICogQG1ldGhvZCBnZXRQcm92aWRlclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgcG9ydCB0aGlzIGluc3RhbmNlIGlzIGludGVyYWN0aWduIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRlbnRpZmllciB0aGUgbWVzc2FnYWJsZSBhZGRyZXNzIGZvciB0aGlzIHByb3ZpZGVyLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBDb25zdHJ1Y3RvciBhcmd1bWVudHMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHNlbmQgbWVzc2FnZXMgdG8gdGhlIHByb3ZpZGVyLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAoc291cmNlLCBpZGVudGlmaWVyLCBhcmdzKSB7XG4gIGlmICghdGhpcy5wcm92aWRlckNscykge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ0Nhbm5vdCBpbnN0YW50aWF0ZSBwcm92aWRlciwgc2luY2UgaXQgaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgcmV0dXJuIHtpbnN0YW5jZTogdW5kZWZpbmVkLCBvbm1zZzogdW5kZWZpbmVkfTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSB7fSxcbiAgICBkaXNwYXRjaEV2ZW50LFxuICAgIEJvdW5kQ2xhc3MsXG4gICAgaW5zdGFuY2U7XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmRlZmluaXRpb24sIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgaWYgKHByb3AudHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgZXZlbnRzW25hbWVdID0gcHJvcDtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoc3JjLCBldiwgaWQsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGV2W25hbWVdKSB7XG4gICAgICB2YXIgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKGV2W25hbWVdLnZhbHVlLCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRvOiBpZCxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBzb3VyY2UsIGV2ZW50cywgaWRlbnRpZmllcik7XG5cbiAgLy8gdGhpcyBpcyBhbGwgdG8gc2F5OiBuZXcgcHJvdmlkZXJDbHMoZGlzcGF0Y2hFdmVudCwgYXJnc1swXSwgYXJnc1sxXSwuLi4pXG4gIEJvdW5kQ2xhc3MgPSB0aGlzLnByb3ZpZGVyQ2xzLmJpbmQuYXBwbHkodGhpcy5wcm92aWRlckNscyxcbiAgICAgIFt0aGlzLnByb3ZpZGVyQ2xzLCBkaXNwYXRjaEV2ZW50XS5jb25jYXQoYXJncyB8fCBbXSkpO1xuICBpbnN0YW5jZSA9IG5ldyBCb3VuZENsYXNzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgb25tc2c6IGZ1bmN0aW9uIChwb3J0LCBzcmMsIG1zZykge1xuICAgICAgdmFyIHByb3AsIGRlYnVnLCBhcmdzLCByZXR1cm5Qcm9taXNlLCByZXQ7XG4gICAgICBpZiAobXNnLmFjdGlvbiA9PT0gJ21ldGhvZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21zZy50eXBlXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHBvcnQuZGVidWcud2FybihcIlByb3ZpZGVyIGRvZXMgbm90IGltcGxlbWVudCBcIiArIG1zZy50eXBlICsgXCIoKSFcIik7XG4gICAgICAgICAgcG9ydC5lbWl0KHBvcnQuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgcmVxSWQ6IG1zZy5yZXFJZCxcbiAgICAgICAgICAgICAgbmFtZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgIGVycm9yOiAnUHJvdmlkZXIgZG9lcyBub3QgaW1wbGVtZW50ICcgKyBtc2cudHlwZSArICcoKSEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb3AgPSBwb3J0LmRlZmluaXRpb25bbXNnLnR5cGVdO1xuICAgICAgICBkZWJ1ZyA9IHBvcnQuZGVidWc7XG4gICAgICAgIGFyZ3MgPSBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShwcm9wLnZhbHVlLCBtc2csIGRlYnVnKTtcbiAgICAgICAgaWYgKG1zZy5yZXFJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIFJlY2tsZXNzIGNhbGwuICBJZ25vcmUgcmV0dXJuIHZhbHVlLlxuICAgICAgICAgIHJldCA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICBkZWJ1Zy5lcnJvcihyZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gZnVuY3Rpb24gKHNyYywgbXNnLCBwcm9wLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC5yZXQsIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdG86IG1zZy50byxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgICByZXFJZDogbXNnLnJlcUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1zZy50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfS5iaW5kKHBvcnQsIHNyYywgbXNnLCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0KHRoaXNbbXNnLnR5cGVdLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgICB9IGNhdGNoIChlMSkge1xuICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgZTEubWVzc2FnZSArICcgJyArIGUxLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzW21zZy50eXBlXS5hcHBseShpbnN0YW5jZSwgYXJncy5jb25jYXQocmV0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgICAgICAgIHJldCh1bmRlZmluZWQsIGUyLm1lc3NhZ2UgKyAnICcgKyBlMi5zdGFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5wcm9taXNlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5Qcm9taXNlID0gdGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBpZiAocmV0dXJuUHJvbWlzZSAmJiByZXR1cm5Qcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuUHJvbWlzZS50aGVuKHJldCwgcmV0LmJpbmQoe30sIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgJ05vIHByb21pc2UgcmV0dXJuZWQgZnJvbSAnICtcbiAgICAgICAgICAgICAgICAgIG1zZy50eXBlICsgJzogJyArIHJldHVyblByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUzKSB7XG4gICAgICAgICAgICByZXQodW5kZWZpbmVkLCBlMy5tZXNzYWdlICsgJyAnICsgZTMuc3RhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZChpbnN0YW5jZSwgdGhpcywgc291cmNlKVxuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltQcm92aWRlciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBQcm92aWRlcl1cIjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uL2NvbnN1bWVyJyk7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSBmdW5jdGlvbihkZWYsIG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB2YXIgaW5mbGlnaHQgPSB7fSxcbiAgICAgIGV2ZW50cyA9IG51bGwsXG4gICAgICBlbWl0dGVyID0gbnVsbCxcbiAgICAgIHJlcUlkID0gMCxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgdXRpbC5lYWNoUHJvcChkZWYsIGZ1bmN0aW9uKHByb3AsIG5hbWUpIHtcbiAgICBzd2l0Y2gocHJvcC50eXBlKSB7XG4gICAgY2FzZSAnbWV0aG9kJzpcbiAgICAgIHRoaXNbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTm90ZTogaW5mbGlnaHQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYmVmb3JlIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICAgIC8vIGluIG9yZGVyIHRvIHByZXBhcmUgZm9yIHN5bmNocm9ub3VzIGluLXdpbmRvdyBwaXBlcy5cbiAgICAgICAgdmFyIHRoaXNSZXEgPSByZXFJZCxcbiAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgaW5mbGlnaHRbdGhpc1JlcV0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZTpyZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdDpyZWplY3QsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3AucmV0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICByZXFJZCArPSAxO1xuICAgICAgICBlbWl0KHtcbiAgICAgICAgICBhY3Rpb246ICdtZXRob2QnLFxuICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXNSZXEsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgIHRoaXNbbmFtZV0ucmVja2xlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLFxuICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgZW1pdCh7XG4gICAgICAgICAgYWN0aW9uOiAnbWV0aG9kJyxcbiAgICAgICAgICB0eXBlOiBuYW1lLFxuICAgICAgICAgIHJlcUlkOiBudWxsLCAgLy8gTWFya3MgdGhpcyBhcyBhIHJlY2tsZXNzIGNhbGwuXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJldHVybiB0eXBlIGlzIHZvaWQuXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXZlbnQnOlxuICAgICAgaWYoIWV2ZW50cykge1xuICAgICAgICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgICAgICAgZW1pdHRlciA9IHRoaXMuZW1pdDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW1pdDtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICB9XG4gICAgICBldmVudHNbbmFtZV0gPSBwcm9wO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29uc3RhbnQnOlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChwcm9wLnZhbHVlKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBvbk1zZyh0aGlzLCBmdW5jdGlvbih0eXBlLCBtc2cpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgaWYgKHRoaXMub2ZmKSB7XG4gICAgICAgIHRoaXMub2ZmKCk7XG4gICAgICB9XG4gICAgICB1dGlsLmVhY2hQcm9wKGluZmxpZ2h0LCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9iai5yZWplY3QoJ2Nsb3NlZCcpO1xuICAgICAgfSk7XG4gICAgICBpbmZsaWdodCA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1zZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdtZXRob2QnKSB7XG4gICAgICBpZiAoaW5mbGlnaHRbbXNnLnJlcUlkXSkge1xuICAgICAgICB2YXIgcmVzb2x2ZXIgPSBpbmZsaWdodFttc2cucmVxSWRdLFxuICAgICAgICAgICAgdGVtcGxhdGUgPSByZXNvbHZlci50ZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIGluZmxpZ2h0W21zZy5yZXFJZF07XG4gICAgICAgIGlmIChtc2cuZXJyb3IpIHtcbiAgICAgICAgICByZXNvbHZlci5yZWplY3QobXNnLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKHRlbXBsYXRlLCBtc2csIGRlYnVnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdJbmNvbWluZyBtZXNzYWdlIGNsYWltZWQgdG8gYmUgYW4gUlBDICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdyZXR1cm5pbmcgZm9yIHVucmVnaXN0ZXJlZCBjYWxsJywgbXNnLnJlcUlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICBpZiAoZXZlbnRzW21zZy5uYW1lXSkge1xuICAgICAgICBlbWl0dGVyKG1zZy5uYW1lLCBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShldmVudHNbbXNnLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgICAgIG1zZywgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgYXJncyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKFxuICAgICAgKGRlZi5jb25zdHJ1Y3RvciAmJiBkZWYuY29uc3RydWN0b3IudmFsdWUpID8gZGVmLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzLCA0KSxcbiAgICAgIGRlYnVnKTtcblxuICBlbWl0KHtcbiAgICB0eXBlOiAnY29uc3RydWN0JyxcbiAgICB0ZXh0OiBhcmdzLnRleHQsXG4gICAgYmluYXJ5OiBhcmdzLmJpbmFyeVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpSW50ZXJmYWNlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBFdmVudEludGVyZmFjZSA9IGZ1bmN0aW9uKG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgXG4gIG9uTXNnKHRoaXMsIGZ1bmN0aW9uKGVtaXQsIHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtaXQobXNnLnR5cGUsIG1zZy5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHRoaXMuZW1pdCkpO1xuXG4gIHRoaXMuZW1pdCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUsIG1zZykge1xuICAgIGVtaXR0ZXIoe3R5cGU6IHR5cGUsIG1lc3NhZ2U6IG1zZ30sIHRydWUpO1xuICB9LmJpbmQoe30sIGVtaXQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEludGVyZmFjZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBFdmVudEludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4vY29uc3VtZXInKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBBIFByb3h5IEJpbmRlciBtYW5hZ2VzIHRoZSBleHRlcm5hbCBpbnRlcmZhY2UsIGFuZCBjcmVhdGVzIG9uZSBvZlxuICogdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBvYmplY3RzIGV4cG9zZWQgYnkgZnJlZWRvbSBlaXRoZXIgYXMgYSBnbG9iYWxcbiAqIHdpdGhpbiBhIHdvcmtlciAvIG1vZHVsZSBjb250ZXh0LCBvciByZXR1cm5lZCBieSBhbiBleHRlcm5hbCBjYWxsIHRvXG4gKiBjcmVhdGUgYSBmcmVlZG9tIHJ1bnRpbWUuXG4gKiBAQ2xhc3MgUHJveHlCaW5kZXJcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBmb3IgdGhlIGFjdGl2ZSBydW50aW1lLlxuICovXG52YXIgUHJveHlCaW5kZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHByb3h5IGZvciBhIGZyZWVkb20gcG9ydCwgYW5kIHJldHVybiBpdCBvbmNlIGxvYWRlZC5cbiAqIEBtZXRob2QgZ2V0RXh0ZXJuYWxcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJveHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RlZmluaXRpb25dIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBBUEkgdG8gZXhwb3NlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmluaXRpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb24uZGVmaW5pdGlvbiBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtCb29sZWFufSBkZWZpbml0aW9uLnByb3ZpZGVzIFdoZXRoZXIgdGhpcyBpcyBhIGNvbnN1bWVyIG9yIHByb3ZpZGVyLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGFjdGl2ZSBwcm94eSBpbnRlcmZhY2UuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRFeHRlcm5hbCA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lLCBkZWZpbml0aW9uKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHByb3h5LCBhcGk7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIGFwaSA9IGRlZmluaXRpb24ubmFtZTtcbiAgICAgIGlmIChkZWZpbml0aW9uLnByb3ZpZGVzKSB7XG4gICAgICAgIHByb3h5ID0gbmV3IFByb3ZpZGVyKGRlZmluaXRpb24uZGVmaW5pdGlvbiwgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEFwaUludGVyZmFjZS5iaW5kKHt9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgIH1cblxuICAgIHByb3h5Lm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICAgIGlmIChhcGkpIHtcbiAgICAgICAgaWZhY2UuYXBpID0gYXBpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHBvcnQ6IHByb3h5LFxuICAgICAgICBleHRlcm5hbDogaWZhY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsocG9ydCwgbmFtZSwgcHJveHkpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBCaW5kIHRoZSBkZWZhdWx0IHByb3h5IGZvciBhIGZyZWVkb20gcG9ydC5cbiAqIEBtZXRob2QgYmluZERlZmF1bHRcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbG9hZGVyIHdpdGggQVBJIGRlZmluaXRpb25zLlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlIHRvIGV4cG9zZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgV2hldGhlciB0aGUgaW50ZXJmYWNlIGlzIGZvciBpbnNpZGUgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIGEgcHJveHkgaW50ZXJmYWNlLlxuICogQHByaXZhdGVcbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmJpbmREZWZhdWx0ID0gZnVuY3Rpb24gKHBvcnQsIGFwaSwgbWFuaWZlc3QsIGludGVybmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIG1ldGFkYXRhID0ge1xuICAgIG5hbWU6IG1hbmlmZXN0Lm5hbWUsXG4gICAgaWNvbjogbWFuaWZlc3QuaWNvbixcbiAgICBkZXNjcmlwdGlvbjogbWFuaWZlc3QuZGVzY3JpcHRpb25cbiAgfSwgZGVmO1xuXG4gIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgZGVmID0gYXBpLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICBkZWYgPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0WydkZWZhdWx0J10sXG4gICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGludGVybmFsICYmIG1hbmlmZXN0LnByb3ZpZGVzICYmXG4gICAgICAgIG1hbmlmZXN0LnByb3ZpZGVzLmluZGV4T2YobWFuaWZlc3RbJ2RlZmF1bHQnXSkgIT09IGZhbHNlKSB7XG4gICAgICBkZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJuYWwpIHtcbiAgICAgIGFwaS5kZWJ1Zy53YXJuKFwiZGVmYXVsdCBBUEkgbm90IHByb3ZpZGVkLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICBcImFyZSB5b3UgbWlzc2luZyBhIHByb3ZpZGVzIGtleSBpbiB5b3VyIG1hbmlmZXN0P1wiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXRFeHRlcm5hbChwb3J0LCAnZGVmYXVsdCcsIGRlZikudGhlbihcbiAgICBmdW5jdGlvbiAobWV0YWRhdGEsIGluZm8pIHtcbiAgICAgIGluZm8uZXh0ZXJuYWwubWFuaWZlc3QgPSBtZXRhZGF0YTtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0uYmluZCh0aGlzLCBtZXRhZGF0YSlcbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZWZpbml0aW9uIGZvciBhIHByb3h5IGdpdmVuIGEgcmVxdWVzdGVkIEFQSSBhbmQgdGhlIG1hbmlmZXN0IG9mXG4gKiB0aGUgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRBUElcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgZm9yIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7QXBpfSBhcGlQcm92aWRlciBUaGUgcmVnaXN0cnkgb2Yga25vd24gQVBJcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIFJlcXVlc3RlZCBBUEkuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIHRvIHVzZSBmb3IgY2FsbHMgdG8gZ2V0RXh0ZXJuYWwuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRBUEkgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGFwaVByb3ZpZGVyLCBhcGkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAobWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVthcGldKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGFwaSxcbiAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVthcGldXG4gICAgfTtcbiAgfSBlbHNlIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgdmFyIGRlZiA9IGFwaVByb3ZpZGVyLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdFsnZGVmYXVsdCddLFxuICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlCaW5kZXI7XG4iLCIvKmdsb2JhbHMgWE1MSHR0cFJlcXVlc3QgKi9cbi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFJlc291cmNlIHJlZ2lzdHJ5IGZvciBGcmVlRE9NLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBSZXNvdXJjZXMsXG4gKiBhbmQgcHJvdmlkZSBsb29rdXAgYW5kIG1pZ3JhdGlvbiBvZiByZXNvdXJjZXMuXG4gKiBAQ2xhc3MgUmVzb3VyY2VcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBsb2dnZXIgdG8gdXNlIGZvciBkZWJ1Z2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFJlc291cmNlID0gZnVuY3Rpb24gKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5maWxlcyA9IHt9O1xuICB0aGlzLnJlc29sdmVycyA9IFt0aGlzLmh0dHBSZXNvbHZlciwgdGhpcy5udWxsUmVzb2x2ZXJdO1xuICB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzID0ge1xuICAgICdodHRwJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2h0dHBzJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZS1leHRlbnNpb24nOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAncmVzb3VyY2UnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnY2hyb21lJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2FwcCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdnb3BoZXInOiB0aGlzLnhoclJldHJpZXZlciwgIC8vIEZvciBDb3Jkb3ZhOyBzZWUgaHR0cDovL2NyYnVnLmNvbS81MTMzNTIgLlxuICAgICdtYW5pZmVzdCc6IHRoaXMubWFuaWZlc3RSZXRyaWV2ZXJcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc3VyY2UgVVJMIHJlcXVlc3RlZCBmcm9tIGEgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIGFkZHJlc3Mgb2YgdGhlIG1vZHVsZSByZXF1ZXN0aW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuZmlsZXNba2V5XSkge1xuICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc29sdmUobWFuaWZlc3QsIHVybCkudGhlbihmdW5jdGlvbiAoa2V5LCByZXNvbHZlLCBhZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZmlsZXNba2V5XSA9IGFkZHJlc3M7XG4gICAgICAgIC8vZmRvbS5kZWJ1Zy5sb2coJ1Jlc29sdmVkICcgKyBrZXkgKyAnIHRvICcgKyBhZGRyZXNzKTtcbiAgICAgICAgcmVzb2x2ZShhZGRyZXNzKTtcbiAgICAgIH0uYmluZCh0aGlzLCBrZXksIHJlc29sdmUpLCByZWplY3QpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb250ZW50cyBvZiBhIHJlc291cmNlLlxuICogQG1ldGhvZCBnZXRDb250ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBjb250ZW50cy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldENvbnRlbnRzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9wO1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJBc2tlZCB0byBnZXQgY29udGVudHMgb2YgdW5kZWZpbmVkIFVSTC5cIik7XG4gICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50UmV0cmlldmVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YocHJvcCArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoXCI6Ly9cIikgPT09IC0xICYmIHByb3AgPT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0KCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlc1xuICogcmVzb2x2ZXMsIG9yIHJlamVjdHMgYWZ0ZXIgYWxsIHByb21pc2VzIHJlamVjdC4gQ2FuIGJlIHRob3VnaHQgb2YgYXNcbiAqIHRoZSBtaXNzaW5nICdQcm9taXNlLmFueScgLSByYWNlIGlzIG5vIGdvb2QsIHNpbmNlIGVhcmx5IHJlamVjdGlvbnNcbiAqIHByZWVtcHQgYSBzdWJzZXF1ZW50IHJlc29sdXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG1ldGhvZCBGaXJzdFByb21pc2VcbiAqIEBwYXJhbSB7UHJvbWlzZVtdfSBQcm9taXNlcyB0byBzZWxlY3QgZnJvbVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdpdGggYSB2YWx1ZSBmcm9tIGFyZ3VtZW50cy5cbiAqL1xudmFyIGZpcnN0UHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVzb3VyY2UgdXNpbmcga25vd24gcmVzb2x2ZXJzLiBVbmxpa2UgZ2V0LCByZXNvbHZlIGRvZXNcbiAqIG5vdCBjYWNoZSByZXNvbHZlZCByZXNvdXJjZXMuXG4gKiBAbWV0aG9kIHJlc29sdmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlc29sdmU7XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgYWRkcmVzcy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICB1dGlsLmVhY2hSZXZlcnNlKHRoaXMucmVzb2x2ZXJzLCBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2VDb21wYXQocmVzb2x2ZXIuYmluZCh7fSwgbWFuaWZlc3QsIHVybCkpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGZpcnN0UHJvbWlzZShwcm9taXNlcykudGhlbihyZXNvbHZlLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdCgnTm8gcmVzb2x2ZXJzIHRvIGhhbmRsZSB1cmw6ICcgKyBKU09OLnN0cmluZ2lmeShbbWFuaWZlc3QsIHVybF0pKTtcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmVzb2x2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGdldCByZXNvdXJjZXNcbiAqIG5lZWRlZCBieSB0aGUgcnVudGltZS4gQSByZXNvbHZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGZvdXJcbiAqIGFyZ3VtZW50czogdGhlIGFic29sdXRlIG1hbmlmZXN0IG9mIHRoZSByZXF1ZXN0ZXIsIHRoZVxuICogcmVzb3VyY2UgYmVpbmcgcmVxdWVzdGVkLCBhbmQgYSByZXNvbHZlIC8gcmVqZWN0IHBhaXIgdG9cbiAqIGZ1bGZpbGwgYSBwcm9taXNlLlxuICogQG1ldGhvZCBhZGRSZXNvbHZlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXIgVGhlIHJlc29sdmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gIHRoaXMucmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByZXRyaWV2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGxvYWQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmV0cmlldmVyIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBVUkxcbiAqIHRvIHJldHJpZXZlIHdpdGggYSBwcm90b2NvbCB0aGF0IGl0IGlzIGFibGUgdG8gaGFuZGxlLlxuICogQG1ldGhvZCBhZGRSZXRyaWV2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90byBUaGUgcHJvdG9jb2wgdG8gcmVnaXN0ZXIgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmV0cmlldmVyIFRoZSByZXRyaWV2ZXIgdG8gYWRkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuYWRkUmV0cmlldmVyID0gZnVuY3Rpb24gKHByb3RvLCByZXRyaWV2ZXIpIHtcbiAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIG92ZXJyaWRlIGZpbGUgcmV0cmlldmFsIGZvciBcIiArIHByb3RvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm90b10gPSByZXRyaWV2ZXI7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGV4dGVybmFsIHJlc29sdmVycyBhbmQgcmV0cmVhdmVyc1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7XCJwcm90b1wiOlN0cmluZywgXCJyZXNvbHZlclwiOkZ1bmN0aW9uLCBcInJldHJlYXZlclwiOkZ1bmN0aW9ufVtdfVxuICogICAgIHJlc29sdmVycyBUaGUgbGlzdCBvZiByZXRyZWl2ZXJzIGFuZCByZXNvbHZlcnMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgaWYgKCFyZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5yZXNvbHZlcikge1xuICAgICAgdGhpcy5hZGRSZXNvbHZlcihpdGVtLnJlc29sdmVyKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJvdG8gJiYgaXRlbS5yZXRyaWV2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmV0cmlldmVyKGl0ZW0ucHJvdG8sIGl0ZW0ucmV0cmlldmVyKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIFVSTCBpcyBhbiBhYnNvbHV0ZSBVUkwgb2YgYSBnaXZlbiBTY2hlbWUuXG4gKiBAbWV0aG9kIGhhc1NjaGVtZVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBXaGl0ZWxpc3RlZCBwcm90b2NvbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBVUkwgdGhlIFVSTCB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgVVJMIGlzIGFuIGFic29sdXRlIGV4YW1wbGUgb2Ygb25lIG9mIHRoZSBzY2hlbWVzLlxuICovXG5SZXNvdXJjZS5oYXNTY2hlbWUgPSBmdW5jdGlvbiAocHJvdG9jb2xzLCB1cmwpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBwcm90b2NvbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodXJsLmluZGV4T2YocHJvdG9jb2xzW2ldICsgXCI6Ly9cIikgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSAnLi8nIGFuZCAnLi4vJyBmcm9tIGEgVVJMXG4gKiBSZXF1aXJlZCBiZWNhdXNlIENocm9tZSBBcHBzIGZvciBNb2JpbGUgKGNjYSkgZG9lc24ndCB1bmRlcnN0YW5kXG4gKiBYSFIgcGF0aHMgd2l0aCB0aGVzZSByZWxhdGl2ZSBjb21wb25lbnRzIGluIHRoZSBVUkwuXG4gKiBAbWV0aG9kIHJlbW92ZVJlbGF0aXZlUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIG1vZGlmeVxuICogQHJldHVybnMge1N0cmluZ30gdXJsIHdpdGhvdXQgJy4vJyBhbmQgJy4uLydcbiAqKi9cblJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiOi8vXCIpICsgMyxcbiAgICBzdGFjayxcbiAgICB0b1JlbW92ZSxcbiAgICByZXN1bHQ7XG4gIC8vIFJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIC8uL1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTtcbiAgLy9XZWlyZCBidWcgd2hlcmUgaW4gY2NhLCBtYW5pZmVzdCBzdGFydHMgd2l0aCAnY2hyb21lOi8vLy8nXG4gIC8vVGhpcyBmb3JjZXMgdGhlcmUgdG8gb25seSBiZSAyIHNsYXNoZXNcbiAgd2hpbGUgKHVybC5jaGFyQXQoaWR4KSA9PT0gXCIvXCIpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaWR4KSArIHVybC5zbGljZShpZHggKyAxLCB1cmwubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIEFkdmFuY2UgdG8gbmV4dCAvXG4gIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAvLyBSZW1vdmluZyAuLi9cbiAgc3RhY2sgPSB1cmwuc3Vic3RyKGlkeCArIDEpLnNwbGl0KFwiL1wiKTtcbiAgd2hpbGUgKHN0YWNrLmluZGV4T2YoXCIuLlwiKSAhPT0gLTEpIHtcbiAgICB0b1JlbW92ZSA9IHN0YWNrLmluZGV4T2YoXCIuLlwiKTtcbiAgICBpZiAodG9SZW1vdmUgPT09IDApIHtcbiAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnNwbGljZSgodG9SZW1vdmUgLSAxKSwgMik7XG4gICAgfVxuICB9XG4gIFxuICAvL1JlYnVpbGQgc3RyaW5nXG4gIHJlc3VsdCA9IHVybC5zdWJzdHIoMCwgaWR4KTtcbiAgZm9yIChpZHggPSAwOyBpZHggPCBzdGFjay5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgcmVzdWx0ICs9IFwiL1wiICsgc3RhY2tbaWR4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIFVSTHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHN0YW5kYXJkIEhUVFAgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIGh0dHBSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5odHRwUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJjaHJvbWVcIiwgXCJjaHJvbWUtZXh0ZW5zaW9uXCIsIFwicmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICBcImFwcFwiLCBcImdvcGhlclwiXSxcbiAgICBkaXJuYW1lLFxuICAgIHByb3RvY29sSWR4LFxuICAgIHBhdGhJZHgsXG4gICAgcGF0aCxcbiAgICBiYXNlLFxuICAgIHJlc3VsdDtcblxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgdXJsKSkge1xuICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKHVybCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmVqZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCBtYW5pZmVzdCkgJiZcbiAgICAgIHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSkge1xuICAgIGRpcm5hbWUgPSBtYW5pZmVzdC5zdWJzdHIoMCwgbWFuaWZlc3QubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICBwcm90b2NvbElkeCA9IGRpcm5hbWUuaW5kZXhPZihcIjovL1wiKTtcbiAgICBwYXRoSWR4ID0gcHJvdG9jb2xJZHggKyAzICsgZGlybmFtZS5zdWJzdHIocHJvdG9jb2xJZHggKyAzKS5pbmRleE9mKFwiL1wiKTtcbiAgICBwYXRoID0gZGlybmFtZS5zdWJzdHIocGF0aElkeCk7XG4gICAgYmFzZSA9IGRpcm5hbWUuc3Vic3RyKDAsIHBhdGhJZHgpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyB1cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgoYmFzZSArIHBhdGggKyBcIi9cIiArIHVybCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3QoKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGFyZSBzZWxmLWRlc2NyaWJpbmcuXG4gKiBAbWV0aG9kIG51bGxSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5udWxsUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJtYW5pZmVzdFwiXTtcbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG1hbmlmZXN0IGNvbnRlbnQgZnJvbSBhIHNlbGYtZGVzY3JpcHRpdmUgbWFuaWZlc3QgdXJsLlxuICogVGhlc2UgdXJscyBhcmUgdXNlZCB0byByZWZlcmVuY2UgYSBtYW5pZmVzdCB3aXRob3V0IHJlcXVpcmluZyBzdWJzZXF1ZW50LFxuICogcG90ZW50aWFsbHkgbm9uLUNPUlMgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIG1hbmlmZXN0UmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubWFuaWZlc3RSZXRyaWV2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gbWFuaWZlc3Quc3Vic3RyKDExKTtcbiAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJJbnZhbGlkIG1hbmlmZXN0IFVSTCByZWZlcmVuY2VkOlwiICsgbWFuaWZlc3QpO1xuICAgIHJlamVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHJlc291cmNlIGNvbnRlbnRzIHVzaW5nIGFuIFhIUiByZXF1ZXN0LlxuICogQG1ldGhvZCB4aHJSZXRyaWV2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byBmZXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUueGhyUmV0cmlldmVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciByZWYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAocmVmLnJlYWR5U3RhdGUgPT09IDQgJiYgcmVmLnJlc3BvbnNlVGV4dCkge1xuICAgICAgcmVzb2x2ZShyZWYucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiICsgdXJsICsgXCI6IFwiICsgcmVmLnN0YXR1cyk7XG4gICAgICByZWplY3QocmVmLnN0YXR1cyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcmVzb2x2ZSwgcmVqZWN0KSwgZmFsc2UpO1xuICByZWYub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIHJlZi5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gIHJlZi5zZW5kKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuIiwiLypnbG9iYWxzIGNyeXB0bywgV2ViS2l0QmxvYkJ1aWxkZXIsIEJsb2IsIFVSTCAqL1xuLypnbG9iYWxzIHdlYmtpdFVSTCwgVWludDhBcnJheSwgVWludDE2QXJyYXksIEFycmF5QnVmZmVyICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLGJyb3dzZXI6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cblxuLyoqXG4gKiBVdGlsaXR5IG1ldGhvZCB1c2VkIHdpdGhpbiB0aGUgZnJlZWRvbSBMaWJyYXJ5LlxuICogQGNsYXNzIHV0aWxcbiAqIEBzdGF0aWNcbiAqL1xudmFyIHV0aWwgPSB7fTtcblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgYmFja3dhcmRzLiBJZiB0aGUgZnVuY1xuICogcmV0dXJucyBhIHRydWUgdmFsdWUsIGl0IHdpbGwgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICogQG1ldGhvZCBlYWNoUmV2ZXJzZVxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hSZXZlcnNlID0gZnVuY3Rpb24oYXJ5LCBmdW5jKSB7XG4gIGlmIChhcnkpIHtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSBhcnkubGVuZ3RoIC0gMTsgaSA+IC0xOyBpIC09IDEpIHtcbiAgICAgIGlmIChhcnlbaV0gJiYgZnVuYyhhcnlbaV0sIGksIGFyeSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaGFzUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmhhc1Byb3AgPSBmdW5jdGlvbihvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufTtcblxuLyoqXG4gKiBDeWNsZXMgb3ZlciBwcm9wZXJ0aWVzIGluIGFuIG9iamVjdCBhbmQgY2FsbHMgYSBmdW5jdGlvbiBmb3IgZWFjaFxuICogcHJvcGVydHkgdmFsdWUuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLCB0aGVuIHRoZVxuICogaXRlcmF0aW9uIGlzIHN0b3BwZWQuXG4gKiBAbWV0aG9kIGVhY2hQcm9wXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZWFjaFByb3AgPSBmdW5jdGlvbihvYmosIGZ1bmMpIHtcbiAgdmFyIHByb3A7XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoZnVuYyhvYmpbcHJvcF0sIHByb3ApKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTaW1wbGUgZnVuY3Rpb24gdG8gbWl4IGluIHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgaW50byB0YXJnZXQsXG4gKiBidXQgb25seSBpZiB0YXJnZXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcHJvcGVydHkgb2YgdGhlIHNhbWUgbmFtZS5cbiAqIFRoaXMgaXMgbm90IHJvYnVzdCBpbiBJRSBmb3IgdHJhbnNmZXJyaW5nIG1ldGhvZHMgdGhhdCBtYXRjaFxuICogT2JqZWN0LnByb3RvdHlwZSBuYW1lcywgYnV0IHRoZSB1c2VzIG9mIG1peGluIGhlcmUgc2VlbSB1bmxpa2VseSB0b1xuICogdHJpZ2dlciBhIHByb2JsZW0gcmVsYXRlZCB0byB0aGF0LlxuICogQG1ldGhvZCBtaXhpblxuICogQHN0YXRpY1xuICovXG51dGlsLm1peGluID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UsIGZvcmNlKSB7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICBpZiAoZm9yY2UgfHwgIXV0aWwuaGFzUHJvcCh0YXJnZXQsIHByb3ApKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBJRC5cbiAqIEBtZXRob2QgZ2V0SWRcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3VpZCA9ICdndWlkJyxcbiAgICAgIGRvbWFpbiA9IDEyLFxuICAgICAgYnVmZmVyO1xuICAvLyBDaHJvbWUgLyBGaXJlZm94LlxuICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRvbWFpbik7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgIHV0aWwuZWFjaFJldmVyc2UoYnVmZmVyLCBmdW5jdGlvbihuKSB7XG4gICAgICBndWlkICs9ICctJyArIG47XG4gICAgfSk7XG4gIC8vIE5vZGVcbiAgfSBlbHNlIGlmICh0eXBlb2YgY3J5cHRvID09PSAnb2JqZWN0JyAmJiBjcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBidWZmZXIgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoZG9tYWluKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChkb21haW4gPiAwKSB7XG4gICAgICBndWlkICs9ICctJyArIE1hdGguY2VpbCgyNTUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgIGRvbWFpbiAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBndWlkO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYSBzdHJpbmcgaW50byBhIGJpbmFyeSBhcnJheSBidWZmZXIsIGJ5IHRyZWF0aW5nIGVhY2ggY2hhcmFjdGVyIGFzIGFcbiAqIHV0ZjE2IGVuY29kZWQgY2hhcmFjdGVyIC0gdGhlIG5hdGl2ZSBqYXZhc2NyaXB0IGVuY29kaW5nLlxuICogQG1ldGhvZCBzdHIyYWJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xudXRpbC5zdHIyYWIgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGgsXG4gICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoICogMiksIC8vIDIgYnl0ZXMgZm9yIGVhY2ggY2hhclxuICAgICAgYnVmZmVyVmlldyA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpLFxuICAgICAgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmZmVyVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBidWZmZXIgY29udGFpbmluZyBhbiBlbmNvZGVkIHN0cmluZyBiYWNrIGludG8gYSBzdHJpbmcuXG4gKiBAbWV0aG9kIGFiMnN0clxuICogQHN0YXRpY1xuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gdW53cmFwLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGRlY29kZWQgYnVmZmVyLlxuICovXG51dGlsLmFiMnN0ciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDE2QXJyYXkoYnVmZmVyKSk7XG59O1xuXG4vKipcbiAqIEFkZCAnb24nIGFuZCAnZW1pdCcgbWV0aG9kcyB0byBhbiBvYmplY3QsIHdoaWNoIGFjdCBhcyBhIGxpZ2h0IHdlaWdodFxuICogZXZlbnQgaGFuZGxpbmcgc3RydWN0dXJlLlxuICogQGNsYXNzIGhhbmRsZUV2ZW50c1xuICogQHN0YXRpY1xuICovXG51dGlsLmhhbmRsZUV2ZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgZXZlbnRTdGF0ZSA9IHtcbiAgICBERUJVR19CQUNLUkVGOiBvYmosXG4gICAgbXVsdGlwbGU6IHt9LFxuICAgIG1heWJlbXVsdGlwbGU6IFtdLFxuICAgIHNpbmdsZToge30sXG4gICAgbWF5YmVzaW5nbGU6IFtdXG4gIH0sIGZpbHRlciwgcHVzaDtcblxuICAvKipcbiAgICogRmlsdGVyIGEgbGlzdCBiYXNlZCBvbiBhIHByZWRpY2F0ZS4gVGhlIGxpc3QgaXMgZmlsdGVyZWQgaW4gcGxhY2UsIHdpdGhcbiAgICogc2VsZWN0ZWQgaXRlbXMgcmVtb3ZlZCBhbmQgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgbWV0aG9kIHRvIHJ1biBvbiBlYWNoIGl0ZW0uXG4gICAqIEByZXR1cm5zIHtBcnJheX0gU2VsZWN0ZWQgaXRlbXNcbiAgICovXG4gIGZpbHRlciA9IGZ1bmN0aW9uKGxpc3QsIHByZWRpY2F0ZSkge1xuICAgIHZhciByZXQgPSBbXSwgaTtcblxuICAgIGlmICghbGlzdCB8fCAhbGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSB7XG4gICAgICAgIHJldC5wdXNoKGxpc3Quc3BsaWNlKGksIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogRW5xdWV1ZSBhIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgdHlwZS5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIHF1ZXVlICgnc2luZ2xlJyBvciAnbXVsdGlwbGUnKSB0byBxdWV1ZSBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gZW5xdWV1ZS5cbiAgICovXG4gIHB1c2ggPSBmdW5jdGlvbih0bywgdHlwZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1snbWF5YmUnICsgdG9dLnB1c2goW3R5cGUsIGhhbmRsZXJdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXNbdG9dW3R5cGVdKSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXSA9IFtoYW5kbGVyXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYW4gZXZlbnQgb2YgYSBzcGVjaWZpYyB0eXBlIG9jY3Vycy5cbiAgICogQG1ldGhvZCBvblxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZWdpc3RlciBhZ2FpbnN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBldmVudCBvY2N1cnMuXG4gICAqL1xuICBvYmoub24gPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ211bHRpcGxlJyk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGUgdGhlIG5leHQgdGltZSBhbiBldmVudCBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25jZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byB3YWl0IGZvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gdGhlIG5leHQgdGltZSBhIG1hdGNoaW5nIGV2ZW50XG4gICAqICAgICBpcyByYWlzZWQuXG4gICAqL1xuICBvYmoub25jZSA9IHB1c2guYmluZChldmVudFN0YXRlLCAnc2luZ2xlJyk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgb24gdGhpcyBvYmplY3QuXG4gICAqIEBtZXRob2QgZW1pdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByYWlzZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50LlxuICAgKi9cbiAgb2JqLmVtaXQgPSBmdW5jdGlvbih0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGksIHF1ZXVlO1xuICAgIC8vIE5vdGUgdGhhdCByZWdpc3RlcmVkIGhhbmRsZXJzIG1heSBzdG9wIGV2ZW50cyBvbiB0aGUgb2JqZWN0LCBieSBjYWxsaW5nXG4gICAgLy8gdGhpcy5vZmYoKS4gQXMgc3VjaCwgdGhlIHByZXNlbmNlIG9mIHRoZXNlIGtleXMgbXVzdCBiZSBjaGVja2VkIG9uIGVhY2hcbiAgICAvLyBpdGVyYXRpb24gb2YgdGhlIHJlbGV2YW50IGxvb3BzLlxuICAgIGZvciAoaSA9IDA7IHRoaXMubXVsdGlwbGVbdHlwZV0gJiZcbiAgICAgICAgIGkgPCB0aGlzLm11bHRpcGxlW3R5cGVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZVt0eXBlXVtpXShkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zaW5nbGVbdHlwZV0pIHtcbiAgICAgIHF1ZXVlID0gdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgICB0aGlzLnNpbmdsZVt0eXBlXSA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHF1ZXVlW2ldKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYXliZW11bHRpcGxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tYXliZW11bHRpcGxlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHRoaXMubWF5YmVtdWx0aXBsZVtpXVsxXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gdGhpcy5tYXliZXNpbmdsZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVzaW5nbGVbaV1bMF0odHlwZSwgZGF0YSkpIHtcbiAgICAgICAgcXVldWUgPSB0aGlzLm1heWJlc2luZ2xlLnNwbGljZShpLCAxKTtcbiAgICAgICAgcXVldWVbMF1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQoZXZlbnRTdGF0ZSk7XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gICAqIEBtZXRob2Qgb2ZmXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbj99IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcmVtb3ZlLlxuICAgKi9cbiAgb2JqLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLkRFQlVHX0JBQ0tSRUY7XG4gICAgICB0aGlzLm11bHRpcGxlID0ge307XG4gICAgICB0aGlzLm1heWJlbXVsdGlwbGUgPSBbXTtcbiAgICAgIHRoaXMuc2luZ2xlID0ge307XG4gICAgICB0aGlzLm1heWJlc2luZ2xlID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZXNpbmdsZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVswXSA9PT0gdHlwZSAmJiAoIWhhbmRsZXIgfHwgaXRlbVsxXSA9PT0gaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLm1heWJlbXVsdGlwbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBkZWxldGUgdGhpcy5tdWx0aXBsZVt0eXBlXTtcbiAgICAgIGRlbGV0ZSB0aGlzLnNpbmdsZVt0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyKHRoaXMubXVsdGlwbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLnNpbmdsZVt0eXBlXSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xufTtcblxuLyoqXG4gKiBXaGVuIHJ1biB3aXRob3V0IGEgd2luZG93LCBvciBzcGVjaWZpY2FsbHkgcmVxdWVzdGVkLlxuICogTm90ZTogRGVjbGFyYXRpb24gY2FuIGJlIHJlZGVmaW5lZCBpbiBmb3JjZU1vZHVsZUNvbnRleHQgYmVsb3cuXG4gKiBAbWV0aG9kIGlzTW9kdWxlQ29udGV4dFxuICogQGZvciB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbi8qIUBwcmVzZXJ2ZSBTdGFydE1vZHVsZUNvbnRleHREZWNsYXJhdGlvbiovXG51dGlsLmlzTW9kdWxlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBCbG9iIG9iamVjdCBvZiBhIHN0cmluZy5cbiAqIFBvbHlmaWxscyBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggZG9uJ3QgaGF2ZSBhIGN1cnJlbnQgQmxvYiBjb25zdHJ1Y3RvciwgbGlrZVxuICogcGhhbnRvbWpzLlxuICogQG1ldGhvZCBnZXRCbG9iXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0QmxvYiA9IGZ1bmN0aW9uKGRhdGEsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBXZWJLaXRCbG9iQnVpbGRlcigpO1xuICAgIGJ1aWxkZXIuYXBwZW5kKGRhdGEpO1xuICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtkYXRhXSwge3R5cGU6IHR5cGV9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBGaW5kIGFsbCBzY3JpcHRzIG9uIHRoZSBnaXZlbiBwYWdlLlxuICogQG1ldGhvZCBzY3JpcHRzXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuc2NyaXB0cyA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICByZXR1cm4gZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSovXG5cbnZhciBwcm92aWRlcnMgPSBbXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuZWNobycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmNvbnNvbGUnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudmlldycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUud2Vic29ja2V0JyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyJylcbl07XG5cbmZ1bmN0aW9uIGdldEZyZWVkb21TY3JpcHQoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHNjcmlwdDtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgLy8gTmV3IGJyb3dzZXIgQVBJXG4gICAgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIiAmJlxuICAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGVkXCIpIHtcbiAgICAvLyBJbmNsdWRlZCBpbiBIVE1MIG9yIHRocm91Z2ggZG9jdW1lbnQud3JpdGVcbiAgICBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdCA9IHNjcmlwdFtzY3JpcHQubGVuZ3RoIC0gMV0uc3JjO1xuICB9IGVsc2Uge1xuICAgIC8vIExvYWRlZCB0aHJvdWdoIGRvbSBtYW5pcHVsYXRpb24gb3IgYXN5bmMuXG4gICAgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwic2NyaXB0W3NyYyo9J2ZyZWVkb20uanMnXSxzY3JpcHRbc3JjKj0nZnJlZWRvbS0nXVwiXG4gICAgKTtcbiAgICBpZiAoc2NyaXB0Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBkZXRlcm1pbmUgZnJlZWRvbS5qcyBzY3JpcHQgdGFnLlwiKTtcbiAgICB9XG4gICAgc2NyaXB0ID0gc2NyaXB0WzBdLnNyYztcbiAgfVxuICByZXR1cm4gc2NyaXB0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LmZyZWVkb20gPSByZXF1aXJlKCcuLi9lbnRyeScpLmJpbmQoe30sIHtcbiAgICBsb2NhdGlvbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgcG9ydFR5cGU6IHJlcXVpcmUoJy4uL2xpbmsvd29ya2VyJyksXG4gICAgc291cmNlOiBnZXRGcmVlZG9tU2NyaXB0KCksXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMsXG4gICAgb2F1dGg6IFtcbiAgICAgIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5sb2NhbHBhZ2VhdXRoJyksXG4gICAgICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvb2F1dGgvb2F1dGgucmVtb3RlcGFnZWF1dGgnKVxuICAgIF1cbiAgfSk7XG59IGVsc2Uge1xuICByZXF1aXJlKCcuLi9lbnRyeScpKHtcbiAgICBpc01vZHVsZTogdHJ1ZSxcbiAgICBwb3J0VHlwZTogcmVxdWlyZSgnLi4vbGluay93b3JrZXInKSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgICBnbG9iYWw6IGdsb2JhbFxuICB9KTtcbn1cbiJdfQ==