import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {UrlMode} from './url_mode';
import PageInfo from "./components/page-info";
import VideoInfo from "./components/video-info";
import UrlModes from "./components/url-modes";
import cx from "classnames";

require("./popup.less");

interface INavItem {
    id: number,
    name: string,
    disable: boolean,
    icon: string
}

const Popup = () => {
    const [count, setCount] = useState(0);
    const [currentURL, setCurrentURL] = useState<string>();
    const [currentTabID, setCurrentTabID] = useState<number>();
    const [navActiveIndex, setNavItemActiveIndex] = useState<number>(0);

    const navItemArr: Array<INavItem> = [
        {name: '页面信息', id: 0, disable: false, icon: require("./images/page-info.png")},
        {name: '视频相关', id: 1, disable: false, icon: require("./images/video-info.png")},
        {name: '调试模式', id: 2, disable: false, icon: require("./images/debug.png")},
        {name: '敬请期待', id: 3, disable: true, icon: require("./images/more.png")},
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
     *  渲染选项卡列表
     */
    const navItem = useCallback(() => {
        return navItemArr.map((item) => {
            return <div className={cx('navItem', navActiveIndex === item.id && 'active', item.disable && 'disable')} key={item.id} onClick={() => setNavItemActiveIndex(item.id)}>
                <img src={item.icon}/>
                <span className={"navItemName"}>{item.name}</span>
            </div>
        })
    }, [navActiveIndex]);
    const showContent = useCallback(() => {
        switch (navActiveIndex) {
            case 0:
                return <PageInfo/>;
            case 1:
                return <VideoInfo/>;
            case 2:
                return <UrlModes/>;
            default:
                return <PageInfo/>;
        }
    }, [navActiveIndex]);
    return (
        <>
            <div className={'root'}>
                <div className={'navContainer'}>
                    {navItem()}
                </div>
                <div className={'showContainer'}>
                    {showContent()}
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
