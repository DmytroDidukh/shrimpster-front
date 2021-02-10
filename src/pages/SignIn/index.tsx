import React from "react";
import {Button, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import SignInStyles from './styles'

const SignIn = () => {
    const classes = SignInStyles()

    return (
        <div className={classes.wrapper}>
            <section className={classes.redBlock}>
                <ul className={classes.redBlockInfo}>
                    <li>
                        <SearchIcon/>
                        <Typography>Read about what interests you.</Typography>
                    </li>
                    <li>
                        <PeopleOutlineIcon/>
                        <Typography>Find out what the world is talking about.</Typography>
                    </li>
                    <li>
                        <ChatBubbleOutlineIcon/>
                        <Typography>Join the conversation.</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.signInBlock}>
                <div className={classes.signInBlockWrapper}>
                    <div className={classes.signInLogo}>
                        <img src="https://i.imgur.com/YJookK1.png" alt="Shrimpster"/>
                    </div>
                    <Typography className={classes.signInTitle}
                                variant='h4'>
                        Find out what's happening in the world right now
                    </Typography>
                    <Typography>Join Shrimpster right now!</Typography>
                    <Button variant="contained" color="primary" fullWidth>Register</Button>
                    <Button variant="outlined" color="primary" fullWidth>Login</Button></div>
            </section>
        </div>
    )
}

//TODO Video: https://www.youtube.com/watch?v=bP6BtdM5CXU&list=PL0FGkDGJQjJF7MEJ353NX8ou8comQ4KwO&ab_channel=ArchakovBlog
// Time: 50:14

export default SignIn
