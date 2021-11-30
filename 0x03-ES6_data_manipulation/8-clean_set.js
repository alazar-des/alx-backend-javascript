export default function cleanSet(set, startString) {
  let newStr = '';
  for (const str of set) {
    if (str.startsWith(startString) && startString !== '') {
      if (newStr === '') { newStr = str.slice(startString.length); } else { newStr = `${newStr}-${str.slice(startString.length)}`; }
    }
  }

  return newStr;
}
