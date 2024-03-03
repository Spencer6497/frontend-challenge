import React from "react";
import { Grid } from "@mui/material";
import SearchBar from "../Common/Search";

type Props = {};

function FilterBar({}: Props) {
  return (
    <Grid container sx={{ padding: "1rem", borderBottom: "1px solid" }}>
      <Grid item>
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default FilterBar;
