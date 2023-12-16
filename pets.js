// First set an id to zero, each item that is entered by the user will have an id and this sets up a value to go off of/add and subtract from.
let id = 0;

// Adding an event listener on the click of the add pet button.
document.getElementById("addPet").addEventListener("click", () => {
  // Setting a variable for my adoptable pets table with the query selector.
  let table = document.getElementById("adoptablePets");
  // Setting a variable for inserting one row into the table.
  let row = table.insertRow(1);
  // & then giving the rows an attribute to add ids to each row as I stated above.
  row.setAttribute("id", `item-${id}`);
  // This one will insert the value(text input) that was put into the pet name box into the first cell of the table.
  row.insertCell(0).innerHTML = document.getElementById("petName").value;
  // This will do the same with the pet species, inserted into the second cell, and same with pet age in the third cell.
  row.insertCell(1).innerHTML = document.getElementById("petSpecies").value;
  row.insertCell(2).innerHTML = document.getElementById("petAge").value;
  // I had the idea to also include images in the table, so I made some variables to make the .innerHTML in the table work.
  // I'm excited to expand on this idea more in the future, like different widths or the option to not include an image.
  let petPic = document.getElementById("petImg").value;
  console.log(petPic);
  let petPicHTML = `<img src='${petPic}' width = 150px height = 150px>`;
  row.insertCell(3).innerHTML = petPicHTML;
  //This next part makes a variable so that the delete button will appear and be functionable in the fourth cell.
  let deletePet = row.insertCell(4);
  //This will make it so when the delete button is created, the id number will be attached to the row (keeps going up as the rows are created) & then will only delete the row with the matching id.
  deletePet.appendChild(createDeleteButton(id++));
  //This gets rid of the text in the input boxes / turns the value into an empty string
  document.getElementById("petName").value = "";
  document.getElementById("petSpecies").value = "";
  document.getElementById("petAge").value = "";
  document.getElementById("petImg").value = "";
});

//Here is the delete button function, with the row id as the argument. We create the element(the button itself) & then add the onclick function, that simply finds the element by id and then removes it from the parent node.
function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-info";
  btn.id = id;
  btn.innerHTML = "Remove";
  btn.onclick = () => {
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
