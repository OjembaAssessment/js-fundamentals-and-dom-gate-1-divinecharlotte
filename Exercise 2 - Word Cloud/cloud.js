console.log("Exercise 2 - Word Cloud");

function createWordCloud(str) {
    let wordCounts = {};
    let words = str.split(/\b(?=\w)/)

    for (let i = 0; i < words.length; i++) {
        wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
    }
    delete wordCounts[""];
    delete wordCounts["_ "];
    delete wordCounts["_."];
    delete wordCounts[","];
    delete wordCounts["."];
    delete wordCounts["_\n"];
    var sortedWords = Object.keys(wordCounts).sort(function (a, b) {
        return wordCounts[b] - wordCounts[a];
    });


    var first12Words = sortedWords.slice(0, 12);





    let wordCloudHTML = '';
    for (let j = 0; j < first12Words.length; j++) {
        let word = first12Words[j].substring(1);
        let count = wordCounts[first12Words[j]];


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





