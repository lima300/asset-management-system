import type { Location, Asset, TreeNode } from "../types";

export const buildTree = (
  locations: Location[],
  assets: Asset[]
): TreeNode[] => {
  const treeNodes: Map<string, TreeNode> = new Map();
  const rootNodes: TreeNode[] = [];

  // First, create all location nodes
  locations.forEach((location) => {
    const node: TreeNode = {
      id: location.id,
      name: location.name,
      type: "location",
      parentId: location.parentId,
      children: [],
      isExpanded: false,
      isVisible: true,
    };
    treeNodes.set(location.id, node);
  });

  // Then, create all asset/component nodes
  assets.forEach((asset) => {
    const node: TreeNode = {
      id: asset.id,
      name: asset.name,
      type: asset.sensorType ? "component" : "asset",
      parentId: asset.parentId,
      locationId: asset.locationId,
      sensorType: asset.sensorType,
      status: asset.status,
      children: [],
      isExpanded: false,
      isVisible: true,
    };
    treeNodes.set(asset.id, node);
  });

  // Build parent-child relationships
  treeNodes.forEach((node) => {
    if (node.parentId && treeNodes.has(node.parentId)) {
      const parent = treeNodes.get(node.parentId)!;
      parent.children.push(node);
    } else {
      // This is a root node
      rootNodes.push(node);
    }
  });

  return rootNodes;
};

export const filterTree = (
  tree: TreeNode[],
  filters: { search: string; energySensors: boolean; criticalStatus: boolean }
): TreeNode[] => {
  const { search, energySensors, criticalStatus } = filters;

  const filterNode = (node: TreeNode): TreeNode | null => {
    // Check if node matches search filter
    const matchesSearch =
      !search || node.name.toLowerCase().includes(search.toLowerCase());

    // Check if node matches energy sensors filter
    const matchesEnergySensors = !energySensors || node.sensorType === "energy";

    // Check if node matches critical status filter
    const matchesCriticalStatus = !criticalStatus || node.status === "alert";

    // If no filters are applied, show all nodes
    if (!search && !energySensors && !criticalStatus) {
      const filteredChildren = node.children
        .map((child) => filterNode(child))
        .filter((child): child is TreeNode => child !== null);

      return {
        ...node,
        children: filteredChildren,
        isVisible: true,
      };
    }

    // If node matches all filters, show it
    if (matchesSearch && matchesEnergySensors && matchesCriticalStatus) {
      const filteredChildren = node.children
        .map((child) => filterNode(child))
        .filter((child): child is TreeNode => child !== null);

      return {
        ...node,
        children: filteredChildren,
        isVisible: true,
      };
    }

    // If node doesn't match filters but has children that do, show the path
    const filteredChildren = node.children
      .map((child) => filterNode(child))
      .filter((child): child is TreeNode => child !== null);

    if (filteredChildren.length > 0) {
      return {
        ...node,
        children: filteredChildren,
        isVisible: true,
      };
    }

    // Node doesn't match filters and has no matching children
    return null;
  };

  return tree
    .map((node) => filterNode(node))
    .filter((node): node is TreeNode => node !== null);
};
