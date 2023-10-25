export const projArr = [];


export class Project{
    constructor(projectName){
        this._projectName = projectName
        this.add()
    }
    add = () => {projArr.push(this)}
    
    delete = (v) => {
        const i = projArr.indexOf(this)
        projArr.splice(i,1)
    }

    get projectName(){
        return this._projectName
    }

    set projectName(v){
        this._projectName = v;
    }
} 

const def = new Project('Default')