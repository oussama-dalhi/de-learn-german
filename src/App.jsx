import { useState } from "react";
import SetupScreen from "./components/SetupScreen";
import FlashCards from "./components/FlashCards";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [selectedLevel, setSelectedLevel] = useLocalStorage(
  "selectedLevel",
  "A1"
);
  const [appStarted, setAppStarted] = useState(false);
  return (
    <>
      {appStarted ? (
        <FlashCards
          key={selectedLevel}
          setAppStarted={setAppStarted}
          selectedLevel={selectedLevel}
        />
      ) : (
        <SetupScreen
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          setAppStarted={setAppStarted}
        />
      )}
    </>
  );
}

export default App;
