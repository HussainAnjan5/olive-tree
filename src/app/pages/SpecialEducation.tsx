import { Link } from "react-router";
import { ChevronRight, Award, Heart, Brain, Target, Users, Sparkles, CheckCircle2, Music } from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";
import cc from "@/assets/ceochairman.jpg";
import hero from "@/assets/hero.jpeg";
import specialHero1 from "@/assets/specialedu/6.jpeg";
import specialHero2 from "@/assets/specialedu/a.png";
import video1 from "@/assets/WhatsApp Video 2026-01-26 at 12.21.45 PM.mp4";
import video2 from "@/assets/WhatsApp Video 2026-01-26 at 12.22.00 PM.mp4";
import video3 from "@/assets/WhatsApp Video 2026-01-26 at 12.22.01 PM.mp4";
import video4 from "@/assets/vedio-1.mp4";
import classroomActivity from "@/assets/classroom-activity.jpeg";
import artClassroom from "@/assets/art-clasroom.jpeg";
import lab from "@/assets/lab.jpeg";
import child from "@/assets/child.jpg";
import specialEdu1 from "@/assets/specialedu/2.png";
import specialEdu2 from "@/assets/specialedu/3.png";
import specialEdu3 from "@/assets/specialedu/4.png";
import specialEdu4 from "@/assets/specialedu/5.jpg";
import specialEdu5 from "@/assets/specialedu/6.jpeg";
import specialEdu6 from "@/assets/specialedu/7.jpg";
import specialEdu7 from "@/assets/specialedu/8.jpeg";
import specialEdu8 from "@/assets/specialedu/a.png";

export function SpecialEducation() {
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

  const services = [
    { 
      name: "ADHD Support", 
      icon: Brain, 
      desc: "Specialized programs and strategies to support students with attention deficit hyperactivity disorder (ADHD), promoting focus, organization, and self-regulation skills." 
    },
    { 
      name: "Down Syndrome Programs", 
      icon: Heart, 
      desc: "Individualized educational plans and therapeutic interventions to support students with Down syndrome, fostering cognitive, social, and motor skill development." 
    },
    { 
      name: "Speech Therapy", 
      icon: Sparkles, 
      desc: "Certified speech-language pathologists provide targeted interventions to improve communication skills, language development, and articulation." 
    },
    { 
      name: "Behavior Therapy", 
      icon: Target, 
      desc: "Evidence-based strategies and interventions to address challenging behaviors, promote positive social interactions, and enhance self-control and emotional regulation." 
    },
    { 
      name: "Play School", 
      icon: Users, 
      desc: "Engaging and developmentally appropriate early childhood programs designed to foster social, cognitive, and physical development through play-based learning activities." 
    },
    { 
      name: "Learning Therapy", 
      icon: Brain, 
      desc: "Personalized interventions and educational support to address learning difficulties, including dyslexia, dyscalculia, and other learning differences." 
    },
    { 
      name: "Occupational Therapy", 
      icon: Heart, 
      desc: "Customized interventions and activities to improve fine motor skills, sensory processing, self-care abilities, and participation in daily activities." 
    },
    { 
      name: "Brain Gym", 
      icon: Brain, 
      desc: "Movement-based programs enhance brain function and learning capabilities." 
    },
    { 
      name: "Cognitive Therapy", 
      icon: Brain, 
      desc: "Strengthening cognitive functions such as memory, attention, and problem-solving through tailored cognitive exercises." 
    },
    { 
      name: "Music Therapy", 
      icon: Music, 
      desc: "Leveraging the therapeutic power of music to address emotional, cognitive, and social needs." 
    },
    { 
      name: "ASD Interventions", 
      icon: Target, 
      desc: "Implementing individualized plans for children with Autism Spectrum Disorder to improve social, communication, and adaptive skills." 
    },
    { 
      name: "Learning Therapies", 
      icon: CheckCircle2, 
      desc: "Special learning interventions to support academic achievement and skill development." 
    },
  ];

  const staff = [
    "M. Ghulam Murtaza",
    "Miss Gul Rukh",
    "Miss Humaira",
    "Miss Sana Murtaza",
    "Miss Yusra Sajjad",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Slider {...heroSliderSettings} className="h-full">
            <div className="h-[500px] md:h-[600px] outline-none">
              <img src={specialHero1} alt="Special Education Hero 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[500px] md:h-[600px] outline-none">
              <img src={specialHero2} alt="Special Education Hero 2" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a4e]/95 via-[#0f172a50]/85 to-[#0ea4e969]/80 pointer-events-none" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Chairman's Message</h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Welcome to Olive Tree Sydney Campus, a Beacon of hope, Ray of Success for all our Beloved Kids and excellence for children with special needs, slow learners, and focused kids. Our commitment lies in creating an inclusive, supportive, and stimulating environment where every child can thrive and achieve their fullest potential.
                </p>
                <p>
                  At Olive Tree, we recognize the uniqueness of each child and the importance of tailored interventions. Our school provides a comprehensive suite of therapies, including Speech Therapy, Behavioral Therapy, Occupational Therapy, Cognitive Therapy, Music Therapy, Learning Therapy ADHD Support, ASD Interventions, Brain Gym and much more. These specialized programs are meticulously designed to address the diverse needs of our students, promoting their academic, social, and emotional growth.
                </p>
                <p>
                  Our therapeutic approach is grounded in evidence-based practices and clinical expertise. Our team of highly qualified professionals employs cutting-edge techniques and personalized strategies to facilitate significant progress in our students. The success stories of our school are a testament to our dedication, with a remarkable <span className="font-bold text-[#0EA5E9]">99% recovery rate, Masha Allah.</span>
                </p>
              </div>
            </motion.div>

            {/* Chairman Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto">
                <img 
                  src={cc}
                  alt="Chairman Special Education"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h3 className="text-white text-xl font-bold">Chairman</h3>
                  <p className="text-gray-300">Special Education Program</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Education Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto">
                <img 
                  src={child}
                  alt="Special Education"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9] flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Special Education</h2>
                   <p className="text-[#0EA5E9] font-medium mt-1">OTM Speech Therapy program</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                 <p className="font-semibold text-[#0F172A] text-xl">
                   OTM Speech Therapy program focuses on improving your child’s speech and language skills
                 </p>
                <p className="font-medium text-[#0EA5E9]">
                  First Special Kids School in Lahore where your child achieves therapy facilities with early years education.
                </p>
                <p>
                  At OTM Special Kids, our dedicated child and family teams, including key workers, therapists, and practitioners, collaborate to address a child’s holistic development, focusing on physical, emotional, social, and cognitive needs.
                </p>
                <p>
                  Tailored to each family’s requirements, our comprehensive support includes speech pathologists, occupational therapists, and physiotherapists, ensuring the best outcomes for children with delayed speech issues. Key workers facilitate skill-building in language and communication, cognitive development through play, personal care, sleep hygiene, assistive technology utilization, transitions, motor skills, behavior management, social interactions, and neuropsychological assessment. With the guidance of internationally accredited professionals, including Australian and UK-trained Mam Sana, our team is committed to your child’s growth and well-being.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lahore's First Kids Special Education Montessori (Detailed Services List) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Lahore's First Kids Special Education Montessori</h2>
            <p className="text-xl text-[#0EA5E9] font-medium max-w-4xl mx-auto">
              OliveTree Sydney Campus, All Therapy Facilities of Early Years Education for Your Child’s Success we offer a comprehensive range of services tailored to meet the diverse needs of our students.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {services.slice(0, 6).map((service, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A] text-lg">{service.name}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 mb-8">
                {services.slice(6).map((service, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A] text-lg">{service.name}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-[#F0F9FF] rounded-2xl border border-blue-100 text-center"
            >
              <p className="text-lg text-[#0F172A] font-medium leading-relaxed">
                At Olive Tree School, we are committed to providing holistic support and fostering the growth and development of every child, ensuring they reach their full potential in a nurturing and inclusive environment.
              </p>
            </motion.div>
        </div>
      </section>

      {/* Featured Programs (Styled Cards) */}
      <section className="py-20 bg-[#001E3C] relative overflow-hidden">
        {/* Background Decorative Dotted Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%">
             <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="1" className="text-white fill-current" />
             </pattern>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Card 1: ADHD Students - Light Blue */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative mt-12 bg-[#22D3EE] rounded-[2.5rem] p-8 pb-12 text-center"
              >
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-[6px] border-[#001E3C] overflow-hidden bg-white shadow-lg">
                    <img src={classroomActivity} alt="ADHD Students" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mt-16 mb-4">ADHD Students</h3>
                 <p className="text-white text-sm leading-relaxed opacity-95 font-medium">
                   Olive Tree ADHD offers Behavioral interventions, counseling, and teacher training, to address the unique needs of students with Attention Deficit Hyperactivity Disorder.
                 </p>
                  {/* Decorative dashed line around card */}
                 <div className="absolute top-2 bottom-2 left-2 right-2 rounded-[2.2rem] border-2 border-dashed border-white/30 pointer-events-none"></div>
              </motion.div>

              {/* Card 2: Down Syndrome - Purple */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative mt-12 bg-[#A78BFA] rounded-[2.5rem] p-8 pb-12 text-center"
              >
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-[6px] border-[#001E3C] overflow-hidden bg-white shadow-lg">
                    <img src={artClassroom} alt="Down Syndrome" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mt-16 mb-4">Down Syndrome</h3>
                 <p className="text-white text-sm leading-relaxed opacity-95 font-medium">
                   Speech therapy, occupational therapy, and social-emotional support, to meet the unique educational and developmental needs of students with Down syndrome.
                 </p>
                 <div className="absolute top-2 bottom-2 left-2 right-2 rounded-[2.2rem] border-2 border-dashed border-white/30 pointer-events-none"></div>
              </motion.div>

              {/* Card 3: Learning Therapy - Yellow/Orange */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative mt-12 bg-[#F59E0B] rounded-[2.5rem] p-8 pb-12 text-center"
              >
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-[6px] border-[#001E3C] overflow-hidden bg-white shadow-lg">
                    <img src={lab} alt="Learning Therapy" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mt-16 mb-4">Learning Therapy</h3>
                 <p className="text-white text-sm leading-relaxed opacity-95 font-medium">
                   Olive Tree services offer personalized interventions and strategies to support individuals in overcoming learning challenges, enhancing cognitive skills, and achieving academic success.
                 </p>
                 <div className="absolute top-2 bottom-2 left-2 right-2 rounded-[2.2rem] border-2 border-dashed border-white/30 pointer-events-none"></div>
              </motion.div>

           </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu1} alt="Special Education 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu2} alt="Special Education 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu3} alt="Special Education 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu4} alt="Special Education 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu5} alt="Special Education 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu6} alt="Special Education 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu7} alt="Special Education 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={specialEdu8} alt="Special Education 8" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialized Services (Grid View) */}
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

      {/* Our Programs in Action - Video Gallery */}
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

          <div className="grid md:grid-cols-2 gap-8">
            {[video1, video2, video3, video4].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline="true"
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  className="w-full h-full object-cover aspect-video"
                  controls
                  style={{ maxHeight: '700px' }}
                />
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