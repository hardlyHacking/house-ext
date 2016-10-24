/*
 * Generic utility functions for URLs
 */

function getTabUrl() {
  chrome.tabs.getSelected(null, (tab) => {
    return tab.url;
  });
}

function isZillow() {
  const zillowRegex = /(?:https?:\/\/)?(?:www)?zillow.com\/?(?:.*)?/;
  return zillowRegex.test(getTabUrl());
}
