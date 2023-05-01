import React, {useState} from 'react';
import FileInput from "./components/FileInput/FileInput"
import './App.scss';

const App: React.FC = () => {
  const [file, setFile] = useState<File>();
  return (
    <div className="mainpage-container">

      <div className="mainpage-container-fileinput">
         <FileInput
          onChange={(file) => {
            setFile(file);
          }}
         /> 
      </div>
      <p>{file ? file.name : "Choose an Image"}</p>

    </div>
  )
}

export default App
