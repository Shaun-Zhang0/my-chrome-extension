export default interface IChromeMockApi {
    tabs: { // chrome.tabs
        query(): void, // chrome.tabs.query()
    },
    extension: {
        getBackgroundPage(): Object // chrome.extension.getBackgroundPage()
    }
}
