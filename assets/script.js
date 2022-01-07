// Generate password code

// Generate password function
var generatePassword = function() {

  var passwordLength = "";


  //Password Length//


  //Ask if user wants to specify length (with default 8)
  var lengthConfirm = window.confirm("Would you like to specify length of password?");
  console.log("Length selected: " + lengthConfirm);

  //If yes to setting length, ask for input from 8 - 128
  if (lengthConfirm) {

    //Loop to make sure length input is valid
    while(true) {
      lengthInput = window.prompt("Please enter a password length of 8 to 128 characters.");

      //If there is a character that is not a digit:
      if(isNaN(lengthInput) || lengthInput === "" || lengthInput === null){
        window.alert("Please input a valid input for the length of your password. Length must only contain numbers.");
      }
      else {
        lengthInput = parseInt(lengthInput);

        //Check if length is from 8 - 128
        if(lengthInput < 8 || lengthInput > 128){
          window.alert("Please enter a valid input for the length of your password. Length must be from 8 to 128.")
        }
        else {
          passwordLength = lengthInput;
          console.log("Password length set to: " + passwordLength);

          //Final confirmation of password length
          if(window.confirm("You have selected a password length of " + passwordLength + ".  Continue?")){
            break;
          }
        }
      }
    } 
  }

  //If no to setting length, set length as 8
  else {
    console.log("Length has defaulted to 8.");
    window.alert("Your length has been set to the default of 8.");
  };


  //Password Characters//


  //Loop for characters, condition to check if 1 is selected
  var charactersSelected = "",
      lowercaseSelected = false,
      uppercaseSelected = false,
      numbersSelected = false,
      symbolsSelected = false; 

  while(!(lowercaseSelected || uppercaseSelected || numbersSelected || symbolsSelected)) {

    //Ask user if they want lowercase
    if(window.confirm("Do you want to use lowercase letters in your password?")){
      charactersSelected += "abcdefghijklmnopqrstuvwxyz";
      console.log("Password populated with lowercase.");
      lowercaseSelected = true;
    }

    //Ask user if they want uppercase
    if(window.confirm("Do you want to use uppercase letters in your password?")){
      charactersSelected += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log("Password populated with uppercase.");
      uppercaseSelected = true;
    }

    //Ask user if they want numeric
    if(window.confirm("Do you want to use numbers in your password?")){
      charactersSelected += "0123456789";
      console.log("Password populated with numbers.");
      numbersSelected = true;
    }

    //Ask user if they want special characters
    if(window.confirm("Do you want to use symbols in your password?")){
      charactersSelected += (" !#$%&()*+,-./:;<=>?@[\\]^_`{|}~" + '"' + "'");
      console.log("Password populated with symbols.")
      symbolsSelected = true;
    }
    
    if(!(lowercaseSelected || uppercaseSelected || numbersSelected || symbolsSelected)){
      window.alert("You have to select at least one character type. Please try again.");
    }
  }
  console.log("Password will be generated with following available characters: " + charactersSelected);


  //Password Generation


  //Loop and use math function to populate array
  let tempPassword = "";
  for (let i = 0; i < passwordLength; i++){
    tempPassword += charactersSelected.charAt(Math.floor(Math.random() * charactersSelected.length));
  }
  return tempPassword;

  //Check to make sure each type picked was chosen
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
