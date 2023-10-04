import {Todo, Sub, todoArr} from "./m_todoClass.js";
import m_inputMode from "./m_inputMode.js";

const mainBody = document.querySelector('#mainBody');
const addTodo = document.querySelector('.addTodo')

function todoCreator(){
    
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
    b.addEventListener('click', () => console.log(todoArr))
    mainBody.append(b)
}

export default todoCreator