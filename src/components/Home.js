import React, { Component } from 'react';
import Loader from './Loader';
import { Grid, Box } from '@material-ui/core';
import Header from "./Header"
import '../styles/landing.css'
import profile from "../assets/profile-removebg-preview.jpg"
import { ArrowRightOutlined } from "@ant-design/icons"
import { BsArrowRight } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Typewriter from 'typewriter-effect';

import { Link } from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    console.log('setting loading to false');
    setTimeout(() => {
      this.setState({ isLoading: false });

    }, 1000)


  }
  render() {
    var { isLoading } = this.state;
    console.log(this.state);
    if (isLoading) return <Loader />;
    else {
      return (
        <Box
          display='flex'
          direction='column'
          justifyContent='center'
          alignItems='center'
          className='landing-area'
        >
          <Grid item className='landing-content'>
            <Header page='HOME' />
            <Grid className='profile-img-container'>
              <img src={profile} className='profile-img' />
            </Grid>
            <Grid item className="title"> I'm Nisarg</Grid>
            <Typewriter
              className='subtitle'
              options={{
                strings: ['Software Engineer', 'Full Stack Developer', 'Student'],
                autoStart: true,
                delay: 50,
                loop: true,
              }}
            />
            {/* <Grid item className='subtitle'> Software Engineer</Grid> */}
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <a href="https://github.com/nisarg-s" target='_blank'>
                <AiFillGithub className='social-icons' />
              </a>
              <a href='https://www.linkedin.com/in/nisarg-shah-b9380b14a/' target='_blank'>
                <AiFillLinkedin className='social-icons' />
              </a>
            </Grid>
            <Link to='/resume' >
              <Grid item>
                <button className='next-button'>
                  <BsArrowRight className="arrow" color='white' />
                </button>
              </Grid>
            </Link>

          </Grid>
        </Box>

      );
    }
  }
}

export default Home;
