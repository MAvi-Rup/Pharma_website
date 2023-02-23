import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllEmployee.css';

// const employees = [
//   {
//     id: 1,
//     name: 'John Doe',
//     department: 'Marketing',
//     age: 32,
//     pic: 'https://via.placeholder.com/150',
//     salary: 50000,
//     annualLeave: 15,
//     salaryPending: false
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',
//     department: 'Finance',
//     age: 28,
//     pic: 'https://via.placeholder.com/150',
//     salary: 55000,
//     annualLeave: 10,
//     salaryPending: false
//   },
//   {
//     id: 3,
//     name: 'Jim Brown',
//     department: 'Human Resources',
//     age: 35,
//     pic: 'https://via.placeholder.com/150',
//     salary: 60000,
//     annualLeave: 20,
//     salaryPending: false
//   },
//   {
//     id: 4,
//     name: 'Emily Davis',
//     department: 'Sales',
//     age: 31,
//     pic: 'https://via.placeholder.com/150',
//     salary: 45000,
//     annualLeave: 12,
//     salaryPending: false
//   },
//   {
//     id: 5,
//     name: 'Michael Scott',
//     department: 'Operations',
//     age: 40,
//     pic: 'https://via.placeholder.com/150',
//     salary: 65000,
//     annualLeave: 18,
//     salaryPending: false
//   },
//   {
//     id: 6,
//     name: 'Michael Scott',
//     department: 'Operations',
//     age: 40,
//     pic: 'https://via.placeholder.com/150',
//     salary: 65000,
//     annualLeave: 18,
//     salaryPending: false
//   }
// ];


const AllEmployee = () => {
  
const [employees, setEmployees] = useState([])
useEffect(()=>{
  fetch('http://localhost:5001/employees')
  .then(res=>res.json())
  .then(data=>setEmployees(data))
})

const navigate = useNavigate()
    const navigateEmployeeDetails = id => {
        navigate(`${id}`)
    }
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id}>
          <img className='p-4 img-fluid'  src={employee.imageSrc} alt={employee.name} />
          <h2>{employee.name}</h2>
          <p>Department: {employee.department}</p>
          <p>Age: {employee.age}</p>
          <p>Salary: {employee.salary}</p>
          <p>Annual Leave Remaining: {employee.annualLeave}</p>
          <p>Salary: {employee.salary}</p>
          <button className='btn btn-primary mb-5' onClick={()=>{navigateEmployeeDetails(employee._id)}}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default AllEmployee;
