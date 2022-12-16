import React from "react";
import { Link } from 'react-router-dom';
const Home = () => {
    let title = 'Welcome to osucart!';

    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <h4 className="display-2 text-uppercase text-black mb-md-4">Get the best deals for electronics!</h4>
            <p>We aim to sell the best electronics at affordable rates for students</p>
            <Link to = "/login" className="btn btn-primary py-md-3 px-md-5 mt-2">Start Shopping</Link>
        </div>
        </>
    )

}
export default Home;