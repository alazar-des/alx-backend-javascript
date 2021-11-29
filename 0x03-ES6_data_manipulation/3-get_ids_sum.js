export default function getStudentIdsSum(stdsArr) {
  if (Array.isArray(stdsArr)) {
    return stdsArr.reduce((acc, std) => acc + std.id, 0);
  }
  return 0;
}
