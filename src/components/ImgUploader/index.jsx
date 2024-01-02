import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import upl from '../../assets/images/apiimages/folder-add.svg';

const ImageUploader = ({ name, onChange }) => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        setUploadedFile({
            name: file.name,
        });

        onChange(file);
    }, [onChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="picuploaderdiv">
            <input {...getInputProps()} name={name} />
            {uploadedFile ? (
                <div>
                    <h4>ფაილი :</h4>
                    <p>
                        {uploadedFile.name}
                    </p>
                </div>
            ) : (
                <>
                    {isDragActive ? (
                        <p>ჩააგდეთ ფაილი აქ ან აირჩიეთ ფაილი</p>
                    ) : null}
                    <div>
                        <img src={upl} alt="" />
                        <p style={{marginTop : '30px'}}>  ჩააგდეთ ფაილი აქ ან <span style={{fontWeight : 'bold'}}>აირჩიეთ ფაილი</span></p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageUploader;