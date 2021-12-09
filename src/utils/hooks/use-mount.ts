import {useEffect} from 'react';

const UseMount = (fn: () => void) => {
    if (typeof fn !== 'function'){
        throw new Error(`fn is not a function, is ${typeof fn}`)
    }
    useEffect(()=>{
        fn();
    },[])

}

export default UseMount;
