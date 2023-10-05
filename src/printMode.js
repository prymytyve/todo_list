import {Todo, Sub, todoArr} from "./m_todoClass.js";
import inputMode from "./m_inputMode.js";


export default Todo.prototype.printMode = function(){
    const todo2 = document.createElement('div'); 
    todo2.classList.add('todo', 'printMode')   
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
    //priority////////////////////////
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


    ////////////////////////////////////
    //projects//////////////////////////
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv')
    const projSpan= document.createElement('span');
    projSpan.textContent = 'Project: ';
    projSpan.classList.add('projSpan')
    const projText= document.createElement('p');
    projText.textContent = this.project;
    projText.classList.add('projText')
    projectDiv.appendChild(projSpan)
    projectDiv.appendChild(projText)
    todo2.appendChild(projectDiv)

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
    //adds sublist///////////////////////
    this.subList.forEach(i => {
        const li = document.createElement('li');
        li.classList.add('subTask')
        const p = document.createElement('p');
        p.textContent = i._subTask;
        li.appendChild(p)

        if(i.type === 'task'){
            const togComplete = document.createElement('input');
            togComplete.setAttribute('type', 'checkbox')
            togComplete.addEventListener('change', e => i.completed = togComplete.checked)
            li.insertBefore(togComplete, p)    
        }
        
        sub.appendChild(li)
    })


    //////////////////////////////////////
    //appends main parts of todo/////
    todo2.appendChild(task)
    todo2.appendChild(main)
    todo2.appendChild(editBox)
    todo2.appendChild(sub)
    return todo2
}
