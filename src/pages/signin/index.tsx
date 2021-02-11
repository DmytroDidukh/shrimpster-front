import React, {FC, ReactElement, useState} from "react";
import {Button, FormGroup, TextField, Typography, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Modal from "../../components/Modal";
import {MONTHS_DATA} from "../../config";
import signInStyles from './styles'


const SignIn: FC = (): ReactElement => {
    const [openDialog, setOpenDialog] = useState<'SignIn' | 'SignUp' | undefined>(undefined);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const classes = signInStyles()


    const handleClickOpenRegisterDialog = () => {
        setOpenDialog('SignUp');
    };

    const handleClickOpenLoginDialog = () => {
        setOpenDialog('SignIn');
    };

    const handleCloseDialog = () => {
        setOpenDialog(undefined);
    };

    const handleChangeDay = (event: React.ChangeEvent<{ value: unknown }>) => {
        const temporaryDate = new Date(+year || 2000, +month || 0, +day || 1)
        console.log(temporaryDate)
        setDay(event.target.value as string);
    };

    const handleChangeMonth = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMonth(event.target.value as string);
    };

    const handleChangeYear = (event: React.ChangeEvent<{ value: unknown }>) => {
        setYear(event.target.value as string);
    };

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
                    <Typography>Join Shrimpster today!</Typography>
                    <Button variant="contained" color="primary"
                            fullWidth
                            onClick={handleClickOpenRegisterDialog}>
                        Register
                    </Button>
                    <Button variant="outlined" color="primary"
                            onClick={handleClickOpenLoginDialog}
                            fullWidth>Login</Button></div>
            </section>
            <Modal
                open={openDialog === 'SignUp'}
                handleClose={handleCloseDialog}
                title='Create your account'
                buttonTitle='Next'>
                <FormGroup>
                    <TextField id="standard-basic" label="Name" type='text'
                               className={classes.dialogInput}/>
                    <TextField id="standard-basic" label="Email" type='email'
                               className={classes.dialogInput}/>
                    <div>
                        <Typography>Date of Birth</Typography>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Month</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={month}
                                onChange={handleChangeMonth}
                            >
                                {
                                    MONTHS_DATA.map(item => (
                                        <MenuItem value={item.value}>{item.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Day</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={day}
                                onChange={handleChangeDay}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={year}
                                onChange={handleChangeYear}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </FormGroup>
            </Modal>
            <Modal
                open={openDialog === 'SignIn'}
                handleClose={handleCloseDialog}
                title='Login to Shrimpster'
                buttonTitle='Login'>
                <FormGroup>
                    <TextField id="standard-basic" label="Email" type='email'
                               className={classes.dialogInput}/>
                    <TextField id="standard-basic" label="Password" type='password'
                               className={classes.dialogInput}/>
                </FormGroup>
            </Modal>
        </div>
    )
}

//TODO Video: https://www.youtube.com/watch?v=0WOsVcbWX7k&list=PL0FGkDGJQjJF7MEJ353NX8ou8comQ4KwO&index=2&ab_channel=ArchakovBlog
// Time: 1:26:18

export default SignIn
