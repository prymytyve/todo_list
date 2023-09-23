// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const mainBody = document.querySelector('#mainBody');
const toDoArr = [];


class ToDo {    
    constructor(title, priority, dueDate, ...subTasks){
        this.title = title
        this.priority = priority
        this.dueDate = dueDate
        this.addSubItem(subTasks)
        this.add()               
    };
    
    
    dateCreated = new Date()
    subTaskList = []
    completed = false
    project = ''


    
    addSubItem = (a) => {
        a.forEach(item =>{
            const taskList = Object.create({}, {
                task:{value: item},
                completed:{value: false}}          
            )  
            this.subTaskList.push(taskList)
        })
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