import React, { useEffect, useState } from "react";
import { EMPCRUD } from "../components/Axios_ApiHandler/Movies_Key";
import { Api_axio_Crud } from "../components/Axios_ApiHandler/Api_axio";

const Employee = () => {
  const [employeeetist, setEmployee] = useState([]);

  const [isForm, isClient] = useState(false);

  useEffect(() => {
    getAllEmployee();
  }, []);

  const getAllEmployee = async () => {
    try {
      const res = await Api_axio_Crud.get(
        EMPCRUD.apiBaseUrl + "GetAllEmployee"
      );
      console.log(res.data);
      setEmployee(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showClentForm = () => {
    alert("Show form ");
    isClient(true);
  };

  const saveClent = () => {
    alert("Save Clent");
  };

  const onEdit = (data) => {
    console.log("onEdit", data);
  };

  const onDeleteClient = (id) => {
    console.log("onDelete", id);
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card" id="tblEmployee">
              <div className="card-header d-flex justify-content-between align-items-center">
                <strong>Employee Information</strong>
                <button type="button" className="btn btn-sm btn-danger">
                  <i className="fa fa-plus"></i> New Employee
                </button>
              </div>
              <div className="card-body">
                <table className="table table-srtipped table-bordered ">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Emp Name</th>
                      <th>Designation</th>
                      <th>Employeee Code</th>
                      <th>Role</th>
                      <th>Email id</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employeeetist.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item?.empName}</td>
                          <td>{item?.empDesignation}</td>
                          <td>{item?.empCode}</td>
                          <td>{item?.role}</td>
                          <td>{item?.empEmailId}</td>
                          <td>
                            <button
                              className="btn btn-md btn-success mx-2"
                              onClick={() => onEdit(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-md btn-danger"
                              onClick={() => onDeleteClient(item.empId)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-12 py-3">
            <div className="card" id="frmEmployee">
              <div className="card-header">
                <strong>Add Employee</strong>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-md-4">
                    <label>Name :</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Email :</label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Password :</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Designation :</label>
                    <input
                      type="text"
                      placeholder="Enter Designation"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Contact No :</label>
                    <input
                      type="text"
                      placeholder="Enter Contact No"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Alternate Contact No :</label>
                    <input
                      type="text"
                      placeholder="Alternate Contact No."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Personal Email ID :</label>
                    <input
                      type="text"
                      placeholder="Enter Personal EmailID"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Total Years of Experience :</label>
                    <input
                      type="text"
                      placeholder="Enter total Years of Experience"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Total Month of Experience :</label>
                    <input
                      type="text"
                      placeholder="Enter month of Experience"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>City :</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>State :</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Address :</label>
                    <textarea
                      placeholder="Enter Address"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Pincode :</label>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Personal City :</label>
                    <input
                      type="text"
                      placeholder="Enter Personal City"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Personal State :</label>
                    <input
                      type="text"
                      placeholder="Enter Personal State"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Personal Pin Code :</label>
                    <input
                      type="text"
                      placeholder="Enter Personal Pin Code"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Personal Address :</label>
                    <textarea
                      placeholder="Enter Personal Address"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <hr />
                <div className="form-group mt-2" id="tblSkill">
                  <div className="container">
                    <h5>Add Skills -</h5>
                    <div id="table-container">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Skill Name</th>
                            <th>Total Experience</th>
                            <th>Last Version</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="text"
                                placeholder="Skill"
                                className="form-control"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                placeholder="Total Experience"
                                className="form-control"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                placeholder="Last Version"
                                className="form-control"
                              />
                            </td>

                            <td className="btn-container">
                              <button className="btn btn-sm btn-success">
                                <i className="fa fa-save"></i>
                                Save
                              </button>
                              <button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash"></i>Delete
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <button className="btn btn-sm btn-info">
                                Add
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot></tfoot>
                      </table>
                      <div className="btn-container d-flex justify-content-end"></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="form-group mt-2" id="tblExperience">
                  <div className="container">
                    <h5>Add Experience -</h5>
                    <div id="table-container">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Company</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Designation</th>
                            <th>Project</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="text"
                                className="form-control "
                                placeholder="Company"
                              />
                            </td>
                            <td>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Start Date"
                              />
                            </td>
                            <td>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="End Date"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Designation"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Project"
                              />
                            </td>

                            <td className="col-md-12 btn-container d-flex">
                              <button className="btn btn-sm btn-success">
                                <i className="fa fa-save fa-sm"></i> Save
                              </button>
                              <button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash fa-sm "></i> Delete
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="6">
                              <button className="btn btn-sm btn-info">
                                Add
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot></tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <div className="row">
                  <div className="form-group col-md-12 d-flex justify-content-center">
                    <button className="btn btn-sm btn-success">
                      <i className="fa fa-save"></i>
                      Save
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-close"></i>Cancle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
