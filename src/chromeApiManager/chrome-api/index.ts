class ChromeApi implements Iapi {
    public extension = {
        getBackground: function () {
            return chrome.extension.getBackgroundPage();
        }
    };
    public tabs = {
        query: function (params: Object, callback: () => void): void {
            return chrome.tabs.query(params, callback)
        }
    }
}
