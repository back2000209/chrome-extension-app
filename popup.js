// popup.js (MV3)

document.getElementById('start').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    const url = document.getElementById('video-url').value;

    chrome.scripting.executeScript(
      {
        target: { tabId },
        files: ['vendor/ffmpeg.min.js', 'vendor/ffmpeg-core.js', 'transcode.js'],
      },
      () => {
        chrome.tabs.sendMessage(tabId, { action: 'transcode', url });
      }
    );
  });
});

document.getElementById('video-url').value = chrome.runtime.getURL('assets/video.flv');
