export const projArr = ['Default'];

export function addProj(v){
    projArr.push(v)   
}

export function delProj(v){
    const i = projArr.indexOf(v)
    projArr.splice(i,1)
}