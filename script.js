// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var password = generatePassword();
  
  

  passwordText.value = password;
}

var length;
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allCharacters = number.concat(symbol,lower,upper);
var randomPassword =[];

function generatePassword() {
  length = window.prompt(
    "How many characters would you like your password to be? Must be between 8-128 characters."
  );
  if (length > 7 && length < 128) {
    lower = window.confirm("Use lower case letters?");
  } else {
    length = window.prompt("Password must be between 8-128 characters.");
  }
  lower = window.confirm("Use lower case letters?");
  upper = window.confirm("Would you like to use uppercase letters?");
  symbol = window.confirm("Would you like to use special characters?");
  number = window.confirm("Would you like to use numbers?");

  if (
    lower === false &&
    upper === false &&
    symbol === false &&
    number === false
  ) {
    window.alert(
      "Password must have at least one of the characters. Please try again."
    );
    return;
  }

if (lower===true) {lower;

}
if (upper===true) {upper;

}
if (number===true) {number;

}
if (symbol===true) {symbol;

}
for (var i = 0; i < length; i++) {
  randomPassword = randomPassword + allCharacters[Math.floor(Math.random() * allCharacters.length)];
  document.querySelector("#password").innerHTML = randomPassword;

  
  

}
}




