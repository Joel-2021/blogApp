import {
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../services/auth";
const Form = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Input = styled(TextField)`
  width: 350px;
  margin: 1rem;
`;
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userSignUp(data);
  };
  return (
    <Form component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom padding="2rem">
        Sign Up
      </Typography>
      <FormControl>
        <Input
          label="Email"
          type="email"
          variant="outlined"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </FormControl>
      <FormControl>
        <Input
          label="User Name"
          type="text"
          variant="outlined"
          {...register("username", { required: true })}
        />
      </FormControl>
      <FormControl>
        <Input
          label="Password"
          type="password"
          variant="outlined"
          {...register("password", { required: true, minLength: 6 })}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          sx={{ width: "200px", margin: "2rem" }}
          type="submit"
        >
          Sign Up
        </Button>
      </FormControl>
      <Typography
        variant="subtitle2"
        onClick={() => navigate("/login")}
        gutterBottom
        sx={{ cursor: "pointer" }}
      >
        Click here to Login
      </Typography>
    </Form>
  );
};

export default SignUp;
