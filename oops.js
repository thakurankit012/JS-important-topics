// Define a class named "Car"
class Car {
  // Constructor to initialize the object with properties
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display information about the car
  displayInfo() {
    console.log(`This is a ${this.year} ${this.brand} ${this.model}.`);
  }
}

// Create an instance of the Car class
let myCar = new Car("Toyota", "Corolla", 2022);

// Call the displayInfo method to show information about the car
myCar.displayInfo(); // Output: This is a 2022 Toyota Corolla.
