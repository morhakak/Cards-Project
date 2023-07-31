import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  let initialCounter;

  if (JSON.parse(localStorage.getItem("counter")) != null) {
    initialCounter = JSON.parse(localStorage.getItem("counter"));
  } else initialCounter = 0;

  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    return () => {
      localStorage.setItem("counter", JSON.stringify(counter));
    };
  }, [counter]);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <Button onClick={handleInc}>+</Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
