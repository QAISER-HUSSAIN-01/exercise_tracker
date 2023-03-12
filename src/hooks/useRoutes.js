import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router';
import useAuth from './useAuth';
export default function useRoutes(setAnchorEl) {
    const router = useRouter();
    const { handleLogout } = useAuth();

    const gotoLandingPage = () => { router.push('/') }
    const gotoProfile = () => { setAnchorEl(null); router.push('/dashboard/profile') }
    const gotoSetting = () => { setAnchorEl(null); router.push('/dashboard/setting') }
    const logout = () => { setAnchorEl(null); handleLogout() }

    return { gotoLandingPage, gotoProfile, gotoSetting, logout }
}