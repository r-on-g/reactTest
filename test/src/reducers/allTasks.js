import {FETCH_TASKS,UPDATE_TASKS} from "../actionTypes.js"

export default (tasks = [], action) => {
    switch(action.type){

        case FETCH_TASKS:
            return action.res.data.result
            
        case UPDATE_TASKS:
            return tasks.filter( (t) => t.createdBy === localStorage.getItem("id") )

        default:
            return tasks
    }

}