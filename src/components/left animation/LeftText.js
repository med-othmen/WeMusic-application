import React from "react";
import Typed from "react-typed";

function LeftText() {
  return (
    <div className="leftText text-white">
      <div className="flex-fix">
        <h1>Hi, </h1>
        <span className="preTitle">I am </span>
        <h1 className="name_big">OTHMEN Mohamed ali</h1>
        <p className="animated_text">
          <Typed
            strings={[
              "I am Front end web developer",
              "I live in Paris",
              "Open to work at the moment",
            ]}
            typeSpeed={20}
            backSpeed={50}
            loop
          ></Typed>
        </p>
      </div>
    </div>
  );
}

export default LeftText;
