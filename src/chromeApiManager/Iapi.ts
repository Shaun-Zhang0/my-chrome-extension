interface Iapi {
    extension: Iextension,
    tabs: Itabs
}

interface Iextension {
    getBackground: Function// chrome.extension.getBackground()
}

interface ICallBack {
    (params: Object, callback: () => void): any
}

interface Itabs {
    query: ICallBack // chrome.extension.query()
}
