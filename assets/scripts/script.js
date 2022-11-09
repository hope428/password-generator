// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var includeLowercase;
var includeUppercase;
var includeSpecial;
var includeNumeric;

var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function getPreferences() {
  length = prompt("Enter password length between 8 and 128");

  //validates user selected length
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  } else {
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
      alert("At least one character type must be selected");
      return;
    }
  }
}

function createArray() {
  //creates array of characters based on user preferences
  var passwordCharactersArray = [];

  if (includeLowercase) {
    passwordCharactersArray =
      passwordCharactersArray.concat(lowercaseCharacters);
  }

  if (includeUppercase) {
    passwordCharactersArray =
      passwordCharactersArray.concat(uppercaseCharacters);
  }

  if (includeSpecial) {
    passwordCharactersArray = passwordCharactersArray.concat(specialCharacters);
  }

  if (includeNumeric) {
    passwordCharactersArray = passwordCharactersArray.concat(numericCharacters);
  }

  return passwordCharactersArray;
}

//gets users preferences
function generatePassword() {
  //call function to set up preferences
  getPreferences();
  //generate password based on user preferences array
  if (
    length >= 8 &&
    length <= 128 &&
    (includeLowercase || includeNumeric || includeSpecial || includeUppercase)
  ) {
    var characterArray = createArray();
    var password = "";
    for (let i = 0; i < length; i++) {
      password =
        password +
        characterArray[Math.floor(Math.random() * characterArray.length)];
    }
    return password;
  } else {
    password = ""
    return password
  }
}

//Adds password to box
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
