import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from  "./Components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
 
function App() {
  return (
    <div className="App">
     <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/menu" exact component={Menu}/>
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
