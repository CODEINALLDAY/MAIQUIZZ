//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;
var ellaMaiScore = 0;
var herScore = 0;
var jacquees = 0;
var arinRay = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");




//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", her);
q1a2.addEventListener("Click", ellaMai );
q1a3.addEventListener("Click", jacquees);
q1a4.addEventListener("Click", arinRay );

q2a1.addEventListener("click", jacquees);
q2a2.addEventListener("Click", arinRay );
q2a3.addEventListener("Click", her);
q2a4.addEventListener("Click", ellaMai );

q3a1.addEventListener("click", ellaMai);
q3a2.addEventListener("Click", arinRay);
q3a3.addEventListener("Click", her);
q3a4.addEventListener("Click",jacquees);


//#TODO: Define quiz functions here
function her() { herScore +=1; questionCount +=1;if (questionCount >=3) result.innerHTML = "HER" {update result();} 
}
function ellaMai() {ellaMaiScore +=1; questionCount +=1; else if (questionCount >=3) result.innerHTML = "EllaMai"; {update result();} 
alert("EllaMai")}
function arinray() {arinrayScore +=1; questionCount +=1; else if (questionCount >=3) result.innerHTML = "ArinRay" {update result();} 
alert("ArinRay)")}
function jacquees() {jacqueesScore +=1; questionCount +=1;else if (questionCount >=3) result.innerHTML = "Jacquees" {update result();} 
alert("Jacquees")}


            
var result = document.getElementByID ("result");
  
  












