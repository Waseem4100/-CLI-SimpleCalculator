import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "number",
        name: "Firstnumber",
        message: "Enter your first number",
    },
    { type: "number",
        name: "Secondnumber",
        message: "Enter your second number",
    },
    {
        name: "Operator",
        type: "list",
        message: "Choose an operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// conditional operators
if (answer.Operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.Operator === "Substraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else
    (console.log("please select a valid operator"));
