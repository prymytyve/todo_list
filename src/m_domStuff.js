import {Todo, Sub, todoArr} from "./m_todoClass.js";
import m_inputMode from "./m_inputMode.js";
import printMode from "./printMode.js";
import format from "date-fns/format";
import {Project, projArr} from "./m_projects.js";

const mainWrapper = document.querySelector('.mainWrapper')
const mainBody = document.querySelector('#mainBody');
const addTodo = document.querySelector('.addTodo')
const toolbar = document.querySelector('.toolbar')
const toolbarText = document.querySelector('.toolbarText')

export function todoCreator(){    
    //creates 
    addTodo.addEventListener('click', () =>{
        const todosInInputMode = document.querySelectorAll('.inputMode')
        if(todosInInputMode.length !== 0)return;
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
    mainWrapper.append(b)
}

//function below gets current date
function todaysDate(){
    const a = new Date()
    a.setHours(0,0,0,0)
    const b = a.getTime()
    return b
}

//appends todos that fit criteria
function filterTodo(theseTodos){
    mainBody.replaceChildren()        
    theseTodos.forEach((todo => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`${todo.id}`, 'todoDiv')
        todoDiv.setAttribute('data', `${todo.id}`)
        todoDiv.appendChild(todo.printMode())
        mainBody.appendChild(todoDiv)
    }))
}



//gets current data attribute of toolbar, and applies functions that will return a filtered array of todos
export const tabFunction = () =>{
    const data = toolbar.getAttribute('data')
    if(data === 'all'){
        const theseTodos = todoArr.filter(todo =>todo.completed === false);
        filterTodo(theseTodos)
    } else if(data==='today'){
        const theseTodos = todoArr.filter(todo => todo.form() === todaysDate() &&  todo.completed === false);
        filterTodo(theseTodos);
    } else if(data==='completed'){
        const theseTodos = todoArr.filter(todo => todo.completed === true);
        filterTodo(theseTodos);
    } else if(data==='pastDue'){
        const theseTodos = todoArr.filter(todo => todo.completed === false && todo.form() < todaysDate());
        filterTodo(theseTodos);
    }  else {
        const theseTodos = todoArr.filter(todo => todo.project === data);
        filterTodo(theseTodos);
    }  
}

//displays all active todos
function resetPage(){
    toolbar.setAttribute('data', 'all')
    toolbarText.textContent = 'All';
    tabFunction()
}


const all = document.querySelector('.all')
all.addEventListener('click', e => {
    resetPage()
})


// dislays todos that are due today
const today = document.querySelector('.today')
today.addEventListener('click', e =>{
    toolbar.setAttribute('data', 'today')
    toolbarText.textContent = 'Today';
    tabFunction()
})



//displays completed todos
const completed = document.querySelector('.completed')
completed.addEventListener('click', e =>{
    toolbar.setAttribute('data', 'completed')
    toolbarText.textContent = 'Completed';
    tabFunction()
})

//displays past due
const pastDue = document.querySelector('.pastDue')
pastDue.addEventListener('click', e =>{
    toolbar.setAttribute('data', 'pastDue')
    toolbarText.textContent = 'Past due';
    tabFunction()
})


////////////////////////////////////////////////////////
///////controls custom projects////////////////////////
const projectsDiv = document.querySelector('.projects')
const projBtn = document.querySelector('.projBtn')

projBtn.addEventListener('click', e =>{
    addProjEvent(e)
})


//appends projects to nav bar
function addProj(a){
    const project = new Project(a)
    const projDiv = document.createElement('div')
    projDiv.classList.add('project')
    const proj = document.createElement('p')
    proj.textContent = project.projectName
    proj.addEventListener('click', e =>{
        e.preventDefault()
        toolbar.setAttribute('data', project.projectName )
        toolbarText.textContent = toolbar.getAttribute('data')
        mainBody.replaceChildren()
        const projectTodos = todoArr.filter(todo => todo.project === project.projectName);
        projectTodos.forEach(todo =>{
            const todoDiv = document.createElement('div')
            todoDiv.classList.add(`${todo.id}`, 'todoDiv')
            todoDiv.setAttribute('data', `${todo.id}`)
            todoDiv.appendChild(todo.printMode())
            mainBody.appendChild(todoDiv)
        })
    })
    const delProjBtn = document.createElement('button')
    delProjBtn.classList.add('.delProj')
    delProjBtn.textContent = 'X';
    delProjBtn.addEventListener('click', e =>{
        projDelForm(project, projDiv)
    })
    projDiv.appendChild(proj)
    projDiv.appendChild(delProjBtn)
    projectsDiv.insertBefore(projDiv, projBtn)
}

//below is used to open dialog for creating projects
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
        // console.log(projArr)
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

//form that handles todos when deleting a project
function projDelForm(a, projDiv){
    const dialog= document.createElement('dialog')
    dialog.classList.add('delProjTodos')
    dialog.textContent = 'Delete All Todos in this project?'    
    const projSel = document.querySelectorAll('.projSelect')
    const data = toolbar.getAttribute('data')       
    
    
    const todosInProj = todoArr.filter(todo => todo.project === a.projectName)   
    
    const yesBtn = document.createElement('button');
    yesBtn.textContent = 'Yes';
    yesBtn.addEventListener('click', e =>{
        e.preventDefault();
        a.delete()
        projectsDiv.removeChild(projDiv)
        projSel.forEach(p => {
            p.value='Default'
            const delMe = document.querySelectorAll(`[value='${a.projectName}']`)
            delMe.forEach(i => p.removeChild(i))    
        })
        todosInProj.forEach(i => i.delete())  
        data === a.projectName?resetPage():tabFunction();  
    })
    dialog.appendChild(yesBtn)


    const noBtn = document.createElement('button');
    noBtn.textContent = 'No';
    noBtn.addEventListener('click', e =>{
        e.preventDefault();
        a.delete()
        projectsDiv.removeChild(projDiv)
        projSel.forEach(p => {
            p.value='Default'
            const delMe = document.querySelectorAll(`[value='${a.projectName}']`)
            delMe.forEach(i => p.removeChild(i))    
        })
        todosInProj.forEach(i => i.project ='Default')
        data === a.projectName?resetPage():tabFunction();       
    })
    dialog.appendChild(noBtn)   

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', e =>{
        e.preventDefault();
        mainBody.removeChild(dialog)
    })
    dialog.appendChild(cancelBtn)
    
    mainBody.appendChild(dialog)
    dialog.showModal()
    // 
}



//todo delete functionality of toolbar
const deleteDiv = document.createElement('div');
deleteDiv.classList.add('deleteDiv')

const confirmDel = document.createElement('button')
confirmDel.classList.add('confirmDel')
confirmDel.textContent = 'Confirm';
confirmDel.addEventListener('click', e=>{
    e.preventDefault()
    const marked= document.querySelectorAll('.markedforDel')
    marked.forEach(i =>{
        if(i.checked){
            const thisTodoId = i.parentElement.parentElement.parentElement.getAttribute('data');
            const thisTodo = todoArr.find(i => i.id === thisTodoId)
            thisTodo.delete()
        }
    })
    toolbar.replaceChild(multiDel, deleteDiv)
    const selAll = document.querySelector('.selAll')
    tabFunction()
})
deleteDiv.appendChild(confirmDel);


//select all checkboxes
const selAll = document.createElement('button') 
selAll.classList.add('selAll')
selAll.textContent = 'Select all'
selAll.addEventListener('click', e=>{
    const allBoxes = document.querySelectorAll('.markedforDel')
    allBoxes.forEach(check => check.checked=true)
})
deleteDiv.appendChild(selAll)

//cancel
const cancel = document.createElement('button');
cancel.classList.add('cancelDel');
cancel.textContent = 'Cancel';
cancel.addEventListener('click', e =>{
    toolbar.replaceChild(multiDel,deleteDiv)
    resetStuff()
})
deleteDiv.appendChild(cancel)



//replaces all todos complete checkboxes with checkboxes that mark it for deletion
const multiDel = document.querySelector('.multiDelete')
multiDel.addEventListener('click', e=>{
    e.preventDefault()
    tabFunction()   
    inputState(true)
    const completeDivs= document.querySelectorAll('.completeDiv')
    completeDivs.forEach(div =>{
        const marked = document.createElement('input');
        marked.setAttribute('type', 'checkbox');
        marked.classList.add('markedforDel');
        // marked.addEventListener('change', e=>{            
        // })       
       div.replaceChildren(marked);
    })
    toolbar.replaceChild(deleteDiv, multiDel)  
})


function inputState(a){
    const navOptions = document.querySelectorAll('.navOptions')
    navOptions.forEach(nav => nav.disabled = a)
    projBtn.disabled = a;    
    addTodo.disabled = a;
    const editBtns = document.querySelectorAll('.editBtn');
    editBtns.forEach(e => e.disabled = a)
}

function resetStuff(){
    tabFunction()
    inputState(false)
}