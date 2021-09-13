//1 задача

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    };

    set state(numberState) {

        if (numberState < 0) {
            this.state = 0;
        } else if (numberState > 100) {
            this.state = 100;
        } else {
            this._state = numberState;
        };

    };
    get state() {

        return this._state
    };

    fix() {
        this.state *= 1.5;
    };
};

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state, type) {

        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    };


};

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);

        this.author = author;
        this.type = "book";
    };
};
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    };
};


//2 задача

class Library {

    constructor(name, books = []) {
        this.name = name;
        this.books = books;

    };

    addBook(book) {

        if (book.state > 30) {

            this.books.push(book);
        };
    };

    findBookBy = function (type, value) {

        let findBook = this.books.find(item => item[type] === value);

        if (findBook) {
            return findBook;
        } else {
            return null;
        };
    };

    giveBookByName = function (bookName) {

        let index = this.books.findIndex(item => item.name === bookName);

        if (index > -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        };
    };

};

//3 



