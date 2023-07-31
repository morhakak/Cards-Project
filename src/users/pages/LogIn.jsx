import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routers/routeModel";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/intialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/lolginSchema";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { useTheme } from "../../provider/ThemeProvider";

export default function LogIn() {
  const { user } = useUser();
  const { handleLogin } = useUsers();
  const { isDark } = useTheme();

  const { data, errors, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  if (user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: isDark ? "#e3f2fd" : "#333333",
      }}
    >
      <Form
        title="Login Form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={rest.validateForm}
        to={ROUTES.ROOT}
      >
        <Input
          label={"email"}
          name={"email"}
          data={data}
          error={errors.email}
          onChange={rest.handleChange}
        />
        <Input
          label={"password"}
          name={"password"}
          data={data}
          error={errors.password}
          onChange={rest.handleChange}
          type="password"
        />
      </Form>
    </Container>
  );
}
