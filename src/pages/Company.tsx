import { useParams } from "react-router-dom";
import { useCompanyData } from "../hooks/useCompanyData";
import { buildTree } from "../utils/treeBuilder";
import { useMemo } from "react";
import { TreeContainer } from "../components/TreeContainer/TreeContainer";
import "./Company.css";

export const Company = () => {
  const { companyId } = useParams();
  const { locations, assets, isLoading } = useCompanyData(companyId);

  const treeData = useMemo(() => {
    if (!companyId || isLoading) return [];
    return buildTree(locations, assets);
  }, [companyId, isLoading, locations, assets]);

  return (
    <div className="company-page">
      <div>ATIVOS</div>
      <div className="company-page-body">
        <TreeContainer treeData={treeData} />
        <div>oi</div>
      </div>
    </div>
  );
};
