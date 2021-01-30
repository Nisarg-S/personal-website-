import React, { Component } from 'react';
import { Grid, Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import { Modal } from 'antd'

import "../styles/project-card.css"

import ProjectTags from "./ProjectTags"

// const { Meta } = Card;

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = { showCardModal: false };
    }
    render() {
        var { image, title, shortDescription, longDescription, tags, demo, github } = this.props.project
        let { showCardModal } = this.state
        return (
            <div className='card'>
                <Card raised={true} >
                    <CardActionArea onClick={() => { console.log('here'); this.setState({ showCardModal: true }) }}>
                        <CardMedia
                            style={{ height: 140 }}
                            image={image}
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {shortDescription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                {showCardModal && (
                    <Modal
                        visible={showCardModal}
                        title={null}
                        onCancel={() => this.setState({ showCardModal: false })}
                        footer={null}
                    >
                        <ProjectTags tagList={tags} />

                        <div>
                            {longDescription}
                        </div>
                        <div style={{ marginTop: 10 }}>
                            {demo && (<a href={demo} target='_blank'> Live Demo | </a>)} {github && (<a href={github} target='_blank'> Github</a>)}
                        </div>

                    </Modal>
                )}
            </div>


        );
    }
}

export default ProjectCard;