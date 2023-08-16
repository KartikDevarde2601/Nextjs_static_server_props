export async function getBook(){
    const res = await fetch('https://nextjs-94405-default-rtdb.firebaseio.com/books.json');
    const data = await res.json();
    return data; 
}

export async function getBookById(id){
    const books = await getBook()
    const fetchBook = books.find((book) => book.id === parseInt(id))
    return fetchBook;
}