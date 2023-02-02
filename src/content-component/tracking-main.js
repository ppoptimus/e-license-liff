import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Tracking = () => {
  const navigate = useNavigate();
  const [previewLicense] = useState({
    LicenseNo: "650100111",
    LicenseName: "คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ",
  });
  const [request] = useState([
    { requestCode: "6501001", LicenseName: "คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ" },
    { requestCode: "6502002", LicenseName: "คำขอจดทะเบียนลูกจ้าง" },
    { requestCode: "6503003", LicenseName: "คำขอจัดตั้งสำนักงานชั่วคราว" },
  ]);
  const [tempRequest, setTempRequest] = useState("");

  const [requestCode, setRequestCode] = useState("");

  const onSearchChange = (e) => {
    setRequestCode(e.target.value);
  };
  const onSearchClick = () => {
    const filtered = request.filter((obj) => {
      return obj.requestCode === requestCode;
    });
    setTempRequest(filtered);
    console.log(requestCode.length);
  };

  const onTrackingRequest = (requestCode) => {
   
    navigate("/tracking-detail", { state: { requestCode } });
  };

  return (
    <div className="container bg-main vh-100">
      <div className="d-flex flex-column mt-3 p-3">
        <b className="text-info fs-5">รายการคำขอ</b>

        <>
          <div className="d-flex align-items-center justify-content-start mt-1">
            <input
              className="form-control form-control-lg rounded-pill rounded-end"
              type="text"
              placeholder="เลขที่คำขอ"
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
                <div className="card bg-gradient-cyan mb-3 rounded-pill shadow">
                  <div className="card-body">
                    <p className="card-title fs-6">{i.LicenseName}</p>
                  </div>
                </div>
              </div>
            ))
          : // request.map((i) => (
            // 		<div className=' w-auto mt-2' key={i.requestCode} onClick={() => onTrackingRequest(i.requestCode)}>
            // 			<div className='card bg-gradient-cyan mb-3  rounded-pill'>
            // 				<div className='card-body'>
            // 					<p className='card-title fs-6'>{i.LicenseName}</p>
            // 				</div>
            // 			</div>
            // 		</div>
            //   ))
            ""}
      </div>
    </div>
  );
};

export default Tracking;
