import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        maxWidth: 1280,
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: theme.palette.background.default
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
