let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let value = e.target.innerText;

        if (value === "=") {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch (error) {
                input.value = "Error";
                expression = "";
            }
        } else if (value === "AC") {
            expression = "";
            input.value = "0";
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression || "0";
        } else {
            if (input.value === "Error") {
                expression = "";
            }
            expression += value;
            input.value = expression;
        }
    });
});
