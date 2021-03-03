import React, {FC, ReactElement, useMemo} from "react";
import {TextField, Grid, Avatar, IconButton, Button} from "@material-ui/core";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import {CircularProgressbar} from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import tweetCreatorStyles from "./styles";


const TweetCreator: FC = (): ReactElement => {
    const classes = tweetCreatorStyles()

    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const percentage = useMemo(() => {
        return Math.round((value.length / 280) * 100) || 0
    }, [value])

    return (
        <Grid container spacing={2} wrap='nowrap'>
            <Grid item lg={1}>
                <Avatar alt="User Avatar"
                        src='https://pbs.twimg.com/profile_images/1313518656484147200/tub5MziI_400x400.jpg'/>
            </Grid>
            <Grid item lg={10}>
                <TextField
                    id="standard-textarea"
                    placeholder="What's happening?"
                    multiline
                    rowsMax={10}
                    onChange={handleChange}
                    value={value}
                    fullWidth
                />
                <div className={classes.tweetCreatorFooter}>
                    <div className={classes.leftBlock}>
                        <IconButton>
                            <ImageOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <EmojiEmotionsOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className={classes.rightBlock}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`}
                                             styles={{
                                                 root: {
                                                     width: '30px'

                                                 },
                                                 path: {
                                                     stroke: percentage > 100 ? 'red' : `#BC4123`,
                                                     strokeLinecap: 'butt',
                                                     transition: 'stroke-dashoffset 0.5s ease 0s',
                                                     transformOrigin: 'center center',
                                                 },
                                                 trail: {
                                                     stroke: '#d6d6d6',
                                                     strokeLinecap: 'butt',
                                                     transformOrigin: 'center center',
                                                 },
                                                 text: {
                                                     fill: percentage > 100 ? 'red' : `#BC4123`,
                                                     fontSize: '25px',
                                                 },
                                                 background: {
                                                     fill: '#3e98c7',
                                                 },
                                             }}/>
                        <Button variant="contained" color="primary">
                            Tweet
                        </Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default TweetCreator;
