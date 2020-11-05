import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';
import ThreeColumnsWithImage from '../components/TEA/ThreeColumnsWithImage';
import TwoByThreeColumnsWithImage from '../components/TEA/TwoByThreeColumnsWithImage';
import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Our Approach" 
                /> 
                <ThreeColumnsWithImage/>
                <TwoByThreeColumnsWithImage
                    classesToAddToSection="bg-mint bg-bottom-curve"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;