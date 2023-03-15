import React, { useEffect, useState } from "react";
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

export default function ActivityForm({ exercise }) {
  const [progress, setProgress] = useState(false);
  const router = useRouter();
  const { successMessage, errorMessage } = useNotify();
  // const [error, setError] = useState({
  //   name: "",
  //   activityType: "",
  //   duration: "",
  //   date: "",
  //   description: "",
  // });
  // const [isSubmit, setIsSubmit] = useState(false);
  // console.log("errros: ", error);
  const [data, setData] = useState({
    name: exercise ? exercise.name : "",
    activityType: exercise ? exercise.activityType : "",
    duration: exercise ? exercise.duration : "",
    date: exercise ? exercise.date : "",
    description: exercise ? exercise.description : "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // if(!data.name){setError({name:'Name must required'})}
    // else if(!data.description){setError({description:'Description must required'})}
    // else{console.log(data);}

    try {
      setProgress(true);
      const response = await axios.post(`${url}api/exercise`, data);
      if (response.data.success) {
        successMessage(response.data.message);
        await router.push(`/dashboard/activities`);
      }
    } catch (error) {
      errorMessage(error.response.data.message);
    }
    setProgress(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setProgress(true);
      const response = await axios.patch(
        `${url}api/exercise/${exercise._id}`,
        data
      );
      console.log(response);
      if (response.data.success) {
        // setData({
        //   name: "",
        //   type: "",
        //   duration: Number,
        //   date: "",
        //   description: "",
        // });
        successMessage(response.data.message);
        await router.push(`/dashboard/activities`);
      }
    } catch (error) {
      errorMessage(error.response.data.message);
    }
    setProgress(false);
  };

  return (
    <FormContainer>
      <FormHeading>{exercise ? "Update Activity" : "Add Activity"}</FormHeading>
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
            defaultChecked={'Activity Type'}
            defaultValue={"Activity Type"}
            value={data.activityType}
            onChange={handleChange}
            select
          >
            <MenuItem value={""}>Select Type</MenuItem>
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
          Go to User Activities{" "}
          <Link
            href={"/dashboard/activities"}
            style={{ color: "blue", borderBottom: "1px solid blue" }}
          >
            Activities
          </Link>{" "}
        </ActionMessage>
        {progress ? (
          <CircularProgress size={20} />
        ) : (
          <Button
            variant="contained"
            onClick={exercise ? handleUpdate : handleSubmit}
          >
            {exercise ? "Update" : "Add"}
          </Button>
        )}
      </FormActions>
    </FormContainer>
  );
}
