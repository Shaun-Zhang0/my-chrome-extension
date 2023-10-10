import {observable} from 'mobx';
import BaseStore from '../../utils/hooks/base-store';
import {useMount} from 'ahooks';
import autobind from 'autobind-decorator';

interface IPageInfoStore {
    currentUrl: string | undefined,
    currentTitle: string | undefined,
    currentKeyword: string | undefined,
    currentDescription: string | undefined,
    currentAuthor: string | undefined,
    baseUrl: string | undefined
}

class PageInfoStore extends BaseStore implements IPageInfoStore {
    /**
     * 当前页面的地址
     * @type {string}
     */
    @observable currentUrl = '';
    /**
     * 当前页面的关键词
     */
    @observable currentKeyword = '';
    /**
     * 当前页面的描述文案
     */
    @observable currentDescription = '';
    /**
     * 当前页面的作者
     */
    @observable currentAuthor = '';
    /**
     * 当前页面的标题
     */
    @observable currentTitle = '';
    /**
     * base的引用地址
     */
    @observable baseUrl = '';

    constructor() {
        super();
    }

    /**
     * 获取当前页面的url
     * @param url
     */
    @autobind
    setCurrentUrl(url) {
        this.currentUrl = url;
    };

    /**
     * 获取当前页面的title
     * @param title
     */
    setCurrentTitle(title) {
        this.currentTitle = title;
    };

    /**
     * 获取当前页面的关键字
     * @param keywords
     */
    setCurrentKeywords(keywords) {
        this.currentKeyword = keywords;
    }

    /**
     * 获取当前页面的author
     * @param author
     */
    setCurrentAuthor(author: string) {
        this.currentAuthor = author;
    }

    /**
     * 获取页面的描述
     * @param description
     */
    setCurrentDescription(description: string) {
        this.currentDescription = description;
    }

    setBaseUrl(url: string) {
        this.baseUrl = url;
    }

    use() {
        super.use();
        useMount(() => {
            const _this = this;
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                _this.setCurrentUrl(tabs[0].url);
                _this.setCurrentTitle(tabs[0].title);
                const bg: any = chrome.extension.getBackgroundPage();
                _this.setCurrentKeywords(bg?.getCurrentPageInfo()?.pageInfo?.keyword)
                _this.setCurrentDescription(bg?.getCurrentPageInfo()?.pageInfo?.description);
                _this.setCurrentAuthor(bg?.getCurrentPageInfo()?.pageInfo?.author);
                _this.setBaseUrl(bg?.getCurrentPageInfo()?.pageInfo?.baseUrl)
            });
        })


    }
}

export default PageInfoStore;
