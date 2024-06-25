import React from "react";
import img1 from "../../assets/nepalpolice.jpg";
import img2 from "../../assets/medical staff.jpeg";
import img3 from "../../assets/volunteer.png";

const initialResponders = [
  { id: 1, name: "Nepal Police", imageUrl: img1 },
  { id: 2, name: "Medical Staff", imageUrl: img2 },
  { id: 3, name: "Volunteer", imageUrl: img3 },
];

function RespondersOverview() {
  return (
    <section id="responders">
      <h2 className="text-xl font-bold mb-4">Responders</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
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
      <div className="grid grid-cols-3 gap-4">
        {initialResponders.map((responder) => (
          <div key={responder.id} className="rounded p-4">
            <img
              src={responder.imageUrl}
              alt={responder.name}
              className=" h-80 w-full object-cover rounded-2xl mb-2 -mx-4"
            />
            <h3 className="text-lg font-light">{responder.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RespondersOverview;
