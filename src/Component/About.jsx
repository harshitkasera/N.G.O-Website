import React from "react";
import "./Style/About.css";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-images">
        <img className="img-big" src="/images/about1.avif" alt="Treatment" />
        <img src="/images/about2.avif" alt="Yoga Therapy" />
        <img src="/images/about3.avif" alt="Mental Health" />
        <img src="/images/about4.avif" alt="Counselling" />
      </div>

      <div className="about-content">
        <span className="about-badge">हमारे बारे में</span>

        <h1>
          जहाँ पुनरुत्थान <span>अपनापन</span> बन जाता है
        </h1>

        <p>
          <b>परिचय नशा मुक्ति केंद्र</b> पिछले एक दशकों से नशे की लत से जूझ रहे
          हजारों लोगों को नई ज़िंदगी की राह दिखा रहा है। हम मानते हैं कि लत एक
          बीमारी है — सजा नहीं। इसी सोच के साथ हम चिकित्सा, परामर्श, योग, ध्यान
          और परिवार के सहयोग को मिलाकर समग्र, सम्मानजनक और सम्पूर्ण उपचार प्रदान
          करते हैं।
        </p>

        <ul>
          <li><FaCheckCircle /> वैज्ञानिक एवं मानवीय दृष्टिकोण से उपचार</li>
          <li><FaCheckCircle /> अनुभवी मनोचिकित्सक एवं परामर्शदाताओं की टीम</li>
          <li><FaCheckCircle /> स्वच्छ, सुरक्षित और शांत वातावरण</li>
          <li><FaCheckCircle /> व्यक्तिगत आवश्यकताओं के अनुसार उपचार योजना</li>
        </ul>

        <div className="about-stats">
          <div>
            <h2>2000+</h2>
            <p>ठीक हुए मरीज</p>
          </div>

          <div>
            <h2>10+</h2>
            <p>वर्षों का अनुभव</p>
          </div>

          <div>
            <h2>25+</h2>
            <p>विशेषज्ञ टीम</p>
          </div>

          <div>
            <h2>95%</h2>
            <p>सफलता दर</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;