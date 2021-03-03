import React, {FC, ReactElement} from "react";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import sidebarStyles from './styles'

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

const Sidebar: FC = (): ReactElement => {
    const classes = sidebarStyles()

    return (
        <div className={classes.sidebar}>
            <div className={classes.searchField}>
                <IconButton type="submit"
                            className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search Shrimpster"
                    inputProps={{'aria-label': 'search google maps'}}
                />
            </div>
            <div className={classes.news}>
                <Typography variant='h6'>What's happening</Typography>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider />
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Spam" />
                    </ListItemLink>
                    <Divider />
                </List>
            </div>
            <div className={classes.toFollow}>
                <Typography variant='h6'>Who to follow</Typography>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider />
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Spam" />
                    </ListItemLink>
                    <Divider />
                </List>
            </div>
        </div>
    )
}

export default Sidebar
