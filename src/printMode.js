import {Todo, Sub, todoArr} from "./m_todoClass.js";
import { subLister } from "./m_subListFuncs.js";
import { format } from "date-fns";
import inputMode from "./m_inputMode.js";


export default Todo.prototype.printMode = function(){
    const todo2 = document.createElement('div'); 
    todo2.classList.add('todo')   
    const main = document.createElement('ul');
    main.classList.add('main')
    const sub = document.createElement('ul');
    sub.classList.add('sub')

    ///////////////////////////////////
    //task name///////////////////////
    const task = document.createElement('p');
    task.textContent = this.task
    task.classList.add('task');

    //////////////////////////////////
    //priority selection////////////// 
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv')
    const pSpan= document.createElement('span');
    pSpan.textContent = 'Priority: ';
    pSpan.classList.add('pSpan')
    const pText= document.createElement('p');
    pText.textContent = this.priority
    pText.classList.add('pText')
    priorityDiv.appendChild(pSpan)
    priorityDiv.appendChild(pText)
    

    main.appendChild(priorityDiv)
    
    //////////////////////////////////
    //duedate and time///////////////
    const dateDiv= document.createElement('div');
    dateDiv.classList.add('dateDiv')   
    const dSpan = document.createElement('span')
    dSpan.textContent = 'Due: '; 
    const dText= document.createElement('p');
    dText.textContent = this.dueDate
    dText.classList.add('dText')
    dateDiv.appendChild(dSpan)
    dateDiv.appendChild(dText)
    main.appendChild(dateDiv)

    /////////////////////////////////
    //Edit todo buttons//////////////////
    const editBox = document.createElement('div')
    editBox.classList.add('editBox')
    
    //finish editing todo
    const finBtn = document.createElement('button');
    finBtn.classList.add('finBtn')
    finBtn.textContent = 'Edit'
    finBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const thisTodoDiv = document.querySelector(`.${this.id}`)
        thisTodoDiv.replaceChildren(this.inputMode())
    })
    editBox.appendChild(finBtn)
    //////////////////////////////////////
    //creates subtasks and subtask section
    // const addSub = document.createElement('button');
    // addSub.textContent = 'Add task'
    // addSub.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     subLister(this.subList, sub, addSub)
    // })
    // sub.appendChild(addSub)


    //////////////////////////////////////
    //appends main parts of todo/////
    todo2.appendChild(task)
    todo2.appendChild(main)
    todo2.appendChild(editBox)
    todo2.appendChild(sub)
    return todo2
}
