import { motion } from "motion/react";
import { Camera, Image as ImageIcon } from "lucide-react";
import Slider from "react-slick";

import artClassroom from "@/assets/art-clasroom.jpeg";
import cafeteria from "@/assets/cafeteria.jpeg";
import childrenPlaying from "@/assets/childern-playing.jpeg";
import happyChildren from "@/assets/happy-childern.jpeg";
import lab from "@/assets/lab.jpeg";
import musicClass from "@/assets/music-class.jpeg";
import readingTime from "@/assets/reading-time.jpeg";
import sportsActivities from "@/assets/sports-activities.jpeg";
import activity from "@/assets/classroom-activity.jpeg"

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
    {
      url: happyChildren,
      title: "Happy Children",
    },
    {
      url: activity,
      title: "Classroom Activity",
    },
    {
      url: childrenPlaying,
      title: "Children Playing",
    },
    {
       url: sportsActivities,
       title: "Sports Activities",
    },
    {
      url: lab,
      title: "Science Lab",
    },
    {
      url: musicClass,
      title: "Music Class",
    },
    {
      url: readingTime,
      title: "Reading Time",
    },
    {
      url: artClassroom,
      title: "Art Classroom",
    },
    {
      url: cafeteria,
      title: "School Cafeteria",
   }
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
            {images.map((image, index) => (
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
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center gap-3 mb-2">
                      <ImageIcon className="w-6 h-6 text-[#D4AF37]" />
                      <h3 className="text-white text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
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