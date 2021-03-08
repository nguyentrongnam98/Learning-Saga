import * as taskContants from '../contants/task';
import {toastError} from '../helper/toastHelper'
const initialState = {
    listTask:[]
};

const taskReducer = (state =  initialState , action) => {
    switch(action.type) {
        case taskContants.FETCH_TASK:
            return {
                ...state,
                listTask:[]
            }
        case taskContants.FETCH_TASK_SUCCESS:
            const {data} = action.payload
            return {
                ...state,
                listTask:data
            }  
        case taskContants.FETCH_TASK_FAIL:
            toastError(action.payload.error)
            return {
                ...state,
                listTask:action.payload.error
            }      
        default: 
          return state
    }
}
export default taskReducer