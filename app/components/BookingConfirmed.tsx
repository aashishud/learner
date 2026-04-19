import { useLocation, Link } from "react-router";
import { CheckCircle2 } from "lucide-react";

export function BookingConfirmed() {
  const location = useLocation();
  const data = location.state || { diners: "4", time: "19:00", date: "Friday" };

  // Format the date if it's a real date string (YYYY-MM-DD), otherwise just use it
  let displayDate = data.date;
  try {
    if (data.date && data.date.includes("-")) {
      const d = new Date(data.date);
      // simple format like "Friday, Oct 12"
      displayDate = d.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' });
    }
  } catch (e) {
    // ignore
  }

  // Format time (19:00 -> 7:00 PM)
  let displayTime = data.time;
  try {
    if (data.time && data.time.includes(":")) {
      const [hours, minutes] = data.time.split(":");
      const h = parseInt(hours, 10);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      displayTime = `${h12}:${minutes} ${ampm}`;
    }
  } catch (e) {
    // ignore
  }

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white relative p-8 text-center">
      <div className="bg-green-50 rounded-full p-6 mb-8">
        <CheckCircle2 className="w-24 h-24 text-green-500" strokeWidth={1.5} />
      </div>

      <h1 
        className="text-3xl font-bold text-[#495E57] mb-4"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Booking Confirmed!
      </h1>

      <div className="text-gray-600 text-lg space-y-2 mb-12 max-w-[280px]">
        <p>
          Thank you for choosing Little Lemon.
        </p>
        <p>
          Your table for <strong>{data.diners}</strong> on <strong>{displayDate}</strong> at <strong>{displayTime}</strong> has been confirmed.
        </p>
      </div>

      <div className="mt-auto w-full">
        <Link 
          to="/"
          className="text-[#495E57] font-semibold hover:underline p-4 inline-block w-full"
        >
          Make another reservation
        </Link>
      </div>
    </div>
  );
}
