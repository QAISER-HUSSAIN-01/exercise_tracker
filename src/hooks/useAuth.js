import {useCookies} from 'react-cookie';

export default function useAuth(){
    const [cookies,setCookie,removeCookie] = useCookies();
    const logout = ()=>{
        removeCookie('token',{maxAge:0})
        return true
    }
    const checkToken = ()=>{
        return cookies.token
    }
    return {logout,checkToken}
}