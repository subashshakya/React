//importing custom hooks and using useEffect and useState hook
//import {useEffect, useState} from 'react';
import useFetch from '../useFetch';
import Bookinfo from './bookinfo';
import "./bookinfo.css";
import Navbar from './navbar';


const Books = () =>{
    // const [books, setBooks]= useState(null);

    // const[isPending, setIsPending] = useState(true);

    // const[error, setError] = useState(null);

    //dont change state inside a useState as it goes on a infinite loop
    // useEffect(() => {
    //     console.log('use effect hook ran')
    // },[name]);// we pass in a funtion into the useState hook which renders everytime the DOM renders
    //empty array is called dependency array
    
    //this useEffect is used int he custom hook called useFetch so that we dont have to rewrite this code again and again for all the fetch request
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogss')
    //             .then(res => {
    //                 console.log(res);
    //                 if(!res.ok){
    //                     throw Error('could not fetch the data for that resource');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 setBooks(data);
    //                 setIsPending(false);
    //             })
    //             .catch(err =>{
    //                 setIspending(false);
    //                 setError(err.message);
    //             })
    //     }, 2000);
    // },[]);

    const {data: books, isPending, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="Container">
            <Navbar />
            {error && <div>{ error }</div>}
            {isPending && <div>Wait a moment as the data loads</div>}
            {books && <Bookinfo books={ books }/>}
        </div>
    );
}

export default Books;