export function filterModeReducer(filtermode="Show_All"){
    if(action.type==="SET_FILTER_MODE"){
      
        return {filtermode:action.filtermode}
      }else{
          return{filtermode:filtermode}
      }

}