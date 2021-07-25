// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license})<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
✏️ ${answers.tests}
## Questions
 ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️, 😳, 😩  by [README-generator](https://github.com/jhickey/ReaDMe-generator) _
    `;
}

module.exports = generateReadme;
