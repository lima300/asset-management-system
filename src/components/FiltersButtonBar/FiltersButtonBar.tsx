import "./FiltersButtonBar.css";
import critical from "../../assets/critical.svg";
import ray from "../../assets/ray.svg";
import whiteRay from "../../assets/whiteRay.svg";
import whiteCritical from "../../assets/whiteCritical.svg";

export interface Filters {
  energySensors: boolean;
  criticalStatus: boolean;
}
interface FiltersButtonBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}
export const FiltersButtonBar: React.FC<FiltersButtonBarProps> = ({
  onFiltersChange,
  filters,
}) => {
  const onEnergySensorClick = () => {
    onFiltersChange({ ...filters, energySensors: !filters.energySensors });
  };
  const onCriticalClick = () => {
    onFiltersChange({ ...filters, criticalStatus: !filters.criticalStatus });
  };
  return (
    <div className="filters-button-bar">
      <button
        className={`filters-button-bar-item ${
          filters.energySensors ? "active" : ""
        }`}
        onClick={onEnergySensorClick}
      >
        <img src={filters.energySensors ? whiteRay : ray} alt="ray" />
        Energy Sensor
      </button>
      <button
        className={`filters-button-bar-item ${
          filters.criticalStatus ? "active" : ""
        }`}
        onClick={onCriticalClick}
      >
        <img
          src={filters.criticalStatus ? whiteCritical : critical}
          alt="critical"
        />
        Crtitical
      </button>
    </div>
  );
};
