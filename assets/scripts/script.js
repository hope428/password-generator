// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var includeLowercase;
var includeUppercase;
var includeSpecial;
var includeNumeric;

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
'{', '[', '}', ']', '|', '\\', ':', ';', '"', "'", "<", ',', '>', '.', '?', '/']
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

//gets users preferences
function generatePassword() {
  length = prompt("Enter password length between 8 and 128");

  //validates user selected length
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  }

  includeLowercase = confirm("Do you want lowercase letters?");
  includeUppercase = confirm("Do you want uppercase letters?");
  includeSpecial = confirm("Do you want special characters?");
  includeNumeric = confirm("Do you want numbers?");

  //validates user input
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeSpecial &&
    !includeNumeric
  ) {
    alert("At least one character type must be selected")
    return;
  }


  //creates password
  var password = "you passed"

  return password
}

function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
