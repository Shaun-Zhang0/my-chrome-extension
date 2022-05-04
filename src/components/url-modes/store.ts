import {action, observable} from 'mobx';
import {useEffect} from 'react';
import UseMount from '../../utils/hooks/use-mount';
import {UrlMode} from '../../url_mode';
import * as Url from 'url';
import {map} from 'jquery';

class UrlModesStore {
    /**
     * 当前页面地址
     * @type {string}
     */
    @observable currentURL = ''
    /**
     * 当前模式
     */
    @observable activeIndex = []
    /**
     * 点击切换模式
     * @param mode {string}
     */
    onItemClick = (mode: string) => {
        // noinspection DuplicatedCode
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
                        newSearch = '?' + search.replace('&' + mode, '');
                    }
                    newUrl = link.origin + link.pathname + `${newSearch}`;
                } else { /*当前不存在mode*/
                    let newSearch: String = search + '&' + mode;
                    newUrl = link.origin + link.pathname + `?${newSearch}`;
                }
            }
            chrome.tabs.update(Number(currentTabId), {url: newUrl});
        });
    }
    /**
     *
     */
    freshModeStatus = () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            console.log(tabs[0].url)
            alert(tabs[0].url)
            const modes = UrlMode;
            Object.keys(UrlMode).map(item => {
                if (tabs[0].url && tabs[0].url.indexOf(UrlMode[item]) > 0) {
                    // @ts-ignore
                    this.activeIndex.push(UrlMode.item)
                }
            })

        });
    }

    use() {

        UseMount(() => {
            this.freshModeStatus()
        })
    }
}

export default UrlModesStore;
