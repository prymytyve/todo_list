import {Todo, Sub, todoArr} from "./m_todoClass.js";
import m_inputMode from "./m_inputMode.js";
import printMode from "./printMode.js";
import format from "date-fns/format";
import {Project, projArr} from "./m_projects.js";

const mainWrapper = document.querySelector('.mainWrapper')
const mainBody = document.querySelector('#mainBody');
const addTodo = document.querySelector('.addTodo')

export function todoCreator(){    
    //creates 
    addTodo.addEventListener('click', () =>{
        const todo = new Todo();
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`${todo.id}`, 'todoDiv')
        todoDiv.setAttribute('data', `${todo.id}`)
        todoDiv.appendChild(todo.inputMode('generate'))
        mainBody.appendChild(todoDiv)

    })   

    const b = document.createElement('button');
    b.textContent = 'check'
    b.addEventListener('click', () => {
        console.log(todoArr)
    })
    mainBody.append(b)
}

//disables addToDo button if any todo is in inputMode
mainWrapper.addEventListener('click', e =>{
    const todosInInputMode = document.querySelectorAll('.inputMode')
    todosInInputMode.length === 0? addTodo.disabled = false: addTodo.disabled = true;    
})

//displays all active todos
const all = document.querySelector('.all')
all.addEventListener('click', e =>{
    mainBody.replaceChildren()
    const currentTodos = todoArr.filter(todo => todo.completed === false)
    currentTodos.forEach(todo => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`${todo.id}`, 'todoDiv')
        todoDiv.appendChild(todo.printMode())
        mainBody.appendChild(todoDiv)
    })
})

function todaysDate(){
    const a = new Date()
    a.setHours(0,0,0,0)
    const b = a.getTime()
    return b
}

// dislays todos that are due today
const today = document.querySelector('.today')
today.addEventListener('click', e =>{
    mainBody.replaceChildren()
    
    const todayItems = todoArr.filter(todo => todo.form() === todaysDate() &&  todo.completed === false)
    todayItems.forEach(todo =>{
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`${todo.id}`, 'todoDiv')
        todoDiv.appendChild(todo.printMode())
        mainBody.appendChild(todoDiv)
    })
})



//displays completed todos
const completed = document.querySelector('.completed')
completed.addEventListener('click', e =>{
    mainBody.replaceChildren()
    const completedTodos = todoArr.filter(todo => todo.completed === true)
    completedTodos.forEach(todo =>{
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`${todo.id}`, 'todoDiv')
        todoDiv.appendChild(todo.printMode())
        mainBody.appendChild(todoDiv)
    })
})

const projectsDiv = document.querySelector('.projects')
const projBtn = document.querySelector('.projBtn')

projBtn.addEventListener('click', e =>{
    addProjEvent(e)
})

const toolbar = document.querySelector('.toolbar')

function addProj(a){
    const project = new Project(a)
    const projDiv = document.createElement('div')
    projDiv.classList.add('project')
    const proj = document.createElement('p')
    proj.textContent = project.projectName
    proj.addEventListener('click', e =>{
        e.preventDefault()
        toolbar.setAttribute('data', project.projectName )
        toolbar.textContent = toolbar.getAttribute('data')
        mainBody.replaceChildren()
        const projectTodos = todoArr.filter(todo => todo.project === project.projectName)
        projectTodos.forEach(todo =>{
            const todoDiv = document.createElement('div')
            todoDiv.classList.add(`${todo.id}`, 'todoDiv')
            todoDiv.appendChild(todo.printMode())
            mainBody.appendChild(todoDiv)
        })
    })
    const delProjBtn = document.createElement('button')
    delProjBtn.classList.add('.delProj')
    delProjBtn.textContent = 'X';
    delProjBtn.addEventListener('click', e =>{
        project.delete()
        projectsDiv.removeChild(projDiv)    
    })
    projDiv.appendChild(proj)
    projDiv.appendChild(delProjBtn)
    projectsDiv.insertBefore(projDiv, projBtn)
}

export function addProjEvent(e) {
    e.preventDefault()
    projBtn.disabled = true
    const div= document.createElement('dialog')
    div.classList.add('projWin')
    const input = document.createElement('input')
  
    const submit = document.createElement('button')
    submit.textContent = 'submit';
    submit.addEventListener('click', (e) =>{
        e.preventDefault()
        addProj(input.value)
        mainBody.removeChild(div)
        projBtn.disabled = false
        console.log(projArr)
        const projSel = document.querySelectorAll('.projSelect')
        projSel.forEach(i =>{
            const addProjOpt = document.querySelector('.addProjOpt')
            const projOption = document.createElement('option');
            projOption.setAttribute('value', input.value)
            projOption.textContent = input.value;
            i.insertBefore(projOption, addProjOpt)
            projOption.setAttribute('selected', 'selected')
        })

        
    })
    submit.disabled = true
    input.addEventListener('input', () => input.value.length === 0? submit.disabled = true: submit.disabled = false)
    

    const cancel = document.createElement('button')
    cancel.textContent = 'cancel';
    cancel.addEventListener('click', e =>{
        mainBody.removeChild(div);
        projBtn.disabled = false; 
        const projSel = document.querySelectorAll('.projSelect')
        projSel.forEach(p => p.value='Default')
    })

    div.appendChild(input)
    div.appendChild(submit)
    div.appendChild(cancel)
    mainBody.appendChild(div)
    div.showModal()   
}
