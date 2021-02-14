const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const writeReadme = require('./utils/generate-readme.js');

const promptUser = () => {
  return inquirer.prompt(
    [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter your project's name.`);
            return false;
          }
        }
      },
      {
        // gitHub
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter your GitHub username.`);
            return false;
          }
        }
      },
      {
        // email
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter your email.`);
            return false;
          }
        }
      },
      {
        // description
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project. What? Why? How?',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter your project's name.`);
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmDeployed',
        message: 'Is your application deployed?',
        default: false
      },
      {
        type: 'input',
        name: 'deployedAppLink',
        message: 'Provide the url of your application? (Required)',
        when: ({ confirmDeployed }) => {
          if(confirmDeployed) {
            return true;
          } else {
            return false;
          }
        },
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter your project's name.`);
            return false;
          }
        }
      },
    ]
  )};

  promptUser()
    .then(promptData => {
      return generateReadme(promptData);
    })
    .then(readmeContent => {
      return writeReadme(readmeContent);
    })
    .then(writeResponse => {
      console.log(`
        ========================================================
        ${writeResponse.message}
        ========================================================
      `);
    })
    .catch(err => console.log(err));