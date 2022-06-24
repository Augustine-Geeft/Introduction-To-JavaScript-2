let operator = prompt('Enter operator ( either + , -  , * or / ): ');
num1 = parseInt(prompt('Enter your first number: '))
num2 = parseInt(prompt('Enter your second number: '))

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/') {
    result = num1 / num2;
}
else {
    alert('You entered an invalid operator');
}

alert(result)

