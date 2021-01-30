import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core';
import Header from "./Header"
import "../styles/projects.css"
import ProjectCard from "./ProjectCard"

import projectDetails from "../projectdetails"

import SortingThumbnail from "../assets/Sorting_Thumb.png"
import StockThumbnail from "../assets/stock_thumb.jpg"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onclick = () => {
    console.log('pushing');
    this.props.history.push('/');
  }
  render() {
    console.log(projectDetails)

    projectDetails.map((element) => { console.log(element) })
    return (
      <Box display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' style={{ backgroundColor: '#f5fffc', minHeight: '100vh' }}>
        <Header page='PROJECTS' />
        <Grid className='projects-title'>
          My Projects
        </Grid>
        <Grid className='projects-subtitle'>
          This is a collection of some projects I have made over the past couple years, if you have any questions about them feel free to contact me!
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" className='project-card-container'>
          {/* <ProjectCard project={{ title: 'sorting', image: SortingThumbnail }} />
          <ProjectCard project={{ title: 'sorting', image: SortingThumbnail }} /> */}
          {projectDetails.map((element) => {
            return <ProjectCard project={element} />
          })}
        </Box>
      </Box>
    );
  }
}

export default Projects;
