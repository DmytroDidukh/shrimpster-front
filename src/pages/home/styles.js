import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        minHeight: '100vh',
        margin: '0 auto',
    },
    navbarList: {
        listStyle: 'none',
        padding: 0
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}))

export default useStyles;
