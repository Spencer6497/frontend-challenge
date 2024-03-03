import React, { useContext, useMemo } from "react";
import { Grid, Stack, Paper } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";
import { DataContext } from "../Providers/DataProvider";
import { SearchContext } from "../Providers/SearchProvider";
import FilterBar from "./FilterBar";

type Props = {};

function Dashboard({}: Props) {
  const { data, loading } = useContext(DataContext);
  const { searchTerm } = useContext(SearchContext);

  const filteredData = useMemo(
    () =>
      data.filter((data) =>
        data.department
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      ),
    [data, searchTerm]
  );

  return (
    <Grid container sx={{ padding: "2rem" }}>
      <Grid item md={6} sx={{ padding: "1rem" }}>
        <Stack gap={2}>
          <Paper>
            <BarChart
              yAxis={[
                {
                  scaleType: "band",
                  data: data.map((item) => item.department),
                },
              ]}
              series={[{ data: data.map((item) => item.datasets) }]}
              layout="horizontal"
              height={500}
              margin={{ left: 200 }}
            />
          </Paper>
          <Paper sx={{ padding: "2rem" }}>
            <PieChart
              series={[
                {
                  data: data.map((item, index) => ({
                    id: index,
                    value: item.datasets,
                    label: item.department,
                  })),
                },
              ]}
              margin={{ right: 200 }}
              height={500}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "top", horizontal: "right" },
                  labelStyle: {
                    textOverflow: "ellipsis",
                    width: "2rem",
                  },
                },
              }}
            />
          </Paper>
        </Stack>
      </Grid>
      <Grid item md={6} sx={{ padding: "1rem" }}>
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
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
            />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
