import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`${API_URL}/current.json`, {
        params: {
          key: API_KEY,
          q: city,
        },
      });
      setWeather(response.data);
    } catch (error) {
      alert("City not found or error fetching weather data!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>
      <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          label="Enter city"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={fetchWeather}>
          Get Weather
        </Button>
      </Box>
      {weather && (
        <Card>
          <CardContent>
            <Typography variant="h5">{weather.location.name}</Typography>
            <Typography>Temperature: {weather.current.temp_c}°C</Typography>
            <Typography>Condition: {weather.current.condition.text}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default App;
