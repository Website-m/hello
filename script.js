const message = document.getElementById('message');
message.innerText = "Enter Your Password! Clue: Your Favorite Number And My Favorite Number";
message.style.fontSize = "14px";

function clearLastChar() {
    const display = document.getElementById('display');
    
    if (display.value.length > 0) {
       display.value = display.value.slice(0, -1);
        
        if (display.value.length == 3) {
            message.innerText = "Enter Your Password! Clue: Your Favorite Number And My Favorite Number!";
        }
    }
    
}

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (display.value.length < 4) {
        display.value += value;

        if (display.value.length == 4) {
            const message = document.getElementById('message');
            message.innerText = "Max Number Reach!"
        }
    }
}

function go() {
    let favNum = 1126;
    const display = document.getElementById('display');

    if (display.value == favNum) {
        message.innerText = "Correct!";

        setTimeout(() => {
            window.location.href = 'hello.html';
        }, 2000);
    } else {
        message.innerText = "Incorrect Password!";
    }
}