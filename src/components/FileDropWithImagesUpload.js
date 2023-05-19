import { useState, useEffect } from "react";
import FileDrop from "./FileDrop";

const FileDropWithImagesUpload = (WrappedComponent) => {
  const WithImagesUpload = (props) => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (files?.length > 0) {
        handleUpload();
      }
    }, [files]);

    const handleUpload = async () => {
      const images = [];
      console.log("files", files);

      await Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.file);

            reader.onload = async () => {
              const img = new Image();
              img.src = reader.result;
              img.onload = async () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const dataUrl = await canvas.toDataURL(file.type);

                images.push({file: file.file, image: dataUrl});
                setIsLoading(false);
                resolve();
              };
            };
            reader.onerror = reject;
          });
        })
      );

      props.uploadData(images);
    };

    const updateFiles = (files) => {
      setIsLoading(true);
      setFiles(files);
    };

    return (
      <div>
        <WrappedComponent
          {...props}
          updateFiles={updateFiles}
          isLoading={isLoading}
          fileTypes={"image/*"}
        />
      </div>
    );
  };

  return WithImagesUpload;
};

export default FileDropWithImagesUpload(FileDrop);
