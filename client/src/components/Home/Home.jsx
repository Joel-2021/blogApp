import { Container, Typography, Box, styled, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { GetBlogs,GetAll} from "../../services/blogApi";
const Blog=styled(Box)`
display:flex;
justify-content:space-between;
gap:2rem;
align-items:center;
padding:1rem;
`
const Home = () => {
  useEffect(()=>{
    GetAll()
    GetBlogs()
  },[])
  return (
    <Container sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <Typography variant="h6" gutterBottom sx={{paddingTop:'2rem'}}>Blogs</Typography>
      <TextField  type="text" variant="outlined" label='search' fullWidth sx={{margin:'2rem'}}/>
      <Blog>
        <Box component="img" src="/chat.webp" width='150px' height='150px'/>
        <Box>
          <Typography variant="h4">Chat GPT. A curse or boon</Typography>
          <Typography variant="subtitle2" gutterBottom sx={{fontStyle:'italic'}}>by Joel</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in
            iste repellat ad, possimus velit, suscipit error cupiditate eos quam
            minima! Inventore illo molestiae recusandae quia error iusto ullam
            similique?
          </Typography>
        </Box>
      </Blog>
      <Blog>
        <Box component="img" src="/chat.webp" width='150px' height='150px'/>
        <Box>
          <Typography variant="h4">Chat GPT. A curse or boon</Typography>
          <Typography variant="subtitle2" gutterBottom sx={{fontStyle:'italic'}}>by Joel</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in
            iste repellat ad, possimus velit, suscipit error cupiditate eos quam
            minima! Inventore illo molestiae recusandae quia error iusto ullam
            similique?
          </Typography>
        </Box>
      </Blog>
      <Blog>
        <Box component="img" src="/chat.webp" width='150px' height='150px'/>
        <Box>
          <Typography variant="h4">Chat GPT. A curse or boon</Typography>
          <Typography variant="subtitle2" gutterBottom sx={{fontStyle:'italic'}}>by Joel</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in
            iste repellat ad, possimus velit, suscipit error cupiditate eos quam
            minima! Inventore illo molestiae recusandae quia error iusto ullam
            similique?
          </Typography>
        </Box>
      </Blog>
      <Blog>
        <Box component="img" src="/chat.webp" width='150px' height='150px'/>
        <Box>
          <Typography variant="h4">Chat GPT. A curse or boon</Typography>
          <Typography variant="subtitle2" gutterBottom sx={{fontStyle:'italic'}}>by Joel</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in
            iste repellat ad, possimus velit, suscipit error cupiditate eos quam
            minima! Inventore illo molestiae recusandae quia error iusto ullam
            similique?
          </Typography>
        </Box>
      </Blog>
    </Container>
  );
};

export default Home;
