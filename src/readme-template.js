const deployedLink = (confirm, link) => {
  if (confirm) {
    return `<br>
### [Go To Deployed Application](${link})`
  } else {
    return ``;
  }
}

module.exports = (promptData) => {
  //destruct object for easier use
  const { projectName, gitHub, email, description, confirmDeployed, deployedAppLink } = promptData;
  return `# ${projectName}
<a href = "#description"></a>
## Description

${description}
${deployedLink(confirmDeployed, deployedAppLink)}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

<a href = "#installation"></a>
## Installation


<a href = "#usage"></a>
## Usage


<a href = "#contributing"></a>
## Contributing


<a href = "#license"></a>
## License


<a href = "#tests"></a>
## Tests


<a href = "questions"></a>
## Questions
Feel free to reach out with any question you have about ${projectName}!

### Contact information:
- GitHub: [${gitHub}](https://www.github.com/${gitHub})
- Email: [${email}](mailto:${email})
`
};