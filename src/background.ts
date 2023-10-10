let currentPageInfo: any = {};

chrome.runtime.onMessage.addListener(
    function (data) {
        currentPageInfo = data;
    }
);

function getCurrentPageInfo() {
    return currentPageInfo;
}

window.getCurrentPageInfo = getCurrentPageInfo;
