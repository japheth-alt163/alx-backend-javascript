function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const newGradeObj = newGrades.find(grade => grade.studentId === student.id);
      if (newGradeObj) {
        return { ...student, grade: newGradeObj.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    });
}

module.exports = updateStudentGradeByCity;
