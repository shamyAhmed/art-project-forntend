import React, {useState} from 'react';
import FileInput from "./components/FileInput/FileInput"
import api from './client';
import './App.scss';

const App: React.FC = () => {
  const [file, setFile] = useState<File>();

  return (
    <div className="mainpage-container d-flex justify-content-center align-items-center flex-column">

      <div className="mainpage-container-fileinput">
         <FileInput
          onChange={(file) => {
            setFile(file);
          }}
         /> 
      </div>
      <p>{file ? file.name : "Choose an Image"}</p>
      <div 
        className='mainpage-container-fileinput-button'
        onClick={async () => {
            //todo: handle uploading the image here.
            const res = await api.get('/');
            console.log(res);
        }}
      >
          upload
      </div>
        
    </div>
  )
}

export default App
