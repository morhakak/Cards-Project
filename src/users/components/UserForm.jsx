import React, { memo } from "react";
import Form from "../../forms/components/Form";
import ROUTES from "../../routers/routeModel";
import Input from "../../forms/components/Input";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { func, object, string } from "prop-types";

function UserForm({
  onSubmit,
  onReset,
  validateForm,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) {
  return (
    <Form
      title={title}
      onSubmit={onSubmit}
      onReset={onReset}
      validateForm={validateForm}
      to={ROUTES.CARDS}
      styles={{ maxWidth: "800px" }}
    >
      <Input
        name="first"
        label="first name"
        error={errors.first}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="middle"
        label="middle name"
        error={errors.middle}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="last"
        label="last name"
        error={errors.last}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="password"
        label="password"
        type="password"
        error={errors.password}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="url"
        label="image url"
        error={errors.url}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />

      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="country"
        label="country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="city"
        label="city"
        error={errors.city}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Input
        name="street"
        label="street"
        error={errors.street}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="houseNumber"
        label="house Number"
        type="number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="zip"
        label="zip"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Grid item>
        <FormControlLabel
          onChange={(e) => {
            setData({ ...data, isBusiness: !!e.target.checked });
          }}
          name="isBusiness"
          control={<Checkbox value={data.isBusiness} color="primary" />}
          label="Signup as business"
        />
      </Grid>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onFormChange: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
  setData: func.isRequired,
};
export default memo(UserForm);
