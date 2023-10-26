import './style.css';
import {initialLoad} from './m_domStuff.js';
import { Todo, todoArr, Sub} from './m_todoClass.js';
import { projArr, Project } from './m_projects';
import { addProj } from './m_domStuff.js';




if(!localStorage.getItem('savedProjs')){
    localStorage.setItem('savedProjs', JSON.stringify(projArr));    
}else{
    const savedProjs = JSON.parse(localStorage.getItem('savedProjs'))
    for (let i = 0; i < savedProjs.length; i++){
        if (savedProjs[i]._projectName === 'Default') {continue;}
        addProj(savedProjs[i]._projectName)
    }
}


if(!localStorage.getItem('savedTodos')){
    localStorage.setItem('savedTodos', JSON.stringify(todoArr));   
} 
else{
    const savedTodos = JSON.parse(localStorage.getItem('savedTodos'))
    savedTodos.forEach(todo => {
        const todoRevived = new Todo();
        todoRevived.completed = todo._completed;
        todoRevived.dateCreated = todo._dateCreated;
        todoRevived._id = todo._id;
        todoRevived.pastDue = todo._pastDue;
        todoRevived.priority = todo._priority;
        todoRevived.project = todo._project;
        todoRevived.task = todo._task;
        todoRevived.unDueDate = todo._unDueDate;
        todoRevived.add()
        todo._subList.forEach(i => {
            const sub = new Sub(i._subTask, todoRevived.subList);
            sub.type = i._type;
            sub.completed = i._completed;
        })
    })
}

initialLoad()