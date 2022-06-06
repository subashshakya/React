import { useState } from 'react';

const AddBook = () => {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const Book = { title, description, author};

        setIsPending(true);

        //fetching the url of db.json server to save the 'Book' object to the server
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(Book)
        }) .then(() =>{
            console.log('new book is added');
            setIsPending(false);
        })
    }

    return(
        <div>
            <h2>Add A Book into the list...</h2>
            <form onSubmit={ handleSubmit }>
                <lable>Book Title:</lable>
                <input type="text" required value={title} onChange={ (e) => {
                    setTitle(e.target.value);
                }}></input>
                <br />
                <lable>Description:</lable>
                <input type="text" value={description} onChange={ (e) =>{
                    setDescription(e.target.value);
                } }></input>
                <br></br>
                <lable>Author's Name:</lable>
                <input type="test" value={author} onChange={ (e) =>{
                    setAuthor(e.target.value);
                } }></input>
                <br />
                <br />
                { !isPending && <button onClick={ (e) => {
                        console.log(title);
                        console.log(description);
                        console.log(author);
                    }}>Submit</button>}
                {isPending && <h1>the page is loading.....</h1>}
            </form>
        </div>
    );
}

export default AddBook;

//npx json-server --watch data/db.json --port 8000
//npx json-server --watch location --port default is 3000