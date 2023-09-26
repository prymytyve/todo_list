import {Temp, tempList} from './mod_subList'

const subList = document.querySelector('.subList');
const addSec = document.querySelector('.addSec');


export function subInput(){
    const li = document.createElement('li');
    li.classList.add('subInput')
    const input = document.createElement('input');
    const tempItem = new Temp(input.value)
    input.addEventListener('keyup', e =>{
        tempItem.newName = input.value
    })   
    
    const deleteSub = document.createElement('button');
    deleteSub.textContent = 'X';       
    deleteSub.addEventListener('click', e => {
        e.preventDefault()
        subList.removeChild(li)
        tempItem.delete()
    })  
    li.appendChild(input)
    li.appendChild(deleteSub)
    subList.insertBefore(li, addSec)

    
    const togSub = document.createElement('input');
    togSub.setAttribute('type', 'checkbox')
    togSub.addEventListener('change', e => tempItem.type = togSub.checked)
    li.insertBefore(togSub,deleteSub)
}

export function resetSubs(){
    const t = document.querySelectorAll('.subInput');
    t.forEach(i => subList.removeChild(i))

}