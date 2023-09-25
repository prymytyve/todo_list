import ToDo from "./mod_todocard";
import Projects from "./mod_projects";
import {Temp, tempLister} from './mod_subList'

const mainBody = document.querySelector('#mainBody')
const title = document.querySelector('#title');
const priority = document.querySelector('#priority');
const due = document.querySelector('#due');
const project = document.querySelector('#project');
const submit = document.querySelector('.submit');
const subList = document.querySelector('.subList');
const addTaskbtn = document.querySelector('.addTask');
const addSec = document.querySelector('.addSec');


//Subtask list buttons
addTaskbtn.addEventListener('click', e => {
    e.preventDefault()
    const li = document.createElement('li');
    const input = document.createElement('input');
    const tempItem = new Temp(input.value)
    input.addEventListener('keyup', e =>{
        tempItem.newName = input.value
})
    
    
const deleteSub = document.createElement('button');
    deleteSub.textContent = 'X';       
    deleteSub.addEventListener('click', e => {
        e.preventDefault()
        subList.removeChild(li)
        tempItem.delete()
    })
    li.appendChild(input)
    li.appendChild(deleteSub)
    subList.insertBefore(li, addSec)
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
        line.textContent = sub.task;
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
        const subs = tempLister()
        const toDo = new ToDo(title.value, priority.value, due.value, ...subs);
        toDo.generate()
        // toDo.project = project.name;
        toDo.log()

    })
}

export default dom

