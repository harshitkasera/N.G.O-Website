import React from "react";
import "./Style/Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <div className="footer-logo">
            <img src="/images/logo.jpeg" alt="Parichay Logo" />
            <div>
              <h3>परिचय</h3>
              <p>नशा मुक्ति केंद्र</p>
            </div>
          </div>

          <p className="footer-about">
            नशे की हर लत से मुक्ति का सुरक्षित, गोपनीय और सम्मानजनक पथ।
            20+ वर्षों के अनुभव और 5000+ सफल उपचारों के साथ।
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/share/199h1ktSgc/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/parichaynashamukti?igsh=bjZ5NXhsOGRzcmt2"><FaInstagram /></a>
            <a  href="https://wa.me/919098530984"> <FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-box">
          <h4>त्वरित लिंक</h4>
          <a href="#home">होम</a>
          <a href="#why">हमारे बारे में</a>
          <a href="#services">सेवाएँ</a>
          <a href="#process">उपचार प्रक्रिया</a>
          <a href="#routine">दिनचर्या</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">संपर्क</a>
        </div>

        <div className="footer-box">
          <h4>सेवाएँ</h4>
          <a href="#services">शराब की लत का उपचार</a>
          <a href="#services">ड्रग्स की लत का उपचार</a>
          <a href="#services">तंबाकू एवं धूम्रपान</a>
          <a href="#services">डिटॉक्स सुविधा</a>
          <a href="#services">व्यक्तिगत काउंसलिंग</a>
          <a href="#services">परिवार काउंसलिंग</a>
        </div>

        <div className="footer-box">
          <h4>संपर्क</h4>

          <p className="footer-contact">
            <FaPhoneAlt />
        <a href="tel:+919098530984"> +91 9098530984</a>
          </p>



          <p className="footer-contact">
            <FaEnvelope />parichaynashamukti@gmail.com
          </p>

          <p className="footer-contact">
            <FaMapMarkerAlt />        
2, चंद्र नगर, बीकेएसएनएल गवर्नमेंट कॉलेज के सामने, नेहर के पास शाजापुर - 465001
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 परिचय नशा मुक्ति केंद्र. सर्वाधिकार सुरक्षित।</p>
        <p>गोपनीयता नीति · नियम एवं शर्तें</p>
      </div>
    </footer>
  );
};

export default Footer;