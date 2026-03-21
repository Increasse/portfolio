import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
          <Hero />
          <About />
          <Projects />
          <Contacts />
      </main>
    </div>
  );
}

export default App;
