import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Authen from "../function-component/authen";

const TrackingDetail = () => {
  const token = Authen.accessToken;
  const [authToken, setAuthToken] = useState({});
  const location = useLocation();

  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    setAuthToken(Authen());
    getTrackingDetail();
  }, []);

  const getTrackingDetail = async () => {
    let headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${location.state.token}`,
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: `http://103.86.50.59:8082/sevice/tracking?requestCode=${location.state.prop}`,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data.result[0].statusDate);
    setTrackData(response.data.result);
  };

  return (
    <>
      <section className="content mb-5 p-3">
        <div className="row mx-1 my-3">
          <h3 className="card-title fw-bolder">คำขอใบอนุญาตนำคนต่างด้าวมาทำงานกับนายจ้างในประเทศ</h3>
        </div>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="timeline">
                <div className="time-label">
                  <span className="bg-info px-2 py-1">8 days ago</span>
                </div>
                {trackData
                  ? trackData
                      .sort((a, b) => b.statusId - a.statusId)
                      .map((i) => (
                        <div key={i.statusId} className="my-4">
                          <div className="row">
                            <div className="col-1">
                              <FontAwesomeIcon icon={faCircle} className={"fs-2 status" + i.statusId} />
                            </div>
                            <div className="col-10">
                              <p className="h5">{i.statusName}</p>
                              <p className="h6">
                                <small>
                                  <FontAwesomeIcon icon={faClockRotateLeft} />
                                </small>{" "}
                                <small>{i.statusDate}</small>
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
