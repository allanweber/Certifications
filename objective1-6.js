function Book() {
    //just creates an  empty book.
}

 function Book(title, length, author) {
    this.title = title;
    this.Length = length;
    this.author = author;
 }

 Book.prototype = {
    ISBN: "",
    Length: -1,
    genre: "",
    covering: "",
    author: new Author(),
    currentPage: 0,
    title: "",

    flipTo: function FlipToAPage(pNum) {
        this.currentPage = pNum;
    },

    turnPageForward: function turnForward() {
        this.flipTo(this.currentPage++);
    },

    turnPageBackward: function turnBackward() {
        this.flipTo(this.currentPage--);
    }
 };

function Author() {
}
function Author(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}
Author.prototype = {
    firstName: "",
    lastName: "",
    gender: "",
    BookCount: 0
}



window.onload = function () {
    var books = new Array(new Book(),
        new Book("First Edition", 350, new Author("Random", "Author", "M"))
    );

    var popupBook = Object.create(books[1], {
        hasSound: { value: true },
        showPopUp: {
            value: function showPop() {

            }
        }
    });
    //alert(popupBook.title);


    function PopUpBook() {
        Book.call(this);
    }
    PopUpBook.prototype = Book.prototype;
    PopUpBook.prototype.hasSound = false;
    PopUpBook.prototype.showPopUp = function ShowPop() { };

    var pop = new PopUpBook().prototype = new Book("Asp.NET", 350, new Author("Allan", "Weber", "C"))

    //alert(pop.author.firstName);


    var book = { Title: "My book about things", Author: "Jane Doe", Pages: 400 };
    //alert(book.Title);

    Array.prototype.sum = function () {
            var res = 0;
            for (var i = 0; i < this.length; i++)
                    res += this[i];
            return res;
    };
    var x = new Array(2);
    x[0] = 5;
    x[1] = 6;
    document.write(x.sum());
}

