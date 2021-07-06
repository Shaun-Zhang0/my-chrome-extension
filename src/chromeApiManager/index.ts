class chromeExtension {
    public static createApiFactory(type:String):Iapi{
        let apiInstance = null;
        if(type==='mock'){
            apiInstance = new MockApi();
        }else{
            apiInstance = new ChromeApi();
        }
        return apiInstance;
    }
}
