import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useNotify from './useNotify';
import { url } from '../utils/url';
import {deleteCookie} from 'cookies-next'
export default function useRoutes() {
    const router = useRouter();
    const [deleteId, setDeleteId] = useState('');
    const [open, setOpen] = useState(false);
    const { successMessage, errorMessage } = useNotify();
    const handleOpen = (id) => { setOpen(true); setDeleteId(id); console.log('open click'); }
    const handleActivityDelete = async () => {
        console.log('runing user delete');
        try {
        console.log('runing activity in try');
            const { data } = await axios.delete(`${url}api/exercise/${deleteId}`)
            if (data.success) {
                successMessage('Activity Deleted')
                router.push('/dashboard/activities')
            } else {
                errorMessage('Activity Not Deleted')
            }
        console.log('runing activity in try end');

        } catch (error) {
            errorMessage(error.message)
        }
        setOpen(false)
    }
    const handleUserDelete = async () => {
        try {
            const { data } = await axios.delete(`${url}api/user/${deleteId}`)
            if (data.success) {
                deleteCookie('token',{maxAge:0})
                localStorage.removeItem('user')
                successMessage('User Deleted')
                await router.push('/')
            } else {
                errorMessage('User Not Deleted')
            }
        } catch (error) {
            errorMessage(error.message)
        }
        setOpen(false)
    }
    const handleClose = () => setOpen(false);

    return { handleActivityDelete, handleClose, handleOpen,handleUserDelete, open }
}