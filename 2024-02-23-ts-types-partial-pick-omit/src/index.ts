

// 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id.
type BookType = {
    id: string;
    title: string;
    author: string
    price: number;
    year: number;
};


// 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. // Naudot omit.
type BookCreationType = Omit<BookType, "id">;

let book: BookCreationType = {
    title: "Hobit",
    price: 15,
    year: 1950,
    author: "Tolkien"
}



// 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. // Naudot pick
type BookUpdateType = Pick<BookType, "title" | "author">;

let bookUpdate: BookUpdateType = {
    title: "the hobbit",
    author: "J.R.R. Tolkien>"
}


// 4. Atskirai apsirašyt knygos id tipą.


type BookIdType ={
    id: BookType["id"];
}

const bookId = {
    id: "1"
}


// 5. Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui.

type CarType = {
    id: string;
    make: string;
    model: string
    price: number;
    year: number;
};

type CarUpdateType = Partial<CarType>;

const carDetails: CarUpdateType = {
    make: "volkswagen",
    model: "golf",
}

console.log(carDetails)


// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.

let books: BookType[] = [];

function addBook(book: BookCreationType) {

    const id = new Date().getTime().toString()

    const newBook: BookType = {
        id: id,
        title: book.title,
        author: book.author,
        price: book.price,
        year: book.year
    }


    books.push(newBook)
    
}

let book1: BookCreationType = {
    title: "Hobit",
    price: 15,
    year: 1950,
    author: "Tolkien"
};

let book2: BookCreationType = {
    title: "Hobitas 2",
    price: 20,
    year: 1960,
    author: "Tolkien"
};
addBook(book1);
addBook(book2);

console.log(books)