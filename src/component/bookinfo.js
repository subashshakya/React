import "./bookinfo.css";

const Bookinfo = (props) => {
    console.log(props);
    const book = props.books;

    console.log(book);
    return(
        <div className="SomeBook">
        {book.map((books) => (
            <div className="bookInfo">
                <h2>{books.title}</h2>
                <p>{books.description}</p>
                <h3>{books.author}</h3>
            </div>
        ))}
        </div>
    );
}

export default Bookinfo;

//htjhskjhfasdhasjdhasdjh