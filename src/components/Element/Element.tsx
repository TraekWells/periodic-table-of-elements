import React from "react";
import styles from "./Element.module.scss";

interface ElementProps {
  element: {
    name: string;
    symbol: string;
    number: number;
    xpos: number;
    ypos: number;
  };
}

const Element = ({ element }: ElementProps) => {
  return (
    <div
      className={styles.element}
      style={{
        gridColumnStart: `${element.xpos}`,
        gridRowStart: `${element.ypos}`,
      }}
    >
      {element.symbol}
    </div>
  );
};

export default Element;
