import React, { useState } from "react";
import Lottie from "react-lottie";
import Pc from "../../Assets/Pc.json";

export default function Animations() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Pc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation">
      <Lottie
        options={defaultOptions}
        height={400}
        width={350}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}
