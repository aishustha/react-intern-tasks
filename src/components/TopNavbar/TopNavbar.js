import React from 'react';
import topnavStyle from './TopNavbar.module.scss';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import HomeIcon from '@material-ui/icons/Home';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import LayersIcon from '@material-ui/icons/Layers';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function TopNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const ClickAwayListenerHandler = () => {
        if (mobileOpen) setMobileOpen(!mobileOpen);
    }
  


    return (
        <div className={topnavStyle.navbarTopnav}>
            <AppBar 
                position="fixed" 
                className={clsx(topnavStyle.toogleClick, 
                    {
                        [topnavStyle.toogleExpand]: mobileOpen,
                    })}
                
                >
                <Toolbar>
                    <div className={topnavStyle.flexSpaces}>
                        <Typography className={topnavStyle.navbarBrand} variant="h6" noWrap>
                            Projects
                        </Typography>
                            <div className={topnavStyle.navbarIcons}>
                                <IconButton aria-label="show 1 new notification" color="inherit">
                                    <Badge badgeContent={1} color="secondary" className={topnavStyle.notifyIcon}>
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                
                                <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
                                    <div className={topnavStyle.userProfileName}> Margot Alba </div> 
                                    <Avatar className={topnavStyle.circleImage} alt="User Image" src="/images/smile.jpg" />
                                </Button>

                                <Menu 
                                    className={topnavStyle.userMenuList}
                                    id="user-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                    elevation={3}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon className={topnavStyle.userIconList}>
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Setting"/>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon className={topnavStyle.userIconList}>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Profile"/>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon className={topnavStyle.userIconList}>
                                            <EmailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Message"/>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon className={topnavStyle.userIconList}>
                                            <PowerSettingsNewIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Logout"/>
                                </MenuItem>
                                </Menu>
                            </div>
                        </div>
                </Toolbar>
            </AppBar>

            <ClickAwayListener onClickAway={ClickAwayListenerHandler}>
            <Drawer
                variant="permanent"
            
                className={clsx(topnavStyle.drawer, {
                    [topnavStyle.drawerOpen]: mobileOpen,
                    [topnavStyle.drawerClose]: !mobileOpen,
                    })}
                    classes={{
                    paper: clsx({
                        [topnavStyle.drawerOpen]: mobileOpen,
                        [topnavStyle.drawerClose]: !mobileOpen,
                    }),
                }}
            >

                <div>
                    <IconButton 
                        onClick={handleDrawerToggle} 
                        className={topnavStyle.menuButton}
                        color="secondary"
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                
                <List className={topnavStyle.sideNavIcon}>
                {['Dashboard'].map((text) => (
                    <ListItem button key={text}>
                    <ListItemIcon><StopRoundedIcon/></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}

                {['Projects'].map((text) => (
                    <ListItem button key={text}>
                    <ListItemIcon><LayersIcon/></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                
                {['Tasks'].map((text) => (
                    <ListItem button key={text}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                
                {['Dashboard'].map((text) => (
                    <ListItem button key={text}>
                    <ListItemIcon><InsertDriveFileIcon/></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
               
            </Drawer>
            </ClickAwayListener>
        </div>
    );
}

export default TopNavbar;