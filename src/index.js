const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const { callbackify } = require('util');
var html = 'string'

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'add employee?',
            name: 'userOption',
            choices: ['addManager', 'addIntern', 'addEngineer', 'exitApplication']
        }
    ])
        .then(function (response) {
            switch (response.userOption) {
                case 'addManager':
                    addManager()
                    break;
                case 'addIntern':
                    addIntern()
                    break;
                case 'addEngineer':
                    addEngineer()
                    break;
                case 'exitApplication':
                    exitApplication()
                    break;


            }
        })
}

function addManager() {
    console.log('addNewManager');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter employee id'
        },
        {
            type: 'input',
           name: 'email',
           message: 'enter employee email'
        },
        {
            type: 'input',
           name: 'officeNumber',
           message: 'enter Manager office number'
        }
    ])
    .then(function({
        name, id, email, officeNumber
    }){
         var newEmployee = new Manager(id, name, email, officeNumber)
         html += `<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${newEmployee.name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h6>
           <p class="card-text">office number:${newEmployee.officeNumber}</p>
           <a href="mailto:${newEmployee.email}" class="card-link">email:${newEmployee.email}</a>
           <p class="card-text">id:${newEmployee.id}</p>
           <a href="#" class="card-link">Another link</a>
         </div>
       </div>
         `
         console.log(html);
         addEmployee() 
         
    })
}
function addIntern() {
    console.log('addNewIntern');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter employee id'
        },
        {
            type: 'input',
           name: 'email',
           message: 'enter employee email'
        },
        {
            type: 'input',
           name: 'schoolName',
           message: 'enter Manager office number'
        }
    ])
    .then(function({
        name, id, email, schoolName
    }){
         var newEmployee = new Intern(id, name, email, schoolName)
         html += `<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${newEmployee.name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h6>
           <p class="card-text">school name:${newEmployee.schoolName}</p>
           <a href="mailto:${newEmployee.email}" class="card-link">email:${newEmployee.schoolName}</a>
           <p class="card-text">id:${newEmployee.id}</p>
           <a href="https://github.com/${newEmployee.github}" class="card-link">github</a>
         </div>
       </div>
         `
         console.log(html);
         addEmployee() 
         
    })
}
function addEngineer() {
    console.log('------- AddN ew Engineer----------');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter employee id'
        },
        {
            type: 'input',
           name: 'email',
           message: 'enter employee email'
        },
        {
            type: 'input',
           name: 'github ',
           message: 'enter github username'
        }
    ])
    .then(function({
        name, id, email, github
    }){
         var newEmployee = new Engineer(id, name, email, github)
         html += `<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${newEmployee.name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h6>
           <p class="card-text">office number:${newEmployee.github}</p>
           <a href="mailto:${newEmployee.email}" class="card-link">email:${newEmployee.email}</a>
           <p class="card-text">id:${newEmployee.id}</p>
           <a href="#" class="card-link">Another link</a>
         </div>
       </div>
         `
         console.log(html);
         addEmployee() 
         
    })
}
function exitApplication() {
    var exitHtml = `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <title>team profile generator</title>
      </head>
      <body>
      <header class="bg-danger text-center">

        <h1>team profile generator</h1>
    </header>
    ${html}
        <!-- Optional JavaScript; choose one of the two! -->
    
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        -->
      </body>
    </html>
    `
    fs.writeFileSync('index.html', exitHtml, function(error){
        if(error) throw error 
    })
    console.log('application is working')
}
addEmployee()
