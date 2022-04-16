let consonantCount = 0;
let vowelCount = 0;
let isVowel = false;
let hasMoreVowels = function(word) {

    let strArray = word.split("");
    let vowelString = "aeiouAEIOU";
    let vowelArray = vowelString.split("");
    for(let i=0; i < strArray.length; i++) {
        for(let j=0; j < vowelArray.length; j++) {
            if(strArray[i] === vowelArray[j]) { 
                isVowel = true;
            } 
        } //end inner for
        if(isVowel) { //increment the right counter after the inner loop is finished
            vowelCount++;
            isVowel = false; //reset boolean
        } else {
            consonantCount++;
            isVowel = false;
        }
    } //end outer for
    if(vowelCount > consonantCount)
        return true;
    else
        return false;
}

console.log(hasMoreVowels("onomatopoeia")); 