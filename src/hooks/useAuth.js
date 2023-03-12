import {deleteCookie,getCookie} from 'cookies-next'

export default function useAuth(){
    const logout = ()=>{
        deleteCookie('token',{maxAge:0})
        return true
    }
    const checkToken = ()=>{
        return getCookie('token')
    }
    return {logout,checkToken}
}