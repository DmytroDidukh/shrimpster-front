import React, {FC, ReactNode, ReactElement} from "react";
import {Button, Dialog, DialogActions, DialogTitle, DialogContent, Typography} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import modalStyles from "./styles";

interface ModalProps {
    children: ReactNode,
    title: string,
    buttonTitle: string,
    open: boolean,
    handleClose: () => void
}

const Modal: FC<ModalProps> = ({open, handleClose, title, buttonTitle, children}): ReactElement => {
    const classes = modalStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                <ClearIcon className={classes.closeIcon} onClick={handleClose}/>
                <div className={classes.dialogLogo}>
                    <img src="https://i.imgur.com/YJookK1.png" alt="Shrimpster"/>
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialog}>
                <Typography variant="h6">{title}</Typography>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary"
                        autoFocus fullWidth>
                    {buttonTitle}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal;
