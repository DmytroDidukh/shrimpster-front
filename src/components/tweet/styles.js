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
    tweetActions: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    commentIcon: {},
    retweetIcon: {
        '&:hover': {
            backgroundColor: 'rgba(23, 191, 99, 0.1)',
            color: 'rgb(23, 191, 99)'
        }
    },
    likeIcon: {
        '&:hover': {
            backgroundColor: 'rgba(224, 36, 94, 0.1)',
            color: 'rgb(224, 36, 94)',
        }
    },
    shareIcon: {
        '&:hover': {
            backgroundColor: 'rgba(29, 161, 222, 0.1)',
            color: 'rgb(29, 161, 222)'
        }
    },
}))

export default useStyles

