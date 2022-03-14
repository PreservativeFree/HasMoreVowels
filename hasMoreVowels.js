let consonantCount = 0;
let vowelCount = 0;
let isVowel = false;
let hasMoreVowels = function(word) {
    let userWord = word;
    let strArray = userWord.split("");
    let vowelString = "aeiouAEIOU";
    let vowelArray = vowelString.split("");
    for(let i=0; i < strArray.length; i++) {
        for(let j=0; j < vowelArray.length; j++) {
            if(strArray[i] === vowelArray[j]) { 
                isVowel = true;
            } 
        }
        if(isVowel) { //increment the right counter after the inner loop is finished
            vowelCount++;
            isVowel = false; //reset boolean
        } else {
            consonantCount++;
            isVowel = false;
        }
    }
    if(vowelCount > consonantCount)
        return true;
    else
        return false;
}

console.log(hasMoreVowels("onomatopoeia")); 

//The function shouldn't count a letter a consonant until it loops through the whole vowelString