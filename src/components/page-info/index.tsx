import React, {useEffect, useState} from "react"
import {number} from 'prop-types';

const styles = require("./index.less");

const PageInfo = () => {
    const [currentURL, setCurrentURL] = useState<string>();
    const [currentKeyword, setCurrentKeyword] = useState<string>();
    const [currentDescription, setCurrentDescription] = useState<string>();
    const [currentAuthor, setCurrentAuthor] = useState<string>();
    const [currentTitle, setCurrentTitle] = useState<string>();

    useEffect(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            setCurrentURL(tabs[0].url);
            setCurrentTitle(tabs[0].title);
            const bg: any = chrome.extension.getBackgroundPage();
            setCurrentKeyword(bg?.test1()?.pageInfo?.keyword);
            setCurrentDescription(bg?.test1()?.pageInfo?.description);
            setCurrentAuthor(bg?.test1()?.pageInfo?.author);
        });
    }, []);
    return <div className={styles.pageInfoRoot}>
        <div className={styles.pageTitle}>当前页面信息：</div>
        <div className={styles.pageInfoRow}>
        {/*<div className={styles.pageInfoRow}>*/}
            <div className={styles.pageInfoRowHeader}>
                 url / 当前页面地址
            </div>
            <div className={styles.pageInfoValue}>
                {currentURL}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                title / 标题
            </div>
            <div className={styles.pageInfoValue}>
                {currentTitle}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                keyword / 关键字
            </div>
            <div className={styles.pageInfoValue}>
                {currentKeyword}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                description / 描述
            </div>
            <div className={styles.pageInfoValue}>
                {currentDescription}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                author / 作者
            </div>
            <div className={styles.pageInfoValue}>
                {currentAuthor}
            </div>
        </div>
    </div>
};

export default React.memo(PageInfo);
