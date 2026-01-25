import { useState } from "react";
import { Send, FileCheck, Award } from "lucide-react";
import { motion } from "motion/react";

export function ApplyOnline() {
  const [formData, setFormData] = useState({
    campus: "",
    firstName: "",
    lastName: "",
    age: "",
    registrationFor: "",
    gender: "",
    nationality: "",
    religion: "",
    hasIssue: "no",
    issueDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F0F9FF] to-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1626402570254-3e3d1790e14f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTMwODI4MXww&ixlib=rb-4.1.0&q=80&w=1080")',
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#c4a02d] flex items-center justify-center shadow-lg">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-[#0EA5E9] to-[#D4AF37] bg-clip-text text-transparent">
                Apply Online
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-[#F0F9FF] mb-4">
              Join the Best Montessori School in Lahore
            </p>
            <p className="text-lg text-[#0EA5E9]">
              Start your child's journey to excellence today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#0EA5E9]/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0F172A]">Admission Form</h2>
                <p className="text-gray-600 text-lg">Fill out the form below to apply</p>
              </div>
            </div>

            {submitted && (
              <div className="bg-green-50 border-2 border-green-400 text-green-700 px-6 py-4 rounded-2xl mb-8">
                Thank you for applying! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Campus Selection */}
              <div>
                <label className="block text-[#0F172A] font-semibold mb-3 text-lg">
                  Select Campus *
                </label>
                <select
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                >
                  <option value="">Choose a campus</option>
                  <option value="johar-town-main">Johar Town Main Campus</option>
                  <option value="johar-town-d">Johar Town D Block</option>
                  <option value="johar-town-g">Johar Town G Block</option>
                  <option value="sydney">Sydney Campus (Special Education)</option>
                </select>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#0F172A] font-semibold mb-3">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="Child's first name"
                  />
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-3">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="Child's last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#0F172A] font-semibold mb-3">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    max="12"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="Child's age"
                  />
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-3">Registration For *</label>
                  <select
                    name="registrationFor"
                    value={formData.registrationFor}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                  >
                    <option value="">Select program</option>
                    <option value="playgroup">Playgroup</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="prep">Prep</option>
                    <option value="special-education">Special Education</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#0F172A] font-semibold mb-3">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-3">Nationality *</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                    placeholder="e.g., Pakistani"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0F172A] font-semibold mb-3">Religion *</label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all bg-white"
                  placeholder="Child's religion"
                />
              </div>

              {/* Special Needs */}
              <div className="bg-[#F0F9FF] rounded-2xl p-6 border-2 border-[#0EA5E9]/20">
                <label className="block text-[#0F172A] font-semibold mb-3 text-lg">
                  Does your child have any developmental or learning issues?
                </label>
                <div className="flex gap-6 mb-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasIssue"
                      value="no"
                      checked={formData.hasIssue === "no"}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#0EA5E9] focus:ring-[#0EA5E9]"
                    />
                    <span className="text-gray-700 font-medium">No</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasIssue"
                      value="yes"
                      checked={formData.hasIssue === "yes"}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#0EA5E9] focus:ring-[#0EA5E9]"
                    />
                    <span className="text-gray-700 font-medium">Yes</span>
                  </label>
                </div>

                {formData.hasIssue === "yes" && (
                  <div>
                    <label className="block text-[#0F172A] font-semibold mb-3">
                      Please provide details
                    </label>
                    <textarea
                      name="issueDetails"
                      value={formData.issueDetails}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 outline-none transition-all resize-none bg-white"
                      placeholder="Please describe any developmental or learning challenges..."
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#c4a02d] hover:from-[#c4a02d] hover:to-[#D4AF37] text-white px-10 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group text-lg"
              >
                Submit Application
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Apply Section */}
      <section className="py-20 bg-gradient-to-b from-[#F0F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-3xl p-12 text-white shadow-2xl text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Olive Tree Montessori?</h2>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { number: "1,250+", label: "Happy Students" },
                { number: "170+", label: "Expert Teachers" },
                { number: "4", label: "Modern Campuses" },
                { number: "100%", label: "Parent Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
