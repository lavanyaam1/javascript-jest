// 2. Find out if there are repeating words in a given sentence. Make sure to do this in O(n) time.
// Create a function that takes a sentence as input

// let text = "I am busy today";

// function chechRepeatedWords(sentence) {
//     let words = sentence.split(" ");
//     let wordMap = {};

//     for (let i = 0; i < words.length; i++) {
//         let currentWordCount = wordMap[words[i]];
//         // console.log(wordMap[words[i]]);
//         let count = currentWordCount ? currentWordCount : 0;
//         wordMap[words[i]] = count + 1;
//     }
//     let flag = 0;
//     for (const key in wordMap) {
//         if(`${wordMap[key]}` > 1){
//             flag = 1;
//             break;
//         }
//     }

//     if(flag === 1){
//         console.log("Yes! there are repeating words");
//     }
//     else{
//         console.log("No! repeating words");
//     }
//     return wordMap;
// }

// console.log(chechRepeatedWords(text));

// const text = 'It was sunny in the morning but now it is to cold';

module.exports = function chechRepeatingWords(sentence,delimiter) {
    if(sentence === undefined || delimiter === undefined){
        return 'Enter the both string and a delimiter';
    }
    if(sentence.length === 0){
        return 'Empty String not accepted'
    }
    if(typeof sentence !== 'string'){
        return 'Invalid Datatype';
    }
    if(sentence.length > 100){
        return 'String length has to be less than or equal to 100';
    }
    sentence=sentence.toLowerCase();
    const words = sentence.split(delimiter);
    let flag = 0;
    const wordMap = new Map();
    for (let index = 0; index < words.length; index++) {
        if (wordMap.has(words[index])) 
        {
            flag = 1;
        } 
        else 
        {
            wordMap.set(words[index], 1);
        }
    }
    if (flag === 1) {
        return "String contains repeating words";
    } else {
        return "Strings does not contain repeating words";
    }
}
