import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (setOpen) setOpen(false);
  }, [location]);

  return (
    <>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

     
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>❌</button>
        </div>

        <ul className="flex flex-col gap-6 px-6 text-lg">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
          <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
