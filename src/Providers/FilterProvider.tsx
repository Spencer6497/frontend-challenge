import React, { createContext, useState, PropsWithChildren } from "react";

interface Filter {
  // Define the properties of your Filter data type here
}

interface FilterContextProps {
  filter: Filter | null;
  setFilter: (filter: Filter | null) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  filter: null,
  setFilter: () => {},
});

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<Filter | null>(null);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
