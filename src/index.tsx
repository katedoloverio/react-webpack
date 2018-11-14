import * as React from "react";
import * as ReactDOM from "react-dom";
import Dropzone from 'react-dropzone';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Dropzone accept=".jpeg,.png">
      {({ isDragActive, isDragReject }) => {
        if (isDragActive) {
          return "All files will be accepted";
        }
        if (isDragReject) {
          return "Some files will be rejected";
        }
        return "Dropping some files here...";
      }}
    </Dropzone>,
    document.getElementById("example")

);

