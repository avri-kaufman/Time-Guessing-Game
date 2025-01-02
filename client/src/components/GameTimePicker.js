import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

const GameTimePicker = ({ time, onTimeChange }) => {
  const handleTimeChange = (newValue) => {
    // Format time as HH:mm:ss
    const formattedTime = newValue.format("HH:mm:ss");
    onTimeChange(formattedTime);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <StaticTimePicker
          defaultValue={dayjs()}
          value={time ? dayjs(`2024-01-01T${time}`) : null}
          onChange={handleTimeChange}
          componentsProps={{ actionBar: { actions: [] } }}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default GameTimePicker;
