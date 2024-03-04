import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./Search";
import { SearchContext } from "../Providers/SearchProvider";

describe("SearchBar", () => {
  it("should update the search query when the input value changes", () => {
    let searchValue = "";
    let setSearchValue = (val: string) => (searchValue = val);
    render(
      <SearchContext.Provider
        value={{
          searchTerm: searchValue,
          setSearchTerm: setSearchValue as any,
        }}
      >
        <SearchBar />
      </SearchContext.Provider>
    );
    const inputElement = screen.getByLabelText("Suche");

    fireEvent.change(inputElement, { target: { value: "example" } });

    expect(searchValue).toBe("example");
  });
});
