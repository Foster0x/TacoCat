// Sep One - controller/accepts requests
function getMessage() {
    let msg = document.getElementById("txtMessage").value;

    // Check for empty string
    if (msg == '') {
        alert("You must enter a string!");
    } else {
        let revMessage = reverseMessageA(msg);
        displayMessage(revMessage);
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
    return revMessage;
}

// Final Step - View
function displayMessage(message) {
    element = document.getElementById("results");
    element.innerHTML = message;
}