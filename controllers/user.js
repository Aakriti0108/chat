const user = require('../models/user')
const bcrypt = require('bcrypt')



function isstringinvalid(string)
{
    if(string == undefined || string.length === 0)
    {
        return true
    }
    else
    {
        return false
    }
}

exports.signup = async (req,res)=>{

    try{
        const {name,phoneNumber,email,password} = req.body;

        if(isstringinvalid(email) || isstringinvalid(password) || isstringinvalid(name))
        {
            return res.status(400).json({err:"bad parameters"})
        }
        user.findAll({where:{email : email}})
        .then(users =>{
            if(users.length === 1)
            {
                 res.status(402).json({message:"user already exist"})
            }
            else
            {
                const saltrounds =10;
                bcrypt.hash(password,saltrounds,async(err,hash)=>{
                    
                    await user.create({name,email,password:hash,phoneNumber})
                    res.status(201).json({message :'successfully created'})
                })
            }
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
}
