import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-0 text-white p-6 mt-14">
      <div className="container mx-auto flex flex-col lg:flex-col justify-between items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href=" https://www.youtube.com/@TeamAbhedya/"
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="YouTube"
          >
            <IoLogoYoutube />
          </a>
          <a
            href="https://in.linkedin.com/company/robotics-research-lab"
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/team_abhedya_gcoeara/"
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="Instagram"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="mailto:rrlgcoeara2@gmail.com "
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="Instagram"
          >
            <SiGmail />
          </a>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 text-center">
          <a href="/" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="About" className="hover:text-gray-400 transition-colors">
            About Us
          </a>
          <a
            href="Achievements"
            className="hover:text-gray-400 transition-colors"
          >
            Achievements
          </a>
          <a href="Contact" className="hover:text-gray-400 transition-colors">
            Contact Us
          </a>
          <a href="Team" className="hover:text-gray-400 transition-colors">
            Our Team
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            © Robotics Research Lab. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
