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
      if(/[^0-9]/.test(lengthInput || lengthInput === "" || lengthInput === null)){
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
  var charactersCheck = false;
  while(charactersCheck === false) {

    //Ask user if they want lowercase

    //Ask user if they want uppercase

    //Ask user if they want numeric

    //Ask user if they want special characters

  }

  //Initialize array

  //Populate array based on if statements

  //Loop and use math function to populate array
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
