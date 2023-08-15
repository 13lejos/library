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
    const titleText = document.createTextNode('"The Chronicles of Narnia: The Lion the Witch and the Wardrobe"')
    title.appendChild(titleText)

    const author = document.createElement('p')
    const authorText = document.createTextNode('By: ' + 'jk rowling')
    author.appendChild(authorText)

    const pages = document.createElement('p')
    const pagesText = document.createTextNode('392' + ' pages')
    pages.appendChild(pagesText)

    const read = document.createElement('button')
    const readText = document.createTextNode('Read?')
    read.appendChild(readText)

    const removeBook = document.createElement('button')
    const removeBookText = document.createTextNode('Remove Book')
    removeBook.appendChild(removeBookText)

    document.getElementById('cards-container').appendChild(div)
    div.append(title, author, pages, read, removeBook)
    
}
//remove book from library
const removeBook = () => {

}

let libraryBookCount = 0;