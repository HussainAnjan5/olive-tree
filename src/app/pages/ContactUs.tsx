import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Navigation } from "lucide-react";
import { motion } from "motion/react";
import hero from "@/assets/hero-1.jpeg";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const locations = [
    {
      name: "Johar Town Campus - Main",
      address: "House 50, D/1 Baig Rd, Block D2 Block D 2 Phase 1 Johar Town, Lahore, Punjab 54000",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3524662787744!2d74.27134931543738!3d31.540366981346833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ec87c3fae9%3A0x8c3f8e8c3f8e8c3f!2sJohar%20Town%2C%20Lahore!5e0!3m2!1sen!2spk!4v1234567890123",
    },
    {
      name: "Johar Town Campus - D Block",
      address: "49-D Baig Rd, Block D2 Block D 1 Phase 1 Johar Town, Lahore, Punjab 54782",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3524662787744!2d74.27134931543738!3d31.540366981346833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ec87c3fae9%3A0x8c3f8e8c3f8e8c3f!2sJohar%20Town%2C%20Lahore!5e0!3m2!1sen!2spk!4v1234567890124",
    },
    {
      name: "Johar Town Campus - G Block",
      address: "Plot 513, Block G1, Block G1 Block G 1 Phase 1 Johar Town, Lahore, Punjab 54700",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3524662787744!2d74.27134931543738!3d31.540366981346833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ec87c3fae9%3A0x8c3f8e8c3f8e8c3f!2sJohar%20Town%2C%20Lahore!5e0!3m2!1sen!2spk!4v1234567890125",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-white">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${hero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0EA5E9]/80" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#0EA5E9] bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-4">Get in Touch with Olive Tree Montessori</p>
            <p className="text-lg text-[#F0F9FF]">We'd love to hear from you and answer any questions</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#0EA5E9]/20 hover:shadow-[#0EA5E9]/20 hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">Location</h3>
              <p className="text-gray-600 text-sm">Johar Town, Lahore</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#0EA5E9]/20 hover:shadow-[#0EA5E9]/20 hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">Phone</h3>
              <a href="tel:+923028815435" className="text-[#0EA5E9] text-sm hover:underline block">
                03028815435
              </a>
              <a href="tel:+923258815444" className="text-[#0EA5E9] text-sm hover:underline block mt-1">
                03258815444
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#0EA5E9]/20 hover:shadow-[#0EA5E9]/20 hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">Email</h3>
              <a href="mailto:sanaolivetree@gmail.com" className="text-[#0EA5E9] text-sm hover:underline">
                sanaolivetree@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-[#0EA5E9]/20 hover:shadow-[#0EA5E9]/20 hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2 text-lg">Hours</h3>
              <p className="text-gray-600 text-sm">Mon - Fri</p>
              <p className="text-gray-600 text-sm">8:00 AM - 3:00 PM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Find Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-[#0EA5E9]/20"
            >
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Send us a Message</h2>

              {submitted && (
                <div className="bg-green-50 border-2 border-green-400 text-green-700 px-6 py-4 rounded-2xl mb-6">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#0F172A] font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all resize-none bg-white"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0EA5E9] text-white px-8 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Find Us On Google */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <Navigation className="w-10 h-10 text-[#D4AF37]" />
                  <h3 className="text-3xl font-bold">Find Us On Google</h3>
                </div>
                <p className="text-[#F0F9FF] mb-6 text-lg">
                  Visit any of our three campuses located in Johar Town, Lahore. We welcome parents to schedule a tour and see our world-class facilities.
                </p>
              </div>

              {/* Campus Locations */}
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-[#0EA5E9]/20 overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#0F172A] text-xl mb-2">{location.name}</h4>
                          <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#0EA5E9] hover:text-[#0284c7] font-semibold text-sm group"
                          >
                            <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Google Map Embed */}
                    <div className="w-full h-64 bg-gray-100">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
