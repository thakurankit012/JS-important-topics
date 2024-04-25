// Define a class name
class Car {
  // Constructor to initialize the object with properties
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display information about class
  displayInfo() {
    console.log(`This is a ${this.year} ${this.brand} ${this.model}.`);
  }
}

// Create an instance of the class
let myCar = new Car("Toyota", "Corolla", 2022);

// Call the displayInfo method to show information about the class
myCar.displayInfo(); // Output:


 //2nd



// Define a class for books
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
  }
}

// Define a class for users
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.booksCheckedOut = [];
  }

  // Method to check out a book
  checkOutBook(book) {
    this.booksCheckedOut.push(book);
    console.log(`${this.name} checked out: ${book.title}`);
  }

  // Method to return a book
  returnBook(book) {
    const index = this.booksCheckedOut.indexOf(book);
    if (index !== -1) {
      this.booksCheckedOut.splice(index, 1);
      console.log(`${this.name} returned: ${book.title}`);
    } else {
      console.log(`${this.name} doesn't have ${book.title} checked out.`);
    }
  }

  // Method to display checked out books
  displayCheckedOutBooks() {
    if (this.booksCheckedOut.length === 0) {
      console.log(`${this.name} has no books checked out.`);
    } else {
      console.log(`${this.name} has the following books checked out:`);
      this.booksCheckedOut.forEach(book => {
        console.log(`- ${book.title}`);
      });
    }
  }
}

// Create some book instances
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("1984", "George Orwell", 1949);

// Create some user instances
let user1 = new User("Alice", 25);
let user2 = new User("Bob", 30);

// Perform some operations
user1.checkOutBook(book1);
user2.checkOutBook(book2);
user1.checkOutBook(book3);
user1.displayCheckedOutBooks();
user2.displayCheckedOutBooks();
user1.returnBook(book1);
user1.displayCheckedOutBooks();


