import React from "react";
import "./Style/Gallery.css";

const images = [
  {
    id: 1,
    image: "/images/gallery1.png",
    title: "काउंसलिंग सेशन",
  },
  {
    id: 2,
    image: "/images/gallery2.png",
    title: "योग एवं ध्यान",
  },
  {
    id: 3,
    image: "/images/gallery3.png",
    title: "स्वच्छ कमरे",
  },
  {
    id: 4,
    image: "/images/gallery4.png",
    title: "ग्रुप थेरेपी",
  },
  {
    id: 5,
    image: "/images/gallery5.png",
    title: "डॉक्टर परामर्श",
  },
  {
    id: 6,
    image: "/images/gallery6.png",
    title: "रिहैबिलिटेशन गतिविधियाँ",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-page">

      <div className="gallery-heading">

        <span>हमारी गैलरी</span>

        <h1>
          हमारे केंद्र की <span>झलकियाँ</span>
        </h1>

        <p>
          सुरक्षित वातावरण, आधुनिक सुविधाएँ और सकारात्मक माहौल जहाँ
          मरीज एक नई शुरुआत की ओर कदम बढ़ाते हैं।
        </p>

      </div>

      <div className="gallery-grid">

        {images.map((item) => (
          <div className="gallery-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;