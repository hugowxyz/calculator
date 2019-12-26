var toDisplay = "";

const deleteAllBtn = document.querySelector("#AC");
const deleteBtn = document.querySelector("#del");
const numbers = document.querySelectorAll(".number");
const displayContainer = document.querySelector("#display");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");

var display = (toDisplay) => {
    displayContainer.textContent = toDisplay;
};

function compute() {
    let terms = toDisplay.split(" ");
    terms = terms.join("");
    let ans = String(eval(terms)).split("");
    ans.push(" ");
    toDisplay = ans.join(" ");
    display(toDisplay);
}

deleteAllBtn.addEventListener(
    "click", (e) => {
        toDisplay = "";
        display(toDisplay);
    }
);

deleteBtn.addEventListener(
    "click", (e) => {

        if (toDisplay.length == 0) {
            toDisplay = "";
        } else {
            let arr = toDisplay.split(" ");
            arr.pop();
            arr.pop();

            toDisplay = arr.join(" ");
        }

        display(toDisplay);
    }
);

numbers.forEach(
    (number) => {
        number.addEventListener(
            "click", (e) => {
                let n = e.target.getAttribute("id");
                toDisplay = toDisplay + n + " ";
                display(toDisplay);
            }
        )
    }
);

operations.forEach(
    (operation) => {
        operation.addEventListener(
            "click", (e) => {
                let n = e.target.getAttribute("id");
                toDisplay = toDisplay + n + " ";
                display(toDisplay);
            }
        )
    }
);

equals.addEventListener(
    "click", (e) => {
        compute();
    }
);

