class ChromeApi implements Iapi {
    public extension = {
        getBackground(): Object {
            return chrome.extension.getBackground();
        }
    };
    public tabs = {
        query(params: Object): void {
            return chrome.tabs.query({...params})
        }
    }
}
