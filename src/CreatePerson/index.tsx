import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type TFormData = {
  name: string;
  gender: string;
  age: number;
};

export function CreatePerson() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(createPersonValidationSchema),
  });
  const onSubmit = (data: TFormData) => {
    setMessage(
      `Your name is ${data.name}. You are ${data.gender} and aged ${data.age}`
    );
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register("name")} />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          {...register("age", { min: 18, max: 99 })}
        />
        <div>{errors.age?.message}</div>
      </div>
      <div>
        <input type="submit" />
      </div>
      <div id="message">{message}</div>
    </form>
  );
}

const createPersonValidationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  gender: yup.string().required("Gender is required"),
  age: yup
    .number()
    .required("Age is required")
    .min(18, "Minimum Age is 18")
    .max(99, "Maximum Age is 99"),
});
