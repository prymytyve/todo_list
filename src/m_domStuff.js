import {Todo, Sub, todoArr} from "./m_todoClass.js";
import m_inputMode from "./m_inputMode.js";
import printMode from "./printMode.js";
import format from "date-fns/format";

const mainBody = document.querySelector('#mainBody');
const addTodo = document.querySelector('.addTodo')

export default function todoCreator(){    
    //creates 
    addTodo.addEventListener('click', () =>{
        const todo = new Todo();
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`${todo.id}`, 'todoDiv')
        todoDiv.appendChild(todo.inputMode())
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
mainBody.addEventListener('click', e =>{
    const todosInInputMode = document.querySelectorAll('.inputMode')
    todosInInputMode.length === 0? addTodo.disabled = false: addTodo.disabled = true;    
})


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