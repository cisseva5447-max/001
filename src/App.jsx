import InfosPerso from "./components/InfosPerso";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
import "./App.css";

function App() {
  return (
    <div className="cv">
      <InfosPerso />
      <Competences />
      <Experiences />
    </div>
  );
}

export default App;        
