import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-1">
      <SocialIcon href="https://www.facebook.com" icon={<FaFacebookF size={16} />} />
      <SocialIcon href="https://www.twitter.com" icon={<FaTwitter size={16} />} />
      <SocialIcon href="https://www.instagram.com" icon={<FaInstagram size={16} />} />
      <SocialIcon href="https://www.linkedin.com" icon={<FaLinkedinIn size={16} />} />
    </div>
  );
};

// Reusable SocialIcon component for individual icon links
const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-white hover:scale-110 transition duration-300"
    >
      {icon}
    </a>
  );
};

export default SocialIcons;
