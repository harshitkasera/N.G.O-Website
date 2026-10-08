import React from "react";
import "./Style/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappNumber = "919098530984"; // yaha kendra ka WhatsApp number

    const text = `
नमस्ते Parichay Nasha Mukti Kendra,

मुझे नि:शुल्क परामर्श चाहिए।

नाम: ${name}
फोन: ${phone}
संदेश: ${message}

कृपया मुझसे संपर्क करें।
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };
  return (
    <section className="contact-page">
      <div className="contact-heading">
        <h1>आज ही उठाएँ <span>पहला कदम</span></h1>
        <p>हमारे विशेषज्ञ नि:शुल्क परामर्श के लिए 24×7 उपलब्ध हैं। आपकी जानकारी पूर्णतः गोपनीय रहेगी।</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>यहाँ संपर्क करें</h2>
          <p>हम सुनने के लिए यहाँ हैं — बिना किसी निर्णय के।</p>

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <small>Phone</small>
              <a href="tel:+919098530984"> <h3>+91 9098530984</h3></a> 
            </div>
          </div>



          <div className="info-box">
            <FaEnvelope />
            <div>
              <small>Email</small>
              <h3>khangodadinesh@gmail.com</h3>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <small>Address</small>
              <h3>2, Chandra Nagar, In front Of BKSNL Govt. College, Near Nehar Shajapur - 465001</h3>
            </div>
          </div>

          <div className="info-box">
            <FaClock />
            <div>
              <small>समय</small>
              <h3>24×7 आपातकालीन सहायता उपलब्ध</h3>
            </div>
          </div>

          <a className="whatsapp-btn" href="https://wa.me/919098530984" target="_blank">
            <FaWhatsapp /> WhatsApp पर बात करें
          </a>
        </div>

        <div className="contact-form">
          <h2>नि:शुल्क परामर्श के लिए संपर्क करें</h2>
          <p>फॉर्म भरें — हमारी टीम कुछ ही मिनटों में आपसे संपर्क करेगी।</p>

          <form onSubmit={handleSubmit}>
            <label>आपका नाम *</label>
            <input name="name" type="text" placeholder="उदाहरण: राजेश कुमार" required />

            <label>फोन नंबर *</label>
            <input name="phone" type="tel" placeholder="उदाहरण: 98765 43210" required />

            <label>संदेश</label>
            <textarea name="message" placeholder="कृपया अपनी समस्या साझा करें — आपकी पहचान गोपनीय रहेगी।"></textarea>

            <button type="submit">Request Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;