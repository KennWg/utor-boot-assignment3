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
  var charactersArray = [];

  while(!charactersCheck) {

    //Ask user if they want lowercase
    if(window.confirm("Do you want to use lowercase letters in your password?")){
      charactersArray.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
      console.log("Password populated with lowercase.");
      charactersCheck = true;
    }

    //Ask user if they want uppercase
    if(window.confirm("Do you want to use uppercase letters in your password?")){
      charactersArray.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
      console.log("Password populated with uppercase.");
      charactersCheck = true;
    }

    //Ask user if they want numeric
    if(window.confirm("Do you want to use numbers in your password?")){
      charactersArray.push("0","1","2","3","4","5","6","7","8","9");
      console.log("Password populated with numbers.");
      charactersCheck = true;
    }

    //Ask user if they want special characters
    if(window.confirm("Do you want to use lower case letters in your password?")){
      charactersArray.push(" ","!",'"',"#","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
      console.log("Password populated with symbols.")
      charactersCheck = true;
    }
    
    if(!charactersCheck){
      window.alert("You have to select at least one character type. Please try again.");
    }
  }

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
