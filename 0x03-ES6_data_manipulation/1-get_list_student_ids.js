export default function getListStudentIds(val) {
    if (!(val instanceof Array)) {
        return [];
    }
    const result = val.map((row) => (row.id));
    return result;
}
