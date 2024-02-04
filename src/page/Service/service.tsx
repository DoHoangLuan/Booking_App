import { useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

import StarIcon from "@mui/icons-material/Star";

interface Product {
  _id: string;
  thumbnail: string;
  name: string;
  star: number;
  price: number;
}

const FAKE_DATA_PRODUCTS: Product[] = [
  {
    _id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Khách sạn test 1",
    price: 12000000,
    star: 5,
  },
  {
    _id: "2",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Khách sạn test 2",
    price: 12000000,
    star: 5,
  },
  {
    _id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Khách sạn test 3",
    price: 12000000,
    star: 5,
  },
  {
    _id: "4",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Khách sạn test 4",
    price: 12000000,
    star: 5,
  },
];

const Service = () => {
  const [city, setCity] = useState("*");
  const [star, setStar] = useState("*");
  const [sort, setSort] = useState("*");

  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  const handleChangeStar = (event: SelectChangeEvent) => {
    setStar(event.target.value);
  };

  const handleChangeSort = (event: SelectChangeEvent) => {
    setStar(event.target.value);
  };

  return (
    <Container sx={{ padding: "30px 0" }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "24px",
            textAlign: "center",
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          Nhà hàng tốt nhất
        </Typography>
        <Divider></Divider>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              padding: "12px 0",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Bộ lọc
            </Typography>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel>Thành phố</InputLabel>
              <Select
                value={city}
                label="Thành phố"
                onChange={handleChangeCity}
              >
                <MenuItem value="*">Tất cả</MenuItem>
                <MenuItem value="HCM">Hồ Chí Minh</MenuItem>
                <MenuItem value="DN">Đà Nẵng</MenuItem>
                <MenuItem value="VT">Vũng Tàu</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel>Số sao</InputLabel>
              <Select value={star} label="Số sao" onChange={handleChangeStar}>
                <MenuItem value="*">Tất cả</MenuItem>
                <MenuItem value={1}>⭐</MenuItem>
                <MenuItem value={2}>⭐⭐</MenuItem>
                <MenuItem value={3}>⭐⭐⭐</MenuItem>
                <MenuItem value={4}>⭐⭐⭐⭐</MenuItem>
                <MenuItem value={5}>⭐⭐⭐⭐⭐</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>Lọc theo</InputLabel>
            <Select value={city} label="Thành phố" onChange={handleChangeCity}>
              <MenuItem value="*">A-Z</MenuItem>
              <MenuItem value="VT">Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={2}>
          {/* Item */}
          {FAKE_DATA_PRODUCTS.map((product) => (
            <Grid key={product._id} item xs={3}>
              <Box
                sx={{
                  padding: "12px",
                  borderRadius: "12px",
                  boxShadow: "0 0 4px 0 rgba(0,0,0,0.2)",
                }}
              >
                <Box sx={{ borderRadius: "inherit" }}>
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Thumbnail"
                    style={{ borderRadius: "inherit" }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", fontSize: "20px", mb: 1 }}
                  >
                    {product.name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {[...Array(product.star)].map((s, index) => (
                      <StarIcon
                        key={index}
                        color="warning"
                        sx={{ cursor: "pointer" }}
                      ></StarIcon>
                    ))}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        color: "red",
                        textAlign: "center",
                      }}
                    >
                      {product.price} VNĐ
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Service;
