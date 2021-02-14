const deployedLink = (confirm, link) => {
  if (confirm) {
    return `<br>
### [Go To Deployed Application](${link})`
  } else {
    return ``;
  }
};

const licenseBadge = choice => {
return `<div style="position: absolute; top: 22px; right: 50px">

![licence: ${choice}](https://img.shields.io/badge/license-${choice.split(' ').join('%20')}-blue)
</div>`
}

const listContributors = arr => {
  let list = [];
  for(i=0; i < arr.length -1; i++) {
    let item = `[${arr[i].contributorGitHub}](https://github.com/${arr[i].contributorGitHub})`
    list.push(item);
  } if (list.length === 0) {
    return "";
  }
  let literal = "- " + list.join(`
- `);
  return literal;
};

module.exports = (promptData) => {
  //destruct object for easier use
  const { projectName, gitHub, email, description, confirmDeployed, deployedAppLink, usage, installation, license, test, credits, guideLines } = promptData;
  return `# ${projectName}

${licenseBadge(license)}

<a href = "#description"></a>
## Description
${description}
${deployedLink(confirmDeployed, deployedAppLink)}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing Guide Lines](#contributing)
  - [Questions](#questions)

<a href = "#installation"></a>
## Installation
${installation}

<a href = "#usage"></a>
## Usage
${usage}

<a href = "#credits"></a>
## Credits
- [${gitHub}](https://github.com/${gitHub})
${listContributors(credits)}

<a href = "#license"></a>
## License
${license}

<a href = "#contributing"></a>
## Contributing Guide Lines
${guideLines}

<a href = "#tests"></a>
## Tests
${test}

<a href = "questions"></a>
## Questions
Feel free to reach out with any question you have about ${projectName}!

### Contact information:
- GitHub: [${gitHub}](https://www.github.com/${gitHub})
- Email: [${email}](mailto:${email})
`
};