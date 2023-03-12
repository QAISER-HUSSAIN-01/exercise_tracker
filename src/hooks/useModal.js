import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useNotify from './useNotify';
import { url } from '../utils/url';
export default function useRoutes() {
    const router = useRouter();
    const [postId,setPostId] = useState('');
    console.log(postId);
  const [open, setOpen] = useState(false);
    const {successMessage,errorMessage} = useNotify();
    const handleOpen = (id) => {setOpen(true); setPostId(id);}
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`${url}api/exercise/${postId}`)
            if (data.success) {
                successMessage('Activity Deleted')
                router.push('/dashboard/activities')
            } else {
                errorMessage('Activity Not Deleted')
            }
        } catch (error) {
            errorMessage(error.message)
        }
        setOpen(false)

    }
    const handleClose = () => setOpen(false);

    return { handleDelete,handleClose,handleOpen,open}
}