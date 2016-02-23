/*globals freedom, console, require*/

/**
 * Bind handlers on startup
 */
function start(ChatClient) {
  var chatClient = new ChatClient(),
  // If messages are going to a specific user, store that here.
      activeBuddy,
      buddylist,
      buddytabs = {},
      input,
      publicKey;

  //

  function clearLog() {
    var log = document.getElementById('statuslog');
    log.innerHTML = '';
  }

  function append(container, elt) {
    var br;
    //Trim old messages
    if (container.childNodes) {
      while (container.childNodes.length > 500) {
        container.removeChild(container.firstChild);
      }
    }
    container.appendChild(elt);
    br = document.createElement('br');
    container.appendChild(br);
    br.scrollIntoView();
  }

  function makeDisplayString(buddylistEntry) {
    return buddylistEntry.name &&
      buddylistEntry.name !== buddylistEntry.userId ?
      buddylistEntry.name + ' (' + buddylistEntry.userId + ')' :
      buddylistEntry.userId;
  }

  function redrawBuddylist() {
    var onClick = function (buddylistEntry, child) {
      activeBuddy = buddylistEntry.userId;
      console.log('Messages will be sent to: ' + activeBuddy);
      addOrActivateTab(activeBuddy);
      redrawBuddylist();
    },
        buddylistDiv = document.getElementById('buddylist'),
        userId,
        child;

    // Remove all elements in there now
    buddylistDiv.innerHTML = '<b>Buddylist</b>';

    // Create a new element for each buddy
    for (userId in buddylist) {
      if (buddylist.hasOwnProperty(userId)) {
        child = document.createElement('div');
        if (activeBuddy === userId) {
          child.innerHTML = '<i>' + makeDisplayString(buddylist[userId]) +
            '</i>';
        } else {
          child.innerHTML = makeDisplayString(buddylist[userId]);
        }
        // If the user clicks on a buddy,
        // change our current destination for messages
        child.addEventListener('click',
                               onClick.bind(this, buddylist[userId], child),
                               true);
        buddylistDiv.appendChild(child);
      }
    }
  }

  // on public key generation, do stuff
  chatClient.on('export-publicKey', function (userPublicKey) {
    publicKey = userPublicKey;
    document.getElementById('pgpkey').innerHTML =
      '<b>Your PGP Public Key is:</b><br>' + '<pre>' + publicKey + '</pre>';
  });

  // on changes to the buddylist, redraw entire buddylist
  chatClient.on('recv-buddylist', function (val) {
    buddylist = val;
    redrawBuddylist();
  });

  // On new messages, append it to our message log
  chatClient.on('recv-message', function (data) {
    // Show the name instead of the userId, if it's available.
    var userId = data.from.userId,
        displayName = buddylist[userId].name || userId,
        message = displayName + ": " + data.message;
    activeBuddy = userId;
    addOrActivateTab(userId);
    append(document.getElementById('msglist-' + userId),
           document.createTextNode(message));
  });

  // On new messages, append it to our message log
  chatClient.on('recv-err', function (data) {
    document.getElementById('uid').textContent = "Error: " + data.message;
  });

  // Display our own userId when we get it
  chatClient.on('recv-uid', function (data) {
    document.getElementById('uid').textContent = "Logged in as: " + data;
  });

  // Display the current status of our connection to the Social provider
  chatClient.on('recv-status', function (msg) {
    if (msg && msg === 'online') {
      //document.getElementById('msg-input').disabled = false;
      //msg += ' - click a buddy to start chatting!';
    } else {
      //document.getElementById('msg-input').disabled = true;
    }
    clearLog();
    var elt = document.createElement('b');
    elt.appendChild(document.createTextNode('Status: ' + msg));
    append(document.getElementById('statuslog'), elt);
  });

  function setupChat(uid) {
    input = document.getElementById('msginput-' + uid);
    msglist = document.getElementById('msglist-' + uid);
    input.onkeydown = function (evt) {
      if (evt.keyCode === 13) {
        var text = input.value;
        input.value = "";
        append(msglist, document.createTextNode("You: " + text));
        chatClient.send(activeBuddy, text);
      }
    };
    // Timeout for focus to work w/tab redrawing
    setTimeout(function () { input.focus(); }, 100);
  }

  // SEE: https://bitbucket.org/sparklinlabs/tab-strip/src

  var numTabs = 0;
  var tabStrip = new TabStrip(document.querySelector('.tabs-container'));

  function redrawTabs() {
    var pane, ref, tab, tabLabel, tabX;
    var onClick = function (i) {
      // Activate the status tab - TODO something smarter
      tabStrip.emit('activateTab', tabStrip.tabsRoot.childNodes[0]);
      tabStrip.emit('closeTab', tabStrip.tabsRoot.childNodes[i]);
      redrawTabs();
    };
    tabStrip.tabsRoot.innerHTML = '';  // reset to blank
    ref = document.querySelectorAll('.panes > div');
    numTabs = ref.length;
    for (var i = 0; i < numTabs; i++) {
      pane = ref[i];
      tab = document.createElement('li');
      tab.dataset.pane = 'pane-' + (i + 1);
      if (i > 0) {
        // Add X mark to close tabs, except first status tab
        tabX = document.createElement('span');
        tabX.textContent = '\u2612';  // ballot box with X
        tabX.addEventListener('click', onClick.bind(this, i), true);
        tab.appendChild(tabX); 
      }
      tabLabel = document.createElement('span');
      tabLabel.classList.add('label');
      tabLabel.textContent = pane.id;
      tab.appendChild(tabLabel);
      tabStrip.tabsRoot.appendChild(tab);
      if (i === 0) {
        tab.classList.add('active');
        document.querySelector('.panes .' + tab.dataset.pane)
          .classList.add('active');
      } else {
        // Remove active class from body of any other tab
        // TODO consider refactoring
        document.querySelector('.panes .' + tab.dataset.pane)
          .classList.remove('active');
      }
    }
  }

  tabStrip.on('activateTab', function(tab) {
    tabStrip.tabsRoot.querySelector('.active').classList.remove('active');
    tab.classList.add('active');
    document.querySelector('.panes > .active').classList.remove('active');
    document.querySelector('.panes .' + tab.dataset.pane)
      .classList.add('active');
    // Need to figure out which buddy is now active
    activeBuddy = buddytabs[tab.getAttribute('data-pane')];
    redrawBuddylist();
    if (activeBuddy) {
      setupChat(activeBuddy);
    }
  });

  tabStrip.on('closeTab', function(tab) {
    // Remove the tab top
    tabStrip.tabsRoot.removeChild(tab);
    // Remove the tab body
    var body = document.querySelector('.panes .' + tab.dataset.pane);
    document.getElementById('panelist').removeChild(body);
  });


  function addOrActivateTab(uid) {
    // Add a tab to chat with a new user (uid)
    if (!document.getElementById(uid)) {
      var newtab = document.createElement('div');
      newtab.className = 'pane-' + (numTabs + 1);
      buddytabs[newtab.className] = uid;
      newtab.id = uid;
      // TODO - make this look nicer
      newtab.innerHTML = "<div style='clear:both; height:15px;'></div>" +
        "<section>" +
        "<div id='msglist-" + uid + "' class='text'></div>" +
        "<input id='msginput-" + uid +
        "' type='text' placeholder='Type message here'/>" +
        "</section>" +
        "</div>";
      document.getElementById('panelist').appendChild(newtab);
      redrawTabs();
    }
    // Activate the new tab
    var addedtab = document.getElementById(uid);
    var tabs = document.getElementsByTagName('li');
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute('data-pane') === addedtab.className) {
        tabStrip.emit('activateTab', tabs[i]);
      }
    }
  }

  redrawTabs();  // for first load
}

window.onload = function () {
  freedom('freedom-securechat.json').then(start);
};
