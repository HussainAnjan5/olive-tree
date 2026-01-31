import specialEdu6 from "@/assets/specialedu/6.jpeg";
import { Link } from "react-router";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft, BookOpen, Brain, Users, Trophy, Microscope, Library, Monitor, Star, GraduationCap, Award, Phone, Mail, MapPin, CheckCircle, Heart } from "lucide-react";
import { SEO } from "@/app/components/SEO";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { motion } from "motion/react";
import hero1 from "@/assets/important.png";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/hero-3.jpeg";
import madam from "@/assets/ceo-image.png";
import sadiakhan from "@/assets/sadiakhan.jpeg";
import missaroosa from "@/assets/missaroosa.jpeg";
import aromamaham from "@/assets/aromamaham.jpeg";
import cert1 from "@/assets/certifcate-1.jpeg";
import cert2 from "@/assets/certifcate-2.jpeg";
import cert3 from "@/assets/certifcate-3.jpeg";
import importantCert from "@/assets/important-certificate.jpeg";
import facilities from "@/assets/school-facilities.jpeg"; // Assuming we use 'classroom-activity.jpeg' or similar if not found, I'll check list again. Wait, user provided 'Our Certifications & Accreditations from my assets folder'. I will use certifcate-1/2/3/4.
// Re-checking file list from Step 215. Files available: certifcate-1.jpeg, certifcate-2.jpeg, certifcate-3.jpeg, certifcate-4.jpeg.
// For facilities, I will use "classroom-activity.jpeg" or "lab.jpeg" or similar if specific facilities image not found. Let's use 'lab.jpeg' as placeholder for facilities if no better match, or search for it.
// Actually, user said "Admission Procedure ... use from my assets folder images". I'll use `reading-time.jpeg` for Admission Procedure as it looks academic.
// User said "Media Gallery ... use from my assets folder images". I will use the `WhatsApp...` images for gallery.

import gallery1 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.44 PM (1).jpeg";
import gallery2 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.44 PM (2).jpeg";
import gallery3 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.45 PM.jpeg";
import gallery4 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.46 PM.jpeg";
import gallery5 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.47 PM (1).jpeg";
import gallery6 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.47 PM.jpeg";
import gallery7 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.48 PM (1).jpeg";
import gallery8 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.48 PM.jpeg";
import gallery9 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.49 PM (1).jpeg";
import gallery10 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.49 PM (2).jpeg";
import gallery11 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.49 PM.jpeg";
import gallery12 from "@/assets/WhatsApp Image 2026-01-26 at 12.21.50 PM (2).jpeg";
import admission from "@/assets/reading-time.jpeg";
export function Home() {
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const mediaSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const activities = [
    { name: "Sensorial Activities", icon: Brain },
    { name: "Fine Motor Skills", icon: BookOpen },
    { name: "Gross Motor Skills", icon: Users },
    { name: "Project-Based Learning", icon: Trophy },
    { name: "Montessori Education", icon: GraduationCap },
    { name: "Circle Time", icon: Users },
    { name: "Phonics Sessions", icon: BookOpen },
    { name: "Practical Life Skills", icon: Trophy },
  ];

  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors hidden md:block"
        aria-label="Next"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    );
  };

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors hidden md:block"
        aria-label="Previous"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
    );
  };

  const feedbackSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Miss Sana Murtaza",
      role: "CEO & Founder",
      qualification: "Australian Certified Montessori Teacher",
      image: madam,
    },
    {
      name: "Miss Sadia Khan",
      role: "Coordinator",
      qualification: "Certified Educator",
      image: sadiakhan,
    },
    {
      name: "Miss Aroosa",
      role: "Chartered Accountant",
      qualification: "Chartered Accountant",
      image: missaroosa,
    },
    {
      name: "Aroma Maham",
      role: "Mphil English UCP",
      qualification: "Mphil English",
      image: aromamaham,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best School in Lahore - Olive Tree Montessori | Australian Certified Montessori"
        description="OliveTree Montessori is an Australian and UK-certified Montessori & School in Lahore, Pakistan. Best Montessori & School offering world-class early childhood education, special education, speech therapy, and ADHD support."
        keywords="Best School in Lahore, Montessori Lahore, Best Montessori & School Lahore, Speech therapy Lahore, ADHD kids school, Australian Montessori Pakistan"
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-slate-50">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-yellow-100 blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Slider {...heroSliderSettings} className="hero-slider">
            {/* Slide 1 */}
            <div className="outline-none px-1">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left pt-8 lg:pt-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0EA5E9] text-sm font-semibold mx-auto lg:mx-0"
                  >
                    <Star className="w-4 h-4" /> Australian Certified
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] leading-tight"
                  >
                    Australian Certified <span className="text-[#0EA5E9]">Montessori in Lahore</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
                  >
                    OliveTree Montessori provides a world-class environment fostering creativity, critical thinking, and character development in Lahore.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  >
                    <Link
                      to="/apply-online"
                      className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Apply Now <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/about-us"
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0F172A] px-8 py-3.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg border border-gray-100"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mx-auto w-full max-w-lg lg:max-w-none"
                >
                  <div className="absolute inset-0 bg-[#0EA5E9] rounded-[2rem] rotate-3 opacity-10 transform scale-105" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                    <img 
                      src={hero1}
                      alt="Happy Children" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="outline-none px-1">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left pt-8 lg:pt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mx-auto lg:mx-0">
                    <Heart className="w-4 h-4" /> Inclusive Education
                  </div>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] leading-tight">
                    Specialized Support for <span className="text-purple-600">Every Child</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    Our dedicated special education programs, including speech therapy and ADHD support, ensure every student thrives.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link
                      to="/special-education"
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Our Programs <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                   <div className="absolute inset-0 bg-purple-600 rounded-[2rem] -rotate-3 opacity-10 transform scale-105" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                    <img 
                      src={hero2}
                      alt="Special Education" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

             {/* Slide 3 */}
            <div className="outline-none px-1">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left pt-8 lg:pt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold mx-auto lg:mx-0">
                    <Trophy className="w-4 h-4" /> World-Class Facilities
                  </div>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] leading-tight">
                    State-of-the-Art <span className="text-amber-500">Learning Spaces</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    Experience our modern campus designed to inspire curiosity and facilitate holistic development.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      View Gallery <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                  <div className="absolute inset-0 bg-amber-500 rounded-[2rem] rotate-2 opacity-10 transform scale-105" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                    <img 
                      src={hero3} 
                      alt="Campus" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* CEO's Message */}
      <section className="py-16 md:py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={madam} 
                  alt="CEO Miss Sana Murtaza" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white text-xl font-bold">Miss Sana Murtaza</h3>
                  <p className="text-gray-200">CEO & Founder</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center rotate-3 transform shadow-lg">
                  <Award className="w-7 h-7 text-white -rotate-3" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">CEO's Message</h2>
                  <p className="text-gray-500 font-medium tracking-wide text-sm uppercase mt-1">Leading with Vision</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="italic text-gray-800 font-medium">
                  "Welcome to OliveTree Montessori Lahore, where we proudly offer a distinguished early years education certified by Australian and UK standards."
                </p>
                <p>
                   At OliveTree Montessori, we inspire and empower students to be lifelong learners, critical thinkers, and valuable global citizens. Our Montessori curriculum fosters strong, independent students who uphold Pakistani values and excel academically.
                </p>
                <p>
                  We create a nurturing environment promoting academic excellence and character development, ensuring every child acquires the skills for lifelong success. Our students explore their interests and objectives, gaining a comprehensive understanding of the world.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[#0EA5E9] font-bold text-lg">
                    Join OliveTree Montessori & School in Lahore, where your child's education will be enriched with independence, excellence, and global awareness.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Welcome to OliveTree Montessori</h2>
              <p className="text-[#0EA5E9] text-lg font-semibold">Australian & UK Certified Excellence in Education</p>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                OliveTree Montessori is an Australian and UK-certified institution, offering a world-class learning experience under the supervision of our highly qualified Australian-trained CEO and dedicated faculty. We nurture future leaders by encouraging young minds to explore, discover, and grow in an environment that prioritizes academic and personal development.
              </p>
              <p>
                Our activity-based learning approach fosters critical thinking, creativity, and problem-solving skills. Character building is a cornerstone of our philosophy, instilling values such as integrity, empathy, and resilience in our students to prepare them for the world with confidence and grace.
              </p>
              <p>
                Our state-of-the-art facilities and rich curriculum provide the ideal setting for holistic growth, balancing intellectual, emotional, and social development. Join the OliveTree Montessori & School, and let's shape the leaders of tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Students" },
              { number: "25+", label: "Expert Teachers" },
              { number: "3", label: "Modern Campuses" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0EA5E9] mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Our Learning Activities</h2>
            <p className="text-gray-600 text-lg">Comprehensive Montessori-Based Curriculum</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-[#0EA5E9] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#0F172A] text-sm">{activity.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Dedicated Team */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Our Dedicated Team</h2>
            <p className="text-gray-600 text-lg">Experienced Educators Committed to Excellence</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">{member.name}</h3>
                  <p className="text-[#0EA5E9] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.qualification}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/our-faculty"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Faculty <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-12"
          >
            Our Facilities
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Computer Lab",
                description: "Modern computer labs equipped with the latest technology for students to develop digital literacy and technical skills.",
              },
              {
                icon: Microscope,
                title: "Science Lab",
                description: "Fully equipped science laboratory providing hands-on experience with scientific experiments and research.",
              },
              {
                icon: Library,
                title: "Books & Library",
                description: "Extensive library collection with books and digital resources to support learning and encourage reading habits.",
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 mb-6 rounded-lg bg-[#0EA5E9] flex items-center justify-center">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{facility.title}</h3>
                <p className="text-gray-700 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Image Before Media Gallery */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0EA5E9]/10">
              <img src={specialEdu6} alt="Special Education" className="w-full h-auto object-cover" style={{maxHeight:'600px'}} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Media Gallery Carousel */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-12"
          >
            Media Gallery
          </motion.h2>
          <Slider {...mediaSliderSettings}>
            {[
              gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
              gallery7, gallery8, gallery9, gallery10, gallery11, gallery12
            ].map((img, idx) => (
              <div key={idx} className="px-3">
                <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Full Gallery <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Parent Feedback */}
      <section className="py-16 md:py-20 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Parent Feedback</h2>
            <p className="text-sky-100 text-lg">What Parents Say About OliveTree Montessori</p>
          </motion.div>
          <Slider {...feedbackSliderSettings} className="feedback-slider">
            {[
              {
                name: "Ayesha Khan",
                quote: "OliveTree has transformed my child's learning experience. The teachers are exceptional and truly care about each student's development.",
                rating: 5,
              },
              {
                name: "Ali Ahmed",
                quote: "Best Montessori & School in Lahore. The facilities are excellent and the staff is professional. Highly recommend to all parents.",
                rating: 5,
              },
              {
                name: "Fatima Malik",
                quote: "The special education program is outstanding. My son has shown tremendous progress in speech therapy and overall development.",
                rating: 5,
              },
              {
                name: "Hassan Raza",
                quote: "Professional staff, great facilities, and a nurturing environment. My daughter loves going to school every day.",
                rating: 5,
              },
              {
                name: "Sarah Jamil",
                quote: "Australian certified Montessori education in Lahore! The quality of teaching and care is exceptional.",
                rating: 5,
              },
            ].map((feedback, idx) => (
              <div key={idx} className="px-3">
                <div className="h-full p-8 text-center">
                  <p className="text-white mb-6 leading-relaxed text-lg">"{feedback.quote}"</p>
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${feedback.name}&background=random&color=fff`} />
                      <AvatarFallback>{feedback.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-bold text-white text-xl">{feedback.name}</h4>
                         <div className="flex justify-center gap-1 mt-2">
                            {[...Array(feedback.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Certificates & Accreditations */}
      <section className="py-16 md:py-20 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">Our Certifications & Accreditations</h2>
            <p className="text-gray-600 text-lg">Recognized Excellence in Montessori Education</p>
          </motion.div>

          {/* Featured Certificate */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-2 rounded-2xl shadow-xl border-4 border-[#0EA5E9]/10 max-w-3xl w-full"
            >
              <img
                src={importantCert}
                alt="Important Certification"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Australian Montessori Certification",
                image: cert1,
              },,
              {
                title: "UK Education Standards",
                image: cert2,
              },
              {
                title: "Special Education Accreditation",
                image: cert3,
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] text-center">{cert.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join OliveTree Montessori?</h2>
            <p className="text-xl text-gray-300 mb-8">Schedule a visit to our campus and experience our world-class facilities</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply-online"
                className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Apply Now <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0F172A] px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}