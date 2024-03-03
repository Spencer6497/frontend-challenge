"use client";
import React, { PropsWithChildren } from "react";

export type Data = {
  department: string;
  description: string;
  datasets: number;
};

export const DataContext = React.createContext<{
  data: Data[];
  loading: boolean;
}>({ data: [], loading: true });

const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = React.useState<Data[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/backend-response.json"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
