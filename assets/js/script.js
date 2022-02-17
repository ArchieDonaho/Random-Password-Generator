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
When the 'generate password' buttin is pressed, an alert will ask the following questions:
-password length (8-128 characters)
-if they want lowercase characters  
-if they want uppercase characters
-if they want numeric characters
-if they want special characters
The answer will ONLY be validated if ONE or more criteria are selected

A for-loop will select random indexes from the approved criteria in random order and asign them to the password array. 
Another for loop will then traverse the created password array and check to ensure that all criteria is met. If not, it will 
re-run the origonal loop and re-create the password array. This process will continue until and array is created containing
the predetermined criteria.
*/

//randomly generates the password based on the user-entered criteria
function generatePassword() {
  //arays declared
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = [];
  var specialChar = ['!', '#', '”', '%', '$', '(', '’', ')', '*', '+', '-', '/', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~'];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  //fills in the upperCase array using the lowerCase array
  for(var i=0; i<lowerCase.length; i++){
    //.push copies the indexes of lowerCase and adds them the the upperCase indexes
    upperCase.push(lowerCase[i]);
    //.map uses the defined function to apply .toUpperCase to all indexes of uppercase
    upperCase = upperCase.map(
      function(x){
        return x.toUpperCase(); 
      }
    );
  }

  //ask user for password length
  var promptLength = window.prompt('How long will your password be? (8-128 characters)');
  //converts promptLength into a number
  promptLength = parseInt(promptLength);
  console.log('the prompt length is ' + promptLength);

   var checkPromptLength = function(length) {
      if( !Number.isNaN(length) && !(length < 8 || length > 128) ){
        // window.prompt('correct!');
        return length;
      } else {
        window.alert('Please use a whole number between 8-128');
        length = parseInt(window.prompt('How long will your password be? (8-128 characters)'));
        checkPromptLength(length);
      }
   }
   promptLength = checkPromptLength(promptLength);


/*
  //sets variable for the while loop
  var istrue = true;
  //checks if promptLength is a number between 8 & 128. if not, it will prompt the user to re-enter the data
  while(istrue == true){
    if( !Number.isNaN(promptLength) && !(promptLength < 8 || promptLength > 128) ){
      // window.prompt('correct!');
      istrue = false;
      break;
    } else {
      window.alert('Please use a whole number between 8-128');
      promptLength = window.prompt('How long will your password be? (8-128 characters)');
      promptLength = parseInt(promptLength);
    }
  }
*/



  //ask user if the password is going to be upper or lower case & if it will have special characters
  var promptLowerCase = window.confirm('Does your password require lower-case letters? Click confirm if yes or cancel if no.');
  var promptUpperCase = window.confirm('Does your password require upper-case letters? Click confirm if yes or cancel if no.');
  var promptSpecial = window.confirm('Does your password require special characters? Click confirm if yes or cancel if no.');
  var promptNumbers = window.confirm('Does your password require numbers? Click confirm if yes or cancel if no.');

  //initialize password array using the promptLength as the length of the index
  var password = new Array(promptLength);
  console.log('password length is ' + password.length);

  //now with an empy index, we will fill each index one at a time using a while loop
  var step = 0;
  while(step != password.length){
    //a random number will be generated and assigned to a value that relates to a random array hosted in an if statement
    var selector = Math.floor(Math.random() * 4)
    console.log('this is iteration #' + step);
    //if the statement passes the criteria (if the prompt is true && if the variable number matches) it will proceed to run the block of code
    //each if statement will generate another random number that relates to a random index from said array
    //that index will then be set to the index chosen in the password array.
    //the step counter only increases if the if-statement runs. If an if-statement doesnt run, the while loop will ty again to create a number taht relates to one of teh if-statements
    var indexNum;
    if(selector == 0 && promptLowerCase == true){
        indexNum = Math.floor(Math.random() * lowerCase.length);
        password[step] = (lowerCase[indexNum]);
        step++;
    }

    if(selector == 1 && promptUpperCase == true){
        indexNum = Math.floor(Math.random() * upperCase.length);
        password[step] = (upperCase[indexNum]);
        step++;
    }

    if(selector == 2 && promptSpecial == true){
        indexNum = Math.floor(Math.random() * specialChar.length);
        password[step] = (specialChar[indexNum]);
        step++;
    }

    if(selector == 3 && promptNumbers == true){
        indexNum = Math.floor(Math.random() * numbers.length);
        password[step] = (numbers[indexNum]);
        step++;
    }
  }
  //now we have the password array filled
  //convert the password array into one continuous string and return it to the function
  let finalString  = password.join("");
  return finalString;
}

