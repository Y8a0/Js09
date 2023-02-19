function vowelsAndConsonants(str) {
    let n = str.length;
        for (let i = 0; i < n; i++) {
            if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")) {
            console.log(str[i]); //just to verify
            }
        }

        for (var j = 0; j < n; j++) {
            if ((str[j] == "a") || (str[j] == "e") || (str[j] == "i") || (str[j] == "o") || (str[j] == "u")) {
            // do nothing
            } else {
                console.log(str[j]); //just to verjfy constant
            }
        }
}
vowelsAndConsonants('javascriptloops');


module.exports = vowelsAndConsonants;