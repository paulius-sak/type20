var book = {
    title: "Hobit",
    price: 15,
    year: 1950,
    author: "Tolkien"
};
var bookUpdate = {
    title: "the hobbit",
    author: "J.R.R. Tolkien>"
};
var bookId = {
    id: "1"
};
var carDetails = {
    make: "volkswagen",
    model: "golf",
};
console.log(carDetails);
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
var books = [];
function addBook(book) {
    var id = new Date().getTime().toString();
    var newBook = {
        id: id,
        title: book.title,
        author: book.author,
        price: book.price,
        year: book.year
    };
    books.push(newBook);
}
var book1 = {
    title: "Hobit",
    price: 15,
    year: 1950,
    author: "Tolkien"
};
var book2 = {
    title: "Hobitas 2",
    price: 20,
    year: 1960,
    author: "Tolkien"
};
addBook(book1);
addBook(book2);
console.log(books);
