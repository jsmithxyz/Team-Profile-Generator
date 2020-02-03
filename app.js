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

const continueQuestion = [
    {
        type: "confirm",
        name: "continue",
        message: "Would you like to add another Team Member?"
    }
]

const team = [];

async function generateTeam() {
promptEmployee().then(function (res) {
    
    const teamMember = [];

    switch (res.role) {
        case 'Manager':
            inquirer.prompt(managerQuestions).then(function(results){
                teamMember.push(res, results);
                generate(teamMember);
            });
            break;
       
        case 'Intern':
            inquirer.prompt(internQuestions).then(function(results){
                teamMember.push(res, results);
                generate(teamMember);
            });
            break;

        case 'Engineer':
            inquirer.prompt(engineerQuestions).then(function(results){
                teamMember.push(res, results);
                generate(teamMember);
            });
            break;
    }
});
};

const generate = teamMember => {
    team.push(teamMember);
    console.log(team);
    inquirer.prompt(continueQuestion).then(function(answer){
        if(answer.continue === true) {
            console.log("You are adding another employee. Please answer the following questions again!");
            generateTeam();
        }
        else {
            console.log("Here is your team!");
        }
    }) 
}

generateTeam();

