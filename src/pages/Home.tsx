import Tree from "../components/Tree/Tree";
import type { TreeNode } from "../components/Tree/types";
import ApiExample from "../components/ApiExample";

const treeData: TreeNode[] = [
  {
    id: "1",
    label: "Root",
    children: [
      {
        id: "2",
        label: "Child 1",
        children: [
          { id: "3", label: "Grandchild 1" },
          { id: "4", label: "Grandchild 2" },
        ],
      },
      { id: "5", label: "Child 2" },
    ],
  },
];

function Home() {
  return (
    <div>
      <h1>Tractian Challenge</h1>
      <ApiExample />
      <hr style={{ margin: "40px 0" }} />
      <h2>Tree Component Example</h2>
      <Tree
        data={treeData}
        onNodeClick={(node: TreeNode) => console.log("Clicked:", node.label)}
        onNodeToggle={(node: TreeNode, isExpanded: boolean) =>
          console.log("Toggled:", node.label, isExpanded)
        }
      />
    </div>
  );
}

export default Home;
