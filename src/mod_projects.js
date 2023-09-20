
const projectList = [];

class Projects {
    constructor(projName){
        this.projName = projName
        this.listOfToDos = []
    };

    get name(){
        return this.projName
    };

    pushToArr = () => projectList.push(this);
    log = () => console.log(projectList);

    get list(){
        return this.listOfToDos
    };
}


export default Projects;