import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const GetLocation = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-8 offset-md-2">
            <form action="simple-results.html">
              <div className="input-group">
                <input type="text" className="form-control form-control-lg rounded-start" placeholder="จังหวัด" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-lg btn-secondary">
                    <FontAwesomeIcon icon={faSearch} className="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
        <div className="col-md-8 offset-md-2">

          <div className="card card-widget widget-user">
            <div className="widget-user-header bg-info">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder & CEO</h5>
            </div>
            
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-10">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
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

export default GetLocation;
