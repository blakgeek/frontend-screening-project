import './styles.scss';
import { loadMenuItems } from './api';
import { useEffect, useState } from 'react';
import { MenuItem } from './types';
import Node from './Node';

export default function App() {
  const [data, setData] = useState<MenuItem[]>([]);
  useEffect(() => {
    (async () => {
      try {
        await loadMenuItems('medium').then((res) => setData(res));
      } catch (err) {
        console.log('Error on fetching data : ', err);
      }
    })();
  }, [loadMenuItems, setData]);
  return data && data.length ? (
    <div>
      <ul className="tree">
        {data.map((node, index) => (
          <li key={index}>
            <Node node={node} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div> No records </div>
  );
}
