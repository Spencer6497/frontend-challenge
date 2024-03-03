import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataContext } from "./Providers/DataProvider";
import {
  Stack,
  CircularProgress,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import SearchBar from "./Common/Search";
import { SearchContext } from "./Providers/SearchProvider";

function App() {
  const { data, loading } = useContext(DataContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  return (
    <Stack className="App">
      <Grid
        container
        sx={{
          padding: "1rem",
          borderBottom: "1px solid",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item>
          <Button variant="contained">Login</Button>
        </Grid>
      </Grid>
      {loading && <CircularProgress />}
    </Stack>
  );
}

export default App;
