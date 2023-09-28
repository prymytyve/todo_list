import {Todo, Sub, todoArr} from "./m_todoClass.js";
import { subLister } from "./m_subListFuncs.js";

const mainBody = document.querySelector('#mainBody');
const addTodo = document.querySelector('.addTodo')

function todoCreator(){
    
    addTodo.addEventListener('click', () =>{
        const todo = new Todo();
        todo.generate()
    })   

    const b = document.createElement('button');
    b.textContent = 'check'
    b.addEventListener('click', () => console.log(todoArr))
    mainBody.append(b)
}


Todo.prototype.generate = function(){
    const todo = document.createElement('li');    
    const main = document.createElement('ul');
    const sub = document.createElement('ul');

    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv')
    const task = document.createElement('input');
    task.classList.add('.task');
    task.addEventListener('keyup', () => this.task = task.value)
    taskDiv.appendChild(task)
    todo.appendChild(taskDiv)


    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv')
    const pLabel= document.createElement('label');
    pLabel.textContent = 'Priority: ';
    pLabel.classList.add('pLabel')
    pLabel.setAttribute('for', 'priority')
    const pSelect= document.createElement('select');
    pSelect.addEventListener('change', () => this.priority = pSelect.value)
    pSelect.classList.add('pSelect')
    pSelect.setAttribute('id', 'priority')
    priorityDiv.appendChild(pLabel)
    priorityDiv.appendChild(pSelect)
    
    todo.appendChild(priorityDiv)
    const pOptions = ['', 'Low','Medium','High', 'Urgent']
    for (let i = 0; i <= pOptions.length - 1; i++){
        const option = document.createElement('option');
        option.setAttribute('value', `${pOptions[i]}`)
        option.textContent = pOptions[i]
        pSelect.appendChild(option)
    }
    

    const dateDiv= document.createElement('div');
    dateDiv.classList.add('dateDiv')    
    const dateInput= document.createElement('input');
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'date')
    dateInput.addEventListener('change', () => this.dueDate = dateInput.value)
    dateDiv.appendChild(dateInput)
    main.appendChild(dateDiv)


    const addSub = document.createElement('button');
    addSub.textContent = 'Add task'
    addSub.addEventListener('click', () => {
        subLister(this.subList, sub, addSub)
    })
    sub.appendChild(addSub)


    todo.appendChild(main)
    todo.appendChild(sub)
    mainBody.appendChild(todo)
}

export default todoCreator