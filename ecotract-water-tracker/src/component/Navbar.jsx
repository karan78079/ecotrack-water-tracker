import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkStyle = ({ isActive }) => ({
    marginRight: 12,
    textDecoration: "none",
    fontWeight: isActive ? "700" : "400",
  });

  return (
    <div style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/dashboard/water" style={linkStyle}>Water Tracker</NavLink>
      <button style={{ float: "right" }} onClick={logout}>Logout</button>
    </div>
  );
}
