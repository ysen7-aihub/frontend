import React, { useCallback } from "react";
//import API from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const onDrop = useCallback(async acceptedFiles => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    const config = {
      header: {
        "content-type": "multipart/form-data"
      }
    };
    console.log("sending image file:", acceptedFiles[0]);

    await axios
      .post("http://13.124.127.167/diary/image/list/", formData, config)
      .then(res => {
        console.log(res);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const InputProps = {
    ...getInputProps(),
    multiple: false,
    accept: "image/gif, image/jpg, image/jpeg"
  };

  const RootProps = {
    ...getRootProps()
  };

  return (
    <div>
      <div {...RootProps} maxsize={100} multiple={false}>
        <input {...InputProps} />
        {isDragActive ? (
          <div></div>
        ) : (
          <div>
            <button>업로드</button>
          </div>
        )}
      </div>
      <Link to="./Result">
        <button>제출</button>
      </Link>
    </div>
  );
}
