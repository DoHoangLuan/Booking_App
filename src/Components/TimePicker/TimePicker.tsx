import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Stack, Tooltip, styled } from "@mui/material";

const ProSpan = styled("span")({
  display: "inline-block",
  height: "1em",
  width: "1em",
  verticalAlign: "middle",
  marginLeft: "0.3em",
  marginBottom: "0.08em",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(https://mui.com/static/x/pro.svg)",
});

function Label({
  componentName,
  valueType,
  isProOnly,
}: {
  componentName: string;
  valueType: string;
  isProOnly?: boolean;
}) {
  const content = <span>Chọn giờ</span>;

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a href="https://mui.com/x/introduction/licensing/#pro-plan">
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

interface ResponsiveTimePickersProps {
  onDateChange: (date: Date | null) => void;
  onTimeChange: (time: Date | null) => void;
}

const ResponsiveTimePickers: React.FC<ResponsiveTimePickersProps> = ({
  onTimeChange,
  onDateChange,
}) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="Chọn ngày">
            <DatePicker
              defaultValue={dayjs("2024-01-01")}
              onChange={(date) => onDateChange(date?.toDate() || null)}
            />
          </DemoItem>
          <DemoItem
            label={<Label componentName="TimePicker" valueType="time" />}
          >
            <TimePicker onChange={onTimeChange} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default ResponsiveTimePickers;
