// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/Projects/ToggleSwitch/ToggleSwitch")}>
        Go to Toggle Switch
      </button>
      <button onClick={() => navigate("/Projects/Conter/Counter")}>
        Go to Counter
      </button>
      <button onClick={() => navigate("/Projects/Time/Time")}>
        Go to Time
      </button>
      <button onClick={() => navigate("/Projects/UseState/Registration")}> 
      Go to Registrion 
      </button>
      <button onClick={() => navigate("/Projects/UseState/RegistrationReact")}> 
      Go to RegistrionReact 
      </button>
      <button onClick={() => navigate("/Pokemon")}>
      Go to Pokemon
      </button>
      <button onClick={() => navigate("/Projects/ContextAPI/DarkLight")}>
      Go to DarkLight
      </button>
    
    </div>
  );
}
