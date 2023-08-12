//create library
let myLibrary = [];
//constructor for books
function book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
      return(title + ' by ' + author + ', ' + pages + ' pages, ' + 'has ' + read) 
  }
}
// creates a new book 
const book1 = new book('Harry Potter', 'JK Rowling', 392, 'read' )

//add book to library
const addBook = () => {

}
//remove book from library
const removeBook = () => {

}