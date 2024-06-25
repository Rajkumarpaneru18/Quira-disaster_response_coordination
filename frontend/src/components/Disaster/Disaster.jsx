import React, { useState } from "react";
import image1 from "../../assets/flood.jpeg";
import image2 from "../../assets/flood2.jpeg";
import image3 from "../../assets/landslide.jpeg";
import Sidebar from "../Sidebar/SideBar";
import Header from "../Header./Header";

const initialDisasters = [
  { id: 1, name: "Flood in Saptari tarai", imageUrl: image1 },
  { id: 2, name: "Hurricane in Florida", imageUrl: image2 },
  { id: 3, name: "Earthquake in Los Angeles", imageUrl: image3 },
];

function Disasters() {
  const [disasters, setDisasters] = useState(initialDisasters);
  const [newDisasterName, setNewDisasterName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle showing the add form

  const handleAddDisaster = () => {
    if (newDisasterName && newImageUrl) {
      const newDisaster = {
        id: disasters.length + 1,
        name: newDisasterName,
        imageUrl: newImageUrl,
      };

      setDisasters([...disasters, newDisaster]);
      setNewDisasterName("");
      setNewImageUrl("");
      setShowAddForm(false); // After adding, hide the add form
    } else {
      alert(
        "Please provide both a name and an image URL for the new disaster."
      );
    }
  };

  const handleDeleteDisaster = (id) => {
    const updatedDisasters = disasters.filter((disaster) => disaster.id !== id);
    setDisasters(updatedDisasters);
  };

  return (
    <div>
      <Header />
      <section id="disasters" className="mb-6 bg-gray-100 h-screen">
        <div>
          <div className="absolute my-8 right-0 mb-6 mr-6">
            {!showAddForm && (
              <button
                className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl"
                onClick={() => setShowAddForm(true)}
              >
                Add New Disaster
              </button>
            )}
            {showAddForm && (
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="Enter Disaster Name"
                  className="border border-gray-300 p-2 mr-2 rounded-xl"
                  value={newDisasterName}
                  onChange={(e) => setNewDisasterName(e.target.value)}
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
                    onClick={handleAddDisaster}
                  >
                    Add New Disaster
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <Sidebar />
          <h2 className="text-xl font-bold mb-4 my-8 mx-4 ">Disasters</h2>
          {/* Toggle visibility based on showAddForm */}
          <div className="absolute mx-96 grid grid-cols-3 gap-4 my-16">
            {disasters.map((disaster) => (
              <div key={disaster.id} className=" rounded p-4 ">
                <img
                  src={disaster.imageUrl}
                  alt={disaster.name}
                  className="h-80 w-80 object-cover rounded-2xl mb-2"
                />
                <h3 className="text-lg font-light">{disaster.name}</h3>
                <div className="-my-4">
                  <button
                    className="bg-red-300 hover:bg-red-600 text-white font-bold w-16 h-8 mx-64 rounded-xl"
                    onClick={() => handleDeleteDisaster(disaster.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Disasters;
