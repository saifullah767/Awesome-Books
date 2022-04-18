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
  cell3.innerHTML = `<button>Delete</button>`;
}
