import React from "react";
import "./index.css";

const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};

const NodesPanel = () => {
  return (
    <div className="msg-container">
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
