var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios");


inquirer 
    .prompt([
{
    message: "Project Title?",
    name: "title"

},
{
    message: "Write a description: ",
    name: "description"
},
{
    message: "Input installation instructions: ",
    name: "installation"
},
{
    message: "Input usage information: ",
    name: "usage"
},
{
    message: "Input contribution Guidelines: ",
    name: "contributions"
},
{
    message: "Input test instructions: ",
    name: "tests"
},
{
    message: "Input contact info: ",
    name: "contact"
},
{
    message: "What is your Github user username?",
    name: "username"
}





])
.then(function(response){
    console.log(response)

const readMe = 
` ${response.title}


<a name="Description"></a>
## Description
${response.description}

## Table Of Contents
1. [ Description. ](#Description)
2. [ Installation. ](#Installation)
3. [ Usage. ](#Usage)
4. [ Tests. ](#Tests)
5. [ Contribution. ](#Contribution)
6. [ Links. ](#Links)
7. [ License. ](#License)

<a name="installation"></a>
## Installation

${response.installation}

<a name="usage"></a>
## Usage

${response.usage}

<a name="tests"></a>
## Tests

${response.tests}

<a name="contribution"></a>
## Contributions

${response.contribution}

<a name="links"></a>
## Links

${response.links}

<a name="license"></a>
## License


${response.license}

<a name="questions"></a>
## Questions

${response.questions}

GitHub Profile: https://github.com/${response.username}
Contact me with any additional questions:
${response.contact}
`

    fs.writeFile("README.md", readMe, function(err){
        if (err) {
            throw err
        }
        console.log("Successfully created your README.md");
    })




})