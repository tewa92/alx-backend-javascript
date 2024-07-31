export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students in the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map over students in the city and update their grades
  const result = studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Return a new student object with the updated grade
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });

  return result;
}
