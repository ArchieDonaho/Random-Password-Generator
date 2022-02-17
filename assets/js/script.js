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

/*
When the 'generate password' buttin is pressed, multiple alerts will ask the following questions:
-password length (8-128 characters)
-if they want lowercase characters  
-if they want uppercase characters
-if they want numeric characters
-if they want special characters
The prompts will ONLY be validated if ONE or MORE criteria are selected

A for-loop will select random indexes in random order from the approved criteria and asign them to the 'password' array. 
A function will then check the 'password' array to ensure that all criteria is met. If not, it will re-run the 
'createPasswordArray' function and re-create the 'password' array. This process will continue until and array is created 
containing the selected criteria.
*/

//randomly generates the password based on the user-entered criteria
function generatePassword() {
  //checks prompt length. If length doesn't meet the criteria, it will prompt the user to enter a new length and re-run the loop to check again
  function checkPromptLength(length) {
    for(var i=0; i<1; i){
      if( Number.isNaN(length) || length < 8 || length > 128 || typeof(length) === undefined ){
        window.alert('Please use a whole number between 8-128');
        length = Number(window.prompt('How long will your password be? (8-128 characters)'));
        console.log("imputed " + promptLength);
      } else {
        i = 1;
      }
    }
    return length;
  }
  //function to obtain criteria & check if at least one was seleted. If none are selected, the function will re-run until at least 1 is selected
  function checkPromptCriteria(){
    promptLowerCase = window.confirm('Does your password require lower-case letters? Click confirm if yes or cancel if no.');
    promptUpperCase = window.confirm('Does your password require upper-case letters? Click confirm if yes or cancel if no.');
    promptSpecial = window.confirm('Does your password require special characters? Click confirm if yes or cancel if no.');
    promptNumbers = window.confirm('Does your password require numbers? Click confirm if yes or cancel if no.');

    if(!(promptLowerCase) && !(promptUpperCase) && !(promptSpecial) && !(promptNumbers)){
      window.alert("You must select at least one criteria option.");
      checkPromptCriteria();
    }
  }
  //fills the 'password' array
  function createPasswordArray(){
    for(var i = 0; i<password.length; i){
      //a random number between 0 and 3 will be generated and assigned to 'selector' 
      //each if statement checks if the 'selector' is true and if the prompt was approved or declined
      //if both statements are true, it will select a random index from their respective array and assign it to index 'i' in the 'password' array & increment 'i' to move on to the next index
      //if none of the if statements are true, then 'i' will not increment and the for-loop will run again on the same password index
      var selector = Math.floor(Math.random() * 4)
      console.log('this is iteration #' + (i + 1));

      if(selector == 0 && promptLowerCase == true){
        password[i] = (lowerCase[Math.floor(Math.random() * lowerCase.length)]);
        i++;
      } else if(selector == 1 && promptUpperCase == true){
        password[i] = (upperCase[Math.floor(Math.random() * upperCase.length)]);
        i++;
      } else if(selector == 2 && promptSpecial == true){
        password[i] = (specialChar[Math.floor(Math.random() * specialChar.length)]);
        i++;
      } else if(selector == 3 && promptNumbers == true){
        password[i] = (numbers[Math.floor(Math.random() * numbers.length)]);
        i++;
      } else {}
    }
    //lastly, we will check it using the 'checkPassword' function to make sure that all criteria has been met
    checkPassword();
  }
  //checks the 'password' to see if all criteria is met
  function checkPassword(){
    //we will take the 'password' array and compare all of it's index values against any approved criterias (lower case, upper case, special char, numbers)
    //if it does not find a match in any of the array's indexes, it will re-run 'createPasswordArray'
    //this process will repeat until a 'password' array is produced containing all pre-selected criteria.
    if( !(password.some(item => lowerCase.includes(item))) && promptLowerCase ){
      console.log("there are no lower case characters, rerunning creatPasswordArray");
      createPasswordArray();
    }
    if( !(password.some(item => upperCase.includes(item))) && promptUpperCase ){
      console.log("there are no upper case characters, rerunning creatPasswordArray");
      createPasswordArray();
    }
    if( !(password.some(item => specialChar.includes(item))) && promptSpecial ){
      console.log("there are no special characters, rerunning creatPasswordArray");
      createPasswordArray();
    }
    if( !(password.some(item => numbers.includes(item))) && promptNumbers ){
      console.log("there are no numerical characters, rerunning creatPasswordArray");
      createPasswordArray();
    }
  }

  //arrays declared
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialChar = ['!', '#', '”', '%', '$', '(', '’', ')', '*', '+', '-', '/', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~'];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  //criteria declared
  var promptLowerCase;
  var promptUpperCase;
  var promptSpecial;
  var promptNumbers;
  //ask user for password length
  var promptLength = window.prompt('How long will your password be? (8-128 characters)');
  console.log("imputed " + promptLength)

  //converts 'promptLength' from a string into an integer
  promptLength = Number(promptLength);
  
  //checks if 'promptLength' is a number between 8 & 128. if not, it will prompt the user to re-enter the data
  promptLength = checkPromptLength(promptLength);
  console.log("the selected promptLength is " + promptLength);

  //ask user if the password is going to be upper or lower case & if it will have special characters
  checkPromptCriteria();

  //initialize 'password' array using the 'promptLength' as the length of the index
  var password = new Array(promptLength);
  console.log('password length is ' + password.length);

  //now with an empy index, we will fill each index one at a time using the 'createPasswordArray' function
  //once the 'password' array is filled, it will run a check using 'checkPassword' function
  createPasswordArray();
  //now we have the password array filled!

  //now with a final array, we will convert the 'password' array into one continuous string called 'finalString' and return it to the function
  let finalString  = password.join("");
  return finalString;
}

