document.getElementById("scrapeJobsBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (
      activeTab.url.startsWith("http://") ||
      activeTab.url.startsWith("https://")
    ) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ["content.js"],
      });
    } else {
      console.log("Content script cannot be executed on this URL.");
    }
  });
});
