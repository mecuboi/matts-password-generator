// Assignment Code
var generateBtn = document.getElementById("generate");


var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1', '2','3','4','5','6','7','8','9','0'];
var special = ['!', '@', '#', '$','%','^','&','*','(',')',',','<','.','>','?','/']


// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  
function generatePassword(){

  var characterLength = window.prompt("How many characters would you like your password to have? (8 to 128)");
  
  if(characterLength === null || characterLength == 0) {
    window.alert("Alright then!");
    return;

  } else if (characterLength < 8 || characterLength > 128) {
    window.alert('Invalid character length selected: ' + characterLength);
    writePassword();
    return;


  } else {
    var lowercase = window.confirm('Would you like to include lowercase?')
    var uppercase = window.confirm('Would you like to include uppercase?')
    var numeric = window.confirm('would you like to include numeric?')
    var specialCharacters = window.confirm('would you like to include special characters?')
  }




  function generatePassword() {
    return;
  }

  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
