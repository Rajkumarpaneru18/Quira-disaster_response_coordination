import {
  FaHome,
  FaFire,
  FaTasks,
  FaFileAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100  font-thin p-4 my-4 mx-16">
      <nav>
        <ul>
          <Link to="/mainpage">
            <li className="mb-4 flex items-center hover:bg-customColor rounded-2xl transition-all w-72">
              <FaHome className="mr-2 text-3xl" />
              <a
                href="#dashboard"
                className="text-lg flex items-center justify-between w-full py-2 mx-2"
              >
                Dashboard
              </a>
            </li>
          </Link>

          <Link to="/disaster">
            <li className="mb-4 flex items-center  hover:bg-customColor rounded-2xl transition-all w-72">
              <FaFire className="mr-2 text-2xl" />
              <a
                href="#disasters"
                className="text-lg flex items-center justify-between w-full py-2 mx-2"
              >
                Disasters
              </a>
            </li>
          </Link>
          <Link to="/responders">
            <li className="mb-4 flex items-center  hover:bg-customColor rounded-2xl transition-all w-72">
              <AiOutlineTeam className="mr-2 text-2xl" />
              <a
                href="#responders"
                className="text-lg flex items-center justify-between w-full py-2 mx-2"
              >
                Responders
              </a>
            </li>
          </Link>

          <Link to="/task">
            <li className="mb-4 flex items-center  hover:bg-customColor rounded-2xl transition-all w-72">
              <FaTasks className="mr-2 text-2xl" />
              <a
                href="#tasks"
                className="text-lg flex items-center justify-between w-full py-2 mx-2 "
              >
                Tasks
              </a>
            </li>
          </Link>
          <li className="mb-4 flex items-center  hover:bg-customColor rounded-2xl transition-all w-72">
            <FaFileAlt className="mr-2 text-2xl" />
            <a
              href="#reports"
              className="text-lg flex items-center justify-between w-full py-2 mx-2 "
            >
              Reports
            </a>
          </li>
          <li className="mb-4 flex items-center  hover:bg-customColor rounded-2xl transition-all w-72">
            <FaBell className="mr-2 text-2xl" />
            <a
              href="#notifications"
              className="text-lg flex items-center justify-between w-full py-2 mx-2 "
            >
              Notifications
            </a>
          </li>
          <li className="mb-4 flex items-center  hover:bg-customColor rounded-2xl transition-all w-72">
            <FaCog className="mr-2 text-2xl" />
            <a
              href="#settings"
              className="text-lg flex items-center justify-between w-full py-2 mx-2 "
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
