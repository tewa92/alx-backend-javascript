namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(Teacher: Subjects.Teacher) {
      this.teacher = Teacher;
    }
  }
}
