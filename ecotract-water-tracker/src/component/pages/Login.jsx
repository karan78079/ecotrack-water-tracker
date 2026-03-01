import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "fake-token");
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
