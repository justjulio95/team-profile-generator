//import all the important classes/functions that this file will interact with
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const generatePage = require('./src/page-template')
const {writeFile, copyFile} = require('./utils/generate-site')

// create an empty array to push team members into
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
        //create a new manager object using the information provided
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

        //push manager info up into teamMembers array
        teamMembers.push(manager)
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
                //take the teamMembers array and feed it into the generate page function, to then write the file into the dist/folder
                writeFile(generatePage(teamMembers))
                //copy the style.css folder from src into dist/
                copyFile()
                console.log('Your team is all set up!')
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
        //Create a new engineer object using the information provided
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        //push the engineer into the teamMembers array
        teamMembers.push(engineer)
        //trigger the menu again
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
        //create a new intern object using the information provided
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        //push the intern into the teamMembers array
        teamMembers.push(intern)
        //trigger the menu again
        promptMenu();
    })
}

promptManager()
.then(promptMenu)