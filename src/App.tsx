import { useEffect, useState } from "react";
import { loadMenuItems } from "./api";
import FolderTree from "./components/folderTree";
import { MenuItem } from "./types";
import "./styles.scss";

const App: React.FC = () => {
  const [folderTreeData, setFolderTreeData] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadMenuItems();
        setFolderTreeData(data);
      } catch (error) {
        console.error("Error fetching folder tree data:", error);
      }
    };
    fetchData();
  }, []);

  return <FolderTree treeData={folderTreeData} />;
};

export default App;
