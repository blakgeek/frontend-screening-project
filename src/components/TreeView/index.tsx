import { MenuItem } from "../../types";
import { TreeItem } from "./treeItem";

export function TreeView({ data }: ITreeViewProps) {
  return (
    <>
      {data.map((item: MenuItem) => (
        <ul>{<TreeItem key={new Date().getTime()} data={item} />}</ul>
      ))}
    </>
  );
}
