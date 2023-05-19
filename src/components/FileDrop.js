import React from "react";
import { Dropzone, FileInputButton } from "@files-ui/react";
import { TailSpin } from "react-loader-spinner";

const FileDrop = ({
  updateFiles,
  clearData,
  isLoading,
  fileTypes,
  actionText,
}) => {
  const styles = {
    primaryColor: "rgba(25, 118,210 , 1)",
  };

  const handleChange = (files) => {
    updateFiles(files);
  };

  return (
    <div className="image-drop-container">
      <Dropzone
        style={{ marginTop: "2em" }}
        color={styles.primaryColor}
        onChange={handleChange}
        accept={fileTypes}
        header={false}
        footer={false}
        clickable={false}
        disableRipple
        autoClean
      >
        <div>
          <FileInputButton
            style={{ height: "2.75em", width: "12em" }}
            accept={fileTypes}
            onChange={handleChange}
            children={
              isLoading ? (
                <TailSpin height={"24px"} color={"white"} />
              ) : (
                actionText
              )
            }
          />
          <p className="text-gray-500 text-sm text-center font-light mt-3">
            Or drag and drop your files
          </p>
        </div>
      </Dropzone>
    </div>
  );
};

export default FileDrop;
