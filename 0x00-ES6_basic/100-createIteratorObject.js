export default function createIteratorObject(report) {
  let arr = [];
  for (const emp of Object.values(report.allEmployees)) {
    arr = arr.concat(emp);
  }

  return arr;
}
