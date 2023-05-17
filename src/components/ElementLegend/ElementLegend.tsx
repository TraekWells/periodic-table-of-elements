import useConvertElementCategory from "../../hooks/useConvertElementCategory";
import styles from "./ElementLegend.module.scss";
import { ElementTypes } from "../../common/ElementTypes";

interface LegendItemProps {
  category: string;
  onMouseEnter: () => void;
}

const LegendItem = ({ category }: LegendItemProps) => {
  const elementClass = useConvertElementCategory(category);
  return (
    <button className={`${styles["legend-item"]}  ${styles[elementClass]}`}>
      <p className={`${styles["legend-item__text"]}`}>{category}</p>
    </button>
  );
};

const ElementLegend = () => {
  const handleLegendItemHover = (type: string) => {
    console.log(`hovering ${type}`);
  };

  return (
    <div className={`${styles["element-legend"]}`}>
      {ElementTypes.map((type) => {
        return (
          <LegendItem
            key={type}
            category={type}
            onMouseEnter={() => handleLegendItemHover(type)}
          />
        );
      })}
    </div>
  );
};

export default ElementLegend;
