export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);

console.log("Java");
cpp.setTeacher = cTeacher;
console.log(java.getRequirements);
console.log(java.getAvailableTeacher);

console.log("React");
cpp.setTeacher = cTeacher;
console.log(react.getRequirements);
console.log(react.getAvailableTeacher);
