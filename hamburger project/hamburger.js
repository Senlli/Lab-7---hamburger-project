// -------------------------------------------------------------
// Hamburger Constructor Function
// This function allows creation of multiple unique hamburgers
// following the Object-Oriented Programming (OOP) pattern.
// -------------------------------------------------------------
function Hamburger(bunType, vegetables, cheese, sauce, pattyType, pattyCount, extras) {

    // Store properties of the hamburger
    this.bunType = bunType;               // e.g. "sesame", "brioche"
    this.vegetables = vegetables;         // e.g. ["lettuce", "tomato", "onion"]
    this.cheese = cheese;                 // e.g. "cheddar", "swiss"

    // Optional: Sauce as a sub-object to show nested objects
    this.sauce = {
        type: sauce,                      // e.g. "BBQ", "mayo"
        spicy: false                       // default property for fun
    };

    this.pattyType = pattyType;           // e.g. "beef", "chicken", "veggie"
    this.pattyCount = pattyCount;         // e.g. 1, 2, 3
    this.extras = extras;                 // e.g. ["pickles", "jalapeños", "olives"]

    // -------------------------------------------------------------
    // Method: describe()
    // Returns a full descriptive sentence of the hamburger
    // -------------------------------------------------------------
    this.describe = function() {
        return `This hamburger has a ${this.bunType} bun, ${this.pattyCount} ${this.pattyType} patty/patties, ` +
            `${this.cheese} cheese, vegetables such as ${this.vegetables.join(", ")}, ` +
            `a ${this.sauce.type} sauce, and extra toppings like ${this.extras.join(", ")}.`;
    };
}

// -------------------------------------------------------------
// Function to display a hamburger on the webpage
// -------------------------------------------------------------
function displayHamburger(hamburger) {
    const container = document.getElementById("hamburgerContainer");
    const p = document.createElement("p");
    p.className = "hamburger-description";
    p.textContent = hamburger.describe(); // Use the method exactly as in OOP
    container.appendChild(p);
}

// -------------------------------------------------------------
// STEP: Create multiple hamburgers using the 'new' keyword
// -------------------------------------------------------------
const burger1 = new Hamburger(
    "sesame",
    ["lettuce", "tomato", "onion"],
    "cheddar",
    "BBQ",
    "beef",
    2,
    ["pickles", "jalapeños"]
);

const burger2 = new Hamburger(
    "brioche",
    ["spinach", "grilled peppers"],
    "swiss",
    "mayo",
    "chicken",
    1,
    ["olives"]
);

const burger3 = new Hamburger(
    "whole wheat",
    ["arugula", "tomato", "onion"],
    "mozzarella",
    "special sauce",
    "veggie",
    3,
    ["jalapeños", "pickles"]
);

// -------------------------------------------------------------
// STEP: Display each hamburger on the webpage
// -------------------------------------------------------------
displayHamburger(burger1);
displayHamburger(burger2);
displayHamburger(burger3);