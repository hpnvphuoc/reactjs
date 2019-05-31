const defaultWords= [
    {id:"a1",en:"one",vn:"Mot",isMemorized:true},
    {id:"a2",en:"two",vn:"Hai",isMemorized:false},
    {id:"a3",en:"three",vn:"Ba",isMemorized:true}
]
export function wordReducer(words=defaultWords,action){
    if(action.type==="TOGGLE_WORD"){
        const newwords=words.map(w=>{
          if(w.id===action.id) return {...w,isMemorized:!w.isMemorized}
          return w
        })
        return newwords;
      }
    if(action.type==="REMOVE_WORD"){
        const newwords=words.filter(w=>w.id!==action.id)
        return newwords
      }

}