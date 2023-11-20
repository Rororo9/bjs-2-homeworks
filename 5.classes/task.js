/*Задача 1*/
class PrintEditionItem {
    #state; //приватное свойство

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0) {
            this.#state = 0;
        } else if (number > 100) {
            this.state = 100;
        } else {
            this.#state = number;
        }
    }

    get state() {
        return this.#state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

/*Задача 2*/
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = null;
        this.books.forEach((book) => {
            if (book[type] === value && !foundBook) {
                foundBook = book;
            }
        });
        return foundBook;
    }

    giveBookByName(bookName) {
        let foundBook = null;
        this.books.forEach((book, index) => {
            if (book.name === bookName && !foundBook) {
                foundBook = this.books.splice(index, 1)[0];
            }
        });
        return foundBook;
    }
}