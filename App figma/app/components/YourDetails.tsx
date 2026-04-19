import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft } from "lucide-react";

export function YourDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const reservationData = location.state || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && phone && email) {
      // Pass all data to the success screen
      navigate("/success", { 
        state: { 
          ...reservationData,
          firstName,
          lastName,
          phone,
          email
        } 
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative overflow-y-auto">
      {/* Header */}
      <div className="bg-[#495E57] text-white p-6 pt-10 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 
          className="text-2xl font-bold"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Your Details
        </h1>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6">
          Please provide your contact details to confirm your reservation.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all"
              placeholder="John"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all"
              placeholder="Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all"
              placeholder="(555) 000-0000"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495E57] focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          {/* Spacer */}
          <div className="flex-1 min-h-[2rem]"></div>

          <button
            type="submit"
            className="w-full bg-[#495E57] hover:bg-[#3a4b45] text-white font-bold py-4 rounded-xl transition-colors mt-auto shadow-sm active:scale-[0.98]"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
