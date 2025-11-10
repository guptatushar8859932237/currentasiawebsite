import React from 'react';
import { useScroll, animated} from 'react-spring';

const Animation = () => { // Rename function to start with an uppercase letter
  const { scrollYProgress } = useScroll()
  

  return (
    <>
    
  
    <animated.div style={{opacity: "scrollYProgress"}} >
      <h1>Hello, World!</h1>
    </animated.div>

    hwllow
    </>
  );
};

export default Animation;