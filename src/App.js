import React, { useCallback, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";

const initialNodes = [
  {
    id: "1",
    type: "default",
    position: { x: 100, y: 100 },
    data: { label: "test message 1" },
  },
];

const initialEdges = [];

let id = 2;
const getId = () => `${id++}`;

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeDragStop = (event, node) =>
    setNodes((nds) => nds.map((n) => (n.id === node.id ? node : n)))

  const onNodesDelete = (selectedNodes) => {
    const newNodes = nodes.filter((node) => !selectedNodes.includes(node.id));
    const newEdges = edges.filter(
      (edge) =>
        !selectedNodes.includes(edge.source) &&
        !selectedNodes.includes(edge.target)
    );
    setNodes(newNodes);
    setEdges(newEdges);
    setSelectedNode(null);
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>React Flow</h1>
        </div>
        <div className="save-btn-container">
          <button
            className="btn"
            onClick={() => {
              const nodesWithoutTarget = nodes.filter(
                (node) => !edges.find((edge) => edge.source === node.id)
              );
              if (nodesWithoutTarget.length > 1) {
                alert("More than one node with empty target handles");
              } else {
                // Save logic here
                console.log("Flow saved");
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="flow-builder">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            elements={[...nodes, ...edges]}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeDragStop={onNodeDragStop}
            onNodeClick={(event, node) => setSelectedNode(node)}
            onNodesDelete={onNodesDelete}
          >
            <Controls />
            <Background />
          </ReactFlow>
          {selectedNode && (
            <div className="settings-panel">
              <h3>Settings Panel</h3>
              <input
                type="text"
                value={selectedNode.data.label}
                onChange={(e) => {
                  setNodes((nds) =>
                    nds.map((n) =>
                      n.id === selectedNode.id
                        ? { ...n, data: { ...n.data, label: e.target.value } }
                        : n
                    )
                  );
                }}
              />
            </div>
          )}
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default App;