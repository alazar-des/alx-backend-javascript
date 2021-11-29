export default function getStudentsByLocation(stdsArr, city) {
  if (Array.isArray(stdsArr)) {
    return stdsArr.filter((std) => std.location === city);
  }
  return [];
}
