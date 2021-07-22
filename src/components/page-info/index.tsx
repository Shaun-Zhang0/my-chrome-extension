import React, {useEffect, useState} from "react"
import {number} from 'prop-types';

require("./index.less");

const PageInfo = () => {
    const [currentURL, setCurrentURL] = useState<string>();
    const [currentKeyword, setCurrentKeyword] = useState<string>();
    const [currentDescription, setCurrentDescription] = useState<string>();
    const [currentAuthor, setCurrentAuthor] = useState<string>();
    const [currentTitle, setCurrentTitle] = useState<string>();

    useEffect(() => {
        const bg: any = chrome.extension.getBackgroundPage();
        setCurrentKeyword(bg?.test1()?.pageInfo?.keyword);
        setCurrentDescription(bg?.test1()?.pageInfo?.description);
        setCurrentAuthor(bg?.test1()?.pageInfo?.author);
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            setCurrentURL(tabs[0].url);
            setCurrentTitle(tabs[0].title)
        });
    }, []);
    return <div className={'pageInfoRoot'}>
        当前页面信息:
        <div className={'pageInfoRow'}>
            <div className={'pageInfoRowHeader'}>
                当前页面url
            </div>
            <div className={'pageInfoValue'}>
                {currentURL}
            </div>
        </div>
        <div className={'pageInfoRow'}>
            <div className={'pageInfoRowHeader'}>
                title
            </div>
            <div className={'pageInfoValue'}>
                {currentTitle}
            </div>
        </div>
        <div className={'pageInfoRow'}>
            <div className={'pageInfoRowHeader'}>
                keyword
            </div>
            <div className={'pageInfoValue'}>
                {currentKeyword}
            </div>
        </div>
        <div className={'pageInfoRow'}>
            <div className={'pageInfoRowHeader'}>
                description
            </div>
            <div className={'pageInfoValue'}>
                {currentDescription}
            </div>
        </div>
        <div className={'pageInfoRow'}>
            <div className={'pageInfoRowHeader'}>
                author
            </div>
            <div className={'pageInfoValue'}>
                {currentAuthor}
            </div>
        </div>
    </div>
};

export default React.memo(PageInfo);
