let calcDisplay = "";
let numberButtons = document.getElementsByClassName("numButton");
let parentheses_open = false;

for (let i = numberButtons.length; i > 0; i--) {
    numberButtons[i - 1].onclick = () => {
        calcDisplay += numberButtons[i - 1].innerHTML;
        document.getElementById("displayLabel").innerHTML = calcDisplay;
    }
}

document.getElementById("buttonC").onclick = () => {
    calcDisplay = "";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("calculate").onclick = () => {
    try {
        calcDisplay = eval(calcDisplay);
    } catch {
        calcDisplay = "Invalid Input";
    }
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("back").onclick = () => {
    calcDisplay = calcDisplay.slice(0, calcDisplay.length - 1);
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("dot").onclick = () => {
    calcDisplay += ".";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("plus").onclick = () => {
    calcDisplay += "+";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("subtract").onclick = () => {
    calcDisplay += "-";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("multiply").onclick = () => {
    calcDisplay += "*";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("divide").onclick = () => {
    calcDisplay += "/";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("modulo").onclick = () => {
    calcDisplay += "%";
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}

document.getElementById("parentheses").onclick = () => {
    if (!parentheses_open) {
        calcDisplay += "(";
        parentheses_open = true;
    } else {
        calcDisplay += ")"
        parentheses_open = false;
    }
    document.getElementById("displayLabel").innerHTML = calcDisplay;
}