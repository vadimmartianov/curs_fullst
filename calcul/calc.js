/*
Create a simple calculator script using prompt and alert that asks for two numbers
and a mathematical operation to perform between them.

Open a new folder in VS Code
Create an index.html
Create a default html snippet using emmet with ! and Enter
Create a script tag at the bottom of the body
Write a script that will ask the user for a number
Then ask the user for a second number
Then ask the user for an operation ( + - * / ) …
Then calculate the result and display it to the user
-------------------------
In this assignment you will practice the use of alert and prompt
as well as declaring variables, writing expressions using different data types and conditional statements.
Enjoy
:)


1. create the calculator as you wish.
2. create at least 2 functions and use them.
3. make the same code, once with if, once with if-else, and once with switch-cases.

   Points:

   1. This is much more better than numberConfirm(num) and tester_comtainer,
      but without func-s, cuz we can not cross func-s borders with continue/break,
      and js can not return multiply values.
      But we have a point 2 ("at least 2 func-s"), so...

   digits[0] = prompt('Enter first digit');
   if (isNaN(parseFloat(digits[0])) || isNaN(Number(digits[0]))) {
       trigger_on = confirm('Sorry this is...you know - no digit. We will restart, okay?');
       if (trigger_on) { continue; }
       break;
   }
   digits[0] = (parseFloat(digits[0], 10));

   2. About point 3 - we have here and if-else and switch-case.
*/

function numberConfirm(num) {

    let state;
    let trigger_on;

    if (isNaN(parseFloat(num)) || isNaN(Number(num))) {
        trigger_on = confirm('Sorry this is...you know - no digit. We will restart, okay?');

        if (trigger_on) { state = 1; /*error and restart*/ }
        else { state = 2; /*error and breakdown*/ }

        return [NaN, state, trigger_on];
    }

    num = (parseFloat(num, 10));
    state = 3; // All correct

    return [num, state, true];
}

function calculation() {

    let digits = [];
    let operation;
    let result;
    let trigger_on = true;
    let state;
    let tester_contanier = [];

    while (trigger_on) {

        digits[0] = prompt('Enter first digit');
        tester_contanier = numberConfirm(digits[0]);
        state = tester_contanier[1];
        trigger_on = tester_contanier[2];
        if (state < 3) { continue; }
        digits[0] = tester_contanier[0];

        operation = prompt('Enter the operation (+ - * /)');

        digits[1] = prompt('Enter second digit');
        tester_contanier = numberConfirm(digits[1]);
        state = tester_contanier[1];
        trigger_on = tester_contanier[2];
        if (state < 3) { continue; }
        digits[1] = tester_contanier[0];

        switch (operation) {
            case '+':
                result = digits[0] + digits[1];
                alert('Something like this: ' + result);
                break
            case '-':
                result = digits[0] - digits[1];
                alert('Something like this: ' + result);
                break
            case '*':
                result = digits[0] * digits[1];
                alert('Something like this: ' + result);
                break
            case '/':
                if (digits[1] === 0) {
                    trigger_on = confirm('Sorry we can not divide by Zero. This is Math, nothing personal. We will restart, okay?');
                    break
                }
                result = digits[0] / digits[1];
                alert('Something like this: ' + result);
                break
            default:
                trigger_on = confirm('Sorry you write this little wrong. We will restart, okay? Try again.');
        }

        if (trigger_on) { trigger_on = confirm('do you want to continue?'); }
    }
}

let a = document.getElementById('start_calc');
a.onclick = function() { calculation(); };