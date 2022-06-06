//making a custom hook

import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setBooks]= useState(null);

    const[isPending, setIsPending] = useState(true);

    const[error, setError] = useState(null);

//to clean up the useEffect when we render different page 
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBooks(data);
                    setIsPending(false);
                })

                //cleaning the error while rendering another page fast
                .catch(err =>{
                    if(err.name === 'AbortFetch'){
                        console.log('fetch is aborted');
                    } else{
                        // setIspending(true);
                        setError(err.message);
                    }
                })
        }, 2000);
    },[url]); //here url is a dependency i.e whenever the value of url changes useEffect is triggred

    return {data, isPending, error};
}

export default useFetch; 