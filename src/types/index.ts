export interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[];
}

export interface FolderTreeProps {
  treeData: MenuItem[];
}

export interface Node {
  label: string;
  url?: string;
  children?: Node[];
}

export interface NodeProps {
  nodeObj: Node;
}

// define a type for the user returned by https://randomuser.me/api
