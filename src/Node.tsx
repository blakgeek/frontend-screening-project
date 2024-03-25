import { useEffect, useState } from 'react';
import { MenuItem } from './types';

export default function Node({ node }: { node: MenuItem }) {
  const { label, children, url } = node;
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand((pre) => !pre);
  };
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(event.currentTarget.href, '_blank', 'noopener, noreferrer');
  };
  return (
    <div>
      <div>
        {children && (
          <span onClick={handleExpand} className="expand">
            {expand ? `- ${label}` : `+ ${label}`}
          </span>
        )}
        {url && (
          <span>
            #
            <a onClick={handleClick} href={url} className="url">
              {' ' + label}
            </a>
          </span>
        )}
      </div>
      {children && expand && (
        <ul>
          {children.map((child, index) => (
            <li key={index}>
              <Node node={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
