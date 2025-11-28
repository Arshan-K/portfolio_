import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-gold shadow-md z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Arshan
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-yellow">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow">About</Link></li>
        </ul>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black text-gold px-6 pb-4 space-y-3">
          <Link to="/" className="block hover:text-yellow" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-yellow" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
