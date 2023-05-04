import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropzoneForm: React.FC = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the dropped files
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''}`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here...</p>
            ) : (
                <p>Drag and drop files here or click to select files</p>
            )}
        </div>
    );
};

export default DropzoneForm;
