import jwt from "jsonwebtoken";
export const generateToken=(id)=>{
    return jwt.sign({id},'joel1499',{
        expiresIn:'30d',
    })
}