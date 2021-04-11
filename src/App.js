import "./App.css";
import { login } from "./Services/API";
import React from "react";
import ChallengeList from "./Components/Molecules/ChallengeList";

function App() {
  const [loginFlag, setLoginFlag] = React.useState(false);

  React.useEffect(() => {
    console.log(login(1));
  }, []);

  return (
    <div className="App">
      <ChallengeList />
    </div>
  );
}

export default App;
