import AxiosService from '../commons/axiosService';
import {API_ENDPOINT} from '../contants/index';

const url = 'http://localhost:3000/tasks'
export const getList = () => {
    return AxiosService.get(url)
}
export const a  = 'Nam'