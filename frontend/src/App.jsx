import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started";

function App() {
  return (
    <div className="App">
      <div>
        {/* <div className="white-gradient" /> */}
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Started />

    </div>

  );
}

export default App;
