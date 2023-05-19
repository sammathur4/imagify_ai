import { useRef, useState } from "react";

import FileDropWithImagesUpload from "./components/FileDropWithImagesUpload";
import ImageGrid from "./components/ImageGrid";

import logo from "./assets/logo.jpeg";
import "./App.css";
import DisplayImages from "./components/DisplayImages";
import axios from "axios";

function App() {
  const [inputImages, setInputImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const viewerRef = useRef(null);
  const gridImages = Array.from({ length: 5 }, (_, i) => `image${i + 1}`);

  const processImages = async (images) => {
    console.log("process", typeof images[0])
    let processedImages = [];

    // write logic for api call here
    axios.post("http://127.0.0.1:5000/remove_background", { image: logo }).then((res) => console.log(res))

    return processImages;
  };

  const updateImages = async (images) => {
    console.log("update", images)
    setIsLoading(true);
    processImages([images[0].file]);
    setInputImages([images[0].image]);

    // call api with images here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="app-container relative">
      <nav className="flex items-center justify-center md:justify-start navbar px-24 py-2 fixed top-0 bg-white z-50 w-full h-28">
        <div className="w-fit py-2 rounded-md">
          <img className="w-36" src={logo} />
        </div>
      </nav>
      <section className="px-16 mt-32">
        {inputImages.length > 0 ? (
          <div className="">
            <FileDropWithImagesUpload
              uploadData={updateImages}
              actionText="Choose an image"
            />
            <DisplayImages
              isLoading={isLoading}
              images={inputImages}
              ref={viewerRef}
            />
          </div>
        ) : (
          <main className="lg:h-screen-90 flex items-center justify-center gap-10">
            <div className="hero-container flex flex-col gap-10 relative sm:flex-row">
              <div className="hero-image hidden sm:block">
                <img
                  alt="hero-image"
                  className="large-img h-lg w-auto"
                  src={require(`./assets/hero.jpg`)}
                />
              </div>
              <div className="hero-action max-w-lg mt-5">
                <h3 className="hero-text md:text-4xl font-extrabold leading-snug text-center md:text-left">
                  Remove Background From Image Using Artificial Intelligence
                </h3>
                <FileDropWithImagesUpload
                  uploadData={updateImages}
                  actionText="Choose an image"
                />
                <p className="hidden text-2xs absolute bottom-5 max-w-md md:visible">
                  By uploading an image or URL you agree to our Terms of Service
                  . This site is protected by reCaptcha and its Privacy Policy
                  and Terms of Service apply
                </p>
              </div>
            </div>
          </main>
        )}
      </section>
      <section className="px-10 md:px-32 py-12 md:py-24 bg-bg-1 mt-5 md:mt-10">
        <article className="text-center flex flex-col items-center gap-5 mb-16">
          <h3 className="font-bold text-3xl">
            More than just a background remover
          </h3>
          <p className="font-light md:max-w-3xl">
            Create a transparent background instantly and turn your images into
            art, stunning banners, visual presentations, product catalogs and
            graphics. Fully customizable on your needs.
          </p>
        </article>
        <ImageGrid images={gridImages} />
      </section>
      <footer className="bg-black h-fit text-center p-8 md:p-12">
        <p className="text-sm text-white mb-2 font-semibold">
          Copyright 2023 Dreamrun - All rights reserved.
        </p>
        <p className="text-xs font-light text-white mb-2">
          Imagify is a brand of Dreamrun Limited, Registered in England and
          Wales No: 8200183
        </p>
        <p className="text-xs font-light text-white">
          All trademarks, service marks, trade names, product names, logos and
          trade dress appearing on our website are the property of their
          respective owners.
        </p>
      </footer>
    </div>
  );
}

export default App;
