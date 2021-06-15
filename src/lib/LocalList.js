localStorage.list = localStorage.list || JSON.stringify({
  root: true,
  name: 'Todo List',
  items: [],
});

function getValue() {
  return JSON.parse(localStorage.list);
}

function setValue(value) {
  return localStorage.list = JSON.stringify(value);
}

const LocalList = {
  getValue,
  setValue,
};

export default LocalList;
