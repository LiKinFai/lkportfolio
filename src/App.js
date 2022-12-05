import { Link, Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Home } from "./pages/Home"
import { LKTFTHelper } from "./pages/LKTFTHelper"
import { Sam1Lam4Zuk3EJan1 } from "./pages/Sam1Lam4Zuk3EJan1"
import './stylesheets/App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="Navbar">
          <li className="link1"><Link to="/">LK's Portfolio</Link></li>
          <li className="link2"><HashLink to="#contact">Contact</HashLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/LKTFTHelper" element={<LKTFTHelper />}/>
        <Route path="/Sam1Lam4Zuk3EJan1" element={<Sam1Lam4Zuk3EJan1 />}/>
      </Routes>
    </div>
  );
}

export default App;
