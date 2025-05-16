import { useEffect, useState } from "react";
import BackgroundLower from "../assets/background_bottom.webp";
import BackgroundUpper from "../assets/background_upper.webp";
import Logo from "../assets/logo.png";
import PlFlag from "../assets/pl.png";
import UsFlag from "../assets/us.png";

export default function useWaitForAssetsToBeLoaded() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  useEffect(() => {
    const assets = [BackgroundLower, BackgroundUpper, Logo, PlFlag, UsFlag];
    let numberOfLoaded = 0;
    let imagesLoaded = false
    let fontsLoaded = false;
    assets.forEach((a) => {
      const image = new Image();
      image.addEventListener("load", function () {
        numberOfLoaded += 1;
        if (numberOfLoaded === assets.length) {
          if (fontsLoaded) {
            setAssetsLoaded(true);
          }
          imagesLoaded = true;
        }
      });
      image.src = a;
    });
    document.fonts.ready.then(function () {
      if (imagesLoaded) {
        setAssetsLoaded(true);
      }
      fontsLoaded = true;
    });
  }, [setAssetsLoaded]);
  return assetsLoaded;
}
