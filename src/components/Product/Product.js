import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import mobilya from "../../assets/image/ewa-modern-koltuk-takımı.jpg";
import mobilya1 from "../../assets/image/nita-modern-koltuk-takımı.jpeg";
import mobilya2 from "../../assets/image/auro-koltuk-takımı.jpg";
import mobilya3 from "../../assets/image/Bella-koltuk-takımı.jpeg";
import mobilya4 from "../../assets/image/Capriss-koltuk-takımı.jpeg";
import mobilya5 from "../../assets/image/lounge-koltuk-takimi.jpg";
import mobilya6 from "../../assets/image/montego-koltuk-takımı.jpg";
import ProductImage from "../../assets/image/productGeneralPhoto.jpg";
import ChairIcon from "@mui/icons-material/Chair";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import DiningIcon from "@mui/icons-material/Dining";
import TvIcon from "@mui/icons-material/Tv";
import { Link } from "react-router-dom";
import mobilya7 from "../../assets/image/tvünitesi2.jpg"
import mobilya8 from "../../assets/image/yemekmasası3.jpeg"
import mobilya9 from "../../assets/image/yatakodası5.jpeg"
import mobilya10 from "../../assets/image/tvünitesi6.jpeg"
import mobilya11 from "../../assets/image/yemekmasası1.jpg"
import { Carousel } from "react-responsive-carousel";
const dataCategory = [
  {
    id: 1,
    categoryName: "Koltuk Takımı",
    avatarName: <ChairIcon />,
    path: "/KoltukTakimi",
  },
  {
    id: 2,
    categoryName: "Yemek Masaları",
    avatarName: <TableRestaurantIcon />,
    path: "/YemekMasalari",
  },
  {
    id: 3,
    categoryName: "Tv Üniteleri",
    avatarName: <TvIcon />,
    path:"/TVunitesi",
  },
  {
    id: 4,
    categoryName: "Yatak Odası Takımları",
    avatarName: <BedroomParentIcon />,
    path:"/YatakOdasi",
  },
  {
    id: 5,
    categoryName: "Schafer Ürünleri",
    avatarName: <DiningIcon />,
  },
];
const data = [
  {
    id:1,
    item: mobilya7
  },
  {
    id:2,
    item: mobilya8
  },
  {
    id:3,
    item: mobilya9
  },
  {
    id:4,
    item: mobilya10
  },
  {
    id:5,
    item: mobilya11
  },
];

const Product = () => {
  const [alignment, setAlignment] = React.useState('yeni');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <Grid container spacing={8} row={12} >
        <Grid item xs={4}>
          {dataCategory.map((item) => {
            return (
              <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>{item.avatarName}</Avatar>
                  </ListItemAvatar>
                  <Link to={item.path}>
                    <div sx={{ textAlign: "left" }}>
                      <ListItemText primary />
                      {item.categoryName}
                    </div>
                  </Link>
                </ListItem>
                <Divider />
              </List>
            );
          })}
          ;
        </Grid>
        
        <Grid item xs={4}  sx={{margin:"auto"}}>
          <img src={ProductImage} style={{ width: "50rem", height: "25rem" }} />
        </Grid>
      </Grid>
      <Divider />
      {/* <ToggleButtonGroup color="primary" value={alignment}  exclusive onChange={handleChange}>
        <ToggleButton variant="contained" value="yeni">Yeni Ürünler</ToggleButton>
        <ToggleButton variant="contained" value="kampanya">Kampanyalı Ürünler</ToggleButton>
      </ToggleButtonGroup> */}
      
    
    </div>
  );
};
export default Product;
