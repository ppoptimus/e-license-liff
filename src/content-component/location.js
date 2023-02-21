import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Authen from "../function-component/authen";

const GetLocation = () => {
  const [authToken, setAuthToken] = useState({});

  useEffect(() => {
    setAuthToken(Authen());
  }, []);

  const [address, setOfficeAddress] = useState([]);
  const [nameSearch, setNameSearch] = useState(null);

  const getOfficeData = [
    {
      name: "กรมการจัดหางาน กระทรวงแรงงาน กรุงเทพมหานคร",
      address: "ถนน มิตรไมตรี แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
      telno: "1694",
      location: "https://goo.gl/maps/erLSAajyfDhfHs6S7",
      distance: "0.5",
    },
    {
      name: "สำนักงานจัดหางานจังหวัดกำแพงเพชร",
      address: "ศาลากลางจังหวัดกำแพงเพชร ชั้น 2 ถนนกำแพงเพชร-สุโขทัย ตำบลหนองปลิง อำเภอเมือง จังหวัดกำแพงเพชร 62000",
      telno: "0 5570 5023-4",
      location: "https://goo.gl/maps/fnQvdjkbjXaAHtk47",
      distance: "310.5",
    },
    {
      name: "สำนักงานจัดหางานจังหวัดชัยนาท",
      address:
        "ศูนย์ราชการกระทรวงแรงงานจังหวัดชัยนาท ชั้น 2 สำนักงานจัดหางานจังหวัดชัยนาท 294 หมู่ 6 ตำบลบ้านกล้วย อำเภอเมือง จังหวัดชัยนาท 17000",
      telno: "0 5641 3035-6",
      location: "https://goo.gl/maps/eXa8k2k5xmJEtief6",
      distance: "212",
    },
    {
      name: "สำนักงานจัดหางานจังหวัดนครนายก",
      address: "ศาลากลางจังหวัดนครนายก (หลังใหม่) ชั้น ๑ ถนนสุวรรณศร ตำบลท่าช้าง อำเภอเมืองนครนายก จังหวัดนครนายก",
      telno: "055705023-4",
      location: "https://goo.gl/maps/mTg3D3PDai6UQd9N8",
      distance: "114.8",
    },
    {
      name: "สำนักงานจัดหางานจังหวัดนครปฐม",
      address: "เลขที่ 39 หมู่ 6 ตำบลดอนยายหอม อำเภอเมือง จังหวัดนครปฐม 73000",
      telno: "034-250861-2",
      location: "https://goo.gl/maps/Tv1dBtdEXrNy7HTY7",
      distance: "75.5",
    },
  ];

  const onClickNearMe = () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      let headersList = {
        Accept: "*/*",
        Authorization: `Bearer ${authToken.accessToken}`,
        "Content-Type": "application/json",
      };
      let bodyContent = JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      let reqOptions = {
        url: "http://103.86.50.59:8082/sevice/nearme",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };
      try {
        let response = await axios.request(reqOptions);
        setOfficeAddress(response.data.result);
        console.log(position.coords.latitude);
      } catch (error) {
        console.log(error);
      }
    });
    
  };

  const onSearchChange = (e) => {
    setNameSearch(e.target.value);
  };

  const onSearchLocation = () => {
    
    navigator.geolocation.getCurrentPosition(async function (position) {
      let headersList = {
        Accept: "*/*",
        Authorization: `Bearer ${authToken.accessToken}`,
        "Content-Type": "application/json",
      };
      let bodyContent = JSON.stringify({
        "branchName": nameSearch,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      let reqOptions = {
        url: "http://103.86.50.59:8082/sevice/searchbranch",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };
      try {
        let response = await axios.request(reqOptions);
        setOfficeAddress(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    });
    
  };

  return (
    <>
      <div className="nav navbar bg-info mx-0 justify-content-center align-items-center pt-3">
        <div className="h4">ค้นหาสาขาใกล้คุณ</div>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-12">
            <div className="m-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg rounded-pill rounded-end"
                  placeholder="เช่น นครนายก"
                  onChange={onSearchChange}
                />

                <button
                  type="submit"
                  className="btn btn-lg btn-secondary rounded-pill rounded-start border"
                  onClick={onSearchLocation}
                >
                  <FontAwesomeIcon icon={faSearch} className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="m-1 text-center">
              <button
                type="submit"
                className="btn btn-lg bg-primary text-white rounded-pill border"
                onClick={onClickNearMe}
              >
                สาขาใกล้ฉัน
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {address
            ? address.map((i, index) => (
                <div className="col-12" key={index}>
                  <a className="text-decoration-none" href={i.location}>
                    <div className="card mx-3 my-3">
                      <div className="card-body">
                        <h5 className="card-title">{i.name}</h5>
                        <p className="card-text">{i.address}</p>
                        {i.telno}
                        <p>
                          <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                          {i.distance} km.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default GetLocation;
