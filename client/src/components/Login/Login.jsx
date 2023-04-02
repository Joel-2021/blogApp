import {
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
  styled,
  Alert
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin } from "../../services/auth";
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
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userLogin();
  };
  return (
    <Form component="form" onSubmit={handleSubmit(onSubmit)}>
      <Alert onClose={() => {}} severity="error">This is a success alert — check it out!</Alert>
      <Typography variant="h4" gutterBottom padding="2rem">
        Login
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
          label="Password"
          type="password"
          variant="outlined"
          {...register("password", { required: true })}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          sx={{ width: "200px", margin: "2rem" }}
          type="submit"
        >
          Login
        </Button>
      </FormControl>
      <Typography
        variant="subtitle2"
        onClick={() => navigate("/signup")}
        gutterBottom
      >
        Click here to signup
      </Typography>
    </Form>
  );
};

export default Login;
