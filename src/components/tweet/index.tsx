import React, {FC, ReactElement} from "react";
import {Grid, Avatar, Typography} from "@material-ui/core";

import tweetStyles from "./styles";


const Tweet: FC = (): ReactElement => {
    const classes = tweetStyles()

    return (
        <div className={classes.tweet}>
            <Grid container spacing={2} wrap='nowrap'>
                <Grid item>
                    <Avatar alt="Remy Sharp" src="https://stuki-druki.com/aforizms/Natalie-Portman-01.jpg"/>
                </Grid>
                <Grid item>
                    <Typography><b>@dmytrodidukh </b> 2h</Typography>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque eos laboriosam
                        nesciunt
                        qui tempore vitae voluptas! A animi culpa, est inventore optio praesentium veritatis. Aliquam
                        enim
                        fugit perferendis sequi?
                    </div>
                </Grid>
            </Grid>
            <div>
                fgdfg
            </div>
        </div>
    )
}

export default Tweet;
