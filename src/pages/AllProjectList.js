import React, { useEffect, useState } from "react";
import { Api_axio_Crud } from "../components/Axios_ApiHandler/Api_axio";
import { EMPCRUD } from "../components/Axios_ApiHandler/Movies_Key";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const AllProjectList = () => {
  const [employeeetist, setEmployee] = useState([]);


  useEffect(() => {
    getAllClientProject();
  }, []);

  const getFomateDate = (date)=>{
    const data = new Date(date);
    return data.toDateString();
  }

  const getAllClientProject = async () => {
    try {
      const res = await Api_axio_Crud.get(
        EMPCRUD.apiBaseUrl + "GetAllClientProjects"
      );
      console.log(res.data);
      setEmployee(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  const onDeleteClient = async (Id) => {
    // console.log("onDelete", clientId);
    try {
      const confirmBox = window.confirm(
        "Are You Sure Delete this Record ??" + Id
      );
      if (confirmBox) {
        const res = await Api_axio_Crud.delete(
          EMPCRUD.apiBaseUrl + "DeleteProjectByProjectId?projectId=" + Id
        );
        console.log(res.data);
        getAllClientProject();
        alert("Project Deleted Succefully..");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card" id="tblEmployee">
            <div className="card-header bg-primary d-flex justify-content-between align-items-center">
              <strong className="text-white">
                Projects/Client Information
              </strong>
              <NavLink
                to={`/create-project/${0}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <button type="button" className="btn btn-sm btn-danger">
                  <i className="fa fa-plus"></i> New Project
                </button>
              </NavLink>
            </div>
            <div className="card-body">
              <table className="table table-srtipped table-bordered ">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Project Name</th>
                    <th>Designation</th>
                    <th>Employeee Code</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {employeeetist.map((item, index) => {
                    return (
                      <tr>
                        {/* key={index} */}
                        <td>{index + 1} </td>
                        <td>{item?.projectName}</td>
                        <td>{item?.empDesignation}</td>
                        <td>{item?.empCode}</td>
                        <td>{getFomateDate(item?.startDate)}</td>
                        <td>{getFomateDate(item?.expectedEndDate)}</td>
                        <td>
                          <NavLink
                            to={`/create-project/${item.clientProjectId}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <button className="btn btn-md btn-success btn-sm mx-2">
                              Edit
                            </button>
                          </NavLink>

                          <button
                            className="btn btn-md btn-danger btn-sm"
                            onClick={() => onDeleteClient(item.clientProjectId)}
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
      </div>
    </div>
  );
};

export default AllProjectList;
