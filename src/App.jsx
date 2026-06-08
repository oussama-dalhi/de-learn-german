import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Analytics } from "@vercel/analytics/react";
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
  const [shuffle, setShuffle] = useLocalStorage("shuffle", false);
  return (
    <>
      {appStarted ? (
        <FlashCards
          key={selectedLevel}
          setAppStarted={setAppStarted}
          selectedLevel={selectedLevel}
          shuffle={shuffle}
        />
      ) : (
        <SetupScreen
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          setAppStarted={setAppStarted}
          setShuffle={setShuffle}
          shuffle={shuffle}
        />
      )}
    </>
  );
}

export default App;
