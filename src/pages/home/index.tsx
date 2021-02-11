import React from 'react'
import {Grid} from "@material-ui/core";

import {Navbar} from "../../containers";
import homeStyles from './styles'

const Home = () => {
    const classes = homeStyles()

    return (
        <section className={classes.homeWrapper}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Navbar/>
                </Grid>
                <Grid item xs={7}>
                    middle
                </Grid>
                <Grid item xs={3}>
                    right
                </Grid>
            </Grid>
        </section>
    )
}

export default Home
