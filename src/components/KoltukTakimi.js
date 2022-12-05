import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  
  CardActionArea,
 
  Grid,
  
} from "@mui/material";
import mobilya from "../assets/image/ewa-modern-koltuk-takımı.jpg";
import mobilya1 from "../assets/image/Bella-koltuk-takımı.jpeg";
import mobilya2 from "../assets/image/nita-modern-koltuk-takımı.jpeg";
import mobilya3 from "../assets/image/auro-koltuk-takımı.jpg";
import mobilya4 from "../assets/image/Capriss-koltuk-takımı.jpeg";
import mobilya5 from "../assets/image/lounge-koltuk-takimi.jpg";
import mobilya6 from "../assets/image/montego-koltuk-takımı.jpg";
const data = [
    {
      id: 1,
      sofaName: "Ewa Koltuk Takımı",
      sofaDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
      imagePath: mobilya,
    },
    {
      id: 2,
      sofaName: "Nita Koltuk Takımı",
      sofaDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
      imagePath: mobilya2,
    },
    {
      id: 3,
      sofaName: "Auro Koltuk Takımı",
      sofaDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
      imagePath: mobilya3,
    },
    {
      id: 4,
      sofaName: "Capriss Koltuk Takımı",
      sofaDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
      imagePath: mobilya4,
    },
    {
      id: 5,
      sofaName: "Lounge Koltuk Takımı",
      sofaDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
      imagePath: mobilya5,
    },
    {
      id: 6,
      sofaName: "Montego Koltuk Takımı",
      sofaDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
      imagePath: mobilya6,
    },
  ];
 
  const koltukTakimi = () => {
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
export default koltukTakimi;