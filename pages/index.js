import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import BannerSlider from '../components/TEA/BannerSlider';
import TabsWithIcons from '../components/TEA/TabsWithIcons';
import TwoByThreeAlternative from '../components/TEA/TwoByThreeAlternative';
import BlogPageComponent from '../components/TEA/BlogPageComponent';
import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <TabsWithIcons 
                    classesToAddToSection=""
                    tabHoverStyle=""
                />
                <TwoByThreeAlternative 
                    classesToAddToSection="bg-mint bg-top-curve"
                />
                <BlogPageComponent
                    classesToAddToSection="bg-mint bg-bottom-curve"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;