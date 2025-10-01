let myDataName = 'data';

export default function saveData(data) {
  localStorage.setItem(myDataName, JSON.stringify(data));
}

export function loadData() {
  const data = localStorage.getItem(myDataName);
  return JSON.parse(data);
}
