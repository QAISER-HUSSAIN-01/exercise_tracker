import { useRouter } from "next/router";
import { useState } from "react";
import useNotify from "./useNotify";
import axios from "axios";
import { setCookie } from 'cookies-next';
import { url } from '../utils/url';

export default function useUser() {
    const { successMessage, errorMessage } = useNotify();

    const router = useRouter();
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
                // setData({ email: "", password: "" });
                setCookie("token", response.data.token, { maxAge: 60 * 60 * 24 * 30 });
                await router.push(`/dashboard`);
                successMessage(response.data.message);
                return;
            }
        } catch (error) {
            errorMessage(error.response.data.message);
        }
        setProgress(false);
    };
    return { handleChange, handleSubmit, progress, data }
}