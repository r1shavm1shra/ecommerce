import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import validator from 'validator'
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import './PaymentEntry.scss'
import loginApi from '../api/login';

const Login = ({cart,setCart}) => {
    let title = 'Log in';
    const {register, handleSubmit, errors} = useForm();    
    const navigate = useNavigate();
    
    // Data object stored in data, which can be sent to the other page
   async function onSubmit(data){
        console.log(data)
        let res = await loginApi.savelogin(data);
        if(cart==undefined)
        {
            cart = {
                products:[]
            };
        }
        cart.UserDetails = res;
        if (res.Message == "Failed to login.") {
            alert(res.Message);
        } else {
            setCart(cart);
            navigate('/purchase') 
        }
    };

    return(
        <>
        <body className='payment'>
        <div className='container'>
                 <div>
                    <h1>{title}</h1>
                </div>
            <div className='box' >
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    

                        <div>
                            <TextField
                                id="outlined-basic"  
                                label={
                                    <Typography variant="headline" component="h4"> Username </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='Username'
                                sx={{ mt: 2 }}
                                {...register("loginId",{
                                    required:true
                                })}
                                
                             />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"  
                                type='password'
                                label={
                                    <Typography variant="headline" component="h4"> Password </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='password'
                                sx={{ mt: 2 }}
                                {...register("password",{
                                    required:true
                                })}
                             />
                        </div>
                        

                        <input type="submit" className="btn btn-success " />
                    </form>
            
                </div>
            </div>
            </body>
        
        </>
    );
    
}

export default Login;