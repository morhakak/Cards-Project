import Joi from "joi";
import React from "react";
import useForm from "./hooks/useForm";
import { Container } from "@mui/material";
import Form from "./components/Form";
import Input from "./components/Input";
import ROUTES from "../routers/routeModel";

export default function TestForm() {
  const INITAL_FORM = {
    first: "",
    last: "",
  };

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).max(7).required(),
  };
  const handleSubmit = (data) => console.log(data);
  const { data, errors, ...rest } = useForm(INITAL_FORM, schema, handleSubmit);
  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="My form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={rest.validateForm}
        to={ROUTES.SANDBOX}
      >
        <Input
          label={"first name"}
          name={"first"}
          data={data}
          error={errors.first}
          onChange={rest.handleChange}
        />
        <Input
          label={"last name"}
          name={"last"}
          data={data}
          error={errors.last}
          onChange={rest.handleChange}
        />
      </Form>
    </Container>
  );
}
