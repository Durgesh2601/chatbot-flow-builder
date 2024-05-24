# Chatbot Flow Builder

## Overview

The Chatbot Flow Builder is a web application designed to create and visualize chatbot message flows. It allows users to add, connect, and configure different types of nodes (currently only text nodes) to define the order of chatbot message execution.

### Deployed Link

[https://chatbot-flow-builder-psi-eight.vercel.app/](https://chatbot-flow-builder-psi-eight.vercel.app/)

## Features

- **Drag-and-Drop Node Addition**: Add nodes to the flow by dragging them from the nodes panel.
- **Text Nodes**: Currently supports text message nodes.
- **Connect Nodes**: Connect nodes using edges to define the message flow.
- **Node Configuration**: Edit node text via a settings panel.
- **Flow Validation**: Displays an error if more than one node has empty target handles when attempting to save.
- **Custom Alert**: Custom alert for validation messages.
- **Extensible Node Types**: Easily add new types of nodes by updating the configuration file.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Flow**: Library for building node-based graphs.
- **CSS**: Styling the components to create an interactive and responsive design.
- **Vercel**: Platform for deploying the application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Durgesh2601/chatbot-flow-builder.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- **src/components/NodesPanel/index.js**: Component for rendering the draggable nodes panel.
- **src/components/CustomAlert/index.js**: Component for displaying custom alert messages.
- **src/config/nodeTypes.js**: Configuration file for defining different node types.
- **src/App.js**: Root component of the application containing the main logic for the flow builder.
- **src/index.js**: Entry point of the application.
- **src/styles/App.css**: CSS styles for the main application components.
- **src/styles/CustomAlert.css**: CSS styles for the custom alert component.

## Usage

1. **Nodes Panel**: The left sidebar where users can drag nodes into the React Flow area.
2. **React Flow Area**: The main area where nodes are placed, connected, and configured.
3. **Settings Panel**: Appears when a node is selected, allowing users to edit the node's text.
4. **Save Button**: Validates the flow and saves it, showing a custom alert if validation fails.

## Development

- **React Components**: The application is structured using functional components.
- **State Management**: `useState` and `useCallback` hooks are used to manage state and event handling.
- **Drag-and-Drop**: Implemented using HTML5 Drag and Drop API.
- **Validation**: Custom validation logic to ensure proper flow connections before saving.
- **Extensible Node Types**: Easily add new types of nodes by updating the configuration in `src/config/nodeTypes.js`.

### Extending Node Types

To add new types of nodes, you can update the `src/config/nodeTypes.js` file. This makes the node panel extensible for future node types.

Example `src/config/nodeTypes.js`:

```javascript
// src/config/nodeTypes.js
import CustomTextNode from '../components/CustomTextNode';
// Future node components can be added here
// import CustomImageNode from '../components/CustomImageNode';

const nodeTypes = {
  textNode: CustomTextNode,
  // imageNode: CustomImageNode, // Example of another node type
};

export const nodeTypeOptions = [
  { type: 'textNode', label: 'Text Node' },
  // { type: 'imageNode', label: 'Image Node' }, // Example of another node type
];

export default nodeTypes;
```

## Deployment

The application is deployed on Vercel. You can access it via the following link:

[https://chatbot-flow-builder-psi-eight.vercel.app/](https://chatbot-flow-builder-psi-eight.vercel.app/)

---

**Author**: Durgesh Kumar Singh

Feel free to contact me at [dk829445@gmail.com](mailto:dk829445@gmail.com) for any questions or feedback.