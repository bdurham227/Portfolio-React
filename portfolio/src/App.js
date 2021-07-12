import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Work from "./components/Work/works";
import Contact from "./components/Contact/contact";

function App() {
  return (
   <div className="app">
     <Topbar/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Work/>
       <Contact/>
     </div>
     section - intro - portfoliopage - work ...with projects
   </div>
  );
}

export default App;
