const mainBody = document.querySelector('#mainBody');

const todoArr = [];

class Todo {
    constructor(task, priority, dueDate, ...subTodos){
        this._task = task
        this._priority = priority
        this._dueDate = dueDate
        subTodos.forEach(sub => new Sub(sub, this._subList))
        this.add()
    }    
    add = () => {todoArr.push(this)}

    _dateCreated = new Date()
    _completed = false
    _subList = []

    get subList(){
        return this._subList
    }

    set task(val){
        this._task = val
    }

    set priority(val){
        this._priority = val
    }
   
    set dueDate(val){
        this._dueDate = val
    }

    // set completed(val){
    //     val === true? this._completed = true: this._completed = false;
    // }
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
        const i = v.indexOf(this);
        v.splice(i,1)
    }


    set task(val){
        this._subTask = val     
    }

    set type(val){
        val === true?this._type = 'task':this._type = 'note';
    }
}

export {Todo, Sub, todoArr};
