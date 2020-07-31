import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const LandingLottie = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./lf30_editor_DDcF5T.json"),
    });
  }, []);
  return <div className="container" ref={container}></div>;
};
export default LandingLottie;
