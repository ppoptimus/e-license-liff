import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const GetLocation = () => {
  const [officeAddress, setOfficeAddress] = useState([]);
  const [officeNearMe, setOfficeNearMe] = useState([
    {
      officeId: 1,
      officeName: "กรมการจัดหางาน กระทรวงแรงงาน กรุงเทพมหานคร",
      officeAddress: "ถนน มิตรไมตรี แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
      officeTel: "1694",
      lat: "",
      long: "",
      location:
        "https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99+%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/@13.7641111,100.5494844,17z/data=!3m1!4b1!4m6!3m5!1s0x311d62fffcfa94cb:0x36c9bb8e92d3596f!8m2!3d13.7641111!4d100.5516731!16s%2Fg%2F1hc48gyfc?hl=th",
      distance: "0.5",
    },
  ])
  const [nameSearch, setNameSearch] = useState(null);
  const getOfficeData = [
    {
      officeId: 1,
      officeName: "กรมการจัดหางาน กระทรวงแรงงาน กรุงเทพมหานคร",
      officeAddress: "ถนน มิตรไมตรี แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
      officeTel: "1694",
      lat: "",
      long: "",
      location:
        "https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99+%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/@13.7641111,100.5494844,17z/data=!3m1!4b1!4m6!3m5!1s0x311d62fffcfa94cb:0x36c9bb8e92d3596f!8m2!3d13.7641111!4d100.5516731!16s%2Fg%2F1hc48gyfc?hl=th",
      distance: "0.5",
    },
    {
      officeId: 11,
      officeName: "สำนักงานจัดหางานจังหวัดกำแพงเพชร",
      officeAddress:
        "ศาลากลางจังหวัดกำแพงเพชร ชั้น 2 ถนนกำแพงเพชร-สุโขทัย ตำบลหนองปลิง อำเภอเมือง จังหวัดกำแพงเพชร 62000",
      officeTel: "0 5570 5023-4",
      lat: "",
      long: "",
      location:
        "https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99+%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/@13.7641111,100.5494844,17z/data=!3m1!4b1!4m6!3m5!1s0x311d62fffcfa94cb:0x36c9bb8e92d3596f!8m2!3d13.7641111!4d100.5516731!16s%2Fg%2F1hc48gyfc?hl=th",
      distance: "10.5",
    },
    {
      officeId: 12,
      officeName: "สำนักงานจัดหางานจังหวัดชัยนาท",
      officeAddress:
        "ศูนย์ราชการกระทรวงแรงงานจังหวัดชัยนาท ชั้น 2 สำนักงานจัดหางานจังหวัดชัยนาท 294 หมู่ 6 ตำบลบ้านกล้วย อำเภอเมือง จังหวัดชัยนาท 17000",
      officeTel: "0 5641 3035-6",
      lat: "",
      long: "",
      location:
        "https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99+%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/@13.7641111,100.5494844,17z/data=!3m1!4b1!4m6!3m5!1s0x311d62fffcfa94cb:0x36c9bb8e92d3596f!8m2!3d13.7641111!4d100.5516731!16s%2Fg%2F1hc48gyfc?hl=th",
      distance: "12",
    },
    {
      officeId: 13,
      officeName: "สำนักงานจัดหางานจังหวัดนครนายก",
      officeAddress:
        "ศาลากลางจังหวัดนครนายก (หลังใหม่) ชั้น ๑ ถนนสุวรรณศร ตำบลท่าช้าง อำเภอเมืองนครนายก จังหวัดนครนายก",
      officeTel: "055705023-4",
      lat: "",
      long: "",
      location:
        "https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99+%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/@13.7641111,100.5494844,17z/data=!3m1!4b1!4m6!3m5!1s0x311d62fffcfa94cb:0x36c9bb8e92d3596f!8m2!3d13.7641111!4d100.5516731!16s%2Fg%2F1hc48gyfc?hl=th",
      distance: "14.8",
    },
    {
      officeId: 14,
      officeName: "สำนักงานจัดหางานจังหวัดนครปฐม",
      officeAddress: "เลขที่ 39 หมู่ 6 ตำบลดอนยายหอม อำเภอเมือง จังหวัดนครปฐม 73000",
      officeTel: "034-250861-2",
      lat: "",
      long: "",
      location:
        "https://www.google.co.th/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99+%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99/@13.7641111,100.5494844,17z/data=!3m1!4b1!4m6!3m5!1s0x311d62fffcfa94cb:0x36c9bb8e92d3596f!8m2!3d13.7641111!4d100.5516731!16s%2Fg%2F1hc48gyfc?hl=th",
      distance: "15.5",
    },
  ];

  const onSearchChange = (e) => {
    setNameSearch(e.target.value);
  };

  const onSearchLocation = () => {
    const data = getOfficeData.filter((i) => i.officeName.includes(nameSearch));
    setOfficeAddress(data);
  };

  const onClickNearMe = () => {
    setOfficeAddress(officeNearMe);
  };
  return (
    <>
      <div className="nav navbar bg-info mx-0 justify-content-center align-items-center pt-3">
        <div className="h4">ค้นหาสาขาใกล้คุณ</div>
      </div>
      <div className="container">
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
        <div className="row">
          {officeAddress
            ? officeAddress.map((i) => (
                <div className="col-12">
                  <a className="text-decoration-none" href={i.location}>
                    <div className="card mx-3 my-3">
                      <div className="card-body" key={i.officeId}>
                        <h5 className="card-title">{i.officeName}</h5>
                        <p className="card-text">{i.officeAddress}</p>
                        {i.officeTel}
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
