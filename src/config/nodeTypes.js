import CustomTextNode from "../components/CustomNodeRenderer";
// Future node components can be added here
// import CustomImageNode from './components/CustomImageNode';

const nodeTypes = {
  textNode: CustomTextNode,
  // imageNode: CustomImageNode, // Example of another node type
};

export const nodeTypeOptions = [
  { type: "textNode", label: "Text Node" },
  // { type: 'imageNode', label: 'Image Node' }, // Example of another node type
];

export default nodeTypes;
