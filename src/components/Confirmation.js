import React from 'react';
import { useLocation} from 'react-router-dom';
const Confirmation = () => {
    let title = 'Confirmation';

    const location = useLocation();
    
    return(
        <>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>
                    { (location.state.id==undefined) && (
                        <span >Sorry we could not place your order</span>
                    )
                    }
                    { (location.state.id!=undefined) && (
                    <span >Thank you, {location.state.name}! Your order has been placed.Your order number is {location.state.id}.</span>
                    )
                    }
                    
                </p>
            </div>
        </>
    );
}
export default Confirmation;