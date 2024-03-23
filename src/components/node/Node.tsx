import React, { useState } from "react";
import { NodeProps } from "../../types";
import "./node.scss";

const Node: React.FC<NodeProps> = ({ nodeObj }) => {
  const [expand, setExpand] = useState(false);

  const handleFolderClick = () => {
    setExpand(!expand);
  };

  if (nodeObj.children) {
    return (
      <div>
        <div className="node_folder" onClick={handleFolderClick}>
          <span>
            {" "}
            {expand ? "-" : "+"} {nodeObj.label}
          </span>
        </div>

        <div className={`node_folder_group ${expand && "show"}`}>
          {nodeObj.children?.map((node) => (
            <Node key={node.label} nodeObj={node} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className="node_file">
        <a href={nodeObj.url} target="_blank">
          # {nodeObj.label}
        </a>
      </span>
    );
  }
};

export default Node;
