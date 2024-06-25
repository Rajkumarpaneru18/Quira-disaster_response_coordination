import React, { useState } from "react";
import image1 from "../../assets/flood.jpeg";
import image2 from "../../assets/flood2.jpeg";
import image3 from "../../assets/landslide.jpeg";
import Sidebar from "../Sidebar/SideBar";
import Header from "../Header./Header";

const initialDisasters = [
  {
    id: 1,
    name: "Flood in Saptari tarai",
    imageUrl: image1,
    detailsUrl: "https://quira.sh/quests/creator/submissions?questId=13",
  },
  {
    id: 2,
    name: "Flood in Kathmandu",
    imageUrl: image2,
    detailsUrl: "/disasters/2",
  },
  {
    id: 3,
    name: "Landslide in Sindhupalchowk",
    imageUrl: image3,
    detailsUrl: "/disasters/3",
  },
];

function Disasters() {
  const [disasters, setDisasters] = useState(initialDisasters);
  const [newDisasterName, setNewDisasterName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newDetailsUrl, setNewDetailsUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle showing the add form

  const handleAddDisaster = () => {
    if (newDisasterName && newImageUrl && newDetailsUrl) {
      const newDisaster = {
        id: disasters.length + 1,
        name: newDisasterName,
        imageUrl: newImageUrl,
        detailsUrl: newDetailsUrl,
      };

      setDisasters([...disasters, newDisaster]);
      setNewDisasterName("");
      setNewImageUrl("");
      setNewDetailsUrl("");
      setShowAddForm(false); // After adding, hide the add form
    } else {
      alert(
        "Please provide a name, an image URL, and a details URL for the new disaster."
      );
    }
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
                <input
                  type="text"
                  placeholder="Enter Details URL"
                  className="border border-gray-300 p-2 mr-2 rounded-xl"
                  value={newDetailsUrl}
                  onChange={(e) => setNewDetailsUrl(e.target.value)}
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
          <div className="absolute mx-96 grid grid-cols-3 gap-4 my-16">
            {disasters.map((disaster) => (
              <div key={disaster.id} className="rounded p-4">
                <img
                  src={disaster.imageUrl}
                  alt={disaster.name}
                  className="h-80 w-80 object-cover rounded-2xl mb-2"
                />
                <h3 className="text-lg font-light">{disaster.name}</h3>
                <div className="-my-4">
                  <a
                    href={disaster.detailsUrl}
                    className="bg-red-300 hover:bg-red-600 text-white font-bold w-20 h-8 mx-60  rounded-xl flex items-center justify-center "
                  >
                    See More
                  </a>
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