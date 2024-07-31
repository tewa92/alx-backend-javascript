/* 
    Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
    Create two students, and create an array named studentsList containing the two variables
    Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
    Each row should contain the first name of the student and the location
 */

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
  location: "Paris",
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
