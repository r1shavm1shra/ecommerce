import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import validator from 'validator'
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import './PaymentEntry.scss'
import paymentApi from '../api/payment';

const PaymentEntry = ({cart,setCart}) => {
    let title = 'Payment Entry';
    const {register, handleSubmit, errors} = useForm();    
    const navigate = useNavigate();
    
    // Data object stored in data, which can be sent to the other page
    async function onSubmit(data){
        let res = await paymentApi.savePayment(data);
        cart.paymentDetails = res;
        setCart(cart);
        navigate('/purchase/shippingEntry')
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
                    
                        {/* <div className='formInput'>
                            <label for="cc">Credit Card Number</label>
                            <input type= "number" id= "cc" name="Credit Card Number" className='payment-input' placeholder='123-456-789-0'{...register("creditCardNum",{
                                required:true, validate: value => validator.isCreditCard(value)
                            })}/>
                        </div>
                        
                        <div className='formInput'>
                            <label for="cvv">CVV</label>
                            <input type= "number" id="cvv" name="CVV" className='payment-input' placeholder='123'{...register("cvv",{
                                required:true, pattern: /[0-9]{3}/
                            })}/>
                        </div> */}
                        
                        {/* <div className='formInput'>
                            <label for="date">Card Date</label>
                            <input type= "date" id="date" name="Date" className='payment-input' placeholder='01/01/2001'{...register("date",{
                                required:true
                            })}/>
                        </div> */}

                        {/* <div className='formInput'>
                            <label for="cName">Card Name</label>
                            <input type= "text" id='cName' name="cardName" className='payment-input' placeholder='John Doe'{...register("cardName",{
                                required:true
                            })}/>
                        </div> */}

                        <div>
                            <TextField
                                id="outlined-basic"  
                                label={
                                    <Typography variant="headline" component="h4"> Credit Card Number </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='123-456-789-0'
                                sx={{ mt: 2 }}
                                {...register("creditCardNum",{
                                    required:true, validate: value => validator.isCreditCard(value) || 'Required input'
                                })}
                                
                             />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"  
                                label={
                                    <Typography variant="headline" component="h4"> CVV </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='123'
                                sx={{ mt: 2 }}
                                {...register("cvv",{
                                    required:true, pattern: /[0-9]{3}/
                                })}
                             />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"  
                                type='date'
                                label={
                                    <Typography variant="headline" component="h4"> Date </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                InputLabelProps={{ shrink: true }}
                                sx={{ mt: 2 }}
                                {...register("date",{ required:'enter name'})}
                                 />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"  
                                label={
                                    <Typography variant="headline" component="h4"> Card Name </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='John Doe'
                                sx={{ mt: 2 }}
                                {...register("cardName",{ required:true})}
                                 />
                        </div>
                        {/* <div>
                            <TextField 
                                id="outlined-basic" 
                                label="Outlined" 
                                color="secondary" 
                                variant="outlined" {...register("outline")}/>
                        </div> */}
                        <input type="submit" className="btn btn-success " />
                    </form>
            
                </div>
            </div>
            </body>
        </>
    );
}
export default PaymentEntry;