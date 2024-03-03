import React, {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { DataContext } from "./DataProvider";

interface SliderFilterContextProps {
  sliderRange: number[] | undefined;
  setSliderRange: (range: number[] | undefined) => void;
  min: number;
  max: number;
}

export const SliderFilterContext = createContext<SliderFilterContextProps>({
  sliderRange: undefined,
  setSliderRange: () => {},
  min: 0,
  max: 100000000,
});

export const SliderFilterProvider = ({ children }: PropsWithChildren) => {
  const { data } = useContext(DataContext);

  const { min, max } = useMemo(
    () => ({
      min: Math.min(...data.map((datum) => datum.datasets)),
      max: Math.max(...data.map((datum) => datum.datasets)),
    }),
    [data]
  );
  const [sliderRange, setSliderRange] = useState<number[] | undefined>([
    min,
    max,
  ]);

  return (
    <SliderFilterContext.Provider
      value={{ sliderRange, setSliderRange, min, max }}
    >
      {children}
    </SliderFilterContext.Provider>
  );
};
