import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-dark text-gold">
      <Navbar />
      <main className="pt-20 px-4 md:px-10">{children}</main>
    </div>
  );
}
