import React from "react";

const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};

const NodesPanel = () => {
  return (
    <div className="nodes-container">
      <aside className="nodes-panel">
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "textNode")}
          draggable
        >
          Text Node
        </div>
      </aside>
    </div>
  );
};

export default NodesPanel;
