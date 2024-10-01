import React, { useEffect } from "react";
import { useState } from "react";
import { Api_axio_Crud } from "../components/Axios_ApiHandler/Api_axio";
import { EMPCRUD } from "../components/Axios_ApiHandler/Movies_Key";

const Client = () => {
  const [clientist, setClient] = useState([]);

  const [isFormVisble, isClient] = useState(false);

  const [clientObj, setClientObj] = useState({
    clientId: 0,
    contactPersonName: "",
    companyName: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    EmployeeStrength: 0,
    gstNo: "",
    contactNo: "",
    regNo: "",
  });

  const changUpdateForm = (event, key) => {
    console.log("key " + key, "Value : " + event.target.value);
    setClientObj((oldObj) => ({ ...oldObj, [key]: event.target.value }));
  };

  useEffect(() => {
    getAllClient();
  }, []);

  const getAllClient = async () => {
    try {
      const res = await Api_axio_Crud.get(EMPCRUD.apiBaseUrl + "GetAllClients");
      console.log(res.data);
      setClient(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showClentForm = () => {
    isClient(true);
  };

  const hidelentForm = () => {
    isClient(false);
  };

  const saveClent = async () => {
    try {
      const res = await Api_axio_Crud.post(
        EMPCRUD.apiBaseUrl + "AddUpdateClient",
        clientObj
      );
      console.log(res.data);
      setClient(res.data.data);
      getAllClient();
      alert("Client Created Succefully..");
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = (clientObj) => {
    console.log("onEdit", clientObj);
    setClientObj(clientObj);
    showClentForm();
  };

  const onDeleteClient = async (clientId) => {
    // console.log("onDelete", clientId);
    try {
      const confirmBox = window.confirm(
        "Are You Sure Delete this Record ??" + clientId
      );
      if (confirmBox) {
        const res = await Api_axio_Crud.delete(
          EMPCRUD.apiBaseUrl + "DeleteClientByClientId?clientId=" + clientId
        );
        console.log(res.data);
        getAllClient();
        alert("Client Deleted Succefully..");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className={isFormVisble == true ? "col-md-8" : "col-md-12"}>
            <div class="card">
              <div class="card-header bg-success d-flex justify-content-between align-items-center">
                <strong className="text-white">Client Information</strong>
                <button
                  type="button"
                  class="btn btn-sm btn-danger"
                  onClick={showClentForm}
                >
                  <i class="fa fa-plus"></i> New Client
                </button>
              </div>

              <div class="card-body">
                <table class="table table-srtipped table-bordered ">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      {/* <th>Contact Person Name</th> */}
                      <th>Company Name </th>
                      <th> City </th>
                      <th>GST No</th>
                      <th> Contact No </th>
                      {/* <th>Registration No</th> */}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientist.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          {/* <td>{item?.contactPersonName}</td> */}
                          <td>{item?.companyName}</td>
                          <td>{item?.city}</td>
                          <td>{item?.gstNo}</td>
                          <td>{item?.contactNo}</td>
                          {/* <td>{item?.regNo}</td> */}
                          <td>
                            <button
                              className="btn btn-md btn-success mx-2 btn-sm"
                              onClick={() => onEdit(item)}
                            >
                              <i className="fa fa-pencil"></i>
                            </button>
                            <button
                              className="btn btn-md btn-danger btn-sm"
                              onClick={() => onDeleteClient(item.clientId)}
                            >
                              <i className="fa fa-trash"></i>
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

          {isFormVisble == true && (
            <div className="col-md-4 py-3">
              <div className="card">
                <div className="card-header bg-success d-flex justify-content-between align-items-center">
                  <strong className="text-white">Add Client</strong>

                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    onClick={hidelentForm}
                  >
                    <i class="fa fa-close"></i> close
                  </button>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="form-control-label">
                        Contact Person Name :
                      </label>

                      <input
                        type="text"
                        placeholder="Person Name"
                        className="form-control"
                        name="contactPersonName"
                        value={clientObj.contactPersonName}
                        onChange={(event) => {
                          changUpdateForm(event, "contactPersonName");
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Company Name :</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="form-control"
                        value={clientObj.companyName}
                        onChange={(event) => {
                          changUpdateForm(event,"companyName");
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      Registration No :
                      <input
                        type="text"
                        placeholder="Enter Registration no"
                        className="form-control"
                        value={clientObj.regNo}
                        onChange={(event) => {
                          changUpdateForm(event, "regNo");
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      City :
                      <input
                        type="text"
                        placeholder="Enter City Name"
                        className="form-control"
                        value={clientObj.city}
                        onChange={(event) => {
                          changUpdateForm(event, "city");
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Pin Code :</label>
                      <input
                        type="text"
                        placeholder="Enter Pincode"
                        className="form-control"
                        value={clientObj.pincode}
                        onChange={(event) => {
                          changUpdateForm(event, "pincode");
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>State :</label>
                      <input
                        type="text"
                        placeholder="Enter State"
                        className="form-control"
                        value={clientObj.state}
                        onChange={(event) => {
                          changUpdateForm(event, "state");
                        }}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>Contact No :</label>
                      <input
                        type="text"
                        placeholder="Contact No"
                        className="form-control"
                        value={clientObj.contactNo}
                        onChange={(event) => {
                          changUpdateForm(event, "contactNo");
                        }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>GstNo :</label>
                      <input
                        type="text"
                        placeholder="Enter GST No"
                        className="form-control"
                        value={clientObj.gstNo}
                        onChange={(event) => {
                          changUpdateForm(event, "gstNo");
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Employee Strength:</label>
                      <textarea
                        placeholder="Employee Strength"
                        className="form-control"
                        value={clientObj.EmployeeStrength}
                        onChange={(event) => {
                          changUpdateForm(event, "EmployeeStrength");
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Address :</label>
                      <textarea
                        placeholder="Address"
                        className="form-control"
                        value={clientObj.address}
                        onChange={(event) => {
                          changUpdateForm(event, "address");
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="form-group col-md-12 d-flex justify-content-center">
                    

                      {
                        clientObj.clientId == 0  &&
                        <button
                        type="button"
                        className="btn btn-sm btn-success"
                        onClick={saveClent}
                      >
                        <i className="fa fa-save"></i>
                        Save
                      </button>
                      }


                       {
                        clientObj.clientId !==  0  &&
                      <button
                       type="button"
                        className="btn btn-sm btn-warning"
                        onClick={saveClent}
                      >
                        <i className="fa fa-update"></i>
                        Update
                      </button>
                     }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Client;
