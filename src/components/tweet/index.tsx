import React, {FC, ReactElement} from "react";
import {Grid, Avatar, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import IconButton from "@material-ui/core/IconButton";

import tweetStyles from "./styles";

interface TweetProps {
    user: {
        fullName: string,
        username: string,
        avatarUrl: string
    },
    tweetText: string
}

const Tweet: FC<TweetProps> = ({user, tweetText}: TweetProps): ReactElement => {
    const classes = tweetStyles()

    return (
        <div className={classes.tweet}>
            <Grid container spacing={2} wrap='nowrap'>
                <Grid item>
                    <Avatar alt="User Avatar" src={user.avatarUrl}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.tweetHeader}>
                        <span className={classes.tweetAuthorName}>
                                <b>{user.fullName}</b>
                                <span className={classes.tweetAuthorNickname}>{user.username}</span>
                        </span>
                        {/*// @ts-ignore*/}
                        <span className={classes.tweetTime} title={'12:07 AM * Feb 21, 2021'}>2h</span>
                    </Typography>
                    <Typography variant={"body1"}>{tweetText}</Typography>
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
