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
import NodesPanel from "./components/NodesPanel";
import Topbar from "./components/Topbar";
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
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeDragStop = (event, node) =>
    setNodes((nds) => nds.map((n) => (n.id === node.id ? node : n)));

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

  const handleSave = useCallback(() => {
    const nodesWithoutTarget = nodes.filter(
      (node) => !edges.find((edge) => edge.source === node.id)
    );
    if (nodesWithoutTarget.length > 1) {
      alert("More than one node with empty target handles");
    } else {
      // Save logic here
      console.log("Flow saved");
    }
  }, []);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    // check if the dropped element is valid
    if (typeof type === "undefined" || !type) {
      return;
    }
    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `test message ${nodes?.length}` },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="App">
      <Topbar handleSave={handleSave} />
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
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            style={{ width: "50%", height: "90vh" }}
          >
            <Controls />
            <Background />
          </ReactFlow>
          <NodesPanel />
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default App;
