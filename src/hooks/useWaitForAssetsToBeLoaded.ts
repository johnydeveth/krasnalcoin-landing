import { useEffect, useState } from "react";
import BackgroundLower from "../assets/background_bottom.png";
import BackgroundUpper from "../assets/background_upper.png";
import Logo from "../assets/logo.png";

export default function useWaitForAssetsToBeLoaded() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  useEffect(() => {
    const assets = [BackgroundLower, BackgroundUpper, Logo];
    let numberOfLoaded = 0;
    assets.forEach((a) => {
      const image = new Image();
      image.addEventListener("load", function () {
        numberOfLoaded += 1;
        if (numberOfLoaded === assets.length) {
          setAssetsLoaded(true);
        }
      });
      image.src = a;
    });
  }, [setAssetsLoaded]);
  return assetsLoaded;
}
