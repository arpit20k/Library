const myLibrary=[];
class Book{
    title;
    author;
    id;
    status;
  constructor(title,author,status) 
  {
    this.id=crypto.randomUUID();
    this.title = title;
    this.author=author;
    this.status=status;
  }  
  toggleRead(){
    this.status=!this.status;
  }
};

function addBook(title,author,status)
  {
    myLibrary.push(new Book(title,author,status));
  }

addBook("Harry Potter", "J.K. Rowling",true);
addBook("The Hobbit", "J.R.R. Tolkien",false);
addBook("Name of the Wind","Patric Rothfuss",true)

displayLibrary();
    function displayLibrary() {
    const cards = document.getElementById("cards");

    cards.innerHTML = "";

    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Status: ${book.status}</p>
            <button>Toggle Status</button>
        `;
        const button = card.querySelector("button");

        button.addEventListener("click", () => {
            book.toggleRead();
            displayLibrary(); 
        });

        cards.appendChild(card);
    }
}

const form = document.getElementById("book-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const status = document.querySelector(".read").value;
    addBook(title, author,status);
    displayLibrary();

    form.reset();
});
