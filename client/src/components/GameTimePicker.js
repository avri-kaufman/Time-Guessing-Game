import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

const GameTimePicker = ({ time, onTimeChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <StaticTimePicker
          defaultValue={dayjs("2022-04-17T10:10")}
          value={time}
          onChange={(newValue) => onTimeChange(newValue)}
          componentsProps={{ actionBar: { actions: [] } }}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default GameTimePicker;
