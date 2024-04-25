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
