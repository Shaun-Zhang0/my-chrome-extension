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

/**
 * 索引id的映射
 */
const NAV_ACTIVE_INDEX = {
    "PAGE_INFO": 0,
    "VIDEO_INFO": 1,
    "URL_MODES": 2,
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
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            setCurrentURL(tabs[0].url);
            setCurrentTabID(tabs[0].id);
        });
    }, []);

    /**
     *  渲染选项卡列表
     */
    const renderNavItem = useCallback(() => {
        return navItemArr.map((item) => {
            return <div className={cx(styles.navItem, navActiveIndex === item.id && 'active', item.disable && 'disable')} key={item.id} onClick={() => setNavItemActiveIndex(item.id)}>
                {/*<img src={item.icon}/>*/}
                <Icon className={styles.navIcon} type={item.icon}/>
                <span className={styles.navItemName}>{item.name}</span>
            </div>
        })
    }, [navActiveIndex]);
    /**
     * 渲染主内容`
     */
    const renderShowContent = useCallback(() => {
        switch (navActiveIndex) {
            case NAV_ACTIVE_INDEX.PAGE_INFO:
                return <PageInfo/>;
            case NAV_ACTIVE_INDEX.VIDEO_INFO:
                return <VideoInfo/>;
            case NAV_ACTIVE_INDEX.URL_MODES:
                return <UrlModes/>;
            default:
                return;
        }
    }, [navActiveIndex]);

    return (
        <div id={'root'}>
            <div className={styles.root}>
                <div className={styles.navContainer}>
                    {renderNavItem()}
                </div>
                <div className={styles.showContainer}>
                    {renderShowContent()}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <React.Fragment>
        <Popup/>
    </React.Fragment>,
    document.getElementById("root")
);
