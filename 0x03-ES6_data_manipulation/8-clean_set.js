export default function cleanSet(set, startString) {
  const newSet = new Set();
  for (const str of set) {
    if (str.startsWith(startString)) {
      newSet.add(str.slice(startString.length));
    }
  }

  return Array.from(newSet).join('-');
}
