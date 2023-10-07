interface Iinfo {
    keyword?: string,
    author?: string,
    description?: string,
    baseUrl?: string
}

setTimeout(function () {
    var metaData: any = document.getElementsByTagName('meta');
    var pageInfo: Iinfo = {};
    pageInfo.keyword = metaData?.keywords?.content ?? '暂无';
    pageInfo.description = metaData?.description?.content ?? '暂无';
    pageInfo.author = metaData?.author?.content ?? '暂无';
    pageInfo.baseUrl = document.getElementsByTagName('base')[0]?.href ?? '暂无'
    chrome.runtime.sendMessage({pageInfo: pageInfo}, function () {
        // console.log('keywords已发送')
    });
}, 0);
