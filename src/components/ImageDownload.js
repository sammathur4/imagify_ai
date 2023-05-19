import { Button, Progress, Skeleton, Space } from "antd";

const ImageDownload = ({ image, isLoading }) => {
  return (
    <div className="image-download md:h-92 flex flex-col gap-10 md:flex-row">
      <div className="image-container h-52 w-auto md:h-lg md:w-lg">
        {isLoading ? (
          <div className="flex h-full justify-center items-center">
            <Progress size={20} style={{ width: "20em" }} percent={70} />
          </div>
        ) : (
          <img className="h-64 w-auto md:h-lg md:w-lg max-w-fit" src={image} />
        )}
      </div>
      {isLoading ? (
        <div className="flex flex-col md:w-80 justify-center items-center gap-10">
          <Skeleton.Button className="w-32" active />
          <Skeleton.Button className="w-32" active />
          <Skeleton.Button className="w-32" active />
        </div>
      ) : (
        <div className="flex flex-col gap-4 md:gap-10 justify-center items-center p-6 md:p-24 md:w-72">
          <div>
            <Button
              className="bg-white text-primary border-2 border-primary w-52 md:min-w-lg hover:bg-primary hover:text-white"
              size="large"
              type="secondary"
            >
              Download
            </Button>
            <p className="text-gray-500 text-sm text-center font-light md:mt-3">
              Preview image - Low quality
            </p>
          </div>
          <div>
            <Button
              className="bg-primary text-white border-2 w-52 md:min-w-lg"
              size="large"
              type="primary"
            >
              Download high quality
            </Button>
            <p className="text-gray-500 text-sm text-center font-light md:mt-3">
              Full image - High quality
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDownload;
