let calcDisplay = "";
let buttons = {};
let parentheses_open = false;
const calcButtons = document.getElementsByClassName("calcButton");

for (const button of calcButtons) {
    let symbol = button.innerHTML;
    buttons[symbol] = button;
}

for (const symbol in buttons) {
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