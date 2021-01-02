import React from 'react';
import topnavStyle from './TopNavbar.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from '@material-ui/core/Fade';

function TopNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    

    return (
        <div className={topnavStyle.navbarTopnav}>
            <AppBar elevation={0}>
                <Toolbar className={topnavStyle.navbarSpacing}>
                    <div className={topnavStyle.flexSpaces}>
                        <div className={topnavStyle.projectTitle}>
                            <h3>Projects</h3>
                        </div>
                            
                        <div className={topnavStyle.navbarIcons}>
                            <a className={topnavStyle.notifyIcon}>
                                <i class="fas fa-bell"></i>
                            </a>
                            
                             <a aria-controls="user-menu" aria-haspopup="true" onClick={handleClick} className={topnavStyle.userProfileName}>
                                <div className={topnavStyle.userProfile}>Margot Alba</div>
                                <Avatar className={topnavStyle.circleImage} alt="User Image" src="/images/smile.jpg" />
                            </a>

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
                                        <i class="fas fa-home"></i>
                                    </ListItemIcon>
                                    <ListItemText primary="Setting"/>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon className={topnavStyle.userIconList}>
                                    <i class="fas fa-user"></i>
                                    </ListItemIcon>
                                    <ListItemText primary="Profile"/>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon className={topnavStyle.userIconList}>
                                    <i class="fas fa-envelope"></i>
                                    </ListItemIcon>
                                    <ListItemText primary="Message"/>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon className={topnavStyle.userIconList}>
                                    <i class="fas fa-power-off"></i>
                                    </ListItemIcon>
                                    <ListItemText primary="Logout"/>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopNavbar;