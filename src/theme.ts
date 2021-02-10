// @ts-nocheck
import {createMuiTheme} from "@material-ui/core";
import {red} from '@material-ui/core/colors'


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ],
    },
    palette: {
        type: "dark",
        primary: {
            main: '#BC4123',
            dark: '#a53014',
            contrastText: '#fff'
        },
        secondary: {
            main: '#463940'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#0B172A'
        }
    },
    shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                margin: 3,
                fontWeight: 600
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20
            },
            outlinedPrimary: {
                borderColor: '#BC4123'
            }
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px'
                },
                '&:before': {
                    borderColor: '#fff',
                    borderBottomWidth: '2px'
                },
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)'
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
                backgroundColor: '#0B172A',
                color: '#fff'
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800
                },
                '& button': {
                    padding: 8,
                    marginRight: 20
                }
            }
        }
    }
})

export default theme;
