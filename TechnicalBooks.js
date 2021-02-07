/*
     In a previous challenge we created a Book class that accepts a title, author,
     ISBN, and number of copies, and provides methods for selling and restocking.
     And this challenge we'll use inheritance to create a variation on our Book class.

     Your goal is to create a TechnicalBook class that inherits from the Book class
     in the previous challenge. This class will also take a title, author, ISBN, and
     number of copies, but will take a fifth argument, an edition.

     Title
     Author
     ISBN
     numCopies
     Edition

      The TechnicalBook class will also provide a getEdition function which returns
      the following string.
      getEdition -> "The current version of this book is, followed by the book's <edition>."
      You should use a template literal for this phrase.
*/
class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    //Getter Functions
    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this.numCopies === 0) return "Out of stock";
        if (this.numCopies < 10) return "Low stock"
        return "In stock";
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 5) {
        this.numCopies += numCopiesStocked;
    }
}

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current version of this book is, followed by the book's ${this.edition}.`;
    }
}

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking The Coding Interview",
    "Gayle Laackmann McDowell",
    "23352",
    9,
    "3.4"
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());