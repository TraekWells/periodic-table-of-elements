import useConvertElementCategory from "../../hooks/useConvertElementCategory";
import styles from "./ElementLegend.module.scss";

interface LegendItemProps {
  category: string;
}

const LegendItem = ({ category }: LegendItemProps) => {
  const elementClass = useConvertElementCategory(category);
  return (
    <div className={`${styles["legend-item"]}`}>
      <span
        className={`${styles["legend-item__indicator"]} ${styles[elementClass]}`}
      ></span>
      <p className={`${styles["legend-item__text"]}`}>{category}</p>
    </div>
  );
};

const ElementLegend = () => {
  return (
    <div className={`${styles["element-legend"]}`}>
      <LegendItem category="Diatomic Nonmetal" />
      <LegendItem category="Noble Gas" />
    </div>
  );
};

export default ElementLegend;
