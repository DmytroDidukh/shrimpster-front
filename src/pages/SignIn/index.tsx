import React from "react";
import {Button, Typography} from "@material-ui/core";

import SignInStyles from './styles'

const SignIn = () => {
    const classes = SignInStyles()

    return (
        <div className={classes.wrapper}>
            <section className={classes.redBlock}>
                <ul>
                    <li><Typography>Read about what interests you.</Typography></li>
                    <li><Typography>Find out what the world is talking about.</Typography></li>
                    <li><Typography>Join the conversation.</Typography></li>
                </ul>
            </section>
            <section className={classes.signInBlock}>
                <div className={classes.signInBlockWrapper}>
                    <div className={classes.logo}>
                        <img src="https://i.imgur.com/YJookK1.png" alt="Shrimpster"/>
                    </div>
                    <Typography variant='h5'>Find out what's happening in the world right now.</Typography>
                    <Typography>Join Shrimpster right now!</Typography>
                    <Button variant="contained" color="primary" fullWidth>Register</Button>
                    <Button variant="outlined" color="primary" fullWidth>Login</Button></div>
            </section>
        </div>
    )
}

export default SignIn
