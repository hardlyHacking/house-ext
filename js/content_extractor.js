chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === 'report_back') {
    sendResponse(document.all[0].innerHTML);
  }
});