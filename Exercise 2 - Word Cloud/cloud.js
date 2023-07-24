console.log("Exercise 2 - Word Cloud");

function createWordCloud(str) {
    let wordCounts = {};
    let words = str.split(/\b/);

    for (let i = 0; i < words.length; i++) {
        wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
    }


   
    let sortedWords = Object.keys(wordCounts).sort();


    let wordCloudHTML = '';
    for (let j = 0; j < sortedWords.length; j++) {
        let word = sortedWords[j].substring(1);
        let count = wordCounts[sortedWords[j]];


        let fontSize = 12 + count * 2;

        wordCloudHTML += '<span style="font-size: ' + fontSize + 'px">' + word + '</span> ';
    }


    let myWordCloudContainer = document.getElementById("myWordCloud");
   myWordCloudContainer.innerHTML = wordCloudHTML;
}


let paragraph = document.getElementById("myParagraph");
let textContent = paragraph.textContent || paragraph.innerText;
// console.log(textContent);
createWordCloud(textContent);
