import React, {useEffect, useState} from "react"
import {observer} from 'mobx-react';
import useStore from "../../utils/hooks/use-store";
import PageInfoStore from "./store"
import {observable} from 'mobx';

const styles = require("./index.less");

const PageInfo = () => {
    const store = useStore(() => new PageInfoStore());
    useEffect(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            store.setCurrentUrl(tabs[0].url);
            store.setCurrentTitle(tabs[0].title);
            const bg: any = chrome.extension.getBackgroundPage();
            store.setCurrentKeywords(bg?.test1()?.pageInfo?.keyword)
            store.setCurrentDescription(bg?.test1()?.pageInfo?.description);
            store.setCurrentAuthor(bg?.test1()?.pageInfo?.author);
            // store.setBaseUrl(bg?.test1()?.pageInfo?.baseUrl)
            store.setBaseUrl(bg?.test1()?.pageInfo?.baseUrl)
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
                {store.currentUrl}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                base
            </div>
            <div className={styles.pageInfoValue}>
                {store.baseUrl}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                title / 标题
            </div>
            <div className={styles.pageInfoValue}>
                {store.currentTitle}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                keyword / 关键字
            </div>
            <div className={styles.pageInfoValue}>
                {store.currentKeyword}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                description / 描述
            </div>
            <div className={styles.pageInfoValue}>
                {store.currentDescription}
            </div>
        </div>
        <div className={styles.pageInfoRow}>
            <div className={styles.pageInfoRowHeader}>
                author / 作者
            </div>
            <div className={styles.pageInfoValue}>
                {store.currentAuthor}
            </div>
        </div>
    </div>
};

export default observer(PageInfo);
