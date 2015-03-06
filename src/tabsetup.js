// SEE: https://bitbucket.org/sparklinlabs/tab-strip/src

(function() {
  var i, j, len, pane, ref, tab, tabLabel, tabStrip;
  
  tabStrip = new TabStrip(document.querySelector('.tabs-container'));
  
  ref = document.querySelectorAll('.panes > div');
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    pane = ref[i];
    tab = document.createElement('li');
    tab.dataset.pane = "pane-" + (i + 1);
    tabLabel = document.createElement('span');
    tabLabel.classList.add('label');
    tabLabel.textContent = "Pane " + (i + 1);
    tab.appendChild(tabLabel);
    tabStrip.tabsRoot.appendChild(tab);
    if (i === 0) {
      tab.classList.add('active');
      document.querySelector(".panes ." + tab.dataset.pane).classList.add('active');
    }
  }
  
  tabStrip.on('activateTab', function(tab) {
    tabStrip.tabsRoot.querySelector('.active').classList.remove('active');
    tab.classList.add('active');
    document.querySelector('.panes > .active').classList.remove('active');
    document.querySelector(".panes ." + tab.dataset.pane).classList.add('active');
  });
  
}).call(this);
