// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licensesDetailes = [
  {
    name: "MIT",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT"
  },
  {
    name: "GPLv3",
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
    name: "Apache 2.0",
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0"
  },
  
];

function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  }
  let result = licensesDetailes.filter(licenseDetail => licenseDetail.name === license);
  if (result.length > 0) {
    return result[0].badge;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ``;
  }
  let result = licensesDetailes.filter(licenseDetail => licenseDetail.name === license);
  if (result.length > 0) {
    return result[0].link;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  return `This application is covered by [${license}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ![Link to my GutHub Profile](https://github.com/${data.github})
  If you have any questions, please reach out to me at ${data.email}  
  
  `;
}

module.exports = generateMarkdown;
