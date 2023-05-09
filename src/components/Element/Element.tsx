import React from "react";
import styles from "./Element.module.scss";
import useConvertElementCategory from "../../hooks/useConvertElementCategory";

interface ElementProps {
  element: {
    name: string;
    symbol: string;
    number: number;
    xpos: number;
    ypos: number;
    category: string;
  };
}

const Element = ({ element }: ElementProps) => {
  const elementClass = useConvertElementCategory(element.category);
  return (
    <div
      className={`${styles.element} ${styles[`${elementClass}`]}`}
      id={`element-${element.number}`}
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
