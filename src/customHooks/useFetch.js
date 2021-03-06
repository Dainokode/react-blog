import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

        useEffect(() => {
            const controller = new AbortController();

            fetch(url, { signal: controller.signal })
            .then(res => {
                if(!res.ok){
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.message === "AbortError"){
                    console.log("Fecth aborted.");
                } else {
                    setError(err.message);
                    setPending(false);
                }
            })
            
            return () => controller.abort();
        }, [url])

     return { data, isPending, error };
}
 
export default useFetch;