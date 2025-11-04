import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div>
      <h1>Educator Layout</h1>
      {/* Sidebar / Navbar can go here */}

      {/* CHILD ROUTES APPEAR HERE */}
      <Outlet />
    </div>
  );
};

export default Educator;
