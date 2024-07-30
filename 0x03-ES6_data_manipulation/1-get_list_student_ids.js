export default function getListStudentIds(students) {
    if (!(students instanceof Array)) {
        return [];
    }
    const result = students.map((row) => (row.id));
    return result;
}
