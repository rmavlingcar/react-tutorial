import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //console.log("useEffect hook triggered!");
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }).then(res => { 
            if(!res.ok){
                throw('Error: Could not fetch data for that resource.')
            }
            return res.json(); 
        }).then(data => { 
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(e => {
            if(e.name === 'AbortError'){
                console.log('Fetch Aborted');
            }
            else{
                setIsPending(false);
                setError(e.message);
            }            
        });

        // this return function ensures that fetching is aborted if trying to load data into an unmounted component. (e.g. moving pages quickly calls fetch but it cannot display data as the component displayed is now different.)
        return () => { abortCont.abort() }
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;