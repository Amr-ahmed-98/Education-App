import Cookies from 'js-cookie';
import { ENV } from '../../../config/env';
import { useNavigate } from 'react-router-dom';
export function useLotout(){
    const navigate = useNavigate();
    return()=>{
        Cookies.remove(ENV.ACCESS_TOKEN_KEY, {path: "/"});
       navigate('/')
    }
}