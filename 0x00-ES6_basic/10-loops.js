export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array.keys()) {
    let value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
