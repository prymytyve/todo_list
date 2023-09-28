const mainBody = document.querySelector('#mainBody');

class Todo {
    constructor(task, priority, dueDate, ...subTodos){
        this._task = task
        this._priority = priority
        this._dueDate = dueDate
        subTodos.forEach(sub => new Sub(sub, this._subList))
    }    

    _dateCreated = new Date()
    _completed = false
    _subList = []
}


class Sub{
    constructor(i, v){
        this._subTask = i
        this.add(v)
    }
    _type = 'note'
    _completed = false
    
    add = (v) => {v.push(this)}
    delete = () => {
        const i = v.indexOf(this);
        v.splice(i,1)
    }
}

export default Todo;
