import React, { useContext, useMemo } from "react";
import { Grid, Stack, Paper, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DataContext } from "../Providers/DataProvider";
import { SearchContext } from "../Providers/SearchProvider";
import FilterBar from "./FilterBar";
import Chart from "react-google-charts";
import { SliderFilterContext } from "../Providers/SliderFilterProvider";

type Props = { tabIndex: number };

function Dashboard({ tabIndex }: Props) {
  const dashboardContent = {
    0: <DataTable />,
    1: <Charts />,
  }[tabIndex];

  return (
    <Container sx={{ padding: "2rem" }}>
      {dashboardContent}
      <Grid item md={6} sx={{ padding: "1rem" }}></Grid>
    </Container>
  );
}

function DataTable() {
  const { data, loading } = useContext(DataContext);
  const { searchTerm } = useContext(SearchContext);
  const { sliderRange } = useContext(SliderFilterContext);
  const filteredData = useMemo(
    () =>
      data
        .filter((data) =>
          data.department
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        )
        .filter((data) => {
          if (sliderRange && sliderRange[0] > 0 && sliderRange[1] > 0) {
            return (
              data.datasets >= sliderRange[0] && data.datasets <= sliderRange[1]
            );
          }
          return true;
        }),
    [data, searchTerm, sliderRange]
  );

  return (
    <Paper sx={{ padding: "1.5rem" }}>
      <Stack>
        <FilterBar />
        <DataGrid
          loading={loading}
          rows={filteredData.map((datum, i) => ({
            id: i,
            department: datum.department,
            description: datum.description,
            datasets: datum.datasets,
          }))}
          columns={[
            {
              flex: 1,
              field: "department",
              headerName: "Department Name",
              editable: false,
              disableColumnMenu: true,
            },
            {
              field: "description",
              headerName: "Description",
              flex: 1,
              disableColumnMenu: true,
            },
            {
              field: "datasets",
              headerName: "# of Datasets",
              flex: 1,
              disableColumnMenu: true,
            },
          ]}
          style={{ minHeight: 250 }}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
        />
      </Stack>
    </Paper>
  );
}

function Charts() {
  const { data } = useContext(DataContext);
  const chartData = useMemo(
    () => [
      ["Department", "Datasets"],
      ...data.map((datum) => [datum.department, datum.datasets]),
    ],
    [data]
  );
  return (
    <Stack gap={2}>
      <Paper sx={{ padding: "2rem" }}>
        <Chart
          height={400}
          width="100%"
          chartType="PieChart"
          data={chartData}
        />
      </Paper>
      <Paper sx={{ padding: "2rem" }}>
        <Chart
          chartType="Bar"
          data={chartData}
          height={500}
          width="100%"
          options={{
            bars: "horizontal",
          }}
        />
      </Paper>
    </Stack>
  );
}

export default Dashboard;
