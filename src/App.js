import HomeContent from "./Components/HomeContent";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import "./Components/Styles.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ExplorePackaging from "./Components/Custom Packaging Section/ExplorePackaging";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route  path="custom-packaging" element={<ExplorePackaging />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
