import React, { useContext, useMemo } from "react";
import { Grid, Stack, Paper } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { DataContext } from "../Providers/DataProvider";
import { SearchContext } from "../Providers/SearchProvider";

type Props = {};

function Dashboard({}: Props) {
  const { data } = useContext(DataContext);
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
      <Grid item md={6}>
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
      <Grid item md={6}>
        {filteredData.map((item, i) => (
          <div key={i}>{item.department}</div>
        ))}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
