
const uninstallUrl = 'https://justiceo.github.io/xtension/uninstall.html';
const welcomeUrl = 'https://docs.google.com/document/d/1pobtU3ZX0eJkMGXBa0dcH8LkJB3jRFt31dZwY3ozeLM';
chrome.runtime.onInstalled.addListener((details: chrome.runtime.InstalledDetails) => {
    // On fresh install, open page how to use extension.
    if (details.reason === 'install') {
        chrome.tabs.create({
            url: welcomeUrl,
            active: true
        });
        return false;
    }

    // Set url to take users upon uninstall.
    chrome.runtime.setUninstallURL(uninstallUrl, () => {
        if(chrome.runtime.lastError) {
            console.error("Error setting uninstall URL", chrome.runtime.lastError);
        }
    });
});