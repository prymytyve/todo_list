import format from "date-fns/format";
import { v4 as uuidv4 } from 'uuid';
const mainBody = document.querySelector('#mainBody');

const todoArr = [];


class Todo {
    
    add = () => {todoArr.push(this)}

    _task = ''
    _priority = ''
    _dateCreated = format(new Date(), "eeee', 'MMM dd', 'yyyy' at' hh:mm' 'aaa")
    _project = ''
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
        if(this._unDueDate!=''){
            const o =  format(new Date(this._unDueDate), "eeee', 'MMM dd', 'yyyy' at' hh:mm' 'aaa")
        return o
        }
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

    set subList(v){
        this._subList = v;
    }

    get id(){
        return this._id;
    }
    
    get completed(){
        return this._completed
    }

    set completed(val){
        val === true? this._completed = true: this._completed = false;
    }      
    
    delete = (v) => {
        const i = todoArr.indexOf(this)
        todoArr.splice(i,1)
    }

    form = () => {
        const a = new Date(this.unDueDate)
        a.setHours(0,0,0,0)
        const b = a.getTime()
        return b
    }

    form2 = () =>{
        if(this.unDueDate!=''){
            const a = new Date(this.unDueDate)
            const b = a.getTime()
            return b
        } else{
            const b = Infinity;
            return b
        }
    }

    priorityVal = () =>{
        const a = this._priority;
        if(a === 'Urgent'){
            return 4
        } else if (a === 'High') { 
            return 3
        } else if (a==='Medium') { 
            return 2
        } else if (a==='Low') { 
            return 1
        } else{ 
            return 0
        }
    }

    get pastDue(){
        return this._pastDue;
    }
    set pastDue(val){
        this._pastDue = val;
    }

    getPastDue = () =>{
        const a = new Date(this.unDueDate);
        const b = a.getTime();
        
        // get today's date
        const c = new Date();        
        c.setHours(0,0,0,0);
        const d = c.getTime();

        (b < d && this.completed!=true)?this.pastDue=true:this.pastDue=false;    
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

    get completed(){
        return this._completed;
    }
    
    set completed(val){
        val === true? this._completed = true: this._completed = false;
    }   

    get subTask(){
        return this._subTask
    }

    set subTask(val){
        this._subTask = val
    }

    get type(){
        return this._type;
    }
    
    set type(val){
        val === true||val=== 'task'?this._type = 'task':this._type = 'note'
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