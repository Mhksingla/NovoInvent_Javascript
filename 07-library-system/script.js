// BOOK CLASS

class Book{

   constructor(title,author,isbn){

      this.title = title;

      this.author = author;

      this.isbn = isbn;

      this.available = true;
   }
}

// LIBRARY CLASS

class Library{

   #books = [];

   // ADD BOOK

   addBook(book){

      this.#books.push(book);

      this.renderBooks();
   }

   // REMOVE BOOK

   removeBook(isbn){

      this.#books =
      this.#books.filter(

         book => book.isbn !== isbn
      );

      this.renderBooks();
   }

   // LIST BOOKS

   listAvailable(){

      return this.#books.filter(

         book => book.available
      );
   }

   // RENDER UI

   renderBooks(){

      const bookList =
      document.getElementById("bookList");

      bookList.innerHTML = "";

      this.#books.forEach(book => {

         const div =
         document.createElement("div");

         div.classList.add("book");

         div.innerHTML = `

            <div>

               <h3>${book.title}</h3>

               <p>${book.author}</p>

               <small>
                  ISBN: ${book.isbn}
               </small>

            </div>

            <button
               class="delete"
               data-isbn="${book.isbn}">

               Delete

            </button>
         `;

         bookList.appendChild(div);
      });
   }
}

// LIBRARY INSTANCE

const library = new Library();

// FORM

const form =
document.getElementById("bookForm");

form.addEventListener(

   "submit",

   (event) => {

      event.preventDefault();

      // INPUTS

      const title =
      document.getElementById("title").value;

      const author =
      document.getElementById("author").value;

      const isbn =
      document.getElementById("isbn").value;

      // CREATE BOOK

      const book =
      new Book(title,author,isbn);

      // ADD BOOK

      library.addBook(book);

      form.reset();
   }
);

// DELETE BUTTONS

document
.getElementById("bookList")
.addEventListener(

   "click",

   (event) => {

      if(
         event.target.classList.contains(
            "delete"
         )
      ){

         const isbn =
         event.target.dataset.isbn;

         library.removeBook(isbn);
      }
   }
);