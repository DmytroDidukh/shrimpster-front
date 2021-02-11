import React from 'react'
import {Grid, Container} from "@material-ui/core";

import {Navbar, Sidebar} from "../../containers";
import homeStyles from './styles'

const Home = () => {
    const classes = homeStyles()

    return (
        <Container maxWidth="lg" className={classes.homeWrapper}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Navbar/>
                </Grid>
                <Grid item xs={7}>
                    middle
                </Grid>
                <Grid item xs={3}>
                    <Sidebar/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
