import {deleteCookie,getCookie} from 'cookies-next'
import { useRouter } from 'next/router';

export default function useAuth(){
    const router = useRouter();
    const handleLogout = ()=>{
        deleteCookie('token',{maxAge:0})
        localStorage.removeItem('user')
        router.push('/signin');
    }
    const checkToken = ()=>{
        return getCookie('token')
    }
    return {handleLogout,checkToken}
}