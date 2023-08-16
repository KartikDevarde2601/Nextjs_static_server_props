import { getBook } from "../../Utils/bookApi";
import Link from "next/link";

const bookStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
};

const Books = ({ books }) => {
    return (
        <div>
            {books.map((book) => (
                <div key={book.id} style={bookStyle}>
                    <h1 style={{ marginBottom: "5px" }}>{book.name}</h1>
                    <p style={{ marginBottom: "10px" }}>{book.author}</p>
                    <article>
                        <Link href={`book/${book.id}`} style={{color:'red'}}>
                            moreDetails
                        </Link>
                    </article>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {  
    const books = await getBook();
    return {
        props: {
            books: books,
        },
        revalidate:10,
    };
}

export default Books;
