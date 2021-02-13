import React, {FC, ReactElement} from "react";
import {Grid, Avatar, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import IconButton from "@material-ui/core/IconButton";

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
                    <Typography className={classes.tweetHeader}>
                        <span className={classes.tweetAuthorName}>
                                <b>Dmytro Didukh</b>
                                <span className={classes.tweetAuthorNickname}>@dmytrodidukh </span>
                        </span>
                        {/*// @ts-ignore*/}
                        <span className={classes.tweetTime} title={'12:07 AM * Feb 21, 2021'}>2h</span>
                    </Typography>
                    <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                        eaque eos laboriosam
                        nesciunt qui tempore vitae voluptas! A animi culpa, est inventore optio praesentium veritatis.
                        Aliquam enim fugit perferendis sequi?
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.tweetFooter}>
                <IconButton className={classes.commentIcon} title='Reply'>
                    <ChatBubbleOutlineIcon/>
                    <span>1</span>
                </IconButton>
                <IconButton className={classes.retweetIcon} title='Retweet'>
                    <RepeatIcon/>
                    <span>3</span>
                </IconButton>
                <IconButton className={classes.likeIcon} title='Like'>
                    <FavoriteBorderIcon/>
                    <span>456</span>
                </IconButton>
                <IconButton className={classes.shareIcon} title='Share'>
                    <ShareOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Tweet;
