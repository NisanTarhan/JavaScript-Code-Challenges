// Movie object that takes in five arguments

// Title
// Director
// Genre
// Release year
// Rating

/*
The movie prototype should have a function called getOverview,
which logs the following overview for each film:

"<title>, a <genre> film directed by <director> was released in
<releaseYear>. It received a rating of <rating>."
*/

// Prototype
function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function () {
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`)
}

const Matrix = new Movie("Matrix", "Lana and Lilly Wachowski", "Science fiction", "1999", 10);
Matrix.getOverview();

// Class Component
class MovieWithClass {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    get overview() {
        this.getOverview();
    }

    getOverview() {
        console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`)
    }

}

const Matrix2 = new MovieWithClass("Matrix2", "Lana and Lilly Wachowski", "Science fiction", "2003", 8);
Matrix2.overview;