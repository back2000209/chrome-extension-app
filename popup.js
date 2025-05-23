// popup.js (MV3)

document.getElementById('start').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = document.getElementById('video-url').value;
    chrome.tabs.sendMessage(tabs[0].id, { action: 'transcode', url });
  });
});

document.getElementById('video-url').value = chrome.runtime.getURL('assets/video.flv');
