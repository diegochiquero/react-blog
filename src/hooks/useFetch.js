import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn't fetch'");
          }
          return response.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          //#24 
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { datas, isPending, error };
};

export default useFetch;
