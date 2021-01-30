import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core';
import { Document, Page } from 'react-pdf'
import "../styles/resume.css"
import Header from "./Header"



import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {


    removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
        textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });

        const canvas = document.querySelector(".react-pdf__Page__canvas")
        console.log(canvas)
        const { style } = canvas;
        style.display = 'inline'
        style.height = 'auto'
        style.width = 1000

        console.log(style)
        console.log(window.innerWidth)
    }
    render() {
        return (
            <Grid display='flex' direction='column' justify='center' alignItems='center'>
                <Header page='RESUME' />
                <Grid item className='resume-title'>
                    Click <a href="/Resume.pdf" target='_blank'>here</a>  for a direct link to my resume; I'm currently in the 3rd term of my Computer Engineering degree and actively looking for software engineering internships for Summer 2021
                </Grid>
                <Document file="/Resume.pdf" >
                    <Page pageNumber={1} onLoadSuccess={this.removeTextLayerOffset} className='resume-pdf' width={window.innerWidth * 0.65} />
                </Document>
            </Grid>
        );
    }
}

export default Resume;