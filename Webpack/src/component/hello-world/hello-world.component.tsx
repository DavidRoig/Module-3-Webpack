import React from "react";
import "./hello-world.component.scss";

export const HelloWorld: React.FC = () => {
  return (
    <div>
      <span className="hello-world-react">
        Hello world from React component!
      </span>
    </div>
  );
};
