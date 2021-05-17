const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const teamList = [];

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//ADD MANAGER
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is their full name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their ID number',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their contact email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their office number?',
    }]
  )
    .then((response) => {
      const manager1 = new Manager(response.id, response.name, response.email, response.officeNumber);
      teamList.push(manager1);
      console.log(manager1);
      console.log(teamList)
      startHTML();
      generateManagerCard();
      mainMenu();
    },
    )
  }
  promptUser();
 //------------------------------------------------------------------------------------

  function mainMenu() {
    const promptU = () => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'options',
          message: 'What action would you like to take?',
          choices: [
            "ADD AN INTERN",
            "ADD AN ENGINEER",
            "EXIT AND PRINT PAGE"
          ],
        },
      ])

        //MENU TREE

        .then((response) => {
          switch (response.options) {
            case "ADD AN ENGINEER":
              addEngineer();
              break;
            case "ADD AN INTERN":
              addIntern();
              break;
            case "EXIT AND PRINT PAGE":
              endHTML();
              break;
          }
        })

    }
    promptU();
  }

  //ADD ENGINEER
  function addEngineer() {
    console.log("Employee added successfully!")

    const promptUser = () => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'What is their full name?',
        },
        {
          type: 'input',
          name: 'idNumber',
          message: 'What is their ID number',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is their contact email?',
        },
        {
          type: 'input',
          name: 'gitHub',
          message: 'What is their GitHub username?',
        }])

        // promptUser();
        .then((response) => {
          const engineer1 = new Engineer(response.id, response.name, response.email, response.gitHub);
          teamList.push(engineer1);
          console.log(engineer1);
          generateEngineerCard(engineer1)
          mainMenu();
        },
        )

    }
    promptUser();
  }


  //ADD INTERN
  function addIntern() {
    console.log("Employee added successfully!")

    const promptUser = () => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'What is their full name?',
        },
        {
          type: 'input',
          name: 'idNumber',
          message: 'What is their ID number',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is their contact email?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What school are they attending?',
        }
      ])
        .then((response) => {
          const intern1 = new Intern(response.id, response.name, response.email, response.school);
          teamList.push(intern1);
          console.log(intern1);
          generateInternCard();
          mainMenu();

        },
        )

    }
    promptUser();
  }


// const employee = new employee("name", "employeeID", "email", "officeNumber");
// --------------------------------------------------
function startHTML(employee) {
// console.log(teamList)

 const generatingHTML = 

  `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
  </head>
  
  <body>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
              // <h1 class="display-4">Team Profile Generator</h1>

          </div>`;

fs.writeFile(".index.html", generatingHTML, function (err) {
  if (err) {
    console.log(err);
  }

}
)}


function generateInternCard(intern1) {

    const generatingHTML=
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Intern: </h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern1.getName}</h6>
        <p class="card-text">${intern1.getID}</p>
        <a href="${intern1.getEmail}" class="card-link">${intern1.getEmail}</a>
        <a class="card-link">${intern1.getSchool}</a>
      </div>
      }`
    fs.appendFile(".index.html", generatingHTML, function (err) {
      if (err) {
        console.log(err);
      }
    },
    )}

      function generateManagerCard(manager1) {

        const generatingHTML=
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager: </h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager1.getName}</h6>
          <p class="card-text">${manager1.getID}</p>
          <a href="${manager1.getEmail}" class="card-link">${manager1.getEmail}</a>
          <a class="card-link">${manager1.getSchool}</a>
        </div>
        }`
        fs.appendFile(".index.html", generatingHTML, function (err) {
          if (err) {
            console.log(err);
          }
        })
      }


          function generateInternCard(engineer1) {

            const generatingHTML=
          
            `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Engineer: </h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer1.getName}</h6>
            <p class="card-text">${engineer1.getID}</p>
            <a href="${engineer1.getEmail}" class="card-link">${engineer1.getEmail}</a>
            <a class="card-link">${engineer1.getSchool}</a>
          </div>
          }`
            fs.appendFile(".index.html", generatingHTML, function (err) {
              if (err) {
                console.log(err);
              }
            })
            
          }

        
function endHTML(){


  `</body>

  </html>`;
};



const init = () => {
          promptUser()
            .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
            .then(() => console.log('Successfully wrote to index.html'))
            .catch((err) => console.error(err));
        };

        init();
