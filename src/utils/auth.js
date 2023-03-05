import {useCookies} from 'react-cookie';

export default function useAuth(){
    const [cookies,setCookie,removeCookie] = useCookies();
    const logout = ()=>{
        const removed = removeCookie('token',{},{})
        return true
    
    }
    return {logout}
}