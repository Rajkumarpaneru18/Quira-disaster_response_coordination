// Disasters.js
import image1 from "../../assets/flood.jpeg";
import image2 from "../../assets/flood2.jpeg";
import image3 from "../../assets/landslide.jpeg";

const initialDisasters = [
  { id: 1, name: "Flood in Saptari tarai", imageUrl: image1 },
  { id: 2, name: "Flood in Kathmandu", imageUrl: image2 },
  { id: 3, name: "Landslide In SindhuPalchowk", imageUrl: image3 },
];

function DisastersOverview() {
  return (
    <section id="disasters" className="mb-6">
      <h2 className="text-xl font-bold mb-4 my-12">Disasters</h2>
      <div className="grid grid-cols-3 gap-4">
        {initialDisasters.map((disaster) => (
          <div key={disaster.id} className="rounded p-4">
            <img
              src={disaster.imageUrl}
              alt={disaster.name}
              className="h-80 w-full object-cover rounded-2xl mb-2 -mx-4"
            />
            <h3 className="text-lg font-light">{disaster.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DisastersOverview;
