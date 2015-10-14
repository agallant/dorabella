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
 * @version 0.6.26
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.crypto","api":{"getRandomBytes":{"type":"method","value":["number"],"ret":"buffer"}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"},"require":{"type":"method","value":["string","string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"},"boolean"],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed","NAME_NOT_RESOLVED":"DNS lookup failed","INTERNET_DISCONNECTED":"Cannot reach any network","ADDRESS_INVALID":"Invalid address","ADDRESS_UNREACHABLE":"No route to host","HOST_UNREACHABLE":"SOCKS proxy server could not reach host"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"pause":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"resume":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SNED_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"core.xhr","api":{"open":{"type":"method","value":["string","string","boolean","string","string"],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":[{"string":"string","buffer":"buffer"}]},"abort":{"type":"method","value":[]},"getResponseHeader":{"type":"method","value":["string"],"ret":"string"},"getAllResponseHeaders":{"type":"method","value":[],"ret":"string"},"setRequestHeader":{"type":"method","value":["string","string"]},"overrideMimeType":{"type":"method","value":["string"]},"getReadyState":{"type":"method","value":[],"ret":"number"},"getResponse":{"type":"method","value":[],"ret":{"string":"string","buffer":"buffer","object":"object"}},"getResponseText":{"type":"method","value":[],"ret":"string"},"getResponseURL":{"type":"method","value":[],"ret":"string"},"getResponseType":{"type":"method","value":[],"ret":"string"},"setResponseType":{"type":"method","value":["string"]},"getStatus":{"type":"method","value":[],"ret":"number"},"getStatusText":{"type":"method","value":[],"ret":"string"},"getTimeout":{"type":"method","value":[],"ret":"number"},"setTimeout":{"type":"method","value":["number"]},"getWithCredentials":{"type":"method","value":[],"ret":"boolean"},"setWithCredentials":{"type":"method","value":["boolean"]},"onloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onerror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"ontimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onreadystatechange":{"type":"event","value":{}},"onuploadloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploaderror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadtimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadreadystatechange":{"type":"event","value":{}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.3.0
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
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
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

    function lib$es6$promise$asap$$attemptVertex() {
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
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
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
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
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
            currentQueue[queueIndex].run();
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

// TODO(shtylman)
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
        "github.com/freedomjs/freedom/wiki/Debugging-Script-Parse-Errors");
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
                   "app"],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS51bnByaXZpbGVnZWQuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnZpZXcuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLndlYnNvY2tldC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL29hdXRoL29hdXRoLmxvY2FscGFnZWF1dGguanMiLCJidWlsZC9wcm92aWRlcnMvb2F1dGgvb2F1dGgucmVtb3RlcGFnZWF1dGguanMiLCJidWlsZC9zcmMvYXBpLmpzIiwiYnVpbGQvc3JjL2J1bmRsZS5qcyIsImJ1aWxkL3NyYy9jb25zdW1lci5qcyIsImJ1aWxkL3NyYy9kZWJ1Zy5qcyIsImJ1aWxkL3NyYy9lbnRyeS5qcyIsImJ1aWxkL3NyYy9odWIuanMiLCJidWlsZC9zcmMvbGluay5qcyIsImJ1aWxkL3NyYy9saW5rL3dvcmtlci5qcyIsImJ1aWxkL3NyYy9tYW5hZ2VyLmpzIiwiYnVpbGQvc3JjL21vZHVsZS5qcyIsImJ1aWxkL3NyYy9tb2R1bGVpbnRlcm5hbC5qcyIsImJ1aWxkL3NyYy9wb2xpY3kuanMiLCJidWlsZC9zcmMvcHJvdmlkZXIuanMiLCJidWlsZC9zcmMvcHJveHkvYXBpSW50ZXJmYWNlLmpzIiwiYnVpbGQvc3JjL3Byb3h5L2V2ZW50SW50ZXJmYWNlLmpzIiwiYnVpbGQvc3JjL3Byb3h5YmluZGVyLmpzIiwiYnVpbGQvc3JjL3Jlc291cmNlLmpzIiwiYnVpbGQvc3JjL3V0aWwuanMiLCJidWlsZC9zcmMvdXRpbC93b3JrZXJFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQ0FBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDclVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZyZWVkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcImNvbnNvbGVcIixcImFwaVwiOntcImxvZ1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJkZWJ1Z1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJpbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIndhcm5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZXJyb3JcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19fX0se1wibmFtZVwiOlwiY29yZS5jb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuY3J5cHRvXCIsXCJhcGlcIjp7XCJnZXRSYW5kb21CeXRlc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl0sXCJyZXRcIjpcImJ1ZmZlclwifX19LHtcIm5hbWVcIjpcImNvcmUuZWNob1wiLFwiYXBpXCI6e1wic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcInN0cmluZ1wifX19LHtcIm5hbWVcIjpcImNvcmVcIixcImFwaVwiOntcImNyZWF0ZUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjaGFubmVsXCI6XCJwcm94eVwiLFwiaWRlbnRpZmllclwiOlwic3RyaW5nXCJ9fSxcImJpbmRDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJnZXRJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0TG9nZ2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJyZXF1aXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJwcm94eVwifX19LHtcIm5hbWVcIjpcImNvcmUub2F1dGhcIixcImFwaVwiOntcImluaXRpYXRlT0F1dGhcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1tcImFycmF5XCIsXCJzdHJpbmdcIl1dLFwicmV0XCI6e1wicmVkaXJlY3RcIjpcInN0cmluZ1wiLFwic3RhdGVcIjpcInN0cmluZ1wifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxhdW5jaEF1dGhGbG93XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn0sXCJib29sZWFuXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUucGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcInNldHVwXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCIsW1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImJvb2xlYW5cIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiY2hhbm5lbExhYmVsXCI6XCJzdHJpbmdcIixcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV19LFwib25SZWNlaXZlZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwib3BlbkRhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJjbG9zZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJvbk9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxJZFwiOlwic3RyaW5nXCJ9fSxcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxJZFwiOlwic3RyaW5nXCJ9fSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlVmlkZW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVBdWRpb1wiOlwibnVtYmVyXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcImNvcmUucnRjZGF0YWNoYW5uZWxcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiZ2V0TGFiZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldE9yZGVyZWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJnZXRNYXhQYWNrZXRMaWZlVGltZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0TWF4UmV0cmFuc21pdHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFByb3RvY29sXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXROZWdvdGlhdGVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0SWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJvbm9wZW5cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25jbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9ubWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRleHRcIjpcInN0cmluZ1wiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwiZ2V0QmluYXJ5VHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0QmluYXJ5VHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZEJ1ZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIl19fX0se1wibmFtZVwiOlwiY29yZS5ydGNwZWVyY29ubmVjdGlvblwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9XX0sXCJjcmVhdGVPZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wib2ZmZXJUb1JlY2VpdmVBdWRpb1wiOlwibnVtYmVyXCIsXCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcImljZVJlc3RhcnRcIjpcImJvb2xlYW5cIixcInZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cIjpcImJvb2xlYW5cIn1dLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJjcmVhdGVBbnN3ZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcInNldExvY2FsRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn1dfSxcImdldExvY2FsRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcInNldFJlbW90ZURlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XSxcInJldFwiOnt9fSxcImdldFJlbW90ZURlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJnZXRTaWduYWxpbmdTdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwidXBkYXRlSWNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9XSxcInJldFwiOnt9fSxcImFkZEljZUNhbmRpZGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiY2FuZGlkYXRlXCI6XCJzdHJpbmdcIixcInNkcE1pZFwiOlwic3RyaW5nXCIsXCJzZHBNTGluZUluZGV4XCI6XCJudW1iZXJcIn1dLFwicmV0XCI6e319LFwiZ2V0SWNlR2F0aGVyaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEljZUNvbm5lY3Rpb25TdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0Q29uZmlndXJhdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImljZVNlcnZlcnNcIjpbXCJhcnJheVwiLHtcInVybHNcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwidXNlcm5hbWVcIjpcInN0cmluZ1wiLFwiY3JlZGVudGlhbFwiOlwic3RyaW5nXCJ9XSxcImljZVRyYW5zcG9ydHNcIjpcInN0cmluZ1wiLFwicGVlcklkZW50aXR5XCI6XCJzdHJpbmdcIn19LFwiZ2V0TG9jYWxTdHJlYW1zXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRSZW1vdGVTdHJlYW1zXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRTdHJlYW1CeUlkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiYWRkU3RyZWFtXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOnt9fSxcInJlbW92ZVN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOnt9fSxcImNyZWF0ZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcIm9yZGVyZWRcIjpcImJvb2xlYW5cIixcIm1heFBhY2tldExpZmVUaW1lXCI6XCJudW1iZXJcIixcIm1heFJldHJhbnNtaXRzXCI6XCJudW1iZXJcIixcInByb3RvY29sXCI6XCJzdHJpbmdcIixcIm5lZ290aWF0ZWRcIjpcImJvb2xlYW5cIixcImlkXCI6XCJudW1iZXJcIn1dLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJvbmRhdGFjaGFubmVsXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhbm5lbFwiOlwic3RyaW5nXCJ9fSxcImdldFN0YXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwib2JqZWN0XCJ9LFwib25uZWdvdGlhdGlvbm5lZWRlZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uaWNlY2FuZGlkYXRlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2FuZGlkYXRlXCI6e1wiY2FuZGlkYXRlXCI6XCJzdHJpbmdcIixcInNkcE1pZFwiOlwic3RyaW5nXCIsXCJzZHBNTGluZUluZGV4XCI6XCJudW1iZXJcIn19fSxcIm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmFkZHN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9ucmVtb3Zlc3RyZWFtXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wic3RyZWFtXCI6XCJudW1iZXJcIn19LFwib25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLnN0b3JhZ2VcIixcImFwaVwiOntcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS50Y3Bzb2NrZXRcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImNvbm5lY3RlZFwiOlwiYm9vbGVhblwiLFwibG9jYWxBZGRyZXNzXCI6XCJzdHJpbmdcIixcImxvY2FsUG9ydFwiOlwibnVtYmVyXCIsXCJwZWVyQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwZWVyUG9ydFwiOlwibnVtYmVyXCJ9fSxcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9DT05ORUNURURcIjpcIlNvY2tldCBhbHJlYWR5IGNvbm5lY3RlZFwiLFwiSU5WQUxJRF9BUkdVTUVOVFwiOlwiSW52YWxpZCBhcmd1bWVudFwiLFwiVElNRURfT1VUXCI6XCJUaW1lZCBvdXRcIixcIk5PVF9DT05ORUNURURcIjpcIlNvY2tldCBub3QgY29ubmVjdGVkXCIsXCJORVRXT1JLX0NIQU5HRURcIjpcIk5ldHdvcmsgY2hhbmdlZFwiLFwiQ09OTkVDVElPTl9DTE9TRURcIjpcIkNvbm5lY3Rpb24gY2xvc2VkIGdyYWNlZnVsbHlcIixcIkNPTk5FQ1RJT05fUkVTRVRcIjpcIkNvbm5lY3Rpb24gcmVzZXRcIixcIkNPTk5FQ1RJT05fUkVGVVNFRFwiOlwiQ29ubmVjdGlvbiByZWZ1c2VkXCIsXCJDT05ORUNUSU9OX0ZBSUxFRFwiOlwiQ29ubmVjdGlvbiBmYWlsZWRcIixcIk5BTUVfTk9UX1JFU09MVkVEXCI6XCJETlMgbG9va3VwIGZhaWxlZFwiLFwiSU5URVJORVRfRElTQ09OTkVDVEVEXCI6XCJDYW5ub3QgcmVhY2ggYW55IG5ldHdvcmtcIixcIkFERFJFU1NfSU5WQUxJRFwiOlwiSW52YWxpZCBhZGRyZXNzXCIsXCJBRERSRVNTX1VOUkVBQ0hBQkxFXCI6XCJObyByb3V0ZSB0byBob3N0XCIsXCJIT1NUX1VOUkVBQ0hBQkxFXCI6XCJTT0NLUyBwcm94eSBzZXJ2ZXIgY291bGQgbm90IHJlYWNoIGhvc3RcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkRpc2Nvbm5lY3RcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjb25uZWN0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicGF1c2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJyZXN1bWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJwcmVwYXJlU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwid3JpdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZGF0YVwiOlwiYnVmZmVyXCJ9fSxcImxpc3RlblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uQ29ubmVjdGlvblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInNvY2tldFwiOlwibnVtYmVyXCIsXCJob3N0XCI6XCJzdHJpbmdcIixcInBvcnRcIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnVkcHNvY2tldFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJBTFJFQURZX0JPVU5EXCI6XCJTb2NrZXQgYWxyZWFkeSBib3VuZFwiLFwiSU5WQUxJRF9BUkdVTUVOVFwiOlwiSW52YWxpZCBhcmd1bWVudFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIlNORURfRkFJTEVEXCI6XCJTZW5kIGZhaWxlZFwifX0sXCJiaW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRJbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wibG9jYWxBZGRyZXNzXCI6XCJzdHJpbmdcIixcImxvY2FsUG9ydFwiOlwibnVtYmVyXCJ9fSxcInNlbmRUb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwicmV0XCI6XCJudW1iZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImRlc3Ryb3lcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wicmVzdWx0Q29kZVwiOlwibnVtYmVyXCIsXCJhZGRyZXNzXCI6XCJzdHJpbmdcIixcInBvcnRcIjpcIm51bWJlclwiLFwiZGF0YVwiOlwiYnVmZmVyXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUudmlld1wiLFwiYXBpXCI6e1wic2hvd1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiaXNTZWN1cmVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJwb3N0TWVzc2FnZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJvYmplY3RcIl19LFwibWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOlwib2JqZWN0XCJ9LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUud2Vic29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCIsW1wiYXJyYXlcIixcInN0cmluZ1wiXV19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9XSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wibnVtYmVyXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwib25PcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25FcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjb2RlXCI6XCJudW1iZXJcIixcInJlYXNvblwiOlwic3RyaW5nXCIsXCJ3YXNDbGVhblwiOlwiYm9vbGVhblwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnhoclwiLFwiYXBpXCI6e1wib3BlblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFwiYm9vbGVhblwiLFwic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJzdHJpbmdcIjpcInN0cmluZ1wiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcImFib3J0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldFJlc3BvbnNlSGVhZGVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXF1ZXN0SGVhZGVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIm92ZXJyaWRlTWltZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFJlc3BvbnNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCIsXCJvYmplY3RcIjpcIm9iamVjdFwifX0sXCJnZXRSZXNwb25zZVRleHRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldFJlc3BvbnNlVVJMXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldFJlc3BvbnNlVHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiZ2V0U3RhdHVzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRTdGF0dXNUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRUaW1lb3V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJzZXRUaW1lb3V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiXX0sXCJnZXRXaXRoQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJzZXRXaXRoQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYm9vbGVhblwiXX0sXCJvbmxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ucHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ubG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ubG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fSxcIm9udXBsb2FkbG9hZHN0YXJ0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRwcm9ncmVzc1wiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkYWJvcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRsb2FkXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWR0aW1lb3V0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRsb2FkZW5kXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRyZWFkeXN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e319fX0se1wibmFtZVwiOlwic29jaWFsXCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIlVzZXIgaXMgY3VycmVudGx5IG9mZmxpbmVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwiLFwiTE9HSU5fQkFEQ1JFREVOVElBTFNcIjpcIkVycm9yIGF1dGhlbnRpY2F0aW5nIHdpdGggc2VydmVyXCIsXCJMT0dJTl9GQUlMRURDT05ORUNUSU9OXCI6XCJFcnJvciBjb25uZWN0aW5nIHRvIHNlcnZlclwiLFwiTE9HSU5fQUxSRUFEWU9OTElORVwiOlwiVXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpblwiLFwiTE9HSU5fT0FVVEhFUlJPUlwiOlwiT0F1dGggRXJyb3JcIixcIlNFTkRfSU5WQUxJRERFU1RJTkFUSU9OXCI6XCJNZXNzYWdlIHNlbnQgdG8gYW4gaW52YWxpZCBkZXN0aW5hdGlvblwifX0sXCJTVEFUVVNcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJPRkZMSU5FXCI6XCJPRkZMSU5FXCIsXCJPTkxJTkVcIjpcIk9OTElORVwiLFwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCI6XCJPTkxJTkVfV0lUSF9PVEhFUl9BUFBcIn19LFwibG9naW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImFnZW50XCI6XCJzdHJpbmdcIixcInZlcnNpb25cIjpcInN0cmluZ1wiLFwidXJsXCI6XCJzdHJpbmdcIixcImludGVyYWN0aXZlXCI6XCJib29sZWFuXCIsXCJyZW1lbWJlckxvZ2luXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImNsZWFyQ2FjaGVkQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwiZ2V0Q2xpZW50c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwib2JqZWN0XCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRVc2Vyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwib2JqZWN0XCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kTWVzc2FnZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxvZ291dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uTWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImZyb21cIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25Vc2VyUHJvZmlsZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbWFnZURhdGFcIjpcInN0cmluZ1wifX0sXCJvbkNsaWVudFN0YXRlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JhZ2VcIixcImFwaVwiOntcInNjb3BlXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU0VTU0lPTlwiOjAsXCJERVZJQ0VfTE9DQUxcIjoxLFwiVVNFUl9MT0NBTFwiOjIsXCJTSEFSRURcIjozfX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIkRhdGFiYXNlIG5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcInNjb3BlXCI6XCJudW1iZXJcIn1dfSxcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwic3RvcmVidWZmZXJcIixcImFwaVwiOntcInNjb3BlXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU0VTU0lPTlwiOjAsXCJERVZJQ0VfTE9DQUxcIjoxLFwiVVNFUl9MT0NBTFwiOjIsXCJTSEFSRURcIjozfX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIkRhdGFiYXNlIG5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcInNjb3BlXCI6XCJudW1iZXJcIn1dfSxcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwiYnVmZmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJidWZmZXJcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwiYnVmZmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwidHJhbnNwb3J0XCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIk5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInByb3h5XCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGFnXCI6XCJzdHJpbmdcIixcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX1dO1xuIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMi4zLjBcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5ID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm47XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gYXNhcEZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgdmFyIG5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgICAgLy8gc2V0SW1tZWRpYXRlIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgaW5zdGVhZFxuICAgICAgdmFyIHZlcnNpb24gPSBwcm9jZXNzLnZlcnNpb25zLm5vZGUubWF0Y2goL14oPzooXFxkKylcXC4pPyg/OihcXGQrKVxcLik/KFxcKnxcXGQrKSQvKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZlcnNpb24pICYmIHZlcnNpb25bMV0gPT09ICcwJyAmJiB2ZXJzaW9uWzJdID09PSAnMTAnKSB7XG4gICAgICAgIG5leHRUaWNrID0gc2V0SW1tZWRpYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBuZXh0VGljayhsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB2ZXJ0eFxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnRleCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByID0gcmVxdWlyZTtcbiAgICAgICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaDtcbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydGV4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKCkge31cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEICA9IDI7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSkge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGhlbiA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4obWF5YmVUaGVuYWJsZSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsbGZpbGxtZW50KCkpO1xuICAgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgICAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuXG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cbiAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgICAgIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURURdICA9IG9uUmVqZWN0aW9uO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgICAgICByZXR1cm4gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICAgICAgdmFsdWUsIGVycm9yLCBzdWNjZWVkZWQsIGZhaWxlZDtcblxuICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgIHZhbHVlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSl7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgZW51bWVyYXRvci5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgZW51bWVyYXRvci5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoZW51bWVyYXRvci5fdmFsaWRhdGVJbnB1dChpbnB1dCkpIHtcbiAgICAgICAgZW51bWVyYXRvci5faW5wdXQgICAgID0gaW5wdXQ7XG4gICAgICAgIGVudW1lcmF0b3IubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgZW51bWVyYXRvci5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgIGVudW1lcmF0b3IuX2luaXQoKTtcblxuICAgICAgICBpZiAoZW51bWVyYXRvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKGVudW1lcmF0b3IucHJvbWlzZSwgZW51bWVyYXRvci5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnVtZXJhdG9yLmxlbmd0aCA9IGVudW1lcmF0b3IubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgZW51bWVyYXRvci5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKGVudW1lcmF0b3IuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChlbnVtZXJhdG9yLnByb21pc2UsIGVudW1lcmF0b3IuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QoZW51bWVyYXRvci5wcm9taXNlLCBlbnVtZXJhdG9yLl92YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoaW5wdXQpO1xuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICB2YXIgbGVuZ3RoICA9IGVudW1lcmF0b3IubGVuZ3RoO1xuICAgICAgdmFyIHByb21pc2UgPSBlbnVtZXJhdG9yLnByb21pc2U7XG4gICAgICB2YXIgaW5wdXQgICA9IGVudW1lcmF0b3IuX2lucHV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcbiAgICAgIHZhciBjID0gZW51bWVyYXRvci5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNNYXliZVRoZW5hYmxlKGVudHJ5KSkge1xuICAgICAgICBpZiAoZW50cnkuY29uc3RydWN0b3IgPT09IGMgJiYgZW50cnkuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgICAgZW50cnkuX29uZXJyb3IgPSBudWxsO1xuICAgICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudW1lcmF0b3IuX3dpbGxTZXR0bGVBdChjLnJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW51bWVyYXRvci5fcmVtYWluaW5nLS07XG4gICAgICAgIGVudW1lcmF0b3IuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBlbnVtZXJhdG9yLnByb21pc2U7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICBlbnVtZXJhdG9yLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnVtZXJhdG9yLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZW51bWVyYXRvci5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgZW51bWVyYXRvci5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsKGVudHJpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJGRlZmF1bHQodGhpcywgZW50cmllcykucHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2UoZW50cmllcykge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoIWxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsbWVudCh2YWx1ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25SZWplY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLCB1bmRlZmluZWQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlKG9iamVjdCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRjb3VudGVyID0gMDtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2U7XG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFByb21pc2VcbiAgICAgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICB0aGlzLl9pZCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRjb3VudGVyKys7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICBpZiAoIWxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlcikpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldFNjaGVkdWxlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXI7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldEFzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fYXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwO1xuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCAmJiAhb25GdWxmaWxsbWVudCB8fCBzdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQgJiYgIW9uUmVqZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcmVudC5fcmVzdWx0O1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCByZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9LFxuXG4gICAgLyoqXG4gICAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3luY2hyb25vdXNcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRBdXRob3IoKTtcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9XG5cbiAgICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBjYXRjaFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbCgpIHtcbiAgICAgIHZhciBsb2NhbDtcblxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGxvY2FsID0gc2VsZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICAgICAgaWYgKFAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsb2NhbC5Qcm9taXNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQ7XG4gICAgfVxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2UgPSB7XG4gICAgICAnUHJvbWlzZSc6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0LFxuICAgICAgJ3BvbHlmaWxsJzogbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0XG4gICAgfTtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbJ0VTNlByb21pc2UnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfVxuXG4gICAgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0KCk7XG59KS5jYWxsKHRoaXMpO1xuXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSovXG4vKmdsb2JhbHMgUlRDUGVlckNvbm5lY3Rpb24sIG1velJUQ1BlZXJDb25uZWN0aW9uLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAqL1xuLypnbG9iYWxzIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICovXG4vKmdsb2JhbHMgUlRDSWNlQ2FuZGlkYXRlLCBtb3pSVENJY2VDYW5kaWRhdGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG15UlRDUGVlckNvbm5lY3Rpb24gPSBudWxsO1xudmFyIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbnVsbDtcbnZhciBteVJUQ0ljZUNhbmRpZGF0ZSA9IG51bGw7XG5cbnZhciByZW5hbWVJY2VVUkxzID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWNvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuICBjb25maWcuaWNlU2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzZXJ2ZXIpIHtcbiAgICBzZXJ2ZXIudXJsID0gc2VydmVyLnVybHM7XG4gICAgZGVsZXRlIHNlcnZlci51cmxzO1xuICB9KTtcbiAgcmV0dXJuIGNvbmZpZztcbn07XG5cbnZhciBmaXhDaHJvbWVTdGF0c1Jlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgdmFyIHN0YW5kYXJkUmVwb3J0ID0ge307XG4gIHZhciByZXBvcnRzID0gcmVzcG9uc2UucmVzdWx0KCk7XG4gIHJlcG9ydHMuZm9yRWFjaChmdW5jdGlvbihyZXBvcnQpIHtcbiAgICB2YXIgc3RhbmRhcmRTdGF0cyA9IHtcbiAgICAgIGlkOiByZXBvcnQuaWQsXG4gICAgICB0aW1lc3RhbXA6IHJlcG9ydC50aW1lc3RhbXAsXG4gICAgICB0eXBlOiByZXBvcnQudHlwZVxuICAgIH07XG4gICAgcmVwb3J0Lm5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBzdGFuZGFyZFN0YXRzW25hbWVdID0gcmVwb3J0LnN0YXQobmFtZSk7XG4gICAgfSk7XG4gICAgc3RhbmRhcmRSZXBvcnRbc3RhbmRhcmRTdGF0cy5pZF0gPSBzdGFuZGFyZFN0YXRzO1xuICB9KTtcblxuICByZXR1cm4gc3RhbmRhcmRSZXBvcnQ7XG59O1xuXG52YXIgZml4RmlyZWZveFN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAvLyBHaXZpbmcgdGhlIHJlc3BvbnNlIGRpcmVjdGx5IHRvIHRoZSBjYWxsYmFjayBnaXZlcyBhbiBvYmplY3Qgdy9vIGludGVyZmFjZVxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvV2ViSURMX2JpbmRpbmdzI0Nocm9tZU9ubHlcbiAgdmFyIHN0YW5kYXJkUmVwb3J0ID0ge307XG4gIHJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gKHJlcG9ydCkge1xuICAgIHN0YW5kYXJkUmVwb3J0W3JlcG9ydC5pZF0gPSByZXBvcnQ7XG4gIH0pO1xuICByZXR1cm4gc3RhbmRhcmRSZXBvcnQ7XG59O1xuXG52YXIgc2Vzc2lvbkhhc0RhdGEgPSBmdW5jdGlvbihkZXNjKSB7XG4gIGlmICghZGVzYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaGFzRGF0YSA9IGZhbHNlO1xuICB2YXIgcHJlZml4ID0gJ209YXBwbGljYXRpb24nO1xuICBkZXNjLnNkcC5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgaWYgKGxpbmUuc2xpY2UoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgaGFzRGF0YSA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGhhc0RhdGE7XG59O1xuXG4vLyBVbmlmeSBQZWVyQ29ubmVjdGlvbiBPYmplY3QuXG5pZiAodHlwZW9mIFJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gUlRDUGVlckNvbm5lY3Rpb247XG59IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENQZWVyQ29ubmVjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uLCBjb25zdHJhaW50cykge1xuICAgIC8vIEZpcmVmb3ggdXNlcyAndXJsJyByYXRoZXIgdGhhbiAndXJscycgZm9yIFJUQ0ljZVNlcnZlci51cmxzXG4gICAgdmFyIHBjID0gbmV3IG1velJUQ1BlZXJDb25uZWN0aW9uKHJlbmFtZUljZVVSTHMoY29uZmlndXJhdGlvbiksIGNvbnN0cmFpbnRzKTtcblxuICAgIC8vIEZpcmVmb3ggc3RhdHMgcmVzcG9uc2UgaXMgb25seSB2aXNpYmxlICdDaHJvbWVPbmx5JyBzbyBwcm9jZXNzIGl0IGhlcmVcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGZpcmVmb3hTdGF0c1Jlc3BvbnNlKSB7XG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhmaXhGaXJlZm94U3RhdHNSZXNwb25zZShmaXJlZm94U3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIGJvdW5kR2V0U3RhdHMoc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXIsIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBmaXJlICdvbm5lZ290aWF0aW9ubmVlZGVkJyB3aGVuIGEgZGF0YSBjaGFubmVsIGlzIGNyZWF0ZWRcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04NDA3MjhcbiAgICB2YXIgZGF0YUVuYWJsZWQgPSBmYWxzZTtcbiAgICB2YXIgYm91bmRDcmVhdGVEYXRhQ2hhbm5lbCA9IHBjLmNyZWF0ZURhdGFDaGFubmVsLmJpbmQocGMpO1xuICAgIHBjLmNyZWF0ZURhdGFDaGFubmVsID0gZnVuY3Rpb24obGFiZWwsIGRhdGFDaGFubmVsRGljdCkge1xuICAgICAgdmFyIGRjID0gYm91bmRDcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KTtcbiAgICAgIGlmICghZGF0YUVuYWJsZWQpIHtcbiAgICAgICAgZGF0YUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBpZiAocGMub25uZWdvdGlhdGlvbm5lZWRlZCAmJlxuICAgICAgICAgICAgIXNlc3Npb25IYXNEYXRhKHBjLmxvY2FsRGVzY3JpcHRpb24pICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMucmVtb3RlRGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpO1xuICAgICAgICAgIHBjLm9ubmVnb3RpYXRpb25uZWVkZWQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGM7XG4gICAgfTtcblxuICAgIHJldHVybiBwYztcbiAgfTtcbn0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBDaHJvbWUgcmV0dXJucyBhIG5vbnN0YW5kYXJkLCBub24tSlNPTi1pZmlhYmxlIHJlc3BvbnNlIGZyb20gZ2V0U3RhdHMuXG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihjb25maWd1cmF0aW9uLCBjb25zdHJhaW50cykge1xuICAgIHZhciBwYyA9IG5ldyB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uLCBjb25zdHJhaW50cyk7XG4gICAgdmFyIGJvdW5kR2V0U3RhdHMgPSBwYy5nZXRTdGF0cy5iaW5kKHBjKTtcbiAgICBwYy5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXIgPSBmdW5jdGlvbihjaHJvbWVTdGF0c1Jlc3BvbnNlKSB7XG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhmaXhDaHJvbWVTdGF0c1Jlc3BvbnNlKGNocm9tZVN0YXRzUmVzcG9uc2UpKTtcbiAgICAgIH07XG4gICAgICAvLyBDaHJvbWUgYWxzbyB0YWtlcyBpdHMgYXJndW1lbnRzIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgICAgIGJvdW5kR2V0U3RhdHMoc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciwgZmFpbHVyZUNhbGxiYWNrLCBzZWxlY3Rvcik7XG4gICAgfTtcbiAgICByZXR1cm4gcGM7XG4gIH07XG59XG5cbi8vIFVuaWZ5IFNlc3Npb25EZXNjcnB0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG59XG5cbi8vIFVuaWZ5IEljZUNhbmRpZGF0ZSBPYmplY3QuXG5pZiAodHlwZW9mIFJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG59IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENJY2VDYW5kaWRhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDSWNlQ2FuZGlkYXRlID0gbW96UlRDSWNlQ2FuZGlkYXRlO1xufVxuXG5leHBvcnRzLlJUQ1BlZXJDb25uZWN0aW9uID0gbXlSVENQZWVyQ29ubmVjdGlvbjtcbmV4cG9ydHMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbXlSVENTZXNzaW9uRGVzY3JpcHRpb247XG5leHBvcnRzLlJUQ0ljZUNhbmRpZGF0ZSA9IG15UlRDSWNlQ2FuZGlkYXRlO1xuIiwiLypnbG9iYWxzIHByb2Nlc3MsIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20uanMgbG9nZ2luZyBwcm92aWRlciB0aGF0IGxvZ3MgdG8gY2hyb21lLCBmaXJlZm94LCBhbmQgbm9kZSBjb25zb2xlcy5cbiAqIEBDbGFzcyBMb2dnZXJfY29uc29sZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtjb25maWc6IE9iamVjdH0gY2FwIENhcGFiaWxpdGllcyAtIGNvbnNvbGUgcmVxdWlyZXMgZ2xvYmFsIGNvbmZpZy5cbiAqL1xudmFyIExvZ2dlcl9jb25zb2xlID0gZnVuY3Rpb24gKGNhcCkge1xuICB0aGlzLmxldmVsID0gKGNhcC5jb25maWcgJiYgY2FwLmNvbmZpZy5kZWJ1ZykgfHwgJ2xvZyc7XG4gIHRoaXMuY29uc29sZSA9IChjYXAuY29uZmlnICYmIGNhcC5jb25maWcuZ2xvYmFsLmNvbnNvbGUpO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBMb2dnaW5nIGxldmVscywgZm9yIGZpbHRlcmluZyBvdXRwdXQuXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICovXG5Mb2dnZXJfY29uc29sZS5sZXZlbCA9IHtcbiAgXCJkZWJ1Z1wiOiAwLFxuICBcImluZm9cIjogMSxcbiAgXCJsb2dcIjogMixcbiAgXCJ3YXJuXCI6IDMsXG4gIFwiZXJyb3JcIjogNFxufTtcblxuLyoqXG4gKiBQcmludCBhIG1lc3NhZ2Ugd2l0aCBhcHByb3ByaWF0ZSBmb3JtYXR0aW5nLlxuICogQG1ldGhvZCBwcmludFxuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSwgbXNnKSB7XG4gIHZhciBhcnIgPSBtc2c7XG4gIGlmICh0eXBlb2YgdGhpcy5jb25zb2xlID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb20gPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBhcnIgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyID0gW2Fycl07XG4gIH1cbiAgXG4gIGlmIChMb2dnZXJfY29uc29sZS5sZXZlbFt0aGlzLmxldmVsXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBMb2dnZXJfY29uc29sZS5sZXZlbFtzZXZlcml0eV0gPCBMb2dnZXJfY29uc29sZS5sZXZlbFt0aGlzLmxldmVsXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYgKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgICAvLyBOb2RlLlxuICAgICAgYXJyLnVuc2hpZnQoJ1xceDFCWzM5bScpO1xuICAgICAgYXJyLnVuc2hpZnQoJ1xceDFCWzMxbScgKyBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25zb2xlLm1heExvZ0xldmVsKSB7XG4gICAgICAvLyBGaXJlZm94IGluIEpTTSBjb250ZXh0OlxuICAgICAgLy8gICBodHRwOi8vbXhyLm1vemlsbGEub3JnL21vemlsbGEtcmVsZWFzZS9zb3VyY2UvdG9vbGtpdC9kZXZ0b29scy9Db25zb2xlLmpzbVxuICAgICAgaWYgKCF0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXApIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wID0gdGhpcy5jb25zb2xlLmR1bXA7XG4gICAgICAgIHRoaXMuY29uc29sZS5kdW1wID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uc29sZS5mcmVlZG9tRHVtcChzb3VyY2UgKyAnICcgKyBzZXZlcml0eVswXS50b1VwcGVyQ2FzZSgpICsgJyAnICtcbiAgICAgICAgICBhcnIuam9pbignICcpICsgJ1xcbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnIudW5zaGlmdCgnY29sb3I6IG5vbmUnKTtcbiAgICAgIGFyci51bnNoaWZ0KCdjb2xvcjogcmVkJyk7XG4gICAgICBhcnIudW5zaGlmdCgnJWMnICsgc291cmNlICsgJyVjJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0aGlzLmNvbnNvbGVbc2V2ZXJpdHldICYmIHRoaXMuY29uc29sZS5sb2cpIHtcbiAgICBzZXZlcml0eSA9ICdsb2cnO1xuICB9XG4gIHRoaXMuY29uc29sZVtzZXZlcml0eV0uYXBwbHkodGhpcy5jb25zb2xlLCBhcnIpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnbG9nJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGRlYnVnIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdkZWJ1ZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBpbmZvIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2luZm8nLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggd2FybiBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCd3YXJuJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGVycm9yIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdlcnJvcicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKiogUkVHSVNURVIgUFJPVklERVIgKiovXG5leHBvcnRzLnByb3ZpZGVyID0gTG9nZ2VyX2NvbnNvbGU7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5jb25zb2xlJztcbmV4cG9ydHMuZmxhZ3MgPSB7Y29uZmlnOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBjb25zb2xlLCBjcnlwdG8gKi9cbi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIENvcmUgcHJvdmlkZXIgZm9yIGdldHRpbmcgY3J5cHRvZ3JhcGhpY2FsbHkgcmFuZG9tIGJ1ZmZlcnMuIFRoaXNcbiAqIGZ1bmN0aW9uYWxpdHkgbWF5IG5vdCBleGlzdCBpbiBhbGwgdW5wcml2aWxlZGdlZCBjb250ZXh0cyAtIG5hbWVseSBhdCB0aGlzXG4gKiBwb2ludCwgZmlyZWZveCBhZGRvbiB3b3JrZXJzLlxuICogQENsYXNzIENvcmVfY3J5cHRvXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBwcm92aWRlci5cbiAqL1xudmFyIENvcmVfY3J5cHRvID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBidWZmZXIgb2Ygc29tZSBudW1iZXIgb2YgYnl0ZXMuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VuZGluZyBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2VuZFxuICovXG4gQ29yZV9jcnlwdG8ucHJvdG90eXBlLmdldFJhbmRvbUJ5dGVzID0gZnVuY3Rpb24obnVtYmVyLCBjb250aW51YXRpb24pIHtcbiAgICd1c2Ugc3RyaWN0JztcbiAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheShudW1iZXIpO1xuICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgY29udGludWF0aW9uKGJ1ZmZlci5idWZmZXIpO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IENvcmVfY3J5cHRvO1xuZXhwb3J0cy5uYW1lID0gXCJjb3JlLmNyeXB0b1wiO1xuIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgbWluaW1hbCBwcm92aWRlciBpbXBsZW1lbnRpbmcgdGhlIGNvcmUuZWNobyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW9uIHdpdGhcbiAqIGN1c3RvbSBjaGFubmVscy4gIFByaW1hcmlseSB1c2VkIGZvciB0ZXN0aW5nIHRoZSByb2J1c3RuZXNzIG9mIHRoZSBjdXN0b21cbiAqIGNoYW5uZWwgaW1wbGVtZW50YXRpb24uXG4gKiBAQ2xhc3MgRWNob191bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHttb2R1bGU6TW9kdWxlfSBjYXAgVGhlIG1vZHVsZSBjcmVhdGluZyB0aGlzIHByb3ZpZGVyLlxuICovXG52YXIgRWNob191bnByaXZpbGVnZWQgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgdGhpcy5tb2QgPSBjYXAubW9kdWxlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcblxuICAvLyBUaGUgQ29yZSBvYmplY3QgZm9yIG1hbmFnaW5nIGNoYW5uZWxzLlxuICB0aGlzLm1vZC5vbmNlKCdjb3JlJywgZnVuY3Rpb24oQ29yZSkge1xuICAgIHRoaXMuY29yZSA9IG5ldyBDb3JlKCk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIHRoaXMubW9kLmVtaXQodGhpcy5tb2QuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnY29yZSByZXF1ZXN0IGRlbGVnYXRlZCB0byBlY2hvJyxcbiAgICByZXF1ZXN0OiAnY29yZSdcbiAgfSk7XG59O1xuXG4vKipcbiAqIFNldHVwIHRoZSBwcm92aWRlciB0byBlY2hvIG9uIGEgc3BlY2lmaWMgcHJveHkuIFN1YnNlcXVlbnQgbWVzc2FnZXNcbiAqIEZyb20gdGhlIGN1c3RvbSBjaGFubmVsIGJvdW5kIGhlcmUgd2lsbCBiZSByZS1lbWl0dGVkIGFzIGEgbWVzc2FnZVxuICogZnJvbSB0aGUgcHJvdmlkZXIuICBTdWJzZXF1ZW50IG1lc3NhZ2VzIHRvIHRoZSBwcm92aWRlciB3aWxsIGJlXG4gKiBlbWl0dGVkIG9uIHRoZSBib3VuZCBjaGFubmVsLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3h5IFRoZSBpZGVudGlmaWVyIGZvciB0aGUgY3VzdG9tIGNoYW5uZWwgdG8gYmluZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2V0dXAgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIHNldHVwXG4gKi9cbkVjaG9fdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uKHByb3h5LCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKCk7XG4gIGlmICghdGhpcy5jb3JlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ25vIGNvcmUgYXZhaWxhYmxlIHRvIHNldHVwIHByb3h5IHdpdGggYXQgZWNobycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuY29yZS5iaW5kQ2hhbm5lbChwcm94eSwgZnVuY3Rpb24oY2hhbikge1xuICAgIGlmICh0aGlzLmNoYW4pIHtcbiAgICAgIHRoaXMuY2hhbi5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNoYW4gPSBjaGFuO1xuICAgIHRoaXMuY2hhbi5vbkNsb3NlKGZ1bmN0aW9uKCkge1xuICAgICAgZGVsZXRlIHRoaXMuY2hhbjtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdjaGFubmVsIGJvdW5kIHRvIGVjaG8nKTtcbiAgICB0aGlzLmNoYW4ub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnZnJvbSBjdXN0b20gY2hhbm5lbDogJyArIG0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBib3VuZCBjdXN0b20gY2hhbm5lbC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZW5kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZW5kaW5nIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZW5kXG4gKi9cbkVjaG9fdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oc3RyLCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKCk7XG4gIGlmICh0aGlzLmNoYW4pIHtcbiAgICB0aGlzLmNoYW4uZW1pdCgnbWVzc2FnZScsIHN0cik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ25vIGNoYW5uZWwgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBFY2hvX3VucHJpdmlsZWdlZDtcbmV4cG9ydHMubmFtZSA9IFwiY29yZS5lY2hvXCI7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cblxuLyoqXG4gKiBBbiBvQXV0aCBtZXRhLXByb3ZpZGVyIGFsbG93aW5nIG11bHRpcGxlIHBsYXRmb3JtLWRlcGVuZGFudFxuICogb0F1dGggaW1wbGVtZW50YXRpb25zIHRvIHNlcnZlIGFzIHRoZSByZWRpcmVjdFVSTCBmb3IgYW4gb0F1dGggZmxvdy5cbiAqIFRoZSBjb3JlIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgaW4gcHJvdmlkZXJzL29hdXRoLCBhbmQgYXJlXG4gKiBzdXBwbGVtZW50ZWQgaW4gcGxhdGZvcm0tZGVwZW5kZW50IHJlcG9zaXRvcmllcy5cbiAqXG4gKi9cbnZhciBPQXV0aCA9IGZ1bmN0aW9uIChoYW5kbGVycywgY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdGhpcy5vbmdvaW5nID0ge307XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIG9BdXRoIGhhbmRsZXJzLlxuICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgcHJvdmlkZXIgaXMgdXNlZCwgYW5kIGJpbmRzIHRoZSBjdXJyZW50XG4gKiBvQXV0aCBwcm92aWRlciB0byBiZSBhc3NvY2lhdGVkIHdpdGggcmVnaXN0ZXJlZCBoYW5kbGVycy4gVGhpcyBpcyB1c2VkIHNvXG4gKiB0aGF0IGhhbmRsZXJzIHdoaWNoIGFyZSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyIGFwcGx5IG9ubHkgdGhlIHRoZSBmcmVlZG9tKClcbiAqIHNldHVwIGNhbGwgdGhleSBhcmUgYXNzb2NpYXRlZCB3aXRoLCB3aGlsZSBzdGlsbCBiZWluZyByZWdpc3RlcmVkIGFjcm9zc1xuICogbXVsdGlwbGUgaW5zdGFuY2VzIG9mIE9BdXRoIHByb3ZpZGVycy5cbiAqXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge1tjb25zdHJ1Y3Rvcl19IGhhbmRsZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZWdpc3RlciA9IGZ1bmN0aW9uIChoYW5kbGVycykge1xuICB2YXIgaSxcbiAgICAgIGJvdW5kSGFuZGxlcnMgPSBbXTtcbiAgaWYgKCFoYW5kbGVycyB8fCAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIE9BdXRoLnJlc2V0KCk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBib3VuZEhhbmRsZXJzLnB1c2gobmV3IGhhbmRsZXJzW2ldKCkpO1xuICB9XG4gIGV4cG9ydHMucHJvdmlkZXIgPSBPQXV0aC5iaW5kKHRoaXMsIGJvdW5kSGFuZGxlcnMpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgb0F1dGggcHJvdmlkZXIgcmVnaXN0cmF0aW9ucy5cbiAqIEBtZXRob2QgcmVzZXRcbiAqIEBwcml2YXRlXG4gKi9cbk9BdXRoLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBbXSk7XG59O1xuXG4vKipcbiAqIEluZGljYXRlIHRoZSBpbnRlbnRpb24gdG8gaW5pdGlhdGUgYW4gb0F1dGggZmxvdywgYWxsb3dpbmcgYW4gYXBwcm9wcmlhdGVcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlZ2luIG1vbml0b3JpbmcgZm9yIHJlZGlyZWN0aW9uLlxuICpcbiAqIEBtZXRob2QgaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVkaXJlY3RVUklzIC0gb0F1dGggcmVkaXJlY3Rpb24gVVJJcyByZWdpc3RlcmVkIHdpdGggdGhlXG4gKiAgICAgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIHZhbHVlIG9mIHNjaGVtYToge3tyZWRpcmVjdDpTdHJpbmcsIHN0YXRlOlN0cmluZ319XG4gKiAgICB3aGVyZSAncmVkaXJlY3QnIGlzIHRoZSBjaG9zZW4gcmVkaXJlY3QgVVJJXG4gKiAgICBhbmQgJ3N0YXRlJyBpcyB0aGUgc3RhdGUgdG8gcGFzcyB0byB0aGUgVVJJIG9uIGNvbXBsZXRpb24gb2Ygb0F1dGhcbiAqL1xuT0F1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbiAocmVkaXJlY3RVUklzLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHByb21pc2UsIGksIHN1Y2Nlc3NDYWxsYmFjaztcbiAgc3VjY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhpcy5vbmdvaW5nW3Jlc3VsdC5zdGF0ZV0gPSB0aGlzLmhhbmRsZXJzW2ldO1xuICAgIGNvbnRpbnVhdGlvbihyZXN1bHQpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyc1tpXS5pbml0aWF0ZU9BdXRoKHJlZGlyZWN0VVJJcywgc3VjY2Vzc0NhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvL0lmIGhlcmUsIHdlIGhhdmUgbm8gY29tcGF0aWJsZSBwcm92aWRlcnNcbiAgY29udGludWF0aW9uKG51bGwsIHtcbiAgICAnZXJyY29kZSc6ICdVTktOT1dOJyxcbiAgICAnbWVzc2FnZSc6ICdObyByZXF1ZXN0ZWQgcmVkaXJlY3RzIGNhbiBiZSBoYW5kbGVkLidcbiAgfSk7XG4gIHJldHVybjtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVyYWN0aXZlIC0gV2hldGhlciB0byBsYXVuY2ggYW4gaW50ZXJhY3RpdmUgT0F1dGggZmxvdy5cbiAqICAgIERlZmF1bHRzIHRvIHRydWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSByZXNwb25zZSBVcmwgY29udGFpbmluZyB0aGUgYWNjZXNzIHRva2VuXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBpbnRlcmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICBpZiAoIXRoaXMub25nb2luZy5oYXNPd25Qcm9wZXJ0eShzdGF0ZU9iai5zdGF0ZSkpIHtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICAnZXJyY29kZSc6ICdVTktOT1dOJyxcbiAgICAgICdtZXNzYWdlJzogJ1lvdSBtdXN0IGJlZ2luIHRoZSBvQXV0aCBmbG93IHdpdGggaW5pdGlhdGVPQXV0aCBmaXJzdCdcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGludGVyYWN0aXZlID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnRlcmFjdGl2ZSA9IHRydWU7XG4gIH1cbiAgdGhpcy5vbmdvaW5nW3N0YXRlT2JqLnN0YXRlXS5sYXVuY2hBdXRoRmxvdyhcbiAgICAgIGF1dGhVcmwsIHN0YXRlT2JqLCBpbnRlcmFjdGl2ZSwgY29udGludWF0aW9uKTtcbiAgZGVsZXRlIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV07XG59O1xuXG5leHBvcnRzLnJlZ2lzdGVyID0gT0F1dGgucmVnaXN0ZXI7XG5leHBvcnRzLnJlc2V0ID0gT0F1dGgucmVzZXQ7XG5leHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBbXSk7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5vYXV0aCc7XG4iLCIvKmdsb2JhbHMgY29uc29sZSwgUlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgbW96UlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgUlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENJY2VDYW5kaWRhdGUgKi9cbi8qZ2xvYmFscyBBcnJheUJ1ZmZlciwgQmxvYiAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG4vKipcbiAqIERhdGFQZWVyIC0gYSBjbGFzcyB0aGF0IHdyYXBzIHBlZXIgY29ubmVjdGlvbnMgYW5kIGRhdGEgY2hhbm5lbHMuXG4gKi9cbi8vIFRPRE86IGNoZWNrIHRoYXQgSGFuZGxpbmcgb2YgcHJhbnN3ZXIgaXMgdHJlYXRlZCBhcHByb3ByaWF0ZWx5LlxudmFyIFNpbXBsZURhdGFQZWVyU3RhdGUgPSB7XG4gIERJU0NPTk5FQ1RFRDogJ0RJU0NPTk5FQ1RFRCcsXG4gIENPTk5FQ1RJTkc6ICdDT05ORUNUSU5HJyxcbiAgQ09OTkVDVEVEOiAnQ09OTkVDVEVEJ1xufTtcblxuZnVuY3Rpb24gU2ltcGxlRGF0YVBlZXIocGVlck5hbWUsIHN0dW5TZXJ2ZXJzLCBkYXRhQ2hhbm5lbENhbGxiYWNrcywgbW9ja3MpIHtcbiAgdmFyIGNvbnN0cmFpbnRzLFxuICAgIGNvbmZpZyxcbiAgICBpO1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcyA9IGRhdGFDaGFubmVsQ2FsbGJhY2tzO1xuICB0aGlzLm9uQ29ubmVjdGVkUXVldWUgPSBbXTtcblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1vY2tzLlJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gbW96UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENQZWVyQ29ubmVjdGlvblwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb2Nrcy5SVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ1Nlc3Npb25EZXNjcmlwdGlvblwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb2Nrcy5SVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IG1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ0ljZUNhbmRpZGF0ZVwiKTtcbiAgfVxuXG5cbiAgY29uc3RyYWludHMgPSB7XG4gICAgb3B0aW9uYWw6IFt7RHRsc1NydHBLZXlBZ3JlZW1lbnQ6IHRydWV9XVxuICB9O1xuICAvLyBBIHdheSB0byBzcGVhayB0byB0aGUgcGVlciB0byBzZW5kIFNEUCBoZWFkZXJzIGV0Yy5cbiAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZSA9IG51bGw7XG5cbiAgdGhpcy5wYyA9IG51bGw7ICAvLyBUaGUgcGVlciBjb25uZWN0aW9uLlxuICAvLyBHZXQgVFVSTiBzZXJ2ZXJzIGZvciB0aGUgcGVlciBjb25uZWN0aW9uLlxuICBjb25maWcgPSB7aWNlU2VydmVyczogW119O1xuICBmb3IgKGkgPSAwOyBpIDwgc3R1blNlcnZlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25maWcuaWNlU2VydmVycy5wdXNoKHtcbiAgICAgICd1cmwnIDogc3R1blNlcnZlcnNbaV1cbiAgICB9KTtcbiAgfVxuICB0aGlzLnBjID0gbmV3IHRoaXMuUlRDUGVlckNvbm5lY3Rpb24oY29uZmlnLCBjb25zdHJhaW50cyk7XG4gIC8vIEFkZCBiYXNpYyBldmVudCBoYW5kbGVycy5cbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwiaWNlY2FuZGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkljZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJuZWdvdGlhdGlvbm5lZWRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25OZWdvdGlhdGlvbk5lZWRlZC5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUNoYW5uZWwuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcInNpZ25hbGluZ3N0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYSBiZXR0ZXIgd2F5IHRvIGRldGVjdCBjb25uZWN0aW9uLiAgV2Ugc3RhcnQgb3V0XG4gICAgLy8gYXMgXCJzdGFibGVcIiBldmVuIGJlZm9yZSB3ZSBhcmUgY29ubmVjdGVkLlxuICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IGZpcmVkIGZvciBjb25uZWN0aW9ucyBjbG9zZWQgYnkgdGhlIG90aGVyIHNpZGUuXG4gICAgLy8gVGhpcyB3aWxsIGJlIGZpeGVkIGluIG0zNywgYXQgdGhhdCBwb2ludCB3ZSBzaG91bGQgZGlzcGF0Y2ggYW4gb25DbG9zZVxuICAgIC8vIGV2ZW50IGhlcmUgZm9yIGZyZWVkb20udHJhbnNwb3J0IHRvIHBpY2sgdXAuXG4gICAgaWYgKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT09IFwic3RhYmxlXCIpIHtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfSk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuICAvLyBUaGlzIHN0YXRlIHZhcmlhYmxlIGlzIHVzZWQgdG8gZmFrZSBvZmZlci9hbnN3ZXIgd2hlbiB0aGV5IGFyZSB3cm9uZ2x5XG4gIC8vIHJlcXVlc3RlZCBhbmQgd2UgcmVhbGx5IGp1c3QgbmVlZCB0byByZXVzZSB3aGF0IHdlIGFscmVhZHkgaGF2ZS5cbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQ7XG5cbiAgLy8gTm90ZTogdG8gYWN0dWFsbHkgZG8gc29tZXRoaW5nIHdpdGggZGF0YSBjaGFubmVscyBvcGVuZWQgYnkgYSBwZWVyLCB3ZVxuICAvLyBuZWVkIHNvbWVvbmUgdG8gbWFuYWdlIFwiZGF0YWNoYW5uZWxcIiBldmVudC5cbn1cblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0YWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKGNvbnRpbnVhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2NvcmUucGVlcmNvbm5lY3Rpb24gY3JlYXRlT2ZmZXIgZmFpbGVkLicpO1xuICB9LCBjb25zdGFpbnRzKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5ydW5XaGVuQ29ubmVjdGVkID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgaWYgKHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQpIHtcbiAgICBmdW5jKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLnB1c2goZnVuYyk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgbWVzc2FnZSwgY29udGludWF0aW9uKSB7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXS5zZW5kKG1lc3NhZ2UpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vcGVuRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5wYy5jcmVhdGVEYXRhQ2hhbm5lbChjaGFubmVsSWQsIHt9KTtcbiAgZGF0YUNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBkYXRhQ2hhbm5lbCk7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH0uYmluZCh0aGlzKTtcbiAgZGF0YUNoYW5uZWwub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAvL0AocnlzY2hlbmcpIHRvZG8gLSByZXBsYWNlIHdpdGggZXJyb3JzIHRoYXQgd29yayBhY3Jvc3MgdGhlIGludGVyZmFjZVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCBlcnIpO1xuICB9O1xuICAvLyBGaXJlZm94IGRvZXMgbm90IGZpcmUgXCJuZWdvdGlhdGlvbm5lZWRlZFwiLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIG5lZ290YXRlIGhlcmUgaWYgd2UgYXJlIG5vdCBjb25uZWN0ZWQuXG4gIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04NDA3MjhcbiAgaWYgKHR5cGVvZiBtb3pSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdGhpcy5wY1N0YXRlID09PSBTaW1wbGVEYXRhUGVlclN0YXRlLkRJU0NPTk5FQ1RFRCkge1xuICAgIHRoaXMubmVnb3RpYXRlQ29ubmVjdGlvbigpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuY2xvc2VDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCkge1xuICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uY2xvc2UoKTtcbiAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZGF0YUNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF07XG4gICAgcmV0dXJuIGRhdGFDaGFubmVsLmJ1ZmZlcmVkQW1vdW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcIk5vIGNoYW5uZWwgd2l0aCBpZDogXCIgKyBjaGFubmVsSWQpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLnNldFNlbmRTaWduYWxNZXNzYWdlID0gZnVuY3Rpb24gKHNlbmRTaWduYWxNZXNzYWdlRm4pIHtcbiAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZSA9IHNlbmRTaWduYWxNZXNzYWdlRm47XG59O1xuXG4vLyBIYW5kbGUgYSBtZXNzYWdlIHNlbmQgb24gdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCB0byB0aGlzIHBlZXIuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuaGFuZGxlU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlVGV4dCkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcImhhbmRsZVNpZ25hbE1lc3NhZ2U6IFxcblwiICsgbWVzc2FnZVRleHQpO1xuICB2YXIganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZVRleHQpLFxuICAgIGljZV9jYW5kaWRhdGU7XG5cbiAgLy8gVE9ETzogSWYgd2UgYXJlIG9mZmVyaW5nIGFuZCB0aGV5IGFyZSBhbHNvIG9mZmVycmluZyBhdCB0aGUgc2FtZSB0aW1lLFxuICAvLyBwaWNrIHRoZSBvbmUgd2hvIGhhcyB0aGUgbG93ZXIgcmFuZG9tSWQ/XG4gIC8vICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09IFwiaGF2ZS1sb2NhbC1vZmZlclwiICYmIGpzb24uc2RwICYmXG4gIC8vICAgIGpzb24uc2RwLnR5cGUgPT0gXCJvZmZlclwiICYmIGpzb24uc2RwLnJhbmRvbUlkIDwgdGhpcy5sb2NhbFJhbmRvbUlkKVxuICBpZiAoanNvbi5zZHApIHtcbiAgICAvLyBTZXQgdGhlIHJlbW90ZSBkZXNjcmlwdGlvbi5cbiAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKFxuICAgICAgbmV3IHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGpzb24uc2RwKSxcbiAgICAgIC8vIFN1Y2Nlc3NcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldFJlbW90ZURlc2NyaXB0aW9uIHN1Y2NlZWRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24udHlwZSA9PT0gXCJvZmZlclwiKSB7XG4gICAgICAgICAgdGhpcy5wYy5jcmVhdGVBbnN3ZXIodGhpcy5vbkRlc2NyaXB0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIC8vIEZhaWx1cmVcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgICBcInNldFJlbW90ZURlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2UgaWYgKGpzb24uY2FuZGlkYXRlKSB7XG4gICAgLy8gQWRkIHJlbW90ZSBpY2UgY2FuZGlkYXRlLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBBZGRpbmcgaWNlIGNhbmRpZGF0ZTogXCIgKyBKU09OLnN0cmluZ2lmeShqc29uLmNhbmRpZGF0ZSkpO1xuICAgIGljZV9jYW5kaWRhdGUgPSBuZXcgdGhpcy5SVENJY2VDYW5kaWRhdGUoanNvbi5jYW5kaWRhdGUpO1xuICAgIHRoaXMucGMuYWRkSWNlQ2FuZGlkYXRlKGljZV9jYW5kaWRhdGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2Fybih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgXCJoYW5kbGVTaWduYWxNZXNzYWdlIGdvdCB1bmV4cGVjdGVkIG1lc3NhZ2U6IFwiLCBtZXNzYWdlVGV4dCk7XG4gIH1cbn07XG5cbi8vIENvbm5lY3QgdG8gdGhlIHBlZXIgYnkgdGhlIHNpZ25hbGxpbmcgY2hhbm5lbC5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5uZWdvdGlhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RJTkc7XG4gIHRoaXMucGMuY3JlYXRlT2ZmZXIoXG4gICAgdGhpcy5vbkRlc2NyaXB0aW9uLmJpbmQodGhpcyksXG4gICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgXCJjcmVhdGVPZmZlciBmYWlsZWQ6IFwiLCBlLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQ7XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuaXNDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5wYyB8fCB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcImNsb3NlZFwiO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaXNDbG9zZWQoKSkge1xuICAgIHRoaXMucGMuY2xvc2UoKTtcbiAgfVxuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIkNsb3NlZCBwZWVyIGNvbm5lY3Rpb24uXCIpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmFkZERhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY2hhbm5lbCkge1xuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdID0gY2hhbm5lbDtcblxuICBpZiAoY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcImNvbm5lY3RpbmdcIikge1xuICAgIGNoYW5uZWwub25vcGVuID0gY2FsbGJhY2tzLm9uT3BlbkZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcbiAgfVxuXG4gIGNoYW5uZWwub25jbG9zZSA9IGNhbGxiYWNrcy5vbkNsb3NlRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuXG4gIGNoYW5uZWwub25tZXNzYWdlID0gY2FsbGJhY2tzLm9uTWVzc2FnZUZuLmJpbmQodGhpcywgY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuXG4gIGNoYW5uZWwub25lcnJvciA9IGNhbGxiYWNrcy5vbkVycm9yRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWx9KTtcbn07XG5cbi8vIFdoZW4gd2UgZ2V0IG91ciBkZXNjcmlwdGlvbiwgd2Ugc2V0IGl0IHRvIGJlIG91ciBsb2NhbCBkZXNjcmlwdGlvbiBhbmRcbi8vIHNlbmQgaXQgdG8gdGhlIHBlZXIuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogc2V0TG9jYWxEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoeydzZHAnOiBkZXNjcmlwdGlvbn0pKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgICBcInNldExvY2FsRGVzY3JpcHRpb24gZmFpbGVkOlwiLCBlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgXCJfb25EZXNjcmlwdGlvbjogX3NlbmRTaWduYWxNZXNzYWdlIGlzIG5vdCBzZXQsIHNvIHdlIGRpZCBub3QgXCIgK1xuICAgICAgICAgICAgXCJzZXQgdGhlIGxvY2FsIGRlc2NyaXB0aW9uLiBcIik7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbk5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvbk5lZ290aWF0aW9uTmVlZGVkXCIsXG4gIC8vICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGMpLCBlKTtcbiAgaWYgKHRoaXMucGNTdGF0ZSAhPT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICAvLyBOZWdvdGlhdGlvbiBtZXNzYWdlcyBhcmUgZmFsc2VseSByZXF1ZXN0ZWQgZm9yIG5ldyBkYXRhIGNoYW5uZWxzLlxuICAgIC8vICAgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD0yNDMxXG4gICAgLy8gVGhpcyBjb2RlIGlzIGEgaGFjayB0byBzaW1wbHkgcmVzZXQgdGhlIHNhbWUgbG9jYWwgYW5kIHJlbW90ZVxuICAgIC8vIGRlc2NyaXB0aW9uIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgYXBwcm9wcmlhdGUgZGF0YSBjaGFubmVsIG9wZW4gZXZlbnQuXG4gICAgLy8gVE9ETzogZml4L3JlbW92ZSB0aGlzIHdoZW4gQ2hyb21lIGlzc3VlIGlzIGZpeGVkLlxuICAgIHZhciBsb2dTdWNjZXNzID0gZnVuY3Rpb24gKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBvcCArIFwiIHN1Y2NlZWRlZCBcIik7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpLFxuICAgICAgbG9nRmFpbCA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBvcCArIFwiIGZhaWxlZDogXCIgKyBlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJvZmZlclwiKSB7XG4gICAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldExvY2FsRGVzY3JpcHRpb25cIikpO1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbiAmJiB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uICYmXG4gICAgICAgIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi50eXBlID09PSBcImFuc3dlclwiKSB7XG4gICAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIikpO1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgJywgb25OZWdvdGlhdGlvbk5lZWRlZCBmYWlsZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubmVnb3RpYXRlQ29ubmVjdGlvbigpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uSWNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgIC8vIFNlbmQgSWNlQ2FuZGlkYXRlIHRvIHBlZXIuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJpY2UgY2FsbGJhY2sgd2l0aCBjYW5kaWRhdGVcIiwgZXZlbnQpO1xuICAgIGlmICh0aGlzLnNlbmRTaWduYWxNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnY2FuZGlkYXRlJzogZXZlbnQuY2FuZGlkYXRlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LlwiKTtcbiAgICB9XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vblNpZ25hbGluZ1N0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIm9uU2lnbmFsaW5nU3RhdGVDaGFuZ2U6IFwiLCB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQ7XG4gICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfSk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuYWRkRGF0YUNoYW5uZWwoZXZlbnQuY2hhbm5lbC5sYWJlbCwgZXZlbnQuY2hhbm5lbCk7XG4gIC8vIFJUQ0RhdGFDaGFubmVscyBjcmVhdGVkIGJ5IGEgUlRDRGF0YUNoYW5uZWxFdmVudCBoYXZlIGFuIGluaXRpYWxcbiAgLy8gc3RhdGUgb2Ygb3Blbiwgc28gdGhlIG9ub3BlbiBldmVudCBmb3IgdGhlIGNoYW5uZWwgd2lsbCBub3RcbiAgLy8gZmlyZS4gV2UgbmVlZCB0byBmaXJlIHRoZSBvbk9wZW5EYXRhQ2hhbm5lbCBldmVudCBoZXJlXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3dlYnJ0Yy8jaWRsLWRlZi1SVENEYXRhQ2hhbm5lbFN0YXRlXG5cbiAgLy8gRmlyZWZveCBjaGFubmVscyBkbyBub3QgaGF2ZSBhbiBpbml0aWFsIHN0YXRlIG9mIFwib3BlblwiXG4gIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDAwNDc4XG4gIGlmIChldmVudC5jaGFubmVsLnJlYWR5U3RhdGUgPT09IFwib3BlblwiKSB7XG4gICAgdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcy5vbk9wZW5GbihldmVudC5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBldmVudC5jaGFubmVsLmxhYmVsfSk7XG4gIH1cbn07XG5cbi8vIF9zaWduYWxsaW5nQ2hhbm5lbCBpcyBhIGNoYW5uZWwgZm9yIGVtaXR0aW5nIGV2ZW50cyBiYWNrIHRvIHRoZSBmcmVlZG9tIEh1Yi5cbmZ1bmN0aW9uIFBlZXJDb25uZWN0aW9uKHBvcnRNb2R1bGUsIGRpc3BhdGNoRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiwgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDSWNlQ2FuZGlkYXRlKSB7XG4gIC8vIENoYW5uZWwgZm9yIGVtaXR0aW5nIGV2ZW50cyB0byBjb25zdW1lci5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcblxuICAvLyBhIChob3BlZnVsbHkgdW5pcXVlKSBJRCBmb3IgZGVidWdnaW5nLlxuICB0aGlzLnBlZXJOYW1lID0gXCJwXCIgKyBNYXRoLnJhbmRvbSgpO1xuXG4gIC8vIFRoaXMgaXMgdGhlIHBvcnRBcHAgKGRlZmluZWQgaW4gZnJlZWRvbS9zcmMvcG9ydC1hcHAuanMpLiBBIHdheSB0byBzcGVha1xuICAvLyB0byBmcmVlZG9tLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUgPSBwb3J0TW9kdWxlLm1vZHVsZTtcblxuICAvLyBGb3IgdGVzdHMgd2UgbWF5IG1vY2sgb3V0IHRoZSBQZWVyQ29ubmVjdGlvbiBhbmRcbiAgLy8gU2Vzc2lvbkRlc2NyaXB0aW9uIGltcGxlbWVudGF0aW9uc1xuICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gUlRDUGVlckNvbm5lY3Rpb247XG4gIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcblxuICAvLyBUaGlzIGlzIHRoZSBhIGNoYW5uZWwgdG8gc2VuZCBzaWduYWxsaW5nIG1lc3NhZ2VzLlxuICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsID0gbnVsbDtcblxuICAvLyBUaGUgRGF0YVBlZXIgb2JqZWN0IGZvciB0YWxraW5nIHRvIHRoZSBwZWVyLlxuICB0aGlzLnBlZXIgPSBudWxsO1xuXG4gIC8vIFRoZSBDb3JlIG9iamVjdCBmb3IgbWFuYWdpbmcgY2hhbm5lbHMuXG4gIHRoaXMuZnJlZWRvbU1vZHVsZS5vbmNlKCdjb3JlJywgZnVuY3Rpb24gKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLmZyZWVkb21Nb2R1bGUuZW1pdCh0aGlzLmZyZWVkb21Nb2R1bGUuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnY29yZSByZXF1ZXN0IGRlbGVnYXRlZCB0byBwZWVyY29ubmVjdGlvbicsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufVxuXG4vLyBTdGFydCBhIHBlZXIgY29ubmVjdGlvbiB1c2luZyB0aGUgZ2l2ZW4gZnJlZWRvbUNoYW5uZWxJZCBhcyB0aGUgd2F5IHRvXG4vLyBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwZWVyLiBUaGUgYXJndW1lbnQgfGZyZWVkb21DaGFubmVsSWR8IGlzIGEgd2F5IHRvIHNwZWFrXG4vLyB0byBhbiBpZGVudGl0eSBwcm92aWRlIHRvIHNlbmQgdGhlbSBTRFAgaGVhZGVycyBuZWdvdGlhdGUgdGhlIGFkZHJlc3MvcG9ydCB0b1xuLy8gc2V0dXAgdGhlIHBlZXIgdG8gcGVlckNvbm5lY3Rpb24uXG4vL1xuLy8gb3B0aW9uczoge1xuLy8gICBwZWVyTmFtZTogc3RyaW5nLCAgIC8vIEZvciBwcmV0dHkgcHJpbnRpbmcgbWVzc2FnZXMgYWJvdXQgdGhpcyBwZWVyLlxuLy8gICBkZWJ1ZzogYm9vbGVhbiAgICAgICAgICAgLy8gc2hvdWxkIHdlIGFkZCBleHRyYVxuLy8gfVxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKHNpZ25hbGxpbmdDaGFubmVsSWQsIHBlZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dW5TZXJ2ZXJzLCBpbml0aWF0ZUNvbm5lY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlck5hbWUgPSBwZWVyTmFtZTtcbiAgdmFyIG1vY2tzID0ge1JUQ1BlZXJDb25uZWN0aW9uOiB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZTogdGhpcy5SVENJY2VDYW5kaWRhdGV9LFxuICAgIHNlbGYgPSB0aGlzLFxuICAgIGRhdGFDaGFubmVsQ2FsbGJhY2tzID0ge1xuICAgICAgLy8gb25PcGVuRm4gaXMgY2FsbGVkIGF0IHRoZSBwb2ludCBtZXNzYWdlcyB3aWxsIGFjdHVhbGx5IGdldCB0aHJvdWdoLlxuICAgICAgb25PcGVuRm46IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCwgaW5mbykge1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoXCJvbk9wZW5EYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgb25DbG9zZUZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25DbG9zZURhdGFDaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGFubmVsSWQ6IGluZm8ubGFiZWx9KTtcbiAgICAgIH0sXG4gICAgICAvLyBEZWZhdWx0IG9uIHJlYWwgbWVzc2FnZSBwcmludHMgaXQgdG8gY29uc29sZS5cbiAgICAgIG9uTWVzc2FnZUZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8sIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICdidWZmZXInOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICdiaW5hcnknOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChldmVudC5kYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICd0ZXh0JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiBlcnJvciwgcHJpbnRzIGl0LlxuICAgICAgb25FcnJvckZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8sIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGRhdGFDaGFubmVsLnBlZXJOYW1lICsgXCI6IGRhdGFDaGFubmVsKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbC5kYXRhQ2hhbm5lbC5sYWJlbCArIFwiKTogZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbm5lbElkLFxuICAgIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbjtcblxuICB0aGlzLnBlZXIgPSBuZXcgU2ltcGxlRGF0YVBlZXIodGhpcy5wZWVyTmFtZSwgc3R1blNlcnZlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcywgbW9ja3MpO1xuXG4gIC8vIFNldHVwIGxpbmsgYmV0d2VlbiBGcmVlZG9tIG1lc3NhZ2luZyBhbmQgX3BlZXIncyBzaWduYWxsaW5nLlxuICAvLyBOb3RlOiB0aGUgc2lnbmFsbGluZyBjaGFubmVsIHNob3VsZCBvbmx5IGJlIHNlbmRpbmcgcmVjZWl2ZWluZyBzdHJpbmdzLlxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwoc2lnbmFsbGluZ0NoYW5uZWxJZCwgZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLnBlZXIuc2V0U2VuZFNpZ25hbE1lc3NhZ2UoZnVuY3Rpb24gKG1zZykge1xuICAgICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbC5lbWl0KCdtZXNzYWdlJywgbXNnKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwub24oJ21lc3NhZ2UnLFxuICAgICAgICB0aGlzLnBlZXIuaGFuZGxlU2lnbmFsTWVzc2FnZS5iaW5kKHRoaXMucGVlcikpO1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgncmVhZHknKTtcbiAgICBpZiAoIWluaXRpYXRlQ29ubmVjdGlvbikge1xuICAgICAgdGhpcy5wZWVyLnJ1bldoZW5Db25uZWN0ZWQoY29udGludWF0aW9uKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgaWYgKGluaXRpYXRlQ29ubmVjdGlvbikge1xuICAgIC8vIFNldHVwIGEgY29ubmVjdGlvbiByaWdodCBhd2F5LCB0aGVuIGludm9rZSBjb250aW51YXRpb24uXG4gICAgY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArICcgaW5pdGlhdGluZyBjb25uZWN0aW9uJyk7XG4gICAgY2hhbm5lbElkID0gJ2hlbGxvJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24gPSBmdW5jdGlvbiAoc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5EYXRhQ2hhbm5lbChjaGFubmVsSWQsIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbik7XG4gIH1cbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdHJhaW50cywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5jcmVhdGVPZmZlcihjb25zdHJhaW50cywgY29udGludWF0aW9uKTtcbn07XG5cbi8vIFRPRE86IGRlbGF5IGNvbnRpbnVhdGlvbiB1bnRpbCB0aGUgb3BlbiBjYWxsYmFjayBmcm9tIF9wZWVyIGlzIGNhbGxlZC5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5vcGVuRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLm9wZW5EYXRhQ2hhbm5lbChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2VEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY2xvc2VDaGFubmVsKGNoYW5uZWxJZCk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLy8gQ2FsbGVkIHRvIHNlbmQgYSBtZXNzYWdlIG92ZXIgdGhlIGdpdmVuIGRhdGFjaGFubmVsIHRvIGEgcGVlci4gSWYgdGhlIGRhdGFcbi8vIGNoYW5uZWwgZG9lc24ndCBhbHJlYWR5IGV4aXN0LCB0aGUgRGF0YVBlZXIgY3JlYXRlcyBpdC5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRJbmZvLCBjb250aW51YXRpb24pIHtcbiAgdmFyIG9ialRvU2VuZCA9IHNlbmRJbmZvLnRleHQgfHwgc2VuZEluZm8uYnVmZmVyIHx8IHNlbmRJbmZvLmJpbmFyeTtcbiAgaWYgKHR5cGVvZiBvYmpUb1NlbmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk5vIHZhbGlkIGRhdGEgdG8gc2VuZCBoYXMgYmVlbiBwcm92aWRlZC5cIiwgc2VuZEluZm8pO1xuICAgIHJldHVybjtcbiAgfVxuICAvL0RFQlVHXG4gIC8vIG9ialRvU2VuZCA9IG5ldyBBcnJheUJ1ZmZlcig0KTtcbiAgLy9ERUJVR1xuICB0aGlzLnBlZXIuc2VuZChzZW5kSW5mby5jaGFubmVsTGFiZWwsIG9ialRvU2VuZCwgY29udGludWF0aW9uKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy5wZWVyLmdldEJ1ZmZlcmVkQW1vdW50KGNoYW5uZWxJZCkpO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBpZiAodGhpcy5wZWVyLmlzQ2xvc2VkKCkpIHtcbiAgICAvLyBQZWVyIGFscmVhZHkgY2xvc2VkLCBydW4gY29udGludWF0aW9uIHdpdGhvdXQgZGlzcGF0Y2hpbmcgZXZlbnQuXG4gICAgY29udGludWF0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGVlci5jbG9zZSgpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJvbkNsb3NlXCIpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBQZWVyQ29ubmVjdGlvbjtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnBlZXJjb25uZWN0aW9uJztcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qanNsaW50IHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbi8qZ2xvYmFscyBDb21wb25lbnRzLCBBcnJheUJ1ZmZlciAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbnZhciBldmVudE5hbWVzID0gW1xuICAnb25vcGVuJyxcbiAgJ29uZXJyb3InLFxuICAnb25jbG9zZScsXG4gICdvbm1lc3NhZ2UnXG5dO1xuXG52YXIgdW5BdHRhY2hlZENoYW5uZWxzID0ge307XG52YXIgcGVuZGluZ0V2ZW50cyA9IHt9O1xudmFyIGFsbG9jYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCkge1xuICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gIHVuQXR0YWNoZWRDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcbiAgcGVuZGluZ0V2ZW50c1tpZF0gPSBbXTtcbiAgZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIC8vIFRoaXMgbGlzdGVuZXIgd2lsbCBiZSBvdmVycmlkZGVuIChyZS1zZXQpIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciBydW5zLlxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBjdXJyZW50SGFuZGxlciA9IGRhdGFDaGFubmVsW2V2ZW50TmFtZV07XG4gICAgICBpZiAoY3VycmVudEhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgcGVuZGluZ0V2ZW50c1tpZF0ucHVzaChldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBJZiBhbiBldmVudCBzb21laG93IHJ1bnMgb24gdGhpcyBldmVudCBoYW5kbGVyIGFmdGVyIGl0IGhhcyBiZWVuXG4gICAgICAgIC8vIHJlcGxhY2VkLCBmb3J3YXJkIHRoYXQgZXZlbnQgdG8gdGhlIG5ldyBldmVudCBoYW5kbGVyLlxuICAgICAgICBjdXJyZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGhhbmRsZXIgZm9yICcgKyBldmVudC50eXBlICsgJyBldmVudCcpO1xuICAgICAgfVxuICAgIH07XG4gICAgZGF0YUNoYW5uZWxbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH0pO1xuICByZXR1cm4gaWQ7XG59O1xuXG52YXIgUlRDRGF0YUNoYW5uZWxBZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudHMsIGlkKSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnRzO1xuICBpZiAoIXVuQXR0YWNoZWRDaGFubmVsc1tpZF0pIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSUQsIGNyZWF0aW5nIGFjdGluZyBvbiB1bmF0dGFjaGVkIERhdGFDaGFubmVsJyk7XG4gICAgdmFyIENvbm5lY3Rpb24gPSByZXF1aXJlKCcuL2NvcmUucnRjcGVlcmNvbm5lY3Rpb24nKS5wcm92aWRlcixcbiAgICAgIHByb3ZpZGVyID0gbmV3IENvbm5lY3Rpb24oKTtcbiAgICBpZCA9IHByb3ZpZGVyLmNyZWF0ZURhdGFDaGFubmVsKCk7XG4gICAgcHJvdmlkZXIuY2xvc2UoKTtcbiAgfVxuXG4gIHRoaXMuY2hhbm5lbCA9IHVuQXR0YWNoZWRDaGFubmVsc1tpZF07XG4gIGRlbGV0ZSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuXG4gIC8vIEFmdGVyIHRoZSBjb25zdHJ1Y3RvciByZXR1cm5zLCBhbmQgdGhlIGNhbGxlciBoYXMgYSBjaGFuY2UgdG8gcmVnaXN0ZXJcbiAgLy8gZXZlbnQgbGlzdGVuZXJzLCBmaXJlIGFsbCBwZW5kaW5nIGV2ZW50cywgYW5kIHRoZW4gZW5zdXJlIHRoYXQgYWxsXG4gIC8vIHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBoYW5kbGVkIGltbWVkaWF0ZWx5LlxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZHJhaW5QZW5kaW5nRXZlbnRzKGlkKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gbXVzdCBub3QgYmUgY2FsbGVkIHVudGlsIGFmdGVyIHRoZSBwZW5kaW5nIGV2ZW50cyBhcmVcbiAgICAvLyBkcmFpbmVkLCB0byBlbnN1cmUgdGhhdCBtZXNzYWdlcyBhcmUgZGVsaXZlcmVkIGluIG9yZGVyLlxuICAgIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xuICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5kcmFpblBlbmRpbmdFdmVudHMgPSBmdW5jdGlvbihpZCkge1xuICBwZW5kaW5nRXZlbnRzW2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpc1snb24nICsgZXZlbnQudHlwZV0oZXZlbnQpO1xuICB9LmJpbmQodGhpcykpO1xuICBkZWxldGUgcGVuZGluZ0V2ZW50c1tpZF07XG59O1xuXG4vLyBBdHRhY2ggb3IgZGV0YWNoIGxpc3RlbmVycyBmb3IgZXZlbnRzIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24uXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm1hbmFnZUV2ZW50cyA9IGZ1bmN0aW9uIChhdHRhY2gpIHtcbiAgZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAoYXR0YWNoKSB7XG4gICAgICB0aGlzW2V2ZW50TmFtZV0gPSB0aGlzW2V2ZW50TmFtZV0uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY2hhbm5lbFtldmVudE5hbWVdID0gdGhpc1tldmVudE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsW2V2ZW50TmFtZV07XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRMYWJlbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubGFiZWwpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRPcmRlcmVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5vcmRlcmVkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TWF4UGFja2V0TGlmZVRpbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm1heFBhY2tldExpZmVUaW1lKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TWF4UmV0cmFuc21pdHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm1heFJldHJhbnNtaXRzKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0UHJvdG9jb2wgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLnByb3RvY29sKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TmVnb3RpYXRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubmVnb3RpYXRlZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5pZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldFJlYWR5U3RhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLnJlYWR5U3RhdGUpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuYnVmZmVyZWRBbW91bnQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRCaW5hcnlUeXBlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5iaW5hcnlUeXBlKTtcbn07XG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNldEJpbmFyeVR5cGUgPSBmdW5jdGlvbiAoYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLmJpbmFyeVR5cGUgPSBiaW5hcnlUeXBlO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHRleHQsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5zZW5kKHRleHQpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZW5kQnVmZmVyID0gZnVuY3Rpb24gKGJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLnNlbmQoYnVmZmVyKTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgaWYgKCF0aGlzLmNoYW5uZWwpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuICB0aGlzLm1hbmFnZUV2ZW50cyhmYWxzZSk7XG4gIHRoaXMuY2hhbm5lbC5jbG9zZSgpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm9wZW4nLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uZXJyb3InLCB7XG4gICAgZXJyY29kZTogZXZlbnQudHlwZSxcbiAgICBtZXNzYWdlOiBldmVudC5tZXNzYWdlXG4gIH0pO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25jbG9zZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge3RleHQ6IGV2ZW50LmRhdGF9KTtcbiAgfSBlbHNlIGlmICh0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSA9PT0gJ2FycmF5YnVmZmVyJyAmJlxuICAgICAgdHlwZW9mIENvbXBvbmVudHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAhKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAvLyBJbiBGaXJlZm94IEFkZG9ucywgaW5jb21pbmcgYXJyYXkgYnVmZmVycyBhcmUgbm90IGFsd2F5cyBvd25lZCBieSB0aGVcbiAgICAvLyBBZGRvbiBjb250ZXh0LiBUaGUgZm9sbG93aW5nIGxpbmUgY2xvbmVzIHRoZSBvYmplY3QgdG8gdGFrZSBvd25lcnNoaXAuXG4gICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NvbXBvbmVudHMudXRpbHMuY2xvbmVJbnRvXG4gICAgdmFyIG15RGF0YSA9IENvbXBvbmVudHMudXRpbHMuY2xvbmVJbnRvKGV2ZW50LmRhdGEsIHt9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHtidWZmZXI6IG15RGF0YX0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge2J1ZmZlcjogZXZlbnQuZGF0YX0pO1xuICB9XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjZGF0YWNoYW5uZWxcIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENEYXRhQ2hhbm5lbEFkYXB0ZXI7XG5leHBvcnRzLmFsbG9jYXRlID0gYWxsb2NhdGVDaGFubmVsO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuXG52YXIgYWRhcHRlciA9IHJlcXVpcmUoJ3dlYnJ0Yy1hZGFwdGVyJyk7XG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGFkYXB0ZXIuUlRDUGVlckNvbm5lY3Rpb247XG52YXIgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gYWRhcHRlci5SVENTZXNzaW9uRGVzY3JpcHRpb247XG52YXIgUlRDSWNlQ2FuZGlkYXRlID0gYWRhcHRlci5SVENJY2VDYW5kaWRhdGU7XG5cbnZhciBEYXRhQ2hhbm5lbCA9IHJlcXVpcmUoJy4vY29yZS5ydGNkYXRhY2hhbm5lbCcpO1xuXG52YXIgUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCwgY29uZmlndXJhdGlvbikge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5vdGU6IFlvdSBjYW4ndCBhc2sgdGhlIHByb3ZpZGVyIHRvIGNsb3NlIHlvdSBzeW5jaHJvbm91c2x5LCBzaW5jZVxuICAgIC8vIHRoZSBjb25zdHJ1Y3RvciBoYXMgbm90IHlldCByZXR1cm5lZCwgc28gdGhlcmUncyBubyAndGhpcycgdGhhdFxuICAgIC8vIHRoZSBwcm92aWRlciBjYW4ga25vdyBhYm91dCB5ZXQuXG4gICAgc2V0VGltZW91dChjYXAucHJvdmlkZXIuY2xvc2UuYmluZChjYXAucHJvdmlkZXIsIHRoaXMpLCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50cyA9IFtcbiAgICAnb25kYXRhY2hhbm5lbCcsXG4gICAgJ29ubmVnb3RpYXRpb25uZWVkZWQnLFxuICAgICdvbmljZWNhbmRpZGF0ZScsXG4gICAgJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLFxuICAgICdvbmFkZHN0cmVhbScsXG4gICAgJ29ucmVtb3Zlc3RyZWFtJyxcbiAgICAnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnXG4gIF07XG4gIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudF0gPSB0aGlzW2V2ZW50XS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jb25uZWN0aW9uW2V2ZW50XSA9IHRoaXNbZXZlbnRdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb25uZWN0aW9uW2V2ZW50XTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9mZmVyKHJlc29sdmUsIHJlamVjdCwgY29uc3RyYWludHMpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihyZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0TG9jYWxEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5yZW1vdGVEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFNpZ25hbGluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5zaWduYWxpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnVwZGF0ZUljZSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uKSB7XG4gIHRoaXMuY29ubmVjdGlvbi51cGRhdGVJY2UoY29uZmlndXJhdGlvbik7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUdhdGhlcmluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VHYXRoZXJpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUNvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGNvbmZpZ3VyYXRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdHJlYW1CeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdHJ5IHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogZS5uYW1lLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAobGFiZWwsIGRhdGFDaGFubmVsRGljdCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZSh0aGlzLmNvbm5lY3Rpb24uY3JlYXRlRGF0YUNoYW5uZWwobGFiZWwsIGRhdGFDaGFubmVsRGljdCkpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGlkKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uZ2V0U3RhdHMoc2VsZWN0b3IsIHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGlkID0gRGF0YUNoYW5uZWwuYWxsb2NhdGUoZXZlbnQuY2hhbm5lbCk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25kYXRhY2hhbm5lbCcsIHtjaGFubmVsOiBpZH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbm5lZ290aWF0aW9ubmVlZGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25uZWdvdGlhdGlvbm5lZWRlZCcsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmljZWNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgbXNnO1xuICBpZiAoZXZlbnQuY2FuZGlkYXRlICYmIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUpIHtcbiAgICBtc2cgPSB7XG4gICAgICBjYW5kaWRhdGU6IHtcbiAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtc2cgPSB7XG4gICAgICBjYW5kaWRhdGU6IG51bGxcbiAgICB9O1xuICB9XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25pY2VjYW5kaWRhdGUnLCBtc2cpO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbnNpZ25hbGluZ3N0YXRlY2hhbmdlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25hZGRzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy9UT0RPOiBwcm92aWRlIElEIG9mIGFsbG9jYXRlZCBzdHJlYW0uXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25hZGRzdHJlYW0nLCBldmVudC5zdHJlYW0pO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9ucmVtb3Zlc3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vVE9ETzogcHJvdmlkZSBJRCBvZiBkZWFsbG9jYXRlZCBzdHJlYW0uXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25yZW1vdmVzdHJlYW0nLCBldmVudC5zdHJlYW0pO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnJ0Y3BlZXJjb25uZWN0aW9uXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0ge3Byb3ZpZGVyOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBsb2NhbFN0b3JhZ2UgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgRnJlZURPTSBjb3JlLnN0b3JhZ2UgcHJvdmlkZXIgdGhhdCBkZXBlbmRzIG9uIGxvY2FsU3RvcmFnZVxuICogVGh1cywgdGhpcyBvbmx5IHdvcmtzIGluIHRoZSBjb250ZXh0IG9mIGEgd2VicGFnZSBhbmQgaGFzXG4gKiBzb21lIHNpemUgbGltaXRhdGlvbnMuXG4gKiBOb3RlIHRoYXQgdGhpcyBjYW4gY29uZmxpY3Qgd2l0aCBvdGhlciBzY3JpcHRzIHVzaW5nIGxvY2FsU3RvcmFnZVxuICogYXMga2V5cyBhcmUgcmF3XG4gKiBAQ2xhc3MgU3RvcmFnZV91bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqL1xudmFyIFN0b3JhZ2VfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTGlzdHMga2V5cyBpbiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5XG4gKiBAbWV0aG9kIGtleXNcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gIH1cbiAgY29udGludWF0aW9uKHJlc3VsdCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGtleSBmcm9tIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIGdldCBmcm9tIHN0b3JhZ2UuXG4gKiBAbWV0aG9kIGdldFxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgdmFyIHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgY29udGludWF0aW9uKHZhbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb250aW51YXRpb24obnVsbCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGEga2V5IGluIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIHNhdmUgaW4gc3RvcmFnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2F2ZSBpbiBzdG9yYWdlLlxuICogQG1ldGhvZCBzZXRcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICBjb250aW51YXRpb24ocmV0KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEga2V5IGZyb20gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gc3RvcmFnZTtcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIGNvbnRpbnVhdGlvbihyZXQpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gU3RvcmFnZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5zdG9yYWdlJztcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG52YXIgRXZlbnRJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi8uLi9zcmMvcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uLy4uL3NyYy9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIENvcmUgZnJlZWRvbSBzZXJ2aWNlcyBhdmFpbGFibGUgdG8gYWxsIG1vZHVsZXMuXG4gKiBDcmVhdGVkIGJ5IHRoZSBlbnZpcm9ubWVudCBoZWxwZXIgaW4gcmVzcG9uc2UgdG8gYSAnY29yZScgcmVxdWVzdC5cbiAqIEBDbGFzcyBDb3JlX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgdGhpcyBjb3JlIGlzIGNvbm5lY3RlZCB3aXRoLlxuICogQHByaXZhdGVcbiAqL1xudmFyIENvcmVfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24obWFuYWdlciwgcG9zdE1lc3NhZ2UpIHtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlci5tb2R1bGU7XG4gIHRoaXMuZGVidWcgPSB0aGlzLm1hbmFnZXIuZGVidWc7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHMgPSB7fTtcblxuQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gdW5kZWZpbmVkO1xuQ29yZV91bnByaXZpbGVnZWQubW9kdWxlSW50ZXJuYWwgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlIGEgY3VzdG9tIGNoYW5uZWwuXG4gKiBSZXR1cm5zIHRoZSBzdHJ1Y3R1cmUge2NoYW5uZWw6IFByb3h5LCBpZGVudGlmaWVyOiBPYmplY3R9LFxuICogd2hlcmUgdGhlIGlkZW50aWZpZXIgY2FuIGJlICdyZWRlZW1lZCcgYnkgYW5vdGhlciBtb2R1bGUgb3IgcHJvdmlkZXIgdXNpbmdcbiAqIGJpbmQgY2hhbm5lbCwgYXQgd2hpY2ggcG9pbnQgdGhlIGRlZmVycmVkIG9iamVjdCB3aWxsIHJlc29sdmUgd2l0aCBhIGNoYW5uZWxcbiAqIGJldHdlZW4gdGhlIHR3byBlbmRwb2ludHMuXG4gKiBAbWV0aG9kIGNyZWF0ZUNoYW5uZWxcbiAqIEBwYXJhbXMge0Z1bmN0aW9ufSBjb250aW51YXRpb24gTWV0aG9kIHRvIGNhbGwgd2l0aCB0aGUgY29zbnRydWN0ZWQgc3RydWN0dXJlLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuY3JlYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvbikge1xuICB2YXIgcHJveHkgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMubWFuYWdlci5kZWJ1ZyksXG4gICAgICBpZCA9IHV0aWwuZ2V0SWQoKSxcbiAgICAgIGNoYW4gPSB0aGlzLmdldENoYW5uZWwocHJveHkpO1xuICB0aGlzLm1hbmFnZXIuc2V0dXAocHJveHkpO1xuXG4gIGlmICh0aGlzLmlzSW5Nb2R1bGUoKSkge1xuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdyZWdpc3RlcicsXG4gICAgICAgIGlkOiBpZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZF0gPSB7XG4gICAgbG9jYWw6IHRydWUsXG4gICAgcHJveHk6IHByb3h5XG4gIH07XG5cbiAgcHJveHkub25jZSgnc3RhcnQnLCB0aGlzLmdldENoYW5uZWwuYmluZCh0aGlzLCBwcm94eSkpO1xuXG4gIGNvbnRpbnVhdGlvbih7XG4gICAgY2hhbm5lbDogY2hhbixcbiAgICBpZGVudGlmaWVyOiBpZFxuICB9KTtcbn07XG5cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRDaGFubmVsID0gZnVuY3Rpb24ocHJveHkpIHtcbiAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKSxcbiAgICAgIGNoYW4gPSBpZmFjZSgpO1xuICBjaGFuLmNsb3NlID0gaWZhY2UuY2xvc2U7XG4gIGNoYW4ub25DbG9zZSA9IGlmYWNlLm9uQ2xvc2U7XG4gIGlmYWNlLm9uQ2xvc2UoY2hhbiwgZnVuY3Rpb24oKSB7XG4gICAgcHJveHkuZG9DbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIGNoYW47XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgYSBtZXNzYWdlIGZyb20gYW5vdGhlciBjb3JlIGluc3RhbmNlLlxuICogTm90ZTogQ29yZV91bnByaXZpbGVnZWQgaXMgbm90IHJlZ2lzdGVyZWQgb24gdGhlIGh1Yi4gaXQgaXMgYSBwcm92aWRlcixcbiAqICAgICBhcyBpdCdzIGxvY2F0aW9uIGFuZCBuYW1lIHdvdWxkIGluZGljYXRlLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieVxuICogICAgIHBvcnQtYXBwIHRvIHJlbGF5IG1lc3NhZ2VzIHVwIHRvIGhpZ2hlciBsZXZlbHMuICBNb3JlIGdlbmVyYWxseSwgdGhlXG4gKiAgICAgbWVzc2FnZXMgZW1pdHRlZCBieSB0aGUgY29yZSB0byAndGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hbmFnZS5kZWxlZ2F0ZSdcbiAqICAgICBTaG91bGQgYmUgb25NZXNzYWdlZCB0byB0aGUgY29udHJvbGxpbmcgY29yZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgVGhlIG1lc3NzYWdlIGZyb20gYW4gaXNvbGF0ZWQgY29yZSBwcm92aWRlci5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNvdXJjZSwgbXNnKSB7XG4gIGlmIChtc2cudHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuICAgIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdID0ge1xuICAgICAgcmVtb3RlOiB0cnVlLFxuICAgICAgcmVzb2x2ZTogbXNnLnJlcGx5LFxuICAgICAgc291cmNlOiBzb3VyY2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnY2xlYXInKSB7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdO1xuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnYmluZCcpIHtcbiAgICBpZiAoQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF0pIHtcbiAgICAgIHRoaXMuYmluZENoYW5uZWwobXNnLmlkLCBmdW5jdGlvbigpIHt9LCBzb3VyY2UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlcXVpcmUnKSB7XG4gICAgc291cmNlLnJlcXVpcmUobXNnLmlkLCBtc2cubWFuaWZlc3QpO1xuICB9XG59O1xuXG4vKipcbiAqIEJpbmQgYSBjdXN0b20gY2hhbm5lbC5cbiAqIENyZWF0ZXMgYSBwcm94eSBpbnRlcmZhY2UgdG8gdGhlIGN1c3RvbSBjaGFubmVsLCB3aGljaCB3aWxsIGJlIGJvdW5kIHRvXG4gKiB0aGUgcHJveHkgb2J0YWluZWQgdGhyb3VnaCBhbiBlYXJsaWVyIGNyZWF0ZUNoYW5uZWwgY2FsbC5cbiAqIGNoYW5uZWwgdG8gYSBwcm94eS5cbiAqIEBtZXRob2QgYmluZENoYW5uZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBpZGVudGlmaWVyIEFuIGlkZW50aWZpZXIgb2J0YWluZWQgdGhyb3VnaCBjcmVhdGVDaGFubmVsLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdpdGggdGhlIHByb3h5LlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuYmluZENoYW5uZWwgPSBmdW5jdGlvbihpZGVudGlmaWVyLCBjb250aW51YXRpb24sIHNvdXJjZSkge1xuICB2YXIgdG9CaW5kID0gQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdLFxuICAgICAgbmV3U291cmNlID0gIXNvdXJjZTtcblxuICAvLyB3aGVuIGJpbmRDaGFubmVsIGlzIGNhbGxlZCBkaXJlY3RseSwgc291cmNlIHdpbGwgYmUgdW5kZWZpbmVkLlxuICAvLyBXaGVuIGl0IGlzIHByb3BvZ2F0ZWQgYnkgb25NZXNzYWdlLCBhIHNvdXJjZSBmb3IgYmluZGluZyB3aWxsIGFscmVhZHkgZXhpc3QuXG4gIGlmIChuZXdTb3VyY2UpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdtYWtpbmcgbG9jYWwgcHJveHkgZm9yIGNvcmUgYmluZGluZycpO1xuICAgIHNvdXJjZSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5kZWJ1Zyk7XG4gICAgdGhpcy5tYW5hZ2VyLnNldHVwKHNvdXJjZSk7XG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIGEga25vd24gaWRlbnRpZmllciBhbmQgaXMgaW4gdGhlIHNhbWUgY29udGV4dCwgYmluZGluZyBpcyBlYXN5LlxuICBpZiAodG9CaW5kICYmIHRvQmluZC5sb2NhbCkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ0JpbmRpbmcgYSBjaGFubmVsIHRvIHBvcnQgb24gdGhpcyBodWI6JyArIHNvdXJjZSk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoc291cmNlLCBpZGVudGlmaWVyLCB0b0JpbmQucHJveHksICdkZWZhdWx0Jyk7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpIHtcbiAgICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgICBmbG93OiAnY29yZScsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICB0eXBlOiAnY2xlYXInLFxuICAgICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0b0JpbmQgJiYgdG9CaW5kLnJlbW90ZSkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ0JpbmRpbmcgYSBjaGFubmVsIGludG8gYSBtb2R1bGUuJyk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgbmV3U291cmNlID8gJ2RlZmF1bHQnIDogaWRlbnRpZmllcixcbiAgICAgICAgdG9CaW5kLnNvdXJjZSxcbiAgICAgICAgaWRlbnRpZmllcik7XG4gICAgdG9CaW5kLnJlc29sdmUoe1xuICAgICAgdHlwZTogJ0JpbmQgQ2hhbm5lbCcsXG4gICAgICByZXF1ZXN0Oidjb3JlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ2JpbmQnLFxuICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgfVxuICAgIH0pO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gIH0gZWxzZSBpZiAodGhpcy5pc0luTW9kdWxlKCkpIHtcbiAgICB0aGlzLmRlYnVnLmluZm8oJ2RlbGVnYXRpbmcgY2hhbm5lbCBiaW5kIGZvciBhbiB1bmtub3duIElEOicgKyBpZGVudGlmaWVyKTtcbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnYmluZCcsXG4gICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgc291cmNlLm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24ocCwgY2IpIHtcbiAgICAgIGNiKHRoaXMuZ2V0Q2hhbm5lbChwKSk7XG4gICAgfS5iaW5kKHRoaXMsIHNvdXJjZSwgY29udGludWF0aW9uKSk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoc291cmNlLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIHRoaXMubWFuYWdlci5odWIuZ2V0RGVzdGluYXRpb24odGhpcy5tYW5hZ2VyLmRlbGVnYXRlKSxcbiAgICAgICAgaWRlbnRpZmllcik7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdBc2tlZCB0byBiaW5kIHVua25vd24gY2hhbm5lbDogJyArIGlkZW50aWZpZXIpO1xuICAgIHRoaXMuZGVidWcubG9nKENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVscyk7XG4gICAgY29udGludWF0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNvdXJjZS5nZXRJbnRlcmZhY2UpIHtcbiAgICBjb250aW51YXRpb24odGhpcy5nZXRDaGFubmVsKHNvdXJjZSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNJbk1vZHVsZVxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoaXMgY2xhc3MgaXMgcnVubmluZyBpbiBhIG1vZHVsZS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmlzSW5Nb2R1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpO1xufTtcblxuLyoqXG4gKiBSZXF1aXJlIGEgZHluYW1pYyBkZXBlbmRlbmN5IGZvciB5b3VyIGZyZWVkb20gbW9kdWxlLlxuICogSWYgbmV3IHBlcm1pc3Npb25zIGFyZSBuZWVkZWQgYmV5b25kIHdoYXQgYXJlIGFscmVhZHkgYXZhaWxhYmxlIHRvIHRoZVxuICogZnJlZWRvbSBjb250ZXh0LCB0aGUgdXNlciB3aWxsIG5lZWQgdG8gYXBwcm92ZSBvZiB0aGUgcmVxdWVzdGVkIHBlcm1pc3Npb25zLlxuICogQG1ldGhvZCByZXF1aXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIFVSTCBvZiB0aGUgbWFuaWZlc3QgdG8gcmVxdWlyZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSBvZiB0aGUgZGVwZW5kZW5jeSB0byBleHBvc2UgaWYgbm90IGRlZmF1bHQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBkZXBlbmRlbmN5LlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUucmVxdWlyZSA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgYXBpLCBjYWxsYmFjaykge1xuICBpZiAodGhpcy5pc0luTW9kdWxlKCkgJiYgQ29yZV91bnByaXZpbGVnZWQubW9kdWxlSW50ZXJuYWwpIHtcbiAgICAvLyBSZWdpc3RlciBhIGNhbGxiYWNrIHdpdGggbW9kdWxlSW50ZXJuYWwuXG4gICAgLy8gRGVwZW5kZW5jeU5hbWUgaXMgdGhlIG5hbWUgb2YgdGhlIGNoYW5uZWwgbW9kdWVsSW50ZXJuYWwgd2lsbCBhbGxvY2F0ZVxuICAgIC8vIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uY2UgYSBsaW5rIHRvIHRoYXQgY2hhbm5lbCBpcyBzZWVuLlxuICAgIHZhciBkZXBlbmRlbmN5TmFtZSA9XG4gICAgICAgIENvcmVfdW5wcml2aWxlZ2VkLm1vZHVsZUludGVybmFsLnJlZ2lzdGVySWQoYXBpLCBjYWxsYmFjayk7XG5cbiAgICAvLyBSZXF1ZXN0IHRoZSBkZXBlbmRlbmN5IGJlIGFkZGVkLlxuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdyZXF1aXJlJyxcbiAgICAgICAgbWFuaWZlc3Q6IG1hbmlmZXN0LFxuICAgICAgICBpZDogZGVwZW5kZW5jeU5hbWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdUaGUgcmVxdWlyZSBmdW5jdGlvbiBpbiBleHRlcm5hbCBjb250ZXh0IG1ha2VzIG5vIHNlbnNlJyArXG4gICAgICAgICcgSW5zdGVhZCBjcmVhdGUgYSBuZXcgZnJlZWRvbSgpIGNvbnRleHQuJyk7XG4gICAgY2FsbGJhY2sodW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiAnSW52YWxpZENvbnRleHQnLFxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBjYWxsIHJlcXVpcmUoKSBmcm9tIHRoaXMgY29udGV4dC4nXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuICBQcm92aWRlcyBhblxuICogYXJyYXkgb2YgbW9kdWxlIFVSTHMsIHRoZSBsaW5lYWdlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBXaGVuIG5vdCBpbiBhbiBhcHBsaWNhdGlvbiBjb250ZXh0LCB0aGUgSUQgaXMgdGhlIGxpbmVhZ2VcbiAqIG9mIHRoZSBjdXJyZW50IFZpZXcuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gY2FsbGVkIHdpdGggSUQgaW5mb3JtYXRpb24uXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIC8vIFRPRE86IG1ha2Ugc3VyZSBjb250ZXh0SUQgaXMgcHJvcGVybHkgZnJvemVuLlxuICBjYWxsYmFjayhDb3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgZm9yIGxvZ2dpbmcgdG8gdGhlIGZyZWVkb20uanMgbG9nZ2VyLiBQcm92aWRlcyBhXG4gKiBsb2cgb2JqZWN0IHdpdGggYW4gaW50ZXJmYWNlIHNpbWlsYXIgdG8gdGhlIHN0YW5kYXJkIGphdmFzY3JpcHQgY29uc29sZSxcbiAqIHdoaWNoIGxvZ3MgdmlhIGRlYnVnLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBsb2dnZXIsIHVzZWQgYXMgaXRzICdzb3VyY2UnXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBsb2dnZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRMb2dnZXIgPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLm1hbmFnZXIuZGVidWcuZ2V0TG9nZ2VyKG5hbWUpKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuXG4gKiBAbWV0aG9kIHNldElkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmdbXX0gaWQgVGhlIGxpbmVhZ2Ugb2YgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwYXJhbSB7TW9kdWxlSW50ZXJuYWx9IG1vZHVsZUludGVybmFsIFRoZSBNb2R1bGUgZW52aXJvbm1lbnQgaWYgb25lIGV4aXN0cy5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24oaWQsIG1vZHVsZUludGVybmFsKSB7XG4gIENvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCA9IGlkO1xuICBDb3JlX3VucHJpdmlsZWdlZC5tb2R1bGVJbnRlcm5hbCA9IG1vZHVsZUludGVybmFsO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IENvcmVfdW5wcml2aWxlZ2VkO1xuZXhwb3J0cy5uYW1lID0gXCJjb3JlXCI7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgZG9jdW1lbnQgKi9cclxuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcclxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XHJcblxyXG4vKipcclxuICogQSBmcmVlZG9tLmpzIHZpZXcgaXMgdGhlIGludGVyZmFjZSBmb3IgdXNlciBpbnRlcmFjdGlvbi5cclxuICogQSB2aWV3IGV4aXN0cyBhcyBhbiBpRnJhbWUsIHdoaWNoIGlzIHNob3duIHRvIHRoZSB1c2VyIGluIHNvbWUgd2F5LlxyXG4gKiBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIHZpZXcgYW5kIHRoZSBmcmVlZG9tLmpzIG1vZHVsZSBpcyBwZXJmb3JtZWRcclxuICogdGhyb3VnaCB0aGUgSFRNTDUgcG9zdE1lc3NhZ2UgbWVjaGFuaXNtLCB3aGljaCB0aGlzIHByb3ZpZGVyIHRyYW5zbGF0ZXNcclxuICogdG8gZnJlZWRvbS5qcyBtZXNzYWdlIGV2ZW50cy5cclxuICogQENsYXNzIFZpZXdfdW5wcml2aWxlZ2VkXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge1ZpZXcgUHJvdmlkZXJ9IHByb3ZpZGVyXHJcbiAqIEBwYXJhbSB7cHJvdmlkZXI6UHJvdmlkZXIsbW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBpbnN0YW50aWF0b3Igb2YgdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoRXZlbnQgRnVuY3Rpb24gdG8gY2FsbCB0byBlbWl0IGV2ZW50cy5cclxuICovXHJcbnZhciBDb3JlX1ZpZXcgPSBmdW5jdGlvbiAocHJvdmlkZXIsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xyXG4gIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcclxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xyXG4gIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLm9uQ2xvc2UuYmluZChcclxuICAgIGNhcC5wcm92aWRlcixcclxuICAgIHRoaXMsXHJcbiAgICB0aGlzLmNsb3NlLmJpbmQodGhpcywgZnVuY3Rpb24gKCkge30pXHJcbiAgKSwgMCk7XHJcbiAgdGhpcy5tb2R1bGUgPSBjYXAubW9kdWxlO1xyXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpcyB0aGUgZGVmYXVsdCBwcm92aWRlciBmb3IgY29yZS52aWV3LCB1bmxlc3Mgb3ZlcnJpZGRlbiBieSBjb250ZXh0IG9yXHJcbiAqIGEgdXNlciBzdXBwbGllZCBwcm92aWRlci4gVGhlIGludGVyZmFjZSBpcyBkb2N1bWVudGVkIGF0OlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZnJlZWRvbWpzL2ZyZWVkb20vd2lraS9mcmVlZG9tLmpzLVZpZXdzXHJcbiAqXHJcbiAqIEdlbmVyYWxseSwgYSB2aWV3IHByb3ZpZGVyIGNvbnNpc3RzIG9mIDMgbWV0aG9kczpcclxuICogb25PcGVuIGlzIGNhbGxlZCB3aGVuIGEgdmlldyBzaG91bGQgYmUgc2hvd24uXHJcbiAqICAgICBpZCAtIGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgdmlldywgdXNlZCBvbiBzdWJzZXF1ZW50IGNhbGxzXHJcbiAqICAgICAgICAgIGZvciBjb21tdW5pY2F0aW9uIGFuZCB0byBldmVudHVhbGx5IGNsb3NlIHRoZSB2aWV3LlxyXG4gKiAgICAgbmFtZSAtIGlzIHRoZSBuYW1lIG9mIHRoZSB2aWV3IChhcyBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdCksXHJcbiAqICAgICAgICAgICAgaW4gb3JkZXIgdG8gcGxhY2UgaXQgYXBwcm9wcmlhdGVseS5cclxuICogICAgIHBhZ2UgLSBpcyB0aGUgcmVzb2x2ZWQgVVJMIHRvIG9wZW4uXHJcbiAqICAgICByZXNvdXJjZXMgLSBpcyBhbiBhcnJheSBvZiByZXNvbHZlZCBVUkxzIHdoaWNoIGFyZSByZWZlcmVuY2VkLlxyXG4gKiAgICAgcG9zdE1lc3NhZ2UgLSBpcyBhIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBtZXNzYWdlcyBhcmUgZW1pdHRlZFxyXG4gKiAgICAgICAgICAgICAgICAgICBieSB0aGUgd2luZG93IGluIHdoaWNoIHRoZSB2aWV3IGlzIG9wZW5lZC5cclxuICogb25PcGVuIHJldHVybnMgYSBwcm9taXNlIHRoYXQgY29tcGxldGVzIHdoZW4gdGhlIHZpZXcgaXMgbG9hZGVkLlxyXG4gKiBvbk1lc3NhZ2UgaXMgY2FsbGVkIHRvIHNlbmQgYSBtZXNzYWdlIHRvIGFuIG9wZW4gdmlldy5cclxuICogICAgIGlkIC0gaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgb3BlbiB2aWV3LlxyXG4gKiAgICAgbWVzc2FnZSAtIGlzIHRoZSBtZXNzYWdlIHRvIHBvc3RNZXNzYWdlIHRvIHRoZSB2aWV3J3Mgd2luZG93LlxyXG4gKiBvbkNsb3NlIGlzIGNhbGxlZCB0byBjbG9zZSBhIHZpZXcuXHJcbiAqICAgICBpZCAtIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHZpZXcuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdmlkZXIgPSB7XHJcbiAgbGlzdGVuZXI6IHVuZGVmaW5lZCxcclxuICBhY3RpdmU6IHt9LFxyXG4gIG9uT3BlbjogZnVuY3Rpb24gKGlkLCBuYW1lLCBwYWdlLCByZXNvdXJjZXMsIHBvc3RNZXNzYWdlKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgcm9vdCxcclxuICAgICAgZnJhbWU7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5saXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSBpbiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmhhc093blByb3BlcnR5KGkpICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0uc291cmNlID09PSBtc2cuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlW2ldLnBvc3RNZXNzYWdlKG1zZy5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWaWV3cyBvcGVuIGJ5IGRlZmF1bHQgaW4gYW4gZWxlbWVudCB3aXRoIHRoZWlyIElELCBvciBmaWxsIHRoZSBwYWdlXHJcbiAgICAvLyBvdGhlcndpc2UuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkpIHtcclxuICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb290LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICByb290LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcm9vdC5zdHlsZS5kaXNwbGF5ID0gXCJyZWxhdGl2ZVwiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzYW5kYm94XCIsIFwiYWxsb3ctc2NyaXB0cyBhbGxvdy1mb3Jtc1wiKTtcclxuICAgICAgZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICBmcmFtZS5zcmMgPSBwYWdlO1xyXG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSwgdHJ1ZSk7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcmVqZWN0LCB0cnVlKTtcclxuXHJcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmVbaWRdID0ge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlOiBwb3N0TWVzc2FnZSxcclxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgICByb290OiByb290LFxyXG4gICAgICAgIHNvdXJjZTogZnJhbWUuY29udGVudFdpbmRvd1xyXG4gICAgICB9O1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIG9uTWVzc2FnZTogZnVuY3Rpb24gKGlkLCBtZXNzYWdlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVtpZF0uc291cmNlLnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XHJcbiAgfSxcclxuICBvbkNsb3NlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHRoaXMuYWN0aXZlW2lkXS5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmVbaWRdLnJvb3QpO1xyXG4gICAgZGVsZXRlIHRoaXMuYWN0aXZlW2lkXTtcclxuICAgIFxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXNrIGZvciB0aGlzIHZpZXcgdG8gb3BlbiBhIHNwZWNpZmljIGxvY2F0aW9uLCBlaXRoZXIgYSBGaWxlIHJlbGF0aXZlIHRvXHJcbiAqIHRoZSBsb2FkZXIsIG9yIGFuIGV4cGxpY2l0IGNvZGUgbG9jYXRpb24uXHJcbiAqIEBtZXRob2Qgc2hvd1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgaWRlbnRpZmllciBvZiB0aGUgdmlldy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB2aWV3IGlzIGxvYWRlZC5cclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChuYW1lLCBjb250aW51YXRpb24pIHtcclxuICBpZiAodGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ0FMUkVBRFlfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3Qgc2hvdyBtdWx0aXBsZSB2aWV3cyB0aHJvdWdoIG9uZSBpbnN0YW5jZS4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5pZCA9IHV0aWwuZ2V0SWQoKTtcclxuXHJcbiAgdmFyIGNvbmZpZyA9IHRoaXMubW9kdWxlLm1hbmlmZXN0LnZpZXdzLFxyXG4gICAgdG9SZXNvbHZlID0gW107XHJcbiAgaWYgKCFjb25maWcgfHwgIWNvbmZpZ1tuYW1lXSkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PTl9FWElTVEFOVCcsXHJcbiAgICAgIG1lc3NhZ2U6ICdWaWV3IG5vdCBmb3VuZDogJyArIG5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZpZ1tuYW1lXS5tYWluICYmIGNvbmZpZ1tuYW1lXS5maWxlcykge1xyXG4gICAgdG9SZXNvbHZlID0gY29uZmlnW25hbWVdLmZpbGVzLmNvbmNhdChjb25maWdbbmFtZV0ubWFpbik7XHJcbiAgICBQcm9taXNlQ29tcGF0LmFsbCh0b1Jlc29sdmUubWFwKGZ1bmN0aW9uIChmbmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2R1bGUucmVzb3VyY2UuZ2V0KHRoaXMubW9kdWxlLm1hbmlmZXN0SWQsIGZuYW1lKTtcclxuICAgIH0uYmluZCh0aGlzKSkpLnRoZW4oZnVuY3Rpb24gKGZpbGVzKSB7XHJcbiAgICAgIHRoaXMucHJvdmlkZXIub25PcGVuKHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZmlsZXNbZmlsZXMubGVuZ3RoIC0gMV0sXHJcbiAgICAgICAgICBmaWxlcyxcclxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKHRoaXMsICdtZXNzYWdlJykpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBjb250aW51YXRpb24gaXMgY2FsbGVkIHdpdGhvdXQgYW4gYXJndW1lbnQuXHJcbiAgICAgICAgICBjKCk7XHJcbiAgICAgICAgfS5iaW5kKHt9LCBjb250aW51YXRpb24pLFxyXG4gICAgICAgIGNvbnRpbnVhdGlvbi5iaW5kKHt9LCB1bmRlZmluZWQpXHJcbiAgICAgICk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgdGhpcy5tb2R1bGUuZGVidWcuZXJyb3IoJ1VuYWJsZSB0byBvcGVuIHZpZXcgJyArIG5hbWUgKyAnOiAnLCBlcnIpO1xyXG4gICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgICAgZXJyY29kZTogJ1ZJRVdfTUFMRk9STUVEJyxcclxuICAgICAgICBtZXNzYWdlOiAnTWFsZm9ybWVkIFZpZXcgRGVjbGFyYXRpb246ICcgKyBlcnJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9OX0VYSVNUQU5UJyxcclxuICAgICAgbWVzc2FnZTogJ1ZpZXcgbm90IGZvdW5kOiAnICsgbmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGlzU2VjdXJlIGRldGVybWluZXMgd2hldGhlciB0aGUgbW9kdWxlIGNhbiBoYXZlIGNvbmZpZGVuY2UgdGhhdCBpdHNcclxuICogY29tbXVuaWNhdGlvbiB3aXRoIGl0cyB2aWV3IGNhbm5vdCBiZSBpbnRlcmNlcHRlZCBieSBhbiB1bnRydXN0ZWQgM3JkIHBhcnR5LlxyXG4gKiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGF0IGl0cyBva2F5IGZvciB0aGUgcnVudGltZSB0byBoYXZlIGFjY2VzcyB0byB0aGVcclxuICogbWVzc2FnZXMsIGFuZCBpZiB0aGUgY29udGV4dCBpcyBhIHdlYiBzZXJ2ZXIgb3IgYSBicm93c2VyIGV4dGVuc2lvbiB0aGVuXHJcbiAqIHRoYXQgY29udGV4dCBpcyB0cnVzdGVkLiBIb3dldmVyLCBpZiBhIHByb3ZpZGVyIHdhbnRzIHRvIGFsbG93IHRoZWlyIGUuZy5cclxuICogc29jaWFsIHByb3ZpZGVyIHRvIGJlIHVzZWQgb24gYXJiaXRyYXJ5IHdlYnNpdGVzLCB0aGlzIG1lY2hhbmlzbSBtZWFucyB0aGF0XHJcbiAqIGlmIHRoZSB3ZWJzaXRlIHVzZXMgYSB0cnVzdGVkIHZlcnNpb24gb2YgdGhlIGZyZWVkb20uanMgbGlicmFyeSwgdGhlbiB0aGVcclxuICogbW9kdWxlIGNhbiBiZSB1c2VkLlxyXG4gKiBAbWV0aG9kIGlzU2VjdXJlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpZiB0aGUgY2hhbm5lbCB0byB0aGUgdmlldyBpcyBzZWN1cmUuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLmlzU2VjdXJlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xyXG4gIGNvbnRpbnVhdGlvbihmYWxzZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2VuZCBhIG1lc3NhZ2UgdG8gYW4gb3BlbiB2aWV3LlxyXG4gKiBAbWV0aG9kIHBvc3RNZXNzYWdlXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLnBvc3RNZXNzYWdlID0gZnVuY3Rpb24gKG1zZywgY29udGludWF0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9UX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IHBvc3QgbWVzc2FnZSB0byB1bmluaXRpYWxpemVkIHZpZXcuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMucHJvdmlkZXIub25NZXNzYWdlKHRoaXMuaWQsIG1zZyk7XHJcbiAgY29udGludWF0aW9uKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xvc2UgYW4gYWN0aXZlIHZpZXcuXHJcbiAqIEBtZXRob2QgY2xvc2VcclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9UX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IGNsb3NlIHVuaW5pdGlhbGl6ZWQgdmlldy4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5wcm92aWRlci5vbkNsb3NlKHRoaXMuaWQpO1xyXG4gIGRlbGV0ZSB0aGlzLmlkO1xyXG5cclxuICBjb250aW51YXRpb24oKTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQWxsb3cgYSB3ZWIgcGFnZSB0byByZWRlZmluZSBiZWhhdmlvciBmb3IgaG93IHZpZXdzIGFyZSBzaG93bi5cclxuICogQG1ldGhvZCByZWdpc3RlclxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFBhZ2VQcm92aWRlciBUaGUgY3VzdG9tIHZpZXcgYmVoYXZpb3IuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucmVnaXN0ZXIgPSBmdW5jdGlvbiAoUGFnZVByb3ZpZGVyKSB7XHJcbiAgdmFyIHByb3ZpZGVyID0gUGFnZVByb3ZpZGVyID8gbmV3IFBhZ2VQcm92aWRlcigpIDogQ29yZV9WaWV3LnByb3ZpZGVyO1xyXG4gIGV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX1ZpZXcuYmluZCh0aGlzLCBwcm92aWRlcik7XHJcbn07XHJcblxyXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV9WaWV3LmJpbmQodGhpcywgQ29yZV9WaWV3LnByb3ZpZGVyKTtcclxuZXhwb3J0cy5uYW1lID0gJ2NvcmUudmlldyc7XHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBDb3JlX1ZpZXcucmVnaXN0ZXI7XHJcbmV4cG9ydHMuZmxhZ3MgPSB7cHJvdmlkZXI6IHRydWUsIG1vZHVsZTogdHJ1ZX07XHJcbiIsIi8qZ2xvYmFscyBXZWJTb2NrZXQsIEFycmF5QnVmZmVyLCBCbG9iLCBVaW50OEFycmF5LCBjb25zb2xlICovXG4vKmpzbGludCBzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciBXU0hhbmRsZSA9IG51bGw7XG52YXIgbm9kZVN0eWxlID0gZmFsc2U7XG5cbi8qKlxuICogQSBXZWJTb2NrZXQgY29yZSBwcm92aWRlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoRXZlbnQgRnVuY3Rpb24gdG8gZGlzcGF0Y2ggZXZlbnRzLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgUmVtb3RlIFVSTCB0byBjb25uZWN0IHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBwcm90b2NvbHMgU3ViUHJvdG9jb2xzIHRvIG9wZW4uXG4gKiBAcGFyYW0ge1dlYlNvY2tldD99IHNvY2tldCBBbiBhbHRlcm5hdGl2ZSBzb2NrZXQgY2xhc3MgdG8gdXNlLlxuICovXG52YXIgV1MgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50LCB1cmwsIHByb3RvY29scywgc29ja2V0KSB7XG4gIHZhciBXU0ltcGxlbWVudGF0aW9uID0gbnVsbCxcbiAgICBlcnJvcjtcbiAgdGhpcy5pc05vZGUgPSBub2RlU3R5bGU7XG4gIGlmICh0eXBlb2Ygc29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBzb2NrZXQ7XG4gIH0gZWxzZSBpZiAoV1NIYW5kbGUgIT09IG51bGwpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gV1NIYW5kbGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gV2ViU29ja2V0O1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BsYXRmb3JtIGRvZXMgbm90IHN1cHBvcnQgV2ViU29ja2V0Jyk7XG4gIH1cblxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIGlmIChwcm90b2NvbHMpIHtcbiAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdTSW1wbGVtZW50YXRpb24odXJsLCBwcm90b2NvbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXU0ltcGxlbWVudGF0aW9uKHVybCk7XG4gICAgfVxuICAgIHRoaXMud2Vic29ja2V0LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSB7fTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICBlcnJvci5lcnJjb2RlID0gJ1NZTlRBWCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yLmVycmNvZGUgPSBlLm5hbWU7XG4gICAgfVxuICAgIGVycm9yLm1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgZGlzcGF0Y2hFdmVudCgnb25FcnJvcicsIGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5pc05vZGUpIHtcbiAgICB0aGlzLndlYnNvY2tldC5vbignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdvcGVuJywgdGhpcy5vbk9wZW4uYmluZCh0aGlzKSk7XG4gICAgLy8gbm9kZS5qcyB3ZWJzb2NrZXQgaW1wbGVtZW50YXRpb24gbm90IGNvbXBsaWFudFxuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMsIHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICByZWFzb246ICdVTktOT1dOJyxcbiAgICAgIHdhc0NsZWFuOiB0cnVlXG4gICAgfSkpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSwgY29udGludWF0aW9uKSB7XG4gIHZhciB0b1NlbmQgPSBkYXRhLnRleHQgfHwgZGF0YS5iaW5hcnkgfHwgZGF0YS5idWZmZXIsXG4gICAgZXJyY29kZSxcbiAgICBtZXNzYWdlO1xuXG4gIGlmICh0b1NlbmQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIG5vZGUuanMsIHdlIGhhdmUgdG8gZG8gd2VpcmQgYnVmZmVyIHN0dWZmXG4gICAgICBpZiAodGhpcy5pc05vZGUgJiYgdG9TZW5kIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChcbiAgICAgICAgICBuZXcgVWludDhBcnJheSh0b1NlbmQpLFxuICAgICAgICAgIHsgYmluYXJ5OiB0cnVlIH0sXG4gICAgICAgICAgdGhpcy5vbkVycm9yLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQodG9TZW5kKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgIGVycmNvZGUgPSBcIlNZTlRBWFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyY29kZSA9IFwiSU5WQUxJRF9TVEFURVwiO1xuICAgICAgfVxuICAgICAgbWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyY29kZSA9IFwiQkFEX1NFTkRcIjtcbiAgICBtZXNzYWdlID0gXCJObyB0ZXh0LCBiaW5hcnksIG9yIGJ1ZmZlciBkYXRhIGZvdW5kLlwiO1xuICB9XG5cbiAgaWYgKGVycmNvZGUpIHtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiBlcnJjb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMud2Vic29ja2V0LnJlYWR5U3RhdGUpO1xufTtcblxuV1MucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy53ZWJzb2NrZXQuYnVmZmVyZWRBbW91bnQpO1xufTtcblxuV1MucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbiwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgaWYgKGNvZGUgJiYgcmVhc29uKSB7XG4gICAgICB0aGlzLndlYnNvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNvY2tldC5jbG9zZSgpO1xuICAgIH1cbiAgICBjb250aW51YXRpb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBlcnJvckNvZGU7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgZXJyb3JDb2RlID0gXCJTWU5UQVhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JDb2RlID0gXCJJTlZBTElEX0FDQ0VTU1wiO1xuICAgIH1cbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiBlcnJvckNvZGUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uT3BlbicpO1xufTtcblxuV1MucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCwgZmxhZ3MpIHtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgaWYgKHRoaXMuaXNOb2RlICYmIGZsYWdzICYmIGZsYWdzLmJpbmFyeSkge1xuICAgIGRhdGEuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQpLmJ1ZmZlcjtcbiAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZSkge1xuICAgIGRhdGEudGV4dCA9IGV2ZW50O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgZGF0YS5idWZmZXIgPSBldmVudC5kYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBldmVudC5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGRhdGEuYmluYXJ5ID0gZXZlbnQuZGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhLnRleHQgPSBldmVudC5kYXRhO1xuICB9XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25NZXNzYWdlJywgZGF0YSk7XG59O1xuXG5XUy5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBOb3RoaW5nIHRvIHBhc3Mgb25cbiAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODgwNDI5OC8zMDA1MzlcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkVycm9yJyk7XG59O1xuXG5XUy5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAge2NvZGU6IGV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBldmVudC5yZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgd2FzQ2xlYW46IGV2ZW50Lndhc0NsZWFufSk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gV1M7XG5leHBvcnRzLm5hbWUgPSAnY29yZS53ZWJzb2NrZXQnO1xuZXhwb3J0cy5zZXRTb2NrZXQgPSBmdW5jdGlvbiAoaW1wbCwgaXNOb2RlKSB7XG4gIFdTSGFuZGxlID0gaW1wbDtcbiAgbm9kZVN0eWxlID0gaXNOb2RlO1xufTtcbiIsIi8qanNoaW50IG5vZGU6dHJ1ZSovXG4vKmdsb2JhbCAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgWGhyQ2xhc3MgPSBudWxsO1xuXG52YXIgWGhyUHJvdmlkZXIgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0eXBlb2Ygd2luZG93LlhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBYaHJDbGFzcyA9PT0gbnVsbCkgeyAvLyBmcmVlZG9tXG4gICAgWGhyQ2xhc3MgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBYaHJDbGFzcyA9PT0gbnVsbCkgeyAvLyBmcmVlZG9tLWZvci1maXJlZm94XG4gICAgWGhyQ2xhc3MgPSBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIGlmIChYaHJDbGFzcyA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGF0Zm9ybSBkb2VzIG5vdCBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0XCIpO1xuICB9XG5cbiAgdGhpcy5fZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMuX3hociA9IG5ldyBYaHJDbGFzcygpO1xuXG4gIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLm9uQ2xvc2UuYmluZChcbiAgICBjYXAucHJvdmlkZXIsXG4gICAgdGhpcyxcbiAgICB0aGlzLmFib3J0LmJpbmQodGhpcylcbiAgKSwgMCk7XG5cbiAgdGhpcy5fZXZlbnRzID0gW1xuICAgIFwibG9hZHN0YXJ0XCIsXG4gICAgXCJwcm9ncmVzc1wiLFxuICAgIFwiYWJvcnRcIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJsb2FkXCIsXG4gICAgXCJ0aW1lb3V0XCIsXG4gICAgXCJsb2FkZW5kXCIsXG4gICAgXCJyZWFkeXN0YXRlY2hhbmdlXCJcbiAgXTtcbiAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKTtcblxufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIGFzeW5jICE9PSBcInVuZGVmaW5lZFwiICYmIGFzeW5jICE9PSB0cnVlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICAgIGVycmNvZGU6IFwiSW52YWxpZEFjY2Vzc0Vycm9yXCIsXG4gICAgICBtZXNzYWdlOiBcImFzeW5jIHNob3VsZCBhbHdheXMgYmUgc2V0IHRvIHRydWVcIlxuICAgIH0pO1xuICB9XG5cbiAgLy8gRm9yY2UgYXN5bmMgdG8gYmUgdHJ1ZS4gdW5kZWZpbmVkIGNhbiBsZWFkIHRvIGFzeW5jPWZhbHNlIGluIENocm9tZSBwYWNrYWdlZCBhcHBzXG4gIHRoaXMuX3hoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlLCB1c2VyLCBwYXNzd29yZCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICB0aGlzLl94aHIuc2VuZCgpO1xuICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzdHJpbmdcIikpIHtcbiAgICB0aGlzLl94aHIuc2VuZChkYXRhLnN0cmluZyk7XG4gIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImJ1ZmZlclwiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuYnVmZmVyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl94aHIuc2VuZCgpO1xuICB9XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLmFib3J0KCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlcikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlciwgdmFsdWUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgdmFsdWUpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUub3ZlcnJpZGVNaW1lVHlwZSA9IGZ1bmN0aW9uKG1pbWUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5vdmVycmlkZU1pbWVUeXBlKG1pbWUpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVhZHlTdGF0ZSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0aGlzLl94aHIucmVzcG9uc2UgPT09IG51bGwpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKG51bGwpO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwidGV4dFwiIHx8IHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgc3RyaW5nOiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IGJ1ZmZlcjogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwianNvblwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IG9iamVjdDogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KFwiY29yZS54aHIgY2Fubm90IGRldGVybWluZSB0eXBlIG9mIHJlc3BvbnNlXCIpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VUZXh0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVVSTCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VVUkwpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VUeXBlKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRSZXNwb25zZVR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIucmVzcG9uc2VUeXBlID0gdHlwZTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuc3RhdHVzKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRTdGF0dXNUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5zdGF0dXNUZXh0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci50aW1lb3V0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRUaW1lb3V0ID0gZnVuY3Rpb24odGltZW91dCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0V2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFdpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKHdjKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzID0gd2M7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5fc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8vIERvd25sb2FkIGV2ZW50c1xuICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5feGhyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzLCBldmVudE5hbWUpLCBmYWxzZSk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgLy8gVXBsb2FkIGV2ZW50c1xuICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5feGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChcIm9udXBsb2FkXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcywgZXZlbnROYW1lKSwgZmFsc2UpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnhoclwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFhoclByb3ZpZGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0geyBwcm92aWRlcjogdHJ1ZSB9O1xuZXhwb3J0cy5zZXRJbXBsID0gZnVuY3Rpb24oaW1wbCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgWGhyQ2xhc3MgPSBpbXBsO1xufTtcbiIsIi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG52YXIgbG9hZGVkT25TdGFydHVwID0gZmFsc2U7XG5cbnZhciBUSU1FT1VUID0gNTAwMDtcblxuLyoqXG4gKiBJZiB0aGVyZSBpcyByZWRpcmVjdGlvbiBiYWNrIHRvIHRoZSBwYWdlLCBhbmQgb0F1dGhSZWRpcmVjdElEIGlzIHNldCxcbiAqIHRoZW4gcmVwb3J0IHRoZSBhdXRoIGFuZCBjbG9zZSB0aGUgd2luZG93LlxuICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbiAmJlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGxvYWRlZE9uU3RhcnR1cCA9IHRydWU7XG4gIH0sIHRydWUpO1xuXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlICYmXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKG9BdXRoUmVkaXJlY3RJZCkgPiAwKSB7XG4gICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYSAnc3RvcmFnZScgZXZlbnQgb24gdGhlIHdpbmRvdy4gU2VlIHN0b3JhZ2VMaXN0ZW5lclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShvQXV0aFJlZGlyZWN0SWQsIG5ldyBEYXRlKCkpO1xuICAgIHdpbmRvdy5jbG9zZSgpO1xuICB9XG59XG5cbnZhciBMb2NhbFBhZ2VBdXRoID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLmxpc3RlbmVycyA9IHt9O1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNhbiBoYW5kbGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24ocmVkaXJlY3RVUklzLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgbG9hZGVkT25TdGFydHVwKSB7XG4gICAgdmFyIGhlcmUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBpZiAocmVkaXJlY3RVUklzLmluZGV4T2YoaGVyZSkgPiAtMSkge1xuICAgICAgY29udGludWF0aW9uKHtcbiAgICAgICAgcmVkaXJlY3Q6IGhlcmUsXG4gICAgICAgIHN0YXRlOiBvQXV0aFJlZGlyZWN0SWQgKyBNYXRoLnJhbmRvbSgpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVyYWN0aXZlIC0gV2hldGhlciB0byBsYXVuY2ggYW4gaW50ZXJhY3RpdmUgZmxvd1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBpbnRlcmFjdGl2ZSwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgbGlzdGVuZXIgPSB0aGlzLnN0b3JhZ2VMaXN0ZW5lci5iaW5kKHRoaXMsIGNvbnRpbnVhdGlvbiwgc3RhdGVPYmopO1xuICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBsaXN0ZW5lcjtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIFN0YXJ0ICdlciB1cFxuICB3aW5kb3cub3BlbihhdXRoVXJsKTtcblxuICBpZiAoaW50ZXJhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0pIHtcbiAgICAgICAgLy8gTGlzdGVuZXIgaGFzIG5vdCBiZWVuIGRlbGV0ZWQsIGluZGljYXRpbmcgb2F1dGggaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcInN0b3JhZ2VcIiwgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdLCBmYWxzZSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsICdFcnJvciBsYXVuY2hpbmcgYXV0aCBmbG93Jyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpLCBUSU1FT1VUKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzdG9yYWdlIGV2ZW50cywgd2hpY2ggcmVsYXlzIHRoZW0gdG8gd2FpdGluZyBjbGllbnRzLlxuICogRm9yIHRoZSBzY2hlbWEgb2YgdGhlIHN0b3JhZ2UgbXNnLCBzZWU6XG4gKiBodHRwOi8vdHV0b3JpYWxzLmplbmtvdi5jb20vaHRtbDUvbG9jYWwtc3RvcmFnZS5odG1sI3N0b3JhZ2UtZXZlbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHJlc3VsdFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogdGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcblxuICogQHBhcmFtIHtPYmplY3R9IG1zZyBzdG9yYWdlIGV2ZW50XG4gKi9cbkxvY2FsUGFnZUF1dGgucHJvdG90eXBlLnN0b3JhZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvbiwgc3RhdGVPYmosIG1zZykge1xuICAndXNlIHN0cmljdCc7XG4gIGlmIChtc2cudXJsLmluZGV4T2Yoc3RhdGVPYmouc3RhdGUpID4gLTEpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdLCBmYWxzZSk7XG4gICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXTtcbiAgICBjb250aW51YXRpb24obXNnLnVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogSWYgd2UgaGF2ZSBhIGxvY2FsIGRvbWFpbiwgYW5kIGZyZWVkb20uanMgaXMgbG9hZGVkIGF0IHN0YXJ0dXAsIHdlIGNhbiB1c2VcbiAqIHRoZSBsb2NhbCBwYWdlIGFzIGEgcmVkaXJlY3QgVVJJLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IExvY2FsUGFnZUF1dGg7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBvQXV0aFJlZGlyZWN0SWQgPSAnZnJlZWRvbS5vYXV0aC5yZWRpcmVjdC5oYW5kbGVyJztcblxudmFyIFRJTUVPVVQgPSA1MDAwO1xuXG5mdW5jdGlvbiBSZW1vdGVQYWdlQXV0aCgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuUmVtb3RlUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCAmJiBnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICBmb3IgKHZhciBpPTA7IGk8cmVkaXJlY3RVUklzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgcmVzdHJpY3Rpb24gb24gVVJMIHBhdHRlcm4gbWF0Y2guXG4gICAgICBpZiAoKHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwOi8vJykgPT09IDAgfHxcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gMCkgJiZcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignb2F1dGgtcmVsYXkuaHRtbCcpID4gMCkge1xuICAgICAgICBjb250aW51YXRpb24oe1xuICAgICAgICAgIHJlZGlyZWN0OiByZWRpcmVjdFVSSXNbaV0sXG4gICAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcmFjdGl2ZSAtIFdoZXRoZXIgdG8gbGF1bmNoIGFuIGludGVyYWN0aXZlIGZsb3dcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgU3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHJlc3BvbnNlIFVybCBjb250YWluaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAqL1xuUmVtb3RlUGFnZUF1dGgucHJvdG90eXBlLmxhdW5jaEF1dGhGbG93ID0gZnVuY3Rpb24oYXV0aFVybCwgc3RhdGVPYmosIGludGVyYWN0aXZlLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBmcmFtZSA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgZnJhbWUuc3JjID0gc3RhdGVPYmoucmVkaXJlY3Q7XG4gIGZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGNvbnRpbnVhdGlvbjtcbiAgICB3aW5kb3cub3BlbihhdXRoVXJsKTtcblxuICAgIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoc3RhdGVPYmouc3RhdGUsICcqJyk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdmFyIGhhc0NyZWRlbnRpYWxzID0gZmFsc2U7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGZyYW1lLCBtc2cpIHtcbiAgICBpZiAobXNnLmRhdGEgJiYgbXNnLmRhdGEua2V5ICYmIG1zZy5kYXRhLnVybCAmJiB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKSB7XG4gICAgICBoYXNDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKG1zZy5kYXRhLnVybCk7XG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbXNnLmRhdGEua2V5XTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcywgZnJhbWUpLCBmYWxzZSk7XG5cbiAgaWYgKGludGVyYWN0aXZlID09PSBmYWxzZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaGFzQ3JlZGVudGlhbHMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsICdFcnJvciBsYXVuY2hpbmcgYXV0aCBmbG93Jyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmcmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyksIFRJTUVPVVQpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBSZW1vdGVQYWdlQXV0aDtcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuLyoqXG4gKiBUaGUgQVBJIHJlZ2lzdHJ5IGZvciBmcmVlZG9tLmpzLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBBUElzLFxuICogYW5kIHByb3ZpZGVzIGEgYnJpZGdlIGZvciBjb3JlIEFQSXMgdG8gYWN0IGxpa2Ugbm9ybWFsIEFQSXMuXG4gKiBAQ2xhc3MgQVBJXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBBcGkgPSBmdW5jdGlvbihkZWJ1Zykge1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHRoaXMuYXBpcyA9IHt9O1xuICB0aGlzLnByb3ZpZGVycyA9IHt9O1xuICB0aGlzLndhaXRlcnMgPSB7fTtcbn07XG5cbi8qKlxuICogR2V0IGFuIEFQSS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBBUEkgbmFtZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7e25hbWU6U3RyaW5nLCBkZWZpbml0aW9uOkFQSX19IFRoZSBBUEkgaWYgcmVnaXN0ZXJlZC5cbiAqL1xuQXBpLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihhcGkpIHtcbiAgaWYgKCF0aGlzLmFwaXNbYXBpXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGFwaSxcbiAgICBkZWZpbml0aW9uOiB0aGlzLmFwaXNbYXBpXVxuICB9O1xufTtcblxuLyoqXG4gKiBTZXQgYW4gQVBJIHRvIGEgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgQVBJIG5hbWUuXG4gKiBAcGFyYW0ge0FQSX0gZGVmaW5pdGlvbiBUaGUgSlNPTiBvYmplY3QgZGVmaW5pbmcgdGhlIEFQSS5cbiAqL1xuQXBpLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCBkZWZpbml0aW9uKSB7XG4gIHRoaXMuYXBpc1tuYW1lXSA9IGRlZmluaXRpb247XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY29yZSBBUEkgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgQVBJIG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciB0aGUgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvdmlkZXIgZm9yIHRoZSBBUEkuXG4gKiBAcGFyYW0ge1N0cmluZz99IHN0eWxlIFRoZSBzdHlsZSB0aGUgcHJvdmlkZXIgaXMgd3JpdHRlbiBpbi4gVmFsaWQgc3R5bGVzXG4gKiAgIGFyZSBkb2N1bWVudGVkIGluIGZkb20ucG9ydC5Qcm92aWRlci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlLiBEZWZhdWx0cyB0b1xuICogICBwcm92aWRlQXN5bmNocm9ub3VzXG4gKiBAcGFyYW0ge09iamVjdD99IGZsYWdzIFByZWZpeGVkIGFyZ3VtZW50cyBuZWVkZWQgYnkgdGhlIGNvcmUgcHJvdmlkZXIuXG4gKiAgIHZhbGlkIGtleXMgYXJlICdtb2R1bGUnLCAncHJvdmlkZXInLCBhbmQgJ2NvbmZpZycuXG4gKi9cbkFwaS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbihuYW1lLCBjb25zdHJ1Y3Rvciwgc3R5bGUsIGZsYWdzKSB7XG4gIHZhciBpLFxuICAgIGFyZ3M7XG5cbiAgdGhpcy5wcm92aWRlcnNbbmFtZV0gPSB7XG4gICAgY29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuICAgIHN0eWxlOiBzdHlsZSB8fCAncHJvdmlkZUFzeW5jaHJvbm91cycsXG4gICAgZmxhZ3M6IGZsYWdzIHx8IHt9XG4gIH07XG5cbiAgaWYgKHRoaXMud2FpdGVyc1tuYW1lXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLndhaXRlcnNbbmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICAgIGlmIChmbGFncy5tb2R1bGUpIHtcbiAgICAgICAgYXJncy5tb2R1bGUgPSB0aGlzLndhaXRlcnNbbmFtZV1baV0uZnJvbTtcbiAgICAgIH1cbiAgICAgIGlmIChmbGFncy5jb25maWcpIHtcbiAgICAgICAgYXJncy5jb25maWcgPSB0aGlzLndhaXRlcnNbbmFtZV1baV0uZnJvbS5jb25maWc7XG4gICAgICB9XG4gICAgICB0aGlzLndhaXRlcnNbbmFtZV1baV0ucmVzb2x2ZSh7XG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIGluc3Q6IGNvbnN0cnVjdG9yLmJpbmQoe30sIGFyZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMud2FpdGVyc1tuYW1lXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSBjb3JlIEFQSSBjb25uZWN0ZWQgdG8gYSBnaXZlbiBGcmVlRE9NIG1vZHVsZS5cbiAqIEBtZXRob2QgZ2V0Q29yZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIEFQSSB0byByZXRyaWV2ZS5cbiAqIEBwYXJhbSB7TW9kdWxlfSBmcm9tIFRoZSBpbnN0YW50aWF0aW5nIEFwcC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2Ugb2YgYSBmZG9tLkFwcCBsb29rLWFsaWtlIChhbmQgYXJndW1lbnQgb2JqZWN0KSxcbiAqIG1hdGNoaW5nIGEgbG9jYWwgQVBJIGRlZmluaXRpb24uXG4gKi9cbkFwaS5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uKG5hbWUsIGZyb20pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0aGlzLmFwaXNbbmFtZV0pIHtcbiAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXSkge1xuICAgICAgICB2YXIgYXJncyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MubW9kdWxlKSB7XG4gICAgICAgICAgYXJncy5tb2R1bGUgPSBmcm9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncy5jb25maWcpIHtcbiAgICAgICAgICBhcmdzLmNvbmZpZyA9IGZyb20uY29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgaW5zdDogdGhpcy5wcm92aWRlcnNbbmFtZV0uY29uc3RydWN0b3IuYmluZCh7fSwgYXJncylcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGVyc1tuYW1lXSkge1xuICAgICAgICAgIHRoaXMud2FpdGVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2FpdGVyc1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIGZyb206IGZyb21cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQXBpLmdldENvcmUgYXNrZWQgZm9yIHVua25vd24gY29yZTogJyArIG5hbWUpO1xuICAgICAgcmVqZWN0KG51bGwpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ29uZmlndXJlIGEge1Byb3ZpZGVyfSB0byBwcm92aWRlIGEgbmFtZWQgY29yZSBhcGkgb24gYmVoYWxmIG9mIGFcbiAqIGdpdmVuIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvdmlkZXJcbiAqIEBwYXJhbSB7UHJvdmlkZXJ9IHByb3ZpZGVyIFRoZSBwcm92aWRlciB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgbmFtZWQgYXBpXG4gKiBAcGFyYW0ge01vZHVsZX0gZnJvbSBUaGUgbW9kdWxlIHJlcXVlc3RpbmcgdGhlIGNvcmUgcHJvdmlkZXIuXG4gKi9cbkFwaS5wcm90b3R5cGUucHJvdmlkZUNvcmUgPSBmdW5jdGlvbiAobmFtZSwgcHJvdmlkZXIsIGZyb20pIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q29yZShuYW1lLCBmcm9tKS50aGVuKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgdmFyIGZsYWdzID0gdGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MsXG4gICAgICBpZmFjZSA9IHByb3ZpZGVyLmdldFByb3h5SW50ZXJmYWNlKCk7XG4gICAgaWYgKGZsYWdzLnByb3ZpZGVyKSB7XG4gICAgICBjb3JlLmFyZ3MucHJvdmlkZXIgPSBpZmFjZTtcbiAgICB9XG4gICAgaWZhY2UoKVt0aGlzLnByb3ZpZGVyc1tuYW1lXS5zdHlsZV0oY29yZS5pbnN0KTtcbiAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignQ291bGQgbm90IHByb3ZpZGUgY29yZTogJywgZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogU2h1dGRvd24gdGhlIEFQSSByZWdpc3RyeSwgYW5kIHJlamVjdCBhbnkgcGVuZGluZyB3YWl0ZXJzLlxuICovXG5BcGkucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm9wLFxuICAgIGRvUmVqZWN0ID0gZnVuY3Rpb24gKHdhaXRlcikge1xuICAgICAgd2FpdGVyLnJlamVjdCgpO1xuICAgIH07XG4gIGZvciAocHJvcCBpbiB0aGlzLndhaXRlcnMpIHtcbiAgICBpZiAodGhpcy53YWl0ZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICB0aGlzLndhaXRlcnNbcHJvcF0uZm9yRWFjaChkb1JlamVjdCk7XG4gICAgfVxuICB9XG4gIGRlbGV0ZSB0aGlzLndhaXRlcnM7XG59O1xuXG4vKipcbiAqIERlZmluZXMgdGhlIGFwaXMgbW9kdWxlIGFuZCBwcm92aWRlciByZWdpc3RyeS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBcGk7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUgKi9cblxudmFyIEJ1bmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0aGlzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuLi9kaXN0L2J1bmRsZS5jb21waWxlZCcpO1xufTtcblxuLyoqXG4gKiBQb3B1bGF0ZSBhbiBBUEkgcmVnaXN0cnkgd2l0aCBwcm92aWRlZCBwcm92aWRlcnMsIGFuZCB3aXRoIGtub3duIEFQSVxuICogZGVmaW5pdGlvbnMuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge3tuYW1lOiBzdHJpbmcsIHByb3ZpZGVyOiBGdW5jdGlvbiwgc3R5bGU/OiBzdHJpbmd9W119IHByb3ZpZGVyc1xuICogICBUaGUgY29yZSBwcm92aWRlcnMgbWFkZSBhdmFpbGFibGUgdG8gdGhpcyBmcmVlZG9tLmpzIGluc3RhbmNlLlxuICogQHBhcmFtIHtBcGl9IHJlZ2lzdHJ5IFRoZSBBUEkgcmVnaXN0cnkgdG8gcG9wdWxhdGUuXG4gKi9cbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAocHJvdmlkZXJzLCByZWdpc3RyeSkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBidW5kbGUgPSBuZXcgQnVuZGxlKCk7XG4gIGJ1bmRsZS5pbnRlcmZhY2VzLmZvckVhY2goZnVuY3Rpb24gKGFwaSkge1xuICAgIGlmIChhcGkgJiYgYXBpLm5hbWUgJiYgYXBpLmFwaSkge1xuICAgICAgcmVnaXN0cnkuc2V0KGFwaS5uYW1lLCBhcGkuYXBpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHByb3ZpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgIGlmIChwcm92aWRlci5uYW1lKSB7XG4gICAgICByZWdpc3RyeS5yZWdpc3Rlcihwcm92aWRlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmZsYWdzKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qZ2xvYmFscyBCbG9iLCBBcnJheUJ1ZmZlciwgRGF0YVZpZXcgKi9cbi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IGZvciBhIHVzZXItYWNjZXNzYWJsZSBhcGkuXG4gKiBAY2xhc3MgQ29uc3VtZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGludGVyZmFjZUNscyBUaGUgYXBpIGludGVyZmFjZSBleHBvc2VkIGJ5IHRoaXMgY29uc3VtZXIuXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChpbnRlcmZhY2VDbHMsIGRlYnVnKSB7XG4gIHRoaXMuaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgdGhpcy5pbnRlcmZhY2VDbHMgPSBpbnRlcmZhY2VDbHM7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5jbG9zZUhhbmRsZXJzID0ge307XG4gIHRoaXMuZXJyb3JIYW5kbGVycyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgaW5jb21pbmcgbWVzc2FnZXMgZm9yIHRoaXMgY29uc3VtZXIuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnJldmVyc2UpIHtcbiAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3NldHVwJykge1xuICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgZGVsZXRlIHRoaXMuY29udHJvbENoYW5uZWw7XG4gICAgdGhpcy5kb0Nsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0aGlzLmVtaXRDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKG1lc3NhZ2UudG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLmVycm9yKG1lc3NhZ2UudG8sIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnRvKSB7XG4gICAgICBpZiAodGhpcy5lbWl0c1ttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmVtaXRzW21lc3NhZ2UudG9dKCdtZXNzYWdlJywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGRlbGl2ZXIgbWVzc2FnZSwgbm8gc3VjaCBpbnRlcmZhY2U6ICcgKyBtZXNzYWdlLnRvKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1zZyA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5lbWl0cywgZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgICAgIGlmYWNlKCdtZXNzYWdlJywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdW1lci5JbnRlcmZhY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29uc3VtZXIuXG4gKiBBbiBpbnRlcmZhY2UgaXMgcmV0dXJuZWQsIHdoaWNoIGlzIHN1cHBsaWVkIHdpdGggaW1wb3J0YW50IGNvbnRyb2wgb2YgdGhlXG4gKiBhcGkgdmlhIGNvbnN0cnVjdG9yIGFyZ3VtZW50czogKGJvdW5kIGJlbG93IGluIGdldEludGVyZmFjZUNvbnN0cnVjdG9yKVxuICpcbiAqIG9uTXNnOiBmdW5jdGlvbihiaW5kZXIpIHNldHMgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBtZXNzYWdlcyBmb3IgdGhpc1xuICogICAgaW50ZXJmYWNlIGFycml2ZSBvbiB0aGUgY2hhbm5lbCxcbiAqIGVtaXQ6IGZ1bmN0aW9uKG1zZykgYWxsb3dzIHRoaXMgaW50ZXJmYWNlIHRvIGVtaXQgbWVzc2FnZXMsXG4gKiBpZDogc3RyaW5nIGlzIHRoZSBJZGVudGlmaWVyIGZvciB0aGlzIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBJZmFjZSA9IHRoaXMuZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IoKSxcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgSWZhY2UgPSBJZmFjZS5iaW5kLmFwcGx5KElmYWNlLCBbSWZhY2VdLmNvbmNhdChhcmdzKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBJZmFjZSgpO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYW4gJ29uRXZlbnQnIGxpc3RlbmVyIHRvIGFuIGludGVyZmFjZSwgYWxsb3dpbmcgZXh0ZXJuYWwgY29uc3VtZXJzXG4gKiB0byBlaXRoZXIgbGlzdGVuIHRvIGNoYW5uZWwgc3RhdGUsIG9yIHJlZ2lzdGVyIGNhbGxiYWNrcyBvbiBsaWZldGltZSBldmVudHNcbiAqIG9mIGluZGl2aWR1YWwgaW5zdGFuY2VzIG9mIHRoZSBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldExpc3RlbmVyXG4gKiBAcGFybWEge1N0cmluZ30gbmFtZSBUaGUgZXZlbnQgdG8gbGlzdGVuIHRvLlxuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnN0YW5jZSwgaGFuZGxlcikge1xuICAgIC8vIExpc3RlbiB0byB0aGUgY2hhbm5lbCBkaXJlY3RseS5cbiAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSAnZnVuY3Rpb24nICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbmNlKG5hbWUsIGluc3RhbmNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gdG8gYSBzcGVjaWZpYyBpbnN0YW5jZS5cbiAgICB2YXIgaGFuZGxlcnMgPSBuYW1lICsgJ0hhbmRsZXJzJztcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcnNdW2lkXSkge1xuICAgICAgICAgIHRoaXNbaGFuZGxlcnNdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbaGFuZGxlcnNdW2lkXSA9IFtoYW5kbGVyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIGFwaSBjb25zdW1lclxuICogZnJvbSBhIHVzZXItdmlzaWJsZSBwb2ludC5cbiAqIEBtZXRob2QgZ2V0UHJveHlJbnRlcmZhY2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldFByb3h5SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuYyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwLmdldEludGVyZmFjZS5hcHBseShwLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlKCk7XG4gICAgfVxuICB9LmJpbmQoe30sIHRoaXMpO1xuXG4gIGZ1bmMuY2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICBpZiAoaWZhY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgdGhpcy50ZWFyZG93bihpZCk7XG4gICAgICAgICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICB0bzogaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvc2UgdGhlIGNoYW5uZWwuXG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSB0aGlzLmdldExpc3RlbmVyKCdjbG9zZScpO1xuICBmdW5jLm9uRXJyb3IgPSB0aGlzLmdldExpc3RlbmVyKCdlcnJvcicpO1xuXG4gIHJldHVybiBmdW5jO1xufTtcblxuLyoqXG4gKiBQcm92aWRlcyBhIGJvdW5kIGNsYXNzIGZvciBjcmVhdGluZyBhIGNvbnN1bWVyLkludGVyZmFjZSBhc3NvY2lhdGVkXG4gKiB3aXRoIHRoaXMgYXBpLiBUaGlzIHBhcnRpYWwgbGV2ZWwgb2YgY29uc3RydWN0aW9uIGNhbiBiZSB1c2VkXG4gKiB0byBhbGxvdyB0aGUgY29uc3VtZXIgdG8gYmUgdXNlZCBhcyBhIHByb3ZpZGVyIGZvciBhbm90aGVyIEFQSS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHJldHVybiB0aGlzLmludGVyZmFjZUNscy5iaW5kKFxuICAgIHt9LFxuICAgIGZ1bmN0aW9uIChpZCwgb2JqLCBiaW5kZXIpIHtcbiAgICAgIHRoaXMuaWZhY2VzW2lkXSA9IG9iajtcbiAgICAgIHRoaXMuZW1pdHNbaWRdID0gYmluZGVyO1xuICAgIH0uYmluZCh0aGlzLCBpZCksXG4gICAgdGhpcy5kb0VtaXQuYmluZCh0aGlzLCBpZCksXG4gICAgdGhpcy5kZWJ1Z1xuICApO1xufTtcblxuLyoqXG4gKiBFbWl0IGEgbWVzc2FnZSBvbiB0aGUgY2hhbm5lbCBvbmNlIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBkb0VtaXRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIElEIG9mIHRoZSBmbG93IHNlbmRpbmcgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIFRoZSBtZXNzYWdlIHRvIGVtaXRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxsIFNlbmQgbWVzc2FnZSB0byBhbGwgcmVjaXBpZW50cy5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmRvRW1pdCA9IGZ1bmN0aW9uICh0bywgbXNnLCBhbGwpIHtcbiAgaWYgKGFsbCkge1xuICAgIHRvID0gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge3RvOiB0bywgdHlwZTogJ21lc3NhZ2UnLCBtZXNzYWdlOiBtc2d9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5kb0VtaXQuYmluZCh0aGlzLCB0bywgbXNnKSk7XG4gIH1cbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW50ZXJmYWNlIG9mIHRoaXMgYXBpLlxuICogQG1ldGhvZCB0ZWFyZG93blxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgaW50ZXJmYWNlIHRvIHRlYXIgZG93bi5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmICh0aGlzLmVtaXRzW2lkXSkge1xuICAgIHRoaXMuZW1pdHNbaWRdKCdjbG9zZScpO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW2lkXTtcbiAgaWYgKHRoaXMuY2xvc2VIYW5kbGVyc1tpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY2xvc2VIYW5kbGVyc1tpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuaWZhY2VzW2lkXTtcbiAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tpZF07XG4gIGRlbGV0ZSB0aGlzLmVycm9ySGFuZGxlcnNbaWRdO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgYSBtZXNzYWdlIGVycm9yIHJlcG9ydGVkIHRvIHRoaXMgYXBpLlxuICogQG1ldGhvZCBlcnJvclxuICogQHBhcmFtIHtTdHJpbmc/fSBpZCBUaGUgaWQgb2YgdGhlIGludGVyZmFjZSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHdoaWNoIGZhaWxlZCwgaWYgcmVsZXZhbnQuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xuICBpZiAoaWQgJiYgdGhpcy5lcnJvckhhbmRsZXJzW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5lcnJvckhhbmRsZXJzW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AobWVzc2FnZSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIWlkKSB7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIG1lc3NhZ2UpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIGFwaSB0ZXJtaW5hdGVzLlxuICogQG1ldGhvZCBkb0Nsb3NlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnQ2hhbm5lbCBDbG9zaW5nJyxcbiAgICAgIHJlcXVlc3Q6ICdjbG9zZSdcbiAgICB9KTtcbiAgfVxuXG4gIHV0aWwuZWFjaFByb3AodGhpcy5lbWl0cywgZnVuY3Rpb24gKGVtaXQsIGlkKSB7XG4gICAgdGhpcy50ZWFyZG93bihpZCk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICB0aGlzLm9mZigpO1xuXG4gIHRoaXMuZW1pdENoYW5uZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiBUaGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Db25zdW1lci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgcmV0dXJuIFwiW0NvbnN1bWVyIFwiICsgdGhpcy5lbWl0Q2hhbm5lbCArIFwiXVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlt1bmJvdW5kIENvbnN1bWVyXVwiO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbmV4dCBJRCBmb3IgYW4gYXBpIGNoYW5uZWwuXG4gKiBAbWV0aG9kIG5leHRJZFxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIubmV4dElkID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIUNvbnN1bWVyLmlkKSB7XG4gICAgQ29uc3VtZXIuaWQgPSAxO1xuICB9XG4gIHJldHVybiAoQ29uc3VtZXIuaWQgKz0gMSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJ1Y3R1cmVkIGRhdGEgc3RydWN0dXJlIGludG8gYSBtZXNzYWdlIHN0cmVhbSBjb25mb3JtaW5nIHRvXG4gKiBhIHRlbXBsYXRlIGFuZCBhbiBhcnJheSBvZiBiaW5hcnkgZGF0YSBlbGVtZW50cy5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgbWVzc2FnZVRvUG9ydGFibGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSBpbnN0YW5jZSBvZiB0aGUgZGF0YSBzdHJ1Y3R1cmUgdG8gY29uZnJvbVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7e3RleHQ6IE9iamVjdCwgYmluYXJ5OiBBcnJheX19IFNlcGFyYXRlZCBkYXRhIHN0cmVhbXMuXG4gKi9cbkNvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCB2YWx1ZSwgZGVidWcpIHtcbiAgdmFyIGV4dGVybmFscyA9IFtdLFxuICAgIG1lc3NhZ2UgPSBDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlLCB2YWx1ZSwgZXh0ZXJuYWxzLCB0cnVlLCBkZWJ1Zyk7XG4gIHJldHVybiB7XG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBiaW5hcnk6IGV4dGVybmFsc1xuICB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IFN0cnVjdHVyZWQgRGF0YSBzdHJlYW1zIGludG8gYSBkYXRhIHN0cnVjdHVyZSBjb25mb3JtaW5nIHRvIGFcbiAqIHRlbXBsYXRlLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBwb3J0YWJsZVRvTWVzc2FnZVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge3t0ZXh0OiBPYmplY3QsIGJpbmFyeTogQXJyYXl9fSBzdHJlYW1zIFRoZSBzdHJlYW1zIHRvIGNvbmZvcm1cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRhdGEgc3RydWN0dXJlIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZS5cbiAqL1xuQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHN0cmVhbXMsIGRlYnVnKSB7XG4gIHJldHVybiBDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlLCBzdHJlYW1zLnRleHQsIHN0cmVhbXMuYmluYXJ5LCBmYWxzZSwgZGVidWcpO1xufTtcblxuLyoqXG4gKiBGb3JjZSBhIGNvbGxlY3Rpb24gb2YgdmFsdWVzIHRvIGxvb2sgbGlrZSB0aGUgdHlwZXMgYW5kIGxlbmd0aCBvZiBhbiBBUElcbiAqIHRlbXBsYXRlLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBjb25mb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIFRoZSB2YWx1ZSB0byBjb25mb3JtXG4gKiBAcGFyYW0ge0FycmF5fSBleHRlcm5hbHMgTGlzdGluZyBvZiBiaW5hcnkgZWxlbWVudHMgaW4gdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFdoZXRoZXIgdG8gdG8gc2VwYXJhdGUgb3IgY29tYmluZSBzdHJlYW1zLlxuICogQGFwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqL1xuQ29uc3VtZXIuY29uZm9ybSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZnJvbSwgZXh0ZXJuYWxzLCBzZXBhcmF0ZSwgZGVidWcpIHtcbiAgLyoganNoaW50IC1XMDg2ICovXG4gIGlmICh0eXBlb2YgKGZyb20pID09PSAnZnVuY3Rpb24nICYmIHRlbXBsYXRlICE9PSAncHJveHknKSB7XG4gICAgLy9mcm9tID0gdW5kZWZpbmVkO1xuICAgIC8vdGhyb3cgXCJUcnlpbmcgdG8gY29uZm9ybSBhIGZ1bmN0aW9uXCI7XG4gICAgZGVidWcuZXJyb3IoXCJNZXNzYWdlIGRpc2NhcmRlZCBhcyBmdW5jdGlvbnMgY2FuJ3QgY3Jvc3MgbW9kdWxlcyFcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgKGZyb20pID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZnJvbSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWJ1Zy5lcnJvcihcIk1lc3NhZ2UgZGlzY2FyZGVkIGZvciBub3QgbWF0Y2hpbmcgZGVjbGFyZWQgdHlwZSFcIiwgZnJvbSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcbiAgY2FzZSAnc3RyaW5nJzpcbiAgICByZXR1cm4gU3RyaW5nKCcnKSArIGZyb207XG4gIGNhc2UgJ251bWJlcic6XG4gICAgcmV0dXJuIE51bWJlcigxKSAqIGZyb207XG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJldHVybiBCb29sZWFuKGZyb20gPT09IHRydWUpO1xuICBjYXNlICdvYmplY3QnOlxuICAgIC8vIFRPRE8od2lsbHNjb3R0KTogQWxsb3cgcmVtb3ZhbCBpZiBzYW5kYm94aW5nIGVuZm9yY2VzIHRoaXMuXG4gICAgaWYgKHR5cGVvZiBmcm9tID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJvbSkpO1xuICAgIH1cbiAgY2FzZSAnYmxvYic6XG4gICAgaWYgKHNlcGFyYXRlKSB7XG4gICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgZXh0ZXJuYWxzLnB1c2goZnJvbSk7XG4gICAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdjb25mb3JtIGV4cGVjdGluZyBCbG9iLCBidXQgc2F3ICcgKyAodHlwZW9mIGZyb20pKTtcbiAgICAgICAgZXh0ZXJuYWxzLnB1c2gobmV3IEJsb2IoW10pKTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxzW2Zyb21dO1xuICAgIH1cbiAgY2FzZSAnYnVmZmVyJzpcbiAgICBpZiAoc2VwYXJhdGUpIHtcbiAgICAgIGV4dGVybmFscy5wdXNoKENvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlcihmcm9tLCBkZWJ1ZykpO1xuICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyKGV4dGVybmFsc1tmcm9tXSwgZGVidWcpO1xuICAgIH1cbiAgY2FzZSAncHJveHknOlxuICAgIHJldHVybiBmcm9tO1xuICB9XG4gIHZhciB2YWwsIGk7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlbXBsYXRlKSAmJiBmcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWwgPSBbXTtcbiAgICBpID0gMDtcbiAgICBpZiAodGVtcGxhdGUubGVuZ3RoID09PSAyICYmIHRlbXBsYXRlWzBdID09PSAnYXJyYXknKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwidGVtcGxhdGUgaXMgYXJyYXksIHZhbHVlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhbC5wdXNoKENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGVbMV0sIGZyb21baV0sIGV4dGVybmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSwgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChmcm9tW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWwucHVzaChDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlW2ldLCBmcm9tW2ldLCBleHRlcm5hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSwgZGVidWcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnb2JqZWN0JyAmJiBmcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWwgPSB7fTtcbiAgICB1dGlsLmVhY2hQcm9wKHRlbXBsYXRlLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgICAgaWYgKGZyb21bbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWxbbmFtZV0gPSBDb25zdW1lci5jb25mb3JtKHByb3AsIGZyb21bbmFtZV0sIGV4dGVybmFscywgc2VwYXJhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgZGVidWcuZXJyb3IoJ1Vua25vd24gdGVtcGxhdGUgcHJvdmlkZWQ6ICcgKyB0ZW1wbGF0ZSk7XG59O1xuXG4vKipcbiAqIE1ha2UgYSB0aGluZyBpbnRvIGFuIEFycmF5IEJ1ZmZlclxuICogQHN0YXRpY1xuICogQG1ldGhvZCBtYWtlQXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGluZ1xuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBpbiBjYXNlIG9mIGVycm9ycy5cbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBBbiBBcnJheSBCdWZmZXJcbiAqL1xuQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyID0gZnVuY3Rpb24gKHRoaW5nLCBkZWJ1Zykge1xuICBpZiAoIXRoaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxuXG4gIGlmICh0aGluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9IGVsc2UgaWYgKHRoaW5nLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlCdWZmZXJcIiAmJlxuICAgICAgdHlwZW9mIHRoaW5nLnByb3RvdHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIFdvcmthcm91bmQgZm9yIHdlYmtpdCBvcmlnaW4gb3duZXJzaGlwIGlzc3VlLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9VV05ldHdvcmtzTGFiL2ZyZWVkb20vaXNzdWVzLzI4XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyh0aGluZykuYnVmZmVyO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnLmVycm9yKCdleHBlY3RpbmcgQXJyYXlCdWZmZXIsIGJ1dCBzYXcgJyArXG4gICAgICAgICh0eXBlb2YgdGhpbmcpICsgJzogJyArIEpTT04uc3RyaW5naWZ5KHRoaW5nKSk7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhIFtuZXN0ZWRdIG9iamVjdCBhbmQgZnJlZXplIGl0cyBrZXlzIGZyb20gYmVpbmdcbiAqIHdyaXRhYmxlLiBOb3RlLCB0aGUgcmVzdWx0IGNhbiBoYXZlIG5ldyBrZXlzIGFkZGVkIHRvIGl0LCBidXQgZXhpc3Rpbmcgb25lc1xuICogY2Fubm90IGJlICBvdmVyd3JpdHRlbi4gRG9lc24ndCBkbyBhbnl0aGluZyBmb3IgYXJyYXlzIG9yIG90aGVyIGNvbGxlY3Rpb25zLlxuICpcbiAqIEBtZXRob2QgcmVjdXJzaXZlRnJlZXplT2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHRvIGJlIGZyb3plblxuICogQHJldHVybiB7T2JqZWN0fSBvYmpcbiAqKi9cbkNvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGssIHJldCA9IHt9O1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGZvciAoayBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCBrLCB7XG4gICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3Qob2JqW2tdKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3VtZXI7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gZW50cnkgcG9pbnQgZm9yIGRlYnVnZ2luZy5cbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQGltcGxlbWVudHMgUG9ydFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBEZWJ1ZyA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgdGhpcy5pZCA9ICdkZWJ1Zyc7XG4gIHRoaXMuZW1pdENoYW5uZWwgPSBmYWxzZTtcbiAgdGhpcy5jb25maWcgPSBmYWxzZTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIFRoZSBzdXBwb3J0ZWQgbG9nIGxldmVscyBmb3IgZGVidWdnaW5nLlxuICogQHN0YXRpY1xuICovXG5EZWJ1Zy5MRVZFTFMgPSBbJ2RlYnVnJywgJ2luZm8nLCAnbG9nJywgJ3dhcm4nLCAnZXJyb3InXTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uLlxuICovXG5EZWJ1Zy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnW0NvbnNvbGVdJztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsb2dnZXIgZm9yIG91dHB1dHRpbmcgZGVidWdnaW5nIG1lc3NhZ2VzLlxuICogQG1ldGhvZCBzZXRMb2dnZXJcbiAqIEBwYXJhbSB7Q29uc29sZX0gbG9nZ2VyIFRoZSBsb2dnZXIgdG8gcmVnaXN0ZXJcbiAqL1xuRGVidWcucHJvdG90eXBlLnNldExvZ2dlciA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgaWYgKHRoaXMubG9nZ2VyKSB7XG4gICAgdGhpcy5pbmZvKCdSZXBsYWNpbmcgTG9nZ2VyLicpO1xuICB9XG4gIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB0aGlzLmVtaXQoJ2xvZ2dlcicpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciByZWNlaXZpbmcgbWVzc2FnZXMgc2VudCB0byB0aGUgZGVidWcgcG9ydC5cbiAqIFRoZXNlIG1lc3NhZ2VzIGFyZSB1c2VkIHRvIHJldHJlaXZlIGNvbmZpZyBmb3IgZXhwb3NpbmcgY29uc29sZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBmb3IgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSB0aGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuRGVidWcucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UuY2hhbm5lbCAmJiAhdGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5jb25maWcgPSBtZXNzYWdlLmNvbmZpZztcbiAgICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlID0gdGhpcy5nZXRMb2dnZXIoJ0NvbnNvbGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICB9XG59O1xuXG4vKipcbiAqIERpc3BhdGNoIGEgZGVidWcgbWVzc2FnZSB3aXRoIGFyYml0cmFyeSBzZXZlcml0eS5cbiAqIEFsbCBkZWJ1ZyBtZXNzYWdlcyBhcmUgcm91dGVkIHRocm91Z2ggdGhlIG1hbmFnZXIsIHRvIGFsbG93IGZvciBkZWxlZ2F0aW9uLlxuICogQG1ldGhvZCBmb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZXZlcml0eSB0aGUgc2V2ZXJpdHkgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBsb2NhdGlvbiBvZiBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gYXJncyBUaGUgY29udGVudHMgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcHJpdmF0ZVxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UsIGFyZ3MpIHtcbiAgdmFyIGksIGFsaXN0ID0gW10sIGFyZ2FycjtcbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiICYmIHNvdXJjZSkge1xuICAgIHRyeSB7XG4gICAgICBhcmdhcnIgPSBKU09OLnBhcnNlKGFyZ3MpO1xuICAgICAgaWYgKGFyZ2FyciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGFyZ3MgPSBhcmdhcnI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gcGFzcy5cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhbGlzdC5wdXNoKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhbGlzdC5wdXNoKGFyZ3NbaV0pO1xuICAgIH1cbiAgfVxuICBpZiAoIXRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLm9uKCdyZWFkeScsIHRoaXMuZm9ybWF0LmJpbmQodGhpcywgc2V2ZXJpdHksIHNvdXJjZSwgYWxpc3QpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICBzZXZlcml0eTogc2V2ZXJpdHksXG4gICAgc291cmNlOiBzb3VyY2UsXG4gICAgcXVpZXQ6IHRydWUsXG4gICAgcmVxdWVzdDogJ2RlYnVnJyxcbiAgICBtc2c6IEpTT04uc3RyaW5naWZ5KGFsaXN0KVxuICB9KTtcbn07XG5cbi8qKlxuICogUHJpbnQgcmVjZWl2ZWQgbWVzc2FnZXMgb24gdGhlIGNvbnNvbGUuXG4gKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgbWFuYWdlciBpbiByZXNwb25zZSB0byBhbiBlbWlzc2lvbiBmcm9tIGZvcm1hdC5cbiAqIEBtZXRob2QgcHJpbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIGVtaXR0ZWQgYnkge0BzZWUgZm9ybWF0fSB0byBwcmludC5cbiAqL1xuRGVidWcucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgaWYgKCF0aGlzLmxvZ2dlcikge1xuICAgIHRoaXMub25jZSgnbG9nZ2VyJywgdGhpcy5wcmludC5iaW5kKHRoaXMsIG1lc3NhZ2UpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYXJncywgYXJyID0gW10sIGkgPSAwO1xuICBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlLm1zZyk7XG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFyci5wdXNoKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFyci5wdXNoKGFyZ3NbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgfVxuICB0aGlzLmxvZ2dlclttZXNzYWdlLnNldmVyaXR5XS5jYWxsKHRoaXMubG9nZ2VyLCBtZXNzYWdlLnNvdXJjZSwgYXJyLCBmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgbG9nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnbG9nJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhbiBpbmZvIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2luZm8nLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2RlYnVnJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2Qgd2FyblxuICovXG5EZWJ1Zy5wcm90b3R5cGUud2FybiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ3dhcm4nLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGVycm9yXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2Vycm9yJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgdGhhdCBsb2dzIG1lc3NhZ2VzIHByZWZpeGVkIGJ5IGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgcHJlZml4IGZvciBsb2dnZWQgbWVzc2FnZXMuXG4gKiBAcmV0dXJucyB7Q29uc29sZX0gQSBjb25zb2xlLWxpa2Ugb2JqZWN0LlxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGxvZyA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB0aGlzLmZvcm1hdChzZXZlcml0eSwgc291cmNlLCBhcmdzKTtcbiAgfSxcbiAgICBsb2dnZXIgPSB7XG4gICAgICBmcmVlZG9tOiB0cnVlXG4gICAgfTtcbiAgRGVidWcuTEVWRUxTLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgbG9nZ2VyW2xldmVsXSA9IGxvZy5iaW5kKHRoaXMsIGxldmVsLCBuYW1lKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgc3luY2hyb25vdXMgJ2dldExvZ2dlcicgbWV0aG9kIHRoYXQgYmluZHMgYXJvdW5kIGFuIGFzeW5jaHJvbm91c1xuICogbG9nZ2VyIGJ5IGNyZWF0aW5nIGEgYnVmZmVyIHVudGlsIHRoZSBhc3luY2hyb25vdXMgbG9nZ2VyIGlzIHJlc29sdmVkLlxuICogQHNlZSB7TW9kdWxlSW50ZXJuYWwubG9hZExpbmtzfSBmb3Igd2hlcmUgdGhpcyBtZXRob2QgaXMgYm91bmQgdG8gdGhlIGNyZWF0ZWRcbiAqICAgICBleHRlcm5hbCBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldExvZ2dpbmdTaGltXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3luY01ldGhvZCBUaGUgd3JhcHBlciB0byAnZ2V0TG9nZ2VyJ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuZ2V0TG9nZ2luZ1NoaW0gPSBmdW5jdGlvbiAoYXN5bmNNZXRob2QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldExvZ2dnZXJTeW5jKG5hbWUpIHtcbiAgICB2YXIgdG9SZXNvbHZlID0gYXN5bmNNZXRob2QobmFtZSksXG4gICAgICBidWZmZXIgPSBbXSxcbiAgICAgIG1ldGhvZHMgPSBEZWJ1Zy5MRVZFTFMsXG4gICAgICBiYWNraW5nID0gbnVsbCxcbiAgICAgIHJldCA9IHt9O1xuICAgIHRvUmVzb2x2ZS50aGVuKGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgICAgIGJhY2tpbmcgPSBsb2dnZXI7XG4gICAgICBidWZmZXIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBiYWNraW5nW2l0ZW1bMF1dLmFwcGx5KGJhY2tpbmcsIGl0ZW1bMV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtdGhkKSB7XG4gICAgICByZXRbbXRoZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgaWYgKGJhY2tpbmcpIHtcbiAgICAgICAgICBiYWNraW5nW3RoaXNdLmFwcGx5KGJhY2tpbmcsIGFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZmZlci5wdXNoKFt0aGlzLCBhcmdzXSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZChtdGhkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWJ1ZztcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbnZhciBBcGkgPSByZXF1aXJlKCcuL2FwaScpO1xyXG52YXIgRGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJyk7XHJcbnZhciBIdWIgPSByZXF1aXJlKCcuL2h1YicpO1xyXG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xyXG52YXIgUG9saWN5ID0gcmVxdWlyZSgnLi9wb2xpY3knKTtcclxudmFyIFByb3h5QmluZGVyID0gcmVxdWlyZSgnLi9wcm94eWJpbmRlcicpO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcbnZhciBCdW5kbGUgPSByZXF1aXJlKCcuL2J1bmRsZScpO1xyXG5cclxudmFyIGZyZWVkb21HbG9iYWw7XHJcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIC8vIE5vZGUuanNcclxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLnByb3RvdHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmcmVlZG9tR2xvYmFsID0gZ2xvYmFsO1xyXG4gIC8vIEJyb3dzZXJzXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBmcmVlZG9tR2xvYmFsID0gdGhpcztcclxuICAgIH0sIDApO1xyXG4gIH1cclxufTtcclxuZ2V0R2xvYmFsKCk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGZyZWVkb20gY29udGV4dC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2FsIGNvbnRleHQuXHJcbiAqIEBzZWUge3V0aWwvd29ya2VyRW50cnkuanN9XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgdG8gbG9hZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBDb25maWd1cmF0aW9uIGtleXMgc2V0IGJ5IHRoZSB1c2VyLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgbW9kdWxlIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxyXG4gKi9cclxudmFyIHNldHVwID0gZnVuY3Rpb24gKGNvbnRleHQsIG1hbmlmZXN0LCBjb25maWcpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGRlYnVnID0gbmV3IERlYnVnKCksXHJcbiAgICBodWIgPSBuZXcgSHViKGRlYnVnKSxcclxuICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKGRlYnVnKSxcclxuICAgIGFwaSA9IG5ldyBBcGkoZGVidWcpLFxyXG4gICAgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKGh1YiwgcmVzb3VyY2UsIGFwaSksXHJcbiAgICBiaW5kZXIgPSBuZXcgUHJveHlCaW5kZXIobWFuYWdlciksXHJcbiAgICBwb2xpY3ksXHJcbiAgICBzaXRlX2NmZyA9IHtcclxuICAgICAgJ2RlYnVnJzogJ2xvZycsXHJcbiAgICAgICdtYW5pZmVzdCc6IG1hbmlmZXN0LFxyXG4gICAgICAnbW9kdWxlQ29udGV4dCc6ICghY29udGV4dCB8fCB0eXBlb2YgKGNvbnRleHQuaXNNb2R1bGUpID09PSBcInVuZGVmaW5lZFwiKSA/XHJcbiAgICAgICAgICB1dGlsLmlzTW9kdWxlQ29udGV4dCgpIDpcclxuICAgICAgICAgIGNvbnRleHQuaXNNb2R1bGVcclxuICAgIH0sXHJcbiAgICBsaW5rLFxyXG4gICAgUG9ydCxcclxuICAgIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwaS5jbGVhbnVwKCk7XHJcbiAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuXHJcbiAgaWYgKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29uZmlnLCB0cnVlKTtcclxuICB9XHJcbiAgc2l0ZV9jZmcuZ2xvYmFsID0gZnJlZWRvbUdsb2JhbDtcclxuICBpZiAoY29udGV4dCkge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29udGV4dCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWdpc3RlciB1c2VyLXN1cHBsaWVkIGV4dGVuc2lvbnMuXHJcbiAgLy8gRm9yIGV4YW1wbGUgdGhlICdjb3JlLm9hdXRoJyBwcm92aWRlciBkZWZpbmVzIGEgcmVnaXN0ZXIgZnVuY3Rpb24sXHJcbiAgLy8gd2hpY2ggZW5hYmxlcyBzaXRlX2NmZy5vYXV0aCB0byBiZSByZWdpc3RlcmVkIHdpdGggaXQuXHJcbiAgY29udGV4dC5wcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgIHZhciBuYW1lO1xyXG4gICAgaWYgKHByb3ZpZGVyLm5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBwcm92aWRlci5yZWdpc3RlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBuYW1lID0gcHJvdmlkZXIubmFtZS5zdWJzdHIoNSk7XHJcbiAgICAgIC8vIEludmVydCBwcmlvcml0eSBhbmQgcHJlZmVyIHVzZXIgY29uZmlnIG92ZXIgbG9jYWwgY29udGV4dCBmb3IgdGhlc2UuXHJcbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnW25hbWVdKSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIoY29uZmlnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIGlmIChzaXRlX2NmZ1tuYW1lXSkge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKHNpdGVfY2ZnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3Rlcih1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgQnVuZGxlLnJlZ2lzdGVyKGNvbnRleHQucHJvdmlkZXJzLCBhcGkpO1xyXG4gIHJlc291cmNlLnJlZ2lzdGVyKGNvbnRleHQucmVzb2x2ZXJzIHx8IFtdKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGlmIChzaXRlX2NmZy5tb2R1bGVDb250ZXh0KSB7XHJcbiAgICAgIFBvcnQgPSBzaXRlX2NmZy5wb3J0VHlwZTtcclxuICAgICAgbGluayA9IG5ldyBQb3J0KCdPdXRib3VuZCcsIHJlc291cmNlKTtcclxuICAgICAgbWFuYWdlci5zZXR1cChsaW5rKTtcclxuXHJcbiAgICAgIC8vIERlbGF5IGRlYnVnIG1lc3NhZ2VzIHVudGlsIGRlbGVnYXRpb24gdG8gdGhlIHBhcmVudCBjb250ZXh0IGlzIHNldHVwLlxyXG4gICAgICBtYW5hZ2VyLm9uY2UoJ2RlbGVnYXRlJywgbWFuYWdlci5zZXR1cC5iaW5kKG1hbmFnZXIsIGRlYnVnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYW5hZ2VyLnNldHVwKGRlYnVnKTtcclxuICAgICAgcG9saWN5ID0gbmV3IFBvbGljeShtYW5hZ2VyLCByZXNvdXJjZSwgc2l0ZV9jZmcpO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIGhvdyB0byBsb2FkIGEgcm9vdCBtb2R1bGUuXHJcbiAgICAgIHZhciBmYWxsYmFja0xvZ2dlciwgZ2V0SWZhY2U7XHJcbiAgICAgIGZhbGxiYWNrTG9nZ2VyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBhcGkuZ2V0Q29yZSgnY29yZS5jb25zb2xlJywge1xyXG4gICAgICAgICAgY29uZmlnOiBzaXRlX2NmZ1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICB2YXIgbG9nZ2VyID0gbmV3IHByb3ZpZGVyLmluc3QoKTtcclxuICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihsb2dnZXIpO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgZGVidWcuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldElmYWNlID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlLmdldChzaXRlX2NmZy5sb2NhdGlvbiwgbWFuaWZlc3QpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoY2Fub25pY2FsX21hbmlmZXN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2xpY3kuZ2V0KFtdLCBjYW5vbmljYWxfbWFuaWZlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgIG1hbmFnZXIuc2V0dXAoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGJpbmRlci5iaW5kRGVmYXVsdChpbnN0YW5jZSwgYXBpLCBpbnN0YW5jZS5tYW5pZmVzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBMb2FkIGFwcHJvcHJpYXRlIExvZ2dlci5cclxuICAgICAgaWYgKHNpdGVfY2ZnLmxvZ2dlcikge1xyXG4gICAgICAgIGdldElmYWNlKHNpdGVfY2ZnLmxvZ2dlcikudGhlbihmdW5jdGlvbiAoaWZhY2UpIHtcclxuICAgICAgICAgIGlmIChpZmFjZS5leHRlcm5hbC5hcGkgIT09ICdjb25zb2xlJykge1xyXG4gICAgICAgICAgICBmYWxsYmFja0xvZ2dlcihcIlVud2lsbGluZyB0byB1c2UgbG9nZ2VyIHdpdGggdW5rbm93biBBUEk6XCIsXHJcbiAgICAgICAgICAgICAgaWZhY2UuZXh0ZXJuYWwuYXBpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihpZmFjZS5leHRlcm5hbCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxsYmFja0xvZ2dlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFsbGJhY2tMb2dnZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9hZCByb290IG1vZHVsZS5cclxuICAgICAgZ2V0SWZhY2Uoc2l0ZV9jZmcubWFuaWZlc3QpLnRoZW4oZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICAgICAgaWZhY2UucG9ydC5vbmNlKCdjbG9zZScsIGNsZWFudXApO1xyXG4gICAgICAgIHJldHVybiBpZmFjZS5leHRlcm5hbDtcclxuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGRlYnVnLmVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgbWFuaWZlc3Q6ICcgKyBlcnIpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGh1Yi5lbWl0KCdjb25maWcnLCBzaXRlX2NmZyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xyXG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGZkb20uSHViLCB0aGUgY29yZSBtZXNzYWdlIGh1YiBiZXR3ZWVuIGZyZWVkb20gbW9kdWxlcy5cclxuICogSW5jb21taW5nIG1lc3NhZ2VzIGZyb20gYXBwcyBhcmUgc2VudCB0byBodWIub25NZXNzYWdlKClcclxuICogQGNsYXNzIEh1YlxyXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBMb2dnZXIgZm9yIGRlYnVnZ2luZy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgSHViID0gZnVuY3Rpb24gKGRlYnVnKSB7XHJcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xyXG4gIHRoaXMuY29uZmlnID0ge307XHJcbiAgdGhpcy5hcHBzID0ge307XHJcbiAgdGhpcy5yb3V0ZXMgPSB7fTtcclxuXHJcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XHJcbiAgdGhpcy5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICB9LmJpbmQodGhpcykpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBhbiBpbmNvbWluZyBtZXNzYWdlIGZyb20gYSBmcmVlZG9tIGFwcC5cclxuICogQG1ldGhvZCBvbk1lc3NhZ2VcclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgaWRlbnRpZml5aW5nIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHNlbnQgbWVzc2FnZS5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xyXG4gIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMucm91dGVzW3NvdXJjZV0sIHR5cGU7XHJcbiAgaWYgKCFkZXN0aW5hdGlvbiB8fCAhZGVzdGluYXRpb24uYXBwKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJNZXNzYWdlIGRyb3BwZWQgZnJvbSB1bnJlZ2lzdGVyZWQgc291cmNlIFwiICsgc291cmNlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk1lc3NhZ2UgZHJvcHBlZCB0byBkZXN0aW5hdGlvbiBcIiArIGRlc3RpbmF0aW9uLmFwcCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgZmlyZWhvc2UgdHJhY2luZyBhbGwgaW50ZXJuYWwgZnJlZWRvbS5qcyBtZXNzYWdlcy5cclxuICBpZiAoIW1lc3NhZ2UucXVpZXQgJiYgIWRlc3RpbmF0aW9uLnF1aWV0ICYmIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnRyYWNlKSB7XHJcbiAgICB0eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21lc3NhZ2UnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS5hY3Rpb24gPT09ICdtZXRob2QnKSB7XHJcbiAgICAgIHR5cGUgPSAnbWV0aG9kLicgKyBtZXNzYWdlLm1lc3NhZ2UudHlwZTtcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbWV0aG9kJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ21ldGhvZCcpIHtcclxuICAgICAgdHlwZSA9ICdyZXR1cm4uJyArIG1lc3NhZ2UubWVzc2FnZS5uYW1lO1xyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXNzYWdlJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2V2ZW50Jykge1xyXG4gICAgICB0eXBlID0gJ2V2ZW50LicgKyBtZXNzYWdlLm1lc3NhZ2UubmFtZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVidWcuZGVidWcodGhpcy5hcHBzW2Rlc3RpbmF0aW9uLnNvdXJjZV0udG9TdHJpbmcoKSArXHJcbiAgICAgICAgXCIgLVwiICsgdHlwZSArIFwiLT4gXCIgK1xyXG4gICAgICAgIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdLnRvU3RyaW5nKCkgKyBcIi5cIiArIGRlc3RpbmF0aW9uLmZsb3cpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0ub25NZXNzYWdlKGRlc3RpbmF0aW9uLmZsb3csIG1lc3NhZ2UpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbG9jYWwgZGVzdGluYXRpb24gcG9ydCBvZiBhIGZsb3cuXHJcbiAqIEBtZXRob2QgZ2V0RGVzdGluYXRpb25cclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgZmxvdyB0byByZXRyaWV2ZS5cclxuICogQHJldHVybiB7UG9ydH0gVGhlIGRlc3RpbmF0aW9uIHBvcnQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdldERlc3RpbmF0aW9uID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMucm91dGVzW3NvdXJjZV07XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsIHNvdXJjZSBwb3J0IG9mIGEgZmxvdy5cclxuICogQG1ldGhvZCBnZXRTb3VyY2VcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIGZsb3cgaWRlbnRpZmllciB0byByZXRyaWV2ZS5cclxuICogQHJldHVybiB7UG9ydH0gVGhlIHNvdXJjZSBwb3J0LlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKCF0aGlzLmFwcHNbc291cmNlLmlkXSkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTm8gcmVnaXN0ZXJlZCBzb3VyY2UgJ1wiICsgc291cmNlLmlkICsgXCInXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hcHBzW3NvdXJjZS5pZF07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYSBkZXN0aW5hdGlvbiBmb3IgbWVzc2FnZXMgd2l0aCB0aGlzIGh1Yi5cclxuICogQG1ldGhvZCByZWdpc3RlclxyXG4gKiBAcGFyYW0ge1BvcnR9IGFwcCBUaGUgUG9ydCB0byByZWdpc3Rlci5cclxuICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VdIFdoZXRoZXIgdG8gb3ZlcnJpZGUgYW4gZXhpc3RpbmcgcG9ydC5cclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYXBwIHdhcyByZWdpc3RlcmVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChhcHAsIGZvcmNlKSB7XHJcbiAgaWYgKCF0aGlzLmFwcHNbYXBwLmlkXSB8fCBmb3JjZSkge1xyXG4gICAgdGhpcy5hcHBzW2FwcC5pZF0gPSBhcHA7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZXJlZ2lzdGVyIGEgZGVzdGluYXRpb24gZm9yIG1lc3NhZ2VzIHdpdGggdGhlIGh1Yi5cclxuICogTm90ZTogZG9lcyBub3QgcmVtb3ZlIGFzc29jaWF0ZWQgcm91dGVzLiBBcyBzdWNoLCBkZXJlZ2lzdGVyaW5nIHdpbGxcclxuICogcHJldmVudCB0aGUgaW5zdGFsbGF0aW9uIG9mIG5ldyByb3V0ZXMsIGJ1dCB3aWxsIG5vdCBkaXN0cnVwdCBleGlzdGluZ1xyXG4gKiBodWIgcm91dGVzLlxyXG4gKiBAbWV0aG9kIGRlcmVnaXN0ZXJcclxuICogQHBhcmFtIHtQb3J0fSBhcHAgVGhlIFBvcnQgdG8gZGVyZWdpc3RlclxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBhcHAgd2FzIGRlcmVnaXN0ZXJlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZGVyZWdpc3RlciA9IGZ1bmN0aW9uIChhcHApIHtcclxuICBpZiAoIXRoaXMuYXBwc1thcHAuaWRdKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGRlbGV0ZSB0aGlzLmFwcHNbYXBwLmlkXTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbnN0YWxsIGEgbmV3IHJvdXRlIGluIHRoZSBodWIuXHJcbiAqIEBtZXRob2QgaW5zdGFsbFxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtQb3J0fSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZmxvdyB3aGVyZSB0aGUgZGVzdGluYXRpb24gd2lsbCByZWNlaXZlIG1lc3NhZ2VzLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHF1aWV0IFdoZXRoZXIgbWVzc2FnZXMgb24gdGhpcyByb3V0ZSBzaG91bGQgYmUgc3VwcHJlc3NlZC5cclxuICogQHJldHVybiB7U3RyaW5nfSBBIHJvdXRpbmcgc291cmNlIGlkZW50aWZpZXIgZm9yIHNlbmRpbmcgbWVzc2FnZXMuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0aW5hdGlvbiwgZmxvdywgcXVpZXQpIHtcclxuICBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2UpO1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIlVud2lsbGluZyB0byBnZW5lcmF0ZSBibGFja2hvbGUgZmxvdyBmcm9tIFwiICsgc291cmNlLmlkKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByb3V0ZSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZSgpO1xyXG4gIHRoaXMucm91dGVzW3JvdXRlXSA9IHtcclxuICAgIGFwcDogZGVzdGluYXRpb24sXHJcbiAgICBmbG93OiBmbG93LFxyXG4gICAgc291cmNlOiBzb3VyY2UuaWQsXHJcbiAgICBxdWlldDogcXVpZXRcclxuICB9O1xyXG4gIGlmICh0eXBlb2Ygc291cmNlLm9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzb3VyY2Uub24ocm91dGUsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgcm91dGUpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVbmluc3RhbGwgYSBodWIgcm91dGUuXHJcbiAqIEBtZXRob2QgdW5pbnN0YWxsXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgcm91dGUgdG8gdW5pbnN0YWxsLlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSByb3V0ZSB3YXMgYWJsZSB0byBiZSB1bmluc3RhbGxlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUudW5pbnN0YWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZmxvdykge1xyXG4gIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZSk7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVzW2Zsb3ddO1xyXG4gIGlmICghcm91dGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKHJvdXRlLnNvdXJjZSAhPT0gc291cmNlLmlkKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJGbG93IFwiICsgZmxvdyArIFwiIGRvZXMgbm90IGJlbG9uZyB0byBwb3J0IFwiICsgc291cmNlLmlkKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB0aGlzLnJvdXRlc1tmbG93XTtcclxuICBpZiAodHlwZW9mIHNvdXJjZS5vZmYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHNvdXJjZS5vZmYocm91dGUpO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBhbmQgbm90aWZ5IGFsbCBjb25uZWN0ZWQgZGVzdGluYXRpb25zIG9mIHRoZWlyIHJlbW92YWwuXHJcbiAqIEBtZXRob2QgdGVhcmRvd25cclxuICovXHJcbkh1Yi5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmFwcHMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlLm9mZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBzb3VyY2Uub2ZmKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdGhpcy5hcHBzID0ge307XHJcbiAgdGhpcy5yb3V0ZXMgPSB7fTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSByb3V0aW5nIGlkZW50aWZpZXIuXHJcbiAqIEBtZXRob2QgZ2VuZXJhdGVSb3V0ZVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgcm91dGluZyBzb3VyY2UgaWRlbnRpZmllci5cclxuICogQHByaXZhdGVcclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2VuZXJhdGVSb3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdXRpbC5nZXRJZCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIdWI7XHJcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgbGluayBjb25uZWN0cyB0d28gZnJlZWRvbSBodWJzLiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzXG4gKiBwcm92aWRpbmcgY29tbW9uIGZ1bmN0aW9uYWxpdHkgb2YgdHJhbnNsYXRpbmcgY29udHJvbCBjaGFubmVscyxcbiAqIGFuZCBpbnRlZ3JhdGluZyBjb25maWcgaW5mb3JtYXRpb24uXG4gKiBAY2xhc3MgTGlua1xuICogQGltcGxlbWVudHMgUG9ydFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBMaW5rID0gZnVuY3Rpb24gKG5hbWUsIHJlc291cmNlKSB7XG4gIHRoaXMuaWQgPSAnTGluaycgKyBNYXRoLnJhbmRvbSgpO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMuc3JjID0gbnVsbDtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdXRpbC5taXhpbih0aGlzLCBMaW5rLnByb3RvdHlwZSk7XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgbWVzc2FnZXMgZnJvbSB0aGUgaHViIHRvIHRoaXMgcG9ydC5cbiAqIE1hbmFnZXMgc3RhcnR1cCwgYW5kIHBhc3NlcyBvdGhlcnMgdG8gJ2RlbGl2ZXJNZXNzYWdlJyBpbXBsZW1lbnRlZFxuICogaW4gZGVyaXZlZCBjbGFzc2VzLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBjaGFubmVsL2Zsb3cgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgTWVzc2FnZS5cbiAqL1xuTGluay5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiAhdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIGlmICghdGhpcy5jb250cm9sQ2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVsaXZlck1lc3NhZ2UoZmxvdywgbWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBoYW5kbGVyIHRvIGFsZXJ0IG9mIGVycm9ycyBvbiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIGFkZEVycm9ySGFuZGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBNZXRob2QgdG8gY2FsbCB3aXRoIGVycm9ycy5cbiAqL1xuTGluay5wcm90b3R5cGUuYWRkRXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgdGhpcy5vbkVycm9yID0gaGFuZGxlcjtcbn07XG5cbi8qKlxuICogUmVwb3J0IGFuIGVycm9yIG9uIHRoaXMgbGluay5cbiAqIEBtZXRob2Qgb25lcnJvclxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvciB0aGF0IG9jY3VycmVkLlxuICovXG5MaW5rLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAvL0ZpbGxlZCBpbiBieSBhZGRFcnJvckhhbmRsZXJcbn07XG5cbi8qKlxuICogRW1pdCBtZXNzYWdlcyB0byB0aGUgdGhlIGh1YiwgbWFwcGluZyBjb250cm9sIGNoYW5uZWxzLlxuICogQG1ldGhvZCBlbWl0TWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGZsb3cgdG8gZW1pdCB0aGUgbWVzc2FnZSBvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzZ2FlIFRoZSBtZXNzYWdlIHRvIGVtaXQuXG4gKi9cbkxpbmsucHJvdG90eXBlLmVtaXRNZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgZmxvdyA9IHRoaXMuY29udHJvbENoYW5uZWw7XG4gIH1cbiAgdGhpcy5lbWl0KGZsb3csIG1lc3NhZ2UpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiLypnbG9iYWxzIFdvcmtlciAqL1xuLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIExpbmsgPSByZXF1aXJlKCcuLi9saW5rJyk7XG5cbi8qKlxuICogQSBwb3J0IHByb3ZpZGluZyBtZXNzYWdlIHRyYW5zcG9ydCBiZXR3ZWVuIHR3byBmcmVlZG9tIGNvbnRleHRzIHZpYSBXb3JrZXIuXG4gKiBAY2xhc3MgV29ya2VyXG4gKiBAZXh0ZW5kcyBMaW5rXG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgV29ya2VyTGluayA9IGZ1bmN0aW9uKGlkLCByZXNvdXJjZSkge1xuICBMaW5rLmNhbGwodGhpcywgaWQsIHJlc291cmNlKTtcbiAgaWYgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0IHRoaXMgcG9ydCBieSBsaXN0ZW5pbmcgb3IgY3JlYXRpbmcgYSB3b3JrZXIuXG4gKiBAbWV0aG9kIHN0YXJ0XG4gKiBAcHJpdmF0ZVxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jb25maWcubW9kdWxlQ29udGV4dCkge1xuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2V0dXBXb3JrZXIoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdG9wIHRoaXMgcG9ydCBieSBkZXN0cm95aW5nIHRoZSB3b3JrZXIuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwcml2YXRlXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgLy8gRnVuY3Rpb24gaXMgZGV0ZXJtaW5lZCBieSBzZXR1cExpc3RlbmVyIG9yIHNldHVwRnJhbWUgYXMgYXBwcm9wcmlhdGUuXG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIltXb3JrZXIgXCIgKyB0aGlzLmlkICsgXCJdXCI7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIGdsb2JhbCBsaXN0ZW5lciB0byBoYW5kbGUgaW5jb21pbmcgbWVzc2FnZXMgdG8gdGhpc1xuICogZnJlZWRvbS5qcyBjb250ZXh0LlxuICogQG1ldGhvZCBzZXR1cExpc3RlbmVyXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnNldHVwTGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9uTXNnID0gZnVuY3Rpb24obXNnKSB7XG4gICAgdGhpcy5lbWl0TWVzc2FnZShtc2cuZGF0YS5mbG93LCBtc2cuZGF0YS5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMpO1xuICB0aGlzLm9iaiA9IHRoaXMuY29uZmlnLmdsb2JhbDtcbiAgdGhpcy5vYmouYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnLCB0cnVlKTtcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnLCB0cnVlKTtcbiAgICBkZWxldGUgdGhpcy5vYmo7XG4gIH07XG4gIHRoaXMuZW1pdCgnc3RhcnRlZCcpO1xuICB0aGlzLm9iai5wb3N0TWVzc2FnZShcIlJlYWR5IEZvciBNZXNzYWdlc1wiKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgd29ya2VyIHdpdGggYW4gaXNvbGF0ZWQgZnJlZWRvbS5qcyBjb250ZXh0IGluc2lkZS5cbiAqIEBtZXRob2Qgc2V0dXBXb3JrZXJcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc2V0dXBXb3JrZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdvcmtlcixcbiAgICBibG9iLFxuICAgIHNlbGYgPSB0aGlzO1xuICB3b3JrZXIgPSBuZXcgV29ya2VyKHRoaXMuY29uZmlnLnNvdXJjZSArICcjJyArIHRoaXMuaWQpO1xuXG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgIHRoaXMub25FcnJvcihlcnIpO1xuICB9LmJpbmQodGhpcyksIHRydWUpO1xuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uKHdvcmtlciwgbXNnKSB7XG4gICAgaWYgKCF0aGlzLm9iaikge1xuICAgICAgdGhpcy5vYmogPSB3b3JrZXI7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0TWVzc2FnZShtc2cuZGF0YS5mbG93LCBtc2cuZGF0YS5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHdvcmtlciksIHRydWUpO1xuICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgaWYgKHRoaXMub2JqKSB7XG4gICAgICBkZWxldGUgdGhpcy5vYmo7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIGh1YiB0byB0aGlzIHBvcnQuXG4gKiBSZWNlaXZlZCBtZXNzYWdlcyB3aWxsIGJlIGVtaXR0ZWQgZnJvbSB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgcG9ydC5cbiAqIEBtZXRob2QgZGVsaXZlck1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBjaGFubmVsL2Zsb3cgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgTWVzc2FnZS5cbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuZGVsaXZlck1lc3NhZ2UgPSBmdW5jdGlvbihmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmXG4gICAgICBtZXNzYWdlLmNoYW5uZWwgPT09ICdjb250cm9sJykge1xuICAgIHRoaXMuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLm9iaikge1xuICAgICAgdGhpcy5vYmoucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBmbG93OiBmbG93LFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydGVkJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmtlckxpbms7XG5cbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBNb2R1bGVJbnRlcm5hbCA9IHJlcXVpcmUoJy4vbW9kdWxlaW50ZXJuYWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCB3aGljaCBtYW5hZ2VzIHRoZSBjb250cm9sIHBsYW5lIG9mIG9mIGNoYW5naW5nIGh1YiByb3V0ZXMuXG4gKiBAY2xhc3MgTWFuYWdlclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHBhcmFtIHtIdWJ9IGh1YiBUaGUgcm91dGluZyBodWIgdG8gY29udHJvbC5cbiAqIEBwYXJhbSB7UmVzb3VyY2V9IHJlc291cmNlIFRoZSByZXNvdXJjZSBtYW5hZ2VyIGZvciB0aGUgcnVudGltZS5cbiAqIEBwYXJhbSB7QXBpfSBhcGkgVGhlIEFQSSBtYW5hZ2VyIGZvciB0aGUgcnVudGltZS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTWFuYWdlciA9IGZ1bmN0aW9uIChodWIsIHJlc291cmNlLCBhcGkpIHtcbiAgdGhpcy5pZCA9ICdjb250cm9sJztcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5jb250cm9sRmxvd3MgPSB7fTtcbiAgdGhpcy5kYXRhRmxvd3MgPSB7fTtcbiAgdGhpcy5kYXRhRmxvd3NbdGhpcy5pZF0gPSBbXTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcCA9IHt9O1xuXG4gIHRoaXMuZGVidWcgPSBodWIuZGVidWc7XG4gIHRoaXMuaHViID0gaHViO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gIHRoaXMuYXBpID0gYXBpO1xuXG4gIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuICB0aGlzLnRvRGVsZWdhdGUgPSB7fTtcblxuICB0aGlzLmh1Yi5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbWl0KCdjb25maWcnKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdGhpcy5odWIucmVnaXN0ZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltMb2NhbCBDb250cm9sbGVyXVwiO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIG1lc3NhZ2VzIHNlbnQgdG8gdGhpcyBwb3J0LlxuICogVGhlIG1hbmFnZXIsIG9yICdjb250cm9sJyBkZXN0aW5hdGlvbiBoYW5kbGVzIHNldmVyYWwgdHlwZXMgb2YgbWVzc2FnZXMsXG4gKiBpZGVudGlmaWVkIGJ5IHRoZSByZXF1ZXN0IHByb3BlcnR5LiAgVGhlIGFjdGlvbnMgYXJlOlxuICogMS4gZGVidWcuIFByaW50cyB0aGUgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIDIuIGxpbmsuIENyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIHNvdXJjZSBhbmQgYSBwcm92aWRlZCBkZXN0aW5hdGlvbiBwb3J0LlxuICogMy4gZW52aXJvbm1lbnQuIEluc3RhbnRpYXRlIGEgbW9kdWxlIGVudmlyb25tZW50IGRlZmluZWQgaW4gTW9kdWxlSW50ZXJuYWwuXG4gKiA0LiBkZWxlZ2F0ZS4gUm91dGVzIGEgZGVmaW5lZCBzZXQgb2YgY29udHJvbCBtZXNzYWdlcyB0byBhbm90aGVyIGxvY2F0aW9uLlxuICogNS4gcmVzb3VyY2UuIFJlZ2lzdGVycyB0aGUgc291cmNlIGFzIGEgcmVzb3VyY2UgcmVzb2x2ZXIuXG4gKiA2LiBjb3JlLiBHZW5lcmF0ZXMgYSBjb3JlIHByb3ZpZGVyIGZvciB0aGUgcmVxdWVzdGVyLlxuICogNy4gY2xvc2UuIFRlYXJzIGRvd24gcm91dGVzIGludm9saW5nIHRoZSByZXF1ZXN0aW5nIHBvcnQuXG4gKiA4LiB1bmxpbmsuIFRlYXJzIGRvd24gYSByb3V0ZSBmcm9tIHRoZSByZXF1ZXN0aW5nIHBvcnQuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIHNvdXJjZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIHZhciByZXZlcnNlRmxvdyA9IHRoaXMuY29udHJvbEZsb3dzW2Zsb3ddLCBvcmlnaW47XG4gIGlmICghcmV2ZXJzZUZsb3cpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmtub3duIG1lc3NhZ2Ugc291cmNlOiBcIiArIGZsb3cpO1xuICAgIHJldHVybjtcbiAgfVxuICBvcmlnaW4gPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihyZXZlcnNlRmxvdyk7XG5cbiAgaWYgKHRoaXMuZGVsZWdhdGUgJiYgcmV2ZXJzZUZsb3cgIT09IHRoaXMuZGVsZWdhdGUgJiZcbiAgICAgIHRoaXMudG9EZWxlZ2F0ZVtmbG93XSkge1xuICAgIC8vIFNoaXAgb2ZmIHRvIHRoZSBkZWxlZ2VlXG4gICAgdGhpcy5lbWl0KHRoaXMuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgcXVpZXQ6IHRydWUsXG4gICAgICBmbG93OiBmbG93LFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdkZWJ1ZycpIHtcbiAgICB0aGlzLmRlYnVnLnByaW50KG1lc3NhZ2UpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdsaW5rJykge1xuICAgIHRoaXMuY3JlYXRlTGluayhvcmlnaW4sIG1lc3NhZ2UubmFtZSwgbWVzc2FnZS50bywgbWVzc2FnZS5vdmVycmlkZURlc3QpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2Vudmlyb25tZW50Jykge1xuICAgIHRoaXMuY3JlYXRlTGluayhvcmlnaW4sIG1lc3NhZ2UubmFtZSwgbmV3IE1vZHVsZUludGVybmFsKHRoaXMpKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdkZWxlZ2F0ZScpIHtcbiAgICAvLyBJbml0YXRlIERlbGVnYXRpb24uXG4gICAgaWYgKHRoaXMuZGVsZWdhdGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSByZXZlcnNlRmxvdztcbiAgICB9XG4gICAgdGhpcy50b0RlbGVnYXRlW21lc3NhZ2UuZmxvd10gPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnZGVsZWdhdGUnKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdyZXNvdXJjZScpIHtcbiAgICB0aGlzLnJlc291cmNlLmFkZFJlc29sdmVyKG1lc3NhZ2UuYXJnc1swXSk7XG4gICAgdGhpcy5yZXNvdXJjZS5hZGRSZXRyaWV2ZXIobWVzc2FnZS5zZXJ2aWNlLCBtZXNzYWdlLmFyZ3NbMV0pO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2NvcmUnKSB7XG4gICAgaWYgKHRoaXMuY29yZSAmJiByZXZlcnNlRmxvdyA9PT0gdGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgKG5ldyB0aGlzLmNvcmUoKSkub25NZXNzYWdlKG9yaWdpbiwgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRDb3JlKGZ1bmN0aW9uICh0bywgY29yZSkge1xuICAgICAgdGhpcy5odWIub25NZXNzYWdlKHRvLCB7XG4gICAgICAgIHR5cGU6ICdjb3JlJyxcbiAgICAgICAgY29yZTogY29yZVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMsIHJldmVyc2VGbG93KSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnY2xvc2UnKSB7XG4gICAgdGhpcy5kZXN0cm95KG9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAndW5saW5rJykge1xuICAgIHRoaXMucmVtb3ZlTGluayhvcmlnaW4sIG1lc3NhZ2UudG8pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVua25vd24gY29udHJvbCByZXF1ZXN0OiBcIiArIG1lc3NhZ2UucmVxdWVzdCk7XG4gICAgdGhpcy5kZWJ1Zy5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvcnQgbWVzc2FnZXMgd2lsbCBiZSByb3V0ZWQgdG8gZ2l2ZW4gaXRzIGlkLlxuICogQG1ldGhvZCBnZXRQb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gcG9ydElkIFRoZSBJRCBvZiB0aGUgcG9ydC5cbiAqIEByZXR1cm5zIHtmZG9tLlBvcnR9IFRoZSBwb3J0IHdpdGggdGhhdCBJRC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0UG9ydCA9IGZ1bmN0aW9uIChwb3J0SWQpIHtcbiAgcmV0dXJuIHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHRoaXMuY29udHJvbEZsb3dzW3BvcnRJZF0pO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSBwb3J0IHdpdGggdGhlIGh1Yi5cbiAqIEBtZXRob2Qgc2V0dXBcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCB0byByZWdpc3Rlci5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAocG9ydCkge1xuICBpZiAoIXBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJSZWZ1c2luZyB0byBzZXR1cCB1bmlkZW50aWZpZWQgcG9ydCBcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiUmVmdXNpbmcgdG8gcmUtaW5pdGlhbGl6ZSBwb3J0IFwiICsgcG9ydC5pZCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwpIHtcbiAgICB0aGlzLm9uY2UoJ2NvbmZpZycsIHRoaXMuc2V0dXAuYmluZCh0aGlzLCBwb3J0KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5odWIucmVnaXN0ZXIocG9ydCk7XG4gIHZhciBmbG93ID0gdGhpcy5odWIuaW5zdGFsbCh0aGlzLCBwb3J0LmlkLCBcImNvbnRyb2xcIiksXG4gICAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgdGhpcy5pZCwgcG9ydC5pZCk7XG4gIHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdID0gZmxvdztcbiAgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0gPSBbcmV2ZXJzZV07XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbZmxvd10gPSByZXZlcnNlO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gZmxvdztcblxuICBpZiAocG9ydC5saW5lYWdlKSB7XG4gICAgdGhpcy5lbWl0KCdtb2R1bGVBZGQnLCB7aWQ6IHBvcnQuaWQsIGxpbmVhZ2U6IHBvcnQubGluZWFnZX0pO1xuICB9XG5cbiAgdGhpcy5odWIub25NZXNzYWdlKGZsb3csIHtcbiAgICB0eXBlOiAnc2V0dXAnLFxuICAgIGNoYW5uZWw6IHJldmVyc2UsXG4gICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGVhciBkb3duIGEgcG9ydCBvbiB0aGUgaHViLCBvciB0aGUgZnVsbCBsb2NhbCBodWIuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBhcHJhbSB7UG9ydD99IHBvcnQgVGhlIHBvcnQgdG8gdW5yZWdpc3Rlci5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gIGlmICghcG9ydCkge1xuICAgIC8vIFRlYXIgZG93biBldmVyeXRoaW5nIVxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jb250cm9sRmxvd3MsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoZmxvdywge1xuICAgICAgICB0eXBlOiAnY2xvc2UnXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuaHViLnRlYXJkb3duKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5hYmxlIHRvIHRlYXIgZG93biB1bmlkZW50aWZpZWQgcG9ydFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocG9ydC5saW5lYWdlKSB7XG4gICAgdGhpcy5lbWl0KCdtb2R1bGVSZW1vdmUnLCB7aWQ6IHBvcnQuaWQsIGxpbmVhZ2U6IHBvcnQubGluZWFnZX0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBwb3J0LlxuICBkZWxldGUgdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF07XG5cbiAgLy8gUmVtb3ZlIGFzc29jaWF0ZWQgbGlua3MuXG4gIHZhciBpO1xuICBmb3IgKGkgPSB0aGlzLmRhdGFGbG93c1twb3J0LmlkXS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIHRoaXMucmVtb3ZlTGluayhwb3J0LCB0aGlzLmRhdGFGbG93c1twb3J0LmlkXVtpXSk7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHBvcnQuXG4gIGRlbGV0ZSB0aGlzLmRhdGFGbG93c1twb3J0LmlkXTtcbiAgdGhpcy5odWIuZGVyZWdpc3Rlcihwb3J0KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbGluayBiZXR3ZWVuIHR3byBwb3J0cy4gIExpbmtzIGFyZSBjcmVhdGVkIGluIGJvdGggZGlyZWN0aW9ucyxcbiAqIGFuZCBhIG1lc3NhZ2Ugd2l0aCB0aG9zZSBjYXBhYmlsaXRpZXMgaXMgc2VudCB0byB0aGUgc291cmNlIHBvcnQuXG4gKiBAbWV0aG9kIGNyZWF0ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyBmb3IgbWVzc2FnZXMgZnJvbSBkZXN0aW5hdGlvbiB0byBwb3J0LlxuICogQHBhcmFtIHtQb3J0fSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZGVzdE5hbWVdIFRoZSBmbG93IG5hbWUgZm9yIG1lc3NhZ2VzIHRvIHRoZSBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RvRGVzdF0gVGVsbCB0aGUgZGVzdGluYXRpb24gYWJvdXQgdGhlIGxpbmsuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUxpbmsgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSwgZGVzdGluYXRpb24sIGRlc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rlc3QpIHtcbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwpIHtcbiAgICB0aGlzLm9uY2UoJ2NvbmZpZycsXG4gICAgICB0aGlzLmNyZWF0ZUxpbmsuYmluZCh0aGlzLCBwb3J0LCBuYW1lLCBkZXN0aW5hdGlvbiwgZGVzdE5hbWUpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbndpbGxpbmcgdG8gbGluayBmcm9tIG5vbi1yZWdpc3RlcmVkIHNvdXJjZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW2Rlc3RpbmF0aW9uLmlkXSkge1xuICAgIGlmICh0aGlzLnNldHVwKGRlc3RpbmF0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGZpbmQgb3Igc2V0dXAgZGVzdGluYXRpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciBxdWlldCA9IGRlc3RpbmF0aW9uLnF1aWV0IHx8IGZhbHNlLFxuICAgIG91dGdvaW5nTmFtZSA9IGRlc3ROYW1lIHx8ICdkZWZhdWx0JyxcbiAgICBvdXRnb2luZyA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgZGVzdGluYXRpb24uaWQsIG91dGdvaW5nTmFtZSwgcXVpZXQpLFxuICAgIHJldmVyc2U7XG5cbiAgLy8gUmVjb3ZlciB0aGUgcG9ydCBzbyB0aGF0IGxpc3RlbmVycyBhcmUgaW5zdGFsbGVkLlxuICBkZXN0aW5hdGlvbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKG91dGdvaW5nKTtcbiAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwoZGVzdGluYXRpb24sIHBvcnQuaWQsIG5hbWUsIHF1aWV0KTtcblxuICB0aGlzLnJldmVyc2VGbG93TWFwW291dGdvaW5nXSA9IHJldmVyc2U7XG4gIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdLnB1c2gob3V0Z29pbmcpO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gb3V0Z29pbmc7XG4gIHRoaXMuZGF0YUZsb3dzW2Rlc3RpbmF0aW9uLmlkXS5wdXNoKHJldmVyc2UpO1xuXG4gIGlmICh0b0Rlc3QpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbZGVzdGluYXRpb24uaWRdLCB7XG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBuYW1lOiBvdXRnb2luZ05hbWUsXG4gICAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgICAgcmV2ZXJzZTogb3V0Z29pbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0sIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBjaGFubmVsOiBvdXRnb2luZyxcbiAgICAgIHJldmVyc2U6IHJldmVyc2VcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBsaW5rIGJldHdlZW4gdG8gcG9ydHMuIFRoZSByZXZlcnNlIGxpbmsgd2lsbCBhbHNvIGJlIHJlbW92ZWQuXG4gKiBAbWV0aG9kIHJlbW92ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyB0byBiZSByZW1vdmVkLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUpIHtcbiAgdmFyIHJldmVyc2UgPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihuYW1lKSxcbiAgICByZmxvdyA9IHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV0sXG4gICAgaTtcblxuICBpZiAoIXJldmVyc2UgfHwgIXJmbG93KSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiQ291bGQgbm90IGZpbmQgbWV0YWRhdGEgdG8gcmVtb3ZlIGZsb3c6IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJmbG93KS5pZCAhPT0gcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlNvdXJjZSBwb3J0IGRvZXMgbm90IG93biBmbG93IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTm90aWZ5IHBvcnRzIHRoYXQgYSBjaGFubmVsIGlzIGNsb3NpbmcuXG4gIGkgPSB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXTtcbiAgaWYgKGkpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoaSwge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6IG5hbWVcbiAgICB9KTtcbiAgfVxuICBpID0gdGhpcy5jb250cm9sRmxvd3NbcmV2ZXJzZS5pZF07XG4gIGlmIChpKSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKGksIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiByZmxvd1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVW5pbnN0YWxsIHRoZSBjaGFubmVsLlxuICB0aGlzLmh1Yi51bmluc3RhbGwocG9ydCwgbmFtZSk7XG4gIHRoaXMuaHViLnVuaW5zdGFsbChyZXZlcnNlLCByZmxvdyk7XG5cbiAgZGVsZXRlIHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV07XG4gIGRlbGV0ZSB0aGlzLnJldmVyc2VGbG93TWFwW3JmbG93XTtcbiAgdGhpcy5mb3JnZXRGbG93KHJldmVyc2UuaWQsIHJmbG93KTtcbiAgdGhpcy5mb3JnZXRGbG93KHBvcnQuaWQsIG5hbWUpO1xufTtcblxuLyoqXG4gKiBGb3JnZXQgdGhlIGZsb3cgZnJvbSBpZCB3aXRoIGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZm9yZ2V0Rmxvd1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgcG9ydCBJRCBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgbmFtZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZm9yZ2V0RmxvdyA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICB2YXIgaTtcbiAgaWYgKHRoaXMuZGF0YUZsb3dzW2lkXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRhdGFGbG93c1tpZF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFGbG93c1tpZF1baV0gPT09IG5hbWUpIHtcbiAgICAgICAgdGhpcy5kYXRhRmxvd3NbaWRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29yZSBmcmVlZG9tLmpzIEFQSSBhY3RpdmUgb24gdGhlIGN1cnJlbnQgaHViLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgdG8gZmlyZSB3aXRoIHRoZSBjb3JlIG9iamVjdC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodGhpcy5jb3JlKSB7XG4gICAgY2IodGhpcy5jb3JlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFwaS5nZXRDb3JlKCdjb3JlJywgdGhpcykudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgICAgdGhpcy5jb3JlID0gY29yZS5pbnN0O1xuICAgICAgY2IodGhpcy5jb3JlKTtcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBUaGUgZXh0ZXJuYWwgUG9ydCBmYWNlIG9mIGEgbW9kdWxlIG9uIGEgaHViLlxuICogQGNsYXNzIE1vZHVsZVxuICogQGV4dGVuZHMgUG9ydFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0VVJMIFRoZSBtYW5pZmVzdCB0aGlzIG1vZHVsZSBsb2Fkcy5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGNyZWF0b3IgVGhlIGxpbmVhZ2Ugb2YgY3JlYXRpb24gZm9yIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtQb2xpY3l9IFBvbGljeSBUaGUgcG9saWN5IGxvYWRlciBmb3IgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiAobWFuaWZlc3RVUkwsIG1hbmlmZXN0LCBjcmVhdG9yLCBwb2xpY3kpIHtcbiAgdGhpcy5hcGkgPSBwb2xpY3kuYXBpO1xuICB0aGlzLnBvbGljeSA9IHBvbGljeTtcbiAgdGhpcy5yZXNvdXJjZSA9IHBvbGljeS5yZXNvdXJjZTtcbiAgdGhpcy5kZWJ1ZyA9IHBvbGljeS5kZWJ1ZztcblxuICB0aGlzLmNvbmZpZyA9IHt9O1xuXG4gIHRoaXMuaWQgPSBtYW5pZmVzdFVSTCArIE1hdGgucmFuZG9tKCk7XG4gIHRoaXMubWFuaWZlc3RJZCA9IG1hbmlmZXN0VVJMO1xuICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gIHRoaXMubGluZWFnZSA9IFt0aGlzLm1hbmlmZXN0SWRdLmNvbmNhdChjcmVhdG9yKTtcblxuICB0aGlzLnF1aWV0ID0gdGhpcy5tYW5pZmVzdC5xdWlldCB8fCBmYWxzZTtcblxuICB0aGlzLmV4dGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmludGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmRlcGVuZGFudENoYW5uZWxzID0gW107XG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmb3IgdGhlIE1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgb3JpZ2luIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgcmVjZWl2ZWQuXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnQ29yZSBQcm92aWRlcicsXG4gICAgICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJyAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdnb3QgY3JlYXRlIGxpbmsgZm9yICcgKyBtZXNzYWdlLm5hbWUpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQgY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMgJiZcbiAgICAgICAgICB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdKSB7XG4gICAgICAgIG1zZy5hcGkgPSB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdLmFwaTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvcmUpIHtcbiAgICAgIHRoaXMuY29yZSA9IG5ldyBtZXNzYWdlLmNvcmUoKTtcbiAgICAgIHRoaXMuZW1pdCgnY29yZScsIG1lc3NhZ2UuY29yZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIC8vIENsb3NpbmcgY2hhbm5lbC5cbiAgICAgIGlmICghbWVzc2FnZS5jaGFubmVsIHx8IG1lc3NhZ2UuY2hhbm5lbCA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXJlZ2lzdGVyRmxvdyhtZXNzYWdlLmNoYW5uZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZShmbG93LCBtZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSA9PT0gZmFsc2UgfHxcbiAgICAgICAgIXRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddKSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdoYW5kbGluZyBjaGFubmVsIGFubm91bmNlbWVudCBmb3IgJyArIGZsb3cpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIE5ldyBpbmNvbWluZyBjb25uZWN0aW9uIGF0dGVtcHRzIHNob3VsZCBnZXQgcm91dGVkIHRvIG1vZEludGVybmFsLlxuICAgICAgICBpZiAodGhpcy5tYW5pZmVzdC5wcm92aWRlcyAmJiB0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICB0eXBlOiAnQ29ubmVjdGlvbicsXG4gICAgICAgICAgICBjaGFubmVsOiBmbG93LFxuICAgICAgICAgICAgYXBpOiBtZXNzYWdlLmFwaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICAgICAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgZnVuY3Rpb24gKGZsb3csIGFwaSkge1xuICAgICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDb25uZWN0aW9uJyxcbiAgICAgICAgICAgICAgY2hhbm5lbDogZmxvdyxcbiAgICAgICAgICAgICAgYXBpOiBhcGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0uYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlLmFwaSkpO1xuICAgICAgICAvLyBGaXJzdCBjb25uZWN0aW9uIHJldGFpbnMgbGVnYWN5IG1hcHBpbmcgYXMgJ2RlZmF1bHQnLlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmV4dGVybmFsUG9ydE1hcFsnZGVmYXVsdCddICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwWydkZWZhdWx0J10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IHRoaXMuaW50ZXJuYWxQb3J0TWFwWydkZWZhdWx0J107XG4gICAgICAgICAgfS5iaW5kKHRoaXMsIGZsb3cpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybignd2FpdGluZyBvbiBpbnRlcm5hbCBjaGFubmVsIGZvciBtc2cnKTtcbiAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10pIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignVW5leHBlY3RlZCBtZXNzYWdlIGZyb20gJyArIGZsb3cpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgYWZ0ZXIgYSBmbG93IHdoaWNoIGlzIG5vIGxvbmdlciB1c2VkIC8gbmVlZGVkLlxuICogQG1ldGhvZCBkZXJlZ2lzdGVyRkxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGZsb3cgdG8gcmVtb3ZlIG1hcHBpbmdzIGZvci5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgSWYgdGhlIGZsb3cgbmFtZSBpcyB0aGUgaW50ZXJuYWwgaWRlbnRpZmllci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoZSBmbG93IHdhcyBzdWNjZXNzZnVsbHkgZGVyZWdpc3RlcmVkLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5kZXJlZ2lzdGVyRmxvdyA9IGZ1bmN0aW9uIChmbG93LCBpbnRlcm5hbCkge1xuICB2YXIga2V5LFxuICAgIG1hcCA9IGludGVybmFsID8gdGhpcy5pbnRlcm5hbFBvcnRNYXAgOiB0aGlzLmV4dGVybmFsUG9ydE1hcDtcbiAgLy8gVE9ETzogdGhpcyBpcyBpbmVmZmljaWVudCwgYnV0IHNlZW1zIGxlc3MgY29uZnVzaW5nIHRoYW4gYSAzcmRcbiAgLy8gcmV2ZXJzZSBsb29rdXAgbWFwLlxuICBmb3IgKGtleSBpbiBtYXApIHtcbiAgICBpZiAobWFwW2tleV0gPT09IGZsb3cpIHtcbiAgICAgIGlmIChpbnRlcm5hbCkge1xuICAgICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICAgIHR5cGU6ICdDaGFubmVsIFRlYXJkb3duJyxcbiAgICAgICAgICByZXF1ZXN0OiAndW5saW5rJyxcbiAgICAgICAgICB0bzogdGhpcy5leHRlcm5hbFBvcnRNYXBba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICBjaGFubmVsOiB0aGlzLmludGVybmFsUG9ydE1hcFtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2tleV07XG4gICAgICBkZWxldGUgdGhpcy5pbnRlcm5hbFBvcnRNYXBba2V5XTtcblxuICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgc3RpbGwgbm9uLWRlcGVuZGFudCBjaGFubmVscywga2VlcCBydW5uaW5nXG4gICAgICBmb3IgKGtleSBpbiB0aGlzLmV4dGVybmFsUG9ydE1hcCkge1xuICAgICAgICBpZiAodGhpcy5leHRlcm5hbFBvcnRNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0aGlzLmRlcGVuZGFudENoYW5uZWxzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIHNodXQgZG93biB0aGUgbW9kdWxlLlxuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIHN0YXJ0IHRoZSBtb2R1bGUgb25jZSB0aGUgcmVtb3RlIGZyZWVkb20gY29udGV4dFxuICogZXhpc3RzLlxuICogQG1ldGhvZCBzdGFydFxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFBvcnQ7XG4gIGlmICh0aGlzLnN0YXJ0ZWQgfHwgdGhpcy5wb3J0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5sb2FkTGlua3MoKTtcbiAgICBQb3J0ID0gdGhpcy5jb25maWcucG9ydFR5cGU7XG4gICAgdGhpcy5wb3J0ID0gbmV3IFBvcnQodGhpcy5tYW5pZmVzdC5uYW1lLCB0aGlzLnJlc291cmNlKTtcbiAgICAvLyBMaXN0ZW4gdG8gYWxsIHBvcnQgbWVzc2FnZXMuXG4gICAgdGhpcy5wb3J0Lm9uKHRoaXMuZW1pdE1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wb3J0LmFkZEVycm9ySGFuZGxlcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ01vZHVsZSBGYWlsZWQnLCBlcnIpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICAvLyBUZWxsIHRoZSBsb2NhbCBwb3J0IHRvIGFzayB1cyBmb3IgaGVscC5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgY2hhbm5lbDogJ2NvbnRyb2wnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICAgIH0pO1xuXG4gICAgLy8gVGVsbCB0aGUgcmVtb3RlIGxvY2F0aW9uIHRvIGRlbGVnYXRlIGRlYnVnZ2luZy5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ1JlZGlyZWN0JyxcbiAgICAgIHJlcXVlc3Q6ICdkZWxlZ2F0ZScsXG4gICAgICBmbG93OiAnZGVidWcnXG4gICAgfSk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdSZWRpcmVjdCcsXG4gICAgICByZXF1ZXN0OiAnZGVsZWdhdGUnLFxuICAgICAgZmxvdzogJ2NvcmUnXG4gICAgfSk7XG5cbiAgICAvLyBUZWxsIHRoZSBjb250YWluZXIgdG8gaW5zdGFudGlhdGUgdGhlIGNvdW50ZXJwYXJ0IHRvIHRoaXMgZXh0ZXJuYWwgdmlldy5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ0Vudmlyb25tZW50IENvbmZpZ3VyYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2Vudmlyb25tZW50JyxcbiAgICAgIG5hbWU6ICdNb2RJbnRlcm5hbCdcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdG9wIHRoZSBtb2R1bGUgd2hlbiBpdCBpcyBubyBsb25nZXIgbmVlZGVkLCBhbmQgdGVhci1kb3duIHN0YXRlLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgaWYgKHRoaXMucG9ydCkge1xuICAgIHRoaXMucG9ydC5vZmYoKTtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6ICdjb250cm9sJ1xuICAgIH0pO1xuICAgIHRoaXMucG9ydC5zdG9wKCk7XG4gICAgZGVsZXRlIHRoaXMucG9ydDtcbiAgfVxuICBkZWxldGUgdGhpcy5wb2xpY3k7XG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBUZXh0dWFsIERlc2NyaXB0aW9uIG9mIHRoZSBQb3J0XG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltNb2R1bGUgXCIgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIl1cIjtcbn07XG5cbi8qKlxuICogSW50ZXJjZXB0IG1lc3NhZ2VzIGFzIHRoZXkgYXJyaXZlIGZyb20gdGhlIG1vZHVsZSxcbiAqIG1hcHBpbmcgdGhlbSBiZXR3ZWVuIGludGVybmFsIGFuZCBleHRlcm5hbCBmbG93IG5hbWVzLlxuICogQG1ldGhvZCBlbWl0TWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGRlc3RpbmF0aW9uIHRoZSBtb2R1bGUgd2FudHMgdG8gc2VuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmVtaXRNZXNzYWdlID0gZnVuY3Rpb24gKG5hbWUsIG1lc3NhZ2UpIHtcbiAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW25hbWVdID09PSBmYWxzZSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICB0aGlzLmludGVybmFsUG9ydE1hcFtuYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmVtaXQoJ2ludGVybmFsQ2hhbm5lbFJlYWR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFRlcm1pbmF0ZSBkZWJ1ZyByZWRpcmVjdGlvbiByZXF1ZXN0ZWQgaW4gc3RhcnQoKS5cbiAgaWYgKG5hbWUgPT09ICdjb250cm9sJykge1xuICAgIGlmIChtZXNzYWdlLmZsb3cgPT09ICdkZWJ1ZycgJiYgbWVzc2FnZS5tZXNzYWdlKSB7XG4gICAgICB0aGlzLmRlYnVnLmZvcm1hdChtZXNzYWdlLm1lc3NhZ2Uuc2V2ZXJpdHksXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnNvdXJjZSB8fCB0aGlzLnRvU3RyaW5nKCksXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLm1zZyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmZsb3cgPT09ICdjb3JlJyAmJiBtZXNzYWdlLm1lc3NhZ2UpIHtcbiAgICAgIGlmICghdGhpcy5jb3JlKSB7XG4gICAgICAgIHRoaXMub25jZSgnY29yZScsIHRoaXMuZW1pdE1lc3NhZ2UuYmluZCh0aGlzLCBuYW1lLCBtZXNzYWdlKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ3JlZ2lzdGVyJyB8fFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAncmVxdWlyZScpIHtcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnJlcGx5ID0gdGhpcy5wb3J0Lm9uTWVzc2FnZS5iaW5kKHRoaXMucG9ydCwgJ2NvbnRyb2wnKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5tZXNzYWdlLmlkXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLm9uTWVzc2FnZSh0aGlzLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5uYW1lID09PSAnTW9kSW50ZXJuYWwnICYmICF0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICB0aGlzLm1vZEludGVybmFsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgIHR5cGU6ICdJbml0aWFsaXphdGlvbicsXG4gICAgICAgIGlkOiB0aGlzLm1hbmlmZXN0SWQsXG4gICAgICAgIGFwcElkOiB0aGlzLmlkLFxuICAgICAgICBtYW5pZmVzdDogdGhpcy5tYW5pZmVzdCxcbiAgICAgICAgbGluZWFnZTogdGhpcy5saW5lYWdlLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdtb2RJbnRlcm5hbCcpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY3JlYXRlTGluaycpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKG1lc3NhZ2UuY2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdpbnRlcm5hbENoYW5uZWxSZWFkeScpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJGbG93KG1lc3NhZ2UuY2hhbm5lbCwgdHJ1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVhZHknICYmICF0aGlzLnN0YXJ0ZWQpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnTW9kSW50ZXJuYWwnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3Jlc29sdmUnKSB7XG4gICAgdGhpcy5yZXNvdXJjZS5nZXQodGhpcy5tYW5pZmVzdElkLCBtZXNzYWdlLmRhdGEpLnRoZW4oZnVuY3Rpb24gKGlkLCBkYXRhKSB7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgdHlwZTogJ3Jlc29sdmUucmVzcG9uc2UnLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzLCBtZXNzYWdlLmlkKSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdFcnJvciBSZXNvbHZpbmcgVVJMIGZvciBNb2R1bGUuJyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbFBvcnRNYXBbbmFtZV0sIG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZHluYW1pYyBkZXBlbmRlbmN5IG9uIGFub3RoZXIgbW9kdWxlLlxuICogQG1ldGhvZCByZXF1aXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZGVwZW5kZW5jeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgVVJMIG9mIHRoZSBkZXBlbmRlbmN5IHRvIGFkZC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24gKG5hbWUsIG1hbmlmZXN0KSB7XG4gIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMucHVzaChuYW1lKTtcbiAgdGhpcy5hZGREZXBlbmRlbmN5KG1hbmlmZXN0LCBuYW1lKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICB0eXBlOiAncmVxdWlyZS5mYWlsdXJlJyxcbiAgICAgIGlkOiBuYW1lLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlXG4gICAgfSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhlIG1vZHVsZSdzIGRlcGVuZGVuY3kgdHJlZVxuICogQG1ldGhvZCBhZGREZXBlbmRlbmN5XG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBtYW5pZmVzdCBVUkwgb2YgdGhlIGRlcGVuZGVuY3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBleHBvc2VkIG5hbWUgb2YgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtNb2R1bGV9IFRoZSBjcmVhdGVkIGRlcGVuZGVudCBtb2R1bGUuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmFkZERlcGVuZGVuY3kgPSBmdW5jdGlvbiAodXJsLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIHVybClcbiAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb2xpY3kuZ2V0KHRoaXMubGluZWFnZSwgdXJsKTtcbiAgICB9LmJpbmQodGhpcykpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRlcCkge1xuICAgICAgdGhpcy51cGRhdGVFbnYobmFtZSwgZGVwLm1hbmlmZXN0KTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdMaW5rIHRvICcgKyBuYW1lLFxuICAgICAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG92ZXJyaWRlRGVzdDogbmFtZSArICcuJyArIHRoaXMuaWQsXG4gICAgICAgIHRvOiBkZXBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlcDtcbiAgICB9LmJpbmQodGhpcykpXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcud2Fybih0aGlzLnRvU3RyaW5nKCkgKyAnIGZhaWxlZCB0byBsb2FkIGRlcDogJywgbmFtZSwgZXJyKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IHRoZSBleHRlcm5hbCByb3V0ZXMgdXNlZCBieSB0aGlzIG1vZHVsZS5cbiAqIEBtZXRob2QgbG9hZExpbmtzXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmxvYWRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGNoYW5uZWxzID0gWydkZWZhdWx0J10sIG5hbWUsIGRlcDtcblxuICBpZiAodGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBuYW1lID0gdGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9uc1tpXTtcbiAgICAgIGlmIChjaGFubmVscy5pbmRleE9mKG5hbWUpIDwgMCAmJiBuYW1lLmluZGV4T2YoJ2NvcmUuJykgPT09IDApIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICBkZXAgPSBuZXcgUHJvdmlkZXIodGhpcy5hcGkuZ2V0KG5hbWUpLmRlZmluaXRpb24sIHRoaXMuZGVidWcpO1xuICAgICAgICB0aGlzLmFwaS5wcm92aWRlQ29yZShuYW1lLCBkZXAsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgdHlwZTogJ0NvcmUgTGluayB0byAnICsgbmFtZSxcbiAgICAgICAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0bzogZGVwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVzYywgbmFtZSkge1xuICAgICAgaWYgKGNoYW5uZWxzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgIGNoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGREZXBlbmRlbmN5KGRlc2MudXJsLCBuYW1lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIC8vIE5vdGUgdGhhdCBtZXNzYWdlcyBjYW4gYmUgc3luY2hyb25vdXMsIHNvIHNvbWUgcG9ydHMgbWF5IGFscmVhZHkgYmUgYm91bmQuXG4gIGZvciAoaSA9IDA7IGkgPCBjaGFubmVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSA9IHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSB8fCBmYWxzZTtcbiAgICB0aGlzLmludGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIG1vZHVsZSBlbnZpcm9ubWVudCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGEgZGVwZW5kZW50IG1hbmlmZXN0LlxuICogQG1ldGhvZCB1cGRhdGVFbnZcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXAgVGhlIGRlcGVuZGVuY3lcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3lcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS51cGRhdGVFbnYgPSBmdW5jdGlvbiAoZGVwLCBtYW5pZmVzdCkge1xuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgIHRoaXMub25jZSgnbW9kSW50ZXJuYWwnLCB0aGlzLnVwZGF0ZUVudi5iaW5kKHRoaXMsIGRlcCwgbWFuaWZlc3QpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWV0YWRhdGE7XG5cbiAgLy8gRGVjaWRlIGlmL3doYXQgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgZXhwb3J0ZWQuXG4gIC8vIEtlZXAgaW4gc3luYyB3aXRoIE1vZHVsZUludGVybmFsLnVwZGF0ZUVudlxuICBtZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBtYW5pZmVzdC5uYW1lLFxuICAgIGljb246IG1hbmlmZXN0Lmljb24sXG4gICAgZGVzY3JpcHRpb246IG1hbmlmZXN0LmRlc2NyaXB0aW9uLFxuICAgIGFwaTogbWFuaWZlc3QuYXBpXG4gIH07XG5cbiAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgdHlwZTogJ21hbmlmZXN0JyxcbiAgICBuYW1lOiBkZXAsXG4gICAgbWFuaWZlc3Q6IG1ldGFkYXRhXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIEFwaUludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvYXBpSW50ZXJmYWNlJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG52YXIgUHJveHlCaW5kZXIgPSByZXF1aXJlKCcuL3Byb3h5YmluZGVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCBsb2dpYyBmb3IgbW9kdWxlIHNldHVwLCB3aGljaCBtYWtlcyBzdXJlIHRoZSBwdWJsaWNcbiAqIGZhY2luZyBleHBvcnRzIGhhdmUgYXBwcm9wcmlhdGUgcHJvcGVydGllcywgYW5kIGxvYWQgdXNlciBzY3JpcHRzLlxuICogQGNsYXNzIE1vZHVsZUludGVybmFsXG4gKiBAZXh0ZW5kcyBQb3J0XG4gKiBAcGFyYW0ge1BvcnR9IG1hbmFnZXIgVGhlIG1hbmFnZXIgaW4gdGhpcyBtb2R1bGUgdG8gdXNlIGZvciByb3V0aW5nIHNldHVwLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGVJbnRlcm5hbCA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gIHRoaXMuZGVidWcgPSBtYW5hZ2VyLmRlYnVnO1xuICB0aGlzLmJpbmRlciA9IG5ldyBQcm94eUJpbmRlcih0aGlzLm1hbmFnZXIpO1xuICB0aGlzLmFwaSA9IHRoaXMubWFuYWdlci5hcGk7XG4gIHRoaXMubWFuaWZlc3RzID0ge307XG4gIHRoaXMucHJvdmlkZXJzID0ge307XG5cbiAgdGhpcy5pZCA9ICdNb2R1bGVJbnRlcm5hbCc7XG4gIHRoaXMucGVuZGluZ1BvcnRzID0gMDtcbiAgdGhpcy5yZXF1ZXN0cyA9IHt9O1xuICB0aGlzLnVuYm91bmRQb3J0cyA9IHt9O1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBNZXNzYWdlIGhhbmRsZXIgZm9yIHRoaXMgcG9ydC5cbiAqIFRoaXMgcG9ydCBvbmx5IGhhbmRsZXMgdHdvIG1lc3NhZ2VzOlxuICogVGhlIGZpcnN0IGlzIGl0cyBzZXR1cCBmcm9tIHRoZSBtYW5hZ2VyLCB3aGljaCBpdCB1c2VzIGZvciBjb25maWd1cmF0aW9uLlxuICogVGhlIHNlY29uZCBpcyBmcm9tIHRoZSBtb2R1bGUgY29udHJvbGxlciAoZmRvbS5wb3J0Lk1vZHVsZSksIHdoaWNoIHByb3ZpZGVzXG4gKiB0aGUgbWFuaWZlc3QgaW5mbyBmb3IgdGhlIG1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZGV0aW5hdGlvbiBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmICghdGhpcy5jb250cm9sQ2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiAhdGhpcy5hcHBJZCkge1xuICAgIC8vIFJlY292ZXIgdGhlIElEIG9mIHRoaXMgbW9kdWxlOlxuICAgIHRoaXMucG9ydCA9IHRoaXMubWFuYWdlci5odWIuZ2V0RGVzdGluYXRpb24obWVzc2FnZS5jaGFubmVsKTtcbiAgICB0aGlzLmV4dGVybmFsQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmFwcElkID0gbWVzc2FnZS5hcHBJZDtcbiAgICB0aGlzLmxpbmVhZ2UgPSBtZXNzYWdlLmxpbmVhZ2U7XG5cbiAgICB2YXIgb2JqZWN0cyA9IHRoaXMubWFwUHJveGllcyhtZXNzYWdlLm1hbmlmZXN0KTtcblxuICAgIHRoaXMuZ2VuZXJhdGVFbnYobWVzc2FnZS5tYW5pZmVzdCwgb2JqZWN0cykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkTGlua3Mob2JqZWN0cyk7XG4gICAgfS5iaW5kKHRoaXMpKS50aGVuKHRoaXMubG9hZFNjcmlwdHMuYmluZCh0aGlzLCBtZXNzYWdlLmlkLFxuICAgICAgICBtZXNzYWdlLm1hbmlmZXN0LmFwcC5zY3JpcHQpKS50aGVuKG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ0NvdWxkIG5vdCBzZXQgdXAgbW9kdWxlICcgKyB0aGlzLmFwcElkICsgJzogJywgZXJyKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZXNvbHZlLnJlc3BvbnNlJyAmJlxuICAgICAgICAgICAgIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF0pIHtcbiAgICB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdKG1lc3NhZ2UuZGF0YSk7XG4gICAgZGVsZXRlIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF07XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3JlcXVpcmUuZmFpbHVyZScgJiZcbiAgICAgICAgICAgICB0aGlzLnVuYm91bmRQb3J0c1ttZXNzYWdlLmlkXSkge1xuICAgIHRoaXMudW5ib3VuZFBvcnRzW21lc3NhZ2UuaWRdLmNhbGxiYWNrKHVuZGVmaW5lZCwgbWVzc2FnZS5lcnJvcik7XG4gICAgZGVsZXRlIHRoaXMudW5ib3VuZFBvcnRzW21lc3NhZ2UuaWRdO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdtYW5pZmVzdCcpIHtcbiAgICB0aGlzLmVtaXQoJ21hbmlmZXN0JywgbWVzc2FnZSk7XG4gICAgdGhpcy51cGRhdGVNYW5pZmVzdChtZXNzYWdlLm5hbWUsIG1lc3NhZ2UubWFuaWZlc3QpO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdDb25uZWN0aW9uJykge1xuICAgIC8vIE11bHRpcGxlIGNvbm5lY3Rpb25zIGNhbiBiZSBtYWRlIHRvIHRoZSBkZWZhdWx0IHByb3ZpZGVyLlxuICAgIGlmIChtZXNzYWdlLmFwaSAmJiB0aGlzLnByb3ZpZGVyc1ttZXNzYWdlLmFwaV0pIHtcbiAgICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHRoaXMucHJvdmlkZXJzW21lc3NhZ2UuYXBpXSwgbWVzc2FnZS5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnQsIG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRQb3J0ICYmXG4gICAgICAgICAgICAgICAobWVzc2FnZS5hcGkgPT09IHRoaXMuZGVmYXVsdFBvcnQuYXBpIHx8ICFtZXNzYWdlLmFwaSkpIHtcbiAgICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHRoaXMuZGVmYXVsdFBvcnQsIG1lc3NhZ2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydCwgbWVzc2FnZS5jaGFubmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW0Vudmlyb25tZW50IEhlbHBlcl1cIjtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gZXh0ZXJuYWx5IHZpc2lzYmxlIG5hbWVzcGFjZVxuICogQG1ldGhvZCBnZW5lcmF0ZUVudlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlLlxuICogQHBhcmFtIHtPYmplY3RbXX0gaXRlbXMgT3RoZXIgaW50ZXJmYWNlcyB0byBsb2FkLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSB3aGVuIHRoZSBleHRlcm5hbCBuYW1lc3BhY2UgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5nZW5lcmF0ZUVudiA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgaXRlbXMpIHtcbiAgcmV0dXJuIHRoaXMuYmluZGVyLmJpbmREZWZhdWx0KHRoaXMucG9ydCwgdGhpcy5hcGksIG1hbmlmZXN0LCB0cnVlKS50aGVuKFxuICAgIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBiaW5kaW5nLnBvcnQuYXBpID0gYmluZGluZy5leHRlcm5hbC5hcGk7XG4gICAgICB0aGlzLmRlZmF1bHRQb3J0ID0gYmluZGluZy5wb3J0O1xuICAgICAgaWYgKGJpbmRpbmcuZXh0ZXJuYWwuYXBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChpdGVtc1tpXS5uYW1lID09PSBiaW5kaW5nLmV4dGVybmFsLmFwaSAmJiBpdGVtc1tpXS5kZWYucHJvdmlkZXMpIHtcbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb20gPSBiaW5kaW5nLmV4dGVybmFsO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhbiB1bnVzZWQgY2hhbm5lbCBJRCBmb3IgY2FsbGJhY2ssIGFuZCBvbmNlIGluZm9ybWF0aW9uXG4gKiBhYm91dCB0aGUgY2hhbm5lbCBpcyBrbm93biwgY2FsbCB0aGUgaGFuZGxlciB3aXRoIHRoYXQgaW5mb3JtYXRpb24uXG4gKiBAbWV0aG9kIHJlZ2lzdGVySWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIHByZWZlcnJlZCBBUEkgdG8gdXNlIGZvciB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBjYWxsIG9uY2UgY2hhbm5lbCByZWFkeVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGFsbG9jYXRlZCBjaGFubmVsIG5hbWUuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5yZWdpc3RlcklkID0gZnVuY3Rpb24gKGFwaSwgY2FsbGJhY2spIHtcbiAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICB0aGlzLnVuYm91bmRQb3J0c1tpZF0gPSB7XG4gICAgbmFtZTogYXBpLFxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICB9O1xuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIEF0dGFjaCBhIHByb3h5IHRvIHRoZSBleHRlcm5hbGx5IHZpc2libGUgbmFtZXNwYWNlLlxuICogQG1ldGhvZCBhdHRhY2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvdmlkZXMgSWYgdGhpcyBwcm94eSBpcyBhIHByb3ZpZGVyLlxuICogQHBhcmFtIHtQcm94eUludGVyZmFjZX0gcHJveHkgVGhlIHByb3h5IHRvIGF0dGFjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSB0aGUgcHJveHkgaW1wbGVtZW50cy5cbiAqIEBwcml2YXRlLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKG5hbWUsIHByb3ZpZGVzLCBwcm94eSkge1xuICB2YXIgZXhwID0gdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb207XG5cbiAgaWYgKHByb3ZpZGVzKSB7XG4gICAgdGhpcy5wcm92aWRlcnNbbmFtZV0gPSBwcm94eS5wb3J0O1xuICB9XG5cbiAgaWYgKCFleHBbbmFtZV0pIHtcbiAgICBleHBbbmFtZV0gPSBwcm94eS5leHRlcm5hbDtcbiAgICBpZiAodGhpcy5tYW5pZmVzdHNbbmFtZV0pIHtcbiAgICAgIGV4cFtuYW1lXS5tYW5pZmVzdCA9IHRoaXMubWFuaWZlc3RzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMucGVuZGluZ1BvcnRzIC09IDE7XG4gIGlmICh0aGlzLnBlbmRpbmdQb3J0cyA9PT0gMCkge1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfVxuXG4gIHJldHVybiBleHBbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgYSBzZXQgb2YgcHJveHkgaW50ZXJmYWNlcywgYW5kIGJpbmQgdGhlbSB0byB0aGUgZXh0ZXJuYWxcbiAqIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgbG9hZExpbmtzXG4gKiBAcGFyYW0ge09iamVjdFtdfSBpdGVtcyBEZXNjcmlwdG9ycyBvZiB0aGUgcHJveHkgcG9ydHMgdG8gbG9hZC5cbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igd2hlbiBhbGwgbGlua3MgYXJlIGxvYWRlZC5cbiAqL1xuLy9UT0RPKHdpbGxzY290dCk6IHByb21pc2Ugc2hvdWxkIGJlIGNoYWluZWQsIHJhdGhlciB0aGFuIGdvaW5nIHRocm91Z2ggZXZlbnRzLlxuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmxvYWRMaW5rcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICB2YXIgaSwgcHJveHksIHByb3ZpZGVyLCBjb3JlLFxuICAgIG1hbmlmZXN0UHJlZGljYXRlID0gZnVuY3Rpb24gKG5hbWUsIGZsb3csIG1zZykge1xuICAgICAgcmV0dXJuIGZsb3cgPT09ICdtYW5pZmVzdCcgJiYgbXNnLm5hbWUgPT09IG5hbWU7XG4gICAgfSxcbiAgICBvbk1hbmlmZXN0ID0gZnVuY3Rpb24gKGl0ZW0sIG1zZykge1xuICAgICAgdmFyIGRlZmluaXRpb24gPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0uYXBpXG4gICAgICB9O1xuICAgICAgaWYgKCFtc2cubWFuaWZlc3QuYXBpIHx8ICFtc2cubWFuaWZlc3QuYXBpW2l0ZW0uYXBpXSkge1xuICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uID0gbXNnLm1hbmlmZXN0LmFwaVtpdGVtLmFwaV07XG4gICAgICB9XG4gICAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIGl0ZW0ubmFtZSwgZGVmaW5pdGlvbikudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBpdGVtLm5hbWUsIGZhbHNlKVxuICAgICAgKTtcbiAgICB9LmJpbmQodGhpcyksXG4gICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCByZXNvbHZlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpdGVtc1tpXS5hcGkgJiYgIWl0ZW1zW2ldLmRlZikge1xuICAgICAgaWYgKHRoaXMubWFuaWZlc3RzW2l0ZW1zW2ldLm5hbWVdKSB7XG4gICAgICAgIG9uTWFuaWZlc3QoaXRlbXNbaV0sIHtcbiAgICAgICAgICBtYW5pZmVzdDogdGhpcy5tYW5pZmVzdHNbaXRlbXNbaV0ubmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uY2UobWFuaWZlc3RQcmVkaWNhdGUuYmluZCh7fSwgaXRlbXNbaV0ubmFtZSksXG4gICAgICAgICAgICAgICAgICBvbk1hbmlmZXN0LmJpbmQodGhpcywgaXRlbXNbaV0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwodGhpcy5wb3J0LCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5kZWYpLnRoZW4oXG4gICAgICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgaXRlbXNbaV0ubmFtZSwgaXRlbXNbaV0uZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0uZGVmLnByb3ZpZGVzKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wZW5kaW5nUG9ydHMgKz0gMTtcbiAgfVxuXG4gIC8vIEFsbG93IHJlc29sdXRpb24gb2YgZmlsZXMgYnkgcGFyZW50LlxuICB0aGlzLm1hbmFnZXIucmVzb3VyY2UuYWRkUmVzb2x2ZXIoZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUpIHtcbiAgICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gICAgdGhpcy5yZXF1ZXN0c1tpZF0gPSByZXNvbHZlO1xuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ3Jlc29sdmUnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGF0YTogdXJsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgLy8gQXR0YWNoIENvcmUuXG4gIHRoaXMucGVuZGluZ1BvcnRzICs9IDE7XG5cbiAgY29yZSA9IHRoaXMuYXBpLmdldCgnY29yZScpLmRlZmluaXRpb247XG4gIHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKGNvcmUsIHRoaXMuZGVidWcpO1xuICB0aGlzLm1hbmFnZXIuZ2V0Q29yZShmdW5jdGlvbiAoQ29yZVByb3YpIHtcbiAgICBuZXcgQ29yZVByb3YodGhpcy5tYW5hZ2VyKS5zZXRJZCh0aGlzLmxpbmVhZ2UsIHRoaXMpO1xuICAgIHByb3ZpZGVyLmdldEludGVyZmFjZSgpLnByb3ZpZGVBc3luY2hyb25vdXMoQ29yZVByb3YpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ0xpbmsgdG8gY29yZScsXG4gICAgcmVxdWVzdDogJ2xpbmsnLFxuICAgIG5hbWU6ICdjb3JlJyxcbiAgICB0bzogcHJvdmlkZXJcbiAgfSk7XG5cbiAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwocHJvdmlkZXIsICdkZWZhdWx0Jywge1xuICAgIG5hbWU6ICdjb3JlJyxcbiAgICBkZWZpbml0aW9uOiBjb3JlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICBjb3JlLmV4dGVybmFsLmdldExvZ2dlclN5bmMgPSB0aGlzLmRlYnVnLmdldExvZ2dpbmdTaGltKFxuICAgICAgICBjb3JlLmV4dGVybmFsKCkuZ2V0TG9nZ2VyKTtcbiAgICB0aGlzLmF0dGFjaCgnY29yZScsIGZhbHNlLCBjb3JlKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuXG4gIGlmICh0aGlzLnBlbmRpbmdQb3J0cyA9PT0gMCkge1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGV4cG9ydGVkIG1hbmlmZXN0IG9mIGEgZGVwZW5kZW5jeS5cbiAqIFNldHMgaXQgaW50ZXJuYWxseSBpZiBub3QgeWV0IGV4cG9ydGVkLCBvciBhdHRhY2hlcyB0aGUgcHJvcGVydHkgaWYgaXRcbiAqIGlzIGxvYWRlZCBhZnRlciB0aGUgbW9kdWxlIGhhcyBzdGFydGVkICh3ZSBkb24ndCBkZWxheSBzdGFydCB0byByZXRyZWl2ZVxuICogdGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5LilcbiAqIEBtZXRob2QgdXBkYXRlTWFuaWZlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBEZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5XG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS51cGRhdGVNYW5pZmVzdCA9IGZ1bmN0aW9uIChuYW1lLCBtYW5pZmVzdCkge1xuICB2YXIgZXhwID0gdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb207XG5cbiAgaWYgKGV4cCAmJiBleHBbbmFtZV0pIHtcbiAgICBleHBbbmFtZV0ubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgLy8gSGFuZGxlIHJlcXVpcmUoKSBkZXBlbmRlbmN5IHJlc29sdXRpb24uXG4gIH0gZWxzZSBpZiAodGhpcy51bmJvdW5kUG9ydHNbbmFtZV0pIHtcbiAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIG5hbWUsXG4gICAgICAgIHRoaXMuYmluZGVyLmdldEFQSShtYW5pZmVzdCwgdGhpcy5hcGksIHRoaXMudW5ib3VuZFBvcnRzW25hbWVdLmFwaSkpXG4gICAgICAudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBuYW1lLCBmYWxzZSlcbiAgICAgICkudGhlbihmdW5jdGlvbihwcm94eSkge1xuICAgICAgICB0aGlzLnVuYm91bmRQb3J0c1tuYW1lXS5jYWxsYmFjayhwcm94eSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnVuYm91bmRQb3J0c1tuYW1lXTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tYW5pZmVzdHNbbmFtZV0gPSBtYW5pZmVzdDtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hpY2ggcHJveHkgcG9ydHMgc2hvdWxkIGJlIGV4cG9zZWQgYnkgdGhpcyBtb2R1bGUuXG4gKiBAbWV0aG9kIG1hcFByb3hpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCB0aGUgbW9kdWxlIEpTT04gbWFuaWZlc3QuXG4gKiBAcmV0dXJuIHtPYmplY3RbXX0gcHJveHkgZGVzY3JpcHRvcnMgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5tYXBQcm94aWVzID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XG4gIHZhciBwcm94aWVzID0gW10sIHNlZW4gPSBbJ2NvcmUnXSwgaSwgb2JqO1xuXG4gIGlmIChtYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wZXJtaXNzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wZXJtaXNzaW9uc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2Yob2JqLm5hbWUpIDwgMCAmJiBvYmouZGVmKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtYW5pZmVzdC5kZXBlbmRlbmNpZXMpIHtcbiAgICB1dGlsLmVhY2hQcm9wKG1hbmlmZXN0LmRlcGVuZGVuY2llcywgZnVuY3Rpb24gKGRlc2MsIG5hbWUpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYXBpOiBkZXNjLmFwaVxuICAgICAgfTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgIGlmIChkZXNjLmFwaSkge1xuICAgICAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQoZGVzYy5hcGkpO1xuICAgICAgICB9XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGlmIChtYW5pZmVzdC5wcm92aWRlcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wcm92aWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wcm92aWRlc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChvYmouZGVmKSB7XG4gICAgICAgIG9iai5kZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW29iai5uYW1lXSkge1xuICAgICAgICBvYmouZGVmID0ge1xuICAgICAgICAgIG5hbWU6IG9iai5uYW1lLFxuICAgICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVtvYmoubmFtZV0sXG4gICAgICAgICAgcHJvdmlkZXM6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignTW9kdWxlIHdpbGwgbm90IHByb3ZpZGUgXCInICsgb2JqLm5hbWUgK1xuICAgICAgICAgICdcIiwgc2luY2Ugbm8gZGVjbGFyYXRpb24gY2FuIGJlIGZvdW5kLicpO1xuICAgICAgICAvKmpzbGludCBjb250aW51ZTp0cnVlKi9cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvKmpzbGludCBjb250aW51ZTpmYWxzZSovXG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG9iai5uYW1lKSA8IDApIHtcbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChvYmoubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3hpZXM7XG59O1xuXG4vKipcbiAqIExvYWQgZXh0ZXJuYWwgc2NyaXB0cyBpbnRvIHRoaXMgbmFtZXNwYWNlLlxuICogQG1ldGhvZCBsb2FkU2NyaXB0c1xuICogQHBhcmFtIHtTdHJpbmd9IGZyb20gVGhlIFVSTCBvZiB0aGlzIG1vZHVsZXMncyBtYW5pZmVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nW119IHNjcmlwdHMgVGhlIFVSTHMgb2YgdGhlIHNjcmlwdHMgdG8gbG9hZC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmxvYWRTY3JpcHRzID0gZnVuY3Rpb24gKGZyb20sIHNjcmlwdHMpIHtcbiAgLy8gVE9ETyhzYWxvbWVnZW8pOiBhZGQgYSB0ZXN0IGZvciBmYWlsdXJlLlxuICB2YXIgaW1wb3J0ZXIgPSBmdW5jdGlvbiAoc2NyaXB0LCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmltcG9ydFNjcmlwdHMoc2NyaXB0KTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KGUpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpLFxuICAgIHNjcmlwdHNfY291bnQsXG4gICAgbG9hZDtcbiAgaWYgKHR5cGVvZiBzY3JpcHRzID09PSAnc3RyaW5nJykge1xuICAgIHNjcmlwdHNfY291bnQgPSAxO1xuICB9IGVsc2Uge1xuICAgIHNjcmlwdHNfY291bnQgPSBzY3JpcHRzLmxlbmd0aDtcbiAgfVxuXG4gIGxvYWQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgIGlmIChuZXh0ID09PSBzY3JpcHRzX2NvdW50KSB7XG4gICAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbENoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogXCJyZWFkeVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2NyaXB0O1xuICAgIGlmICh0eXBlb2Ygc2NyaXB0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNjcmlwdCA9IHNjcmlwdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdCA9IHNjcmlwdHNbbmV4dF07XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VyLnJlc291cmNlLmdldChmcm9tLCBzY3JpcHQpLnRoZW4oZnVuY3Rpb24gKHVybCkge1xuICAgICAgdGhpcy50cnlMb2FkKGltcG9ydGVyLCB1cmwpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2FkKG5leHQgKyAxKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG5cblxuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgaW1wb3J0ZXIgPSBmdW5jdGlvbiAodXJsLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBzY3JpcHQgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlLCB0cnVlKTtcbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbG9hZCgwKTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBsb2FkIHJlc29sdmVkIHNjcmlwdHMgaW50byB0aGUgbmFtZXNwYWNlLlxuICogQG1ldGhvZCB0cnlMb2FkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW1wb3J0ZXIgVGhlIGFjdHVhbCBpbXBvcnQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nW119IHVybHMgVGhlIHJlc292ZWQgVVJMcyB0byBsb2FkLlxuICogQHJldHVybnMge1Byb21pc2V9IGNvbXBsZXRpb24gb2YgbG9hZFxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudHJ5TG9hZCA9IGZ1bmN0aW9uIChpbXBvcnRlciwgdXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChpbXBvcnRlci5iaW5kKHt9LCB1cmwpKS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9LCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMuZGVidWcud2FybihlLnN0YWNrKTtcbiAgICB0aGlzLmRlYnVnLmVycm9yKFwiRXJyb3IgbG9hZGluZyBcIiArIHVybCwgZSk7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcihcIklmIHRoZSBzdGFjayB0cmFjZSBpcyBub3QgdXNlZnVsLCBzZWUgaHR0cHM6Ly9cIiArXG4gICAgICAgIFwiZ2l0aHViLmNvbS9mcmVlZG9tanMvZnJlZWRvbS93aWtpL0RlYnVnZ2luZy1TY3JpcHQtUGFyc2UtRXJyb3JzXCIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVJbnRlcm5hbDtcbiIsIi8qZ2xvYmFscyBYTUxIdHRwUmVxdWVzdCAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIE1vZHVsZSA9IHJlcXVpcmUoJy4vbW9kdWxlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBQb2xpY3kgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgbW9kdWxlcyBhbmQgcHJvdmlkZVxuICogbWlncmF0aW9uIGFuZCBjb2FsbGVzaW5nIG9mIGV4ZWN1dGlvbi5cbiAqIEBDbGFzcyBQb2xpY3lcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBvZiB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbG9hZGVyIG9mIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGxvY2FsIGNvbmZpZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgUG9saWN5ID0gZnVuY3Rpb24obWFuYWdlciwgcmVzb3VyY2UsIGNvbmZpZykge1xuICB0aGlzLmFwaSA9IG1hbmFnZXIuYXBpO1xuICB0aGlzLmRlYnVnID0gbWFuYWdlci5kZWJ1ZztcbiAgdGhpcy5sb2NhdGlvbiA9IGNvbmZpZy5sb2NhdGlvbjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuXG4gIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB0aGlzLnJ1bnRpbWVzID0gW107XG4gIHRoaXMucG9saWNpZXMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nID0ge307XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuXG4gIHRoaXMuYWRkKG1hbmFnZXIsIGNvbmZpZy5wb2xpY3kpO1xuICB0aGlzLnJ1bnRpbWVzWzBdLmxvY2FsID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGhlIHBvbGljeSBhIHJ1bnRpbWUgaXMgZXhwZWN0ZWQgdG8gaGF2ZSB1bmxlc3MgaXQgc3BlY2lmaWVzXG4gKiBvdGhlcndpc2UuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljXG4gKiBAcHJvcGVydHkgZGVmYXVsdFBvbGljeVxuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRQb2xpY3kgPSB7XG4gIGJhY2tncm91bmQ6IGZhbHNlLCAvLyBDYW4gdGhpcyBydW50aW1lIHJ1biAnYmFja2dyb3VuZCcgbW9kdWxlcz9cbiAgaW50ZXJhY3RpdmU6IHRydWUgLy8gSXMgdGhlcmUgYSB2aWV3IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJ1bnRpbWU/XG4gIC8vIFRPRE86IHJlbWFpbmluZyBydW50aW1lIHBvbGljeS5cbn07XG5cbi8qKlxuICogVGhlIGNvbnN0cmFpbnRzIGEgY29kZSBtb2R1bGVzIGlzIGV4cGVjdGVkIHRvIGhhdmUgdW5sZXNzIGl0IHNwZWNpZmllc1xuICogb3RoZXJ3aXNlLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpY1xuICogQHByb3BlcnR5IGRlZmF1bHRDb25zdHJhaW50c1xuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRDb25zdHJhaW50cyA9IHtcbiAgaXNvbGF0aW9uOiBcImFsd2F5c1wiLCAvLyB2YWx1ZXM6IGFsd2F5cywgYXBwLCBuZXZlclxuICBwbGFjZW1lbnQ6IFwibG9jYWxcIiAvLyB2YWx1ZXM6IGxvY2FsLCBzdGFibGUsIHJlZHVuZGFudFxuICAvLyBUT0RPOiByZW1haW5pbmcgY29uc3RyYWludHMsIGV4cHJlc3MgcGxhdGZvcm0tc3BlY2lmaWMgZGVwZW5kZW5jaWVzLlxufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgbW9kdWxlIGZyb20gaXRzIGNhbm9uaWNhbCBVUkwuXG4gKiBSZXBvbmRzIHdpdGggdGhlIHByb21pc2Ugb2YgYSBwb3J0IHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLCBcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBsaW5lYWdlIG9mIHRoZSByZXF1ZXN0aW5nIG1vZHVsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgY2Fub25pY2FsIElEIG9mIHRoZSBtb2R1bGUgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGxvY2FsIHBvcnQgdG93YXJkcyB0aGUgbW9kdWxlLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkKSB7XG4gIFxuICAvLyBNYWtlIHN1cmUgdGhhdCBhIG1vZHVsZSBpc24ndCBnZXR0aW5nIGxvY2F0ZWQgdHdpY2UgYXQgdGhlIHNhbWUgdGltZS5cbiAgLy8gVGhpcyBpcyByZXNvbHZlZCBieSBkZWxheWluZyBpZiBpdCB1bnRpbCB3ZSBzZWUgaXQgaW4gYSAnbW9kdWxlQWRkJyBldmVudC5cbiAgaWYgKHRoaXMucGVuZGluZ1tpZF0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdwbGFjZWQnLCBmdW5jdGlvbihsLCBpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGwsIGkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0uYmluZCh0aGlzLCBsaW5lYWdlLCBpZCkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wZW5kaW5nW2lkXSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5sb2FkTWFuaWZlc3QoaWQpLnRoZW4oZnVuY3Rpb24obWFuaWZlc3QpIHtcbiAgICB2YXIgY29uc3RyYWludHMgPSB0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0Q29uc3RyYWludHMsIG1hbmlmZXN0LmNvbnN0cmFpbnRzKSxcbiAgICAgICAgcnVudGltZSA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cyksXG4gICAgICAgIHBvcnRJZDtcbiAgICBpZiAocnVudGltZS5sb2NhbCkge1xuICAgICAgcG9ydElkID0gdGhpcy5pc1J1bm5pbmcocnVudGltZSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ25ldmVyJyk7XG4gICAgICBpZihjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICdhbHdheXMnICYmIHBvcnRJZCkge1xuICAgICAgICB0aGlzLmRlYnVnLmluZm8oJ1JldXNlZCBwb3J0ICcgKyBwb3J0SWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nW2lkXTtcbiAgICAgICAgdGhpcy5lbWl0KCdwbGFjZWQnKTtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUubWFuYWdlci5nZXRQb3J0KHBvcnRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE1vZHVsZShpZCwgbWFuaWZlc3QsIGxpbmVhZ2UsIHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBDcmVhdGUgYSBwb3J0IHRvIGdvIHRvIHRoZSByZW1vdGUgcnVudGltZS5cbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ1VuZXhwZWN0ZWQgbG9jYXRpb24gc2VsZWN0ZWQgZm9yIG1vZHVsZSBwbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignUG9saWN5IEVycm9yIFJlc29sdmluZyAnICsgaWQsIGVycik7XG4gICAgdGhyb3coZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogRmluZCB0aGUgcnVudGltZSBkZXN0aW5hdGlvbiBmb3IgYSBtb2R1bGUgZ2l2ZW4gaXRzIGNvbnN0cmFpbnRzIGFuZCB0aGVcbiAqIG1vZHVsZSBjcmVhdGluZyBpdC5cbiAqIEBtZXRob2QgZmluZERlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBpZGVudGl0eSBvZiB0aGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtTdHJpbmddIGlkIFRoZSBjYW5vbmljYWwgdXJsIG9mIHRoZSBtb2R1bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25zdHJhaW50cyBDb25zdHJhaW50cyBmb3IgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBlbGVtZW50IG9mIHRoaXMucnVudGltZXMgd2hlcmUgdGhlIG1vZHVsZSBzaG91bGQgcnVuLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmZpbmREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cykge1xuICB2YXIgaTtcblxuICAvLyBTdGVwIDE6IGlmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCB0aGUgbVxuICBpZiAoY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnYWx3YXlzJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvbGljaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmcodGhpcy5ydW50aW1lc1tpXSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnbmV2ZXInKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW50aW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDI6IGlmIHRoZSBtb2R1bGUgd2FudHMgc3RhYmlsaXR5LCBpdCBtYXkgbmVlZCB0byBiZSByZW1vdGUuXG4gIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdsb2NhbCcpIHtcbiAgICByZXR1cm4gdGhpcy5ydW50aW1lc1swXTtcbiAgfSBlbHNlIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdzdGFibGUnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9saWNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnBvbGljaWVzW2ldLmJhY2tncm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVudGltZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcCAzOiBpZiB0aGUgbW9kdWxlIG5lZWRzIGxvbmdldml0eSAvIGludGVyYWN0aXZpdHksIGl0IG1heSB3YW50IHRvIGJlIHJlbW90ZS5cbiAgcmV0dXJuIHRoaXMucnVudGltZXNbMF07XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIGtub3duIHJ1bnRpbWUgaXMgcnVubmluZyBhbiBhcHByb3ByaWF0ZSBpbnN0YW5jZSBvZiBhIG1vZHVsZS5cbiAqIEBtZXRob2QgaXNSdW5uaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gcnVudGltZSBUaGUgcnVudGltZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgbW9kdWxlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gZnJvbSBUaGUgaWRlbnRpZmllciBvZiB0aGUgcmVxdWVzdGluZyBtb2R1bGUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZ1bGxNYXRjaCBJZiB0aGUgbW9kdWxlIG5lZWRzIHRvIGJlIGluIHRoZSBzYW1lIGFwcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8Qm9vbGVhbn0gVGhlIE1vZHVsZSBpZCBpZiBpdCBpcyBydW5uaW5nLCBvciBmYWxzZSBpZiBub3QuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuaXNSdW5uaW5nID0gZnVuY3Rpb24ocnVudGltZSwgaWQsIGZyb20sIGZ1bGxNYXRjaCkge1xuICB2YXIgaSA9IDAsIGogPSAwLCBva2F5O1xuICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGZ1bGxNYXRjaCAmJiBydW50aW1lLm1vZHVsZXNbaV0ubGVuZ3RoID09PSBmcm9tLmxlbmd0aCArIDEpIHtcbiAgICAgIG9rYXkgPSB0cnVlO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGZyb20ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVtqICsgMV0uaW5kZXhPZihmcm9tW2pdKSAhPT0gMCkge1xuICAgICAgICAgIG9rYXkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSAhPT0gMCkge1xuICAgICAgICBva2F5ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChva2F5KSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLm1vZHVsZXNbaV1bMF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZnVsbE1hdGNoICYmIHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJ1bnRpbWUubW9kdWxlc1tpXVswXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBHZXQgYSBwcm9taXNlIG9mIHRoZSBtYW5pZmVzdCBmb3IgYSBtb2R1bGUgSUQuXG4gKiBAbWV0aG9kIGxvYWRNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBjYW5vbmljYWwgSUQgb2YgdGhlIG1hbmlmZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3IgdGhlIGpzb24gY29udGVudHMgb2YgdGhlIG1hbmlmZXN0LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmxvYWRNYW5pZmVzdCA9IGZ1bmN0aW9uKG1hbmlmZXN0KSB7XG4gIHJldHVybiB0aGlzLnJlc291cmNlLmdldENvbnRlbnRzKG1hbmlmZXN0KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmVzcCA9IHt9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFwiICsgbWFuaWZlc3QgKyBcIjogXCIgKyBlcnIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTWFuaWZlc3QgQXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVudGltZSB0byBrZWVwIHRyYWNrIG9mIGluIHRoaXMgcG9saWN5LlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7ZmRvbS5wb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHVzZSBmb3IgbW9kdWxlIGxpZmV0aW1lIGluZm9cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xpY3kgVGhlIHBvbGljeSBvZiB0aGUgcnVudGltZS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwb3J0LCBwb2xpY3kpIHtcbiAgdmFyIHJ1bnRpbWUgPSB7XG4gICAgbWFuYWdlcjogcG9ydCxcbiAgICBtb2R1bGVzOiBbXVxuICB9O1xuICB0aGlzLnJ1bnRpbWVzLnB1c2gocnVudGltZSk7XG4gIHRoaXMucG9saWNpZXMucHVzaCh0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0UG9saWN5LCBwb2xpY3kpKTtcblxuICBwb3J0Lm9uKCdtb2R1bGVBZGQnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXTtcbiAgICBsaW5lYWdlID0gbGluZWFnZS5jb25jYXQoaW5mby5saW5lYWdlKTtcbiAgICBsaW5lYWdlWzBdID0gaW5mby5pZDtcbiAgICBydW50aW1lLm1vZHVsZXMucHVzaChsaW5lYWdlKTtcbiAgICBpZiAodGhpcy5wZW5kaW5nW2luZm8ubGluZWFnZVswXV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdbaW5mby5saW5lYWdlWzBdXTtcbiAgICAgIHRoaXMuZW1pdCgncGxhY2VkJyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xuICBwb3J0Lm9uKCdtb2R1bGVSZW1vdmUnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXSwgaSwgbW9kRmluZ2VycHJpbnQ7XG4gICAgbGluZWFnZSA9IGxpbmVhZ2UuY29uY2F0KGluZm8ubGluZWFnZSk7XG4gICAgbGluZWFnZVswXSA9IGluZm8uaWQ7XG4gICAgbW9kRmluZ2VycHJpbnQgPSBsaW5lYWdlLnRvU3RyaW5nKCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldLnRvU3RyaW5nKCkgPT09IG1vZEZpbmdlcnByaW50KSB7XG4gICAgICAgIHJ1bnRpbWUubW9kdWxlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbmtub3duIG1vZHVsZSB0byByZW1vdmU6ICcsIGluZm8uaWQpO1xuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xufTtcblxuLyoqXG4gKiBPdmVybGF5IGEgc3BlY2lmaWMgcG9saWN5IG9yIGNvbnN0cmFpbnQgaW5zdGFuY2Ugb24gZGVmYXVsdCBzZXR0aW5ncy5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWMuXG4gKiBAbWV0aG9kIG92ZXJsYXlcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYmFzZSBUaGUgZGVmYXVsdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdmVybGF5IFRoZSBzdXBlcmNlZWRpbmcgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBiYXNlIHBhcmFtZXRlcnMgd2hlbiBub3Qgc2V0IGluIG92ZXJsYXkuXG4gKi9cblBvbGljeS5wcm90b3R5cGUub3ZlcmxheSA9IGZ1bmN0aW9uKGJhc2UsIG92ZXJsYXkpIHtcbiAgdmFyIHJldCA9IHt9O1xuXG4gIHV0aWwubWl4aW4ocmV0LCBiYXNlKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICB1dGlsLm1peGluKHJldCwgb3ZlcmxheSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9saWN5O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCBmb3IgYSB1c2VyLWFjY2Vzc2FibGUgcHJvdmlkZXIuXG4gKiBAY2xhc3MgUHJvdmlkZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGRlZiBUaGUgaW50ZXJmYWNlIG9mIHRoZSBwcm92aWRlci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29udHJ1Y3RvclxuICovXG52YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoZGVmLCBkZWJ1Zykge1xuICB0aGlzLmlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgdGhpcy5kZWZpbml0aW9uID0gZGVmO1xuICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuaWZhY2UgPSBudWxsO1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5wcm92aWRlckNscyA9IG51bGw7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBQcm92aWRlciBtb2RlcyBvZiBvcGVyYXRpb24uXG4gKiBAcHJvcGVydHkgbW9kZVxuICogQHN0YXRpY1xuICogQHR5cGUgbnVtYmVyXG4gKi9cblByb3ZpZGVyLm1vZGUgPSB7XG4gIHN5bmNocm9ub3VzOiAwLFxuICBhc3luY2hyb25vdXM6IDEsXG4gIHByb21pc2VzOiAyXG59O1xuXG4vKipcbiAqIFJlY2VpdmUgZXh0ZXJuYWwgbWVzc2FnZXMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5jaGFubmVsc1ttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBpZiAobWVzc2FnZS5jaGFubmVsID09PSB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB9XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jaGFubmVsc1tzb3VyY2VdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2hhbm5lbHNbc291cmNlXSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNZXNzYWdlIGZyb20gdW5jb25maWd1cmVkIHNvdXJjZTogJyArIHNvdXJjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgbWVzc2FnZS50byk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIHRoaXMuZW1pdHNbc291cmNlXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICBtZXNzYWdlLm1lc3NhZ2UudG8gPSBtZXNzYWdlLnRvO1xuICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgIHZhciBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoXG4gICAgICAgICAgKHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciAmJiB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUpID9cbiAgICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgIHRoaXMuZGVidWdcbiAgICAgICAgKSxcbiAgICAgICAgaW5zdGFuY2U7XG4gICAgICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXSA9IHt9O1xuICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLmdldFByb3ZpZGVyKHNvdXJjZSwgbWVzc2FnZS50bywgYXJncyk7XG4gICAgICAvLyBkb24ndCBzYXZlIGEgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGlmIGl0IGNsb3NlZCBpdHNlbGYgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLmlmYWNlc1tzb3VyY2VdICYmXG4gICAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2UuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXSA9IGluc3RhbmNlLm9ubXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4odGhpcy50b1N0cmluZygpICsgJyBkcm9wcGluZyBtZXNzYWdlICcgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIHByb3ZpZGVyIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGNsb3NlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ1Byb3ZpZGVyIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcblxuICAvLyBSZWxlYXNlIHJlZmVyZW5jZXMuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlO1xuICBkZWxldGUgdGhpcy5wcm92aWRlckNscztcbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZ1bGZpbGxpbmcgdGhpcyBwcm92aWRlci5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGNvbnN1bWVyIHNvdXJjZSBvZiB0aGUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byB0ZWFyIGRvd24uXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gIC8vIElnbm9yZSB0ZWFyZG93biBvZiBub24tZXhpc3RhbnQgaWRzLlxuICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkZWxldGUgdGhpcy5pZmFjZXNbc291cmNlXVtpZF07XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW3NvdXJjZV1baWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gJiYgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYW4gaW50ZXJmYWNlIHRvIGV4cG9zZSBleHRlcm5hbGx5IHJlcHJlc2VudGluZyB0aGlzIHBvcnQuXG4gKiBQcm92aWRlcnMgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcG9ydCB1c2luZyBlaXRoZXJcbiAqIHByb3ZpZGVTeW5jaHJvbm91cyBvciBwcm92aWRlQXN5bmNocm9ub3VzIGRlcGVuZGluZyBvbiB0aGUgZGVzaXJlZFxuICogcmV0dXJuIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHRlcm5hbCBpbnRlcmZhY2Ugb2YgdGhpcyBQcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWZhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdmlkZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlciBcIiArIHRoaXMudG9TdHJpbmcoKSArXG4gICAgICAgICAgICBcIiBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCBieSBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaWZhY2UgPSB7XG4gICAgICBwcm92aWRlU3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVBc3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5hc3luY2hyb25vdXM7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBwcm92aWRlUHJvbWlzZXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5wcm9taXNlcztcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH07XG5cbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZGVmaW5pdGlvbiwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XG4gICAgICBjYXNlIFwiY29uc3RhbnRcIjpcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaWZhY2UsIG5hbWUsIHtcbiAgICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KHByb3AudmFsdWUpLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzLmlmYWNlO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIHByb3ZpZGVyIGZyb21cbiAqIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgfS5iaW5kKHt9LCB0aGlzKTtcblxuICBmdW5jLmNsb3NlID0gZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgaWYgKGlmYWNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoaWRzLCBzb3VyY2UpIHtcbiAgICAgICAgdXRpbC5lYWNoUHJvcChpZHMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMudGVhcmRvd24oc291cmNlLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzb3VyY2VdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UsIGhhbmRsZXIpIHtcbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGNoYW5uZWwgZGlyZWN0bHkuXG4gICAgaWYgKHR5cGVvZiBpZmFjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCBpZmFjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGlkcywgc291cmNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKGlkcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuICByZXR1cm4gZnVuYztcbn07XG5cbi8qKlxuICogR2V0IGEgbmV3IGluc3RhbmNlIG9mIHRoZSByZWdpc3RlcmVkIHByb3ZpZGVyLlxuICogQG1ldGhvZCBnZXRQcm92aWRlclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgcG9ydCB0aGlzIGluc3RhbmNlIGlzIGludGVyYWN0aWduIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRlbnRpZmllciB0aGUgbWVzc2FnYWJsZSBhZGRyZXNzIGZvciB0aGlzIHByb3ZpZGVyLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBDb25zdHJ1Y3RvciBhcmd1bWVudHMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHNlbmQgbWVzc2FnZXMgdG8gdGhlIHByb3ZpZGVyLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAoc291cmNlLCBpZGVudGlmaWVyLCBhcmdzKSB7XG4gIGlmICghdGhpcy5wcm92aWRlckNscykge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ0Nhbm5vdCBpbnN0YW50aWF0ZSBwcm92aWRlciwgc2luY2UgaXQgaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgcmV0dXJuIHtpbnN0YW5jZTogdW5kZWZpbmVkLCBvbm1zZzogdW5kZWZpbmVkfTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSB7fSxcbiAgICBkaXNwYXRjaEV2ZW50LFxuICAgIEJvdW5kQ2xhc3MsXG4gICAgaW5zdGFuY2U7XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmRlZmluaXRpb24sIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgaWYgKHByb3AudHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgZXZlbnRzW25hbWVdID0gcHJvcDtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoc3JjLCBldiwgaWQsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGV2W25hbWVdKSB7XG4gICAgICB2YXIgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKGV2W25hbWVdLnZhbHVlLCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRvOiBpZCxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBzb3VyY2UsIGV2ZW50cywgaWRlbnRpZmllcik7XG5cbiAgLy8gdGhpcyBpcyBhbGwgdG8gc2F5OiBuZXcgcHJvdmlkZXJDbHMoZGlzcGF0Y2hFdmVudCwgYXJnc1swXSwgYXJnc1sxXSwuLi4pXG4gIEJvdW5kQ2xhc3MgPSB0aGlzLnByb3ZpZGVyQ2xzLmJpbmQuYXBwbHkodGhpcy5wcm92aWRlckNscyxcbiAgICAgIFt0aGlzLnByb3ZpZGVyQ2xzLCBkaXNwYXRjaEV2ZW50XS5jb25jYXQoYXJncyB8fCBbXSkpO1xuICBpbnN0YW5jZSA9IG5ldyBCb3VuZENsYXNzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgb25tc2c6IGZ1bmN0aW9uIChwb3J0LCBzcmMsIG1zZykge1xuICAgICAgdmFyIHByb3AsIGRlYnVnLCBhcmdzLCByZXR1cm5Qcm9taXNlLCByZXQ7XG4gICAgICBpZiAobXNnLmFjdGlvbiA9PT0gJ21ldGhvZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21zZy50eXBlXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHBvcnQuZGVidWcud2FybihcIlByb3ZpZGVyIGRvZXMgbm90IGltcGxlbWVudCBcIiArIG1zZy50eXBlICsgXCIoKSFcIik7XG4gICAgICAgICAgcG9ydC5lbWl0KHBvcnQuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgcmVxSWQ6IG1zZy5yZXFJZCxcbiAgICAgICAgICAgICAgbmFtZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgIGVycm9yOiAnUHJvdmlkZXIgZG9lcyBub3QgaW1wbGVtZW50ICcgKyBtc2cudHlwZSArICcoKSEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb3AgPSBwb3J0LmRlZmluaXRpb25bbXNnLnR5cGVdO1xuICAgICAgICBkZWJ1ZyA9IHBvcnQuZGVidWc7XG4gICAgICAgIGFyZ3MgPSBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShwcm9wLnZhbHVlLCBtc2csIGRlYnVnKTtcbiAgICAgICAgaWYgKG1zZy5yZXFJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIFJlY2tsZXNzIGNhbGwuICBJZ25vcmUgcmV0dXJuIHZhbHVlLlxuICAgICAgICAgIHJldCA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICBkZWJ1Zy5lcnJvcihyZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gZnVuY3Rpb24gKHNyYywgbXNnLCBwcm9wLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC5yZXQsIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdG86IG1zZy50byxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgICByZXFJZDogbXNnLnJlcUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1zZy50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfS5iaW5kKHBvcnQsIHNyYywgbXNnLCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0KHRoaXNbbXNnLnR5cGVdLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgICB9IGNhdGNoIChlMSkge1xuICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgZTEubWVzc2FnZSArICcgJyArIGUxLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzW21zZy50eXBlXS5hcHBseShpbnN0YW5jZSwgYXJncy5jb25jYXQocmV0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgICAgICAgIHJldCh1bmRlZmluZWQsIGUyLm1lc3NhZ2UgKyAnICcgKyBlMi5zdGFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5wcm9taXNlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5Qcm9taXNlID0gdGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBpZiAocmV0dXJuUHJvbWlzZSAmJiByZXR1cm5Qcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuUHJvbWlzZS50aGVuKHJldCwgcmV0LmJpbmQoe30sIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgJ05vIHByb21pc2UgcmV0dXJuZWQgZnJvbSAnICtcbiAgICAgICAgICAgICAgICAgIG1zZy50eXBlICsgJzogJyArIHJldHVyblByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUzKSB7XG4gICAgICAgICAgICByZXQodW5kZWZpbmVkLCBlMy5tZXNzYWdlICsgJyAnICsgZTMuc3RhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZChpbnN0YW5jZSwgdGhpcywgc291cmNlKVxuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltQcm92aWRlciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBQcm92aWRlcl1cIjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uL2NvbnN1bWVyJyk7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSBmdW5jdGlvbihkZWYsIG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB2YXIgaW5mbGlnaHQgPSB7fSxcbiAgICAgIGV2ZW50cyA9IG51bGwsXG4gICAgICBlbWl0dGVyID0gbnVsbCxcbiAgICAgIHJlcUlkID0gMCxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgdXRpbC5lYWNoUHJvcChkZWYsIGZ1bmN0aW9uKHByb3AsIG5hbWUpIHtcbiAgICBzd2l0Y2gocHJvcC50eXBlKSB7XG4gICAgY2FzZSAnbWV0aG9kJzpcbiAgICAgIHRoaXNbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTm90ZTogaW5mbGlnaHQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYmVmb3JlIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICAgIC8vIGluIG9yZGVyIHRvIHByZXBhcmUgZm9yIHN5bmNocm9ub3VzIGluLXdpbmRvdyBwaXBlcy5cbiAgICAgICAgdmFyIHRoaXNSZXEgPSByZXFJZCxcbiAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgaW5mbGlnaHRbdGhpc1JlcV0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZTpyZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdDpyZWplY3QsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3AucmV0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICByZXFJZCArPSAxO1xuICAgICAgICBlbWl0KHtcbiAgICAgICAgICBhY3Rpb246ICdtZXRob2QnLFxuICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXNSZXEsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgIHRoaXNbbmFtZV0ucmVja2xlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLFxuICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgZW1pdCh7XG4gICAgICAgICAgYWN0aW9uOiAnbWV0aG9kJyxcbiAgICAgICAgICB0eXBlOiBuYW1lLFxuICAgICAgICAgIHJlcUlkOiBudWxsLCAgLy8gTWFya3MgdGhpcyBhcyBhIHJlY2tsZXNzIGNhbGwuXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJldHVybiB0eXBlIGlzIHZvaWQuXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXZlbnQnOlxuICAgICAgaWYoIWV2ZW50cykge1xuICAgICAgICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgICAgICAgZW1pdHRlciA9IHRoaXMuZW1pdDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW1pdDtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICB9XG4gICAgICBldmVudHNbbmFtZV0gPSBwcm9wO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29uc3RhbnQnOlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChwcm9wLnZhbHVlKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBvbk1zZyh0aGlzLCBmdW5jdGlvbih0eXBlLCBtc2cpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgaWYgKHRoaXMub2ZmKSB7XG4gICAgICAgIHRoaXMub2ZmKCk7XG4gICAgICB9XG4gICAgICB1dGlsLmVhY2hQcm9wKGluZmxpZ2h0LCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9iai5yZWplY3QoJ2Nsb3NlZCcpO1xuICAgICAgfSk7XG4gICAgICBpbmZsaWdodCA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1zZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdtZXRob2QnKSB7XG4gICAgICBpZiAoaW5mbGlnaHRbbXNnLnJlcUlkXSkge1xuICAgICAgICB2YXIgcmVzb2x2ZXIgPSBpbmZsaWdodFttc2cucmVxSWRdLFxuICAgICAgICAgICAgdGVtcGxhdGUgPSByZXNvbHZlci50ZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIGluZmxpZ2h0W21zZy5yZXFJZF07XG4gICAgICAgIGlmIChtc2cuZXJyb3IpIHtcbiAgICAgICAgICByZXNvbHZlci5yZWplY3QobXNnLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKHRlbXBsYXRlLCBtc2csIGRlYnVnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdJbmNvbWluZyBtZXNzYWdlIGNsYWltZWQgdG8gYmUgYW4gUlBDICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdyZXR1cm5pbmcgZm9yIHVucmVnaXN0ZXJlZCBjYWxsJywgbXNnLnJlcUlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICBpZiAoZXZlbnRzW21zZy5uYW1lXSkge1xuICAgICAgICBlbWl0dGVyKG1zZy5uYW1lLCBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShldmVudHNbbXNnLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgICAgIG1zZywgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgYXJncyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKFxuICAgICAgKGRlZi5jb25zdHJ1Y3RvciAmJiBkZWYuY29uc3RydWN0b3IudmFsdWUpID8gZGVmLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzLCA0KSxcbiAgICAgIGRlYnVnKTtcblxuICBlbWl0KHtcbiAgICB0eXBlOiAnY29uc3RydWN0JyxcbiAgICB0ZXh0OiBhcmdzLnRleHQsXG4gICAgYmluYXJ5OiBhcmdzLmJpbmFyeVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpSW50ZXJmYWNlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBFdmVudEludGVyZmFjZSA9IGZ1bmN0aW9uKG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgXG4gIG9uTXNnKHRoaXMsIGZ1bmN0aW9uKGVtaXQsIHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtaXQobXNnLnR5cGUsIG1zZy5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHRoaXMuZW1pdCkpO1xuXG4gIHRoaXMuZW1pdCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUsIG1zZykge1xuICAgIGVtaXR0ZXIoe3R5cGU6IHR5cGUsIG1lc3NhZ2U6IG1zZ30sIHRydWUpO1xuICB9LmJpbmQoe30sIGVtaXQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEludGVyZmFjZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBFdmVudEludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4vY29uc3VtZXInKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBBIFByb3h5IEJpbmRlciBtYW5hZ2VzIHRoZSBleHRlcm5hbCBpbnRlcmZhY2UsIGFuZCBjcmVhdGVzIG9uZSBvZlxuICogdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBvYmplY3RzIGV4cG9zZWQgYnkgZnJlZWRvbSBlaXRoZXIgYXMgYSBnbG9iYWxcbiAqIHdpdGhpbiBhIHdvcmtlciAvIG1vZHVsZSBjb250ZXh0LCBvciByZXR1cm5lZCBieSBhbiBleHRlcm5hbCBjYWxsIHRvXG4gKiBjcmVhdGUgYSBmcmVlZG9tIHJ1bnRpbWUuXG4gKiBAQ2xhc3MgUHJveHlCaW5kZXJcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBmb3IgdGhlIGFjdGl2ZSBydW50aW1lLlxuICovXG52YXIgUHJveHlCaW5kZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHByb3h5IGZvciBhIGZyZWVkb20gcG9ydCwgYW5kIHJldHVybiBpdCBvbmNlIGxvYWRlZC5cbiAqIEBtZXRob2QgZ2V0RXh0ZXJuYWxcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJveHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RlZmluaXRpb25dIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBBUEkgdG8gZXhwb3NlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmluaXRpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb24uZGVmaW5pdGlvbiBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtCb29sZWFufSBkZWZpbml0aW9uLnByb3ZpZGVzIFdoZXRoZXIgdGhpcyBpcyBhIGNvbnN1bWVyIG9yIHByb3ZpZGVyLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGFjdGl2ZSBwcm94eSBpbnRlcmZhY2UuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRFeHRlcm5hbCA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lLCBkZWZpbml0aW9uKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHByb3h5LCBhcGk7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIGFwaSA9IGRlZmluaXRpb24ubmFtZTtcbiAgICAgIGlmIChkZWZpbml0aW9uLnByb3ZpZGVzKSB7XG4gICAgICAgIHByb3h5ID0gbmV3IFByb3ZpZGVyKGRlZmluaXRpb24uZGVmaW5pdGlvbiwgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEFwaUludGVyZmFjZS5iaW5kKHt9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgIH1cblxuICAgIHByb3h5Lm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICAgIGlmIChhcGkpIHtcbiAgICAgICAgaWZhY2UuYXBpID0gYXBpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHBvcnQ6IHByb3h5LFxuICAgICAgICBleHRlcm5hbDogaWZhY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsocG9ydCwgbmFtZSwgcHJveHkpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBCaW5kIHRoZSBkZWZhdWx0IHByb3h5IGZvciBhIGZyZWVkb20gcG9ydC5cbiAqIEBtZXRob2QgYmluZERlZmF1bHRcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbG9hZGVyIHdpdGggQVBJIGRlZmluaXRpb25zLlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlIHRvIGV4cG9zZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgV2hldGhlciB0aGUgaW50ZXJmYWNlIGlzIGZvciBpbnNpZGUgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIGEgcHJveHkgaW50ZXJmYWNlLlxuICogQHByaXZhdGVcbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmJpbmREZWZhdWx0ID0gZnVuY3Rpb24gKHBvcnQsIGFwaSwgbWFuaWZlc3QsIGludGVybmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIG1ldGFkYXRhID0ge1xuICAgIG5hbWU6IG1hbmlmZXN0Lm5hbWUsXG4gICAgaWNvbjogbWFuaWZlc3QuaWNvbixcbiAgICBkZXNjcmlwdGlvbjogbWFuaWZlc3QuZGVzY3JpcHRpb25cbiAgfSwgZGVmO1xuXG4gIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgZGVmID0gYXBpLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICBkZWYgPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0WydkZWZhdWx0J10sXG4gICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGludGVybmFsICYmIG1hbmlmZXN0LnByb3ZpZGVzICYmXG4gICAgICAgIG1hbmlmZXN0LnByb3ZpZGVzLmluZGV4T2YobWFuaWZlc3RbJ2RlZmF1bHQnXSkgIT09IGZhbHNlKSB7XG4gICAgICBkZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJuYWwpIHtcbiAgICAgIGFwaS5kZWJ1Zy53YXJuKFwiZGVmYXVsdCBBUEkgbm90IHByb3ZpZGVkLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICBcImFyZSB5b3UgbWlzc2luZyBhIHByb3ZpZGVzIGtleSBpbiB5b3VyIG1hbmlmZXN0P1wiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXRFeHRlcm5hbChwb3J0LCAnZGVmYXVsdCcsIGRlZikudGhlbihcbiAgICBmdW5jdGlvbiAobWV0YWRhdGEsIGluZm8pIHtcbiAgICAgIGluZm8uZXh0ZXJuYWwubWFuaWZlc3QgPSBtZXRhZGF0YTtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0uYmluZCh0aGlzLCBtZXRhZGF0YSlcbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZWZpbml0aW9uIGZvciBhIHByb3h5IGdpdmVuIGEgcmVxdWVzdGVkIEFQSSBhbmQgdGhlIG1hbmlmZXN0IG9mXG4gKiB0aGUgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRBUElcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgZm9yIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7QXBpfSBhcGlQcm92aWRlciBUaGUgcmVnaXN0cnkgb2Yga25vd24gQVBJcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIFJlcXVlc3RlZCBBUEkuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIHRvIHVzZSBmb3IgY2FsbHMgdG8gZ2V0RXh0ZXJuYWwuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRBUEkgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGFwaVByb3ZpZGVyLCBhcGkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAobWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVthcGldKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGFwaSxcbiAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVthcGldXG4gICAgfTtcbiAgfSBlbHNlIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgdmFyIGRlZiA9IGFwaVByb3ZpZGVyLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdFsnZGVmYXVsdCddLFxuICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlCaW5kZXI7XG4iLCIvKmdsb2JhbHMgWE1MSHR0cFJlcXVlc3QgKi9cbi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFJlc291cmNlIHJlZ2lzdHJ5IGZvciBGcmVlRE9NLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBSZXNvdXJjZXMsXG4gKiBhbmQgcHJvdmlkZSBsb29rdXAgYW5kIG1pZ3JhdGlvbiBvZiByZXNvdXJjZXMuXG4gKiBAQ2xhc3MgUmVzb3VyY2VcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBsb2dnZXIgdG8gdXNlIGZvciBkZWJ1Z2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFJlc291cmNlID0gZnVuY3Rpb24gKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5maWxlcyA9IHt9O1xuICB0aGlzLnJlc29sdmVycyA9IFt0aGlzLmh0dHBSZXNvbHZlciwgdGhpcy5udWxsUmVzb2x2ZXJdO1xuICB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzID0ge1xuICAgICdodHRwJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2h0dHBzJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZS1leHRlbnNpb24nOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAncmVzb3VyY2UnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnY2hyb21lJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2FwcCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdtYW5pZmVzdCc6IHRoaXMubWFuaWZlc3RSZXRyaWV2ZXJcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc3VyY2UgVVJMIHJlcXVlc3RlZCBmcm9tIGEgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIGFkZHJlc3Mgb2YgdGhlIG1vZHVsZSByZXF1ZXN0aW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuZmlsZXNba2V5XSkge1xuICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc29sdmUobWFuaWZlc3QsIHVybCkudGhlbihmdW5jdGlvbiAoa2V5LCByZXNvbHZlLCBhZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZmlsZXNba2V5XSA9IGFkZHJlc3M7XG4gICAgICAgIC8vZmRvbS5kZWJ1Zy5sb2coJ1Jlc29sdmVkICcgKyBrZXkgKyAnIHRvICcgKyBhZGRyZXNzKTtcbiAgICAgICAgcmVzb2x2ZShhZGRyZXNzKTtcbiAgICAgIH0uYmluZCh0aGlzLCBrZXksIHJlc29sdmUpLCByZWplY3QpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb250ZW50cyBvZiBhIHJlc291cmNlLlxuICogQG1ldGhvZCBnZXRDb250ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBjb250ZW50cy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldENvbnRlbnRzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9wO1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJBc2tlZCB0byBnZXQgY29udGVudHMgb2YgdW5kZWZpbmVkIFVSTC5cIik7XG4gICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50UmV0cmlldmVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YocHJvcCArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoXCI6Ly9cIikgPT09IC0xICYmIHByb3AgPT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0KCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlc1xuICogcmVzb2x2ZXMsIG9yIHJlamVjdHMgYWZ0ZXIgYWxsIHByb21pc2VzIHJlamVjdC4gQ2FuIGJlIHRob3VnaHQgb2YgYXNcbiAqIHRoZSBtaXNzaW5nICdQcm9taXNlLmFueScgLSByYWNlIGlzIG5vIGdvb2QsIHNpbmNlIGVhcmx5IHJlamVjdGlvbnNcbiAqIHByZWVtcHQgYSBzdWJzZXF1ZW50IHJlc29sdXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG1ldGhvZCBGaXJzdFByb21pc2VcbiAqIEBwYXJhbSB7UHJvbWlzZVtdfSBQcm9taXNlcyB0byBzZWxlY3QgZnJvbVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdpdGggYSB2YWx1ZSBmcm9tIGFyZ3VtZW50cy5cbiAqL1xudmFyIGZpcnN0UHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVzb3VyY2UgdXNpbmcga25vd24gcmVzb2x2ZXJzLiBVbmxpa2UgZ2V0LCByZXNvbHZlIGRvZXNcbiAqIG5vdCBjYWNoZSByZXNvbHZlZCByZXNvdXJjZXMuXG4gKiBAbWV0aG9kIHJlc29sdmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlc29sdmU7XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgYWRkcmVzcy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICB1dGlsLmVhY2hSZXZlcnNlKHRoaXMucmVzb2x2ZXJzLCBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2VDb21wYXQocmVzb2x2ZXIuYmluZCh7fSwgbWFuaWZlc3QsIHVybCkpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGZpcnN0UHJvbWlzZShwcm9taXNlcykudGhlbihyZXNvbHZlLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdCgnTm8gcmVzb2x2ZXJzIHRvIGhhbmRsZSB1cmw6ICcgKyBKU09OLnN0cmluZ2lmeShbbWFuaWZlc3QsIHVybF0pKTtcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmVzb2x2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGdldCByZXNvdXJjZXNcbiAqIG5lZWRlZCBieSB0aGUgcnVudGltZS4gQSByZXNvbHZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGZvdXJcbiAqIGFyZ3VtZW50czogdGhlIGFic29sdXRlIG1hbmlmZXN0IG9mIHRoZSByZXF1ZXN0ZXIsIHRoZVxuICogcmVzb3VyY2UgYmVpbmcgcmVxdWVzdGVkLCBhbmQgYSByZXNvbHZlIC8gcmVqZWN0IHBhaXIgdG9cbiAqIGZ1bGZpbGwgYSBwcm9taXNlLlxuICogQG1ldGhvZCBhZGRSZXNvbHZlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXIgVGhlIHJlc29sdmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gIHRoaXMucmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByZXRyaWV2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGxvYWQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmV0cmlldmVyIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBVUkxcbiAqIHRvIHJldHJpZXZlIHdpdGggYSBwcm90b2NvbCB0aGF0IGl0IGlzIGFibGUgdG8gaGFuZGxlLlxuICogQG1ldGhvZCBhZGRSZXRyaWV2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90byBUaGUgcHJvdG9jb2wgdG8gcmVnaXN0ZXIgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmV0cmlldmVyIFRoZSByZXRyaWV2ZXIgdG8gYWRkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuYWRkUmV0cmlldmVyID0gZnVuY3Rpb24gKHByb3RvLCByZXRyaWV2ZXIpIHtcbiAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIG92ZXJyaWRlIGZpbGUgcmV0cmlldmFsIGZvciBcIiArIHByb3RvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm90b10gPSByZXRyaWV2ZXI7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGV4dGVybmFsIHJlc29sdmVycyBhbmQgcmV0cmVhdmVyc1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7XCJwcm90b1wiOlN0cmluZywgXCJyZXNvbHZlclwiOkZ1bmN0aW9uLCBcInJldHJlYXZlclwiOkZ1bmN0aW9ufVtdfVxuICogICAgIHJlc29sdmVycyBUaGUgbGlzdCBvZiByZXRyZWl2ZXJzIGFuZCByZXNvbHZlcnMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgaWYgKCFyZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5yZXNvbHZlcikge1xuICAgICAgdGhpcy5hZGRSZXNvbHZlcihpdGVtLnJlc29sdmVyKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJvdG8gJiYgaXRlbS5yZXRyaWV2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmV0cmlldmVyKGl0ZW0ucHJvdG8sIGl0ZW0ucmV0cmlldmVyKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIFVSTCBpcyBhbiBhYnNvbHV0ZSBVUkwgb2YgYSBnaXZlbiBTY2hlbWUuXG4gKiBAbWV0aG9kIGhhc1NjaGVtZVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBXaGl0ZWxpc3RlZCBwcm90b2NvbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBVUkwgdGhlIFVSTCB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgVVJMIGlzIGFuIGFic29sdXRlIGV4YW1wbGUgb2Ygb25lIG9mIHRoZSBzY2hlbWVzLlxuICovXG5SZXNvdXJjZS5oYXNTY2hlbWUgPSBmdW5jdGlvbiAocHJvdG9jb2xzLCB1cmwpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBwcm90b2NvbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodXJsLmluZGV4T2YocHJvdG9jb2xzW2ldICsgXCI6Ly9cIikgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSAnLi8nIGFuZCAnLi4vJyBmcm9tIGEgVVJMXG4gKiBSZXF1aXJlZCBiZWNhdXNlIENocm9tZSBBcHBzIGZvciBNb2JpbGUgKGNjYSkgZG9lc24ndCB1bmRlcnN0YW5kXG4gKiBYSFIgcGF0aHMgd2l0aCB0aGVzZSByZWxhdGl2ZSBjb21wb25lbnRzIGluIHRoZSBVUkwuXG4gKiBAbWV0aG9kIHJlbW92ZVJlbGF0aXZlUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIG1vZGlmeVxuICogQHJldHVybnMge1N0cmluZ30gdXJsIHdpdGhvdXQgJy4vJyBhbmQgJy4uLydcbiAqKi9cblJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiOi8vXCIpICsgMyxcbiAgICBzdGFjayxcbiAgICB0b1JlbW92ZSxcbiAgICByZXN1bHQ7XG4gIC8vIFJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIC8uL1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTtcbiAgLy9XZWlyZCBidWcgd2hlcmUgaW4gY2NhLCBtYW5pZmVzdCBzdGFydHMgd2l0aCAnY2hyb21lOi8vLy8nXG4gIC8vVGhpcyBmb3JjZXMgdGhlcmUgdG8gb25seSBiZSAyIHNsYXNoZXNcbiAgd2hpbGUgKHVybC5jaGFyQXQoaWR4KSA9PT0gXCIvXCIpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaWR4KSArIHVybC5zbGljZShpZHggKyAxLCB1cmwubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIEFkdmFuY2UgdG8gbmV4dCAvXG4gIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAvLyBSZW1vdmluZyAuLi9cbiAgc3RhY2sgPSB1cmwuc3Vic3RyKGlkeCArIDEpLnNwbGl0KFwiL1wiKTtcbiAgd2hpbGUgKHN0YWNrLmluZGV4T2YoXCIuLlwiKSAhPT0gLTEpIHtcbiAgICB0b1JlbW92ZSA9IHN0YWNrLmluZGV4T2YoXCIuLlwiKTtcbiAgICBpZiAodG9SZW1vdmUgPT09IDApIHtcbiAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnNwbGljZSgodG9SZW1vdmUgLSAxKSwgMik7XG4gICAgfVxuICB9XG4gIFxuICAvL1JlYnVpbGQgc3RyaW5nXG4gIHJlc3VsdCA9IHVybC5zdWJzdHIoMCwgaWR4KTtcbiAgZm9yIChpZHggPSAwOyBpZHggPCBzdGFjay5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgcmVzdWx0ICs9IFwiL1wiICsgc3RhY2tbaWR4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIFVSTHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHN0YW5kYXJkIEhUVFAgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIGh0dHBSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5odHRwUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJjaHJvbWVcIiwgXCJjaHJvbWUtZXh0ZW5zaW9uXCIsIFwicmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICBcImFwcFwiXSxcbiAgICBkaXJuYW1lLFxuICAgIHByb3RvY29sSWR4LFxuICAgIHBhdGhJZHgsXG4gICAgcGF0aCxcbiAgICBiYXNlLFxuICAgIHJlc3VsdDtcblxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgdXJsKSkge1xuICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKHVybCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmVqZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCBtYW5pZmVzdCkgJiZcbiAgICAgIHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSkge1xuICAgIGRpcm5hbWUgPSBtYW5pZmVzdC5zdWJzdHIoMCwgbWFuaWZlc3QubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICBwcm90b2NvbElkeCA9IGRpcm5hbWUuaW5kZXhPZihcIjovL1wiKTtcbiAgICBwYXRoSWR4ID0gcHJvdG9jb2xJZHggKyAzICsgZGlybmFtZS5zdWJzdHIocHJvdG9jb2xJZHggKyAzKS5pbmRleE9mKFwiL1wiKTtcbiAgICBwYXRoID0gZGlybmFtZS5zdWJzdHIocGF0aElkeCk7XG4gICAgYmFzZSA9IGRpcm5hbWUuc3Vic3RyKDAsIHBhdGhJZHgpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyB1cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgoYmFzZSArIHBhdGggKyBcIi9cIiArIHVybCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3QoKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGFyZSBzZWxmLWRlc2NyaWJpbmcuXG4gKiBAbWV0aG9kIG51bGxSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5udWxsUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJtYW5pZmVzdFwiXTtcbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG1hbmlmZXN0IGNvbnRlbnQgZnJvbSBhIHNlbGYtZGVzY3JpcHRpdmUgbWFuaWZlc3QgdXJsLlxuICogVGhlc2UgdXJscyBhcmUgdXNlZCB0byByZWZlcmVuY2UgYSBtYW5pZmVzdCB3aXRob3V0IHJlcXVpcmluZyBzdWJzZXF1ZW50LFxuICogcG90ZW50aWFsbHkgbm9uLUNPUlMgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIG1hbmlmZXN0UmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubWFuaWZlc3RSZXRyaWV2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gbWFuaWZlc3Quc3Vic3RyKDExKTtcbiAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJJbnZhbGlkIG1hbmlmZXN0IFVSTCByZWZlcmVuY2VkOlwiICsgbWFuaWZlc3QpO1xuICAgIHJlamVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHJlc291cmNlIGNvbnRlbnRzIHVzaW5nIGFuIFhIUiByZXF1ZXN0LlxuICogQG1ldGhvZCB4aHJSZXRyaWV2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byBmZXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUueGhyUmV0cmlldmVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciByZWYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAocmVmLnJlYWR5U3RhdGUgPT09IDQgJiYgcmVmLnJlc3BvbnNlVGV4dCkge1xuICAgICAgcmVzb2x2ZShyZWYucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiICsgdXJsICsgXCI6IFwiICsgcmVmLnN0YXR1cyk7XG4gICAgICByZWplY3QocmVmLnN0YXR1cyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcmVzb2x2ZSwgcmVqZWN0KSwgZmFsc2UpO1xuICByZWYub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIHJlZi5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gIHJlZi5zZW5kKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuIiwiLypnbG9iYWxzIGNyeXB0bywgV2ViS2l0QmxvYkJ1aWxkZXIsIEJsb2IsIFVSTCAqL1xuLypnbG9iYWxzIHdlYmtpdFVSTCwgVWludDhBcnJheSwgVWludDE2QXJyYXksIEFycmF5QnVmZmVyICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLGJyb3dzZXI6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cblxuLyoqXG4gKiBVdGlsaXR5IG1ldGhvZCB1c2VkIHdpdGhpbiB0aGUgZnJlZWRvbSBMaWJyYXJ5LlxuICogQGNsYXNzIHV0aWxcbiAqIEBzdGF0aWNcbiAqL1xudmFyIHV0aWwgPSB7fTtcblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgYmFja3dhcmRzLiBJZiB0aGUgZnVuY1xuICogcmV0dXJucyBhIHRydWUgdmFsdWUsIGl0IHdpbGwgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICogQG1ldGhvZCBlYWNoUmV2ZXJzZVxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hSZXZlcnNlID0gZnVuY3Rpb24oYXJ5LCBmdW5jKSB7XG4gIGlmIChhcnkpIHtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSBhcnkubGVuZ3RoIC0gMTsgaSA+IC0xOyBpIC09IDEpIHtcbiAgICAgIGlmIChhcnlbaV0gJiYgZnVuYyhhcnlbaV0sIGksIGFyeSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaGFzUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmhhc1Byb3AgPSBmdW5jdGlvbihvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufTtcblxuLyoqXG4gKiBDeWNsZXMgb3ZlciBwcm9wZXJ0aWVzIGluIGFuIG9iamVjdCBhbmQgY2FsbHMgYSBmdW5jdGlvbiBmb3IgZWFjaFxuICogcHJvcGVydHkgdmFsdWUuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLCB0aGVuIHRoZVxuICogaXRlcmF0aW9uIGlzIHN0b3BwZWQuXG4gKiBAbWV0aG9kIGVhY2hQcm9wXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZWFjaFByb3AgPSBmdW5jdGlvbihvYmosIGZ1bmMpIHtcbiAgdmFyIHByb3A7XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoZnVuYyhvYmpbcHJvcF0sIHByb3ApKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTaW1wbGUgZnVuY3Rpb24gdG8gbWl4IGluIHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgaW50byB0YXJnZXQsXG4gKiBidXQgb25seSBpZiB0YXJnZXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcHJvcGVydHkgb2YgdGhlIHNhbWUgbmFtZS5cbiAqIFRoaXMgaXMgbm90IHJvYnVzdCBpbiBJRSBmb3IgdHJhbnNmZXJyaW5nIG1ldGhvZHMgdGhhdCBtYXRjaFxuICogT2JqZWN0LnByb3RvdHlwZSBuYW1lcywgYnV0IHRoZSB1c2VzIG9mIG1peGluIGhlcmUgc2VlbSB1bmxpa2VseSB0b1xuICogdHJpZ2dlciBhIHByb2JsZW0gcmVsYXRlZCB0byB0aGF0LlxuICogQG1ldGhvZCBtaXhpblxuICogQHN0YXRpY1xuICovXG51dGlsLm1peGluID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UsIGZvcmNlKSB7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICBpZiAoZm9yY2UgfHwgIXV0aWwuaGFzUHJvcCh0YXJnZXQsIHByb3ApKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBJRC5cbiAqIEBtZXRob2QgZ2V0SWRcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3VpZCA9ICdndWlkJyxcbiAgICAgIGRvbWFpbiA9IDEyLFxuICAgICAgYnVmZmVyO1xuICAvLyBDaHJvbWUgLyBGaXJlZm94LlxuICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRvbWFpbik7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgIHV0aWwuZWFjaFJldmVyc2UoYnVmZmVyLCBmdW5jdGlvbihuKSB7XG4gICAgICBndWlkICs9ICctJyArIG47XG4gICAgfSk7XG4gIC8vIE5vZGVcbiAgfSBlbHNlIGlmICh0eXBlb2YgY3J5cHRvID09PSAnb2JqZWN0JyAmJiBjcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBidWZmZXIgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoZG9tYWluKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChkb21haW4gPiAwKSB7XG4gICAgICBndWlkICs9ICctJyArIE1hdGguY2VpbCgyNTUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgIGRvbWFpbiAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBndWlkO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYSBzdHJpbmcgaW50byBhIGJpbmFyeSBhcnJheSBidWZmZXIsIGJ5IHRyZWF0aW5nIGVhY2ggY2hhcmFjdGVyIGFzIGFcbiAqIHV0ZjE2IGVuY29kZWQgY2hhcmFjdGVyIC0gdGhlIG5hdGl2ZSBqYXZhc2NyaXB0IGVuY29kaW5nLlxuICogQG1ldGhvZCBzdHIyYWJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xudXRpbC5zdHIyYWIgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGgsXG4gICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoICogMiksIC8vIDIgYnl0ZXMgZm9yIGVhY2ggY2hhclxuICAgICAgYnVmZmVyVmlldyA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpLFxuICAgICAgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmZmVyVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBidWZmZXIgY29udGFpbmluZyBhbiBlbmNvZGVkIHN0cmluZyBiYWNrIGludG8gYSBzdHJpbmcuXG4gKiBAbWV0aG9kIGFiMnN0clxuICogQHN0YXRpY1xuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gdW53cmFwLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGRlY29kZWQgYnVmZmVyLlxuICovXG51dGlsLmFiMnN0ciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDE2QXJyYXkoYnVmZmVyKSk7XG59O1xuXG4vKipcbiAqIEFkZCAnb24nIGFuZCAnZW1pdCcgbWV0aG9kcyB0byBhbiBvYmplY3QsIHdoaWNoIGFjdCBhcyBhIGxpZ2h0IHdlaWdodFxuICogZXZlbnQgaGFuZGxpbmcgc3RydWN0dXJlLlxuICogQGNsYXNzIGhhbmRsZUV2ZW50c1xuICogQHN0YXRpY1xuICovXG51dGlsLmhhbmRsZUV2ZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgZXZlbnRTdGF0ZSA9IHtcbiAgICBERUJVR19CQUNLUkVGOiBvYmosXG4gICAgbXVsdGlwbGU6IHt9LFxuICAgIG1heWJlbXVsdGlwbGU6IFtdLFxuICAgIHNpbmdsZToge30sXG4gICAgbWF5YmVzaW5nbGU6IFtdXG4gIH0sIGZpbHRlciwgcHVzaDtcblxuICAvKipcbiAgICogRmlsdGVyIGEgbGlzdCBiYXNlZCBvbiBhIHByZWRpY2F0ZS4gVGhlIGxpc3QgaXMgZmlsdGVyZWQgaW4gcGxhY2UsIHdpdGhcbiAgICogc2VsZWN0ZWQgaXRlbXMgcmVtb3ZlZCBhbmQgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgbWV0aG9kIHRvIHJ1biBvbiBlYWNoIGl0ZW0uXG4gICAqIEByZXR1cm5zIHtBcnJheX0gU2VsZWN0ZWQgaXRlbXNcbiAgICovXG4gIGZpbHRlciA9IGZ1bmN0aW9uKGxpc3QsIHByZWRpY2F0ZSkge1xuICAgIHZhciByZXQgPSBbXSwgaTtcblxuICAgIGlmICghbGlzdCB8fCAhbGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSB7XG4gICAgICAgIHJldC5wdXNoKGxpc3Quc3BsaWNlKGksIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogRW5xdWV1ZSBhIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgdHlwZS5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIHF1ZXVlICgnc2luZ2xlJyBvciAnbXVsdGlwbGUnKSB0byBxdWV1ZSBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gZW5xdWV1ZS5cbiAgICovXG4gIHB1c2ggPSBmdW5jdGlvbih0bywgdHlwZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1snbWF5YmUnICsgdG9dLnB1c2goW3R5cGUsIGhhbmRsZXJdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXNbdG9dW3R5cGVdKSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXSA9IFtoYW5kbGVyXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYW4gZXZlbnQgb2YgYSBzcGVjaWZpYyB0eXBlIG9jY3Vycy5cbiAgICogQG1ldGhvZCBvblxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZWdpc3RlciBhZ2FpbnN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBldmVudCBvY2N1cnMuXG4gICAqL1xuICBvYmoub24gPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ211bHRpcGxlJyk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGUgdGhlIG5leHQgdGltZSBhbiBldmVudCBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25jZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byB3YWl0IGZvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gdGhlIG5leHQgdGltZSBhIG1hdGNoaW5nIGV2ZW50XG4gICAqICAgICBpcyByYWlzZWQuXG4gICAqL1xuICBvYmoub25jZSA9IHB1c2guYmluZChldmVudFN0YXRlLCAnc2luZ2xlJyk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgb24gdGhpcyBvYmplY3QuXG4gICAqIEBtZXRob2QgZW1pdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByYWlzZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50LlxuICAgKi9cbiAgb2JqLmVtaXQgPSBmdW5jdGlvbih0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGksIHF1ZXVlO1xuICAgIC8vIE5vdGUgdGhhdCByZWdpc3RlcmVkIGhhbmRsZXJzIG1heSBzdG9wIGV2ZW50cyBvbiB0aGUgb2JqZWN0LCBieSBjYWxsaW5nXG4gICAgLy8gdGhpcy5vZmYoKS4gQXMgc3VjaCwgdGhlIHByZXNlbmNlIG9mIHRoZXNlIGtleXMgbXVzdCBiZSBjaGVja2VkIG9uIGVhY2hcbiAgICAvLyBpdGVyYXRpb24gb2YgdGhlIHJlbGV2YW50IGxvb3BzLlxuICAgIGZvciAoaSA9IDA7IHRoaXMubXVsdGlwbGVbdHlwZV0gJiZcbiAgICAgICAgIGkgPCB0aGlzLm11bHRpcGxlW3R5cGVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZVt0eXBlXVtpXShkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zaW5nbGVbdHlwZV0pIHtcbiAgICAgIHF1ZXVlID0gdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgICB0aGlzLnNpbmdsZVt0eXBlXSA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHF1ZXVlW2ldKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYXliZW11bHRpcGxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tYXliZW11bHRpcGxlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHRoaXMubWF5YmVtdWx0aXBsZVtpXVsxXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gdGhpcy5tYXliZXNpbmdsZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVzaW5nbGVbaV1bMF0odHlwZSwgZGF0YSkpIHtcbiAgICAgICAgcXVldWUgPSB0aGlzLm1heWJlc2luZ2xlLnNwbGljZShpLCAxKTtcbiAgICAgICAgcXVldWVbMF1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQoZXZlbnRTdGF0ZSk7XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gICAqIEBtZXRob2Qgb2ZmXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbj99IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcmVtb3ZlLlxuICAgKi9cbiAgb2JqLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLkRFQlVHX0JBQ0tSRUY7XG4gICAgICB0aGlzLm11bHRpcGxlID0ge307XG4gICAgICB0aGlzLm1heWJlbXVsdGlwbGUgPSBbXTtcbiAgICAgIHRoaXMuc2luZ2xlID0ge307XG4gICAgICB0aGlzLm1heWJlc2luZ2xlID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZXNpbmdsZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVswXSA9PT0gdHlwZSAmJiAoIWhhbmRsZXIgfHwgaXRlbVsxXSA9PT0gaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLm1heWJlbXVsdGlwbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBkZWxldGUgdGhpcy5tdWx0aXBsZVt0eXBlXTtcbiAgICAgIGRlbGV0ZSB0aGlzLnNpbmdsZVt0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyKHRoaXMubXVsdGlwbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLnNpbmdsZVt0eXBlXSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xufTtcblxuLyoqXG4gKiBXaGVuIHJ1biB3aXRob3V0IGEgd2luZG93LCBvciBzcGVjaWZpY2FsbHkgcmVxdWVzdGVkLlxuICogTm90ZTogRGVjbGFyYXRpb24gY2FuIGJlIHJlZGVmaW5lZCBpbiBmb3JjZU1vZHVsZUNvbnRleHQgYmVsb3cuXG4gKiBAbWV0aG9kIGlzTW9kdWxlQ29udGV4dFxuICogQGZvciB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbi8qIUBwcmVzZXJ2ZSBTdGFydE1vZHVsZUNvbnRleHREZWNsYXJhdGlvbiovXG51dGlsLmlzTW9kdWxlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBCbG9iIG9iamVjdCBvZiBhIHN0cmluZy5cbiAqIFBvbHlmaWxscyBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggZG9uJ3QgaGF2ZSBhIGN1cnJlbnQgQmxvYiBjb25zdHJ1Y3RvciwgbGlrZVxuICogcGhhbnRvbWpzLlxuICogQG1ldGhvZCBnZXRCbG9iXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0QmxvYiA9IGZ1bmN0aW9uKGRhdGEsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBXZWJLaXRCbG9iQnVpbGRlcigpO1xuICAgIGJ1aWxkZXIuYXBwZW5kKGRhdGEpO1xuICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtkYXRhXSwge3R5cGU6IHR5cGV9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBGaW5kIGFsbCBzY3JpcHRzIG9uIHRoZSBnaXZlbiBwYWdlLlxuICogQG1ldGhvZCBzY3JpcHRzXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuc2NyaXB0cyA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICByZXR1cm4gZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSovXG5cbnZhciBwcm92aWRlcnMgPSBbXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuZWNobycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmNvbnNvbGUnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudmlldycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUud2Vic29ja2V0JyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyJylcbl07XG5cbmZ1bmN0aW9uIGdldEZyZWVkb21TY3JpcHQoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHNjcmlwdDtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgLy8gTmV3IGJyb3dzZXIgQVBJXG4gICAgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIiAmJlxuICAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGVkXCIpIHtcbiAgICAvLyBJbmNsdWRlZCBpbiBIVE1MIG9yIHRocm91Z2ggZG9jdW1lbnQud3JpdGVcbiAgICBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdCA9IHNjcmlwdFtzY3JpcHQubGVuZ3RoIC0gMV0uc3JjO1xuICB9IGVsc2Uge1xuICAgIC8vIExvYWRlZCB0aHJvdWdoIGRvbSBtYW5pcHVsYXRpb24gb3IgYXN5bmMuXG4gICAgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwic2NyaXB0W3NyYyo9J2ZyZWVkb20uanMnXSxzY3JpcHRbc3JjKj0nZnJlZWRvbS0nXVwiXG4gICAgKTtcbiAgICBpZiAoc2NyaXB0Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBkZXRlcm1pbmUgZnJlZWRvbS5qcyBzY3JpcHQgdGFnLlwiKTtcbiAgICB9XG4gICAgc2NyaXB0ID0gc2NyaXB0WzBdLnNyYztcbiAgfVxuICByZXR1cm4gc2NyaXB0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LmZyZWVkb20gPSByZXF1aXJlKCcuLi9lbnRyeScpLmJpbmQoe30sIHtcbiAgICBsb2NhdGlvbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgcG9ydFR5cGU6IHJlcXVpcmUoJy4uL2xpbmsvd29ya2VyJyksXG4gICAgc291cmNlOiBnZXRGcmVlZG9tU2NyaXB0KCksXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMsXG4gICAgb2F1dGg6IFtcbiAgICAgIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5sb2NhbHBhZ2VhdXRoJyksXG4gICAgICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvb2F1dGgvb2F1dGgucmVtb3RlcGFnZWF1dGgnKVxuICAgIF1cbiAgfSk7XG59IGVsc2Uge1xuICByZXF1aXJlKCcuLi9lbnRyeScpKHtcbiAgICBpc01vZHVsZTogdHJ1ZSxcbiAgICBwb3J0VHlwZTogcmVxdWlyZSgnLi4vbGluay93b3JrZXInKSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgICBnbG9iYWw6IGdsb2JhbFxuICB9KTtcbn1cbiJdfQ==