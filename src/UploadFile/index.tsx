import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./UploadFile.css";

import { uploadAxios } from "./axios.config";

function UploadFile() {
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);

      // We assume we are only uploading one file
      const file = acceptedFiles[0];
      let formData = new FormData();
      formData.append("file", file);

      const config = {
        onUploadProgress: function (progressEvent: ProgressEvent) {
          setUploadPercent(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      };

      uploadAxios.post("/uploadfile", formData, config);
    },
    [uploadAxios]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
      {uploadPercent > 0 && <span>{uploadPercent}% uploaded</span>}
    </div>
  );
}

export default UploadFile;
