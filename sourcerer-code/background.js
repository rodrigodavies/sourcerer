// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url == "http://www.nejm.org/doi/full/10.1056/NEJMoa1114058") {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "1.html"});
    // chrome.pageAction.onClicked.addListener(function(tabs.Tab tab) {
    //	chrome.tabs.create({url: "1.html"});
    // });
  }
  else if (tab.url == 'http://www.nejm.org/doi/full/10.1056/NEJMoa1203572') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "2.html"});
  }
  else if (tab.url == 'http://www.nejm.org/doi/full/10.1056/NEJMoa1201964') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "3.html"});
  }
  else if (tab.url == 'http://jama.jamanetwork.com/article.aspx?articleid=1380451') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "4copy2.html"});
  }
  else if (tab.url == 'http://jama.jamanetwork.com/article.aspx?articleid=1357266') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "5.html"});
  }
  else if (tab.url == 'http://jama.jamanetwork.com/article.aspx?articleid=1352112') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "6.html"});
  }
  else if (tab.url == 'http://www.sciencedirect.com/science/article/pii/S0140673612612276') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "7.html"});
  }
  else if (tab.url == 'http://www.sciencedirect.com/science/article/pii/S0140673612613361') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "8.html"});
  }
  else if (tab.url == 'http://www.sciencedirect.com/science/article/pii/S0140673612612690') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "9.html"});
  }
  else if (tab.url == 'http://www.bmj.com/content/345/bmj.e6231') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "10.html"});
  }
  else if (tab.url == 'http://www.bmj.com/content/345/bmj.e5839') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "11.html"});
  }
  else if (tab.url == 'http://www.bmj.com/content/345/bmj.e4388') {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setPopup({tabId: tabId, popup: "12.html"});
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

// on click, fetch corresponding html page
// chrome.browserAction.onClicked.addListener(function() {
//   chrome.windows.create({'url': '1.html', 'type': 'popup'}, function(window) {
//   });
// });