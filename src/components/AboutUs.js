import React from "react";
import gautam from "../images/gautam.jfif";
import rishav from "../images/rishav.jfif";
import anooj from "../images/anooj.jpg";
const AboutUs = () => {
    let title = 'About Us';

    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>    
        <div className="row g-5" align = "left">
            <div className="col-lg-12">
                <h2 align = "center" className="display-5 text-uppercase mb-4">We are <span className="text-primary">the Leader</span> in Electronic stores.</h2>
                <h3 align = "center">Meet our team</h3>
                <img src="img/signature.jpg" alt=""/>
            </div>
        </div>

        <div className="row container-fluid py-6 px-5">
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{"min-height": "300px"}}>
                        <div className="position-relative h-100">
                            <img alt = '' src={gautam} style={{"object-fit": "cover"}}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Gautam Rao</h4>
                            <span>CEO & Founder</span>
                        </div>
                        <p className="mb-4">Our CEO & Founder is Gautam Rao. He graduated from The Ohio State University, Columbus in 2015. He began his professional career working for Ebay and then moved to Amazon. He founded the company osucart in 2019 to help students at osu get electronics for low prices.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{"min-height": "300px"}}>
                        <div className="position-relative h-100">
                            <img src={rishav} style={{"object-fit": "cover"},{"height":"260px"}}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Rishav Mishra</h4>
                            <span>CTO</span>
                        </div>
                        <p className="mb-4">Our CTO is Rishav Mishra. He graduated from The Ohio State University, Columbus in 2017. He began his professional career at HP before joining osucart in 2020. He is now the CTO of the company and has helped the company grow exponentially in this competitive environment.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="row g-0">
                    <div className="col-10" style={{"min-height": "300px"}}>
                        <div className="position-relative h-100">
                            <img src={anooj} style={{"object-fit": "cover","height":"260px","width":"250px"}}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="bg-light p-4">
                            <h4 className="text-uppercase">Anooj Deshpande</h4>
                            <span>COO</span>
                        </div>
                        <p className="mb-4">Our COO is Anooj Deshpande. He graduated from The Ohio State University, Columbus in 2014. His first job was at Nationwide where he worked as an analyst for 7 years. He then joined osucart in 2021 and has been leading the team ever since.</p>
                    </div>
                </div>
            </div>
        </div>
    

        </>
    )

}
export default AboutUs;