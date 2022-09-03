import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const pages = ["Ürünler", "Hakkımızda", "İletişim"];
const Header = () => {
  return (
    <div>
      <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                
                color: "inherit",
              }}
            >
              Yalçın Halı Mobilya
            </Typography>
            <FormControl sx={{ width: '25ch',textAlign: "center",justifyContent:"flex-end", marginRight:"3rem" }}>
            <OutlinedInput placeholder="Arama.." sx={{borderRadius:"1rem", backgroundColor:"white",height:"2.4rem"}} />
        
             </FormControl>

            <Box sx={{ flexGrow: 1, display: "flex", textAlign: "center",justifyContent:"flex-end", marginRight:"3rem"}}>
              {pages.map((page) => (
                <Button key={page} sx={{ my: 3, color: "white" }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
