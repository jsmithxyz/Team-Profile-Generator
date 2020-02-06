const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js")

const managerCard = require("./templates/managerHTML");
const engineerCard = require("./templates/engineerHTML");
const internCard = require("./templates/internHTML");

const generateHTML = require("./templates/main")


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
    inquirer.prompt(continueQuestion).then(function(answer){
        if(answer.continue === true) {
            console.log("You are adding another employee. Please answer the following questions again!");
            generateTeam();
        }
        else {
            console.log("Processing your team...");
            createHTML(team);
            const roster = generateHTML(strHTML);
            console.log(roster);
            createRoster(roster);
        }
    }) 
}

generateTeam();

const createHTML = team => {
    strHTML = "";
    for (var i = 0; i < team.length; i++) {
        if (team[i][0].role === 'Manager') {
            const newManager = new Manager(team[i][0].name, team[i][0].id, team[i][0].email, team[i][1].officeNumber);
            strHTML += managerCard(newManager);
        }
        else if (team[i][0].role === 'Engineer'){
            const newEngineer = new Engineer(team[i][0].name, team[i][0].id, team[i][0].email, team[i][1].github);
            strHTML += engineerCard(newEngineer);
      }
        else if (team[i][0].role === 'Intern'){
            const newIntern = new Intern(team[i][0].name, team[i][0].id, team[i][0].email, team[i][1].school);
            strHTML += internCard(newIntern);
    }
    }
    
}

async function createRoster(roster) {
fs.writeFile("./output/roster.html", roster, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Your team has been generated!");
    }
})
};