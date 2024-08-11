import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AddProfileForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
  });

  const [vehicleDetails, setVehicleDetails] = useState({
    plateNumber: "",
    modelName: "",
    vehicleType: ""
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const alertMessage = `
      Full Name: ${personalDetails.fullName}
      Email: ${personalDetails.email}
      Mobile: ${personalDetails.mobile}
      Company: ${personalDetails.company}
      Plate Number: ${vehicleDetails.plateNumber}
      Model Name: ${vehicleDetails.modelName}
      Vehicle Type: ${vehicleDetails.vehicleType}
    `;
    alert(alertMessage);
    console.log("Personal Details:", personalDetails);
    console.log("Vehicle Details:", vehicleDetails);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="container mt-5">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="Profile">Add Profile</h4>
              </div>
              <div className="card-body">
                <h2 className="mb-3">Enter Details</h2>
                <p className="mb-3">Enter the details to Create a profile</p>
                <form onSubmit={handleSubmit}>
                  <div className="container mt-5">
                    <div className="line-container">
                      <div className="line"></div>
                      <div className="text">Personal Details</div>
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter Name"
                        value={personalDetails.fullName}
                        onChange={handlePersonalChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Email ID"
                        value={personalDetails.email}
                        onChange={handlePersonalChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mobile" className="form-label">
                        Mobile No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter Mobile No."
                        value={personalDetails.mobile}
                        onChange={handlePersonalChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label">
                        Company
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        id="company"
                        name="company"
                        value={personalDetails.company}
                        onChange={handlePersonalChange}
                        required
                      >
                        <option value="">Enter Company Name</option>
                        <option value="Zoho">Zoho</option>
                        <option value="TCS">TCS</option>
                        <option value="Google">Google</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="container mt-5">
                    <div className="line-container">
                      <div className="line"></div>
                      <div className="text">Vehicle Details</div>
                      <div className="line"></div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="line-container">
                        <div className="text">
                          <h6>Vehicle 1</h6>
                        </div>
                        <div className="line"></div>
                        <i className="bi bi-trash"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-3">
                      <label htmlFor="plateNumber" className="form-label">
                        Plate Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="plateNumber"
                        name="plateNumber"
                        placeholder="Enter Plate Number"
                        value={vehicleDetails.plateNumber}
                        onChange={handleVehicleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <p>Type</p>
                      <Form.Check
                        type="radio"
                        id="vehicleType1"
                        name="vehicleType"
                        value="Scooter"
                        onChange={handleVehicleChange}
                        inline
                        label={<i className="bi bi-scooter"></i>}
                      />
                      <Form.Check
                        type="radio"
                        id="vehicleType2"
                        name="vehicleType"
                        value="Bicycle"
                        onChange={handleVehicleChange}
                        inline
                        label={<i className="bi bi-bicycle"></i>}
                      />
                      <Form.Check
                        type="radio"
                        id="vehicleType3"
                        name="vehicleType"
                        value="Car"
                        onChange={handleVehicleChange}
                        inline
                        label={<i className="bi bi-car-front-fill"></i>}
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="form-group dotted-border p-4 mt-8">
                        <button type="button" className="btn btn-outline-secondary">+ Add Vehicle</button>
                      </div>
                    </div>
                    <div className="row mb-2"></div>
                    <div className="col-md-3">
                      <label htmlFor="modelName" className="form-label">
                        Model Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="modelName"
                        name="modelName"
                        placeholder="Enter Model Name"
                        value={vehicleDetails.modelName}
                        onChange={handleVehicleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-right">
                    <button type="button" className="btn1 btn-secondary">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Create Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default AddProfileForm;
 
