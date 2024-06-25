import Footer from "../Footer/Footer";
import DisastersOverview from "./DisasterOverview";
import RespondersOverview from "./RespondersOverview";
import TasksOverview from "./TaskOverview";
function Dashboard() {
  return (
    <div>
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6 my-4">
          <h1 className="text-4xl font-semibold font-serif"></h1>
          <button className="text-black font-sans bg-customColor px-4 py-2 rounded-2xl">
            New report
          </button>
        </header>
        <h1 className="text-4xl font-semibold font-serif -my-12  -mx-2">
          Overview
        </h1>
        <div className="my-24">
          <DisastersOverview />
          <RespondersOverview />
          <TasksOverview />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
