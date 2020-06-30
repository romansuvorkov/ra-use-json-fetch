import {useState, useEffect} from 'react';

export default function useJsonFetch(url, interval, initialData) {
const [data, setData] = useState(initialData);
const [isLoading, setLoading] = useState(false);
const [hasError, setError] = useState(null);
useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            setData(data);
            setError(null);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
    const intervalId = setInterval(fetchData, interval);
    return () => clearInterval(intervalId);
}, [url])

return [data, isLoading, hasError];
}
