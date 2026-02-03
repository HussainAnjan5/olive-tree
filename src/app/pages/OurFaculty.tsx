import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";
import sadiakhan from "@/assets/sadiakhan.jpeg";
import aromamaham from "@/assets/aromamaham.jpeg";
import missaroosa from "@/assets/missaroosa.jpeg";
import aroosa from "@/assets/aroosa.jpeg";
import aminaali from "@/assets/aminaali.jpeg";
import tahminamumtaz from "@/assets/tahminamumtaz.jpeg";
import sanaakhtar from "@/assets/sanaakhtar.jpeg";
import fatimaarfan from "@/assets/fatimaarfan.jpeg";
import headerImage from "@/assets/header-image.jpg";

export function OurFaculty() {
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

  const faculty = [
    { name: "Miss Sadia Khan", position: "Coordinator", color: "#0EA5E9", image: sadiakhan },
    { name: "Aroma Maham", position: "Mphil English UCP", color: "#D4AF37", image: aromamaham },
    { name: "Miss Aroosa", position: "Chartered Accountant", color: "#0EA5E9", image: missaroosa },
    { name: "Aroosa", position: "Chartered Accountant", color: "#D4AF37", image: aroosa },
    { name: "Amina Ali", position: "BS Finance", color: "#0EA5E9", image: aminaali },
    { name: "Tehmina Mumtaz", position: "Clinical Psychologist", color: "#D4AF37", image: tahminamumtaz },
    { name: "Sana Akhtar", position: "Msc Clinical Psychologist", color: "#0EA5E9", image: sanaakhtar },
    { name: "Fatima Irfan", position: "Clinical Nutritionist", color: "#D4AF37", image: fatimaarfan },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F0F9FF] to-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={headerImage} alt="Our Faculty" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a4e]/95 via-[#0f172a50]/85 to-[#0ea4e969]/80 pointer-events-none" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-[#0EA5E9] to-[#D4AF37] bg-clip-text">
                Our Faculty
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-[#F0F9FF]">
              Best Montessori Lahore Early Childhood Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#0EA5E9]/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-[#0F172A]">Meet Our Expert Team</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-md mb-4">
One main contributing factor to Olive tree School’s success is its committed faculty. Our role model teachers emphasize project-based learning, art and technology, and a supportive environment in which everyone is accountable for helping kids to achieve their goal of attending school.

Olive Tree School is a firm believer in the value of supporting our teachers’ continued professional development. Our teachers can apply cutting-edge teaching techniques to achieve challenging, authentic student outcomes while working in a creative team atmosphere. The best professional development takes place on the job. Additionally, giving our teachers, teacher-leaders, and administrators the finest learning environments for our students entails doing the same for them.

At the start of the academic year, new teachers are introduced to our instructional paradigm and get the support of a community of practice, which includes peers and coaches. Experienced teachers can choose to work as lead teachers or pursue a job on the administration track. Our skilled teachers also assist in program creation, give professional development, execute intervention tactics, and offer advice on curriculum and design. We ensure Olive Tree School teachers are well-equipped and supported in fulfilling this crucial duty because we know how much of a difference they make to our students and to our aim of sending those children to college.

Olive Tree School teachers give kids a reason to live, prepare them to excel as global citizens, and stoke their desire to succeed in school and life. Our teachers are the key factor in a child’s readiness for the future because today’s toddlers will be the leaders of tomorrow.
What is taught to children at an early age stays with them for the rest of their life. They’ll apply what they’ve discovered to change society. Everyone knows that today’s toddlers will become tomorrow’s leaders, and our teachers can educate the youth during their formative years – whether through instructing in traditional classes, extracurricular activities, athletics, or preschool. The lives of our students can be improved by Olive Tree School’s excellent teachers. Olive Tree School teachers can fill the gap in a student’s life where there is a lack of support. We can serve as an example for others and serve as an inspiration for bigger and better things. Our Good teachers don’t let their gifted pupils get away with not reaching their full potential because they hold them accountable for their accomplishments and mistakes.

Olive Tree School teachers from all backgrounds and fields have the power to influence students’ attitudes and aid in the formation of concepts about society, life, and personal objectives. Teachers can challenge pupils’ inventiveness and push their boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid - Bento Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#0F172A] mb-4"
          >
            Our Dedicated Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-xl text-[#0EA5E9] font-semibold mb-16"
          >
            Qualified Professionals Committed to Excellence
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-[#0EA5E9]/50 hover:shadow-2xl transition-all group"
              >
                <div
                  className="w-60 h-80 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}dd)` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty is Special */}
      <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Highly Qualified",
                description: "Our teachers hold advanced degrees and professional certifications in their respective fields.",
                color: "#0EA5E9",
              },
              {
                icon: BookOpen,
                title: "Continuous Training",
                description: "Regular professional development ensures our faculty stays current with best practices.",
                color: "#D4AF37",
              },
              {
                icon: Users,
                title: "Student-Centered",
                description: "Every teacher is committed to personalized attention and student success.",
                color: "#0EA5E9",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-[#0EA5E9]/20 text-center"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
