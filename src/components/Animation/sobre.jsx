import React, { useState } from "react";
import Lottie from "react-lottie";
import Pc from "../../Assets/Pc.json";

export default function AnimationSobre() {
  const [isStopped] = useState(false);
  const [isPaused] = useState(false);

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
        width={500}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}
