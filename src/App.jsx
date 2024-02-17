import './App.css'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Home />
            {/*<About />*/}
            <Skills />
            <Projects />
            
        </div>
    )
}

export default App
