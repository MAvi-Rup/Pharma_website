import React, { useEffect, useState } from 'react';
import { Card, Button, OverlayTrigger, Tooltip, Form } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import './EmployeeDetails.css';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  let from = location.state?.from?.pathname || "admin/all-employee";
  useEffect(() => {
    const url = `http://localhost:5001/employees/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);

  const handleEdit = (event) => {
    event.preventDefault();
    // Update employee data on server
    fetch(`http://localhost:5001/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      setShow(false)

  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      fetch(`http://localhost:5001/employees/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate(from, { replace: true });
        })
        .catch((error) => console.error(error));
    }
  };
  

  const { name, age, department, salary, annualLeave, imageSrc, presentAddress, email, phone, permanentAddress } = employee;

  return (
    <div className="employee-details w-50 m-auto">
      <Card>
        <div className="card-image">
          <img src={imageSrc} alt={name} className="card-img" />

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
            <div className='me-auto'>
              <BsFillPersonFill />
              <span>{name}</span>
            </div>
            <div>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id={`tooltip-edit-${name}`}>Edit Employee</Tooltip>}
              >
                <div className="card-edit" onClick={handleShow}>
                  <FiEdit />
                </div>
              </OverlayTrigger>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Updating User Information of {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={name} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" name="phone" value={phone} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="age" value={age} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="text" name="department" value={department} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="number" name="salary" value={salary} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formAnnualLeave">
                  <Form.Label>Annual Leave</Form.Label>
                  <Form.Control type="number" name="annualLeave" value={annualLeave} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formImageSrc">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control type="text" name="imageSrc" value={imageSrc} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formPresentAddress">
                  <Form.Label>Present Address</Form.Label>
                  <Form.Control type="text" name="presentAddress" value={presentAddress} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPermanentAddress">
                  <Form.Label>Permanent Address</Form.Label>
                  <Form.Control type="text" name="permanentAddress" value={permanentAddress} onChange={handleChange} required />
                </Form.Group>
                <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
              </Form>
            </Modal.Body>
            
          </Modal>
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
