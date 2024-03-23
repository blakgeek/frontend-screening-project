import React from "react";
import { FolderTreeProps } from "../../types";
import Node from "../node";
import "./folderTree.scss";

const FolderTree: React.FC<FolderTreeProps> = ({ treeData }) => {
  return (
    <>
      {treeData.map((node) => (
        <Node key={node.label} nodeObj={node} />
      ))}
    </>
  );
};

export default FolderTree;
