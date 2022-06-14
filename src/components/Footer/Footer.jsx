import React from "react";
import "./footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import academicals from "../../assests/academicals.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Sponsors</h4>
          <div className="footer-links">
            <a href="#">&bull; Future Hope Foundation</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>OUR WEB TECH LEAD</h4>
          <div className="footer-links">
            <a href="#">&bull; Theophilus Kinggrans Arthur</a>
            <a href="#">&bull; Ruth</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Academicas SC</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Ghana.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +233 054 157 7128.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +23354 157 7128
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email:sportingclubacademicas@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.academicassc.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={academicals} alt="academicas" />
          <p className="u-text-small"> &copy; Copyright 2022. AcademicasSC.com </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;