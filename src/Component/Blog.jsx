import "./Style/Blog.css";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom"
const blogs = [
  {
    id: 1,
    image: "/images/blog1.png",
    title: "शराब की लत कैसे पहचानें?",
    desc: "शराब की लत के शुरुआती संकेत, कारण और समय रहते पहचानने के आसान तरीके।",
    slug: "sharab-ki-lat-kaise-pehchane"
  },
  {
    id: 2,
    image: "/images/blog4.png",
    title: "ड्रग्स छोड़ने के शुरुआती लक्षण",
    desc: "ड्रग्स छोड़ते समय शरीर और दिमाग में होने वाले बदलाव तथा उनका समाधान।",
     slug: "drugs-chhodne-ke-shuruaati-lakshan",
  },
  {
    id: 3,
    image: "/images/blog3.png",
    title: "परिवार मरीज की मदद कैसे करे?",
    desc: "रिकवरी के दौरान परिवार का सहयोग क्यों सबसे महत्वपूर्ण होता है।",
     slug: "parivar-mareez-ki-madad-kaise-kare",
  },
  {
    id: 4,
    image: "/images/blog6.png",
    title: "योग और ध्यान की भूमिका",
    desc: "योग, ध्यान और प्राणायाम नशा मुक्ति में किस प्रकार सहायक हैं।",
    slug: "yoga-aur-dhyan-ki-bhumika"
  },
  {
    id: 5,
    image: "/images/blog5.png",
    title: "डिटॉक्स क्या होता है?",
    desc: "डिटॉक्स प्रक्रिया, उसके फायदे और मरीज के लिए इसका महत्व।",
     slug: "detox-kya-hota-hai",
  },
  {
    id: 6,
    image: "/images/blog2.png",
    title: "रिलैप्स से कैसे बचें?",
    desc: "उपचार के बाद दोबारा नशे की ओर जाने से बचने के प्रभावी उपाय।",
     slug: "relapse-se-kaise-bache",
  }
];

const Blog = () => {
  return (
    <section className="blog-page">

      <div className="blog-hero">
        <span>हमारा ब्लॉग</span>

        <h1>
          ज्ञान, जागरूकता और <span>नई शुरुआत</span>
        </h1>

        <p>
          नशा मुक्ति, मानसिक स्वास्थ्य और पुनर्वास से जुड़ी विश्वसनीय जानकारी।
        </p>
      </div>

      <div className="featured-blog">

        <div className="featured-image">
          <img src="/images/blogg.png" alt="" />
        </div>

        <div className="featured-content">

          <span className="featured-tag">
            Featured Article
          </span>

          <h2>
            नशा एक बीमारी है, अपराध नहीं
          </h2>

          <p>
            सही समय पर इलाज, परिवार का सहयोग और विशेषज्ञों की देखरेख से
            हर व्यक्ति सामान्य जीवन में लौट सकता है।
          </p>
        </div>

      </div>

      <div className="blog-grid">

        {blogs.map((blog) => (

          <div className="blog-card" key={blog.id}>

            <img src={blog.image} alt="" />

            <div className="blog-card-body">

              <p className="date">
                <FaCalendarAlt />
                {blog.date}
              </p>

              <h3>{blog.title}</h3>

              <p>{blog.desc}</p>

             <Link className="read-more-btn" to={`/blog/${blog.slug}`}>
  Read More
</Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Blog; 