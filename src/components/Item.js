import {
  useContext,
} from 'react';
import Context from '../Context';
import LocalList from '../lib/LocalList';

export default function Item({ item }) {
  const { rootItem, setRootItem } = useContext(Context);
  const add = () => {
    const name = prompt('Please put name.') || `todo: ${parseInt(Math.random() * 100)}`;
    const subItem = { name, completed: false, items: [] };
    const newRootItem = { ...rootItem };
    item.items.push(subItem);
    LocalList.setValue(newRootItem);
    setRootItem(newRootItem);
  };
  const toggle = checked => {
    item.completed = checked;
    const newRootItem = { ...rootItem };
    LocalList.setValue(newRootItem);
    setRootItem(newRootItem);
  };

  return (
    <div style={{ border: '1px dotted #000', margin: 5, padding: 5, marginLeft: 50 }}>
      <h1>{item.name}</h1>

      {!item.root && (
        <div>
          <label>
            Completed
            <input
              type="checkbox"
              checked={item.completed}
              onChange={ev => toggle(ev.target.checked)}
            />
          </label>
        </div>
      )}

      <div>
        <button onClick={add}>Add</button>
      </div>

      {item.items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
