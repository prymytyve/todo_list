//Creates temporary objects that will become subtasks once to do is generated

const tempList = [];

class Temp {
    constructor(){
        this._task 
        this.add()
    }

    add = () => {tempList.push(this)}

    delete = () => {
        const i = tempList.indexOf(this);
        tempList.splice(i,1)
    }   
    
    
    set newName(value){
        this._task = value
    }

    get task(){
       return this._task
    }
}


//used to store actual sub tasks in an array that is needed to generate sublist
const tempLister = () => {
    const tempArray = [];
    tempList.forEach(i => {
        tempArray.push(i.task)
    })
    return tempArray;
}



export {Temp, tempLister};