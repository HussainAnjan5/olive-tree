import { Target, Eye, Award, Users, TrendingUp, BookOpen, Globe, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-1.jpeg";
import hero3 from "@/assets/hero-3.jpeg";
import mission from "@/assets/WhatsApp Image 2026-01-26 at 12.21.57 PM (1).jpeg";
import vision from "@/assets/WhatsApp Image 2026-01-26 at 12.21.59 PM.jpeg";

export function AboutUs() {
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    certified: 0,
    teachers: 0,
  });

  useEffect(() => {
    const targetCounts = {
      students: 1250,
      courses: 890,
      certified: 512,
      teachers: 170,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        students: Math.floor(targetCounts.students * progress),
        courses: Math.floor(targetCounts.courses * progress),
        certified: Math.floor(targetCounts.certified * progress),
        teachers: Math.floor(targetCounts.teachers * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F0F9FF] to-white">
      {/* Hero Section */}
      <section className="relative h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${hero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/90 to-[#0EA5E9]/85" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#0EA5E9] to-[#D4AF37] bg-clip-text text-transparent"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mb-4"
            >
              Best School in Pakistan
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#F0F9FF]"
            >
              Shaping Leaders of Tomorrow Since Our Inception
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#0EA5E9]/20"
            >
              <div className="text-5xl font-bold text-[#0EA5E9] mb-2">{counts.students.toLocaleString()}</div>
              <div className="text-gray-600 font-semibold">Students Enrolled</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#D4AF37]/20"
            >
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">{counts.courses.toLocaleString()}</div>
              <div className="text-gray-600 font-semibold">Courses Uploaded</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#0EA5E9]/20"
            >
              <div className="text-5xl font-bold text-[#0EA5E9] mb-2">{counts.certified.toLocaleString()}</div>
              <div className="text-gray-600 font-semibold">Students Certified</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#D4AF37]/20"
            >
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">{counts.teachers.toLocaleString()}</div>
              <div className="text-gray-600 font-semibold">Global Teachers</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best School Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#0EA5E9]/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Best School in Pakistan
            </h2>
            <p className="text-xl text-[#0EA5E9] font-semibold mb-6">
              Olive Tree Montessori & School is the Best School near me.
            </p>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                At Olivetree Montessori & School, our mission is to help every child to explore their full potential. Through our highly tailored approach, we can identify your child's unique qualities and cater to their individual needs, ensuring a personalized and enriching educational experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Tenets */}
      <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#0F172A] mb-16"
          >
            Key Tenets of Olivetree Montessori & School
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Mixed-Age Groups",
                description: "Our mixed-age groups allow toddlers to learn from one another and gain skills by helping others, fostering a collaborative and supportive learning environment. This approach also offers a wide selection of activities designed to spark their curiosity and interest.",
                color: "#0EA5E9",
              },
              {
                icon: CheckCircle2,
                title: "Freedom of Choice",
                description: "We provide children the freedom to choose from various developmentally appropriate and challenging activities. Students work at their own pace, without interruption, promoting independence and self-motivation.",
                color: "#D4AF37",
              },
              {
                icon: TrendingUp,
                title: "Encouragement of Exploration",
                description: "We encourage children to explore, allowing them to discover new things, make mistakes, and learn from them. This process helps build critical thinking and enhance problem-solving skills.",
                color: "#0EA5E9",
              },
              {
                icon: Heart,
                title: "Respect for Individuality",
                description: "We esteem every child as an individual with unique talents. Our approach enhances respect among children for the environment, the community, and each other, fostering a sense of responsibility and empathy.",
                color: "#D4AF37",
              },
            ].map((tenet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-[#0EA5E9]/50 transition-all group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${tenet.color}, ${tenet.color}dd)` }}
                >
                  <tenet.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{tenet.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tenet.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={hero3}
                  alt="Children Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                WHY CHOOSE US
              </h2>
              <p className="text-2xl font-semibold text-[#0EA5E9] mb-6">
                The Best School in Lahore
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We hold every child in high esteem, recognizing their unique talents and abilities. Our environment promotes respect for the community, the environment, and each other, fostering a sense of responsibility and empathy.
                </p>
                <p>
                  Olivetree Montessori and School is not just a place of learning; it's a community where children are inspired to reach their fullest potential. Our commitment to providing a nurturing, engaging, and respectful environment makes us the ideal choice for parents seeking the best education for their children.
                </p>
                <p className="font-semibold text-[#0EA5E9]">
                  Join us at Olivetree, where every child's journey is valued, and every future is bright.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {/* Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#0EA5E9]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F172A]">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Olivetree Montessori and School, our mission is to provide an exceptional, nurturing educational environment that empowers every child to realize their full potential. We are dedicated to fostering a love of learning through a hands-on, activities-based curriculum that promotes independence, curiosity, and critical thinking.
                </p>
                <p className="text-[#0EA5E9] font-semibold">
                  At Olivetree, we are committed to shaping future leaders who are confident, compassionate, and prepared to make meaningful contributions to society.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={mission}
                  alt="Our Mission"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={vision}
                  alt="Our Vision"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#D4AF37]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F172A]">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We want to promote global knowledge and instill strong moral principles, such as tolerance and understanding of various races, religions, and lifestyles. We push kids to develop positive relationships with others and develop accountability skills.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our goal is to create a teaching team that is seasoned, committed, and passionate about helping children to learn. They should also be able to bring their understanding of and experience with the culture in which we live.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-3xl p-8 md:p-12 shadow-2xl text-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Our Core Values</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Excellence",
                  description: "We strive for the highest standards in education, facilities, and student outcomes.",
                },
                {
                  icon: Heart,
                  title: "Inclusivity",
                  description: "Every child deserves quality education, regardless of their abilities or background.",
                },
                {
                  icon: BookOpen,
                  title: "Innovation",
                  description: "We continuously evolve our teaching methods to meet the needs of modern learners.",
                },
                {
                  icon: CheckCircle2,
                  title: "Integrity",
                  description: "We build character by instilling values of honesty, empathy, and responsibility.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "We foster a supportive environment where families, teachers, and students thrive together.",
                },
                {
                  icon: Globe,
                  title: "Global Awareness",
                  description: "We prepare students to be responsible global citizens while honoring their roots.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <value.icon className="w-10 h-10 text-[#D4AF37] mb-4" />
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-[#F0F9FF]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Certifications */}
      <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-[#0EA5E9]/20 text-center"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A]">International Certifications</h3>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are proud to be certified by Australian and UK Montessori associations, ensuring that our educational standards meet the highest international benchmarks. Our faculty undergoes regular training and professional development to stay current with best practices in early childhood education.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
