
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
      mainMenu();
    },
    )

  promptUser();




  // //------------------------------------------------------------------------------------


  function mainMenu() {
    const promptU = () => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'options',
          message: 'What action would you like to take?',
          choices: [
            "ADD AN EMPLOYEE",
            "ADD AN ENGINEER",
            "ADD AN INTERN",
            "ADD A MANGER",
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
        }])
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
        }])
    }
    promptUser();
  }
}







// const employee = new employee("name", "employeeID", "email", "officeNumber");
// --------------------------------------------------

const generateHTML = (answers) =>
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
              <h1 class="display-4">Hi! My name is ${answers.employee}</h1>
              <p class="lead">I am from ${answers.location}.</p>
              <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
          </div>
         
      </div>
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
          
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
  
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
  
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
  
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
  </body>
  
  </html>`;




const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
