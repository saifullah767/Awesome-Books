let awesomeBooks = [];

const generateBookID = () => {
  const id = Math.random().toString();
  return id;
};

const addBooks = (title, author) => {
  const awesomeBook = {
    title,
    author,
    id: generateBookID(),
  };
  awesomeBooks.push(awesomeBook);
};

const saveBooks = () => {
  localStorage.setItem('myAwesomeBooks', JSON.stringify(awesomeBooks));
};

const removeBook = (id) => {
  awesomeBooks = awesomeBooks.filter((book) => book.id !== id);
};

const getStorageData = () => {
  const localFormData = JSON.parse(localStorage.getItem('myAwesomeBooks'));
  if (localFormData == null) {
    awesomeBooks = [];
  } else {
    awesomeBooks = localFormData;
  }
};

window.onload = getStorageData();

// Display Books Data

const displayBooks = () => {
  const booksList = document.querySelector('.books');
  booksList.innerHTML = '';
  awesomeBooks.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const headTitle = document.createElement('h2');
    headTitle.classList.add('title');
    headTitle.textContent = book.title;

    const headAuthor = document.createElement('h2');
    headAuthor.classList.add('author');
    headAuthor.textContent = book.author;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
      removeBook(book.id);
      displayBooks();
    });
    bookElement.appendChild(headTitle);
    bookElement.appendChild(headAuthor);
    bookElement.appendChild(removeBtn);
    booksList.appendChild(bookElement);
    const hr = document.createElement('hr');
    booksList.appendChild(hr);
  });
  saveBooks();
};
