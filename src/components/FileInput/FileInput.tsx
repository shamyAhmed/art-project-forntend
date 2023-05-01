import React, { useRef } from 'react';
import './FileInput.scss';


interface FileInputProps{
    onChange?: (file: File) => void
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return(
        <div 
            className='file-input-container d-flex justify-content-center align-items-center'
            onClick={() => {
                if(inputRef.current){
                    inputRef.current.click();
                }
            }}
        >
            <input 
                className='file-input-container-fileInput'
                onChange={({target: {files}}) => {
                    if(files){
                        onChange? onChange(files[0]) : null
                    }
                    
                }} 
                type="file" 
                accept='image/*' 
                ref={inputRef} 
            />
        </div>
    )
};


export default FileInput;