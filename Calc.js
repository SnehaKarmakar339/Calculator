const display = document.getElementById('display');


function displaytoscreen(value){
    display.textContent +=value;
}

// function dotcount(){

// }
function Calculate(){
    try {
       display.textContent = eval(display.textContent);
    }
    catch(err){
        display.textContent = "Error";
    }
}

function Cleardisplay(){
    display.textContent="";
}
function backspace(){
    display.textContent = display.textContent.slice(0,-1);
}