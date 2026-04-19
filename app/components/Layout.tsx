import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center sm:p-4 font-sans text-[#333333]">
      <div className="w-full sm:max-w-[400px] bg-white sm:rounded-[32px] overflow-hidden shadow-2xl relative min-h-screen sm:min-h-[852px] flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
