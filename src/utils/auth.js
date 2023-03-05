import {useCookies} from 'react-cookie';

export default function useAuth(){
    const [allCookies,setCookie,removeCookie] = useCookies();
    const logout = ()=>{
        setCookie('token','',{})
        return true
    }
    const checkToken = ()=>{
        return allCookies.token
    }
    return {logout,checkToken}
}