let currentPageInfo:any = {};

chrome.runtime.onMessage.addListener(
    function (data) {
        currentPageInfo = data;
        // sendResponse("bar");
    }
);

function test1() {
    // alert("test");
    return currentPageInfo;
}

window.test1 = test1;
