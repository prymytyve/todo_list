
const projectList = [];

class Projects {
    constructor(projName){
        this.projName = projName
        this.add()
    };

    get name(){
        return this.projName;
    };

    add = () => {projectList.push(this)}
    log = () => console.log(projectList)
}



export default Projects;