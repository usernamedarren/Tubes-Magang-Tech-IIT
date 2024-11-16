import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100" >
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-black" style={{ fontFamily: 'Geist Mono, monospace' }}>Inkubator IT</h1>
          <nav>
            <ul className="flex space-x-4 text-sm font-medium text-gray-700">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        © 2024 Inkubator IT. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
