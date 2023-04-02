import React from 'react'
import {AppBar, Box, Typography,Toolbar, styled} from '@mui/material'
import {NavLink} from 'react-router-dom'
import './style.css'
const NavBar=styled(AppBar)`
background-color:white;
color:black;
position:static;
`
const Links=styled('div')`
display:flex;
justify-content:space-around;
width:25%;
`
const Link=styled(NavLink)`
text-decoration:none;
font-weight:500;
// color:black;
`
const Header = () => {
  return (
    <NavBar>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h5' gutterBottom>Blogger</Typography>
            <Links>
                <Link to='/'>Home</Link>
                <Link to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>Login</Link>
                {/* <Link to='/signup'>Sign Up</Link> */}
            </Links>
        </Toolbar>
    </NavBar>
  )
}

export default Header