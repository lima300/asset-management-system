import type { TreeNode } from "../../types";
import { getSensorStatusIcon, getSensorTypeIcon } from "../../utils/nodeIcons";
import "./AssetDetails.css";

interface AssetDetailsProps {
  node?: TreeNode;
}
export const AssetDetails: React.FC<AssetDetailsProps> = ({ node }) => {
  return (
    <div className="asset-details">
      {node ? (
        <div className="asset-details-label">
          {node.name} {getSensorTypeIcon(node.sensorType)}{" "}
          {getSensorStatusIcon(node.status)}
        </div>
      ) : (
        <div>No asset selected.</div>
      )}
    </div>
  );
};
