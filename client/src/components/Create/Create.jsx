import { Container, FormControl, InputLabel, TextField, Typography,FormGroup, Box, Button, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { CreateBlog } from '../../services/blogApi';
const Buttons=styled(Box)`
display:flex;
justify-content:flex-end;
padding:2rem;
align-items:center;
`
const Label=styled('label')`
font-weight:500px;
font-size:20px;
padding-top:1rem ;
`
const Create = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    const onSubmit=(data)=>{
       CreateBlog(data)
       navigate('/')
    }
  return (
    <Container component='form' onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h6' gutterBottom textAlign='center' paddingTop='1rem'>
            Create a Blog
        </Typography>
        <FormGroup>
            <FormControl>
            <Label>Title</Label>
            <TextField placeholder='' {...register('title',{required:true})}/>
            </FormControl>
            <FormControl>
            <Label>Content</Label>
            <TextField multiline rows={8} {...register('content',{required:true})}/>
            </FormControl>
            <Buttons>
                <Button variant='contained' type='submit'>
                    Post
                </Button>
            </Buttons>
        </FormGroup>
    </Container>
  )
}

export default Create