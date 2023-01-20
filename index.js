const inquirer = require("inquirer")
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const generateTeam = require('./src/generate-page')
const path = require("path")
const fs = require("fs")


const OUTPUT_DIR = path.resolve(__dirname, "team.html")
const outputPath = path.join(OUTPUT_DIR, )
const team = []


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name here (Required):',
            validate: nameInput => {
                if(nameInput) {
                    return(true)
                } else {
                    console.log('Please enter name to proceed')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID (Required):',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('Please enter employee ID to proceed')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email (Required):',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter email to proceed')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required):',
            validate: officeNumber => {
                if (officeNumber) {
                    return true
                } else {
                    console.log('Please enter office number to proceed')
                    return false
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        team.push(manager)
        promptMenu()
    })
}
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose from the following actions:',
            choices: ['Add an intern', 'Add an engineer', 'Done']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "Add an intern":
                console.log('Add Intern');
                promptIntern()
                break
            case "Add an engineer":
                promptEngineer()
                break
            default:
                buildTeam(team)
        }
    })
}
const promptIntern = () => {
    console.log(`
    ================
    Add a New Intern
    ================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of intern? (Required):',
            validate: internName => {
                if (internName) {
                    return true
                } else {
                    console.log('Please enter interns name to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employees ID number (Required):',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('Please enter employee ID to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email (Required):',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter email to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Name of interns school (Required):',
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log('Please enter interns school to proceed!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school)
        team.push(intern)
        promptMenu()
    })
}
const promptEngineer = () => {
    console.log(`
    ==================
    Add a New engineer
    ==================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of engineer? (Required):',
            validate: engineerName => {
                if (engineerName) {
                    return true
                } else {
                    console.log('Please enter engineers name to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employees ID number (Required):',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('Please enter employee ID to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email (Required):',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter email to proceed!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Name of engineers github username? (Required):',
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('Please enter engineers github username to proceed!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github)
        team.push(engineer)
        promptMenu()
    })
}
const buildTeam = () => {
    console.log(`
    ===============
    Finished Team
    ===============
    `);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateTeam(team), "utf-8")
}
promptManager()