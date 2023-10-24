import {Todo, Sub, todoArr} from "./m_todoClass.js";
import { format } from "date-fns";
import {Project, projArr } from "./m_projects.js";
import printMode from "./printMode.js";
import { addProjEvent, tabFunction } from "./m_domStuff.js";
import trash from './img/delete.svg';
import note from './img/note.svg';
import taskImg from './img/checkbox.svg';



export default Todo.prototype.inputMode = function(a){
    const todo = document.createElement('form'); 
    todo.classList.add('todo', 'inputMode')
    a!=null?todo.classList.add('creating'):todo.classList.add('editing')   
    const main = document.createElement('ul');
    main.classList.add('main')
    const finBtn = document.createElement('button');
    finBtn.disabled = true;
    const submitBtn = document.createElement('button')
    submitBtn.disabled = true;
    const editBox = document.createElement('div');
    editBox.classList.add('editBox');
    const subContainer = document.createElement('ul');
    subContainer.classList.add('subContainer');
    const completeDiv = document.createElement('div')
    completeDiv.classList.add('completeDiv')


    ///////////////////////////////////
    //task name///////////////////////
    const task = document.createElement('input');
    task.classList.add('task');
    task.setAttribute('value', this.task)
    task.addEventListener('keyup', () => {
        task.value.length === 0? finBtn.disabled = true: finBtn.disabled = false; 
        task.value.length === 0?submitBtn.disabled = true: submitBtn.disabled = false;
    }) 
    
    ////////////////////////////////////////////////////////////////////////////////////
    //duedate and time/////////////////////////////////////////////////////////////////
    const dateDiv= document.createElement('div');
    dateDiv.classList.add('dateDiv')   
    const dSpan = document.createElement('span')
    dSpan.textContent = 'Due: '; 
    const dateInput= document.createElement('input');
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'datetime-local')
    dateInput.setAttribute('value', this.unDueDate )
 
    dateDiv.appendChild(dSpan)
    dateDiv.appendChild(dateInput)
    main.appendChild(dateDiv)

    
    //////////////////////////////////
    //priority selection////////////// 
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priorityDiv')
    const pSpan= document.createElement('span');
    pSpan.textContent = 'Priority: ';
    pSpan.classList.add('pSpan')
    const pSelect= document.createElement('select');
    pSelect.setAttribute('value', this.priority)
    pSelect.classList.add('pSelect')
    priorityDiv.appendChild(pSpan)
    priorityDiv.appendChild(pSelect)
    
    //priority options
    const optionsArr = ['', 'Low','Medium','High', 'Urgent']
    for (let i = 0; i <= optionsArr.length - 1; i++){
        const option = document.createElement('option');
        option.setAttribute('value', `${optionsArr[i]}`)
        if (optionsArr[i] === this.priority) option.setAttribute('selected', 'selected');
        option.textContent = optionsArr[i]
        pSelect.appendChild(option)
    }
    main.appendChild(priorityDiv)

    ////////////////////////////////////////////////////////////////////////////////////
    //projects//////////////////////////////////////////////////////////////////////////
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv')
    const projSpan= document.createElement('span');
    projSpan.textContent = 'Project: ';
    projSpan.classList.add('projSpan')
    const projSelect= document.createElement('select');
    projSelect.classList.add('projSelect')
    
    const addProjOpt = document.createElement('option')
    addProjOpt.classList.add('addProjOpt');
    addProjOpt.setAttribute('value', 'new')
    addProjOpt.textContent = 'Create project'
    projSelect.appendChild(addProjOpt)
    
    projSelect.addEventListener('click', e =>{
        if (projSelect.value === 'new') addProjEvent(e)
    })
    projectDiv.appendChild(projSpan)
    projectDiv.appendChild(projSelect)
    
    //project options
    for (let i = 0; i <= projArr.length - 1; i++){
        const projOption = document.createElement('option');
        projOption.setAttribute('value', `${projArr[i]._projectName}`)         
        projOption.textContent = projArr[i].projectName
        const toolbar = document.querySelector('.toolbar')
        const data = toolbar.getAttribute('data')
        let data2;
        data==='all'||data==='today'||data==='completed'||data==='pastDue'?data2='Default':data2=data;
        let selected;
        a!=null?selected=data2:selected=this.project;
        if (projArr[i].projectName === selected) projOption.setAttribute('selected', 'selected');             
        projSelect.insertBefore(projOption, addProjOpt)       
    }
  

    ///////////////////////////////////////////////////////////////////////////////////////////
    //creates subtasks and subtask section////////////////////////////////////////////////////
    const tempArr = new Array();
   
    const addSub = document.createElement('button');
    addSub.classList.add('subBtn')
    addSub.textContent = 'Add task'
    addSub.addEventListener('click', (e) => {
        addSub.disabled = true;
        finBtn.disabled = true;
        submitBtn.disabled = true;
        e.preventDefault()
        if(a==null)console.log(tempArr2)        
        
        //creates subItems dom elements
        const li = document.createElement('li');
        li.classList.add('subTask')
        const input = document.createElement('input');
        let currentArray;
        a!=null? currentArray=tempArr: currentArray=tempArr2;
        const subItem = new Sub(input.value,currentArray)
        input.addEventListener('keyup', e => {
            subItem.subTask = input.value
            input.value.length === 0? addSub.disabled = true: addSub.disabled = false; //disables addTask button if input is empty     
            input.value.length === 0 || task.value.length === 0? finBtn.disabled = true: finBtn.disabled = false; 
            input.value.length === 0 || task.value.length === 0? submitBtn.disabled = true: submitBtn.disabled = false; 
        }) 

        //delete subitem
        const trashImg = new Image();
        trashImg.classList.add('delBtn')
        trashImg.src = trash;
        trashImg.addEventListener('click', e => {
            subContainer.removeChild(li)
            subItem.delete(tempArr)
            if (addSub.disabled === true) addSub.disabled = false;
        })  
        li.appendChild(input)
        li.appendChild(trashImg)
        subContainer.appendChild(li)
    
        //toggles between note and task. Note = unchecked
        
        
        const togSub = document.createElement('div');       
        li.insertBefore(togSub,input)
        togSubNote(subItem, togSub)
    })
    editBox.appendChild(addSub)

    //another finBtn constraint
    todo.addEventListener('change', e =>{
        task.value.length === 0? finBtn.disabled = true: finBtn.disabled = false;
    })

    
    //When returning to inputMode, below will set existing subItems as values for inputs
    const tempArr2 = [] //creates an array that becomes mew subList when clicking done instead
    if(this.subList.length !== 0){
        this.subList.forEach(o => {            
            const i = new Sub(o.subTask, tempArr2) //used to create new Subs from current subTasks
            const li = document.createElement('li');
            li.classList.add('subTask')
            const input = document.createElement('input');
            input.setAttribute('value', i.subTask)
            i.type = o.type;
            if (o.completed === true){ 
                i.completed = o.completed;
                input.disabled = true; 
            }

            input.addEventListener('keyup', e => {
                i.subTask = input.value
                input.value.length === 0? addSub.disabled = true: addSub.disabled = false; //disables addTask button if input is empty     
                input.value.length === 0 || task.value.length === 0? finBtn.disabled = true: finBtn.disabled = false; 
            }) 
            
            //deletes subList item
            const trashImg = new Image();
            trashImg.classList.add('delBtn')
            trashImg.src = trash;
            trashImg.addEventListener('click', e => {
                subContainer.removeChild(li)
                const deleteMe = tempArr2.indexOf(i)
                tempArr2.splice(i,1)
                if (addSub.disabled === true) addSub.disabled = false;
            })  
            li.appendChild(input)
            li.appendChild(trashImg)
            subContainer.appendChild(li)
        
            //toggles between note and task
            const togSub = document.createElement('div');
            o.type==='note'?togSubNote(i, togSub):togSubTask(i, togSub);
            li.insertBefore(togSub,input)
        })    
    }

    //////////////////////////////////////////////////////////////////////////////////
    //Edit todo buttons///////////////////////////////////////////////////////////////

    //this fucntion contains the buttons that are loaded during todo creation  
    const creationBtns = () =>{       
        submitBtn.classList.add('submitTodo', 'modeBtn');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', e =>{
            e.preventDefault()            
            this.task = task.value;
            this.priority = pSelect.value;
            this.unDueDate = dateInput.value;
            this.project = projSelect.value;
            this.subList = tempArr.filter(i => i.subTask !='');       
            this.add()
            // console.log(this)
            const thisTodoDiv = document.querySelector(`[data=${this.id}]`)
            thisTodoDiv.replaceChildren(this.printMode())
            const toolbar = document.querySelector('.toolbar')
            const data = toolbar.getAttribute('data')
            // tabFunction()
        })
        editBox.appendChild(submitBtn);

        const cancel = document.createElement('button');
        cancel.classList.add('cancelTodo');
        cancel.textContent = 'Cancel';
        cancel.addEventListener('click', e =>{
            e.preventDefault()
            const thisTodoDiv = document.querySelector(`[data=${this.id}]`)
            mainBody.removeChild(thisTodoDiv)
        })
        todo.appendChild(cancel)
    }   
    
    // set of buttons that load when switching from input mode 
    const editBtns =() =>{
        //finish editing todo
        finBtn.classList.add('finBtn', 'modeBtn') //aka done button
        finBtn.textContent = 'Done'
        finBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.task = task.value;
            this.priority = pSelect.value;
            this.unDueDate = dateInput.value;
            this.project = projSelect.value;
            const filteredSubList = tempArr2.filter(i => i.subTask !=''); 
            this.subList = filteredSubList;
            const thisTodoDiv = document.querySelector(`[data=${this.id}]`)
            thisTodoDiv.replaceChildren(this.printMode())
            // tabFunction()
        })
        editBox.appendChild(finBtn)

        //cancel buttons cancels any changes made to the todo
        const cancel = document.createElement('button');
        cancel.classList.add('cancelTodo');
        cancel.textContent = 'Cancel';
        cancel.addEventListener('click', e =>{
            e.preventDefault()
            const thisTodoDiv = document.querySelector(`[data=${this.id}]`)
            thisTodoDiv.replaceChildren(this.printMode())
        })
        todo.appendChild(cancel)

    
        //delete todo button       
        const trashImg = new Image();
        trashImg.classList.add('delBtn')
        trashImg.src = trash;
        trashImg.addEventListener('click', (e) => {
            e.preventDefault()
            this.delete()
            const thisTodoDiv = document.querySelector(`[data=${this.id}]`)
            mainBody.removeChild(thisTodoDiv)
        })
        completeDiv.appendChild(trashImg)
    }
    
    a!=null?creationBtns():editBtns();
    
    //////////////////////////////////////////////////////////////////////
    //appends main parts of todo/////////////////////////////////////////
    todo.appendChild(completeDiv)
    todo.appendChild(projectDiv)
    todo.appendChild(task)
    todo.appendChild(main)
    todo.appendChild(subContainer)
    todo.appendChild(editBox)
    return todo
}



//functions that are used to toggle between notes and tasks
function togSubNote(a,b){
    const img = new Image();
    img.classList.add('noteImg', 'subImg');
    img.src = note;
    a.type = false;
    img.addEventListener('click', e =>{
        togSubTask(a,b)
    })

    b.replaceChildren(img)
}

function togSubTask(a,b){
    const img = new Image();
    img.classList.add('taskImg', 'subImg');
    img.src = taskImg;
    a.type = true;
    img.addEventListener('click', e =>{
        togSubNote(a,b)
    })

    b.replaceChildren(img)
}
