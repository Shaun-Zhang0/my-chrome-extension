import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {UrlMode} from './url_mode';
import PageInfo from "./components/page-info";

require("./popup.less");

interface INavItem {
    id: number,
    name: string
}

const Popup = () => {
    const [count, setCount] = useState(0);
    const [currentURL, setCurrentURL] = useState<string>();
    const [currentTabID, setCurrentTabID] = useState<number>();
    const [navActiveIndex, setNavItemActiveIndex] = useState<number>(0);

    const navItemArr: Array<INavItem> = [
        {name: '页面信息', id: 0},
        {name: '页面信息1', id: 1},
        {name: '页面信息2', id: 2},
        {name: '页面信息3', id: 3},
        {name: '页面信息4', id: 4},
        {name: '页面信息5', id: 5},
        {name: '页面信息6', id: 6},
        {name: '页面信息7', id: 7},
    ];
    useEffect(() => {
        chrome.browserAction.setBadgeText({text: count.toString()});
    }, [count]);

    useEffect(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            setCurrentURL(tabs[0].url);
            setCurrentTabID(tabs[0].id);
        });
    }, []);


    /**
     * 切换模式
     * @param {string} mode 模式
     * 例如: MOCK 对应的是__MOCK__
     */
    const selectMockMode = (mode: string): void => {
        // console.log(mode)
        if (!mode) {
            throw new Error('mode不得为空');
        }

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            const tab = tabs[0];
            if (!tab.url) {
            } else {
                const currentTabUrl = tab.url.split('?')[0]; // 当前tab的URl
                const searchParams = tab.url.split('?')[1] ? tab.url.split('?')[1] : ''; // 判断当前URL是否存在search部分 存在则提取出来
                // // const rejectMode = '?__MOCK__';
                const injectMode = '?' + UrlMode[mode];
                for (let i in UrlMode) {
                    searchParams.replace(/UrlMode[i]/g, '')
                }
                debugger;
                // console.log(injectMode)
                // debugger;
                chrome.tabs.update(Number(currentTabID), {url: currentTabUrl + injectMode + searchParams});


                // const newCurrentTabURl = currentTabUrl


            }
        })
    };
    /**
     *  渲染选项卡列表
     */
    const navItem = useCallback(() => {
        return navItemArr.map((item) => {
            return <div className={'navItem'} key={item.id}>{item.name}</div>
        })
    }, []);
    const showContent = useCallback(() => {
        return
    }, []);
    return (
        <>
            <div className={'root'}>
                {/*<ul>*/}
                {/*    <li>Current URL: {currentURL}</li>*/}
                {/*    <li>Current Time: {new Date().toLocaleTimeString()}</li>*/}
                {/*</ul>*/}
                {/*<button*/}
                {/*    onClick={() => setCount(count + 1)}*/}
                {/*    style={{marginRight: "5px"}}*/}
                {/*>*/}
                {/*    count up*/}
                {/*</button>*/}
                {/*<button onClick={() => selectMockMode('mock')}> 切换MOCK模式</button>*/}
                {/*<button onClick={() => selectMockMode('vconsole')}> 切换MOCK模式</button>*/}
                <div className={'navContainer'}>
                    {navItem()}
                </div>
                <div className={'showContainer'}>
                    <PageInfo/>
                </div>
            </div>

        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Popup/>
    </React.StrictMode>,
    document.getElementById("root")
);
