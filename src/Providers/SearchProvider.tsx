import React, { createContext, useState, PropsWithChildren } from "react";

export const SearchContext = createContext<{
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}>({
  searchTerm: "",
  setSearchTerm: () => {},
});

const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
