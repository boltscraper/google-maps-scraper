chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: 'views/scraper.html'
    });
}); 