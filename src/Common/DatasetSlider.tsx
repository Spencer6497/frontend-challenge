import { Slider, Stack, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { SliderFilterContext } from "../Providers/SliderFilterProvider";

function DatasetSlider() {
  const { sliderRange, min, max, setSliderRange } =
    useContext(SliderFilterContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderRange(newValue as number[]);
  };
  return (
    <Stack>
      <Typography variant="caption" textAlign={"left"}>
        # of Datasets
      </Typography>
      <Slider
        value={sliderRange}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        getAriaLabel={() => "# of Datasets"}
        onChange={handleChange}
        sx={{ display: "flex", flexShrink: 1 }}
      />
    </Stack>
  );
}

export default DatasetSlider;
