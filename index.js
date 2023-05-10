let calcDisplay = "";
let calcButtons = document.getElementsByClassName("calcButton");
let buttons = {};
let parentheses_open = false;


for (let button in calcButtons) {
    let symbol = calcButtons[button].innerHTML;
    buttons[symbol] = calcButtons[button];
}

for (let symbol in buttons) {
    buttons[symbol].onclick = () => {
        switch (symbol) {
            case "C":
                calcDisplay = "";
                break;
            case "()":
                if (!parentheses_open) {
                    calcDisplay += "(";
                    parentheses_open = true;
                } else {
                    calcDisplay += ")";
                    parentheses_open = false;
                }    
                break;
            case "←":
                calcDisplay = calcDisplay.slice(0, calcDisplay.length - 1);
                break;
            case "=":
                try {
                    calcDisplay = eval(calcDisplay);
                    break;
                } catch {
                    calcDisplay = "Invalid Input";
                }
                break;
            default:
                calcDisplay += buttons[symbol].innerHTML;
                break;
        }
        document.getElementById("displayLabel").innerHTML = calcDisplay;
    }
}