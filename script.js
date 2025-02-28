let string = "";
let buttons = document.querySelectorAll('.button');
let btnArr = Array.from(buttons);
// let i = 0;
btnArr.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        // console.log(`Button: ${i}`);
        // btn.disabled = true;
        // i++;
        // console.log(e.target.innerText);
        let input = document.querySelector("input");
        if (e.target.innerHTML === "=") {
            try {
                // Check if '%' exists in the string
                if (string.includes("%")) {
                    let parts = string.split("%"); // Split by '%'
                    if (parts.length === 2) {
                        let num1 = parseFloat(parts[0]); // First number
                        let num2 = parseFloat(parts[1]); // Second number
                        
                        if (!isNaN(num1) && !isNaN(num2)) {
                            string = (num1 * (num2 / 100)).toString(); 
                        }
                    }
                }
                if (string.includes("X")) {
                    let parts = string.split("X"); 
                    if (parts.length === 2) {
                        let num1 = parseFloat(parts[0]); // First number
                        let num2 = parseFloat(parts[1]); // Second number
                        
                        if (!isNaN(num1) && !isNaN(num2)) {
                            string = (num1 * num2).toString(); // Perform product calculation
                        }
                    }
                }
                if (string.includes("÷")) {
                    let parts = string.split("÷"); 
                    if (parts.length === 2) {
                        let num1 = parseFloat(parts[0]); // First number
                        let num2 = parseFloat(parts[1]); // Second number
                        
                        if (!isNaN(num1) && !isNaN(num2)) {
                            if(num2==0){
                                input.value = "Number cannot divide by 0"
                                string = "";
                                return;
                            }
                            string = (num1 / num2).toString(); 
                        }
                    }
                }
                else {
                    string = eval(string); // Normal evaluation if '%,X,÷' is not present
                }
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Handle invalid expressions
                string = "";
            }
        }
        else if (e.target.innerHTML === "C") {
            string = string.slice(0, -1); // Removes the last character
            input.value = string;
        } 
        else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        }
        else {
            if(input.selectionStart === 0 && input.selectionEnd === input.value.length){
                string ="";
            }
            string += e.target.innerHTML;
            input.value = string;
            
        }
        
    });
});
//Buttons Handling "Enter" and "Backspaces" Button:
document.addEventListener("keydown", (e) => {
    let isAllSelected = input.selectionStart === 0 && input.selectionEnd === input.value.length;
    if (e.key === "Backspace") {
        if (isAllSelected || string.length === 1) {
            string = "";
        } else {
            string = string.slice(0, -1);
        }
        input.value = string;
    }
});