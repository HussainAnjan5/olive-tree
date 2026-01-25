import { Link } from "react-router";
import { ChevronRight, Award, Heart, Brain, Target, Users, Sparkles, CheckCircle2, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function SpecialEducation() {
  const services = [
    { name: "ADHD Support", icon: Brain },
    { name: "Down Syndrome Programs", icon: Heart },
    { name: "Speech Therapy", icon: Sparkles },
    { name: "Behavior Therapy", icon: Target },
    { name: "Play School", icon: Users },
    { name: "Learning Therapy", icon: Brain },
    { name: "Occupational Therapy", icon: Heart },
    { name: "Brain Gym", icon: Brain },
    { name: "Cognitive Therapy", icon: Brain },
    { name: "Music Therapy", icon: Sparkles },
    { name: "ASD Interventions", icon: Target },
    { name: "Learning Therapies", icon: CheckCircle2 },
  ];

  const staff = [
    "M. Ghulam Murtaza",
    "Miss Gul Rukh",
    "Miss Humaira",
    "Miss Sana Murtaza",
    "Miss Yusra Sajjad",
  ];

  // YouTube Video IDs - these are example IDs for demonstration
  // Replace with actual OliveTree Montessori video IDs
  const youtubeVideos = [
    { id: "dQw4w9WgXcQ", title: "Speech Therapy Session" },
    { id: "9bZkp7q19f0", title: "ADHD Support Program" },
    { id: "3JZ_D3ELwOQ", title: "Down Syndrome Learning" },
    { id: "YQHsXMglC9A", title: "Montessori Activities" },
    { id: "kJQP7kiw5Fk", title: "Special Education Success Stories" },
    { id: "hT_nvWreIhg", title: "Therapy Programs Overview" },
  ];

  const [currentVideo, setCurrentVideo] = useState(youtubeVideos[0]);

  // Randomly select a video on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * youtubeVideos.length);
    setCurrentVideo(youtubeVideos[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB0aGVyYXB5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzY5MzE2NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080")',
          }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/75" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white max-w-2xl">
            <div className="inline-block bg-[#D4AF37] px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-medium">Sydney Campus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Special Education Programs
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Speech Therapy, Down Syndrome & ADHD Support
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Comprehensive Care at Our Sydney Campus, Johar Town
            </p>
            <Link
              to="/apply-online"
              className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Join Our Program <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-[#0EA5E9] flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                Lahore's First Kids Special Education Montessori
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Welcome to OliveTree Montessori and School's Sydney Campus, located at 45-B-1 Baig Road, Johar Town, Lahore. Our specialized facility is dedicated to providing exceptional care and education for children with special needs. We offer comprehensive therapy programs and early years education in a nurturing, inclusive environment.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              As Lahore's first kids special education Montessori, we combine Australian-certified Montessori methods with specialized therapy services to ensure every child reaches their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-3"
          >
            Our Specialized Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 text-lg mb-12"
          >
            Comprehensive Support for Every Child
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-[#0EA5E9] flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-3"
          >
            Our Programs in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 text-lg mb-12"
          >
            Watch our students' success stories and therapy sessions
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Featured Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentVideo.id}`}
                    title={currentVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A]">{currentVideo.title}</h3>
                  <p className="text-gray-600 mt-2">Experience our comprehensive special education programs</p>
                </div>
              </div>
            </motion.div>

            {/* Video Grid */}
            {youtubeVideos.slice(0, 4).map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer"
                onClick={() => setCurrentVideo(video)}
              >
                <div className="aspect-video relative group">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#0EA5E9] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#0F172A]">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@olivetreemontessoriprescho3738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Videos <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0F172A] rounded-xl p-8 md:p-10 text-white shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#D4AF37] flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Why Choose Us</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Australian-trained specialized educators",
                  "Individual Education Plans (IEP) for each child",
                  "State-of-the-art therapy facilities",
                  "Small class sizes for personalized attention",
                  "Parent training and support programs",
                  "Regular progress assessments and reports",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#0EA5E9] flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Our Expert Team</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Our dedicated team of specialists works collaboratively to provide the best care for your child:
              </p>
              <ul className="space-y-3">
                {staff.map((member, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                    <span className="font-semibold">{member}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-10 md:p-12 shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              Schedule a Visit to Our Sydney Campus
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Visit our specialized facility and meet our team. We're here to answer your questions and discuss how we can support your child's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply-online"
                className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Apply Now <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0F172A] border-2 border-[#0EA5E9] px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}