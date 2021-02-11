import React from 'react'
import {Grid, Container} from "@material-ui/core";

import {Main, Navbar, Sidebar} from "../../containers";
import homeStyles from './styles'

const Home = () => {
    const classes = homeStyles()

    return (
        <Container maxWidth="lg" className={classes.homeWrapper}>
            <Grid container>
                <Grid item xs={2}>
                    <Navbar/>
                </Grid>
                <Grid item xs={7}>
                    <Main/>
                </Grid>
                <Grid item xs={3}>
                    <Sidebar/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
