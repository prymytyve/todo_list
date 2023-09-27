// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
const mainBody = document.querySelector('#mainBody');
const toDoArr = [];


class ToDo {    
    constructor(title, priority, dueDate, ...subTasks){
        this.title = title
        this.priority = priority
        this.dueDate = dueDate
        subTasks.forEach(sub => this.addSub(sub))
        this.add()               
    };
    
    
    dateCreated = new Date()
    subTaskList = []
    completed = false
    project = ''


    //method take reuse objects created from subList
    addSub = (a) => {
        this.subTaskList.push(a)         
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