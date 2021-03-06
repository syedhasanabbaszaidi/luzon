import React, { Component } from 'react';

import Navbar from '../components/TEA/Navbar';
import PageBanner from '../components/TEA/PageBanner';

import Footer from '../components/TEA/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Login" 
                /> 
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;