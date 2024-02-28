import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
export default function Cards() {
  return (
    <Card s className="max-md:w-[100%] relative">
      <CardActionArea>
        <CardMedia  component={"img"} height={"250"} image={"https://test-saaj.vercel.app/static/media/slide1.3eb299e3ab97891c5a26.jpeg"} />
        <CardContent>
          <Typography style={{ fontFamily:` "Libre Baskerville", serif`}}  gutterBottom variant="h5" color={"blueviolet"} fontWeight={600} alignItems={"center"} textAlign={"center"} component="div">
           <h1 className="tracking-widest text-[#2f3d16]"> Lokesh & Pranjal - Jodhpur</h1>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <p style={{fontFamily:` "Mate SC", serif`}} className={`tracking-wider text-center`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            natus doloremque itaque mollitia laudantium architecto tempore ad</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
