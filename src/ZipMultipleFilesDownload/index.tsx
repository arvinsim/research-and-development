import React from "react";
import { useForm } from "react-hook-form";

type TFormData = {
  files: Array<string>;
};

export function ZipMultipleFilesDownload() {
  const { register, handleSubmit } = useForm<TFormData>();
  const onSubmit = (data: TFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Download multiple files</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <input
              type="checkbox"
              id="king-arthur"
              value="/King Arthur.pdf"
              {...register("files")}
            />
            <label htmlFor="king-arthur">King Arthur.pdf</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="lord-of-the-rings"
              value="/Lord of the Rings.pdf"
              {...register("files")}
            />
            <label htmlFor="lord-of-the-rings">Lord of the Rings.pdf</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="harry-potter"
              value="/Harry Potter.pdf"
              {...register("files")}
            />
            <label htmlFor="harry-potter">Harry Potter.pdf</label>
          </li>
        </ul>
        <input type="submit" />
      </form>
    </div>
  );
}
