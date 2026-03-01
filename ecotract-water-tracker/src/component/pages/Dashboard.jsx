import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Dashboard</h2>
        <button onClick={() => navigate("/dashboard/water")}>
          Go to Water Tracker
        </button>
      </div>
    </>
  );
}
