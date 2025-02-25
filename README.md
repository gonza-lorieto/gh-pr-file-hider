# GitHub PR File Hider

## Overview

This Chrome extension allows you to automatically mark specific files as `Viewed` in GitHub Pull Request pages under the `Files Changed` tab. You can configure a list of filenames to hide, which will be stored and applied whenever you use the extension.


## Features

Store a list of filenames to automatically mark as `Viewed`
Manually trigger file hiding via the extension popup.
Persistent storage using Chrome's storage.sync.
Works on GitHub PR pages (`/pull/*/files`).


## Installation

TBD


## Usage

Open a GitHub Pull Request page in the Files Changed tab.
Click the extension icon in Chrome.
Enter filenames (one per line) in the textarea and click Save.
Click Hide Files to mark them as `Viewed`


## Notes

The extension targets elements with an ID ending in -viewed-file.
Auto-hiding on page load can be enabled using a background script.
Use chrome.storage.sync for synced storage across devices.

## License

This project is open-source and available for modification.
