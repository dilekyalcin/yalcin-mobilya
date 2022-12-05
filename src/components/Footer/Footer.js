import { Grid } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer-item" id="footer">
      <Grid
      
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
        <PhoneIcon></PhoneIcon>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
