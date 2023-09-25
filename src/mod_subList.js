//Creates temporary objects that will become subtasks once to do is generated

const tempList = [];

class Temp {
    constructor(){
        this._task 
        this.add()
    }
    _type = 'note'
    _completed = false

    add = () => {tempList.push(this)}

    delete = () => {
        const i = tempList.indexOf(this);
        tempList.splice(i,1)
    }   
    
    
    set newName(value){
        this._task = value
    }


    set type(val){
        val === true?this._type = 'task':this._type = 'note';
    }

    get task(){
       return this._task
    }

    set completed(val){
        val === true? this._completed = true: this._completed = false;
    }
}




export {Temp, tempList};