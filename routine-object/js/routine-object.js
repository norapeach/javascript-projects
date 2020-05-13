/******************************************************************
ROUTINE OBJECT
See index.html for page description/assignment header
Constructs a Routine object instance that models an array of tasks
(could be an array of objects), a challenge and something fun to be
included in the routine. Each Routine has a date property that 
stores the date on which the Routine starts being tracked. 
The methods are primarily for accessing, 
modifying the object's property values.
*****************************************************************/
/////// Routine object constructor function
function Routine(label) { // passed a label for the Routine e.g. "Morning"

    // properties
    this.label = label;
    this.rDate = new Date(); // default is current Date/time of user browser when the Routine is added TODO: double check if I need to use a window object from BOM or DOM? w3schools?
    this.tasks = []; // default empty array that will store taskLabel strings --> could be built out to be a related object (task label, date, description, completed t/f, reflect, w methods)
    this.challenge = "";
    this.fun = []; // default empty array that will store funLabel strings

    // methods
    this.getLabel = function() {
        return this.label;
    };

    this.setLabel = function(labelString) {
        this.label = labelString; // sets Routine.label to passed labelString
    };
    
    this.getDate = function() {
        return this.rDate;
    };

    this.setDate = function(dateString) {
        this.rDate = new Date(dateString); // sets rDate to passed dateString - customizes when the Routine should start tracking
    };

    this.getTask = function(index) {
        // TODO: add if structure to validate if task exists
        return this.tasks[index];
    };

    this.addTask = function(labelString) {
        this.tasks.push(labelString); // adds passed labelString to the end of the tasks array - currently just the name of task
    } 
    
    this.getChallenge = function() {
        return this.challenge;
    };

    this.setChallenge = function(challString) {
        this.challenge = challString; // sets Routine.label to passed labelString
    };

    this.getFun = function(index) {
        // TODO: add if structure to validate if task exists
        return this.fun[index];
    };

    this.getRandomFun = function() {
        var fun = this.fun;
        var i = Math.floor((Math.random() * fun.length)); // gets random value between 0 and the array length
        return fun[i]; // returns a random value from the mood array
    }

    this.addFun = function(labelString) {
        this.fun.push(labelString); // adds passed labelString to the end of the tasks array - currently just the name of task
    }
} /////// END ROUTINE CONSTRUCTOR 


/******************************************************************
Driver code to create, then display the Routine objects defined 
above
*****************************************************************/

// Instantiate two Routine objects
 var morning = new Routine("Morning");
 var evening = new Routine("Evening");

 // Set property values
 morning.addTask("meditate for 10 minutes");
 morning.addTask("brush teeth");
 morning.addTask("check the news");
 morning.addTask("take vitamins");
 morning.addTask("eat a healthy breakfast");

 morning.setChallenge("List three things I'm grateful for after I: " + morning.getTask(1));

 morning.addFun("Listen to upbeat music");
 morning.addFun("Wear a favorite outfit");
 morning.addFun("Take a silly selfie");

 evening.addTask("Do dishes");
 evening.addTask("Tidy for 15 minutes");
 evening.addTask("Read at least 3 pages of free-time book");
 evening.addTask("Drink a cup of tea");

 evening.setChallenge("No screens 1 hour before sleep");

 evening.addFun("Text a friend");
 evening.addFun("Put on a comedy movie while doing dishes");
 evening.addFun("Wear silly PJs");

// general function to get element and change content
function displayBasic(id, content) {
    var el = document.getElementById(id);
    el.textContent = content;
}

function displayViaClass(rNumber, c, content) {
    var els = document.getElementsByClassName(c) // get the specific child element via class name c e.g. td
    els[rNumber].textContent = content; // update that specific td textContent to display task label
}
/////////// DISPLAY TWO ROUTINES ////////////
// Diplay Morning label
displayBasic("routine1", morning.getLabel());

// Diplay Morning Tasks
displayViaClass(0, "T1", morning.getTask(1));
displayViaClass(0, "T2", morning.getTask(0));
displayViaClass(0, "T3", morning.getTask(2));
displayViaClass(0, "T4", morning.getTask(3));
displayViaClass(0, "T5", morning.getTask(4));

// Display Challenge / Fun
displayViaClass(0, "C1", morning.getChallenge());
displayViaClass(0, "F1", morning.getRandomFun());

// Diplay Evening label
displayBasic("routine2", evening.getLabel());

// Diplay Evening Tasks
displayViaClass(1, "T1", evening.getTask(1));
displayViaClass(1, "T2", evening.getTask(0));
displayViaClass(1, "T3", evening.getTask(2));
displayViaClass(1, "T4", evening.getTask(3));

// Display Challenge / Fun
displayViaClass(1, "C1", evening.getChallenge());
displayViaClass(1, "F1", evening.getRandomFun());





