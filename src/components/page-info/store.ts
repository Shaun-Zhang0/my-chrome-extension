import {observable} from 'mobx';
import BaseStore from '../../utils/hooks/base-store';

interface IPageInfoStore  {
    currentUrl: string,
}

class PageInfoStore extends BaseStore implements IPageInfoStore{
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

    constructor() {
        super();
    }

    /**
     * 获取当前页面的url
     * @param url
     */
    setCurrentUrl(url:string){
        this.currentUrl = url;
    };

    /**
     * 获取当前页面的title
     * @param title
     */
    setCurrentTitle(title: string){
        this.currentTitle = title;
    };
    setCurrentKeywords(keywords:string){
        this.currentKeyword = keywords;
    }

    /**
     * 获取当前页面的author
     * @param author
     */
    setCurrentAuthor(author:string){
        this.currentAuthor = author;
    }

    /**
     * 获取页面的描述
     * @param description
     */
    setCurrentDescription(description:string){
        this.currentDescription = description;
    }
    use(){
        super.use();
    }
}
export default PageInfoStore;
