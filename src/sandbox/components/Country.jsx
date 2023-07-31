import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Country() {
  const [myCountry, setMyCountry] = useState();

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setMyCountry(data[82].currentCountry.name.common);
    } catch (err) {}
  };
  return <div>{myCountry}</div>;
}
