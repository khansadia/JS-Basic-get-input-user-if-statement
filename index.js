alert(" This is an alert message! Dismiss me before the program continue")
 console.log("Alert is dismissed");

 // Prompt the user for the name. the answer that is return can be saved in a variable
 const nameOfUser=prompt ("Please enter your name");
 
 // alert works some this 
 
 alert("Thankyou" + nameOfUser + "!");
 // Ask if user is older than 20 years old
 const isOver20 = confirm("Are you over the age of 20?");
 
 // Alert the answer.
 alert(`Were you older then 20? ${isOver20}`);
/* 
 // Ask if user is older than 20 years old
const isOver20 = window.confirm("Are you over the age of 20?");

// Alert the answer.
window.alert(`Were you older then 20? ${isOver20}`); */