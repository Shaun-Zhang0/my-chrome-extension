import React, {useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import PageInfo from "./components/page-info";
import VideoInfo from "./components/video-info";
import UrlModes from "./components/url-modes";
import Icon from 'antd/lib/icon';
import cx from "classnames";

const styles = require("./popup.less");

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
        {name: '页面信息', id: 0, disable: false, icon: 'info-circle'},
        {name: '视频相关', id: 1, disable: false, icon: 'video-camera'},
        {name: '调试模式', id: 2, disable: false, icon: 'bug'},
        {name: '敬请期待', id: 3, disable: true, icon: 'ellipsis'},
    ];
    useEffect(() => {
        // chrome.browserAction.setBadgeText({text: count.toString()});
    }, [count]);

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab && tab.url && tab.id) {
                setCurrentURL(tab.url);
                setCurrentTabID(tab.id);

                // 【新增】向 Service Worker 请求页面信息
                chrome.runtime.sendMessage({ action: 'GET_CURRENT_PAGE_INFO' }, (response) => {
                    if (response && response.pageInfo) {
                        console.log('Page Info Received:', response.pageInfo);
                        // 假设您有一个状态来存储 pageInfo，并把它传递给 <PageInfo/>
                        // setPageData(response.pageInfo);
                    } else {
                        console.error('Service Worker未返回页面信息或返回错误。');
                    }
                });
            }
        });
    }, []);

    /**
     *  渲染选项卡列表
     */
    const navItem = useCallback(() => {
        return navItemArr.map((item) => {
            return <div className={cx(styles.navItem, navActiveIndex === item.id && 'active', item.disable && 'disable')} key={item.id} onClick={() => setNavItemActiveIndex(item.id)}>
                {/*<img src={item.icon}/>*/}
                <Icon className={styles.navIcon} type={item.icon} />
                <span className={styles.navItemName}>{item.name}</span>
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
        <div id={'root'}>
            <div className={styles.root}>
                <div className={styles.navContainer}>
                    {navItem()}
                </div>
                <div className={styles.showContainer}>
                    {showContent()}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Popup/>
    </React.StrictMode>,
    document.getElementById("root")
);
