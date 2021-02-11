import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    tweet: {
        width: '100%',
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        padding: 12,
        '&:hover': {
            backgroundColor: theme.palette.background.darken,
        }
    },
}))

export default useStyles

