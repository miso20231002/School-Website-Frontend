import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold">My School</div>
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}