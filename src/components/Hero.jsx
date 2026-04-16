import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image: "https://portfoliosinharaj2005.netlify.app/assets/images/slides/slide01.jpg",
      title: "Elegant Necklace Collection",
      subtitle: "Discover premium designs"
    },
    {
      image: "https://portfoliosinharaj2005.netlify.app/assets/images/slides/slide02.jpg",
      title: "All Seasons Earrings",
      subtitle: "Perfect for your big day"
    },
    {
      image: "https://portfoliosinharaj2005.netlify.app/assets/images/slides/slide03.jpg",
      title: "Fashionable Mangalsutra",
      subtitle: "Traditional meets modern style"
    }
  ];

  return (
    <Zoom  scale={0.4} arrows={true}>
      {slides.map((slide, index) => (
        <div key={index} className="each-slide">
          <div className="slide-bg"
            style={{
              backgroundImage: `url(${slide.image})`,
              height: "500px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative"
            }}
          >
            {/* Overlay */}
            <div className="content-slides">

              {/* ✅ FIX: Add key */}
              <motion.h2
                key={`title-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slide.title}
              </motion.h2>

              <motion.p
                key={`sub-${index}`}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                {slide.subtitle}
              </motion.p>

            </div>
          </div>
        </div>
      ))}
    </Zoom>
  );
};

export default Hero;