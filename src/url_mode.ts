interface IUrlMode {
    [modeName: string]: string;
}

export const UrlMode: IUrlMode = {
    mock: '__MOCK__',
    vconsole: '__VCONSOLE__',
    debugger: '__DEBUG__'
};
