interface Iapi {
    extension: Iextension,
    tabs: Itabs
}

interface Iextension {
    getBackground(): Object // chrome.extension.getBackground()
}

interface Itabs {
    query(params: Object): void // chrome.extension.query()
}
