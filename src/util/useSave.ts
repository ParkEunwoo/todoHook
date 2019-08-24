import {useState, useEffect} from 'react';

const useSave = (data:any, key:string) => {
    const [saving, setSaving] = useState(false);
    console.log(data);
    useEffect(() => {
        setSaving(true);
        localStorage.setItem(key, JSON.stringify(data));
        setSaving(false);
    }, [data])
    return saving;
}

export default useSave;