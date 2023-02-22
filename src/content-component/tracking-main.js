import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Authen from "../function-component/authen";

const Tracking = () => {
  const [authToken, setAuthToken] = useState({});
  useEffect(() => {
    setAuthToken(Authen());
  }, []);

  const navigate = useNavigate();
  const [previewLicense] = useState({
    LicenseNo: "650100111",
    LicenseName: "คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ",
  });
  const [request, setRequest] = useState([]);
  const [reffNo, setReffNo] = useState("3654400543102");
  const [tempRequest, setTempRequest] = useState("");

  const onSearchChange = (e) => {
    setReffNo(e.target.value);
  };
  const onSearchClick = async () => {
    let headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${authToken.accessToken}`,
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: `http://103.86.50.59:8082/sevice/listRequest?refId=${reffNo}`,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    setTempRequest(response.data.result);
    console.log(response.data.result);
  };

  const onTrackingRequest = (requestCode) => {
    navigate("/tracking-detail", { state: { requestCode } });
  };

  return (
    <div className="container bg-main vh-100">
      <div className="d-flex flex-column mt-3 p-3">
        <b className="text-info fs-5">กรอกเลขที่นิติบุคล/บุคคลธรรมดา</b>

        <>
          <div className="d-flex align-items-center justify-content-start mt-1">
            <input
              className="form-control form-control-lg rounded-pill rounded-end"
              type="text"
              placeholder="เลขที่จดทะเบียน 13 หลัก"
              onChange={onSearchChange}
            />
            <button
              className="btn btn-lg bg-white rounded-pill rounded-start"
              style={{ border: "solid 2px #d6d6d6" }}
              onClick={onSearchClick}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </>

        {tempRequest.length !== 0
          ? tempRequest.map((i) => (
              <div className=" w-auto mt-2" key={i.requestCode} onClick={() => onTrackingRequest(i.requestCode)}>
                <div className="card bg-gradient-cyan mb-3 rounded-pill shadow px-3">
                  <div className="card-body">
                    <p className="card-title fs-6">{i.requestName}</p>
                    <p className="card-text fs-6">
                      เลขที่คำขอ <b>{i.requestCode}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Tracking;
