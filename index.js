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
  var table = document.getElementById('List').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.author;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.book;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<button  onClick='onDelete(this)'>Delete</button>`;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById('List').deleteRow(row.rowIndex);
    resetForm();
  }
}
