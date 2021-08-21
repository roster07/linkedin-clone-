import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="right_container">
      <div className="rightsidebar">
        <h4> LinkedIn News </h4>
        <div className="rightsidebar__each">
          <div className="rightsidebar__des">
            <span className="rightsidebar_span"></span>
            <p>Foreign SMEs eye Indian talent</p>
          </div>
          <p className="rightsidebar__small">2d ago . 31,88 readers</p>
        </div>
        <div className="rightsidebar__each">
          <div className="rightsidebar__des">
            <span className="rightsidebar_span"></span>
            <p>Your Salary hike in 2021.</p>
          </div>
          <p className="rightsidebar__small">1d ago . 11,216 readers</p>
        </div>
        <div className="rightsidebar__each">
          <div className="rightsidebar__des">
            <span className="rightsidebar_span"></span>
            <p>The companies going all WFH</p>
          </div>
          <p className="rightsidebar__small">1d ago . 81,478 readers</p>
        </div>
        <div className="rightsidebar__each">
          <div className="rightsidebar__des">
            <span className="rightsidebar_span"></span>
            <p>WhatsApp launch Desktop calls</p>
          </div>
          <p className="rightsidebar__small">1d ago . 4,700 readers</p>
        </div>
      </div>

      <div className="rightsidebar__bottom">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt="Advertise on LinkedIn"
          border="0"
        />
      </div>
    </div>
  );
}

export default Widgets;
