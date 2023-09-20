// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

 class ToDo {    
    constructor(title, priority, dueDate, ...subTasks){
        this.title = title
        this.piority = priority
        this.dueDate = dueDate
        this.dateCreated = new Date()
        this.subTasksList = []
        createSubList(subTasks, this.subTasksList)
        this.completed = false                
    };
    addToList = (v) => v.push(this);
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




