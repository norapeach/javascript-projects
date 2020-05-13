/* 
See index.html for page description/assignment header
Requirements:
Use the constructor notation to create a template for the object. 
Create at least 2 instances of the object.
The object must have a minimum of 2 properties and 1 method.
Display the properties, values, and method(s) that result, on a web page using the textContent or InnerHTML properties.
*/

// Cat object constructor function
function Cat(name, breed, age, size) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.size = size; // small, medium, large
    this.mood = "";
    this.hungry = "";
    this.setMood = function() {
        var mood = ["cheery", "spunky", "grumpy", "sleepy", "playful", "snuggly", "curious"];
        var i = Math.floor((Math.random() * mood.length)); // gets random value between 0 and the array length
        return mood[i]; // returns a random value from the mood array
    };
    this.isHungry = function() {
        var time = new Date();
        if (time.getHours() % 2 == 0) { // if the current hour is even
            this.hungry = "Can haz food?"; // Cat is hungry
        } else {
            this.hungry = "No, I not hunger. Just nap.";
        }
    };
}

// Instantiate Cat objects
var eo = new Cat("E.O.", "Tuxedo", 5, "small");
var esme = new Cat("Esme", "Norwegian Forest Cat", 3, "medium");
var golda = new Cat("Golda", "Mix", 5, "large");
var winston = new Cat("Winston", "unknown", 4, "small");

// generate random moods for each (could be done in another way e.g. loop)
eo.mood = eo.setMood();
esme.mood = esme.setMood();
golda.mood = golda.setMood();
winston.mood = winston.setMood();

// call isHungry method to output results based on current hour
eo.isHungry();
esme.isHungry();
golda.isHungry();
winston.isHungry();

/////// Display constructed instances
display("cat1", eo.name);
display("b1", eo.breed);
display("a1", eo.age);
display("s1", eo.size);
display("m1", eo.mood);
display("h1", eo.hungry);

display("cat2", esme.name);
display("b2", esme.breed);
display("a2", esme.age);
display("s2", esme.size);
display("m2", esme.mood);
display("h2", eo.hungry);

display("cat3", golda.name);
display("b3", golda.breed);
display("a3", golda.age);
display("s3", golda.size);
display("m3", golda.mood);
display("h3", eo.hungry);

display("cat4", winston.name);
display("b4", winston.breed);
display("a4", winston.age);
display("s4", winston.size);
display("m4", winston.mood);
display("h4", eo.hungry);


// function to get element and change content
function display(id, content) {
    var el = document.getElementById(id);
    el.textContent = content;
}




