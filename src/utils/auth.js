import {useCookies} from 'react-cookie';

export default function useAuth(){
    const [cookies,setCookie,removeCookie] = useCookies();
    const logout = ()=>{
        setCookie('token','',{})
        return true
    
    }
    return {logout}
}