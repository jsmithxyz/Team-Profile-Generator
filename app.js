const inquirer = require("inquirer");

// require need information

function promptEmployee(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your Full Name:"
        },
        {
            type: "number",
            name: "id",
            message: "Enter your ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your E-mail:"
        },
        {
            type: "list",
            name: "role",
            message: "Please choose your Current Role:",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ])};

const engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "Enter your Github username:"
        }
    ]


const internQuestions = [
        {
            type: "input",
            name: "school",
            message: "Enter your School Name:"
        }
    ]


const managerQuestions = [
        {
            type: "number",
            name: "officeNumber",
            message: "Enter your Office Number"
        }
    ]


promptEmployee().then(function (res) {
    console.log(res);

    switch (res.role) {
        case 'Manager':
            inquirer.prompt(managerQuestions).then(function(results){
                console.log(results.officeNumber);
            });
            break;
       
        case 'Intern':
            inquirer.prompt(internQuestions).then(function(results){
                console.log(results.school);
            });
            break;

        case 'Engineer':
            inquirer.prompt(engineerQuestions).then(function(results){
                console.log(results.github);
            });
            break;
    }
});


