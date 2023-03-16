import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useNotify from "./useNotify";
import axios from "axios";
import { setCookie } from "cookies-next";
import { url } from "../utils/url";

export default function useUser() {
  const router = useRouter();
  const { successMessage, errorMessage } = useNotify();
  const [progress, setProgress] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  // const [userDetail,setUserDetail] = useState({id:'',username: '', email: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProgress(true);
      const { data: res } = await axios.post(`${url}api/signin`, data);
      if (res.success) {
        setCookie("token", res.token, { maxAge: 60 * 60 * 24 * 30 });
        localStorage.setItem("user", JSON.stringify(res.data));
        await router.push(`/dashboard`);
        successMessage(res.message);
      } else {
        errorMessage(res.message);
      }
    } catch (error) {
      console.log(error);
      errorMessage(error.response.data.message);
    }
    setProgress(false);
  };

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         const detail = JSON.parse(localStorage.getItem('user'));
  //         setUserDetail(detail);
  //     },2000)
  // },[])

  return { handleChange, handleSubmit, progress, data };
}
