import React, { useContext, useMemo } from "react";
import { Container } from "@mui/material";
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
    <Container sx={{ padding: "1rem" }}>
      {filteredData.map((item, i) => (
        <div key={i}>{item.department}</div>
      ))}
    </Container>
  );
}

export default Dashboard;
