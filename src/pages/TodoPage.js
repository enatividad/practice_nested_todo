import {
  useState,
} from 'react';

import Context from '../Context';
import LocalList from '../lib/LocalList';
import Item from '../components/Item';

export default function TodoPage() {
  const [rootItem, setRootItem] = useState(LocalList.getValue());

  return (
    <Context.Provider value={{ rootItem, setRootItem }}>
      <Item item={rootItem} />
    </Context.Provider>
  );
}
