// Polecenie zadania
// 1. Napisać funkcję getEmployeeInfo, która jako argument przyjmuje obiekt employee oraz nazwę klucza, którą chcesz pobrać.
// 2. Funkcja powinna sprawdzić, czy podana nazwa klucza istnieje w obiekcie employee.
// 3. Jeśli podana nazwa klucza istnieje, funkcja powinna zwrócić wartość tego klucza.
// 4. Jeśli podana nazwa klucza nie istnieje, funkcja powinna zwrócić tekst "Klucz nie istnieje".
// console.log(getEmployeeInfo(employee, "firstName")); // Powinno zwrócić: "John"
// console.log(getEmployeeInfo(employee, "lastName")); // Powinno zwrócić: "Doe"
// console.log(getEmployeeInfo(employee, "position")); // Powinno zwrócić: "Software Engineer"
// console.log(getEmployeeInfo(employee, "street")); // Powinno zwrócić: "Klucz nie istnieje"

// Tablica
const employee = [
  {
    ["personalInfo"]: [
      { ["firstName"]: "John" },
      { ["lastName"]: "Doe" },
      { ["age"]: 30 },
      { ["address"]: [{ ["city"]: "Anytown" }, { ["state"]: "NY" }, { ["postalCode"]: "12345" }] },
    ],
  },
  {
    ["employmentDetails"]: [
      { ["position"]: "Software Engineer" },
      { ["department"]: "Engineering" },
      { ["startDate"]: "2022-01-01" },
      { ["endDate"]: null },
      { ["manager"]: [{ ["firstName"]: "Alice" }, { ["lastName"]: "Smith" }, { ["email"]: "alice@example.com" }] },
    ],
  },
];

const getEmployeeInfo = (employee, keyName) => {
  for (const element of employee) {
    if (element.hasOwnProperty(keyName)) {
      return element[keyName];
    }
  }
};

console.log(getEmployeeInfo(employee, "firstName"));
console.log(getEmployeeInfo(employee, "employmentDetails"));
console.log(getEmployeeInfo(employee, "personalInfo"));
