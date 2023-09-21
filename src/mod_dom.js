import ToDo from "./mod_todocard";
import Projects from "./mod_projects";

const mainBody = document.querySelector('#mainBody')
const title = document.querySelector('#title');
const priority = document.querySelector('#priority');
const due = document.querySelector('#due');
const tasks = document.querySelector('#tasks');
const move = document.querySelector('#move');
const submit = document.querySelector('.submit');

function dom(){
    const defaultList = new Projects('Default List');
    defaultList.pushToArr();

    
    submit.addEventListener('click', e => {
        e.preventDefault();
        const toDo = new ToDo(title.value, priority.value, due.value, tasks.value);
        console.log(toDo)
        toDo.generate()
        toDo.addToList(defaultList.list)
        defaultList.log()
    })
};



ToDo.prototype.generate = function(){
    const card = document.createElement('div');    
    const list = document.createElement('ul');

    const info = [this.title, this.priority, this.dueDate];
    info.forEach(a => {
        const line = document.createElement('li');
        line.textContent = a;
        list.appendChild(line)
    })     

    card.appendChild(list)
    mainBody.append(card)
    
}



export default dom

