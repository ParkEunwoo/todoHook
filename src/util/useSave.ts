import {useState, useEffect} from 'react';

const useSave = (data:any, key:string) => {
    const [saving, setSaving] = useState(false);
    useEffect(() => {
        setSaving(true);
        localStorage.setItem(key, JSON.stringify(data));
        setSaving(false);
    }, [data, key])
    return saving;
}

export default useSave;