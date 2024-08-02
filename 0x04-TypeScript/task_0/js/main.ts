/*
    Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
    Create two students, and create an array named studentsList containing the two variables
    Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
    Each row should contain the first name of the student and the location
 */

    // Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
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

// Create an array containing the two students
let studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]) {
  //Create a table element
  const table = document.createElement("table");
  table.border = "1";


  // Create the table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  headerRow.appendChild(headerFirstName);

  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  headerRow.appendChild(headerLocation);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  //Create the table body
  const tbody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);
}

// call the function to render the table
renderTable(studentsList);
