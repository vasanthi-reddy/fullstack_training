const url1 = "https://google.com/employeesList";
const url2 = "https://google.com/studentsList";

async function fetchSequentially () {
    try {
        const employeesResponse = await fetch(url1);
        console.log("Employees List:", employeesData);

        const studentsResponse = await fetch(url2);
        console.log("Students List:" studentsData);
    } catch(err) {
        console.log("Error fetching: err");
    }
}
fetchSequentially();



const url1 = "https://google.com/employeesList";
const url2 = "https://google.com/studentsList";

async function fetchParallel () {
    try {
        const [employeesResponse, studentsResponse] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        console.log("Employees List:", employeesData);
        console.log("students Lists:", studentsData);
    } catch(err) {
        console.log("Error fetching: err");
    }
}
fetchParallel();