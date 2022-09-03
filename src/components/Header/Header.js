import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ["Ürünler", "Hakkımızda", "İletişim"];
const Header = () => {
 const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "black"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              sx={{
				width:"50%",
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                
                color: "inherit",
              }}
            >
              Yalçın Halı Mobilya
            </Typography>
            <FormControl sx={{ alignItems:"center", justifyContent:"center",marginRight:"auto" }}>
            <OutlinedInput placeholder="Arama.." sx={{borderRadius:"1rem", backgroundColor:"white",height:"2.4rem"}} />
        
             </FormControl>

            <Box sx={{ flexGrow: 1, display: {xs:'none', md:'flex'}, justifyContent:"flex-end", alignItems:"flex-end"
				, textAlign: "center",marginRight:"3rem"}}>
              {pages.map((page) => (
                <Button key={page} sx={{ my: 3, color: "white" }}>
                  {page}
                </Button>
              ))}
            </Box>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
