import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import mobilya from "../assets/image/yatakodası1.jpg";
import mobilya1 from "../assets/image/yatakodası2.jpg";
import mobilya2 from "../assets/image/yatakodası3.jpg";
import mobilya3 from "../assets/image/yatakodası4.jpg";
import mobilya4 from "../assets/image/yatakodası5.jpeg";
import mobilya5 from "../assets/image/yatakodası6.jpg";

const data = [
  {
    id: 1,
    sofaName: "Mantis Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya,
  },
  {
    id: 2,
    sofaName: "Lion Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya1,
  },
  {
    id: 3,
    sofaName: "Auro Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya2,
  },
  {
    id: 4,
    sofaName: "Malta Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya3,
  },
  {
    id: 5,
    sofaName: "Cross Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
  {
    id: 6,
    sofaName: "Prizma Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya5,
  },
];

const Yatakodasi = () => {
  return (
    <div>
      <Grid container direction="row" spacing={2} sx={{ margin: "auto" }}>
        {data.map((item) => {
          return (
            <Grid item md={3}>
              <Card sx={{ maxWidth: 345 }}>
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
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Yatakodasi ;
