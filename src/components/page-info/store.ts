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
    @observable currentUrl = ''
    @observable currentKeyword = '';
    @observable currentDescription = '';
    @observable currentAuthor = '';

    constructor() {
        super();
    }

    setCurrentUrl(url:string){
        this.currentUrl = url;
    }
    use(){
        super.use();
    }
}
export default PageInfoStore;
