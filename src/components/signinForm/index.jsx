import React, { useRef, useState } from "react";
import {
  FormContainer,
  FormHeading,
  FormFields,
  FormActions,
  ActionMessage,
} from "../styledForm";
import {
  Button,
  InputAdornment,
  TextField,
  CircularProgress,
} from "@mui/material";
import { MdKey, MdMail } from "react-icons/md";
import Link from "next/link";
import useUser from "../../hooks/useUser";
export default function SigninForm() {
  const { handleChange, handleSubmit, progress, data } = useUser();
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value === '') {
      setError({ ...error, [name]: `${name} must required` })
    } else {
      setError({ ...error, [name]: `` })
    }
  }
  return (
    <FormContainer component={"form"}>
      <FormHeading>SIGN IN</FormHeading>
      <FormFields>
        <TextField
          fullWidth
          helperText={error.email}
          error={error.email}
          ref={emailRef}
          onBlur={handleBlur}
          type='email'
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
          helperText={error.password}
          error={error.password}
          ref={passwordRef}
          onBlur={handleBlur}
          type='password'
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
        {progress ? (
          <CircularProgress size={20} />
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Sign in
          </Button>
        )}
      </FormActions>
    </FormContainer>
  );
}
