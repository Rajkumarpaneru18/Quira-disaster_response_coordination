import { useState, useEffect } from "react";
import img1 from "../../assets/nepalpolice.jpg";
import img2 from "../../assets/medical staff.jpeg";
import img3 from "../../assets/volunteer.png";
import Sidebar from "../Sidebar/SideBar";
import Header from "../Header./Header";

const initialResponders = [
  { id: 1, name: "Nepal Police", imageUrl: img1 },
  { id: 2, name: "Medical Staff", imageUrl: img2 },
  { id: 3, name: "Volunteer", imageUrl: img3 },
];

function Responders() {
  const [responders, setResponders] = useState(initialResponders);
  const [newResponderName, setNewResponderName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [isCoordinator, setIsCoordinator] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log(role);
    if (role === "editor") {
      setIsCoordinator(true);
    }
  }, []);

  const handleAddResponder = () => {
    if (newResponderName && newImageUrl) {
      const newResponder = {
        id: responders.length + 1,
        name: newResponderName,
        imageUrl: newImageUrl,
      };

      setResponders([...responders, newResponder]);
      setNewResponderName("");
      setNewImageUrl("");
      setShowAddForm(false); // After adding, hide the add form
    } else {
      alert(
        "Please provide both a name and an image URL for the new responder."
      );
    }
  };

  return (
    <div>
      <Header />
      <section id="responders" className="flex bg-gray-100 h-screen">
        <Sidebar />
        <div className="my-8">
          <h2 className="text-xl font-bold mb-4">Responders</h2>
          <div className="grid grid-cols-3 gap-4 mb-6 my-10">
            <div className="border p-4 rounded-xl shadow-sm border-red-200">
              <h3 className="text-3xl font-bold">500</h3>
              <p className="text-sm text-red-400">Total responders</p>
            </div>
            <div className="border p-4 rounded-xl shadow-sm border-red-200">
              <h3 className="text-3xl font-bold">300</h3>
              <p className="text-sm text-red-400">Available responders</p>
            </div>
            <div className="border p-4 rounded-xl shadow-sm border-red-200">
              <h3 className="text-3xl font-bold">200</h3>
              <p className="text-sm text-red-400">Assigned tasks</p>
            </div>
          </div>
          <div className="absolute right-0 -my-44 mb-6 mr-6 ">
            {isCoordinator ? (
              <>
                {!showAddForm && (
                  <button
                    className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() => setShowAddForm(true)}
                  >
                    Add New Responder
                  </button>
                )}
                {showAddForm && (
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      placeholder="Enter Responder Name"
                      className="border border-gray-300 p-2 mr-2 rounded-xl"
                      value={newResponderName}
                      onChange={(e) => setNewResponderName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter Image URL"
                      className="border border-gray-300 p-2 mr-2 rounded-xl"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                    <div>
                      <button
                        className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl"
                        onClick={handleAddResponder}
                      >
                        Add New Responder
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <button className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl">
                add No permission
              </button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {responders.map((responder) => (
              <div key={responder.id} className="rounded p-4">
                <img
                  src={responder.imageUrl}
                  alt={responder.name}
                  className="h-80 w-full object-cover rounded-2xl mb-2 -mx-4"
                />
                <h3 className="text-lg font-light">{responder.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Responders;
