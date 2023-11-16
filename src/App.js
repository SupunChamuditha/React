import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skill';
import { Projects } from './component/Projects';
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
