import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/skills/skills";
import Contact from "./components/Contact Me/Contact"
import Social from "./components/socialMedia/social"

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${require('./assets/background.avif')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
