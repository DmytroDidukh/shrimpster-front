import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'stretch',
        width: '100%',
        color: '#fff',
        '& > section': {
            padding: theme.spacing(5),
        }
    },
    redBlock: {
        backgroundColor: theme.palette.primary.main,
        flex: '0 0 50%',
        position: 'relative',
        '&:before': {
            content: "''",
            width: 300,
            height: 300,
            transform: 'rotate(33deg)',
            backgroundColor: theme.palette.primary.dark,
            left: -70,
            top: -80,
            position: 'absolute',
            borderRadius: '0 20px 100px 0'
        },
        '& ul': {
            zIndex: 2,
            position: 'relative',
            listStyle: 'none'
        }
    },
    signInBlock: {
        backgroundColor: theme.palette.background.default,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    signInBlockWrapper: {},
    logo: {
        width: '100%',
        textAlign: 'center',
        '& > img': {
            width: 50
        }
    },
    button: {
        fontWeight: 700
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    }
}))

export default useStyles
