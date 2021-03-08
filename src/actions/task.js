import * as taskApis from '../apis/task'
import * as taskContants from '../contants/task'
export const fetchListTask = () => {
    return {
        type:taskContants.FETCH_TASK
    }
}
export const fetchListTaskSucess = (data) => {
    return {
        type:taskContants.FETCH_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const fetchListTaskFail = (error) => {
    return {
        type:taskContants.FETCH_TASK_FAIL,
        payload:{
            error
        }
    }
}
export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask())
        taskApis.getList().then(res => {
             dispatch(fetchListTaskSucess(res.data))
        }).catch(error => {
            console.log(error)
            dispatch(fetchListTaskFail(error))
        })
    }
}