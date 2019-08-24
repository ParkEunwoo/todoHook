import {useState, useEffect} from 'react';

const useLoad = (callback:Function, key:string) => {
    const [loading, setLoading] = useState(false);

    const loadInitData = () => {
        setLoading(true);
        const initData = localStorage.getItem(key);
        callback(initData);
        setLoading(false);
    }

    useEffect(() => {
        loadInitData();
    }, []);
    return loading;
}

export default useLoad;