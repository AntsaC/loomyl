import Lottie from "lottie-react";
import diary from "../../assets/lottie/diary.json";

export default function ProgressAnimation() {
  return (
    <Lottie
      animationData={diary}
      loop={true}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    />
  );
}
