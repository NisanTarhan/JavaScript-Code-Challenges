// Title
// Author
// ISBN
// numCopies

/* getAvailability() => "out of stock" if 0 available copies.
   "low stock" if < 10 copies and "in stock" otherwise.
*/

/* sell(numSold) -> This will take the number of copies sold and
   subtract it from the total number of copies.
   If no arguments is passed, we can default the number of copies to sell to one.
*/

/* restock(numCopies) -> restock function which takes in a number of copies to restock
   and adds it to the total number of copies.
   If no arguments is passed, we can default the restock number to five.
*/

function Book(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
}

Book.prototype.getAvailability = function () {
    if (this.numCopies === 0) return "Out of stock";
    if (this.numCopies < 10) return "Low stock"
    return "In stock";
}

Book.prototype.sell = function (numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
}

Book.prototype.restock = function (numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
}

const DeepWork = new Book("Deep Work", "Carl Newport", "323", 100);
console.log(DeepWork.getAvailability());
DeepWork.restock(12);
console.log(DeepWork.getAvailability());
DeepWork.sell(17);
console.log(DeepWork.getAvailability());

// CLASS
class BookWithClass {
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

const DeepWorkWithClass = new BookWithClass("Deep Work", "Carl Newport", "323", 100);
console.log(DeepWorkWithClass.availability);
DeepWork.restock(12);
console.log(DeepWorkWithClass.availability);
DeepWork.sell(17);
console.log(DeepWorkWithClass.availability);

