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
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Paper,
  Typography,
} from "@mui/material";
import TocIcon from "@mui/icons-material/Toc";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchBar from "./Common/Search";
import { SearchContext } from "./Providers/SearchProvider";
import AppBar from "./AppBar";
import Dashboard from "./Dashboard/Dashboard";
import FilterBar from "./Dashboard/FilterBar";

function App() {
  const { loading } = useContext(DataContext);
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Stack className="App">
      <AppBar />d
      <Grid container>
        <Grid item md={2}>
          <Drawer {...{ tabIndex, setTabIndex }} />
        </Grid>
        <Grid
          item
          md={10}
          aria-describedby="loading-spinner"
          aria-busy={loading}
        >
          {loading ? (
            <CircularProgress id="loading-spinner" />
          ) : (
            <Dashboard {...{ tabIndex }} />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}

function Drawer({
  tabIndex,
  setTabIndex,
}: {
  tabIndex: number;
  setTabIndex: (index: number) => void;
}) {
  return (
    <Paper>
      <List>
        {["Table", "Charts"].map((text, index) => {
          const icon = {
            0: <TocIcon />,
            1: <BarChartIcon />,
          }[index];

          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={tabIndex === index}
                onClick={() => setTabIndex(index)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}

export default App;
