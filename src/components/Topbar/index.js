import "./index.css";

const Topbar = ({ handleSave }) => {
  return (
    <div className="header">
      <div>
        <h1>React Flow</h1>
      </div>
      <div className="save-btn-container">
        <button className="btn btn-save" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Topbar;
