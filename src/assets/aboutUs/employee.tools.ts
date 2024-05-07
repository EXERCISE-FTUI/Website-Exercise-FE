
import json from './employee.resource.json'
import Employee from './employeeSchema.ts';
const EmployeeList: Employee[] = [];

for (var key in json) {
    if (json.hasOwnProperty(key)) {
        const employee = new Employee(json[key].name, json[key].division, json[key].batch, json[key].position, json[key].image, json[key].linkedIn);
        EmployeeList.push(employee);
    }
}

export default EmployeeList;