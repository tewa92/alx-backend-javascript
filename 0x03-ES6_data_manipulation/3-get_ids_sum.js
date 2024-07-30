export default function getStudentIdsSum(students) {
  const sum = students.reduce((a, b) => (a + b.id), 0);
  return sum;
}
