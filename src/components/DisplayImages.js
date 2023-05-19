import React, { forwardRef } from "react";
import { Tabs } from "antd";
import ImageDownload from "./ImageDownload";

const DisplayImages = forwardRef(({ images, isLoading }, ref) => {
  const getMainTabs = () => {
    const imageTabs = Array.from(
      { length: images.length },
      (_, i) => `Image${i + 1}`
    );

    return imageTabs.map((tab, index) => ({
      key: index + 1,
      label: tab,
      children: (
        <Tabs
          defaultActiveKey="2"
          items={[
            {
              key: "1",
              label: "Original",
              children: (
                <ImageDownload image={images[index]} isLoading={isLoading} />
              ),
            },
            {
              key: "2",
              label: "Background removed",
              children: (
                <ImageDownload image={images[index]} isLoading={isLoading} />
              ),
            },
          ]}
        />
      ),
    }));
  };

  return (
    <div
      ref={ref}
      className="display-images-container md:mt-20 md:mb-28 flex justify-center p-8"
    >
      <div className="tabs-container border border-gray-200 w-fit">
        <Tabs tabPosition="left" items={getMainTabs()}></Tabs>
      </div>
    </div>
  );
});

export default DisplayImages;
