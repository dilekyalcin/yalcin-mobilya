import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Grid } from "@mui/material";
import mobilya from "../../assets/image/yemekmasası1.jpg";
import mobilya1 from "../../assets/image/yemekmasası2.jpg";
import mobilya2 from "../../assets/image/yemekmasası3.jpeg";
import mobilya3 from "../../assets/image/yemekmasası4.jpg";
import mobilya4 from "../../assets/image/yemekmasası5.jpg";
import mobilya5 from "../../assets/image/yemekmasası6.jpeg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

const items = data.map((item) => {
  return (
    <SwiperSlide style={{ padding: "3rem 3rem"}}>
      <Card sx={{ width: "75%", height:"auto" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={item.imagePath} />
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
    </SwiperSlide>
  );
});

const NewItem = () => {
  return (
    <div>
      <h1>En Yeniler</h1>
      <Grid container direction="row" spacing={2} sx={{ margin: "auto" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
        //   spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {items}
        </Swiper>
      </Grid>
      <Divider></Divider>
    </div>
  );
};
export default NewItem;
