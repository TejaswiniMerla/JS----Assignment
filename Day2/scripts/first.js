var txt
var name = prompt("Please Enter Your Name");
if ( name== null || name == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + name + "! How are you today?";
  }
console.log(txt);