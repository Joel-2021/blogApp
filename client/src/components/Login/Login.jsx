import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
  styled,
  Alert,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../slice/AuthSlice";
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
  const isLoading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error !== null) {
      setOpen(true);
    }
  }, [error]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userLogin(dispatch, data,navigate);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    dispatch(resetError());
  };
  console.log(error)
  return (
    <Form component="form" onSubmit={handleSubmit(onSubmit)}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  key={'top'+'center'}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
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
          {isLoading ? (
            <CircularProgress size="1rem" color="inherit" />
          ) : (
            "Login"
          )}
        </Button>
      </FormControl>
      <Typography
        variant="subtitle2"
        onClick={() => navigate("/signup")}
        gutterBottom
        sx={{cursor:'pointer'}}
      >
        Click here to signup
      </Typography>
    </Form>
  );
};

export default Login;
