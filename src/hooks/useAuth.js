import {deleteCookie,getCookie} from 'cookies-next'

export default function useAuth(){

    const logout = ()=>{
        deleteCookie('token',{maxAge:0})
        localStorage.removeItem('user')
        return true
    }
    const checkToken = ()=>{
        return getCookie('token')
    }
    return {logout,checkToken}
}