import {Todo, Sub, todoArr} from "./m_todoClass.js";
import { subLister } from "./m_subListFuncs.js";
import { format } from "date-fns";
import { projArr } from "./m_projects.js";
import printMode from "./printMode.js";


export default Todo.prototype.inputMode = function(){
    const todo = document.createElement('form'); 
    todo.classList.add('todo', 'inputMode')   
    const main = document.createElement('ul');
    main.classList.add('main')
    const sub = document.createElement('ul');
    sub.classList.add('sub')
    const finBtn = document.createElement('button');
    finBtn.disabled = true;

    ///////////////////////////////////
    //task name///////////////////////
    const task = document.createElement('input');
    task.classList.add('task');
    task.setAttribute('value', this.task)
    task.addEventListener('keyup', () => {
        this.task = task.value
        task.value.length === 0? finBtn.disabled = true: finBtn.disabled = false; 
    })


    //////////////////////////////////
    //priority selection////////////// 
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv')
    const pSpan= document.createElement('span');
    pSpan.textContent = 'Priority: ';
    pSpan.classList.add('pSpan')
    const pSelect= document.createElement('select');
    pSelect.setAttribute('value', this.priority)
    pSelect.addEventListener('change', () => this.priority = pSelect.value)
    pSelect.classList.add('pSelect')
    priorityDiv.appendChild(pSpan)
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
    const dSpan = document.createElement('span')
    dSpan.textContent = 'Due: '; 
    const dateInput= document.createElement('input');
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'datetime-local')
    dateInput.setAttribute('value', this.unDueDate )
 
    dateInput.addEventListener('change', () => {
        this.unDueDate = dateInput.value
        this.dueDate = format(new Date(dateInput.value), "eeee', 'MMM dd', 'yyyy' at' hh:mm' 'aaa")
    })
    dateDiv.appendChild(dSpan)
    dateDiv.appendChild(dateInput)
    main.appendChild(dateDiv)

    ////////////////////////////////////
    //projects//////////////////////////
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv')
    const projSpan= document.createElement('span');
    projSpan.textContent = 'Project: ';
    projSpan.classList.add('projSpan')
    const projSelect= document.createElement('select');
    projSelect.addEventListener('change', () => this.project = projSelect.value)
    projSelect.classList.add('projSelect')
    projectDiv.appendChild(projSpan)
    projectDiv.appendChild(projSelect)
    
    //project options
    for (let i = 0; i <= projArr.length - 1; i++){
        const projOption = document.createElement('option');
        projOption.setAttribute('value', `${projArr[i]}`)
        projOption.textContent = projArr[i]
        projSelect.appendChild(projOption)
    }
    todo.appendChild(projectDiv)



    /////////////////////////////////
    //Edit todo buttons//////////////////
    const editBox = document.createElement('div')
    editBox.classList.add('editBox')
    
    //finish editing todo
    finBtn.classList.add('finBtn')
    finBtn.textContent = 'Done'
    finBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const thisTodoDiv = document.querySelector(`.${this.id}`)
        thisTodoDiv.replaceChildren(this.printMode())
    })
    editBox.appendChild(finBtn)

    //delete todo button
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', (e) => {
        e.preventDefault()
        this.delete()
        const thisTodoDiv = document.querySelector(`.${this.id}`)
        mainBody.removeChild(thisTodoDiv)
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
    return todo
}