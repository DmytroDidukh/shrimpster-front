import React, {FC, ReactElement} from "react";
import {Paper, Typography} from '@material-ui/core';

import mainStyles from './styles'
import Tweet from "../../components/tweet";

const Main: FC = (): ReactElement => {
    const classes = mainStyles()

    return (
        <section className={classes.main}>
            <Paper elevation={3}>
                <Typography variant='h6'>Home</Typography>
            </Paper>
            <Paper elevation={3} className={classes.mainTweetSection}>
                <Tweet/>
            </Paper>
        </section>
    )
}

export default Main
