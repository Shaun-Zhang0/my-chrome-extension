import {useMemo} from 'react';

interface IStore {
    use: Function
}

/**
 * 用于初始化Store
 * @param createStoreFn
 * @returns Object
 */
const useStore = (createStoreFn: Function):any=>{
    const store:IStore = useMemo(()=>createStoreFn() ,[]);
    store?.use();
    return store;
}
export default useStore;
