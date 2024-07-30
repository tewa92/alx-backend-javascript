export default function getListStudentIds(students) {
    if (!(students instanceof Array)) {
        return [];
    }
    const result = students.map((student) => (student.id));
    return result;
}
