import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
// import "./adminlte.min.css";

const TrackingDetail = () => {
 
  const [trackData, setTrackData] = useState({
    request_code: "",
    request_name: "",
    start_date:"",
    request_tracking: [
      {
        status_id: 1,
        status_name: "เจ้าหน้าที่รับเรื่อง",
        date: "20/08/2565",
      },
      {
        status_id: 2,
        status_name: "ผ่านการตรวจสอบเอกสาร",
        date: "21/08/2565",
      },
      {
        status_id: 3,
        status_name: "รอรับมอบหลักประกันตัวจริง",
        date: "22/08/2565",
      },
      {
        status_id: 4,
        status_name: "เจ้าหน้าที่ออกตรวจสถานที่",
        date: "23/08/2565",
      },
      {
        status_id: 5,
        status_name: "ผ่านการออกตรวจสถานที่",
        date: "25/08/2565",
      },
      {
        status_id: 6,
        status_name: "อยู่ในขั้นตอนนายทะเบียนพิจราณา",
        date: "27/08/2565",
      },
    ],
  });

  useEffect(() => {
    return () => {};
  }, []);


  return (
    <>
      <section className="content mb-5 p-3">
        <div className="row mx-1 my-3">
          <h3 className="card-title fw-bolder">คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                <div className="time-label">
                  <span className="bg-info px-2 py-1">8 days ago</span>
                </div>
                {trackData
                  ? trackData.request_tracking
                      .sort((a, b) => b.status_id - a.status_id)
                      .map((i) => (
                        <div key={i.status_id} className="mt-4">
                          {/* <i className={"fas fa-envelope status" + i.status_id} /> */}
                          <div className="row">
                            <div className="col-1">
                              <FontAwesomeIcon icon={faCircle} className={"fs-2 status" + i.status_id} />
                            </div>
                            <div className="col-10">
                              <p className="h4">{i.status_name}</p>
                              <p className="time">
                                <FontAwesomeIcon icon={faClockRotateLeft} className="" /> {i.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackingDetail;
