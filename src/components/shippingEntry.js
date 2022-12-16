import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import validator from 'validator'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import './PaymentEntry.scss'
import shippingDetailsApi from '../api/shippingDetails';

const ShippingEntry = ({cart,setCart}) => {
    let title = 'Shipping Entry';
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    console.log("***** PAYMENT INFO***** " );
    console.log(cart.paymentDetails.creditCardNum);
    
    // Data object stored in data, which can be sent to the other page with { useNavigate }
    async function onSubmit(data){
        var res =await shippingDetailsApi.saveShipping(data);
        data.id = res.id;
        cart.shippingDetails = data;
        setCart(cart);
        navigate('/purchase/viewOrder')
    };
    
    return(
        <>
        <body className='payment'>
            <div className='container'>
                <div>
                    <h1>{title}</h1>
                </div>
                    <div className='box'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* <input type= "text"  name="Name" placeholder='John Doe'{...register("shipName",{
                                    required:true
                                })}/>

                            <input type= "text"  name="address Line 1" placeholder='Address'{...register("address1",{
                                    required:true
                                })}/>
                            <input type= "text"  name="address Line 2" placeholder='Address'{...register("address2",{
                                    required:false
                                })}/>
                                <input type= "text"  name="city" placeholder='Columbus'{...register("city",{
                                    required:true
                                })}/>
                                <input type= "text"  name="state" placeholder='Ohio'{...register("state",{
                                    required:true
                                })}/>
                                <input type= "number"  name="zip" placeholder='12345'{...register("zip",{
                                required:true, pattern: /[0-9]{3}/
                            })}/> */}
                            <TextField
                                id="outlined-basic"  
                                label={
                                        <Typography variant="headline" component="h4"> Name </Typography>
                                    }
                                    
                                variant="outlined"  
                                color="secondary" 
                                placeholder='John Doe'
                                sx={{ mt: 2 }}
                                {...register("name",{
                                    required:true
                                })}      
                            />

                            <TextField
                                id="outlined-basic"  
                                label={
                                        <Typography variant="headline" component="h4"> Address Line 1 </Typography>
                                    }
                                multiline
                                maxRows={3}
                                variant="outlined"  
                                color="secondary" 
                                placeholder='Address 1'
                                sx={{ mt: 2 }}
                                {...register("addressLine1",{
                                    required:true
                                })}     
                            />

                            <TextField
                                id="outlined-basic"  
                                label={
                                        <Typography variant="headline" component="h4"> Address Line 2 </Typography>
                                    }
                                multiline
                                maxRows={3}
                                variant="outlined"  
                                color="secondary" 
                                placeholder='Address 2'
                                sx={{ mt: 2 }}
                                {...register("addressLine2",{
                                    required:false
                                })}    
                            />

                            <TextField
                                id="outlined-basic"  
                                label={
                                        <Typography variant="headline" component="h4"> City </Typography>
                                    }
                                
                                
                                variant="outlined"  
                                color="secondary" 
                                placeholder='Columbus'
                                sx={{ mt: 2 }}
                                {...register("city",{
                                    required:true
                                })}    
                            />

                            <TextField
                                id="outlined-basic"  
                                label={
                                        <Typography variant="headline" component="h4"> State </Typography>
                                    }
                                
                                variant="outlined"  
                                color="secondary" 
                                placeholder='Ohio'
                                sx={{ mt: 2 }}
                                {...register("state",{
                                    required:true
                                })}    
                            />

                            <TextField
                                id="outlined-basic"  
                                label={
                                        <Typography variant="headline" component="h4"> Zip Code </Typography>
                                    }
                               
                                variant="outlined"  
                                color="secondary" 
                                placeholder='43201'
                                sx={{ mt: 2 }}
                                {...register("zipCode",{
                                    required:true, pattern: /[0-9]{3}/
                                })}   
                            />

                            <input type="submit" className="btn btn-success " />
                        </form>
                    </div>
                </div>
            </body>
        </>
    );
}
export default ShippingEntry;