const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

let teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?',
            validate: confirmName => {
                if (confirmName){
                    return true;
                } 
                console.log('\nPlease enter your name!')
                return false;
            }
        },
        {
            type:'input',
            name:'id',
            message:'What is your work ID?',
            validate: confirmId => {
                if (confirmId) {
                    return true;
                }
                console.log('\nPlease provide your work ID!');
                return false;
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?',
            validate: confirmEmail => {
                if (confirmEmail.includes('@')) {
                    return true
                }
                console.log('\nPlease enter a valid email address!')
                return false;
            }
        },
        {
            type:'input',
            name:'officeNumber',
            message:'What is your office phone number?',
            validate: confirmOfficeNum => {
                if (confirmOfficeNum) {
                    return true;
                }
                console.log('\nPlease provide your office number!')
                return false;
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.table(manager)
        teamMembers.push(manager)
        promptMenu();
    })
}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'addToTeam',
            message:'Would you like to add a member to your team?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then(choice => {
        console.log(choice)
        switch(choice.addToTeam) {
            case 'Engineer':
                console.log('Lets add an Engineer to your team!')
                addEngineer();
                break;
            case 'Intern':
                console.log('Lets add an Intern to your team!')
                addIntern();
                break;
            case 'No':
                console.log('Your team is all set up!')
                console.table(teamMembers)
                break;
        }
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:"What is your engineer's name?",
            validate: confirmName => {
                if (confirmName) {
                    return true;
                }
                console.log("\nPlease enter your engineer's name!")
                return false;
            }
        },
        {
            type:'input',
            name:'id',
            message:'What is their work ID?',
            validate: confirmId => {
                if (confirmId) {
                    return true;
                }
                console.log('Please provide their work ID!')
                return false;
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is their email address?',
            validate: confirmEmail => {
                if (confirmEmail.includes('@')) {
                    return true
                }
                console.log('\nPlease Provide a valid email address for your engineer!')
                return false;
            }
        },
        {
            type:'input',
            name:'github',
            message:'What is their Github username?',
            validate: confirmGithub => {
                if (confirmGithub) {
                    return true
                }
                console.log('\nPlease provide their Github username!')
                return false;
            }
        }
    ])
    .then(answers =>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.table(engineer)
        teamMembers.push(engineer)
        promptMenu();
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:"What is your intern's name?",
            validate: confirmName => {
                if (confirmName) {
                    return true;
                }
                console.log("\nPlease enter your intern's name!")
                return false;
            }
        },
        {
            type:'input',
            name:'id',
            message:'What is their work ID?',
            validate: confirmId => {
                if (confirmId) {
                    return true;
                }
                console.log('Please provide their work ID!')
                return false;
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is their email address?',
            validate: confirmEmail => {
                if (confirmEmail.includes('@')) {
                    return true
                }
                console.log('\nPlease Provide a valid email address for your engineer!')
                return false;
            }
        },
        {
            type:'input',
            name:'school',
            message:'What school are they from?',
            validate: confirmSchool => {
                if (confirmSchool){
                    return true;
                }
                console.log('\nPlease provide the school your intern is from!')
                return false;
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        console.table(intern)
        teamMembers.push(intern)
        promptMenu();
    })
}

promptManager();