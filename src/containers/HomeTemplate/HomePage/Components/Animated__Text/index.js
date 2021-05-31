import React from "react";
import ReactDOM from "react-dom";
import { useDencrypt } from "use-dencrypt-effect";

const values = ["Book", "Your Moives", "Here", "Booking Movie"];

const AnimatedText = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2250);

    return () => clearInterval(action);
  }, []);

  return <div className=" animated__text container d-flex">
      <h1>{result}</h1>
  </div>;
};



export default AnimatedText;