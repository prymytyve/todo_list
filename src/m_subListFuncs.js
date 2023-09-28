import {Sub} from "./m_todoClass.js";

//generates sub task dom elements and eventlisteners
export function subLister(putHere, appendHere,addSub){
    
    const li = document.createElement('li');
    li.classList.add('subTask')
    const input = document.createElement('input');
    const subItem = new Sub(input.value, putHere)
    input.addEventListener('keyup', e => subItem.task = input.value)   
    
    const deleteSub = document.createElement('button');
    deleteSub.textContent = 'X';       
    deleteSub.addEventListener('click', e => {
        appendHere.removeChild(li)
        subItem.delete(putHere)
    })  
    li.appendChild(input)
    li.appendChild(deleteSub)
    appendHere.insertBefore(li, addSub)

    
    const togSub = document.createElement('input');
    togSub.setAttribute('type', 'checkbox')
    togSub.addEventListener('change', e => subItem.type = togSub.checked)
    li.insertBefore(togSub,deleteSub)
}

