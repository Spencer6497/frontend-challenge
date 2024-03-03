import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import SearchBar from "./Common/Search";

type Props = {};

function AppBar({}: Props) {
  return (
    <Grid
      container
      sx={{
        padding: "1rem",
        borderBottom: "1px solid",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Typography variant="h4">GovData</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained">Login</Button>
      </Grid>
    </Grid>
  );
}

export default AppBar;
