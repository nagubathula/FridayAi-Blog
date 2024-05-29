import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <>
    <div className="font-arapey">
      <Navbar />
      <Outlet />
      <Toaster />
      </div>
    </>
  );
};

export default App;
