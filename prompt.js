const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const employee = [];

function init(){
startHtml();
startMenu();
}
function startMenu() {
    console.log("Build your Team!!");

    inquirer.prompt([
        {
            message: " Enter the new team member's name",
            name: "name",
            validate: nameInput =>{
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter the name for the new member");
                    return false

                }
            }
        },
        {
            type: "list",
            message: "Pick your members role",
            choices:[
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role",
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } 
                else {
                    console.log ("Please select at least one role.");
                    return false;
                }
            }              
        },
        {
            type: "input",
            message: "Enter team member's ID",
            name: "id",
            validate: idInput =>{
                if (!idInput) {
                    return "Please enter at least one value."
                }
                else if (isNaN(idInput)) {
                    return "Please enter a numeric value."
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: emailInput => {
                if (!emailInput) {
                    return "Please enter at least one value."
                }
                const emailRegex = emailInput.match(/\S+@\S+\.\S+/);
                if (!emailRegex) {
                    return "Please enter a valid email address."
                }
                return true;
            }
        }
    ])
    .then(function({name,role,id,email}){
        let roleInfo = "";
        if (role === "Engineer"){
            roleInfo = "GitHub username";

        } else if (role === "Intern"){
            roleInfo = "school name";
        } else {
            roleInfo = "office number"
        }
        inquirer.prompt([
            {
                type: "input",
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo",
                validate: roleInfoInput =>{
                    if (roleInfoInput){
                        return true
                    } else{
                        console.log ("Enter the role");
                        return false
                    }
                }

            },
            {
                type:"list",
                message:"Would you like to add more team members ?",
                choices:[
                    "Yes",
                    "No"
                ],
                name: "addMember",
                validate: addMemberInput => {
                    if (addMemberInput){
                        return true
                    } else {
                        console.log("Pick one option to continue");
                        return false
                    }
                }
            }
        ])
        .then(function({roleInfo, addMember}){
            let newMember;
            if (role === "Engineer"){
                newMember = new Engineer (name,id,email,roleInfo);
            } else if (role === "Intern") {
                newMember= new Intern (name,id,email,roleInfo);
            } else{
                newMember = new Manager (name,id,email,roleInfo);
            }
            employee.push(newMember);
            addHtml(newMember)
            .then(function(){
                if (addMember === "Yes"){
                    startMenu();
                } else{
                    finishHtml();
                }
            })
        })

    })
};
startMenu();
function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-danger mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile('src/index.html', html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6 ">
            <div class="card mx-auto mb-3 bg-primary" style="width: 18rem ">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item text-primary">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6 ">
            <div class="card mx-auto mb-3 bg-primary" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item text-primary">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3 bg-primary" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item text-primary">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        fs.appendFile('src/index.html', data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;
fs.appendFile('src/index.html', html, function (err) {
    if (err) {
        console.log(err);
    };
});
console.log("Your team is now complete !");
}
module.exports = init;