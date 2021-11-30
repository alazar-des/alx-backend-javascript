let count = 0;

const weakMap = new WeakMap();
function queryAPI(obj) {
  count += 1;
  if (count >= 5) { throw new Error('Endpoint load is high'); }
  weakMap.set(obj, count);
}

export { weakMap, queryAPI };
