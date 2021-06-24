// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var char = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", '"', "'",];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword()
{
  var length = parseInt (prompt('How many characters would you like in your password?', 'min 8 max 128' ));

  if (isNaN(length)) {
    var length = parseInt (prompt('How many characters would you like in your password?', 'min 8 max 128' ));  }
  else if (length < 8 && length > 128){
    var length = parseInt (prompt('How many characters would you like in your password?', 'min 8 max 128' ));
  }

  let passwordArr = []
  //Starts asking how they want their password
  var upper = confirm ("Do you want uppercase characters?");
  if (upper === true){
    passwordArr = upperCase
  }
  
  var lower = confirm ("Do you want lowercase characters?");
  if (lower === true && passwordArr.length > 0){ //If they want a lowercase char and already chose uppercase char
    passwordArr = passwordArr.concat(lowerCase)
  } else if (lower) { //They did not choose uppercase char, but do want lowercase char
    passwordArr = lowerCase
  }


  var special = confirm ("Do you want special characters?");
  if (special === true && passwordArr.length > 0){ // If they want special characters and already chose an option
    passwordArr = passwordArr.concat(char)
  } else if (special) { // They did not choose above option but want special characters
    passwordArr = char
  }
  
  var doesUserWantNumbers = confirm ("Do you want numbers?");
  if (doesUserWantNumbers === true && passwordArr.length > 0){ //If they want numbers and already chose an option
    passwordArr = passwordArr.concat(number)
  } else if (passwordArr.length <1) { // They chose no above options, forces to choose at least 1 option
    passwordArr = number
  }

  var passwordReturn = "" //Making a string to fill with chosen characters
  for (let index = 0; index < length; index++) { // Iterate as many characters as chosen 
    var randomPasswordIndex = Math.floor(Math.random() * passwordArr.length) 
    passwordReturn += passwordArr[randomPasswordIndex]
    
  }

  return passwordReturn



}
  


 



 



