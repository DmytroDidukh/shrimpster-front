import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navbarList: {
        minWidth: 'fit-content',
        padding: 12,
        '& .MuiButtonBase-root': {
            borderRadius: 30,
            width: 'fit-content',
            '& span': {
                fontWeight: 'bold'
            }
        },
        '& .selected': {
            color: theme.palette.primary.main
        },
        '@media (max-width: 992px)': {
            '& .MuiListItemText-root': {
                display: 'none'
            },
            '& .MuiListItemIcon-root': {
                minWidth: 'auto'
            }
        }
    },

}))

export default useStyles;
