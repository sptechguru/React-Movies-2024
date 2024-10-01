import React, { useEffect, useState } from "react";
import { Api_axio_Crud } from "../components/Axios_ApiHandler/Api_axio";
import { EMPCRUD } from "../components/Axios_ApiHandler/Movies_Key";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const AddProject = () => {
  const getIdFromUrl = () => {
    const path = window.location.pathname;
    const id = path.substring(path.lastIndexOf("/") + 1);
    // console.log("movies id ", id);
    return id;
  };
  const projectId = getIdFromUrl();
  console.log("Project id ", projectId);

  const [employeetist, setEmployee] = useState([]);

  const [clienttist, setClient] = useState([]);

  const [clientObj, setClientProjectObj] = useState({
    clientProjectId: 0,
    projectName: "",
    startDate: "",
    expectedEndDate: "",
    leadByEmpId: 0,
    completedDate: new Date(),
    contactPerson: "",
    contactPersonContactNo: "",
    totalEmpWorking: 0,
    projectCost: 0,
    projectDetails: "",
    contactPersonEmailId: "",
    clientId: 0,
  });

  const changUpdateForm = (event, key) => {
    console.log("key " + key, "Value : " + event.target.value);
    setClientProjectObj((oldObj) => ({ ...oldObj, [key]: event.target.value }));
  };

  useEffect(() => {
    getAllEmployee();
    getAllClient();
    getAllProjectByd(projectId)
  }, []);


  const getAllProjectByd = async (id) => {
    try {
      const res = await Api_axio_Crud.get(
        EMPCRUD.apiBaseUrl + "GetProjectByProjectId?clientProjectId="+id
      );
      console.log("all Employeee", res.data.data);
      setClientProjectObj(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  const getAllEmployee = async () => {
    try {
      const res = await Api_axio_Crud.get(
        EMPCRUD.apiBaseUrl + "GetAllEmployee"
      );
      console.log("all Employeee", res.data.data);
      setEmployee(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllClient = async () => {
    try {
      const res = await Api_axio_Crud.get(EMPCRUD.apiBaseUrl + "GetAllClients");
      console.log("all Client ", res.data.data);
      setClient(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveClientProject = async () => {
    try {
      const res = await Api_axio_Crud.post(
        EMPCRUD.apiBaseUrl + "AddUpdateClientProject",
        clientObj
      );
      console.log(res.data);
      setClientProjectObj(res.data.data);
      alert("Client Projects Created Succefully..");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="col-md-12 py-3">
        <div className="card">
          <div className="card-header bg-success d-flex justify-content-between align-items-center">
            <strong className="text-white">Add Project</strong>

            <NavLink
              to={`/projects-list`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button type="button" class="btn btn-sm btn-dark">
                <i class="fa fa-close"></i> Back
              </button>
            </NavLink>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="form-group col-md-6">
                <label className="form-control-label">Project Name :</label>

                <input
                  type="text"
                  placeholder="Person Name"
                  className="form-control"
                  name="contactPersonName"
                  value={clientObj.projectName}
                  onChange={(event) => {
                    changUpdateForm(event, "projectName");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Start Date :</label>
                <input
                  type="date"
                  placeholder="Company Name"
                  className="form-control"
                  value={clientObj.startDate}
                  onChange={(event) => {
                    changUpdateForm(event, "startDate");
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                End Date:
                <input
                  type="date"
                  placeholder="Enter Registration no"
                  className="form-control"
                  value={clientObj.expectedEndDate}
                  onChange={(event) => {
                    changUpdateForm(event, "expectedEndDate");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                Lead By Employee:
                <select class="form-select form-control" onChange={(event) => {
                    changUpdateForm(event, "empId");
                  }}>
                  {employeetist.length > 0 ? (
                    employeetist.map((option, index) => (
                      <option key={index} value={option.empId}>
                        {option?.empName}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Loading options...
                    </option>
                  )}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Contact Person :</label>
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="form-control"
                  value={clientObj.contactPerson}
                  onChange={(event) => {
                    changUpdateForm(event, "contactPerson");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Contact Person ContactNo :</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="form-control"
                  value={clientObj.contactPersonContactNo}
                  onChange={(event) => {
                    changUpdateForm(event, "contactPersonContactNo");
                  }}
                />
              </div>

              <div className="form-group col-md-6">
                <label>Project Cost :</label>
                <input
                  type="text"
                  placeholder="Contact No"
                  className="form-control"
                  value={clientObj.projectCost}
                  onChange={(event) => {
                    changUpdateForm(event, "projectCost");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Client</label>
                <select class="form-select form-control" onChange={(event) => {
                    changUpdateForm(event, "clientId");
                  }}>
                  {clienttist.length > 0 ? (
                    clienttist.map((option, index) => (
                      <option key={index} value={option.clientId}>
                        {option.companyName}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Loading options...
                    </option>
                  )}
                </select>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <div className="row">
              <div className="form-group col-md-12 d-flex justify-content-center">
                {clientObj.clientId == 0 && (
                  <button
                    type="button"
                    className="btn btn-sm btn-success"
                    onClick={saveClientProject}
                  >
                    <i className="fa fa-save"></i>
                    Save
                  </button>
                )}

                {clientObj.clientId !== 0 && (
                  <button
                    type="button"
                    className="btn btn-sm btn-warning"
                    onClick={saveClientProject}
                  >
                    <i className="fa fa-update"></i>
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
