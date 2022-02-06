import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface TourCardProps {}

function TourCard({}: TourCardProps) {
  return (
    <Card elevation={3} sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image="images/leaf.jpg"
        alt="Canada mapple leaf"
      />
      <CardContent>
        <Typography component="h2" variant="h6">
          Mapple Leaf
        </Typography>
        <Typography>B</Typography>
      </CardContent>
    </Card>
  );
}

export default TourCard;
