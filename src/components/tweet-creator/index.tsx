import React, {FC, ReactNode, ReactElement, useMemo} from "react";
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
        console.log(value.length)
        console.log(280 / value.length ? value.length : 1)
        return 280 / value.length ? value.length : 1 || 0
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
                                                 // Customize the path, i.e. the "completed progress"
                                                 path: {
                                                     // Path color
                                                     stroke: `rgba(188, 65, 35, ${percentage / 100})`,
                                                     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                     strokeLinecap: 'butt',
                                                     // Customize transition animation
                                                     transition: 'stroke-dashoffset 0.5s ease 0s',
                                                     // Rotate the path
                                                     transformOrigin: 'center center',
                                                 },
                                                 // Customize the circle behind the path, i.e. the "total progress"
                                                 trail: {
                                                     // Trail color
                                                     stroke: '#d6d6d6',
                                                     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                     strokeLinecap: 'butt',
                                                     // Rotate the trail
                                                     transformOrigin: 'center center',
                                                 },
                                                 // Customize the text
                                                 text: {
                                                     // Text color
                                                     fill: '#f88',
                                                     // Text size
                                                     fontSize: '25px',
                                                 },
                                                 // Customize background - only used when the `background` prop is true
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
