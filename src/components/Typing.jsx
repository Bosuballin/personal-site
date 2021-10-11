import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Typing = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Photoshop Creative.",
        "JavaScript Programmer.",
        "Discord Bot Builder.",
        "A Full Stack Web Developer.",
      ],
      typeSpeed: 50,
      startDelay: 1500,
      smartBackspace: true,
      backDelay: 700,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default Typing;
