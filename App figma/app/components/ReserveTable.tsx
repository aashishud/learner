import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, Clock, Users } from "lucide-react";

export function ReserveTable() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState("2");
  const [seating, setSeating] = useState("indoor");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && diners) {
      navigate("/details", { state: { date, time, diners, seating } });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative overflow-y-auto">
      {/* Hero Image */}
      <div className="h-64 w-full relative">
        <img
          src="https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2NTI1NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Little Lemon Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <h1 
            className="text-white text-4xl font-bold p-6 w-full"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Little Lemon
          </h1>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h2 
          className="text-2xl font-bold text-[#495E57] mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Reserve a Table
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
          {/* Date Picker */}
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-sm font-semibold text-gray-700">Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Time Dropdown */}
          <div className="flex flex-col gap-2">
            <label htmlFor="time" className="text-sm font-semibold text-gray-700">Time</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all appearance-none bg-white"
              >
                <option value="" disabled>Select a time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
          </div>

          {/* Number of Diners */}
          <div className="flex flex-col gap-2">
            <label htmlFor="diners" className="text-sm font-semibold text-gray-700">Number of Diners</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="diners"
                required
                min="1"
                max="20"
                value={diners}
                onChange={(e) => setDiners(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Seating Options */}
          <div className="flex flex-col gap-3 mt-2">
            <label className="text-sm font-semibold text-gray-700">Seating Options</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="seating"
                  value="indoor"
                  checked={seating === "indoor"}
                  onChange={(e) => setSeating(e.target.value)}
                  className="w-5 h-5 text-[#495E57] focus:ring-[#495E57] accent-[#495E57]"
                />
                <span>Indoor</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="seating"
                  value="outdoor"
                  checked={seating === "outdoor"}
                  onChange={(e) => setSeating(e.target.value)}
                  className="w-5 h-5 text-[#495E57] focus:ring-[#495E57] accent-[#495E57]"
                />
                <span>Outdoor</span>
              </label>
            </div>
          </div>

          {/* Spacer to push button to bottom if screen is tall */}
          <div className="flex-1 min-h-[2rem]"></div>

          <button
            type="submit"
            className="w-full bg-[#F4CE14] hover:bg-[#e3be0c] text-black font-bold py-4 rounded-xl transition-colors mt-auto shadow-sm active:scale-[0.98]"
          >
            Continue to Details
          </button>
        </form>
      </div>
    </div>
  );
}
