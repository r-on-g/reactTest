import {FETCH_TASKS, UPDATE_TASKS} from "../actionTypes.js"
import * as api from "../api"

export const fetchTask = () => async (dispatch) => {
    try{
        const res = await api.fetchALLTasks()
        dispatch({type:FETCH_TASKS, res})
        dispatch({type:UPDATE_TASKS, res})
    }
    catch(error){
        
    }
}

