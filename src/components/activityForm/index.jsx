import React, { useState } from "react";
import {
  FormContainer,
  FormHeading,
  FormFields,
  FormActions,
  ActionMessage,
  FieldsPair,
} from "../styledForm";
import { MdPerson, MdWatch } from "react-icons/md";
import {
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import useNotify from "../../hooks/useNotify";
import { useRouter } from "next/router";
import axios from "axios";
import { url } from "../../utils/url";

export default function ActivityForm() {
  const [progress, setProgress] = useState(false);
  const router = useRouter();
  const { successMessage, errorMessage } = useNotify();
  const [data, setData] = useState({
    name: "",
    activityType: "",
    duration: Number,
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProgress(true);
      const response = await axios.post(`${url}api/exercise`, data);
      console.log(response);
      if (response.data.success) {
        await router.push(`/dashboard/activities`);
        setData({
          name: "",
          type: "",
          duration: Number,
          date: "",
          description: "",
        });
        successMessage(response.data.message);
      }
    } catch (error) {
      errorMessage(error.response.data.message);
    }
    setProgress(false);
  };
  return (
    <FormContainer>
      <FormHeading>Add Activity</FormHeading>
      <FormFields>
        <FieldsPair>
          <TextField
            fullWidth
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MdPerson />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            name="activityType"
            placeholder="Activity Type"
            defaultValue={"Activity Type"}
            value={data.activityType}
            onChange={handleChange}
            select
          >
            <MenuItem value={"hike"}>Hike</MenuItem>
            <MenuItem value={"ride"}>Ride</MenuItem>
            <MenuItem value={"swimming"}>Swimming</MenuItem>
            <MenuItem value={"running"}>Running</MenuItem>
          </TextField>
        </FieldsPair>
        <FieldsPair>
          <TextField
            fullWidth
            name="duration"
            type="number"
            placeholder="Duration(min)"
            value={data.duration}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MdWatch />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            name="date"
            type="date"
            placeholder="Date"
            value={data.date}
            onChange={handleChange}
          />
        </FieldsPair>
        <TextField
          fullWidth
          name="description"
          type="text"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
          multiline
          rows={5}
        />
      </FormFields>
      <FormActions>
        <ActionMessage variant="caption">
          Go to User Profile{" "}
          <Link
            href={"/dashboard/profile"}
            style={{ color: "blue", borderBottom: "1px solid blue" }}
          >
            Profile
          </Link>{" "}
        </ActionMessage>
        {progress ? (
          <CircularProgress size={20} />
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        )}
      </FormActions>
    </FormContainer>
  );
}
