
/*====================DIGITAL CLOCK=================*/
setInterval(() => {
    let today= new Date();
  let time= today.getHours()+':'+today.getMinutes()+':'+ today.getSeconds();
  
  document.getElementById('thistime').innerHTML=time;
  }, 1000);
  
  let tods= new Date();
  const options = { weekday: 'long',year: 'numeric', month:'long' , day:'numeric'};
  let todsdate= tods.toLocaleDateString(undefined, options);
  document.getElementById('timeone').innerHTML=todsdate;


  /*====================to-do=================*/


showNotes();

//add to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-default">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {


  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}



//calci

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
item.addEventListener('click', (e) => {
  buttonText = e.target.innerText;
  console.log('Button text is ', buttonText);
  if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
  }
  else if (buttonText == 'C') {
      screenValue = "";
      screen.value = screenValue;
  }
  else if (buttonText == '=') {
      screen.value = eval(screenValue);
  }
  else {
      screenValue += buttonText;
      screen.value = screenValue;
  }

})
}