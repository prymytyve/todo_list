import {Todo, Sub, todoArr} from "./m_todoClass.js";
import inputMode from "./m_inputMode.js";


export default Todo.prototype.printMode = function(){
    const todo2 = document.createElement('div'); 
    todo2.classList.add('todo', 'printMode') 
    if(this.completed===true)todo2.classList.add('completed')
    this.getPastDue()
    if(this.completed!=true && this.pastDue === true) todo2.classList.add('pastDue')
    const main = document.createElement('ul');
    main.classList.add('main')
    const subContainer = document.createElement('ul');
    subContainer.classList.add('subContainer', 'hidden')

    //marks Todo as completed

    function todoCompleteForm(val, e){
        const editBtn = document.querySelector(`[data=${e}] .editBtn`)
        editBtn.disabled = val;
        const checkBoxes = document.querySelectorAll(`[data=${e}] .subTask input[type="checkbox"`);
        checkBoxes.forEach(checkBox => {
            checkBox.disabled = val;
            localStorage.setItem('savedTodos', JSON.stringify(todoArr));
        });
    }

    function pastDueToComp(){
        todo2.classList.add('completed')
        todo2.classList.remove('pastDue')
    }
    function compToPastDue(a){
        todo2.classList.remove('completed') 
        a.getPastDue();
        if(a.pastDue===true)todo2.classList.add('pastDue')
    }

    const completeDiv = document.createElement('div')
    completeDiv.classList.add('completeDiv')
    const completeTodo = document.createElement('input')
    completeTodo.setAttribute('type', 'checkbox')
    if(this.completed === true)completeTodo.setAttribute('checked', 'checked')
    completeTodo.addEventListener('change', e => {
        this.completed = completeTodo.checked
        completeTodo.checked?pastDueToComp():compToPastDue(this);
        todoCompleteForm(completeTodo.checked, this.id)
        
    })
    completeDiv.appendChild(completeTodo)

    ///////////////////////////////////
    //task name///////////////////////
    const task = document.createElement('p');
    task.textContent = this.task
    task.classList.add('task');

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

    //////////////////////////////////
    //priority////////////////////////
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv')
    const pSpan= document.createElement('span');
    pSpan.textContent = 'Priority: ';
    pSpan.classList.add('pSpan')
    const pText= document.createElement('p');
    pText.textContent = this.priority;
    if(this.priority!='' && this.completed!=true)todo2.classList.add(`${this.priority}`)
    pText.classList.add('pText')
    priorityDiv.appendChild(pSpan)
    priorityDiv.appendChild(pText)   

    main.appendChild(priorityDiv)
    
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

    /////////////////////////////////
    //Edit todo button//////////////////
    const editBox = document.createElement('div')
    editBox.classList.add('editBox')
    
    //view sublist
    const subListDisplay = document.createElement('button')
    subListDisplay.classList.add('subListDisplay', 'subBtn')
    const a = 'Show sublist'
    const b = 'Hide sublist'
    subListDisplay.textContent = a;
    subListDisplay.addEventListener('click', e=>{
        e.preventDefault();
        subListDisplay.textContent = subListDisplay.textContent===a?subListDisplay.textContent=b:subListDisplay.textContent=a;
        subContainer.classList.toggle('display')
        // main.classList.toggle('display')
        // projectDiv.classList.toggle('display')
    })
    if(this.subList!=0)editBox.appendChild(subListDisplay);
    
    
    
    
    //finish editing todo
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn')
    editBtn.textContent = 'Edit';
    if(this.completed===true) editBtn.disabled= true;
    editBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const thisTodoDiv = document.querySelector(`[data=${this.id}]`)
        thisTodoDiv.replaceChildren(this.inputMode())
    })
    
    //////////////////////////////////////
    //adds sublist///////////////////////
    if (this.subList.length !== 0){       
        if (this.subList.some(checkForNotes) === true){
            const noteSection = document.createElement('ul')
            noteSection.classList.add('subSection', 'noteSection')
            const noteSectionT = document.createElement('li')
            noteSectionT.textContent = 'Notes';
            noteSection.appendChild(noteSectionT)
            const noteItems = this.subList.filter(item => item.type === 'note')
            noteItems.forEach(item => {
                const li = document.createElement('li')
                li.classList.add('subItem', 'note')
                const p = document.createElement('p')
                p.textContent =  item.subTask
                li.appendChild(p)
                noteSection.appendChild(li)
            })
            subContainer.appendChild(noteSection)
        } 
        if (this.subList.some(checkForSubTasks) === true){
            const taskSection = document.createElement('ul')
            taskSection.classList.add('subSection', 'subTaskSection')
            const taskSectionT = document.createElement('li');
            taskSectionT.textContent = 'Subtasks';
            taskSection.appendChild(taskSectionT)
            const subItems =  this.subList.filter(item => item.type === 'task')
            subItems.forEach(item => {
                const li = document.createElement('li')
                li.classList.add('subItem', 'subTask')
                const p = document.createElement('p')
                p.textContent = item.subTask
                const togComplete = document.createElement('input');
                togComplete.setAttribute('type', 'checkbox')
                if(this.completed===true) togComplete.disabled= true;
                if(item.completed===true) togComplete.checked = true;
                togComplete.checked === true?li.classList.add('completedSub'):li.classList.remove('completedSub')
                togComplete.addEventListener('change', e =>{ 
                    item.completed = togComplete.checked
                    togComplete.checked === true?li.classList.add('completedSub'):li.classList.remove('completedSub') 
                    localStorage.setItem('savedTodos', JSON.stringify(todoArr));
                })
                li.appendChild(p)
                li.insertBefore(togComplete, p)                              
                taskSection.appendChild(li)               
            })
            subContainer.appendChild(taskSection)
        }
    }
    //////////////////////////////////////
    //appends main parts of todo/////
    todo2.appendChild(completeDiv)
    if(this.project!='Default')todo2.appendChild(projectDiv)
    todo2.appendChild(editBtn)
    todo2.appendChild(task)
    if(this.unDueDate!='')todo2.appendChild(main)
    todo2.appendChild(subContainer)
    todo2.appendChild(editBox)
    return todo2
}


const checkForNotes = e => e.type === 'note'
const checkForSubTasks = e => e.type === 'task'


