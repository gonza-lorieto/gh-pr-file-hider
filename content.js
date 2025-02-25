document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get("hiddenFiles", ({ hiddenFiles }) => {
    if (!hiddenFiles) return;

    hiddenFiles.forEach((name) => {
      document
        .querySelectorAll(`[id$="${name}-viewed-file"]`)
        .forEach((cb) => cb.click());
    });
  });
});
