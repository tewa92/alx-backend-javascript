export default function getStudentsByLocation(students, location) {
    if (!(students instanceof Array)) {
        return [];
    }
    const result = students.filter((student) => (student.location === location));
    return result;
}
