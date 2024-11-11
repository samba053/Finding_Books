import React from 'react';

const BottomNavBar = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center mb-4 space-x-6">
          
          <a href="#" className="hover:text-gray-400">
            READ
          </a>
          <a href="#" className="hover:text-gray-400">
            DOWNLOAD
          </a>
          <a href="#" className="hover:text-gray-400">
            MY RELIGION ISLAM
          </a>
         
          <a href="#" className="hover:text-gray-400">
            LANGUAGES
          </a>
          <a href="#" className="hover:text-gray-400">
            ABOUT US
          </a>
          <a href="#" className="hover:text-gray-400">
            CONTACT
          </a>
        </nav>
        <div className="text-center mb-4">
          <p className="text-sm">
            📍 <span className="font-bold">Address:</span> Kavuri hills,Madhapur, Hyderabad, Telengana, India-500081
          </p>
          <p className="text-sm">
            📧 <span className="font-bold">Email:</span> sambathodeti@gmail.com
          </p>
          <p className="text-sm">
            📞 <span className="font-bold">Telephone:</span> +91 9618956349
          </p>
        </div>
        
        <div className="text-center text-xs">
          Copyright © sambathodeti@gmail.com 2024
        </div>
      </div>
    </footer>
  );
};

export default BottomNavBar;
