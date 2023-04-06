import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DeleteBlog, GetBlogById } from "../../services/blogApi";
import { Button, Container, Typography, Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
const Title = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled(Box)`
  display: flex;
  gap: 2rem;
`;
const Blog = () => {
  const navigate = useNavigate();
  const [singleBlog, setSingleBlog] = useState();
  const isAdmin = useSelector((state) => state.auth.user?.isAdmin);
  const username = useSelector((state) => state.auth.user?.username);
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const fetchBlog = async (id) => {
    const blog = await GetBlogById(id);
    setSingleBlog(blog);
  };
  useEffect(() => {
    fetchBlog(id);
  }, []);
  console.log(singleBlog);
  return (
    <Container>
      <Box>
        <Title>
          <Typography
            variant="h5"
            gutterBottom
            paddingTop={2}
            textAlign={"left"}
          >
            {singleBlog?.title}
          </Typography>
          {(singleBlog?.author === username || isAdmin) && (
            <Buttons>
              <Button
                variant="contained"
                color="info"
                onClick={() => navigate(`${location.pathname}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  DeleteBlog(location.pathname);
                  navigate('/')
                }}
              >
                Delete
              </Button>
            </Buttons>
          )}
        </Title>
        <Typography variant="subtitle2" gutterBottom>
          by {singleBlog?.author}
        </Typography>
        <Typography variant="subtitle">{singleBlog?.content}</Typography>
      </Box>
    </Container>
  );
};

export default Blog;
