localStorage.list = localStorage.list || JSON.stringify([]);

function getValue() {
  const initItems = JSON.parse(localStorage.list);
  const items = [];
  while (initItems.length) {
    const item = initItems.pop();
    item.items = item.items || [];
    if (item.parentId) {
      const finder = parentItem => parentItem.id === item.parentId;
      const parentItem = initItems.find(finder) || items.find(finder);
      parentItem.items = parentItem.items || [];
      parentItem.items.push(item);
    } else {
      items.push(item);
    }
  }
  return {
    root: true,
    name: 'Todo List',
    items,
  };
}

function setValue(value) {
  return localStorage.list = JSON.stringify(recurseValue(value.items));
}

function recurseValue(oldItems) {
  let out = [];
  for (const oldItem of oldItems) {
    const { items, ...item } = oldItem;
    out.push(item);
    out = out.concat(recurseValue(items));
  }
  return out;
}

const LocalList = {
  getValue,
  setValue,
};

export default LocalList;
