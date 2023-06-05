import './App.css';
import Header from './Controllers/Header';
import Landing from './Controllers/Landing';
import Introduction from './Controllers/Introduction';
import Skills from './Controllers/Skills';
import Projects from './Controllers/Projects';
import Contact from './Controllers/Contact';
import Navigation from './Controllers/Navigation';
import Main from './Controllers/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main main={"main"}>
        <Landing/>
        <Introduction/> 
        <Skills/>
        <Projects/>
        <Contact/>
      </Main>
    </div>
  );
}

export default App;
