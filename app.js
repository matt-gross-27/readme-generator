const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const writeReadme = require('./utils/generate-readme.js');

const promptUser = () => {
  return inquirer.prompt(
    [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project?',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter your project's name.`);
            return false;
          }
        }
      }
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