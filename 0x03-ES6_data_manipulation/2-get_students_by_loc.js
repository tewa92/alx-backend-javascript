export default function getStudentsByLocation(students, location) {
  const result = students.filter((student) => (student.location === location));
  return result;
}
