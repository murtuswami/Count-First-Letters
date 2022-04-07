# First Letter of Word Counter

## Description 

Counts the first word from each letter of a text and outputs to console 


## Author 
Harsha Ramachandran

## Dependencies 

* node.js 16.14.2+ 

## To Run 

* Using CLI Navigate to project root directory and execute: 

    ``` 
     node index.js 
    ```
* The letter that appears the most at the start of words will be outputted to console 



## Notes 

I would have asked if words that have "-" next to then would count as one word or two words. 
Currently the program uses a Regex to catch all non letters followed by letters. 
My main aim with this implementation was to only iterate through the text once and my solution achieves this. 
Another option i was considering was splitting the string by " " and then iterating over the resulting array of strings capturing the first character.
However my current implementation is more efficient. 