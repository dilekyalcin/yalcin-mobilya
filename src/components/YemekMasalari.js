import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import mobilya from "../assets/image/yemekmasası1.jpg";
import mobilya1 from "../assets/image/yemekmasası2.jpg";
import mobilya2 from "../assets/image/yemekmasası3.jpeg";
import mobilya3 from "../assets/image/yemekmasası4.jpg";
import mobilya4 from "../assets/image/yemekmasası5.jpg";
import mobilya5 from "../assets/image/yemekmasası6.jpeg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const data = [
  {
    id: 1,
    sofaName: "Ewa Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya,
  },
  {
    id: 2,
    sofaName: "Nita Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya1,
  },
  {
    id: 3,
    sofaName: "Auro Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya2,
  },
  {
    id: 4,
    sofaName: "Capriss Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya3,
  },
  {
    id: 5,
    sofaName: "Lounge Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
  {
    id: 6,
    sofaName: "Montego Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya5,
  },
  {
    id: 7,
    sofaName: "Lounge Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
  {
    id: 8,
    sofaName: "Lounge Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
  {
    id: 9,
    sofaName: "Lounge Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
  {
    id: 10,
    sofaName: "Lounge Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
];

const yemekMasalari = () => {
  return (
    <div>
      <Grid container direction="row" spacing={2} sx={{ margin: "auto" }}>
        <Grid item>
          <OwlCarousel className="owl-theme" nav>
            {data.map((item) => {
              return (
                <div className="item">
                  <Card sx={{ width:"75%"}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.imagePath}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.sofaName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.sofaDesc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
          </OwlCarousel>
        </Grid>
      </Grid>
    </div>
  );
};
export default yemekMasalari;
