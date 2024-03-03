import React, { useContext } from "react";
import { SearchContext } from "../Providers/SearchProvider";
import TextField from "@mui/material/TextField";

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      label="Suche"
      value={searchTerm}
      onChange={handleSearchChange}
      variant="outlined"
    />
  );
};

export default SearchBar;
