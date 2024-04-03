import { useState } from "react";
import { TreeView } from ".";

export function TreeItem({ data }: ITreeItemProps) {
  const [showChildren, setShowChildren] = useState(false);

  const handleHide = () => {
    setShowChildren(!showChildren);
  };

  return (
    <li key={new Date().getUTCMilliseconds()}>
      {data.url ? (
        <>
          <a href={data.url} target={data.label}>
            {data.label}
          </a>
          <span className="textWithColor"> # </span>
        </>
      ) : data.children ? (
        <>
          <h2 onClick={handleHide}>
            {data.label} {showChildren ? "-" : "+"}
          </h2>
          {showChildren && <TreeView data={data.children} key={new Date().getTime()} />}
        </>
      ) : (
        <h2>{data.label}</h2>
      )}
    </li>
  );
}
