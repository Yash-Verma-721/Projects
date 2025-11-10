// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Projects/Home";
import { ToggleSwitch } from "./Projects/ToggleSwitch/ToggleSwitch";
import { Time } from "./Projects/Time/Time";
import  Counter  from "./Projects/Conter/Counter";
import { Registration } from "./Projects/UseState/Registration";  
import { RegistrationReact } from "./Projects/UseState/RegistrationReact";
import { Pokemon } from "./Pokemon";
import { DarkLight, ThemeProvider } from "./Projects/ContextAPI/DarkLight";
import "./index.css"
export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Projects/ToggleSwitch/ToggleSwitch" element={<ToggleSwitch />} />
        <Route path="/Projects/Time/Time" element={<Time />} />
        <Route path="/Projects/Conter/Counter" element={<Counter />} />
        <Route path="/Projects/UseState/Registration" element={<Registration />} />
        <Route path="/Projects/UseState/RegistrationReact" element={<RegistrationReact />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="/Projects/ContextAPI/DarkLight" element={<ThemeProvider><DarkLight /></ThemeProvider>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
