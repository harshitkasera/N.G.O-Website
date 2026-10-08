import React,{useState} from "react";
import "./Style/Home.css";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaClock, FaAward } from "react-icons/fa";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  FaWineGlassAlt,
  FaCapsules,
  FaSmoking,
  FaHeartbeat,
  FaUserCheck,
  FaUsers,
  FaLeaf,
  FaHome,
  FaEnvelope,
FaMapMarkerAlt,
 
} from "react-icons/fa";

import {
  FaFlask,
  FaHeart,
  FaRupeeSign,
} from "react-icons/fa";



const Home = () => {
  
  const [openFaq, setOpenFaq] = useState(0);

const faqs = [
  {
    q: "उपचार में कितना समय लगता है?",
    a: "लत की प्रकृति, गंभीरता और मरीज की स्थिति के अनुसार उपचार सामान्यतः 30 से 90 दिनों का होता है। कुछ मामलों में दीर्घकालिक पुनर्वास भी आवश्यक हो सकता है।",
  },
  {
    q: "क्या मरीज की पहचान गोपनीय रखी जाती है?",
    a: "हाँ, मरीज और परिवार की सभी जानकारी पूरी तरह गोपनीय रखी जाती है। बिना अनुमति किसी भी जानकारी को साझा नहीं किया जाता।",
  },
  {
    q: "क्या परिवार के सदस्य मरीज से मिल सकते हैं?",
    a: "हाँ, निर्धारित समय और नियमों के अनुसार परिवार के सदस्य मरीज से मिल सकते हैं। परिवार काउंसलिंग भी उपचार का महत्वपूर्ण हिस्सा है।",
  },
  {
    q: "क्या उपचार पूरी तरह सुरक्षित है?",
    a: "हाँ, उपचार अनुभवी डॉक्टरों और प्रशिक्षित स्टाफ की निगरानी में किया जाता है। डिटॉक्स और दवाइयों की प्रक्रिया सुरक्षित तरीके से की जाती है।",
  },
  {
    q: "क्या उपचार के बाद पुनरावृत्ति का खतरा रहता है?",
    a: "पुनरावृत्ति का खतरा हो सकता है, इसलिए फॉलो-अप, काउंसलिंग, परिवार का सहयोग और सही दिनचर्या बहुत जरूरी होती है।",
  },
  {
    q: "क्या भुगतान के विकल्प उपलब्ध हैं?",
    a: "हाँ, नकद, UPI और बैंक ट्रांसफर जैसे भुगतान विकल्प उपलब्ध रखे जा सकते हैं। सही जानकारी के लिए केंद्र से संपर्क करें।",
  },
  {
    q: "क्या महिला रोगियों के लिए अलग व्यवस्था है?",
    a: "हाँ, महिला रोगियों की सुरक्षा, गोपनीयता और सुविधा को ध्यान में रखते हुए अलग व्यवस्था उपलब्ध कराई जा सकती है।",
  },
];

const [expandedCard, setExpandedCard] = useState(null);

const services = [
  {
    id: 1,
    icon: <FaWineGlassAlt />,
    title: "शराब की लत का उपचार",
    short: "शराब की लत केवल एक आदत नहीं, बल्कि एक गंभीर स्वास्थ्य समस्या है जिसका समय पर उपचार आवश्यक है...",
    full: "शराब की लत केवल एक आदत नहीं, बल्कि एक गंभीर स्वास्थ्य समस्या है जिसका समय पर उपचार आवश्यक है। हमारे विशेषज्ञ चिकित्सकों की देखरेख में वैज्ञानिक डिटॉक्स, आधुनिक दवाओं और व्यक्तिगत काउंसलिंग के माध्यम से सुरक्षित एवं प्रभावी उपचार प्रदान किया जाता है। परिवार की भागीदारी, योग, ध्यान और व्यवहार चिकित्सा के माध्यम से स्थायी सुधार पर विशेष ध्यान दिया जाता है। हमारा उद्देश्य केवल शराब छुड़ाना नहीं, बल्कि मरीज को स्वस्थ, आत्मनिर्भर और नशा-मुक्त जीवन की ओर वापस ले जाना है।",
  },
  {
    id: 2,
    icon: <FaCapsules />,
    title: "ड्रग्स की लत का उपचार",
    short: "हेरोइन, गांजा, कोकीन, अफीम, ब्राउन शुगर और अन्य नशीले पदार्थों की लत से छुटकारा पाने के लिए सुरक्षित उपचार...",
    full: "हेरोइन, गांजा, कोकीन, अफीम, ब्राउन शुगर, सिंथेटिक ड्रग्स तथा अन्य सभी प्रकार के नशीले पदार्थों की लत से छुटकारा पाने के लिए हम वैज्ञानिक एवं सुरक्षित उपचार प्रदान करते हैं। अनुभवी डॉक्टरों और मनोचिकित्सकों की देखरेख में डिटॉक्स, दवाइयों, मनोवैज्ञानिक काउंसलिंग और व्यवहार चिकित्सा का समन्वित कार्यक्रम तैयार किया जाता है। योग, ध्यान, समूह चिकित्सा और पुनर्वास कार्यक्रम के माध्यम से मरीज को नशे से दूर रहकर स्वस्थ, आत्मविश्वासी और सम्मानजनक जीवन जीने के लिए तैयार किया जाता है। हमारा लक्ष्य केवल नशा छुड़ाना नहीं, बल्कि दोबारा नशे की ओर लौटने की संभावना को भी कम करना है।",
  },
  {
    id: 3,
    icon: <FaSmoking />,
    title: "तंबाकू एवं धूम्रपान",
    short: "गुटखा, सिगरेट, बीड़ी और अन्य तंबाकू उत्पादों की लत छुड़ाने के लिए सुरक्षित उपचार...",
    full: "गुटखा, सिगरेट, बीड़ी, वेपिंग तथा अन्य तंबाकू उत्पादों की लत से छुटकारा पाने के लिए हमारे केंद्र में सुरक्षित एवं प्रभावी उपचार उपलब्ध है। अनुभवी चिकित्सकों और परामर्शदाताओं की देखरेख में निकोटीन की निर्भरता को कम करने के लिए वैज्ञानिक उपचार, व्यवहार चिकित्सा और व्यक्तिगत काउंसलिंग प्रदान की जाती है। योग, ध्यान, प्रेरणात्मक सत्र और जीवनशैली में सकारात्मक बदलाव के माध्यम से मरीज को स्वस्थ फेफड़ों, बेहतर जीवनशैली और नशा-मुक्त भविष्य की ओर अग्रसर किया जाता है।",
  },
  {
    id: 4,
    icon: <FaHeartbeat />,
    title: "डिटॉक्स सुविधा",
    short: "24×7 विशेषज्ञ चिकित्सकों की निगरानी में सुरक्षित डिटॉक्सिफिकेशन सुविधा उपलब्ध है...",
    full: "हमारे नशा मुक्ति केंद्र में 24×7 विशेषज्ञ चिकित्सकों एवं प्रशिक्षित मेडिकल स्टाफ की निगरानी में सुरक्षित डिटॉक्सिफिकेशन सुविधा उपलब्ध है। डिटॉक्स उपचार के दौरान शरीर से नशीले पदार्थों के प्रभाव को वैज्ञानिक और नियंत्रित तरीके से बाहर निकाला जाता है। प्रत्येक मरीज की स्वास्थ्य स्थिति के अनुसार दवाइयों, नियमित स्वास्थ्य जांच और आवश्यक चिकित्सकीय देखभाल की व्यवस्था की जाती है।",
  },
  {
    id: 5,
    icon: <FaUserCheck />,
    title: "व्यक्तिगत काउंसलिंग",
    short: "अनुभवी मनोवैज्ञानिकों और काउंसलर्स द्वारा एक-पर-एक काउंसलिंग सत्र...",
    full: "नशे की लत केवल शारीरिक समस्या नहीं, बल्कि मानसिक और भावनात्मक चुनौतियों से भी जुड़ी होती है। हमारे केंद्र में अनुभवी मनोवैज्ञानिकों एवं प्रशिक्षित काउंसलर्स द्वारा प्रत्येक मरीज के साथ व्यक्तिगत काउंसलिंग सत्र आयोजित किए जाते हैं। इन सत्रों के माध्यम से मरीज की भावनाओं, तनाव, चिंता, अवसाद और नशे के मूल कारणों को समझकर समाधान खोजा जाता है।",
  },
  {
    id: 6,
    icon: <FaUsers />,
    title: "परिवार काउंसलिंग",
    short: "परिवार के सदस्यों को सही मार्गदर्शन और सहयोग दिया जाता है ताकि रिकवरी मजबूत बने...",
    full: "नशा मुक्ति की प्रक्रिया में परिवार की भूमिका अत्यंत महत्वपूर्ण होती है। हमारे केंद्र में परिवार काउंसलिंग के माध्यम से मरीज के परिजनों को सही मार्गदर्शन, भावनात्मक सहयोग और आवश्यक जानकारी प्रदान की जाती है। विशेषज्ञ काउंसलर्स परिवार को यह समझाते हैं कि मरीज के साथ किस प्रकार का व्यवहार और सहयोग उपचार को सफल बना सकता है।",
  },
  {
    id: 7,
    icon: <FaLeaf />,
    title: "योग एवं ध्यान",
    short: "मन और शरीर में संतुलन लाने के लिए योग, प्राणायाम और माइंडफुलनेस...",
    full: "योग, प्राणायाम और ध्यान नशा मुक्ति की प्रक्रिया का महत्वपूर्ण हिस्सा हैं। हमारे केंद्र में अनुभवी योग प्रशिक्षकों के मार्गदर्शन में नियमित योगासन, प्राणायाम, मेडिटेशन और माइंडफुलनेस सत्र आयोजित किए जाते हैं। ये अभ्यास तनाव, चिंता, क्रोध और नशे की तीव्र इच्छा को नियंत्रित करने में मदद करते हैं।",
  },
  {
    id: 8,
    icon: <FaHome />,
    title: "पुनर्वास कार्यक्रम",
    short: "उपचार के बाद सामान्य जीवन में वापसी के लिए दीर्घकालिक सहायता...",
    full: "उपचार पूरा होने के बाद भी मरीज को सामान्य और नशा-मुक्त जीवन में सफलतापूर्वक वापस लाना हमारे पुनर्वास कार्यक्रम का मुख्य उद्देश्य है। इस कार्यक्रम के अंतर्गत नियमित फॉलो-अप, व्यक्तिगत एवं समूह काउंसलिंग, जीवन कौशल विकास, योग, ध्यान और मानसिक स्वास्थ्य पर निरंतर मार्गदर्शन प्रदान किया जाता है। हमारा लक्ष्य मरीज को आत्मविश्वास, सम्मान और नई उम्मीद के साथ स्वस्थ जीवन की ओर आगे बढ़ाना है।",
  },
];
  return (
    <>
    <section id="home" className="hero">
      <div className="hero-left">
        <span className="badge">● भरोसेमंद नशा मुक्ति केंद्र</span>

        <h1>
          नई शुरुआत की ओर <br />
          <span>पहला कदम</span>
        </h1>

        <p>
          शराब, ड्रग्स, तंबाकू एवं अन्य सभी प्रकार की लत से मुक्ति के लिए
          <b> सुरक्षित, गोपनीय और अनुभवी </b>
          उपचार। हमारी विशेषज्ञ टीम आपके और आपके परिवार के साथ हर कदम पर है।
        </p>

        <div className="hero-buttons">
          <a href="tel:+919098530984" className="call-btn">
            <FaPhoneAlt /> अभी कॉल करें
          </a>

          <a
            href="https://wa.me/919098530984"
            target="_blank"
            className="wa-btn"
          >
            <FaWhatsapp /> WhatsApp करें
          </a>
        </div>

        <div className="hero-features">
          <div>
            <FaShieldAlt />
            <p>100% गोपनीय</p>
          </div>

          <div>
            <FaClock />
            <p>24×7 सहायता</p>
          </div>

          <div>
            <FaAward />
            <p>अनुभवी टीम</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src="/images/homee.png" alt="Nasha Mukti Kendra" />

        <div className="doctor-card">
          <span></span>
       <a href="tel:+919098530984">डॉक्टर ऑनलाइन</a>   
        </div>
      </div>

      <div className="floating-icons">
        <a href="https://wa.me/919098530984" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="tel:+919098530984" aria-label="Call Now">
          <FaPhoneAlt />
        </a>
      </div>
    </section>
<section id="services" className="services-section">
  <div className="services-heading">
    <h2>सम्पूर्ण उपचार, <span>हर लत के लिए</span></h2>
    <p>
      हर मरीज की समस्या और परिस्थिति अलग होती है — इसलिए हम व्यक्तिगत
      आवश्यकता के अनुसार वैज्ञानिक, सुरक्षित और सम्मानजनक उपचार उपलब्ध कराते हैं।
    </p>
  </div>

  <div className="services-grid">
    {services.map((service) => (
      <div className="service-card" key={service.id}>
        {service.icon}
        <h3>{service.title}</h3>

        <p>
          {expandedCard === service.id ? service.full : service.short}
        </p>

        <button
          className="read-btn"
          onClick={() =>
            setExpandedCard(expandedCard === service.id ? null : service.id)
          }
        >
          {expandedCard === service.id ? "Read Less" : "Read More"}
        </button>
      </div>
    ))}
  </div>
</section>

<section id="why" className="why-section">

  <div className="why-heading">
    <span>हमें क्यों चुनें</span>

    <h2>
      भरोसा जो आपकी <span>नई शुरुआत</span> को
      <br />
      मज़बूती दे
    </h2>
  </div>

  <div className="why-grid">

    <div className="why-card">
      <div className="icon">
        <FaAward />
      </div>

      <h3>अनुभवी विशेषज्ञ</h3>

      <p>
        20+ वर्षों के अनुभवी मनोचिकित्सक,
        परामर्शदाता एवं चिकित्सकों की टीम।
      </p>
    </div>

    <div className="why-card">
      <div className="icon">    
        <FaShieldAlt />
      </div>

      <h3>100% गोपनीयता</h3>

      <p>
        आपकी पहचान और उपचार की सभी जानकारी
        पूरी तरह सुरक्षित रखी जाती है।
      </p>
    </div>

    <div className="why-card">
      <div className="icon">
        <FaFlask />
      </div>

      <h3>वैज्ञानिक उपचार</h3>

      <p>
        आधुनिक एवं प्रमाण-आधारित चिकित्सा
        पद्धतियों द्वारा उपचार।
      </p>
    </div>

    <div className="why-card">
      <div className="icon">
        <FaHeart />
      </div>

      <h3>परिवार जैसा माहौल</h3>

      <p>
        स्वच्छ, शांत एवं सुरक्षित वातावरण
        जहाँ हर मरीज अपनापन महसूस करे।
      </p>
    </div>

    <div className="why-card">
      <div className="icon">
        <FaClock />
      </div>

      <h3>24×7 देखभाल</h3>

      <p>
        चौबीसों घंटे मेडिकल टीम एवं
        आपातकालीन सहायता उपलब्ध।
      </p>
    </div>

    <div className="why-card">
      <div className="icon">
        <FaRupeeSign />
      </div>

      <h3>किफायती शुल्क</h3>

      <p>
        पारदर्शी मूल्य निर्धारण तथा
        जरूरतमंदों के लिए विशेष सहायता।
      </p>
    </div>

  </div>

</section>

<section id="process" className="process-section">

    <div className="process-heading">

        <span>उपचार प्रक्रिया</span>

        <h2>
            6 चरणों में सम्पूर्ण <span>उपचार</span>
        </h2>

        <p>
            प्रथम परामर्श से लेकर पुनर्वास तक — हर कदम सुरक्षित,
            वैज्ञानिक और सम्मानजनक।
        </p>

    </div>

    <div className="timeline">

        <div className="process-card left">
            <div className="number">01</div>
            <small>चरण 01</small>
            <h3>नि:शुल्क परामर्श</h3>
            <p>
                परिवार से बात करके रोगी की स्थिति समझी जाती है
                और आगे की प्रक्रिया बताई जाती है।
            </p>
        </div>

        <div className="process-card right">
            <div className="number">02</div>
            <small>चरण 02</small>
            <h3>मेडिकल मूल्यांकन</h3>
            <p>
                अनुभवी डॉक्टर मरीज की मानसिक एवं शारीरिक
                स्थिति का मूल्यांकन करते हैं।
            </p>
        </div>

        <div className="process-card left">
            <div className="number">03</div>
            <small>चरण 03</small>
            <h3>सुरक्षित डिटॉक्स</h3>
            <p>
                24×7 निगरानी में शरीर को नशे से सुरक्षित तरीके
                से मुक्त किया जाता है।
            </p>
        </div>

        <div className="process-card right">
            <div className="number">04</div>
            <small>चरण 04</small>
            <h3>थेरेपी एवं काउंसलिंग</h3>
            <p>
                व्यक्तिगत एवं समूह थेरेपी द्वारा व्यवहार परिवर्तन
                पर कार्य किया जाता है।
            </p>
        </div>

        <div className="process-card left">
            <div className="number">05</div>
            <small>चरण 05</small>
            <h3>योग, ध्यान व पोषण</h3>
            <p>
                मानसिक और शारीरिक स्वास्थ्य के लिए योग,
                ध्यान एवं संतुलित आहार।
            </p>
        </div>

        <div className="process-card right">
            <div className="number">06</div>
            <small>चरण 06</small>
            <h3>पुनर्वास एवं फॉलो-अप</h3>
            <p>
                डिस्चार्ज के बाद भी नियमित मार्गदर्शन एवं
                परिवार के साथ निरंतर संपर्क।
            </p>
        </div>

    </div>

</section>
  
  <section id="routine" className="routine-section">
  <div className="routine-heading">
    <span>हमारी विशेषताएँ</span>
    <h2>
      सुरक्षित वातावरण और <span>नियमित दिनचर्या</span>
    </h2>
    <p>
      मरीजों के मानसिक, शारीरिक और भावनात्मक सुधार के लिए संतुलित
      दिनचर्या और अनुभवी टीम का सहयोग।
    </p>
  </div>

  <div className="features-list">
    <p>✅ शराब, स्मैक, गांजा, अफीम, चरस, तंबाकू, ब्राउन शुगर जैसे नशों का उपचार।</p>
    <p>✅ प्रशिक्षित काउंसलर, डॉक्टर, योग शिक्षक और सपोर्ट स्टाफ की देखरेख।</p>
    <p>✅ स्वच्छ वातावरण, सुरक्षित कमरे, नियमित भोजन और दवाइयों की सुविधा।</p>
    <p>✅ परिवार काउंसलिंग, योग, ध्यान, थेरेपी और पुनर्वास कार्यक्रम।</p>
  </div>

  <div className="routine-table-box">
    <table>
      <thead>
        <tr>
          <th>समय</th>
          <th>गतिविधि</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>प्रातः 06:45</td><td>पर जागना</td></tr>
        <tr><td>प्रातः 06:56 से 07:00</td><td>प्रार्थना</td></tr>
        <tr><td>प्रातः 07:00 से 07:30</td><td>योग और ध्यान</td></tr>
        <tr><td>प्रातः 07:30 से 08:30</td><td>चाय / टी.डी.ए. / स्नान</td></tr>
        <tr><td>प्रातः 08:30 से 08:45</td><td>दैनिक चिंतन / सिर्फ़ आज के लिए</td></tr>
        <tr><td>प्रातः 09:15</td><td>नाश्ता</td></tr>
        <tr><td>प्रातः 09:45 से 10:00</td><td>खेल</td></tr>
        <tr><td>प्रातः 10:15 से 10:45</td><td>रीडिंग</td></tr>
        <tr><td>प्रातः 11:00 से 11:45</td><td>क्लास</td></tr>
        <tr><td>दोपहर 12:00 से 12:15</td><td>वीडियो/वर्क पेपर</td></tr>
        <tr><td>दोपहर 01:15 से 02:15</td><td>भोजन</td></tr>
        <tr><td>दोपहर 02:15 से 03:00</td><td>आराम</td></tr>
        <tr><td>दोपहर 03:15 से 04:00</td><td>जी.डी. / ग्रुप एक्टिविटी</td></tr>
        <tr><td>दोपहर 04:00 से 05:00</td><td>चाय + नाश्ता + games</td></tr>
        <tr><td>शाम 05:00 से 06:00</td><td>छत पर घूमना / एक्सरसाइज</td></tr>
        <tr><td>शाम 06:00 से 06:15</td><td>मोन रहना</td></tr>
        <tr><td>शाम 06:30 से 07:30</td><td>एन.ए. / ए.ए. मीटिंग</td></tr>
        <tr><td>रात 07:30 से 08:30</td><td>टीवी देखना</td></tr>
        <tr><td>रात 08:30 से 09:30</td><td>भोजन</td></tr>
        <tr><td>रात 09:00 से 09:30</td><td>दवाइयां</td></tr>
        <tr><td>रात 10:15</td><td>सोना / लाइट बंद</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section id="faq" className="faq-section">
  <div className="faq-heading">
    <h2>
      आपके मन के <span>हर सवाल का जवाब</span>
    </h2>
  </div>

  <div className="faq-list">
    {faqs.map((item, index) => (
      <div className={`faq-item ${openFaq === index ? "active" : ""}`} key={index}>
        <button
          className="faq-question"
          onClick={() => setOpenFaq(openFaq === index ? null : index)}
        >
          <span>
            <FaQuestionCircle />
            {item.q}
          </span>

          {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openFaq === index && (
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

<section id="contact" className="home-contact-section">
  <div className="home-contact-heading">
    <h2>
      आज ही उठाएँ <span>पहला कदम</span>
    </h2>
    <p>
      हमारे विशेषज्ञ नि:शुल्क परामर्श के लिए 24×7 उपलब्ध हैं। आपकी जानकारी पूर्णतः गोपनीय रहेगी।
    </p>
  </div>

  <div className="home-contact-container">
    <div className="home-contact-info">
      <h3>यहाँ संपर्क करें</h3>
      <p>हम सुनने के लिए यहाँ हैं — बिना किसी निर्णय के।</p>

      <div className="home-info-box">
        <FaPhoneAlt />
        <div>
          <small>Phone</small>
      <a href="tel:+919098530984"><h4>+91 9098530984</h4></a>    
        </div>
      </div>

      <div className="home-info-box">
        <FaEnvelope />
        <div>
          <small>Email</small>
          <h4>khangodadinesh@gmail.com</h4>
        </div>
      </div>

      <div className="home-info-box">
        <FaMapMarkerAlt />
        <div>
          <small>Address</small>
          <h4>2, Chandra Nagar, In front Of BKSNL Govt. College, Near Nehar Shajapur - 465001</h4>
        </div>
      </div>

      <div className="home-info-box">
        <FaClock />
        <div>
          <small>समय</small>
          <h4>24×7 आपातकालीन सहायता उपलब्ध</h4>
        </div>
      </div>

      <a
        className="home-whatsapp-btn"
        href="https://wa.me/919098530984"
        target="_blank"
      >
        <FaWhatsapp /> WhatsApp पर बात करें
      </a>
    </div>

    <div className="home-map-box">
      <iframe
        title="Parichay Nasha Mukti Kendra Location"
        src="https://www.google.com/maps?q=Shajapur%20Madhya%20Pradesh&output=embed"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;