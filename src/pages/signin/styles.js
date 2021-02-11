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
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
            content: "''",
            width: '90%',
            height: '90%',
            transform: 'translate(-50%, -50%) rotate(35deg)',
            backgroundColor: theme.palette.primary.dark,
            left: '50%',
            top: '50%',
            position: 'absolute',
        },
        '&:after': {
            content: "''",
            width: '90%',
            height: '90%',
            transform: 'translate(-50%, -50%) rotate(75deg)',
            backgroundColor: theme.palette.primary.dark,
            left: '50%',
            top: '50%',
            position: 'absolute',
            border: `5px solid ${theme.palette.primary.main}`
        },
    },
    redBlockInfo: {
        zIndex: 2,
        position: 'relative',
        listStyle: 'none',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            margin: '20px 0',
            '& svg': {
                marginRight: 10
            },
            '& p': {
                fontSize: 16,
            }
        }
    },
    signInBlock: {
        backgroundColor: theme.palette.background.default,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInBlockWrapper: {
        width: 380,
        '& p': {
            marginBottom: 10
        }
    },
    signInLogo: {
        width: '100%',
        textAlign: 'center',
        '& img': {
            width: 50
        }
    },
    signInTitle: {
        fontWeight: 600,
        margin: '20px 0 50px'
    },
    dialogInput: {
        width: '100%',
        margin: '5px 0'
    },
    button: {
        fontWeight: 700
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

export default useStyles
