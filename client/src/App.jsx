import { useState } from "react";
import { GovHeader } from "./components/GovHeader";
import { Hero } from "./pages/Hero";
import { ListScreen } from "./pages/ListScreen";
import { DetailScreen } from "./pages/DetailScreen";
import { THEME } from "./utils/constants";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [city, setCity] = useState(null);
  const [hostel, setHostel] = useState(null);

  return (
    <div className="min-h-screen w-full" style={{ background: THEME.surface }}>
      <GovHeader onHome={() => setScreen("home")} />
      {screen === "home" && (
        <Hero
          onSelectCity={(c) => {
            setCity(c);
            setScreen("list");
          }}
        />
      )}
      {screen === "list" && (
        <ListScreen
          city={city}
          onBack={() => setScreen("home")}
          onOpen={(h) => {
            setHostel(h);
            setScreen("detail");
          }}
        />
      )}
      {screen === "detail" && (
        <DetailScreen hostel={hostel} onBack={() => setScreen("list")} />
      )}
    </div>
  );
}