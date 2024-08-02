/*
 * Interface representing a Teacher.
  * -firstName(string) and lastName(string). These two attributes should only
    be modifiable when a Teacher is first initialized
  *-fullTimeEmployee(boolean) this attribute should always be defined
  *-yearsOfExperience(number) this attribute is optional
  *-location(string) this attribute should always be defined
  *-Add the possibility to add any attribute to the Object like
    contract(boolean) without specifying the name of the attribute
 */

interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attribute
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  yearsOfExperience: 10,
  contract: false,
  hobby: "hiking",
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "Paris",
  contract: true,
  yearsOfExperience: 5,
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false,
};

console.log(teacher1);

/*
 * 2. Extending the Teacher class
 * Write an interface named Directors that extends Teacher.
 * It requires an attribute named numberOfReports(number)
 */

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 27,
};

console.log(director1);

/*
 * Write a function printTeacher:

 * It accepts two arguments firstName and lastName
 * It returns the first letter of the firstName and the full lastName
 * Example: printTeacher("John", "Doe") -> J. Doe

 * Write an interface for the function named printTeacherFunction.
 */
function printTeacher(firstName: string, lastName: string) {
  return firstName.charAt(0) + ". " + lastName;
}

console.log(printTeacher("John", "Doe"));

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/*
 * Write a Class named StudentClass:

  * The constructor accepts firstName(string) and lastName(string) arguments
  * The class has a method named workOnHomework that return the string Currently working
  * The class has a method named displayName. It returns the firstName of the student
  * The constructor of the class should be described through an Interface
  * The class should be described through an Interface
 */


// Interface describing the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student1.workOnHomework());
console.log(student1.displayName());
