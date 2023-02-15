import { FormGroup } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";



export function CheckBoxField(name: string) {
  const {
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      example: "",
      exampleRequired: "",
    }
  });

  return (
    <FormGroup>
      <label>{name}</label>
      <input {...register("example")} defaultValue="test" />
      <input
        {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>Обязательное поле</p>}
      <input type="submit" />
      </FormGroup>
  );
}