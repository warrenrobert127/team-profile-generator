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
         
    })
}
function addIntern() {
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
           <a href="#" class="card-link">Another link</a>
         </div>
       </div>
         `
         console.log(html);
         
    })
}
function addEngineer() {
    console.log('addNewEngineer');
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
         
    })
}
addEmployee()