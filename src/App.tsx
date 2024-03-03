import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.scss";
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
import AppBar from "./AppBar";
import Dashboard from "./Dashboard/Dashboard";
import FilterBar from "./Dashboard/FilterBar";

function App() {
  const { loading } = useContext(DataContext);
  return (
    <Stack className="App">
      <AppBar />
      {loading ? <CircularProgress /> : <Dashboard />}
    </Stack>
  );
}

export default App;
