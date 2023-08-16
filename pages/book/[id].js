import { getBookById, getBook } from "../../Utils/bookApi";

const bookStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
};

function BookDetails({ book }) {
    return (
        <div style={bookStyle}>
            <h1 style={{ marginBottom: "5px" }}>{book.name}</h1>
            <p style={{ marginBottom: "10px" }}>{book.author}</p>
            <p style={{ marginBottom: "10px" }}>{book.description}</p>
        </div>
    );
}

export default BookDetails;


export async function getServerSideProps({params}){
 const book = await getBookById(params.id)
 return{
    props:{
        book,
    }
 }

}

// export async function getStaticProps({ params }) {
//     const book = await getBookById(params.id);
//     return {
//         props: {
//             book,
//         },
//     };
// }


// export async function getStaticPaths() {
//     const books = await getBook();
//     const paths = books.map((book) => ({ params: { id: String(book.id) } }));
//     return {
//         paths: paths,
//         fallback: false,
//     };
// }




