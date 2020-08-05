import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./homeAnimation.css";

const HomeAnimation = () => {
  // const [active, toggle] = useState(false);
  // const [bind, { width }] = useMeasure();
  // const props = useSpring({
  //   width: active ? width : 0,
  //   backgroundColor: active ? 'red' : 'blue',
  //   config: { duration: 3000 }
  // });

  return (
    // <div {...bind} className="homeAnimation" onClick={() => toggle(!active)}>
    //   <animated.div className="fill" style={{ props }} />
    //   <animated.div className="content">
    //     {props.width.interpolate((x) => Math.floor((x * 100) / width))}
    //   </animated.div>
    // </div>
    <div className="animate__animated animate_slideInLeft">
      <div className="homeAnimation"></div>
    </div>
  );
};

export default HomeAnimation;
