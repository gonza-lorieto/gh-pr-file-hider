document.addEventListener("DOMContentLoaded", () => {
  // Load saved files on popup open
  chrome.storage.sync.get("hiddenFiles", ({ hiddenFiles }) => {
    if (hiddenFiles) {
      document.getElementById("fileList").value = hiddenFiles.join("\n");
    }
  });
});

document.getElementById("save").addEventListener("click", () => {
  const files = document
    .getElementById("fileList")
    .value.split("\n")
    .map((f) => f.trim())
    .filter(Boolean);
  chrome.storage.sync.set({ hiddenFiles: files });
});

document.getElementById("hideFiles").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: hideFiles,
    });
  });
});

function hideFiles() {
  chrome.storage.sync.get("hiddenFiles", ({ hiddenFiles }) => {
    if (!hiddenFiles) return;
    hiddenFiles.forEach((name) => {
      document
        .querySelectorAll(`[id$="${name}-viewed-file"]`)
        .forEach((cb) => cb.click());
    });
  });
}
