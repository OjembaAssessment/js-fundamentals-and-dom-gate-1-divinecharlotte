console.log("Exercise 1 - Word Highlighter");

const Highlighter = (str) => {
    let higligtedtex = {};
    let words = str.toLowerCase()
    let texts = words.split(/\b(?=\w)/);

    for (let i = 0; i < texts.length; i++) {
        let word = texts[i].trim();
        if (word !== "") {
            higligtedtex[word] = (higligtedtex[word] || 0) + 1;
        }
    }

    let sortedtexts = Object.keys(higligtedtex).sort(function (a, b) {
        return higligtedtex[b] - higligtedtex[a];
    });

    let first5texts = sortedtexts.slice(0, 5);

    for (const word of first5texts) {
        const regex = new RegExp("\\b" + word + "\\b", "gi");
        str = str.replace(regex, `<span style="background-color: orange">${word}</span>`);
    }
    let paragraph = document.getElementById("myParagraph");
    paragraph.innerHTML = str;
};


Highlighter(myParagraph.textContent);
