import React from 'react';
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutFive from '../elements/about/AboutFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
// import PortfolioOne from "../elements/portfolio/PortfolioOne";
// import TestimonialOne from "../elements/testimonial/TestimonialOne";
import Separator from "../elements/separator/Separator";
import ProgressbarTwo from "../elements/progressbar/ProgressbarTwo";
// import BrandFour from "../elements/brand/BrandFour";
// import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);


const PersonalPortfolio = () => {
    return (
        <>
            <SEO title="Personal Portfolio" />
            <main className="page-wrapper">
                
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-perosonal-portfolio height-750 bg_image" data-black-overlay="1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/wall-bg.jpeg)`}}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">
                                    <h1 className="title">Hey! I'm <br /> <span className="theme-gradient">Sunhao</span></h1>
                                    <div className="button-group mt--30">
                                        <Link className="btn-default round btn-border btn-large" to="#">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <AboutFive />


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-about-area rn-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <SectionTitle
                                    textAlign = "text-left"
                                    radiusRounded = ""
                                    subtitle = "See my All Skill."
                                    title = "My Working Skill"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-progress-style-1">
                                    <ProgressbarTwo />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* End Elements Area  */}


                <FooterTwo />   
                <Copyright />
            </main>
        </>
    )
}
export default PersonalPortfolio;