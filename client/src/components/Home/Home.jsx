import {
  Container,
  Typography,
  Box,
  styled,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBlogs, GetAll, fetchBlogsAndUsers } from "../../services/blogApi";
import { useNavigate } from "react-router-dom";
const Blog = styled(Box)`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
`;
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userBlogs = useSelector((state) => state.blog.allUsers);
  const allBlogs = useSelector((state) => state.blog.allBlogs);
  const [blogs, setBlogs] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchBlogsAndUsers(dispatch);
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "80%",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ paddingTop: "2rem" }}>
          Blogs
        </Typography>
        <FormControl disabled={isAuth !== true && true}>
          <Select value={blogs} onChange={(e) => setBlogs(e.target.value)}>
            <MenuItem value={0}>All Blogs</MenuItem>
            <MenuItem value={1}>My Blogs</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        type="text"
        variant="outlined"
        label="search"
        fullWidth
        sx={{ margin: "2rem" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {(blogs === 0 ? allBlogs : userBlogs)
        .filter((blog) =>
          search
            ? blog.title.toLowerCase().includes(search.toLowerCase())
            : true
        )
        .map((blog) => (
          <Blog onClick={() => navigate(`/${blog._id}`)}>
            <Box>
              <Typography variant="h4">{blog?.title}</Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ fontStyle: "italic" }}
              >
                by {blog.author}
              </Typography>
              <Typography variant="subtitle1">
                {blog?.content.slice(0, 200)}...
              </Typography>
            </Box>
          </Blog>
        ))}
    </Container>
  );
};

export default Home;
