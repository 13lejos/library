//create library
let myLibrary = [];
//constructor for books
function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
      return(title + ' by ' + author + ', ' + pages + ' pages, ' + 'has ' + read) 
  }
}
// creates a new book and pushed into myLibrary Array

const newBook = (title, author, pages, read) => {
const book = new Book(title, author, pages, read)
myLibrary.push(book)
}

//remove book from library
const removeBook = () => {

}

let libraryBookCount = 0;