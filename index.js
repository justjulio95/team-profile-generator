const inquirer = require('inquirer')
const fs = require('fs')

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'confirm',
            name:'confirmManager',
            message:'Are you the manager?',
            default: true
        },
        {
            type:'input',
            name:'name',
            message:'What is your name?',
            when:({confirmManager}) => {
                if (confirmManager) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
}

promptUser();