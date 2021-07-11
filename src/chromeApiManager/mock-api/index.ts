class MockApi implements Iapi {
    public extension = {
        getBackground(): Object | Window {
            return {}
        }
    };
    public tabs = {
        query: function (params: Object): Object {
            return {}
        }
    }
}
