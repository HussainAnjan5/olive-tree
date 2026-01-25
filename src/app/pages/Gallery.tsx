import { motion } from "motion/react";
import { Camera, Image as ImageIcon } from "lucide-react";

export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1659048357737-e6a8cff2bd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwc2Nob29sJTIwY2hpbGRyZW4lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjkzMTY3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Montessori Learning",
    },
    {
      url: "https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjkzMDkwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Teacher Teaching",
    },
    {
      url: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB0aGVyYXB5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzY5MzE2NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Speech Therapy",
    },
    {
      url: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBhY3Rpdml0aWVzJTIwa2lkc3xlbnwxfHx8fDE3NjkzMTY3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Classroom Activities",
    },
    {
      url: "https://images.unsplash.com/photo-1694351075627-ed3aeacdc417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwc2Nob29sfGVufDF8fHx8MTc2OTMxNjc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Science Lab",
    },
    {
      url: "https://images.unsplash.com/photo-1632217138608-66217da0142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzY2hvb2x8ZW58MXx8fHwxNzY5MzE2NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Library",
    },
    {
      url: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTI0NTU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Computer Lab",
    },
    {
      url: "https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc2Nob29sfGVufDF8fHx8MTc2OTMxNjc2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Happy Children",
    },
    {
      url: "https://images.unsplash.com/photo-1761208663281-619e6532aff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBzY2hvb2x8ZW58MXx8fHwxNzY5MzIwNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Children Playing",
    },
    {
      url: "https://images.unsplash.com/photo-1630637991997-1cd9c8b41ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGxheWdyb3VuZCUyMGtpZHN8ZW58MXx8fHwxNzY5MzIwNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Outdoor Playground",
    },
    {
      url: "https://images.unsplash.com/photo-1629652486845-eb09110a62b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjbGFzc3Jvb20lMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjkzMjA1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Art Classroom",
    },
    {
      url: "https://images.unsplash.com/photo-1758612214848-04e700d192ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNsYXNzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5MzIwNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Music Class",
    },
    {
      url: "https://images.unsplash.com/photo-1666888735993-6ed30a900f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9va3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjkzMjA1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Reading Time",
    },
    {
      url: "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMGtpZHN8ZW58MXx8fHwxNzY5MzIwNTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Science Experiments",
    },
    {
      url: "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY3Rpdml0eSUyMGNoaWxkcmVufGVufDF8fHx8MTc2OTMyMDUxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Sports Activities",
    },
    {
      url: "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY5MjkxNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kindergarten Classroom",
    },
    {
      url: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjkzMjA1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Preschool Learning",
    },
    {
      url: "https://images.unsplash.com/photo-1627561978149-e966316a632b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYWZldGVyaWF8ZW58MXx8fHwxNzY5MzIwNTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "School Cafeteria",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F0F9FF] to-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc2Nob29sfGVufDF8fHx8MTc2OTMxNjc2NHww&ixlib=rb-4.1.0&q=80&w=1080")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0EA5E9]/80" />
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
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-[#0EA5E9] to-[#D4AF37] bg-clip-text text-transparent">
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
                  index === 0 || index === 4 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 || index === 4 ? "h-[500px]" : "h-[300px]"}`}>
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