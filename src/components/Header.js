import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "../styles/header.css"
import logo from "../assets/logo.png"
class Header extends Component {
    state = {}
    render() {
        var { page } = this.props
        return (
            <Box display='flex' flexWrap='nowrap' flexDirection='row' alignItems='center' justifyContent='space-between' className={'header' + (page != 'HOME' ? ' header-non-landing' : ' header-landing')}>
                <Box className="header-logo">
                    <img src={logo} height={50} width={50} />
                </Box>
                <Box display='flex' flexDirection='row' className="navigation-link-container">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Grid item className={'navigation-item' + (page === 'HOME' ? ' active' : ' non-landing-text')}>
                            HOME
                        </Grid>
                    </Link>

                    <Link to='/resume' style={{ textDecoration: 'none' }}>
                        <Grid item className={'navigation-item' + (page === 'RESUME' ? ' active' : (page === 'HOME' ? '' : ' non-landing-text'))}>
                            RESUME
                        </Grid>
                    </Link>
                    <Link to='/projects' style={{ textDecoration: 'none' }}>
                        <Grid item className={'navigation-item' + (page === 'PROJECTS' ? ' active' : (page === 'HOME' ? '' : ' non-landing-text'))}>
                            PROJECTS
                         </Grid>
                    </Link>
                </Box>
            </Box>
        );
    }
}

export default Header;