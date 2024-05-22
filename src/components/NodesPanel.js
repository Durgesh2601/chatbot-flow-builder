import React from "react";

function NodesPanel({ onAddNode }) {
  return (
    <div className="nodes-panel">
      <h3>Nodes Panel</h3>
      <button className="btn" onClick={() => onAddNode("test message")}>
        Add Text Node
      </button>
    </div>
  );
}

export default NodesPanel;
