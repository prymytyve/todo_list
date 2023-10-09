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

} 

const def = new Project('Default')