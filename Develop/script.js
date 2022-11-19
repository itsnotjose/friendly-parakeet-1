// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var numericCharacters = [1,2,3,4,5,6,7,8,9,0]
var uppercaseCharacters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var lowercaseCharacters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var possibleCharacters = [];
// Number length
numberofCharacters = prompt('What length would you likt your password 8- 128');
if (numberofCharacters < 8 || numberofCharacters > 128) {
  return "Please enter the right amount";
}
else if (isNaN(numberofCharacters)) {
  numericCharacters = prompt ("This is not a number");
}
else {
  alert("Your password will be " + numberofCharacters + " characters long.");
}

// uppercase
wantsUppercase = confirm("Would you like uppercase letters?");
if (wantsUppercase) {
  alert("Your password will have uppercase characters.");
}
else {
  alert("Your password will NOT have uppercase characters.");
}

//lowercase
wantsLowercase = confirm("Do you want lowercase characters?");
  if (wantsLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }
// numbers
wantsNumbers = confirm("Do you want to use numbers?");
  if (wantsNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  wantsSpecial = confirm("Do you want special characters?");
  if (wantsSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }
  if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSpecial === false) {
    return "Please select at least one character type.";
  };

  // concat
  if (wantsLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (wantsUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (wantsNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (wantsSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // random
  let finalPassword = ""
  for (let i = 0; i < numberofCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);