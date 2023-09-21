// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
const mainBody = document.querySelector('#mainBody');


 class ToDo {    
    constructor(title, priority, dueDate, ...subTasks){
        this.title = title
        this.priority = priority
        this.dueDate = dueDate
        this.dateCreated = new Date()
        this.subTaskList = []
        createSubList(subTasks, this.subTaskList)
        this.completed = false                
    };
    
    addToList = (v) => v.push(this);
    
    get subList() {
        return this.subTaskList
    }
}

function createSubList (a, b){
    a.forEach(item =>{
        const taskList = Object.create({}, {
            task:{
                value: item
            },
            completed:{
                value: false        
            }}          
        )  
        b.push(taskList);
    });
};


export default ToDo;