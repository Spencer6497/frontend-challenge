import React from "react";
import { Grid, Button } from "@mui/material";
import SearchBar from "./Common/Search";

type Props = {};

function AppBar({}: Props) {
  return (
    <Grid
      container
      sx={{
        padding: "1rem",
        borderBottom: "1px solid",
        justifyContent: "flex-end",
      }}
    >
      <Grid item>
        <Button variant="contained">Login</Button>
      </Grid>
    </Grid>
  );
}

export default AppBar;
