import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleHome = () => {
        navigate("/");
    };
    const handleUsers = () => {
        navigate("/usuarios");
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MISUPERAPP
                        </Typography>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Button onClick={handleHome} sx={{ color: 'black', '&:hover': { backgroundColor: '#e0e0e0' } }}>Home</Button>
                                <Button onClick={handleUsers} sx={{ color: 'black', '&:hover': { backgroundColor: '#e0e0e0' } }}>Usuarios</Button>
                            </Menu>
                        </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        ></Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 2 }}>
                            <Button onClick={handleHome} sx={{ color: 'white', '&:hover': { backgroundColor: 'blue' } }}>Home</Button>
                            <Button onClick={handleUsers} sx={{ color: 'white', '&:hover': { backgroundColor: 'blue' } }}>Usuarios</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
