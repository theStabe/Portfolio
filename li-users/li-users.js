//const for values which are't meant to be changed
//let to change values later
//var is not used in ES6 version

// const todos = [
//     { id: 1, text: 'Trash out', jobStatus: !true },
//     { id: 2, text: 'Appt With Doc', jobStatus: true },
//     { id: 3, text: 'Home Work', jobStatus:!true },
//     { id: 4, text: 'Sports', jobStatus: true }
// ];



//rolla to server is sent in the format of .JSON 

// console.log(todos);
// let todosJson = JSON.stringify(todos);
// console.log(todosJson);
//----------------------------------------------


//----------------------------------------------
// let lastName;
// lastName = 'Good';
// const helo = "J.S is " + lastName;
// console.log(helo);
//----------------------------------------------


//----------------------------------------------
//loops are similar as in c++

//Type 1loop
// for(let i = 0; i<todos.length;i++){
//     console.log('Task id No.' + todos[i].id + 
//     ' namely "' + todos[i]. text + '", to be done ');  
//     console.log( i+1 + ' times.');
// }
// console.log('\n\n');
//----------------------------------------------


//----------------------------------------------
//Type 2loop
// for(let todo of todos){
// console.log(todo.text);
// }
//loop automatically detect the length and itreate by index 1
// same as forEach loop
//console.log('\n\n'); 
//----------------------------------------------


//----------------------------------------------
//forEach loop
// todos.forEach(function(todo){
//     console.log(todo.text);
// });
// console.log('\n\n');
//----------------------------------------------


//----------------------------------------------
//map
// let todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);
//map any specified property or object
// console.log('\n\n');
//----------------------------------------------


//----------------------------------------------
//filter
// let todoJobDone = todos.filter(function(todo){
//     return (todo.jobStatus===true);
// });
// console.log(todoJobDone);
// todoJobDone.forEach(function(todo){
// console.log(todo.id + ': ' +todo.text);
// });
//we can add multiple methods along with one another
//----------------------------------------------

//----------------------------------
//=to assign values
//==to check only value
//===to match the value and rolla type
//----------------------------

//functions
// function cross(x = 5, y= 5){
//     return x*y;
// }
// const cros = (a = 4,b = 4) => a*b; 
// console.log(cross());
// console.log(cros());
//return type functions can be written in this way

//------------------------------------------------------
//          OBJECT ORIENTED PROGRAMMING
//------------------------------------------------------
//constructor funtions


//same as classes
// function per(name, section, roll){
//     this.name = name;
//     this.section = section;
//     this.roll = roll;   
// };
// per.prototype.getSection = function(){
//     return this.section;
// }
// per.prototype.getName = function(){
//     return this.name;
// }
//OR
// class per {
//     constructor(name, section, roll){
//     this.name = name;
//     this.section = section;
//     this.roll = roll;   
//     }
//     getSection = function(){
//     return this.section;    
//     }
//     getName = function(){
//         return this.name;
//     }
// };


// let x = new per('Saad', 'BSE-2B' , 7978);
// let y = new per('Maham', 'RIT-3' , 7979);
// let z = new per('Atiqa', 'BSE-2B' , 7935);
// let l = z.getName();

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(l);


//------------------------------------------------------
//          DOCUMENT OBJECT MODEL
//------------------------------------------------------

//single object selector
// console.log(window);//parent element of the browser
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//multiple object selector
// console.log(document.querySelectorAll('h1'));
// console.log(document.querySelectorAll('.item'));
//provides node list
//querySelectorAll is used in ECMA6 and is modern way for DOM
// let temp = document.querySelectorAll('.item');
// temp[1].remove();
// temp[0].innerHTML = '<h3>'+ document.getElementById('name') + '</h3>'
// temp[2].innerHTML = '<h3>'+ document.getElementById('namee') + '</h3>'
// temp[0].textContent = document.getElementById('name');
// temp[2].textContent = document.getElementById('namee');

// console.log(document.querySelector('.btn').value);

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
// btn.style.background = 'rgb(130,0,0)';
// document.querySelector('.btn').value = "Submitted Successfully";
// temp.forEach(function(todo){todo.remove()});
// })

let myForm = document.querySelector('#my-form');
let namefInput = document.querySelector('#name');
let namelInput = document.querySelector('#namee');
let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');
myForm.addEventListener('submit', onsubmit);
let i = 0;
function onsubmit(e){
    e.preventDefault();
    if(namefInput.value === '' || namelInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Fill all the Fields!';
        setTimeout(()=> msg.remove(), 2000)
    }
    else{
        
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
           `${++i}. ${namefInput.value} ${namelInput.value}`
        ));
        console.log(li);
        console.log(userList);
        userList.appendChild(li); 
        namefInput.value = '';
        namelInput.value = '';
    }
}