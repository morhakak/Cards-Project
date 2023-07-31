import React from "react";
import { useParams } from "react-router-dom";

export default function CardDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <div>welcome to card details page for card {id}</div>
      <div>Hello</div>
    </>
  );
}
