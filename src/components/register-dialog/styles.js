import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: 380
    },
    dialogHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    dialogForm: {},
    dialogInput: {
        width: '100%',
        margin: '5px 0'
    },
    dialogLogo: {
        flex: 1,
        textAlign: 'center',
        '& img': {
            width: 30,
            marginLeft: 40
        }
    },
    closeIcon: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
        fontSize: 30,
        '&:hover': {
            color: theme.palette.primary.dark,
        }
    }
}))

export default useStyles
