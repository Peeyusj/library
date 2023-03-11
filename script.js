const addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", (e) => {
  modalcontainer.classList.add("show");
});
const cancelbtn = document.getElementById("cancelbtn");
cancelbtn.addEventListener("click", (e) => {
  modalcontainer.classList.remove("show");
});
const info = document.getElementById("info");
function infoclick() {
  if (info.textContent == "show info") {
    feedatacontainerid.classList.add("show");
    info.textContent = "hide info";
    console.log(info.textContent);
  } else {
    feedatacontainerid.classList.remove("show");
    info.textContent = "show info";
    console.log("hi");
  }
}

const addBtn = document.querySelector("#addbtn");
addBtn.addEventListener("click", () => {
  if (
    form.title.value &&
    form.author.value &&
    form.pages.value &&
    form.compee.value
  ) {
    if (+form.pages.value >= +form.compee.value) addBookToLibrary();
    else {
      alert("Total pages must be greater than the completed pages");
    }
  } else {
    alert("Fill All Input Fields");
  }
});

function set(p, q) {
  feedbooks = document.getElementById("books");
  feedbooks.textContent = myLibrary.length;
  feedtd = document.getElementById("tp");
  feedcp = document.getElementById("comp");
  if (myLibrary.length > 0) {
    const res = p.reduce(
      (accumulator, currentValue) => +accumulator + +currentValue
    );
    feedtd.textContent = res;
    const res1 = q.reduce(
      (accumulator, currentValue) => +accumulator + +currentValue
    );
    feedcp.textContent = res1;
  } else {
    feedtd.textContent = 0;
    feedcp.textContent = 0;
  }
}

class book {
  constructor(title, author, pages, compee) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.compee = form.compee.value;
  }
}
let myLibrary = [];
let newbook;

function addBookToLibrary() {
  modalcontainer.classList.remove("show");
  newbook = new book(title, author, pages, compee);
  myLibrary.unshift(newbook);
  render();
}
function render() {
  const display = document.getElementById("Library-container");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
  var some = [];
  var some1 = [];
  myLibrary.map((item) => {
    some.push(item.pages);
  });
  myLibrary.map((item) => {
    some1.push(item.compee);
  });
  set(some, some1);
}
function rerender(k) {
  myLibrary.splice(k, 1);
  const display = document.getElementById("Library-container");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
  var some = [];
  var some1 = [];
  myLibrary.map((item) => {
    some.push(item.pages);
  });
  myLibrary.map((item) => {
    some1.push(item.compee);
  });
  set(some, some1);
}

function createBook(item) {
  const library = document.querySelector("#Library-container");
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const compeeDiv = document.createElement("div");
  const removeBtn = document.createElement("button");

  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", myLibrary.indexOf(item));
  titleDiv.textContent = item.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authDiv.textContent = item.author;
  authDiv.classList.add("author");
  bookDiv.appendChild(authDiv);

  pageDiv.textContent = item.pages;
  pageDiv.classList.add("pages");
  bookDiv.appendChild(pageDiv);

  compeeDiv.textContent = item.compee;
  compeeDiv.classList.add("compee");
  bookDiv.appendChild(compeeDiv);
  removeBtn.textContent = "Delete";
  removeBtn.classList.add("rbtn");
  bookDiv.appendChild(removeBtn);
  library.appendChild(bookDiv);
  removeBtn.addEventListener("click", () => {
    rerender(myLibrary.indexOf(item));
  });
}
