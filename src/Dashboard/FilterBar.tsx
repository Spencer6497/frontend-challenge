import React from "react";
import { Box, Grid } from "@mui/material";
import SearchBar from "../Common/Search";
import DatasetSlider from "../Common/DatasetSlider";

function FilterBar() {
  return (
    <Grid
      container
      sx={{
        paddingBottom: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item md={4} sx={{ display: "flex", justifyContent: "left" }}>
        <SearchBar />
      </Grid>
      <Grid item md={8}>
        <DatasetSlider />
      </Grid>
    </Grid>
  );
}

export default FilterBar;
