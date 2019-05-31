

export function toggleWord(id){
    return {type:"TOGGLE_WORD",id:id}
}
export function removeword(id){
    return {type:"REMOVE_WORD",id:id}
}
export function setFilterMode(evt){
    return {type:"SET_FILTER_MODE", filtermode:evt.target.value}
}
export function addword(word){
    return {type:"ADD_WORD",en:word.txtEn,vn:word.txtVn}
}
export function toggleForm(){
    return {type:"TOGGLE_FORM"}
}
