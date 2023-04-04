import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  styled,
  Button,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { logout } from "../../slice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
const NavBar = styled(AppBar)`
  background-color: white;
  color: black;
  position: static;
`;
const Links = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
`;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuthenticated);
  return (
    <NavBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" gutterBottom>
          Blogger
        </Typography>
        <Links>
          {isAuth && <Link to="/">Home</Link>}
          {isAuth && <Link to="/create">Create</Link>}
          {isAuth && <Link to="/mypost">My Posts</Link>}
          {isAuth === true ? (
            <a
              color="inherit"
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
              style={{ fontWeight: "500", cursor: "pointer" }}
            >
              Logout
            </a>
          ) : (
            <Link
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </Link>
          )}
        </Links>
      </Toolbar>
    </NavBar>
  );
};

export default Header;
