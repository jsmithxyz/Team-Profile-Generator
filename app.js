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

function promptEngineer(){
    return inquirer.prompt()[
        {
            type: "input",
            name: "github",
            message: "Enter your Github username:"
        }
    ]
}

function promptIntern(){
    return inquirer.prompt()[
        {
            type: "input",
            name: "school",
            message: "Enter your School Name:"
        }
    ]
}

function promptManager(){
    return inquirer.prompt()[
        {
            type: "number",
            name: "officeNumber",
            message: "Enter your Office Number"
        }
    ]
}

promptEmployee().then(function ({name, id, email, role}) {
    console.log(name,id,email,role);
});

