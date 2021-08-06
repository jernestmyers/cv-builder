import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";

function App() {
  return (
    <div>
      <Header />
      <div className="mainDisplay">
        <div className="inputFields">
          <Contact />
          <div>
            <Experience />
            <button>Add Experience</button>
          </div>
          <div>
            <Education />
            <button>Add Education</button>
          </div>
        </div>
        <div className="previewOfCV">
          <Preview />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
