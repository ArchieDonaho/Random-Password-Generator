# Random-Password-Generator

This here is a random password generator. the way it works is when the 'generate password' button is pressed, multiple alerts will ask the following questions:
- password length (8-128 characters)
- if you want lowercase characters  
- if you want uppercase characters
- if you want numeric characters
- if you want special characters

The prompts will ONLY be validated if ONE or MORE criteria are selected

A for-loop will select a random index from a random array in a random order from the approved criteria and asign them to the 'password' array. 
A function will then check the 'password' array to ensure that all criteria is met. If not, it will re-run and re-create the 'password' array. This process will continue until and array is created  containing the selected criteria.
