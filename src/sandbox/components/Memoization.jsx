import { Typography } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import MyButton from "./MyButton";

export default function Memoization() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  const myLabelsPlus = useMemo(
    () => ({
      data: "+",
    }),
    []
  );

  const myLabelsMinus = useMemo(
    () => ({
      data: "-",
    }),
    []
  );
  return (
    <div>
      <Typography>{counter}</Typography>
      <MyButton label={myLabelsPlus} func={increment} />
      <MyButton label={myLabelsMinus} func={decrement} />
    </div>
  );
}
