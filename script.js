// Assignment Code
var generateBtn = document.querySelector("#generate");

// var characterLength = [];
// var lowercase = [];
// var uppercase = [];
// var numeric = [];
// var specialCharacters = [];


// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var characterLength = window.prompt("How many characters would you like your password to have? (8 to 128)");
  
  if (characterLength < 8 || characterLength > 128) {
    window.confirm('Invalid character length selected: ' + characterLength);
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
generateBtn.addEventListener("click", writePassword());
