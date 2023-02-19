import React, { useEffect, useState } from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import './EmployeeDetails.css';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5001/employees/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);

  const handleEdit = (employee) => {
    // Logic for editing an employee's details
  };

  const handleDelete = (employeeId) => {
    // Logic for deleting an employee
  };

  const { name, age, department, salary, annualLeave, imageSrc, presentAddress,email, phone,permanentAddress } = employee;

  return (
    <div className="employee-details w-50 m-auto">
      <Card>
        <div className="card-image">
          <img src={imageSrc} alt={name} className="card-img" />
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`tooltip-edit-${name}`}>Edit Employee</Tooltip>}
          >
            <div className="card-edit" onClick={() => handleEdit(employee)}>
              <FiEdit />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`tooltip-delete-${name}`}>Delete Employee</Tooltip>}
          >
            <div className="card-delete" onClick={() => handleDelete(employee._id)}>
              <AiOutlineDelete />
            </div>
          </OverlayTrigger>
        </div>
        <Card.Body>
          <div className="card-person">
            <BsFillPersonFill />
            <span>{name}</span>
          </div>
          <div className="card-info">
            <div>
              <span>Email:</span>
              <span>{email}</span>
            </div>
            <div>
              <span>Number:</span>
              <span>{phone}</span>
            </div>
            <div>
              <span>Age:</span>
              <span>{age}</span>
            </div>
            <div>
              <span>Department:</span>
              <span>{department}</span>
            </div>
            <div>
              <span>Salary:</span>
              <span>${salary}</span>
            </div>
            <div>
              <span>Annual Leave:</span>
              <span>{annualLeave} days</span>
            </div>
            <div>
              <span>Present Address:</span>
              <span>{presentAddress}</span>
            </div>
            <div>
              <span>Permanent Address:</span>
              <span>{permanentAddress}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmployeeDetails;
