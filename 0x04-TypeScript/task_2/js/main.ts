// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}

const employee1 = createEmployee(300);
console.log(employee1);

const employee2 = createEmployee(3000);
console.log(employee2);

// Type guard function to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  else return (employee as Teacher).workTeacherTasks();
}

console.log(employee1.workFromHome());
console.log(employee1.getCoffeeBreak());
console.log(executeWork(employee1)); // Output: Getting to work


console.log(employee2.workFromHome());
console.log(employee2.getCoffeeBreak());
console.log(executeWork(employee2)); // Output: Getting to director tasks


export type Subjects = ("Math" | "History");

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  else if (todayClass === "History") {
    return "Teaching History";
  }
}
