// SEE: https://bitbucket.org/sparklinlabs/tab-strip/src

var numTabs = 0;
var tabStrip = new TabStrip(document.querySelector('.tabs-container'));

function redrawTabs() {
  var i, j, len, pane, ref, tab, tabLabel;
  tabStrip.tabsRoot.innerHTML = '';  // reset to blank
  ref = document.querySelectorAll('.panes > div');
  numTabs = ref.length;
  for (i = j = 0, len = numTabs; j < len; i = ++j) {
    pane = ref[i];
    tab = document.createElement('li');
    tab.dataset.pane = 'pane-' + (i + 1);
    tabLabel = document.createElement('span');
    tabLabel.classList.add('label');
    tabLabel.textContent = pane.id;
    tab.appendChild(tabLabel);
    tabStrip.tabsRoot.appendChild(tab);
    if (i === 0) {
      tab.classList.add('active');
      document.querySelector('.panes .' + tab.dataset.pane).classList.add('active');
    }
  }
  tabStrip.on('activateTab', function(tab) {
    tabStrip.tabsRoot.querySelector('.active').classList.remove('active');
    tab.classList.add('active');
    document.querySelector('.panes > .active').classList.remove('active');
    document.querySelector('.panes .' + tab.dataset.pane).classList.add('active');
  });
}

function addTab(uid) {
  // Add a tab to chat with a new user (uid)
  if (!document.getElementById(uid)) {
    var newtab = document.createElement('div');
    newtab.className = 'pane-' + (numTabs + 1);
    newtab.id = uid;
    // TODO - make this look nicer
    newtab.innerHTML = "<div style='clear:both; height:15px;'></div>" +
      "<section>" +
      "<div id='messagelist' class='text'></div>" +
      "<input id='msg-input' type='text' placeholder='Type message here'/>" +
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
      tabStrip._events.activateTab[0](tabs[i]);
    }
  }
}

redrawTabs();
