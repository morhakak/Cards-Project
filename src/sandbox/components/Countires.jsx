import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function Countires() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
    } catch (err) {}
  };
  return (
    <div>
      {countries
        ? countries.map((Country) => (
            <Box
              display="flex"
              sx={{ justifyContent: "space-between" }}
              key={JSON.stringify(Country)}
            >
              <Avatar
                src={Country.flags.png}
                alt={`${Country.name.common} flag`}
              />
              <Typography sx={{ width: "150px" }}>
                {Country.name.common}
              </Typography>
              <Typography sx={{ width: "150px" }}>
                {Country.capital?.[0]}
              </Typography>
            </Box>
          ))
        : null}
    </div>
  );
}
