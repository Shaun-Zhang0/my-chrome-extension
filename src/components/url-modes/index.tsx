import React, {useCallback, useEffect, useState} from "react"
import {UrlMode} from '../../url_mode';

require("./index.less");

const UrlModes = () => {
    const [currentURL, setCurrentURL] = useState<string>();
    const [currentTabIndex, setCurrentTabIndex] = useState<number>();

    useEffect(() => {

    }, []);

    const modeItem = useCallback(() => {
        return Object.keys(UrlMode).map(i => {
            return <div className={'modeItem'} onClick={() => changeMode(UrlMode[i])}>{UrlMode[i]}</div>
        })
    }, []);
    /**
     * 切换页面调试模式
     */
    const changeMode = (mode: string): void => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            let currentTabId: Number = Number(tabs[0].id);
            let currentUrl: String = String(tabs[0].url);
            let newUrl = '';
            const link: any = document.createElement('a');
            link.href = currentUrl;
            const search = link.search?.split("?")[1];

            if (!search /*不存在search部分*/) {
                newUrl = link.origin + link.pathname + `?${mode}`
            } else { /*存在search*/
                if (search.indexOf(mode) > -1/*当前已存在选中的mode，则直接去除这个模式*/) {
                    let newSearch: String = '';
                    if (search.indexOf('?' + mode) > -1) {
                        newSearch = search.replace('?' + mode, '');
                    }
                    if (search.indexOf('&' + mode) > -1) {
                        newSearch = search.replace('&' + mode, '');
                    }
                    newUrl = link.origin + link.pathname + `?${newSearch}`;
                } else { /*当前不存在mode*/
                    let newSearch: String = search + '&' + mode;
                    newUrl = link.origin + link.pathname + `?${newSearch}`;
                }
            }
            chrome.tabs.update(Number(currentTabId), {url: newUrl});
        });
    };


    return <div className={'pageInfoRoot'}>
        <div className={'header'}>调试模式</div>
        <div className={'modeContainer'}>
            {modeItem()}
        </div>
    </div>
};

export default React.memo(UrlModes);
