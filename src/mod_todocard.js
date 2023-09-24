// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const mainBody = document.querySelector('#mainBody');
const toDoArr = [];


class ToDo {    
    constructor(title, priority, dueDate, ...subTasks){
        this.title = title
        this.priority = priority
        this.dueDate = dueDate
        this.addSub(subTasks)
        this.add()               
    };
    
    
    dateCreated = new Date()
    subTaskList = []
    completed = false
    project = ''


    addSub = (a) => {
        const task = Object.create({}, {
            task:{value: a},
            completed:{value: false}})
        this.subTaskList.push(task)         
    }

    

    add = () => toDoArr.push(this)
    log = () => console.log(toDoArr)
    
    
    
    get subList() {
        return this.subTaskList
    }
        
    set changeProj(value){
        this.project = value
    }

}


export default ToDo;