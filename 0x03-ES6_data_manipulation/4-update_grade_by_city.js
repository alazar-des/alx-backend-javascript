export default function updateStudentGradeByCity(stdsArr, city, newGrades) {
  if (Array.isArray(stdsArr)) {
    return stdsArr
      .filter((std) => std.location === city)
      .map((std) => {
        const stdId = newGrades.find((stdGrd) => stdGrd.studentId === std.id);
        const stdNew = std;
        if (stdId === undefined) { stdNew.grade = 'N/A'; } else { stdNew.grade = stdId.grade; }
        return stdNew;
      });
  }
  return [];
}
