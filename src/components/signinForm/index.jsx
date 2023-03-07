import React, { useState } from "react";
import {
  FormContainer,
  FormHeading,
  FormFields,
  FormActions,
  ActionMessage,
} from "../styledForm";
import { Button, InputAdornment, TextField } from "@mui/material";
import { MdKey, MdMail } from "react-icons/md";
import Link from "next/link";
import useNotify from "../../hooks/useNotify";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { url } from "../../utils/url";

export default function SigninForm() {
  const { successMessage, errorMessage } = useNotify();
  const [allCookies, setCookie] = useCookies();
  const router = useRouter();

  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${url}api/signin`, data);
      console.log('response : ', response);
      if (response.data.success) {
        setData({email:'',password:''});
        setCookie("token", response.data.token, { maxAge: 60 * 60 * 24 * 30 });
        successMessage(response.data.message);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error.response.data.message);
      errorMessage(error.response.data.message);
    }
  };

  return (
    <FormContainer component={"form"}>
      <FormHeading>SIGN IN</FormHeading>
      <FormFields>
        <TextField
          fullWidth
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MdMail />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MdKey />
              </InputAdornment>
            ),
          }}
        />
      </FormFields>
      <FormActions>
        <ActionMessage variant="caption">
          Do not have an account? please{" "}
          <Link
            href={"/signup"}
            style={{ color: "blue", borderBottom: "1px solid blue" }}
          >
            signup
          </Link>{" "}
        </ActionMessage>
        <Button variant="contained" onClick={handleSubmit}>
          Sign in
        </Button>
      </FormActions>
    </FormContainer>
  );
}
