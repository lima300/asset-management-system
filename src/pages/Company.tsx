import { useParams } from "react-router-dom";
import { useCompanyData } from "../hooks/useCompanyData";
import { buildTree } from "../utils/treeBuilder";
import { useMemo, useState, useEffect } from "react";
import { TreeContainer } from "../components/TreeContainer/TreeContainer";
import "./Company.css";
import {
  FiltersButtonBar,
  type Filters,
} from "../components/FiltersButtonBar/FiltersButtonBar";
import type { TreeNode } from "../types";
import { AssetDetails } from "../components/AssetDetails/AssetDetails";

export const Company = () => {
  const { companyId } = useParams();
  const { locations, assets, isLoading } = useCompanyData(companyId);

  const [filters, setFilters] = useState<Filters>({
    criticalStatus: false,
    energySensors: false,
  });
  const [selectedNode, setSelectedNode] = useState<TreeNode | undefined>(
    undefined
  );
  const [searchValue, setSearchValue] = useState<string>("");

  // Clear filters and selected node when company changes
  useEffect(() => {
    setFilters({
      criticalStatus: false,
      energySensors: false,
    });
    setSelectedNode(undefined);
    setSearchValue(""); // Also clear search value
  }, [companyId]);

  const treeData = useMemo(() => {
    if (!companyId || isLoading) return [];
    return buildTree(locations, assets);
  }, [companyId, isLoading, locations, assets]);

  return (
    <div className="company-page">
      <div className="company-page-header">
        <strong>ASSETS</strong>
        <FiltersButtonBar onFiltersChange={setFilters} filters={filters} />
      </div>
      <div className="company-page-body">
        <TreeContainer
          key={companyId} // Force re-render when company changes
          treeData={treeData}
          filters={filters}
          onNodeClick={(node: TreeNode) => setSelectedNode(node)}
          externalSearchValue={searchValue}
        />
        <AssetDetails node={selectedNode} />
      </div>
    </div>
  );
};
