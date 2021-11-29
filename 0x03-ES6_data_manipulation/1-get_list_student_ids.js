export default function getListStudentIds(stdArr) {
  if (Array.isArray(stdArr)) {
    return stdArr.map((std) => std.id);
  }
  return [];
}
