import React from "react";
import Particles from "react-particles-js";

function Left() {
  return (
    <div md className="LeftSec bg-dark">
      <Particles
        className="particlejs"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 6,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Left;
