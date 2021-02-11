import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from '@material-ui/core/TextField';
import DialogActions from "@material-ui/core/DialogActions";
import {Button, Typography} from "@material-ui/core";

import RegisterDialogStyles from "./styles";
import ClearIcon from "@material-ui/icons/Clear";

// @ts-ignore
const RegisterDialog = ({open, handleClose}) => {
    const classes = RegisterDialogStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent className={classes.dialog}>
                <div className={classes.dialogHeader}>
                    <ClearIcon className={classes.closeIcon} onClick={handleClose}/>
                    <div className={classes.dialogLogo}>
                        <img src="https://i.imgur.com/YJookK1.png" alt="Shrimpster"/>
                    </div>
                    <Button variant="contained" color="primary"
                            disabled
                            onClick={handleClose}>
                        Next
                    </Button>
                </div>
                <Typography variant="h6">Create your account</Typography>
                <form className={classes.dialogForm}>
                    <TextField id="standard-basic" label="Name"
                               className={classes.dialogInput}/>
                    <TextField id="standard-basic" label="Phone"
                               className={classes.dialogInput}/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default RegisterDialog
