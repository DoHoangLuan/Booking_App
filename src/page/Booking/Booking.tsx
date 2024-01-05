import { TextField, Box, Autocomplete, Button } from "@mui/material";
import InputSlider from "../../Components/InputSlider/InputSlider";
import TimePicker from "../../Components/TimePicker/TimePicker";
import SendIcon from "@mui/icons-material/Send";
import "./style.css";
import { ChangeEvent, useState } from "react";

interface Restaurant {
  label: string;
}

const Booking = () => {
  const [nameBooking, setNameBooking] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Restaurant | null>(
    null
  );
  const [sliderValue, setSliderValue] = useState<number>(1);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const listRestaurant: Restaurant[] = [
    { label: "restaurant1" },
    { label: "restaurant2" },
  ];

  const handleInputNameBooking = (e: ChangeEvent<HTMLInputElement>) => {
    setNameBooking(e.target.value);
  };

  const handleInputLocation = (
    _event: React.ChangeEvent<HTMLInputElement>,
    value: Restaurant | null
  ) => {
    setSelectedLocation(value);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handleSubmit = () => {
    console.log("Name Booking:", nameBooking);
    console.log("Selected Location:", selectedLocation);
    console.log("Slider Value:", sliderValue);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  return (
    <>
      <div className="booking">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30vw" },
          }}
          noValidate
          autoComplete="off"
          justifyContent={"center"}
          display={"flex"}
          textAlign={"center"}
        >
          <div className="booking_background">
            <TextField
              value={nameBooking}
              onChange={(e) => {
                handleInputNameBooking(e);
              }}
              id="outlined-basic"
              label="Tên người đặt"
              variant="outlined"
              className="booking_input"
            />
            <div id="location" className="booking_input">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                className="booking_input"
                options={listRestaurant}
                getOptionLabel={(option) => option.label}
                value={
                  selectedLocation &&
                  listRestaurant.find(
                    (restaurant) => restaurant.label === selectedLocation.label
                  )
                }
                onChange={handleInputLocation}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Chọn địa điểm" />
                )}
              />
            </div>
            <div id="slider" className="booking_input">
              <InputSlider value={sliderValue} onChange={handleSliderChange} />
            </div>
            <TimePicker
              onDateChange={(date) => setSelectedDate(date)}
              onTimeChange={(time) => setSelectedTime(time)}
            />
            <div>
              <Button
                className="booking_btn"
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Booking;
