
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-md border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=50&auto=format&fit=crop" 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-blue-900">Sri Ganga</span> <span className="text-red-600">Trading Co</span>
            </span>
          </div>

          <div className="flex space-x-6 text-sm font-semibold text-gray-500">
            <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-red-600 transition-colors">About</a>
            <a href="#products" className="hover:text-red-600 transition-colors">Products</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>

          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sri Ganga Trading Co. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
            Reliability • Consistency • Precision • Performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
