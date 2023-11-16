import React, { useState } from "react";
import Lottie from "react-lottie";
import Const from "../../Const.json";

export default function AnimationConst() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Const,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation">
      <Lottie
        options={defaultOptions}
        height={650}
        width={590}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}
