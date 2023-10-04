import format from "date-fns/format";
import { v4 as uuidv4 } from 'uuid';
const mainBody = document.querySelector('#mainBody');

const todoArr = [];


class Todo {
    constructor(){   
        this.add()
    }

    add = () => {todoArr.push(this)}

    _task = ''
    _priority = ''
    _dueDate = ''
    _dateCreated = format(new Date(), "eeee', 'MMM dd', 'yyyy' at' hh:mm' 'aaa")
    _project = 'Default'
    _completed = false
    _subList = []
    _id = 'id'+uuidv4()



    get task(){
        return this._task;
    }
    
    set task(val){
        this._task = val
    }

    
    get priority(){
        return this._priority;
    }

    set priority(val){
        this._priority = val
    }

    get dueDate(){
        return this._dueDate;
    }

    get project(){
        return this._project;
    }

    set project(v){
        this._project = v
    }

    get unDueDate(){          //unformatted date
      return this._unDueDate
    }
    set unDueDate(v){
        this._unDueDate = v
    }
    
    set dueDate(val){
        this._dueDate = val
    }

    get subList(){
        return this._subList;
    }

    get id(){
        return this._id;
    }

    
    // set completed(val){
    //     val === true? this._completed = true: this._completed = false;
    // }      
    delete = (v) => {
        const i = todoArr.indexOf(this)
        todoArr.splice(i,1)
    }
}

class Sub{
    constructor(i, v){
        this._subTask = i
        this.add(v)
    }
    _type = 'note'
    _completed = false
    
    add = (v) => {v.push(this)}
    delete = (v) => {
        const i = v.indexOf(this)
        v.splice(i,1)
    }

    get task(){
        return this_task
    }

    set task(val){
        this._subTask = val
    }

    set type(val){
        val === true?this._type = 'task':this._type = 'note'
    }
}

export {Todo, Sub, todoArr}


// constructor(task, priority, dueDate, ...subTodos){
//     this._task = task
//     this._priority = priority
//     this._dueDate = dueDate
//     subTodos.forEach(sub => new Sub(sub, this._subList))
//     this.add()
// }