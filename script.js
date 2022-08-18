// Assignment Code
var generateBtn = document.getElementById("generate");

var lower = "qwertyuiopasdfghjklzxcvbnm"
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
var number = "1234567890"
var special = ",./<>?!@#$%^&*#"



// Write password to the #password input

function writePassword() {
  
 
  var passwordText = document.querySelector("#password");
  var combinedChars = ""
  var password = "";


  function generatePassword(){

    var characterLength = window.prompt("How many characters would you like your password to have? (8 to 128)");

    if(characterLength === null || characterLength == 0) {
      window.alert("Alright then! See you next time!");
      return;
  
    } else if (characterLength < 8 || characterLength > 128) {
      window.alert('Invalid character length selected: ' + characterLength);
      writePassword();
      return;
  
  
    } else {
      var lowercase = window.confirm('Would you like to include lowercase?')
    }

    if (lowercase) {
      combinedChars = lower;
    } 
    var uppercase = window.confirm('Would you like to include uppercase?')

    if (uppercase) {
      combinedChars = upper.concat(combinedChars);
    }
    var numeric = window.confirm('would you like to include numeric?')

    if (numeric) {
      combinedChars = number.concat(combinedChars);
    }
    var specialCharacters = window.confirm('would you like to include special characters?')
    if (specialCharacters) {
      combinedChars = special.concat(combinedChars);
    }

    if (combinedChars == ""){
      window.alert(".................. -_- let's try that again");
      writePassword();
      return;
    }

  //https://w3collective.com/random-password-generator-javascript/ (source of this code)
    for (var i = 0; i < characterLength; i++) {
       password += combinedChars.charAt(Math.floor(Math.random() * combinedChars.length));
      
    }

  }
  generatePassword()

  passwordText.value = password;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
