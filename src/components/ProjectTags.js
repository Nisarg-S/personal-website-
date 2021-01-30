import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core';

import "../styles/project-card.css"

const backgroundColors = {
    JavaScript: '#FE4A49', Python: '#2AB7CA', C: '#FED766', 'C++': '#28536B', Other: '#C9B6BE'
}


class ProjectTags extends Component {

    render() {
        let { tagList } = this.props
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                style={{ marginBottom: 10 }}
            >

                {tagList.map((element) => (
                    <Grid className='project-tag-element' style={{ backgroundColor: backgroundColors[element] }}>
                        {element}
                    </Grid>
                ))}


            </Grid>

        );
    }
}

export default ProjectTags;