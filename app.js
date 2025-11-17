const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", function () {
  let newNota = document.createElement("p");
  let imgDelete = document.createElement("img");
  newNota.className = "input-box";
  newNota.setAttribute("contenteditable", "true");
  imgDelete.setAttribute("src", "images/delete.png");
  notesContainer.appendChild(newNota).appendChild(imgDelete);
  saveNotes();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
    // } else if (e.target.tagName === "P") {
    //   notes = document.querySelectorAll(".input-box");
    //   notes.forEach(nota => {
    //     nota.onkeyup = function () {
    //       saveNotes();
    //     };
    //   });
  }
});

notesContainer.addEventListener("keyup", function (e) {
  if (e.target.classList.contains("input-box")) {
    saveNotes();
  }
});
function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
