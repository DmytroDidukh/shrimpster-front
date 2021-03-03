import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        height: '100%',
        padding: '12px'
    },
    searchField: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30,
        '& .MuiIconButton-root:hover': {
            color: theme.palette.secondary.main
        }
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    news: {
        color: '#fff',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.darken,
    },
    toFollow: {
        color: '#fff',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.darken,
    }
}))

export default useStyles;
