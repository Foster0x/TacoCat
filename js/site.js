// Sep One - controller/accepts requests
function getMessage() {
    let msg = document.getElementById("txtMessage").value;

    // Check for empty string
    if (msg == '') {
        alert("You must enter a string!");
    } else {
        msg = msg.toUpperCase();
        const regex = /[^a-z0-9]/gi;
        msg = msg.replace(regex, "");
        let palinObj = reverseMessageC(msg);
        displayMessage(palinObj);
    }
}

// Business Logic Layer
function reverseMessageA(msg) {
    let revMessage = "";
    // Decrimenting loop
    for (let index = msg.length - 1; index >= 0; index--) {
        let char = msg[index];
        revMessage += char;
    }
    if (msg == revMessage) {
        alert("This is a palindrome!")
    } else {
        alert("This is not a palindrome...")
    }
    return revMessage;
}

function reverseMessageB(msg) {
    msg = msg.toLowerCase().replace(/[^a-z]+/g, "");
    return msg === msg.split("").reverse().join("")
}

function reverseMessageC(originalWord) {
    let revWord = "";
    let returnObj = {};
    revWord = originalWord.split("").reverse().join("");

if (originalWord == revWord) {
    returnObj.message = `This is a palindrome!`;
    returnObj.IsPalindrome = true;
} else {
    returnObj.message = `This is not a palindrome...`;
    returnObj.IsPalindrome = false;
}

returnObj.originalWord = originalWord;
returnObj.reversedWord = revWord;

// IsPalindrome
// originalWord
// reversedWord
// message
return returnObj;
}

// Final Step - View
function displayMessage(palinObj) {
    element = document.getElementById("results");
    element.innerHTML = `${palinObj.message} - ${palinObj.originalWord}`;
}