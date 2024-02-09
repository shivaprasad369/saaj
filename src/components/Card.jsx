import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
export default function Cards() {
  return (
    <Card s className="max-md:w-[100%]">
      <CardActionArea>
        <CardMedia  component={"img"} height={"250"} image={"http://localhost:3000/static/media/slide1.3eb299e3ab97891c5a26.jpeg"} />
        <CardContent>
          <Typography gutterBottom variant="h5" color={"blueviolet"} fontWeight={600} alignItems={"center"} textAlign={"center"} component="div">
            Lokesh & Pranjal - Jodhpur
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            natus doloremque itaque mollitia laudantium architecto tempore ad
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
