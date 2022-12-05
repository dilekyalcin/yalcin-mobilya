import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Grid } from "@mui/material";
import mobilya from "../../assets/image/yemekmasası1.jpg";
import mobilya1 from "../../assets/image/tvünitesi3.jpg";
import mobilya2 from "../../assets/image/yatakodası6.jpg";
import mobilya3 from "../../assets/image/yemekmasası3.jpeg";
import mobilya4 from "../../assets/image/yatakodası2.jpg";
import mobilya5 from "../../assets/image/tvünitesi5.jpg";
import mobilya6 from "../../assets/image/yatakodası4.jpg";
import mobilya7 from "../../assets/image/yemekmasası6.jpeg";
import mobilya8 from "../../assets/image/tvünitesi1.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

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
    sofaName: "Auro Tv Ünitesi",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya1,
  },
  {
    id: 3,
    sofaName: "Prizma Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya2,
  },
  {
    id: 4,
    sofaName: "Auro Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya3,
  },
  {
    id: 5,
    sofaName: "Lion Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya4,
  },
  {
    id: 6,
    sofaName: "Cross Tv Ünitesi",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya5,
  },
  {
    id: 7,
    sofaName: "Malta Yatak Odası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya6,
  },
  {
    id: 8,
    sofaName: "Montego Yemek Masası",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya7,
  },
  {
    id: 9,
    sofaName: "Mantis TV Ünitesi",
    sofaDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt molestiae pariatur nemo velit laudantium aliquam!",
    imagePath: mobilya8,
  },
  
];

const items = data.map((item) => {
  return (
    <div >
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
    </div>
  );
});

const NewItem = () => {
  return (
    <div>
      <h1>En Yeniler</h1>
      <Grid container direction="row" spacing={2} sx={{ margin: "auto" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
        //   spaceBetween={50}
          navigation
          autoplay={{delay:1000}}
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
