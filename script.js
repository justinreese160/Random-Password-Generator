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
  var length = parseInt (prompt('How many characters would you like in your password?', 'min 8 max 128' ))
  console.log(length)

  if (isNaN(length)) {
    var length = parseInt (prompt('How many characters would you like in your password?', 'min 8 max 128' ))  }
  else if (length < 8 && length > 128){
    var length = parseInt (prompt('How many characters would you like in your password?', 'min 8 max 128' ))
  }
  let passwordArr = []
  var upper = confirm ("Do you want uppercase characters?")
  if (upper === true){
    passwordArr = upperCase
  }
  var lower = confirm ("Do you want lowercase characters?")
  if (lower === true && passwordArr.length > 0){
    passwordArr.concat(lower)
  }
  var special = confirm ("Do you want special characters?")
  // if (upper === true){
  //   passwordArr = upperCase
  // }
  var number = confirm ("Do you want numbers?")
  console.log (upper,lower,special,number);
 



 
}


