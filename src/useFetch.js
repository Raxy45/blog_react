import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Error ocurred while fetching data from API !");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 2000);
    return () => abortCont.abort();
  }, [url]);
  return { data, error, isPending };
};

export default useFetch;

// Here, when you quickly update the page then the fetch request is interrupted abruptly
// and hence, we get warning in order to avoid this
// we use abortcontroller. what happens is when fetch is interrupted we get an error
// which is caught is catch's if and then we exit it and .abort method is called !
