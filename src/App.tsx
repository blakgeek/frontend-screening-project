import "./styles.scss";
import { TreeView } from "./components/TreeView";
import { useEffect, useState } from "react";
import { loadMenuItems } from "./api";
import { MenuItem } from "./types";

export default function App() {
  const [data, setData] = useState<null | MenuItem[]>(null);

  useEffect(() => {
    const getMenuItems = async () => {
      let res = await loadMenuItems("large");
      setData(res);
    };
    getMenuItems();
  });

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="treeView">
      <TreeView data={data} />
    </main>
  );
}
