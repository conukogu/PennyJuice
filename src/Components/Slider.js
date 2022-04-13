import React, {useState, useEffect} from "react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

function Slider() {
  const [desktopSize, setDesktopSize] = useState(window.innerWidth > 800);

  const [phoneSize, setPhoneSize] = useState(600 > window.innerWidth);

  const updateMedia = () => {
    setDesktopSize(window.innerWidth > 800);
    setPhoneSize(600 > window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {desktopSize ? <Slider2 /> : phoneSize ? <Slider1 /> : <Slider3 />}
    </div>
  );
}

export default Slider;
