import { useParams } from "react-router-dom";
import { useCompanyData } from "../hooks/useCompanyData";
import { buildTree } from "../utils/treeBuilder";
import { useMemo, useState } from "react";
import { TreeContainer } from "../components/TreeContainer/TreeContainer";
import "./Company.css";
import {
  FiltersButtonBar,
  type Filters,
} from "../components/FiltersButtonBar/FiltersButtonBar";

export const Company = () => {
  const { companyId } = useParams();
  const { locations, assets, isLoading } = useCompanyData(companyId);

  const [filters, setFilters] = useState<Filters>({
    criticalStatus: false,
    energySensors: false,
  });

  const treeData = useMemo(() => {
    if (!companyId || isLoading) return [];
    return buildTree(locations, assets);
  }, [companyId, isLoading, locations, assets]);

  return (
    <div className="company-page">
      <div className="company-page-header">
        <span>
          <strong>ATIVOS</strong> / Apex Unit
        </span>
        <FiltersButtonBar onFiltersChange={setFilters} filters={filters} />
      </div>
      <div className="company-page-body">
        <TreeContainer treeData={treeData} filters={filters} />
        <div>oi</div>
      </div>
    </div>
  );
};
