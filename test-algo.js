/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let found_a_word = -1;
    for (let i = s.length - 1; 0 <= i; i--) {
        if (found_a_word == -1 && s[i] != " ") {
            found_a_word = i;
        }
        if (found_a_word != -1) {
            if (s[i] == " ") {
                return found_a_word - i;
            } else if (i == 0) {
                return found_a_word + 1;
            }
        }
    }
    return 0;
};

console.log(
    lengthOfLastWord("Hello World")
);

console.log(
    lengthOfLastWord("Hello")
);

console.log(
    lengthOfLastWord("rld")
);


console.log(
    lengthOfLastWord("r")
);


console.log(
    lengthOfLastWord("      ")
);