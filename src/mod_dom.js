import ToDo from "./mod_todocard";
import Projects from "./mod_projects";
import {Temp, tempList} from './mod_subList'
import {subInput, resetSubs} from "./mod_form.js";

const mainBody = document.querySelector('#mainBody')
const title = document.querySelector('#title');
const priority = document.querySelector('#priority');
const due = document.querySelector('#due');
const project = document.querySelector('#project');
const submit = document.querySelector('.submit');
const subList = document.querySelector('.subList');
const addTaskbtn = document.querySelector('.addTask');
const addSec = document.querySelector('.addSec');


//add task button generates subtask list buttons
addTaskbtn.addEventListener('click', e => {
    e.preventDefault()
    subInput()
})



//method which creates and appends Todos to dom
ToDo.prototype.generate = function(){
    const card = document.createElement('div');    
    const list = document.createElement('ul');
    const list2 = document.createElement('ul');

    //creates title, priority, and due date elements
    const info = [this.title, this.priority, this.dueDate];
    info.forEach(a => {
        const line = document.createElement('li');
        line.textContent = a;
        list.appendChild(line)
    })

    this.subTaskList.forEach(sub => {
        const line = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = sub.task;
        line.appendChild(span)
        if(sub._type==='task'){
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox')
            line.insertBefore(input, span)
            input.addEventListener('change', e => sub._completed = input.checked)        
        } 
        list2.appendChild(line)
    })

    list.appendChild(list2)
    card.appendChild(list)    
    mainBody.append(card)    
}




//export function that creates new ToDo based on user's input
function dom(){
    submit.addEventListener('click', e => {
        e.preventDefault()
        const toDo = new ToDo(title.value, priority.value, due.value, ...tempList);
        toDo.generate()
        // toDo.project = project.name;
        toDo.log()
        resetSubs()

    })
}

export default dom

