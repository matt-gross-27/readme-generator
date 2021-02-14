const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const writeReadme = require('./utils/generate-readme.js');
const licenses = require('./utils/licenses.js');

const licenseNames = (licenses) => {
  list = licenses.map((obj = obj => obj.name));
  return list
}

const promptUser = () => {
  return inquirer.prompt(
    [
      {
        // project name
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
        // confirm deployed
        type: 'confirm',
        name: 'confirmDeployed',
        message: 'Is your application deployed?',
        default: false
      },
      {
        // deployed app link
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
      {
        // installation
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions. (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter installation instructions for your application.`);
            return false;
          }
        }
      },
      {
        // usage
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions. (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter usage instructions for your application.`);
            return false;
          }
        }
      },
      {
        // list
        type: 'list',
        name: 'license',
        message: "Please choose a license",
        choices: licenseNames(licenses)
      },
      {
        // guide lines
        type: 'input',
        name: 'guideLines',
        message: 'Enter Contributing Guide Lines for your application. (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter Contributing Guide Lines for your application.`);
            return false;
          }
        }
      },
      {
        // test
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your application. (Required)',
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log(`Please enter test instructions for your application.`);
            return false;
          }
        }
      }
    ]
  )};

  const promptCredits = contributors => {
    if(!contributors.credits) {
      contributors.credits =[];
    }
    return inquirer.prompt([
      {
        // confirm
        type: 'confirm',
        name: 'confirmAddContributor',
        message: 'Would you like to add a contributor to your project?',
        default: false
      },
      {
        // credits
        type: 'input',
        name: 'contributorGitHub',
        message: 'Please enter a contributors GitHub username',
        when: ({ confirmAddContributor }) => {
          if(confirmAddContributor) {
            return true;
          } else {
            return false;
          }
        }
      }
    ])
    .then(contributingData => {
      contributors.credits.push(contributingData);
      if(contributingData.confirmAddContributor) {
        return promptCredits(contributors)
      } else {
        return contributors
      }
    });
  };

  promptUser()
    .then(promptCredits)
    .then(readmeData => {
      console.log(readmeData);
      return generateReadme(readmeData);
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