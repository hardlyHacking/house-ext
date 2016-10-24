$(document).ready(() => {
  // Initialize nav dropdown
  $('.dropdown-button').dropdown();

  // Show main body list with empty input
  Materialize.showStaggeredList('#main-list');
  // Hide main verdic div until non-empty input
  $('div.verdict').hide();

  // URL handling to open in new tabs
  $('#code-link').on('click', () => {
    const codeUrl="https://github.com/hardlyHacking/house-ext"
    chrome.tabs.create({url: codeUrl})
    return false;
  });

  $('#onepercent-link').on('click', () => {
    const onePercentRuleUrl = 'http://www.investopedia.com/terms/o/one-percent-rule.asp';
    chrome.tabs.create({url: onePercentRuleUrl});
    return false;
  });

  $('#caprate-link').on('click', () => {
    const capRateUrl = 'http://www.propertymetrics.com/blog/2013/06/03/cap-rate/';
    chrome.tabs.create({url: capRateUrl});
    return false;
  });

  $('#cashoncash-link').on('click', () => {
    const cashOnCashUrl = 'http://www.propertymetrics.com/blog/2013/11/14/cash-on-cash-return/';
    chrome.tabs.create({url: cashOnCashUrl});
    return false;
  });

  // Main logic for Zillow
  if (isZillow()) {
    alert('on zillow');
  }
});