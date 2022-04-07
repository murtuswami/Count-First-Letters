
/*
Outputs to console the letter with  the most appearances at the start of the word in https://www.gutenberg.org/cache/epub/29364/pg29364.txt
Author: Harsha Ramachandran
*/

import fetch from 'node-fetch'



//get data and store as string 
const getData = async () => {
    const response = await fetch("https://www.gutenberg.org/cache/epub/29364/pg29364.txt");
    const body = await response.text();
    return body
}

const data = await getData()

let counts = new Array(26).fill(0) // create an array to count appearances of letters at start of words
                                   // index corresponds to letter 

let s =1
let e =2
//iterate through array looking for letters at start of word 
while(e< data.length){
    let prev = data[s]
    let cur = data[e]
    if( prev == " "  || !(/[a-zA-Z]/).test(prev) ) { // if previous character is space or not a  letter 
        if( (/[a-zA-Z]/).test(cur)) { // if current character is a letter it is a first letter, count it 
                let index =  convertLetterToNumber(cur) -1
                counts[index] =  counts[index] +1
            }
        }
    s = s+1
    e = e+1
}
let numberMost = 0
let indexMost = 0 
//Look through counts to figure out which one appears the most 
for (let i = 0; i < counts.length; i++) {
   if (numberMost <= counts[i]){
       numberMost = counts[i]
       indexMost = i
    }
  }

  //remember letter at index i is actually the i +1th letter 
  indexMost = indexMost +1  
  console.log("Most words in the document start with the letter:")
  console.log((indexMost + 9).toString(36).toUpperCase())

//converts characters to numbers a=1 ,b =2 ,c =3 ... 
//ignores capitalization
function convertLetterToNumber(str) {
    str = str.toUpperCase();
    let out = 0, len = str.length;
    for (let pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }