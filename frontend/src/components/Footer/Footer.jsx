import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-6 text-sm w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-1 justify-center items-start">
          <Link to="/" className="text-4xl font-bold">
            Disaster Response
          </Link>
          <div className="text-xl text-gray-400">Disaster Response Web App</div>
          <div className="mt-3 flex text-xl gap-2 text-gray-500">
            <FaFacebook className="hover:text-purple-900" />
            <FaInstagram className="hover:text-purple-900" />
            <FaTiktok className="hover:text-purple-900" />
            <FaTwitter className="hover:text-purple-900" />
            <FaLinkedin className="hover:text-purple-900" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">About</h1>
            <Link to="/" className="hover:text-purple-900">
              About Us
            </Link>
            <Link to="/" className="hover:text-purple-900">
              Features
            </Link>
            <Link to="/" className="hover:text-purple-900">
              News
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">Account</h1>
            <Link to="/" className="hover:text-purple-900">
              Support Center
            </Link>
            <Link to="/" className="hover:text-purple-900">
              Feedback
            </Link>
            <Link to="/" className="hover:text-purple-900">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">Company</h1>
            <Link to="/" className="hover:text-purple-900">
              Our Team
            </Link>
            <Link to="/" className="hover:text-purple-900">
              Partner
            </Link>
            <Link to="/" className="hover:text-purple-900">
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-lg mt-6">
        &#169; Disaster Response 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
