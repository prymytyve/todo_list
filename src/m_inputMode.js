import {Todo, Sub, todoArr} from "./m_todoClass.js";
import { subLister } from "./m_subListFuncs.js";
import { format } from "date-fns";


export default Todo.prototype.inputMode = function(){
    const todo = document.createElement('form'); 
    todo.classList.add('todo')   
    const main = document.createElement('ul');
    main.classList.add('main')
    const sub = document.createElement('ul');
    sub.classList.add('sub')

    ///////////////////////////////////
    //task name///////////////////////
    const task = document.createElement('input');
    task.classList.add('task');
    task.addEventListener('keyup', () => this.task = task.value)

    //////////////////////////////////
    //priority selection////////////// 
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv')
    const pLabel= document.createElement('label');
    pLabel.textContent = 'Priority: ';
    pLabel.classList.add('pLabel')
    const pSelect= document.createElement('select');
    pSelect.addEventListener('change', () => this.priority = pSelect.value)
    pSelect.classList.add('pSelect')
    priorityDiv.appendChild(pLabel)
    priorityDiv.appendChild(pSelect)
    
    //priority options
    const optionsArr = ['', 'Low','Medium','High', 'Urgent']
    for (let i = 0; i <= optionsArr.length - 1; i++){
        const option = document.createElement('option');
        option.setAttribute('value', `${optionsArr[i]}`)
        option.textContent = optionsArr[i]
        pSelect.appendChild(option)
    }
    main.appendChild(priorityDiv)
    
    //////////////////////////////////
    //duedate and time///////////////
    const dateDiv= document.createElement('div');
    dateDiv.classList.add('dateDiv')   
    const dLabel = document.createElement('label')
    dLabel.textContent = 'Due: '; 
    const dateInput= document.createElement('input');
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'datetime-local')
 
    dateInput.addEventListener('change', () => {
        this.dueDate = dateInput.value
    })
    dateDiv.appendChild(dLabel)
    dateDiv.appendChild(dateInput)
    main.appendChild(dateDiv)

    /////////////////////////////////
    //Edit todo buttons//////////////////
    const editBox = document.createElement('div')
    editBox.classList.add('editBox')
    
    //finish editing todo
    const finBtn = document.createElement('button');
    finBtn.classList.add('finBtn')
    finBtn.textContent = 'Done'
    finBtn.addEventListener('click', (e) => {
        e.preventDefault()
    })
    editBox.appendChild(finBtn)

    //delete todo button
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', (e) => {
        e.preventDefault()
        this.delete()
        mainBody.removeChild(todo)
    })
    editBox.appendChild(delBtn)
    
    //////////////////////////////////////
    //creates subtasks and subtask section
    const addSub = document.createElement('button');
    addSub.textContent = 'Add task'
    addSub.addEventListener('click', (e) => {
        e.preventDefault()
        subLister(this.subList, sub, addSub)
    })
    sub.appendChild(addSub)


    //////////////////////////////////////
    //appends main parts of todo/////
    todo.appendChild(task)
    todo.appendChild(main)
    todo.appendChild(editBox)
    todo.appendChild(sub)
    mainBody.appendChild(todo)
}