import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002f5f] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-4">Digital Marketing Services</h3>
          <ul className="space-y-2">
            <li><a href="/web-design" className="text-white hover:underline">Web Design</a></li>
            <li><a href="/ppc-advertising" className="text-white hover:underline">PPC Advertising</a></li>
            <li><a href="/organic-seo" className="text-white hover:underline">Organic SEO</a></li>
            <li><a href="/email-sms-marketing" className="text-white hover:underline">Email & SMS Marketing</a></li>
            <li><a href="/social-media-marketing" className="text-white hover:underline">Social Media Marketing</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about-sitesence" className="text-white hover:underline">About SiteSence</a></li>
            <li><a href="/testimonials" className="text-white hover:underline">Testimonials</a></li>
            <li><a href="/meet-the-team" className="text-white hover:underline">Meet The Team</a></li>
            <li><a href="/careers" className="text-white hover:underline">Careers</a></li>
            <li><a href="/contact-us" className="text-white hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/thought-leadership" className="text-white hover:underline">Thought Leadership</a></li>
            <li><a href="/our-work" className="text-white hover:underline">Our Work</a></li>
            <li><a href="/partners" className="text-white hover:underline">Partners</a></li>
            <li><a href="/industries-we-serve" className="text-white hover:underline">Industries We Serve</a></li>
            <li><a href="/blog" className="text-white hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Recent Blog Posts</h3>
          <ul className="space-y-3">
            <li>
              <p className="text-sm text-gray-300">February 17, 2025</p>
              <p><a href="/blog/email-marketing-mistakes" className="text-white hover:underline">9 of the Most Common Email Marketing Mistakes We've Found While Auditing Over 40 Accounts</a></p>
            </li>
            <li>
              <p className="text-sm text-gray-300">February 14, 2025</p>
              <p><a href="/blog/holiday-email-marketing-strategies" className="text-white hover:underline">12 Holiday Email Marketing Strategies To Skyrocket Sales</a></p>
            </li>
            <li>
              <p className="text-sm text-gray-300">February 12, 2025</p>
              <p><a href="/blog/common-seo-myths" className="text-white hover:underline">7 Common SEO Myths You Should Ignore In 2025</a></p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 mt-8">
        <img src="/inc5000.png" alt="Inc 5000" className="h-10" />
        <img src="/google-partner.png" alt="Google Partner" className="h-10" />
        <img src="/microsoft-partner.png" alt="Microsoft Partner" className="h-10" />
        <img src="/meta.png" alt="Meta Business Partner" className="h-10" />
        <img src="/hubspot.png" alt="HubSpot Partner" className="h-10" />
        <img src="/bbb-rating.png" alt="BBB A+ Rating" className="h-10" />
        <img src="/amazon-ads.png" alt="Amazon Ads Partner" className="h-10" />
        <img src="/klaviyo.png" alt="Klaviyo Partner" className="h-10" />
      </div>

      <div className="mt-6 border-t border-gray-500 pt-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <span className="text-xl font-bold text-yellow-500">site<span className="text-white">sence</span></span>
          <div className="flex space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/facebook-icon.png" alt="Facebook" className="h-6" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/x-icon.png" alt="Twitter/X" className="h-6" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/youtube-icon.png" alt="YouTube" className="h-6" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/linkedin-icon.png" alt="LinkedIn" className="h-6" /></a>
          </div>
        </div>
        <p className="text-sm">Privacy Policy © 2011-2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
