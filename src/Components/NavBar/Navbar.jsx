import logo from "../../assets/leaflogo.svg";
export default function Navbar() {
  return (
    <div id="navbar" className="w-screen h-6% text-3xl text-center font-bold">
      <img src={logo} id="logo" />
      AgriCompanion
    </div>
  );
}
