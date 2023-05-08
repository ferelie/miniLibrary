let library = [];

function Book(title, author, isRead, numberOfPages) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
  this.numberOfPages = numberOfPages;
}
// Get a reference to the form element
const addBookForm = document.querySelector("#add-book-form");

// Define a function to handle form submissions
function addBookToLibrary(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form input values
  const title = addBookForm.elements.title.value;
  const author = addBookForm.elements.author.value;
  const isRead = addBookForm.elements.isRead.checked;
  const numberOfPages = addBookForm.elements.numberOfPages.value;

  // Create a new Book object
  const newBook = new Book(title, author, isRead, numberOfPages);

  // Add the new book to the library array
  library.push(newBook);

  // Clear the form input values
  addBookForm.reset();
}

// Attach the handleFormSubmit function to the form's submit event
addBookForm.addEventListener("submit", addBookToLibrary);
