/* global row, cell13*/
var displaList = document.getElementById('Book-List');
var displaBooks = document.getElementById('Add-Books');
var displaContact = document.getElementById('contact');

function displayList(){
  if(displaList.style.display === 'none'){
    displaList.style.display = 'flex'
    displaBooks.style.display = 'none'
    displaContact.style.display = 'none'
  } else{
    displaList.style.display = 'flex'
    displaBooks.style.display = 'none'
    displaContact.style.display = 'none'
  }
  
}

function displayAdd(){
  if(displaBooks.style.display === 'none'){
    displaList.style.display = 'none'
    displaBooks.style.display = 'flex'
    displaContact.style.display = 'none'
  } else{
    displaList.style.display = 'none'
    displaBooks.style.display = 'flex'
    displaContact.style.display = 'none'
  }

}

function displayContact(){
  if(displaContact.style.display === 'none'){
    displaList.style.display = 'none'
    displaBooks.style.display = 'none'
    displaContact.style.display = 'flex'
  } else{
    displaList.style.display = 'none'
    displaBooks.style.display = 'none'
    displaContact.style.display = 'flex'
  }

}

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
}
function readFormData() {
  var formData = {};
  formData['author'] = document.getElementById('author').value;
  formData['book'] = document.getElementById('book').value;
  return formData;
}

function insertNewRecord(data) {
  const table = document.getElementById('List').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(table.length);
  newRow.insertCell(0).innerHTML = data.author;
  newRow.insertCell(1).innerHTML = data.book;
  newRow.insertCell(2).innerHTML = `<button  onClick='onDelete(this)'>Delete</button>`;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById('List').deleteRow(row.rowIndex);
    resetForm();
  }
}

const library = new Library();
library.awesomeBooks = [];

const saveBooks = () => {
  localStorage.setItem('myAwesomeBooks', JSON.stringify(library.awesomeBooks));
};

const getStorageData = () => {
  const localFormData = JSON.parse(localStorage.getItem('myAwesomeBooks'));
  if (localFormData == null) {
    library.awesomeBooks = [];
  } else {
    library.awesomeBooks = localFormData;
  }
};
window.onload = getStorageData();
const dt = new Date();
document.getElementById('date-time').innerHTML = dt;
