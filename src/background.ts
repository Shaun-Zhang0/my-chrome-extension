// 用于存储从内容脚本接收到的页面信息
let currentPageInfo: any = {};

// 1. 监听来自内容脚本（Content Script）的消息（用于更新数据）
// 内容脚本会发送当前页面的信息，Service Worker 负责接收和存储
chrome.runtime.onMessage.addListener(
    function (data, sender, sendResponse) {
        // 接收到的数据即为当前页面信息
        currentPageInfo = data;
        // 注意：这里不需要调用 sendResponse 或返回 true，除非您需要立即回复内容脚本。
    }
);


// 2. 监听来自弹出页（Popup）或其他扩展页面的请求（用于发送数据）
// 弹出页会发送一个请求，Service Worker 根据请求返回存储的数据
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        // 检查请求是否是用于获取当前页面信息的
        if (request && request.action === 'GET_CURRENT_PAGE_INFO') {

            // 返回存储的页面信息
            sendResponse({ pageInfo: currentPageInfo });

            // 返回 true，表示您将异步调用 sendResponse（尽管此处是同步，MV3 推荐保留此习惯）
            return true;
        }
    }
);

// 移除以下代码，它们会导致 Service Worker 崩溃：
// function test1() {
//     return currentPageInfo;
// }
// window.test1 = test1;
