import React from "react";
import imageSrc from "../../content/logo_lorem.jpg";

export const HelloWorldComponent: React.FC = () => {
  return (
    <section>
      <h2>Hello Parecel from React!</h2>;
      <img src={imageSrc} alt="Logo dummy" />
    </section>
  );
};
