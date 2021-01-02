import React from 'react';
import sidenavStyle from './SideNavbar.module.scss';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TopNavbar from '../../components/TopNavbar/TopNavbar';


function SideNavbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
   
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const ClickAwayListenerHandler = () => {
        if (mobileOpen) setMobileOpen(!mobileOpen);
    }

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
  

    return (
        <div className={sidenavStyle.navbarTopnav}>
            <AppBar 
                position="fixed" 
                className={clsx(sidenavStyle.toogleClick, 
                    {
                        [sidenavStyle.toogleExpand]: mobileOpen,
                    })}
                
                >
                <Toolbar>
                    <TopNavbar />
                </Toolbar>
            </AppBar>

            <ClickAwayListener onClickAway={ClickAwayListenerHandler}>
                <Drawer
                    variant="permanent"
                    className={clsx(sidenavStyle.drawer, {
                        [sidenavStyle.drawerOpen]: mobileOpen,
                        [sidenavStyle.drawerClose]: !mobileOpen,
                        })}
                        classes={{
                        paper: clsx({
                            [sidenavStyle.drawerOpen]: mobileOpen,
                            [sidenavStyle.drawerClose]: !mobileOpen,
                        }),
                    }}
                >

                <div className={sidenavStyle.logoContent}>
                    <div onClick={handleDrawerToggle} className={sidenavStyle.menuButton}>
                       <i class="fas fa-bars"></i>
                    </div>

                    <img className={sidenavStyle.logoImg} alt="User Image" src="/images/Grepsr-Logo.png" />

                </div>

                <List component="nav" aria-label="sidenavbar" className={sidenavStyle.sideNavIcon}>
                    <ListItem
                    className={sidenavStyle.sideNavButton}
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        >
                        <ListItemIcon>
                            <i class="fas fa-square"></i>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem
                    className={clsx(sidenavStyle.sideNavButton, sidenavStyle.sideNavSelected)}
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        >
                        <ListItemIcon>
                            <i class="fas fa-layer-group"></i>
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItem>
                    <ListItem
                    className={sidenavStyle.sideNavButton}
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                        >
                        <ListItemIcon>
                            <i class="fas fa-home"></i>
                        </ListItemIcon>
                        <ListItemText primary="Tasks" />
                    </ListItem>
                    <ListItem
                    className={sidenavStyle.sideNavButton}
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                        >
                        <ListItemIcon>
                            <i class="fas fa-file"></i>
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                    <ListItem
                    className={sidenavStyle.sideNavButton}
                        button
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                        >
                        <ListItemIcon className={sidenavStyle.plusIcon}>
                            <i class="fas fa-plus"></i>
                        </ListItemIcon>
                        <ListItemText primary="Add" />
                    </ListItem>
                    <ListItem
                    className={sidenavStyle.sideNavButton}
                        button
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                        >
                        <ListItemIcon className={sidenavStyle.squareIcon}>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
                </Drawer>
            </ClickAwayListener>
        </div>
    );
}

export default SideNavbar;