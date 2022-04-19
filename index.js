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