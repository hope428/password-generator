// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var includeLowercase;
var includeUppercase;
var includeSpecial;
var includeNumeric;

//gets users preferences
function getUserPreferences() {
  length = prompt("Enter password length between 8 and 128");

  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  }

  includeLowercase = confirm("Do you want lowercase letters?");
  includeUppercase = confirm("Do you want uppercase letters?");
  includeSpecial = confirm("Do you want special characters?");
  includeNumeric = confirm("Do you want numbers?");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getUserPreferences);
