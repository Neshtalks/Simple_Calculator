// JavaScript Functionality Starts Here
        function calculatePercentage() {
            // Get input values
            var num1 = document.getElementById("num1").value; // Gets the string value from the first input field
            var num2 = document.getElementById("num2").value; // Gets the string value from the second input field
            var error1 = document.getElementById("error1"); // Gets the HTML element for the first error message
            var error2 = document.getElementById("error2"); // Gets the HTML element for the second error message
            
            // Reset errors
            error1.style.display = 'none'; // Hides the first error message
            error2.style.display = 'none'; // Hides the second error message
            
            // Validate inputs
            if (num1 === "" || isNaN(num1)) { // Checks if num1 is empty OR if it's Not-a-Number
                error1.style.display = 'block'; // Shows the first error message
                return; // Stops the function execution if validation fails
            }
            
            if (num2 === "" || isNaN(num2) || parseFloat(num2) === 0) { // Checks if num2 is empty OR Not-a-Number OR converts to float and checks if it's 0
                error2.style.display = 'block'; // Shows the second error message
                return; // Stops the function execution if validation fails (especially for division by zero)
            }
            
            // Convert to numbers and calculate
            num1 = parseFloat(num1); // Converts num1 from string to a floating-point number
            num2 = parseFloat(num2); // Converts num2 from string to a floating-point number
            
            var result = (num1 / num2) * 100; // Performs the percentage calculation
            
            // Display result with 2 decimal places
            document.getElementById("result").innerHTML = result.toFixed(2) + "%"; // Updates the result paragraph with the formatted percentage
        }
        
        // Allow calculation on Enter key press
        document.addEventListener('DOMContentLoaded', function() { // Ensures this code runs only after the HTML is fully loaded
            var inputs = document.querySelectorAll('input'); // Selects all <input> elements on the page
            inputs.forEach(function(input) { // Iterates over each found input element
                input.addEventListener('keyup', function(event) { // Adds an event listener for the 'keyup' event (when a key is released)
                    if (event.key === 'Enter') { // Checks if the released key was 'Enter'
                        calculatePercentage(); // Calls the calculation function if 'Enter' was pressed
                    }
                });
            });
        });