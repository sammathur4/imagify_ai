import React from "react";
import FileDropWithImagesUpload from "./FileDropWithImagesUpload";

const Hero = ({ image, text }) => {
  return (
    <div className="hero-container flex flex-col gap-10 relative sm:flex-row">
      <div className="hero-image hidden sm:block">
        <img
          className="large-img h-lg w-auto"
          src={require(`../assets/${image}.jpg`)}
        />
      </div>
      <div className="hero-action max-w-lg mt-5">
        <h3 className="hero-text text-4xl font-extrabold leading-snug">
          {text}
        </h3>
        <FileDropWithImagesUpload actionText="Choose an image" />
        <p className="text-2xs absolute bottom-5 max-w-md">
          By uploading an image or URL you agree to our Terms of Service . This
          site is protected by reCaptcha and its Privacy Policy and Terms of
          Service apply
        </p>
      </div>
    </div>
  );
};

export default Hero;
