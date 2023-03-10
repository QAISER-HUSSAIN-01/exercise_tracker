import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useNotify from "./useNotify";
import axios from "axios";
import { setCookie } from 'cookies-next';
import { url } from '../utils/url';

export default function useUser() {
    const router = useRouter();
    const { successMessage, errorMessage } = useNotify();
    const [progress, setProgress] = useState(false);
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value.toLowerCase() });
    };

    const handleSubmit = async () => {
        try {
            setProgress(true);
            const response = await axios.post(`${url}api/signin`, data);
            if (response.data.success) {
                setCookie("token", response.data.token, { maxAge: 60 * 60 * 24 * 30 });
                localStorage.setItem('user',JSON.stringify(response.data.data))
                successMessage(response.data.message);
            }
            else{
            errorMessage(response.data.message);
            }
        } catch (error) {
            errorMessage(error.response.data.message);
        }
        await router.push('/dashboard')
        setProgress(false);
    };

    
    return { handleChange, handleSubmit, progress, data }
}