import React, {FC, ReactElement} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {NAVBAR_LIST} from "../../config";
import navbarStyles from './styles'

const Navbar: FC = (): ReactElement => {
    const classes = navbarStyles()

    return (
        <List component="nav" aria-label="main mailbox folders" className={classes.navbarList}>
            <ListItem button>
                <ListItemIcon>
                    <img style={{width: 26}} src="https://i.imgur.com/YJookK1.png" alt="Shrimpster"/>
                </ListItemIcon>
            </ListItem>
            {
                NAVBAR_LIST.map(item => (
                    <ListItem button key={item.name}
                              className={item.name.toLowerCase() === 'router' ? 'selected' : ''}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                    </ListItem>
                ))
            }

        </List>
    )
}

export default Navbar
