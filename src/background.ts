let currentPageInfo:any = {};

chrome.runtime.onMessage.addListener(
    function (data) {
        currentPageInfo = data;
    }
);

function test1() {
    return currentPageInfo;
}

window.test1 = test1;
