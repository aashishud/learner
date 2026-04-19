import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ReserveTable } from "./components/ReserveTable";
import { YourDetails } from "./components/YourDetails";
import { BookingConfirmed } from "./components/BookingConfirmed";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: ReserveTable },
      { path: "details", Component: YourDetails },
      { path: "success", Component: BookingConfirmed },
    ],
  },
]);
