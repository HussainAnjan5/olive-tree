import { motion } from "motion/react";
import { Camera, Image as ImageIcon } from "lucide-react";
import Slider from "react-slick";


// Previous images
import artClassroom from "@/assets/art-clasroom.jpeg";
import cafeteria from "@/assets/cafeteria.jpeg";
import childrenPlaying from "@/assets/childern-playing.jpeg";
import happyChildren from "@/assets/happy-childern.jpeg";
import lab from "@/assets/lab.jpeg";
import musicClass from "@/assets/music-class.jpeg";
import readingTime from "@/assets/reading-time.jpeg";
import sportsActivities from "@/assets/sports-activities.jpeg";
import activity from "@/assets/classroom-activity.jpeg";

// Gallery folder images
import g1 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.33-PM-1-1536x1152.jpeg";
import g2 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.34-PM-1-1536x1152.jpeg";
import g3 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.34-PM-1536x1152 (1).jpeg";
import g4 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.34-PM-1536x1152.jpeg";
import g5 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.35-PM-1536x1152.jpeg";
import g6 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.35-PM-2-1536x1152.jpeg";
import g7 from "@/assets/gallery/WhatsApp-Image-2024-07-07-at-2.47.36-PM-1536x1152.jpeg";
import g8 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.29-PM-1152x1536.jpeg";
import g9 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.32-PM-1-1152x1536.jpeg";
import g10 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.32-PM-1152x1536.jpeg";
import g11 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.33-PM-1152x1536.jpeg";
import g12 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.36-PM-768x1310.jpeg";
import g13 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.39-PM-1.jpeg";
import g14 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.42-PM-1.jpeg";
import g15 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.43-PM-1-1536x1152.jpeg";
import g16 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.43-PM-1152x1536.jpeg";
import g17 from "@/assets/gallery/WhatsApp-Image-2024-07-17-at-7.14.45-PM-1536x1152.jpeg";

export function Gallery() {
  const heroSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const images = [
    // Previous images
    happyChildren, activity, childrenPlaying, sportsActivities, lab, musicClass, readingTime, artClassroom, cafeteria,
    // Gallery folder images
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F0F9FF] to-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Slider {...heroSliderSettings} className="h-full">
            <div className="h-[500px] outline-none">
              <img src={happyChildren} alt="Happy Children" className="w-full h-full object-cover" />
            </div>
            <div className="h-[500px] outline-none">
              <img src={childrenPlaying} alt="Children Playing" className="w-full h-full object-cover" />
            </div>
            <div className="h-[500px] outline-none">
              <img src={activity} alt="Classroom Activity" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a4e]/95 via-[#0f172a50]/85 to-[#0ea4e969]/80 pointer-events-none" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] flex items-center justify-center shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-[#0EA5E9] to-[#D4AF37] bg-clip-text ">
                  Gallery
                </h1>
                <p className="text-[#F0F9FF] text-lg mt-1">Moments that Matter</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-[#F0F9FF]">
              Explore our vibrant learning environment and happy moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - Bento Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Our Photo Gallery</h2>
            <p className="text-xl text-[#0EA5E9] font-semibold">
              Capturing the Joy of Learning at Olive Tree Montessori
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group cursor-pointer ${
                  index === 0 || index === 4 || index === 8 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 || index === 4 || index === 8 ? "h-[500px]" : "h-[300px]"}`}>
                  <img
                    src={img}
                    alt="Gallery Image"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Experience the Difference</h2>
              <p className="text-[#F0F9FF] text-lg">
                Join our community and see why parents choose Olive Tree Montessori
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1,250+", label: "Happy Students" },
                { number: "890+", label: "Learning Programs" },
                { number: "170+", label: "Expert Teachers" },
                { number: "4", label: "Modern Campuses" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</div>
                  <div className="text-[#F0F9FF]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}