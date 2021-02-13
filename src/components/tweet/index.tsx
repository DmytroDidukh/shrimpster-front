import React, {FC, ReactElement} from "react";
import {Grid, Avatar, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LoopIcon from '@material-ui/icons/Loop';

import tweetStyles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";


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
                        nesciunt qui tempore vitae voluptas! A animi culpa, est inventore optio praesentium veritatis.
                        Aliquam enim fugit perferendis sequi?
                    </div>
                </Grid>
            </Grid>
            <div className={classes.tweetActions}>
                <IconButton className={classes.commentIcon} title='Reply'>
                    <ChatBubbleOutlineIcon/>
                </IconButton>
                <IconButton className={classes.retweetIcon} title='Retweet'>
                    <LoopIcon/>
                </IconButton>
                <IconButton className={classes.likeIcon} title='Like'>
                    <FavoriteBorderIcon/>
                </IconButton>
                <IconButton className={classes.shareIcon} title='Share'>
                    <ShareOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Tweet;
