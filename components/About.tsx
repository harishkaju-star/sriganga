
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { label: "Thread Variants", value: "1000+" },
    { label: "Colors", value: "500+" },
    { label: "Industries", value: "50+" },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
            Why Partner with <br />
            <span className="text-red-600">Sri Ganga Trading Co?</span>
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              With decades of experience in the textile hub of Bengaluru, we understand that a thread is more than just a fastener—it is the structural integrity of your brand's quality.
            </p>
            <p>
              We prioritize consistency, color accuracy, and high-tensile strength in every cone we supply. Our B2B model is built on on-time delivery and tailoring thread specifications to perfectly match your fabric and end-use requirements.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-100 rounded-3xl p-6 md:p-8 overflow-hidden box-border"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-30" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="w-full max-w-full text-center p-3 md:p-4 lg:p-5 bg-white rounded-2xl shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-transform min-w-0 overflow-hidden">
                <div className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl font-extrabold text-red-600 mb-1 md:mb-2 leading-tight break-words truncate">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider break-words">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white">
            <h4 className="font-bold text-gray-800 mb-2 italic">"Precision at Scale"</h4>
            <p className="text-sm text-gray-600">Our Bengaluru-based distribution hub serves global markets with zero-tolerance for defects.</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-blue-500 to-emerald-500" />
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 flex-shrink-0 relative">
             {/* Founder Headshot */}
            <div className="absolute inset-0 bg-gray-200 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center">
              <img 
                src="components\Images\Founder.png" 
                alt="Gnaneshwar Sulegai" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white px-4 py-1.5 rounded-full shadow-lg text-xs font-black text-red-600 border border-red-50 uppercase tracking-widest">FOUNDER</div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-black text-gray-900 mb-1">A Message from Our Founder</h3>
            <p className="text-lg font-bold text-blue-900 mb-4 tracking-tight">Gnaneshwar Sulegai</p>
            <div className="relative">
              <span className="absolute -top-8 -left-8 text-8xl text-gray-100 font-serif leading-none select-none">“</span>
              <p className="text-gray-600 italic text-lg leading-relaxed relative z-10">
                "As founder of Sri Ganga Trading Co, I started with a simple vision: deliver threads that never fail the seamstress or machine. From humble beginnings in Bengaluru’s textile hubs, we’ve grown into a trusted partner for manufacturers worldwide, blending family heritage with cutting-edge precision. Our commitment? Reliability you can thread on."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
