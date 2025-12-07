import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900/80 backdrop-blur-md text-white px-6 md:px-12 py-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="KrishiLink logo"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-2xl font-bold">KrishiLink</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            KrishiLink connects farmers, traders, and consumers in one digital
            space. Share your crops, browse posts, and grow your agricultural
            network efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/AllCrops"
                className="hover:text-white transition-colors"
              >
                All Crops
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Crops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Seeds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Fertilizers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Tools & Equipment
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <ul className="flex items-center gap-4 text-2xl">
            <li>
              <a className="hover:text-[#1877F2] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C13584] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1DA1F2] transition-colors">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF6F61] transition-colors">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-6"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 text-sm">
        <p>© 2025 KrishiLink. All rights reserved.</p>
        <p>Made with ❤️ for the agricultural community</p>
      </div>
    </footer>
  );
};

export default Footer;
