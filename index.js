function displayList(){
    const Addbook = document.getElementById('Add-Books');
    // const displalist = document.getElementById('Book-List');
    if(  Addbook.style.display === 'flex'){
    Addbook.style.display = 'none';}
    // displalist.style.display = 'none';
    else{
        Addbook.style.display = 'flex';
    }
}

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
}

function readFormData() {
  var formData = {};
  formData["author"] = document.getElementById("author").value;
  formData["book"] = document.getElementById("book").value;
  return formData;
}


function insertNewRecord(data) {
  var table = document.getElementById("List").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.author;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.book;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<button  onClick="onDelete(this)">Delete</button>`;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("List").deleteRow(row.rowIndex);
    resetForm();
  }
}


