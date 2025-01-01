import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

const GameTimePicker = ({ onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <StaticTimePicker
          defaultValue={dayjs("2022-04-17T10:10")}
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
          onAccept={(newValue) => {
            if (onTimeChange && newValue) {
              onTimeChange(newValue.format("HH:mm"));
            }
          }}
          componentsProps={{ actionBar: { actions: [] } }}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default GameTimePicker;
