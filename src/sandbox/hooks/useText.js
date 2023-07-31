import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routeModel";

export default function useText(initialText) {
  const [text, setText] = useState(initialText);
  const navigate = useNavigate();

  const updateText = (event) => {
    setText(event.target.value);
  };

  const resetText = () => {
    setText(initialText);
  };

  const cancelText = () => {
    navigate(ROUTES.ROOT);
  };

  const submitText = () => {
    console.log(`Sumbitted text: ${text}`);
  };
  return { text, updateText, resetText, cancelText, submitText, initialText };
}
