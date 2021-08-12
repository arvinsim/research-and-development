import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import heic2any from "heic2any";

import "./UploadFile.css";
import { uploadAxios } from "./axios.config";

function UploadFile() {
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        if (acceptedFiles.length === 0) {
          throw new Error("There are no files to upload");
        }

        // We assume we are only uploading one file
        const file = acceptedFiles[0];
        console.log(file);

        let processedFile;
        if (file.type === "image/heic") {
          // const reader = new FileReader();
          processedFile = heic2any({ blob: file });
        } else {
          processedFile = file;
        }

        let formData = new FormData();
        formData.append("file", processedFile);

        const config = {
          onUploadProgress: function (progressEvent: ProgressEvent) {
            setUploadPercent(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          },
        };

        await uploadAxios.post("/uploadfile", formData, config);
      } catch (error) {
        console.log(error);
        setMessage(error.message);
      }
    },
    [uploadAxios]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/heic",
  });

  return (
    <div>
      <div className="upload-file-container" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div>{uploadPercent > 0 && <span>{uploadPercent}% uploaded</span>}</div>
      <div>{message}</div>
    </div>
  );
}

export default UploadFile;
