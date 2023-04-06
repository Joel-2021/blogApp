import React, { useEffect, useState } from 'react'
import { Button, Container, FormControl, FormGroup, TextField, Typography, styled,Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { GetBlogById,UpdateBlog } from '../../services/blogApi'

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
const Update = () => {
  const {id}=useParams()
  const [loading,setLoading]=useState(true)
  const [update,setUpdate]=useState()
  const navigate=useNavigate()
  const{register,handleSubmit,formState:{error}}=useForm()
console.log(location)
  const onSubmit=(data)=>{
    UpdateBlog(id,data)
    navigate('/')
  }

  async function fetchBlog(id){
    setLoading(true)
    const blog=await GetBlogById(id)
    setUpdate(blog)
    setLoading(false)
  }
  useEffect(()=>{
    fetchBlog(id)
  },[])
  return (!loading &&
    <Container component='form' onSubmit={handleSubmit(onSubmit)}>
    <Typography variant='h6' gutterBottom textAlign='center' paddingTop='1rem'>
      Edit The Blog
  </Typography>
  <FormGroup>
      <FormControl>
      <Label>Title</Label>
      <TextField placeholder='' {...register('title',{required:true})} defaultValue={update?.title}/>
      </FormControl>
      <FormControl>
      <Label>Content</Label>
      <TextField multiline rows={8} {...register('content',{required:true})} defaultValue={update?.content}/>
      </FormControl>
      <Buttons>
          <Button variant='contained' type='submit'>
              Update
          </Button>
      </Buttons>
  </FormGroup>
</Container>
  )
}
export default Update