import React from "react";

import { Container, Grid } from "@mui/material";
import TourCard from "./components/Card/TourCard";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TourCard></TourCard>
        </Grid>
        <Grid item xs={3}>
          <TourCard></TourCard>
        </Grid>
        <Grid item xs={3}>
          <TourCard></TourCard>
        </Grid>
        <Grid item xs={3}>
          <TourCard></TourCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
