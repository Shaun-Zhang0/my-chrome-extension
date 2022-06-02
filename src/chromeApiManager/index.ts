class chromeExtension {
    public static createApiFactory(type:String):Iapi{
        let apiInstance: Object;
        if(type==='mock'){
            apiInstance = new MockApi();
        }else{
            apiInstance = new ChromeApi();
        }
        return <Iapi>apiInstance;
    }
}
