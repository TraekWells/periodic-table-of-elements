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
    atomic_mass: number;
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
      <span className={`${styles["element__number"]}`}>{element.number}</span>
      <span className={`${styles["element__weight"]}`}>
        {element.atomic_mass.toFixed(3)}
      </span>
      <p className={`${styles["element__symbol"]}`}>{element.symbol}</p>
      <p className={`${styles["element__name"]}`}>{element.name}</p>
    </div>
  );
};

export default Element;
