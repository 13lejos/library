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
const createCard = () => {
    const div = document.createElement('div')
    div.className = 'example-cards'

    const title = document.createElement('p')
    const titleText = document.createTextNode('hello world')
    title.appendChild(titleText)

    const author = document.createElement('p')
    const authorText = document.createTextNode('jk rowling')
    author.appendChild(authorText)

    const pages = document.createElement('p')
    const pagesText = document.createTextNode('392')
    pages.appendChild(pagesText)

    const read = document.createElement('p')
    const readText = document.createTextNode('read')
    read.appendChild(readText)

    document.getElementById('cards-container').appendChild(div)
    div.append(title, author, pages, read)
    
}
//remove book from library
const removeBook = () => {

}

let libraryBookCount = 0;