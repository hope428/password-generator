// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";
var passwordPreferences = {
  length: 0,
  includeLowercase: false,
  includeUppercase: false,
  includeSpecial: false,
  includeNumeric: false,
};

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
  passwordPreferences.length = prompt(
    "Enter password length between 8 and 128"
  );

  //validates user selected length
  if (passwordPreferences.length < 8 || passwordPreferences.length > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  } else if (isNaN(passwordPreferences.length)) {
    alert("Enter a valid number");
  } else {
    passwordPreferences.includeLowercase = confirm(
      "Do you want lowercase letters?"
    );
    passwordPreferences.includeUppercase = confirm(
      "Do you want uppercase letters?"
    );
    passwordPreferences.includeSpecial = confirm(
      "Do you want special characters?"
    );
    passwordPreferences.includeNumeric = confirm("Do you want numbers?");

    //validates user input
    if (
      !passwordPreferences.includeLowercase &&
      !passwordPreferences.includeUppercase &&
      !passwordPreferences.includeSpecial &&
      !passwordPreferences.includeNumeric
    ) {
      alert("At least one character type must be selected");
      return;
    }
  }
}

function createArray() {
  //creates array of characters based on user preferences
  var passwordCharactersArray = [];

  if (passwordPreferences.includeLowercase) {
    passwordCharactersArray =
      passwordCharactersArray.concat(lowercaseCharacters);
      password = password + lowercaseCharacters[Math.floor(Math.random()* lowercaseCharacters.length)]
  }

  if (passwordPreferences.includeUppercase) {
    passwordCharactersArray =
      passwordCharactersArray.concat(uppercaseCharacters);
      password = password + uppercaseCharacters[Math.floor(Math.random()* lowercaseCharacters.length)]
  }

  if (passwordPreferences.includeSpecial) {
    passwordCharactersArray = passwordCharactersArray.concat(specialCharacters);
    password = password + specialCharacters[Math.floor(Math.random()* specialCharacters.length)]
  }

  if (passwordPreferences.includeNumeric) {
    passwordCharactersArray = passwordCharactersArray.concat(numericCharacters);
    password = password + numericCharacters[Math.floor(Math.random()* numericCharacters.length)]
  }

  console.log(password)
  return passwordCharactersArray;
}

//gets users preferences
function generatePassword() {
  //call function to set up preferences
  getPreferences();
  //generate password based on user preferences array
  //if check to only run password if length is valid and at least one criteria is selected
  if (
    passwordPreferences.length >= 8 &&
    passwordPreferences.length <= 128 &&
    (passwordPreferences.includeLowercase ||
      passwordPreferences.includeNumeric ||
      passwordPreferences.includeSpecial ||
      passwordPreferences.includeUppercase)
  ) {
    //calls create Array function
    var characterArray = createArray();
    for (let i = password.length; i < passwordPreferences.length; i++) {
      password =
        password +
        characterArray[Math.floor(Math.random() * characterArray.length)];
    }
    return password;
  } else {
    password = "";
    return password;
  }
}

//Adds password to box
function writePassword() {
  password = ""
  password = generatePassword();
  console.log(password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
