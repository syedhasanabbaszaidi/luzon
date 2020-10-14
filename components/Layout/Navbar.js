import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import SidebarModal from './SidebarModal';

class Navbar extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
               <div id="navbar" className="navbar-area fixed-top bg-white">
                    <nav className="navbar navbar-expand-md">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Our Approach</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Technology</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Focus Areas</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>
                                
                                </ul>
                                 </div>
                        </div>
                    </nav>
                </div>

                {/* Right Sidebar Modal */}
                <SidebarModal onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} />
            </React.Fragment>
        );
    }
}

export default Navbar;
