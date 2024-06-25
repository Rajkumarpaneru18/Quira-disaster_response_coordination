import Header from "../Header./Header";
import Sidebar from "../Sidebar/SideBar";
import Dashboard from "./Dashboard";
function MainPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default MainPage;
