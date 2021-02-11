import React, {FC, ReactElement} from "react";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import sidebarStyles from './styles'

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
        </div>
    )
}

export default Sidebar
