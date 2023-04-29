import React from "react";
import styles from "./ElementsGrid.module.scss";

interface ElementsGridProps {
  children: React.ReactNode;
}

function ElementsGrid({ children }: ElementsGridProps) {
  return <div className={styles["elements-grid"]}>{children}</div>;
}

export default ElementsGrid;
