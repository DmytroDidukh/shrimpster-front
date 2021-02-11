import React from "react";
import {
    Button,
    Typography,
    FormGroup,
    DialogActions,
    TextField,
    DialogContent,
    Dialog
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import RegisterDialogStyles from "./styles";

// @ts-ignore
const LoginDialog = ({open, handleClose}) => {
    const classes = RegisterDialogStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent className={classes.dialog}>
                <ClearIcon className={classes.closeIcon} onClick={handleClose}/>
                <div className={classes.dialogLogo}>
                    <img src="https://i.imgur.com/YJookK1.png" alt="Shrimpster"/>
                </div>
                <Typography variant="h6">Login to Shrimpster</Typography>
                <FormGroup className={classes.dialogForm}>
                    <TextField id="standard-basic" label="Email" type='email'
                               className={classes.dialogInput}/>
                    <TextField id="standard-basic" label="Password" type='password'
                               className={classes.dialogInput}/>
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary"
                        autoFocus fullWidth>
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog
