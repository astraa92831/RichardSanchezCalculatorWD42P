  //phase1 trial and error
const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');
  
let input = ""; //

for (let key of keys) {
	const value = key.dataset.key;
   
	key.addEventListener('click', () => {
		if (value == "clear") { //AC
			input = ""; //iNPUT 
			display_input.innerHTML = ""; //AC 
			display_output.innerHTML = ""; //AC
		} else if (value == "backspace") {
			input = input.slice(0, -1);
			display_input.innerHTML = CleanInput(input);
		} else if (value == "=") { //= BUTTON
			let result = eval(PerpareInput(input)); //EVALUATE RESULT

      

			display_output.innerHTML = CleanOutput(result); // RESULT
      //done phase1 trial error


      //phase2 trial and error
		} else if (value == "brackets") {
			if (
				input.indexOf("(") ==  -1 || 
				input.indexOf("(") !=  -1 && 
				input.indexOf(")") !=  -1 && 
				input.lastIndexOf("(") < input.lastIndexOf(")")
			) {
				input += "(";
			} else if (
				input.indexOf("(") != -1 && 
				input.indexOf(")") == -1 || 
				input.indexOf("(") != -1 &&
				input.indexOf(")") != -1 &&
				input.lastIndexOf("(") > input.lastIndexOf(")")
			) {
				input += ")";
			}
       //done phase2 trial error


       //phase3 trial and error
			display_input.innerHTML = CleanInput(input);
		} else {
			if (ValidateInput(value)) {
				input  += value;               //All system will be affected
				display_input.innerHTML = CleanInput(input);   //All system will be affected
			}//done phase3 trial error
		} 
	})
}

  //phase4
function CleanInput(input) {
	let input_array = input.split("");
	let input_array_length = input_array.length;
      //x, /, +, -, brackets, % butoons keys control
	for (let i = 0; i < input_array_length; i++) {
		if (input_array[i] == "*") {
			input_array[i] = ` <span class="operator">x</span> `;
		} else if (input_array[i] == "/") {
			input_array[i] = ` <span class="operator">÷</span> `;
		} else if (input_array[i] == "+") {
			input_array[i] = ` <span class="operator">+</span> `;
		} else if (input_array[i] == "-") {
			input_array[i] = ` <span class="operator">-</span> `;
		} else if (input_array[i] == "(") {
			input_array[i] = `<span class="brackets">(</span>`;
		} else if (input_array[i] == ")") {
			input_array[i] = `<span class="brackets">)</span>`;
		} else if (input_array[i] == "%") {
			input_array[i] = `<span class="percent">%</span>`;
		}
	}

	return input_array.join(""); 
} //done phase4 trial error


//phase5
function CleanOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1]; //spliting result if dot removed
	output_string = output_string.split(".")[0]; // result will be 1 if the the dot will removed

	let output_array = output_string.split("");
	
	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ","); // , and decimal
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal);
	}

	return output_array.join(""); // all system will be affected if we put number or leeters inside
}//done phase5 trial error


//phase6
function ValidateInput (value) {
	let last_input = input.slice(-1);
	let operators = ["+", "-", "*", "/"];

	if (value == "." && last_input == ".") {
		return false;
	}

	if (operators.includes(value)) {
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		}
	}

	return true; //all system will affected if someone on this phase was deleted
}//done phase6 trial error


//phase7
function PerpareInput (input) {
	let input_array = input.split("");

	for (let i = 0; i < input_array.length; i++) {
		if (input_array[i] == "%") {
			input_array[i] = "/100";
		}
	}

	return input_array.join(""); // all system will be affected if we put number or leeters inside
}
